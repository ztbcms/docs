## 支付配置

### alipay_public_key
 ![图片](https://dn-coding-net-production-pp.qbox.me/b0ff25dc-0fe0-4669-a8be-f27abc4e8630.png) 

### private_key
 ![图片](https://dn-coding-net-production-pp.qbox.me/711293cb-fa8e-4edb-8c1b-2137b3a1e96b.png) 

### partner
商户UID，如果是正式应用，可用在【我的应用】=》【应用】中找到对应的信息。

### app_id
就是对应的创建的应用的id。图中有很醒目的字标记。

### sign_type 
请求支付时，数据加密的方式，目前支持RSA2和RSA，推荐使用RSA2。你完全不用管签名的实现，只需要这里做一下配置就好。


 ![图片](https://dn-coding-net-production-pp.qbox.me/26b7c1b5-3456-4d3f-913e-4b21bcb73e0a.png)

## 支付回调

### 不可以使用U方法,URL不能含有query参数(如`?`，`&`),只能填写路径

![图片](https://dn-coding-net-production-pp.qbox.me/6d0636c3-30a7-4ea5-8231-9b91a917d29c.png)


## 用户授权需注意
1.  需要授权的权限
例如：这里只写auth_userinfo的话，拿到的access_token只能用来获取用户信息，无法获取到芝麻分的

 ![图片](https://dn-coding-net-production-pp.qbox.me/e6dde51c-0672-48bf-9e24-6166b34954d8.png) 

 ![图片](https://dn-coding-net-production-pp.qbox.me/036e0d6f-0624-4b48-aa6c-31e093af7778.png)
