- 获取栏目相关信息：getCategory
- 获取模型数据：getModel
- 生成缩略图：thumb
- 字符截取：str_cut
- 获取点击数：hits
- 标题链接获取：titleurl
- 获取文章评论总数：commcount
- 生成标题样式：title_style
- 获取栏目相关信息：getCategory

### 获取栏目相关信息：getCategory

参数    | 说明           
----- |:-----|
$catid | 栏目id，只支持单个，数值类型，必填 
$field | 需要返回的栏目字段，例如；catname,如果为空，将以数组的形式返回全部参数。
$newCache | 是否使用缓存，默认false，布尔值

参数	说明
$catid	| 栏目id，只支持单个，数值类型，必填
$field	| 需要返回的栏目字段，例如；catname,如果为空，将以数组的形式返回全部参数。
$newCache	| 是否使用缓存，默认false，布尔值

### 获取模型数据：getModel

参数    | 说明           
----- |:-----|
$modelid	| 模型ID，必填项
$field	| 需要返回的模型字段，例如：tablename，如果为空，将以数组的形式返回全部参数。

### 生成缩略图：thumb

参数    | 说明           
----- |:-----|
$imgurl	| 图片地址
$width	| 缩略图宽度，默认100
$height	| 缩略图高度，默认100
$thumbType	| 缩略图生成方式 1 按设置大小截取 0 按原图等比例缩略，默认0
$smallpic	| 图片不存在时显示默认图片，默认nopic.gif

注意：图片路径要正确，必须是站内图片！

模板中用法： {:thumb('/statics/images/rss.png')}

### 字符截取：str_cut

参数    | 说明           
----- |:-----|
$string	| 需要截取的字符串
$length	| 长度
$dot	| 当长度超出时显示的字符，默认 ...

模板中用法： {$vo.title|str_cut=###,100} 或者 {:str_cut($vo['title'],100)}

### 获取点击数：hits

参数    | 说明           
----- |:-----|
$catid	| 栏目ID
$id	| 信息ID

模板中用法：{:hits($catid,$id)} 或者 {:hits(2,255)}

### 标题链接获取：titleurl

参数    | 说明           
----- |:-----|
$catid	| 栏目ID
$id	| 信息ID

### 获取文章评论总数：commcount

参数    | 说明           
----- |:-----|
$catid	| 栏目ID
$id	| 信息ID

模板中用法：{:commcount($catid,$id)} 或者 {:commcount(2,255)}

### 生成标题样式：title_style

参数    | 说明           
----- |:-----|
$style	| 样式，通常时字段style，以“;”隔开，第一个是文字颜色，第二个是否加粗
$html	| 是否显示完整的STYLE样式代码

模板中用法：{:title_style($style)} 或者 {:title_style("#ff0000;bold")}