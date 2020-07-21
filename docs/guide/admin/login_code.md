# 管理后台登录页安全码校验

> 通过设置安全码，从而达到隐藏登录页的效果，保证页面的私有性。

`/app/Application/Admin/Conf/config.php`
```php
return array(
    'LOGIN_MAX_FAILD' => 5,
    'BAN_LOGIN_TIME' => 30, //登录失败5次之后需等待30分钟才可再次登录
    'ADMIN_PANEL_SECURITY_CODE' => '你的安全码', //后台面板安全码
);
```

访问 `http://a.com/admin/public/login/code/{你的安全码}` 即可。
