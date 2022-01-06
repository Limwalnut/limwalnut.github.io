# Vue 2.0 响应式原理
## Object.defineProperty语法

ES5语法中，defineProperty方法可以用于在一个对象上定义一个新属性或者修改一个对象的现有属性，并且返回该对象。

#### 语法

```javascript
Object.defineProperty(obj, prop, descriptor)
```

#### 参数

> obj: 要在其上定义属性的对象。
>
> prop:  要定义或修改的属性的名称。
>
> descriptor: 要被定义或修改的属性的描述符，分为**数据描述符和存取描述符**

```javascript
var obj = {};
Object.defineProperty(obj, "name", {
      value: "Jack"      //就是value值
      writable: true        //是否允许赋值   
	  configurable: true    //是否允许删除
  	enumerable: true      //是否允许枚举
    
      get() {}    //获取的return的值
   	 set(newVal) {}    //修改的时候执行  newVal就是最新的值
});
//  为obj对象添加 name 属性， 值为 Jack
```

* 数据描述符和存取描述符都可以拥有：

  **configurable**：能否改变和删除，默认false

  **enumerable**：能否在对象的枚举属性中，默认false

* 数据描述符：

  **value**：该属性对应的值，默认undefined

  **writable**：该属性能否被赋值运算符改变，默认false

* 存取描述符：

  **get**：一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。

  **set**：一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。

  > 属性描述符必须是数据描述符或者存取描述符两种形式之一，不能同时是两者。

## 使用defineProperty实现双向数据绑定

在Vue2 中，双向数据绑定是通过对数据的劫持监听实现的，其原理是设置一个监听器`Observer`，用来监听所有属性，如果属性发生了改变，就需要将这个改变通知给订阅者 `Watcher`，再在`Watcher`中判断是否需要更新。因为在实际项目中，订阅者必定会有多个，这就需要一个消息订阅器`Dep`来专门收集这些订阅者，然后在监听器`Observer`和订阅者`Watcher`之间进行统一管理的。

### 让数据对象变得“可观测”

```javascript
	/**
	 * 把一个对象的每一项都转化成可观测对象
	 * @param { Object } obj 对象
	 */
	function observable (obj) {
		if (!obj || typeof obj !== 'object') {
        	return;
    	}
		let keys = Object.keys(obj);
		keys.forEach((key) =>{
			defineReactive(obj,key,obj[key])
		})
		return obj;
	}
	/**
	 * 使一个对象转化成可观测对象
	 * @param { Object } obj 对象
	 * @param { String } key 对象的key
	 * @param { Any } val 对象的某个key的值
	 */
	function defineReactive (obj,key,val) {
		let dep = new Dep();
		Object.defineProperty(obj, key, {
			get(){
				dep.depend();
				console.log(`${key}属性被读取了`);
				return val;
			},
			set(newVal){
				val = newVal;
				console.log(`${key}属性被修改了`);
				dep.notify()                    //数据变化通知所有订阅者
			}
		})
	}

```

### 创建消息订阅器Dep:

```javascript
	class Dep {
		constructor(){
			this.subs = []
		}
		//增加订阅者
		addSub(sub){
			this.subs.push(sub);
		}
        //判断是否增加订阅者
		depend () {
		    if (Dep.target) {
		     	this.addSub(Dep.target)
		    }
		}
		//通知订阅者更新
		notify(){
			this.subs.forEach((sub) =>{
				sub.update()
			})
		}
	}
	Dep.target = null;
```

Dep有一个静态属性 `target`，这是一个全局唯一 的`Watcher`，这是一个非常巧妙的设计，因为在同一时间只能有一个全局的 `Watcher` 被计算

```javascript
// Watcher
class Watcher {
		constructor(vm,exp,cb){
		    this.vm = vm;
		    this.exp = exp;
		    this.cb = cb;
		    this.value = this.get();  // 将自己添加到订阅器的操作
		}
		get(){
			Dep.target = this;  // 缓存自己
        	let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
        	Dep.target = null;  // 释放自己
        	return value;
		}
		update(){
			let value = this.vm.data[this.exp];
        	let oldVal = this.value;
        	if (value !== oldVal) {
                this.value = value;
                this.cb.call(this.vm, value, oldVal);
			}
	}
}
```

>  vm:一个Vue的实例对象；
>  exp:是`node`节点的`v-model`或`v-on：click`等指令的属性值。如`v-model="name"`，`exp`就是`name`;
>  cb:是`Watcher`绑定的更新函数;

当我们去实例化一个渲染 `watcher` 的时候，首先进入 `watcher` 的构造函数逻辑，就会执行它的 `this.get()` 方法，进入 `get` 函数，首先会执行：

```javascript
Dep.target = this;  // 缓存自己
```

实际上就是把 `Dep.target` 赋值为当前的渲染 `watcher` ,接着又执行了：

```javascript
let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
```

在这个过程中会对 `vm` 上的数据访问，其实就是为了触发数据对象的` getter`。

每个对象值的 `getter `都持有一个 `dep`，在触发 `getter` 的时候会调用 `dep.depend()` 方法，也就会执行` this.addSub(Dep.target)`,即把当前的 `watcher` 订阅到这个数据持有的 `dep` 的 `subs` 中，这个目的是为后续数据变化时候能通知到哪些 `subs` 做准备。

这样实际上已经完成了一个依赖收集的过程。那么到这里就结束了吗？其实并没有，完成依赖收集后，还需要把 `Dep.target` 恢复成上一个状态，即：

```javascript
Dep.target = null;  // 释放自己
```

因为当前`vm`的数据依赖收集已经完成，那么对应的渲染`Dep.target` 也需要改变。

而`update()`函数是用来当数据发生变化时调用`Watcher`自身的更新函数进行更新的操作。先通过`let value = this.vm.data[this.exp];`获取到最新的数据,然后将其与之前`get()`获得的旧数据进行比较，如果不一样，则调用更新函数`cb`进行更新。

至此，简单的订阅者`Watcher`设计完毕。
