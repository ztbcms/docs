### 基本使用

##### 1.创建导入导出任务

 ![图片](https://dn-coding-net-production-pp.qbox.me/0dc859c7-6959-4412-90ff-43177c65e09a.png) 

##### 2. 设置筛选条件/设置字段映射

 ![图片](https://dn-coding-net-production-pp.qbox.me/18f0b7e1-3ae3-474f-9936-630947fcce75.png) 

 NOTE： 过滤处理器，就是把该单元格的原来的值进行二次处理。如导出时，内部表的inputtime用时间戳表示创建时间，然而
 导出到Excel需要转换成`年月日 时:分:秒`的格式。因此表中的值不能直接输出，而是需要过滤处理格式化，进而输出结果。

 自定义过滤处理器方法可以直接参考`Transport/FieldFilter/`下的例子。其中关键点是：

 1. 所有的字段过滤器都**必须**放置在`Transport/FieldFilter/`目录下
 2. 继承类`Transport\Core\FieldFilter;`

##### 3. 执行任务、预览

1.选择任务，创建执行日志
![图片](https://dn-coding-net-production-pp.qbox.me/0d6a048a-ed88-4ea6-a7ad-417f19195e30.png) 

2.创建执行日志，如果是导入则上传Excel文件
![图片](https://dn-coding-net-production-pp.qbox.me/ce61851b-83ac-4437-8198-28322a014962.png) 

3.预览和执行

建议：先预览，看是否对应，然后再执行
![图片](https://dn-coding-net-production-pp.qbox.me/547f1e8a-2892-4160-8baa-bb6f16f8b255.png) 