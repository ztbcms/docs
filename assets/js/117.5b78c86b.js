(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{483:function(t,r,a){"use strict";a.r(r);var e=a(44),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("h5",{attrs:{id:"_1-创建导入导出任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建导入导出任务"}},[t._v("#")]),t._v(" 1.创建导入导出任务")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/0dc859c7-6959-4412-90ff-43177c65e09a.png",alt:"图片"}})]),t._v(" "),a("h5",{attrs:{id:"_2-设置筛选条件-设置字段映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置筛选条件-设置字段映射"}},[t._v("#")]),t._v(" 2. 设置筛选条件/设置字段映射")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/18f0b7e1-3ae3-474f-9936-630947fcce75.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("NOTE： 过滤处理器，就是把该单元格的原来的值进行二次处理。如导出时，内部表的inputtime用时间戳表示创建时间，然而\n导出到Excel需要转换成"),a("code",[t._v("年月日 时:分:秒")]),t._v("的格式。因此表中的值不能直接输出，而是需要过滤处理格式化，进而输出结果。")]),t._v(" "),a("p",[t._v("自定义过滤处理器方法可以直接参考"),a("code",[t._v("Transport/FieldFilter/")]),t._v("下的例子。其中关键点是：")]),t._v(" "),a("ol",[a("li",[t._v("所有的字段过滤器都"),a("strong",[t._v("必须")]),t._v("放置在"),a("code",[t._v("Transport/FieldFilter/")]),t._v("目录下")]),t._v(" "),a("li",[t._v("继承类"),a("code",[t._v("Transport\\Core\\FieldFilter;")])])]),t._v(" "),a("h5",{attrs:{id:"_3-执行任务、预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行任务、预览"}},[t._v("#")]),t._v(" 3. 执行任务、预览")]),t._v(" "),a("p",[t._v("1.选择任务，创建执行日志\n"),a("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/0d6a048a-ed88-4ea6-a7ad-417f19195e30.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("2.创建执行日志，如果是导入则上传Excel文件\n"),a("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/ce61851b-83ac-4437-8198-28322a014962.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("3.预览和执行")]),t._v(" "),a("p",[t._v("建议：先预览，看是否对应，然后再执行\n"),a("img",{attrs:{src:"https://dn-coding-net-production-pp.qbox.me/547f1e8a-2892-4160-8baa-bb6f16f8b255.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"更进一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更进一步"}},[t._v("#")]),t._v(" 更进一步")]),t._v(" "),a("p",[t._v("上述只是制定了静态的导出方案，无法实现动态导出，例如我只想导出"),a("code",[t._v("userid=$userid")]),t._v("的用户数据，其中$userid为变量，上诉无法满足需求。")]),t._v(" "),a("p",[t._v("解决方案：支持代码级别的设置，请参考"),a("code",[t._v("Transport\\Controller\\ExportController:classlist()")]),t._v("的实现")])])}),[],!1,null,null,null);r.default=s.exports}}]);