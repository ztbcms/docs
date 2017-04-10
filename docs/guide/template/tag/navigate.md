## navigate导航标签 

标签:`<navigate/>` 

作用：获取内容模型当前位置

用法示例：

```html
<navigate catid="$catid" space=" &gt; " />
```

### 参数说明

参数	|说明
----- |:-----|
@catid	|栏目id，可以传入数字，也可以传递变量 `$catid`
@space	|分隔符，支持HTML代码（不支持`>`，`<`等特殊符号,可以用[HTML转义符][1]代替
@blank	|是否新窗口打开
@cache	|缓存时间

注意: 在space参数传递过程中，不能出现`<`，`>`这样的字符,但可以用HTML转义符


### 用法示例

在内容页，栏目页可以直接这样使用：

```html
<navigate catid="$catid" space=" &gt; " />
```
在没有$catid参数的页面，需要手动传入栏目ID

```html
<navigate catid="8" space=" &gt; " />
```


### 参考资料

[HTML转义符表][1]

[1]: http://tool.oschina.net/commons?type=2