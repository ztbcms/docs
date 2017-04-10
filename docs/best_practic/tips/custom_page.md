### 自定义success、error页面

举例（以自定义Content模块）： 

1.在需要自定的模块中`Conf/config.php`中添加

```
'TMPL_ACTION_ERROR' => APP_PATH . 'Content/View/error.php', // 默认错误跳转对应的模板文件
'TMPL_ACTION_SUCCESS' => APP_PATH . 'Content/View/success.php', // 默认成功跳转对应的模板文件
```

2.然后在Content模块中的View中新增`error.php`和`success.php`
