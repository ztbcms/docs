## position推荐位标签

标签：

```html
<position></position> 
```

用法示例

```html
<position action="position" posid="1"> .. HTML ..</position>
```

### 公用参数

参数	|说明
----- |:-----|
@cache	|数据缓存时间，单位秒
@return	|返回值变量名称，默认data
@where	|sql语句的where部分

### 获取推荐位数据

参数	|说明
----- |:-----|
@posid	|推荐位ID(必填)
@catid	|调用栏目ID
@thumb	|是否仅必须缩略图，1是，0不是
@order	|排序
@num	|每次返回数据量

用法示例：

```html 
<position action="position" posid="1">
循环推荐位里的数据，默认返回值是 data，默认情况下有以下基本数据
    <volist name="data" id="vo">
    标题：{$vo.data.title}
    链接：{$vo.data.url}
    其他的字段，需要在模型里面设置字段的“在推荐位标签中调用”设置为是，就可以调用拉。
    </volist>
</position>
```