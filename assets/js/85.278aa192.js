(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{454:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/ztbcms/ztbcms-Queue",target:"_blank",rel:"noopener noreferrer"}},[s._v("任务队列"),a("OutboundLink")],1),s._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/release/ztbcms/ztbcms-Queue.svg?maxAge=36000",alt:"version"}})]),s._v(" "),a("p",[s._v("任务队列适用后台长时间，批量、异步执行任务，如邮件、短信发送，每日生成报表等。")]),s._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("1.创建任务")]),s._v(" "),a("p",[s._v("要点：继承 "),a("code",[s._v("Queue\\Libs\\Job")]),s._v(" 并实现"),a("code",[s._v("handle()")]),s._v("方法")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("Queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Libs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UpdateJob")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Job")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义 你的Job数据  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意：必须为public,否则不保存该数据！")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//利用初始化函数导入数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("userid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("username")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现handle()")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//your code")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("2.把任务推送到指定队列中")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$job")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UpdateJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'ztbcms'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$queue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Queue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$queue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'high'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注: high即为队列名")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//或者延迟小时执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$queue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'high'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注: 第三个参数即为延迟执行时长，单位：秒")]),s._v("\n")])])]),a("h3",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h4",{attrs:{id:"_1-简单部署-本地测试时可以选择这种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单部署-本地测试时可以选择这种方式"}},[s._v("#")]),s._v(" 1.简单部署，本地测试时可以选择这种方式")]),s._v(" "),a("p",[s._v("1.1. 启动队列")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ php index.php /queue/worker/run/queue/high,mid,low\n")])])]),a("p",[s._v("上述命令监听了3个名为high,mid,low的队列。路由解析方式跟TP重写URL原理一样，"),a("code",[s._v("/queue/worker/run")]),s._v("分别对应Module,Controller,Action,后面则是key-value的\n参数")]),s._v(" "),a("p",[s._v("1.2. 平滑停止")]),s._v(" "),a("blockquote",[a("p",[s._v("即运行完当前的任务就退出当前队列")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ php index.php /queue/worker/stop\n")])])]),a("h4",{attrs:{id:"_3-更稳定-多进程部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-更稳定-多进程部署"}},[s._v("#")]),s._v(" 3. 更稳定，多进程部署")]),s._v(" "),a("p",[s._v("使用进程管理软件进行配置。如:"),a("a",{attrs:{href:"http://supervisord.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("supervisor"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"http://pm2.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PM2"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),a("h4",{attrs:{id:"_0-根据业务调整配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-根据业务调整配置"}},[s._v("#")]),s._v(" 0.根据业务调整配置")]),s._v(" "),a("p",[a("code",[s._v("Queue/Confi/config.php")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'QUEUE_SLEEP'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//队列空闲时，休眠时间")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'QUEUE_MAX_RETRY'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//最大重试次数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("若日常队列任务不多，"),a("code",[s._v("QUEUE_SLEEP")]),s._v("可以适当延长")]),s._v(" "),a("h4",{attrs:{id:"_1-定期删除已完成任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定期删除已完成任务"}},[s._v("#")]),s._v(" 1.定期删除已完成任务")]),s._v(" "),a("p",[s._v("安装[计划任务模块]，添加计划任务"),a("code",[s._v("Queue\\DeleteFinishJob")]),s._v("，推荐每日执行一次，每次删除7日前的已完成的任务。当然，可以根据你的业务逻辑调整其执行频率。")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" DeleteFinishJob "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cron")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cronId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hour")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除X小时前已完成的任务，你可以")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//....")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);