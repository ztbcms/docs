<center><h2>常用变量</h2></center>
<ul>
    <li>网站配置</li>
    <li>模块静态资源目录</li>
    <li>栏目相关信息获取</li>
    <li>在栏目页中常用的变量</li>
    <li>在内容页面常用的变量</li>
    <li>JS全局变量</li>
    <li>在内容页，进行点击数更新</li>
    <li>在内容页调用评论</li>
</ul>


### 网站配置

网站配置信息，例如网站配置：{$config.siteurl}
以下是各个变量所对应的名称：
> $config.siteurl 站点的http地址 </br>
> $config.sitename 站点名称 </br>
> $config.sitefileurl 附近访问地址前缀 </br>
> $config.siteemail 站点邮箱 </br>
> $config.siteinfo 网站简介 </br>
> $config.sitekeywords 网站关键字 </br>
> $config.theme 网站主题风格名称

##### 注意：在模板中可以用{$config.xx}方式，在php代码中可以用$config['xx']方式来使用这些变量

### 模块静态资源目录

> 这是一个模块的静态资源存放目录地址，例如Member模块，那么它的静态资源目录就是{$config_siteurl}/static/extres/member/，即是http://您的网站地址/statics/extres/member/，也就等于{$model_extresdir}标签了

### 栏目相关信息获取

> 7是指栏目ID，可以使用变量$catid </br>
栏目名称：{:getCategory(7, 'catname')} </br>
栏目类型: {:getCategory(7, 'type')} </br>
栏目所属模型ID：{:getCategory(7,'modelid')} </br>
父栏目ID：{:getCategory(7,'parentid')} </br>
所有父栏目ID列表：{:getCategory(7,'arrparentid')} </br>
是否存在子栏目：{:getCategory(7,'child')} </br>
所有子栏目列表：{:getCategory(7,'arrchildid')} </br>
栏目图片：{:getCategory(7,'image')} </br>
栏目描述：{:getCategory(7,'description')} </br>
栏目目录：{:getCategory(7,'catdir')} </br>
栏目父目录：{:getCategory(7,'parentdir')} </br>
栏目地址：{:getCategory(7,'url')} </br>
栏目是否显示：{:getCategory(7,'ismenu')} </br>
栏目拼音：{:getCategory(7,'letter')} </br>

### 在栏目页中常用的变量

> 栏目ID：{$catid}

### 在内容页面常用的变量
> 信息ID：{$id} </br>
 栏目ID：{$catid}

### JS全局变量
> <script type="text/javascript"> </br>
> var GV = { </br>
> &emsp;&emsp;DIMAUB: "{$config.siteurl}", </br>
> &emsp;&emsp;JS_ROOT: "{$config.siteurl}statics/js/" </br>
> }; </br>
> </script>

### 在内容页，进行点击数更新
> $(function(){ </br>
&emsp;&emsp;//点击 </br>
&emsp;&emsp;$.get("{$config.siteurl}api.php?m=Hits&catid={$catid}&id={$id}", function (data) { </br>
&emsp;&emsp;$("#hits").html(data.views); </br>
&emsp;&emsp;}, "json"); </br>
});

### 在内容页调用评论
> //评论,页面中，必须有包含id="ds-reset"的HTML节点，</br>
例如： &lt;div id="ds-reset"></div>

> var commentsQuery = { </br>
&emsp;&emsp;'catid': '{$catid}', </br>
&emsp;&emsp;'id': '{$id}', </br>
&emsp;&emsp;'size': 10 </br>
}; </br>
(function () { </br>
&emsp;&emsp;var ds = document.createElement('script'); </br>
&emsp;&emsp;ds.type = 'text/javascript'; </br>
&emsp;&emsp;ds.async = true; </br>
&emsp;&emsp;ds.src = GV.DIMAUB+'statics/js/comment/embed.js'; </br>
&emsp;&emsp;ds.charset = 'UTF-8'; </br>
&emsp;&emsp;(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds); </br>
})();
