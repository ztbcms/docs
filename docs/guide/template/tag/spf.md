## spf模块扩展标签 

标签：

```html 
<spf></spf> 
```

作用：调用非系统内置标签，例如安装新模块后，例如新模块（Demo）目录下`TagLib/DemoTagLib.class.php`(类名为`DemoTagLib`)

用法示例：
```
<spf module="Demo" action="lists"> .. HTML ..</spf>
（lists表示类DemoTagLib中一个public方法。）
```

特别说明：

除了标注是必填参数外，其它参数要看对应标签处理程序是否支持！

### 参数说明：

参数	|说明
----- |:-----|
@module	|对应模块（必填）
@action	|调用方法（必填）
@page	|当前分页号，默认$page，当传入该参数表示启用分页，一个页面只允许有一个page，多个标签使用多个page会造成不可预知的问题。
@num	|每次返回数据量
@cache	|数据缓存时间，单位秒。
@pagefun	|分页函数，默认page。
@pagetp	|分页模板，必须是变量传递。
@return	|返回值变量名称，默认data。
