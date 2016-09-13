## get标签 

标签：

```html
<get></get>
```

作用：特殊标签，SQL查询标签

用法示例A：

```html
<get sql="SELECT * FROM shuipfcms_article  WHERE status=99 ORDER BY inputtime DESC" page="$page" num="5"> .. HTML ..</get> 
```

用法示例B：

```html
<get table="article" status="99" order="inputtime DESC" where="其它where部分条件" page="$page" num="5">.. HTML ..</get>
```

### 参数说明

参数	|说明
----- |:-----|
@sql	|SQL语句，强烈建议只用于select类型语句，其他SQL有严重安全威胁，同时不建议直接在SQL语句中使用外部变量，如:$_GET,$_POST等。出现“>”，“<”这类，建议使用{gt}代替>，{lt}代替<，{neq}代替<>，{elt}代替<=，{egt}代替>=
@page	|当前分页号，默认$page，当传入该参数表示启用分页，一个页面只允许有一个page，多个标签使用多个page会造成不可预知的问题
@num	|每次返回数据量
@cache	|数据缓存时间，单位秒
@return	|返回值变量名称，默认data
@pagefun	|分页函数，默认page()
@pagetp	|分页模板
@table	|表名，不用填写表前缀，当存在@table参数时，忽略@sql参数
@order	|排序参数，只有配合@table参数有效
@where	|SQL的where部分条件，只有配合@table参数有效

### 普通SQL查询示例

```html
<get sql="SELECT * FROM shuipfcms_article  WHERE status=99 ORDER BY inputtime DESC" page="$page" num="5">
表前缀可以使用shuipfcms代替，系统会自动替换为你安装时所设置的表前缀！
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
    分页：{$pages}
</get>
使用@table参数的查询示例

<get table="article" status="99" order="inputtime DESC" page="$page" num="5">
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
    分页：{$pages}
</get>
```

### 比较复杂的示例


```php
<?php
$sql = 'SELECT * FROM shuipfcms_article  WHERE status=99 ';
//接受外部数据
$_catid = I('get.classid',0,'intval');
if($_catid){
    $sql .= " `catid` = '{$_catid}' ";
}
$sql .= ' ORDER BY inputtime DESC';
?>
<get sql="$sql" page="$page" num="5">
表前缀可以使用shuipfcms代替，系统会自动替换为你安装时所设置的表前缀！
循环列表，默认返回数据是$data
    <ul>
        <volist name="data" id="vo">
            <li>标题：{$vo.title}，地址：{$vo.url}</li>
        </volist>
    </ul>
    分页：{$pages}
</get>
````]

### 注意事项

1. sql最好避免直接接受外部数据，会存在SQL注入风险！
2. 请不要使用此标签处理非SELECT类型的查询语句！
3. page="$page" 存在，同样是开启分页，一个页面只允许一个标签开启使用，否则会出现不可预知的问题！
4. 由于历史原因，如果采用第一种直接传入SQL，出现“>”，“<”这类，建议使用{gt}代替>，{lt}代替<，{neq}代替<>，{elt}代替<=，{egt}代替>=。