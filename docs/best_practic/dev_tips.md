## 开发小Tips汇总
> 很小但很有用

### 模块

CMS没有预装任何模块，一般需要到用户系统的应该先安装会员中心模块。不需要的模块可以手动删除

### 自定义success、error页面

举例（以自定义Content模块）： 

1.在需要自定的模块中`Conf/config.php`中添加

```
'TMPL_ACTION_ERROR' => APP_PATH . 'Content/View/error.php', // 默认错误跳转对应的模板文件
'TMPL_ACTION_SUCCESS' => APP_PATH . 'Content/View/success.php', // 默认成功跳转对应的模板文件
```

2.然后在Content模块中的View中新增`error.php`和`success.php`


### 更换后台iconfont

CMS采用了`http://www.iconfont.cn/`上提供的iconfont,可以现在该网站生成iconfont字体后替换
`/statics/css/default_iconfont.css`内容


### 栏目列表页:如何自定义搜索条件?

如果需要自定义栏目上搜索条件，首先的建议就是新建一个栏目后台信息列表模板

![图片](https://dn-coding-net-production-pp.qbox.me/cfe76b28-c200-44ec-85ec-84070ed419a1.png) 

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




