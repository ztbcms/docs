## 开发小Tip汇总
> 很小但很有用

### 模块

CMS没有预装任何模块，一般需要到用户系统的应该先安装会员中心模块。不需要的模块可以手动删除

### 自定义success、error页面

举例（以自定义Content模块）： 

1. 在需要自定的模块中`Conf/config.php`中添加

```
'TMPL_ACTION_ERROR' => APP_PATH . 'Content/View/error.php', // 默认错误跳转对应的模板文件
'TMPL_ACTION_SUCCESS' => APP_PATH . 'Content/View/success.php', // 默认成功跳转对应的模板文件
```

2. 然后在Content模块中的View中新增`error.php`和`success.php`


### 更换后台iconfont

CMS采用了`http://www.iconfont.cn/`上提供的iconfont,可以现在该网站生成iconfont字体后替换
`/statics/css/default_iconfont.css`内容
