## 常用变量


### 网站配置

网站配置信息，例如网站配置：{$config.siteurl}
以下是各个变量所对应的名称：

```
$config.siteurl 站点的http地址 
$config.sitename 站点名称 
$config.sitefileurl 附近访问地址前缀 
$config.siteemail 站点邮箱 
$config.siteinfo 网站简介 
$config.sitekeywords 网站关键字 
$config.theme 网站主题风格名称
```

##### 注意：在模板中可以用{$config.xx}方式，在php代码中可以用$config['xx']方式来使用这些变量

### 模块静态资源目录

这是一个模块的静态资源存放目录地址，例如Member模块，那么它的静态资源目录就是{$config_siteurl}/static/extres/member/，即是http://您的网站地址/statics/extres/member/，也就等于{$model_extresdir}标签了

### 栏目相关信息获取

```
// 7是指栏目ID，可以使用变量$catid 
栏目名称：{:getCategory(7, 'catname')} 
栏目类型: {:getCategory(7, 'type')} 
栏目所属模型ID：{:getCategory(7,'modelid')} 
父栏目ID：{:getCategory(7,'parentid')} 
所有父栏目ID列表：{:getCategory(7,'arrparentid')} 
是否存在子栏目：{:getCategory(7,'child')} 
所有子栏目列表：{:getCategory(7,'arrchildid')} 
栏目图片：{:getCategory(7,'image')} 
栏目描述：{:getCategory(7,'description')} 
栏目目录：{:getCategory(7,'catdir')} 
栏目父目录：{:getCategory(7,'parentdir')} 
栏目地址：{:getCategory(7,'url')} 
栏目是否显示：{:getCategory(7,'ismenu')} 
栏目拼音：{:getCategory(7,'letter')} 
```

### 在栏目页中常用的变量

```
栏目ID：{$catid}
```

### 在内容页面常用的变量

```
信息ID：{$id} 
栏目ID：{$catid}
 ```

### JS全局变量

```js
<script type="text/javascript">
 var GV = { 
  "{$config.siteurl}", 
  "{$config.siteurl}statics/js/" 
 }; 
 </script>
```

### 在内容页，进行点击数更新

```js
$(function(){ 
    //点击 
    $.get("{$config.siteurl}api.php?m=Hits&catid={$catid}&id={$id}", function (data) { 
    $("#hits").html(data.views); 
    }, "json"); 
});
```

### 在内容页调用评论

评论,页面中，必须有包含id="ds-reset"的HTML节点，例如： 

```html
<div id="ds-reset"></div>
```

```js
var commentsQuery = { 
    'catid': '{$catid}', 
    'id': '{$id}', 
    'size': 10 
    }; 
    (function () { 
    var ds = document.createElement('script'); 
    ds.type = 'text/javascript'; 
    ds.async = true; 
    ds.src = GV.DIMAUB+'statics/js/comment/embed.js'; 
    ds.charset = 'UTF-8'; 
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds); 
})();
```
