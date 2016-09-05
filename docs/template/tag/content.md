## content内容标签

content内容标签：`<content></content> `作用：内容模型相关标签，可调用栏目，列表等常用信息

用法示例：

```html
<content action="lists" catid="$catid"  order="id DESC" num="4" page="$page"> .. HTML ..</content> 
```

格式：
```html
<content action="方法名" 参数="内容"> .. HTML ..</content>
```

特别说明：

- `$catid` 变量在列表页，和内容页都表示当前栏目ID。
- `page="$page"` 表示开启分页，每个页面，只允许出现一个，多个会出现未知错误！
- `content` 标签返回的是数组，所以要配合volist标签使用

### 基本参数

参数名称|说明
----- |:-----|
@action	|调用方法（必填）
@page	|当前分页号，默认`$page`，当传入该参数表示启用分页，一个页面只允许有一个page
@num	|每次返回数据量。
@catid	|栏目id（必填），列表页，内容页可以使用 $catid 获取当前栏目。
公用参数

参数名称|说明
----- |:-----|
@cache	|数据缓存时间，单位秒
@return	|返回值变量名称，默认data
@pagefun	|分页函数，默认page()
@pagetp	|分页模板
@where	|设置SQL where 部分。说明：出现`>`，`<`这类，建议使用`{gt}`代替`>`，`{lt}`代替`<`，`{neq}`代替`<>`，`{elt}`代替`<=`，`{egt}`代替`>=`。建议直接传入变量。

下面的参数，是根据@action参数不同，而独有的

### 调用栏目信息列表

当`@action`为lists时，调用栏目信息列表

用法示例：

```html
<content action="lists" catid="$catid"  order="id DESC" num="4" page="$page"> .. HTML ..</content>
```

参数名称|说明
----- |:-----|
@order	|排序，例如“id DESC”
@where	|sql语句的where部分 例如：thumb != '' AND status = 99
@thumb	|是否仅必须缩略图，1为调用带缩略图的
@moreinfo	|是否调用副表数据 1为是
@output	|是否经过ContentOutput处理，例如时间，在除了内容页其他调用，是一串数字，开启这个后就是直接输出日期了。同时，如果开启这个参数后，会增加一个_original参数，可以访问数据库存储的原始内容，例如 $vo['_original']['id']

用法示例：

```html
<content action="lists" catid="$catid"  order="id DESC" num="4" page="$page">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
</content>
```

### 调用点击排行榜

当`@action`为`hits`时，调用点击排行榜

用法格式：

```html
<content action="hits" catid="$catid"  order="weekviews DESC" num="10"> .. HTML ..</content>
```

参数名称|说明
----- |:-----|
@order	|排序，例如“weekviews DESC”
@day	|调用多少天内的排行
@where	|sql语句的where部分。
views |点击总数
yesterdayviews |昨日点击
dayviews |今日点击
weekviews |本周点击
monthviews |本月点击

用法示例：

```html
<content action="hits" catid="$catid"  order="weekviews DESC" num="10">
    循环列表，默认返回数据是`$data`
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
</content>
```

### 调用相关文章

当`@action`为`relation`时，调用相关文章
用法格式：

```html
<content action="relation" relation="$relation" catid="$catid"  order="id DESC" num="5" keywords="$keywords"> .. HTML ..</content>
```

参数名称|说明
----- |:-----|
@nid	|排除id 一般是 $id，排除当前文章
@keywords	|内容页面取值：$keywords，也就是关键字
@relation	|内容页取值$relation，当有$relation时keywords参数失效
@where	|sql语句的where部分

用法示例：

```html
<content action="relation" relation="$relation" catid="$catid"  order="id DESC" num="5" keywords="$keywords">
    循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
</content>
```

### 调用栏目列表

当`@action`为`category`时，调用栏目列表
用法格式：

```html
<content action="category" catid="$catid"  order="listorder ASC" > .. HTML ..</content>
```

参数名称|说明
----- |:-----|
@order	|排序，例如“listorder DESC”
@where	|sql语句的where部分 例如：child = 0

用法示例：

```html
<content action="category" catid="$catid"  order="listorder ASC" >
    循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>栏目标题：{$vo.catname}，地址：{$vo.url}</li>
        </volist>
    </ul>
</content>
```

### 其他一些小技巧

如果要添加where条件，可以这样使用 `where="field='8'"`，如果想在`where`里调用变量，要使用`<?php $sql = "field = '{$id}'"; ?> where="$sql" `这种方式，不可以直接在`where`里使用变量！（注意：为了你的网站安全，不建议直接接受`$_GET`,`$_POST`等不可信数据！）
如果为了性能考虑，可以添加 `cache="3600"` 参数，标识缓存3600秒。这样在动态访问的时候，可以加快！推荐网站开启Memcached缓存。