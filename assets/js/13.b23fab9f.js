(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{399:function(s,t,n){"use strict";n.r(t);var a=n(52),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),n("p",[s._v("macOS系统中自带了python2.7，由于2.7版本较老，并且在2020之后停止维护。因此有必要升级为Python3，但是macOS系统中部分软件是依赖于自带Python2.7的，所以不建议删除之前的老版本，而是让老版本和新版本共存。")]),s._v(" "),n("p",[s._v("通过输入 "),n("code",[s._v("python")]),s._v("指令查看当前版本：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ python\n\nWARNING: Python "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" is not recommended. \nThis version is included "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" macOS "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" compatibility with legacy software. \nFuture versions of macOS will not include Python "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(". \nInstead, it is recommended that you transition to using "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python3'")]),s._v(" from within Terminal.\n")])])]),n("p",[s._v("输入"),n("code",[s._v("python3")]),s._v("查看是否安装Python3")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ python3 \nPython "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".4 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v3.10.4:9d38120e33, Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":29:05"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Clang "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.0")]),s._v(".0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clang-1300.0.29.30"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" on darwin\n")])])]),n("p",[s._v("安装完python3后 会发现在命令行中输入python后 显示的仍然是以前的2.7版本，输入python3后显示的才是3.10版本，如果希望做到输入"),n("code",[s._v("python")]),s._v("命令后 显示当前最新版本3.10版本，需要在 "),n("code",[s._v("~/.bash_profile")]),s._v("文件中添加python 依赖")]),s._v(" "),n("p",[s._v("通过"),n("code",[s._v("which python3")]),s._v("指令查看安装路径")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python3\n/Library/Frameworks/Python.framework/Versions/3.10/bin/python3\n")])])]),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("打开文件\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bash_profile \n\n在.bash_profile中添加以来\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" python "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Library/Frameworks/Python.framework/Versions/3.10/bin/python3"')]),s._v(" \n\n读取并执行 \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bash_profile\n")])])]),n("p",[s._v("届时，再次输入"),n("code",[s._v("python")]),s._v("指令，变换进入python3 环境")])])}),[],!1,null,null,null);t.default=e.exports}}]);