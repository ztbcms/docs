### 栏目列表页:如何自定义搜索条件?

如果需要自定义栏目上搜索条件，首先的建议就是新建一个栏目后台信息列表模板

![图片](https://dn-coding-net-production-pp.qbox.me/cfe76b28-c200-44ec-85ec-84070ed419a1.png) 

默认的搜索条件是：

![图片](https://dn-coding-net-production-pp.qbox.me/6be73617-ab82-4603-9255-66afa0b0e823.png) 


自定义搜索条件有3部分(必须一一对应)： 

1. 搜索的字段(`_filter`) 
2. 操作符(`_operater`)， 参考: [ThinkPHP 3.2-表达式查询](http://document.thinkphp.cn/manual_3_2.html#express_query)
3. 搜索值(`_value`)

CMS中的默认例子：

```html
<section style="display: inline;">
    <!-- 搜索字段 -->
    <select name="_filter[0]" class="select_2">
        <option value="username" <if condition=" $_filter[0] == 'username' "> selected</if>>发布人</option>
        <option value="id" <if condition=" $_filter[0] == 'id' "> selected</if>>用户ID</option>
        <option value="title" <if condition=" $_filter[0] == 'title' "> selected</if>>标题</option>
    </select>
    <!-- 操作符 -->
    <select name="_operater[0]" class="select_2">
        <option value="EQ" <if condition=" $_operater[0] == 'EQ' "> selected</if>>等于</option>
        <option value="NEQ" <if condition=" $_operater[0] == 'NEQ' "> selected</if>>不等于</option>
        <option value="GT" <if condition=" $_operater[0] == 'GT' "> selected</if>>大于</option>
        <option value="EGT" <if condition=" $_operater[0] == 'EGT' "> selected</if>>大于等于</option>
        <option value="LT" <if condition=" $_operater[0] == 'LT' "> selected</if>>小于</option>
        <option value="ELT" <if condition=" $_operater[0] == 'ELT' "> selected</if>>小于等于</option>
        <option value="LIKE" <if condition=" $_operater[0] == 'LIKE' "> selected</if>>模糊查询</option>
    </select>
    <!-- 搜索值 -->
    <input class="input length_2" type="text" name="_value[0]" value="{$_value[0]}">
</section>
```

注意：

1. 若有多个，则继续新增`_filter[1]`,`_operater[1]`, `_value[1]`....如此类推
2. 更复杂的，若不能不足需求，那么请重写`Content/ContentController::classlist`方法

PS：

对于旧版本的用户来说，需要接入这个功能，可以参考修改[源码](https://github.com/ztbcms/ztbcms/commit/b16bcd395eb22c4c3b59d5b452cdf972d889faa1?diff=split)

审计步骤：

1. 修改classlist的搜索实现

`app/Application/Content/Controller/ContentController.class.php` 中替换 `classlist`方法

2. 修改默认列表页的搜索条件

文件：`app/Application/Content/View/Content/classlist.php`，修改成上述CMS的默认例子 