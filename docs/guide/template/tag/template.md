## template模板引入标签 

标签：
```
<template/>
```

作用：引入其他模板

### 用法示例：

```html
<template file="Member/footer.php"/>
```
### 参数说明

参数	说明
@file	表示需要应用的模板路径。(这里需要说明的是，只能引入当前主题下的模板文件)（必填）

### 用法示例

假设主题：Default

```html
<template file="Content/header.php"/>
```
这个示例是最简单的，引入header.php这个模板！

### 注意事项

首先，CMS前台模板结构是 `主题/各个模块目录/具体的模板页面` 这种结构！`template`标签只能当前主题下的任何模板。

所以`Content/header.php` 表示的就是 `Default`主题下`Content`目录下的`header.php`模板！
如果你真的很想很想引入其他主题下模板，可以使用下面的方法： `include` 标签，该标签可以引入任何模板文件

用法：

```html
<include file="完整模板文件名" /> 
```

用法示例：

```html
<include file="./app/Template/Default/Content/header.php" />
```

需要注意的地方是，file中的地址是以网站根目录下开始的