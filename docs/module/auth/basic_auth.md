# 通用授权
> 使用场景：用户在微信端调用接口登录，登录后进行购物等操作。这个模块就是用于处理登录时获取访问凭证access_token,调用接口时校验访问凭证access_token


# 使用说明

## 1.登录

请访问接口 `/Auth/login/web`,

## 2.鉴权

参考`Auth\Controller\TestAuthController`的实现。或直接继承`Auth\Controller\AuthorizedController`即可

