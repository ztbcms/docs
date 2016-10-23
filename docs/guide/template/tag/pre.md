## pre上一篇标签 

作用：获取上一篇标签

使用方法：

```html
<pre catid="$catid" id="$id" target="1" msg="已经没有了" />
```

### 参数说明

参数	|说明
----- |:-----|
@catid	|栏目id，可以传入数字,在内容页可以不传
@id	|信息id，可以传入数字,在内容页可以不传
@target	|是否新窗口打开，1 是 0否
@msg	|当没有上一篇时的提示语
@field	返|回指定字段内容，只支持 id,title,url

使用示例

```html
<pre catid="$catid" id="$id" field="url" />
```