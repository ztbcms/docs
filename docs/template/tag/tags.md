## Tags标签 

标签：
```html 
<tags></tags>
```

作用：进行相关Tags数据调用

格式：

```html 
<tags action="方法名" 参数="内容"> 
    .. HTML ..
</tags>
```

用法示例：

```html
<tags action="lists" tag="$tag" num="4" page="$page" order="updatetime DESC"> 
    .. HTML ..
</tags> 
```

### 基本参数

参数	|说明
----- |:-----|
@action	|调用方法（必填）
@page	|当前分页号，默认$page，当传入该参数表示启用分页，一个页面只允许有一个page，多个标签使用多个page会造成不可预知的问题。
@num	|每次返回数据量。

### 公用参数

参数	|说明
----- |:-----|
@cache	|数据缓存时间，单位秒。
@return	|返回值变量名称，默认data
@pagefun	|分页函数，默认page()
@pagetp	|分页模板
@where	|sql语句的where部分 例如：child = 0

### 获取tag标签列表

当@action为lists时，获取tag标签列表

参数	|说明
----- |:-----|
@tag	|标签名，例如：厦门 支持多个，多个用空格或者英文逗号
@tagid	|标签id 多个使用英文逗号隔开
@order	|排序
@num	|每次返回数据量

用法示例：

```html
<tags action="lists" tag="厦门" num="4" order="updatetime DESC">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>tag标签：{$vo.tag}，文章标题：{$vo.title}，文章地址：{$vo.url}</li>
        </volist>
    </ul>
</tags>
```

### 获取tag点击排行榜

当@action为top时，获取tag点击排行榜

参数	|说明
----- |:-----|
@num	|每次返回数据量

用法示例：

```html
<tags action="top"  num="4"  order="tagid DESC">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>tag标签：{$vo.tag}，tag地址：{$vo.url}，点击：{$vo.hits}</li>
        </volist>
    </ul>
</tags>
```