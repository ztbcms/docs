
##blockcache区块缓存标签 

标签：
```html
<blockcache></blockcache> 
```

作用：把一个区域（区块）的数据缓存。
用法示例：

```html
<blockcache cache="3600"></blockcache>
```

### 参数说明

参数	|说明
----- |:-----|
@cache	|缓存时间，单位秒，默认300秒

### 使用示例

场景：有时我们需要使用很复杂的SQL查询，比较费时，为了达到效果，又不得不这样做的时候。

```html
<blockcache cache="3600">
这里执行了一些比较耗时的查询操作。放在blockcache标签里，对结果进行全部缓存。
</blockcache>
```

提示：该标签适合动态访问时使用，静态页面无需使用该标签！