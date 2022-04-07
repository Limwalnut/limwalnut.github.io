(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{401:function(s,a,t){"use strict";t.r(a);var e=t(52),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是npm"}},[s._v("#")]),s._v(" 什么是NPM")]),s._v(" "),t("p",[s._v("NPM 是 Node.js 中的包管理器。允许我们为 Node.js 安装各种模块，这个包管理器为我们提供了安装、删除等其它命令来管理模块。这里有一点我们需要注意，我们必须要有一个 package.json 文件或 node_modules 目录安装模块到本地。")]),s._v(" "),t("p",[s._v("执行命令 "),t("code",[s._v("npm i module -S/D")]),s._v(" 安装模块后，会在本地存储我们所安装的依赖项，存在于 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("dependencies/devDependencies")]),s._v(" 对象里。例如，如果一个模块 X 使用了模块 A 版本为 1.0，模块 Y 使用了模块 A 版本为 1.5，那么模块 X 或 Y 都将在本地拥有自己对应的模块 A 的副本。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块 X")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块 Y")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Y"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.5"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"npm-源设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-源设置"}},[s._v("#")]),s._v(" NPM 源设置")]),s._v(" "),t("p",[s._v("在国内有时候受限于网络因素的影响，通常在安装一个包管理器之前可以切换为"),t("a",{attrs:{href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v(" 淘宝 NPM 镜像"),t("OutboundLink")],1),s._v("，加速安装速度，但是要注意如果是私有模块在 NPM 官方的，则必须切换为官方源，否则会出现 404 错误。")]),s._v(" "),t("p",[t("strong",[s._v("查看当前 npm 源")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://registry.npmjs.org/")]),s._v("\n")])])]),t("p",[t("strong",[s._v("切换为 taobao 源")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npmmirror.com\n")])])]),t("p",[t("strong",[s._v("切换为 npm 官方源")])]),s._v(" "),t("p",[s._v("在 npm publish 的时候 需要切换回 npm 源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://registry.npmjs.org\n")])])]),t("p",[s._v("如果不想全局设置，执行 npm 命令时也可通过参数传递镜像地址 "),t("code",[s._v("npm i module --registry=https://registry.npmmirror.com")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s"}},[s._v("#")]),s._v(" -S")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("即--save（保存）\n包名会被注册在package.json的dependencies里面，在生产环境下这个包的依赖依然存在\n")])])]),t("h2",{attrs:{id:"d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d"}},[s._v("#")]),s._v(" -D")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("即--dev（生产）\n包名会被注册在package.json的devDependencies里面，仅在开发环境下存在的包用-D，如babel，sass-loader这些解析器\n")])])]),t("h2",{attrs:{id:"安装版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装版本"}},[s._v("#")]),s._v(" 安装版本")]),s._v(" "),t("p",[s._v("Package.json中：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"5.0.3",\n"~5.0.3",\n"^5.0.3"\n')])])]),t("p",[s._v("“5.0.3”表示安装指定的5.0.3版本，“～5.0.3”表示安装5.0.X中最新的版本，“^5.0.3”表示安装5.X.X中最新的版本。")]),s._v(" "),t("h2",{attrs:{id:"与yarn对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与yarn对比"}},[s._v("#")]),s._v(" 与Yarn对比")]),s._v(" "),t("ol",[t("li",[s._v("npm是按照队列执行安装任务，yarn为并行安装")]),s._v(" "),t("li",[s._v("离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);