## comment评论标签 

标签：
```html
<comment></comment>
```

作用：评论标签

用法示例：

```html
<comment action="get_comment" catid="$catid" id="$id"> .. HTML ..</comment>
```

### 基本参数

参数	|说明
----- |:-----|
@action	|调用方法（必填）
@catid	|栏目id（必填），列表页，内容页可以使用 $catid 获取当前栏目。

### 公用参数

参数	|说明
----- |:-----|
@cache	|数据缓存时间，单位秒
@return	|返回值变量名称，默认data

### 获取评论总数

当`@action`为`get_comment`时，获取评论总数

参数	|说明
----- |:-----|
@action	|调用方法（必填）
@catid	|栏目id（必填），列表页，内容页可以使用 $catid 获取当前栏目。

获取评论总数建议直接用：`{:commcount($catid,$id)}` 代替

### 获取评论数据

当`@action`为`lists`时，获取评论数据列表

参数	|说明
----- |:-----|
@action	|调用方法（必填）
@catid	|栏目id（必填），列表页，内容页可以使用 $catid 获取当前栏目。
@hot	|排序方式｛0：最新｝
@date	|时间格式 Y-m-d H:i:s A
@where	|sql语句的where部分

用法示例：

```html
<comment action="lists" catid="10" id="30">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>评论用户：{$vo.author}，评论内容：{$vo.content}</li>
        </volist>
    </ul>
</comment>
```

### 获取评论排行榜

参数	|说明
----- |:-----|
@num	|返回信息数

用法示例：

```html
<comment action="bang" num="10">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
</comment>
```