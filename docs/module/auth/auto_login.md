# 自动登录授权
> 使用场景：用户在安卓APP中已经登录，此时需要访问一个用户已登录才能到达的web页面，我们期望安卓APP已登录的状态，可以无感登录(其实就是自动登录)进入到web页面(把安卓APP的登录状态携带到web网页中)

### 后台 
1. 修改配置文件为前端自动登录页面
![图片](https://dn-coding-net-production-pp.qbox.me/e6812fb8-dfc5-4b0a-ac9e-fe4cf9c5ba8c.png)
2. 修改APP登录接口
![图片](https://dn-coding-net-production-pp.qbox.me/efae2f8f-33e5-4f34-9a9e-0f993e8f0552.png)

### 前端 自动登录页面
1. 获取url上的参数 login_code,redirect
2. 调用接口 http://ztbcms.loc/Auth/AppLogin/loginByLoginCode
3. 登录成功保存access_token,登录失败则不保存
4. 跳转目标页redirect
![图片](https://dn-coding-net-production-pp.qbox.me/c37f5d97-07a9-4036-80b8-c846d31f5ebc.png)

### APP端 自动登录
1. 调用登录接口 http://ztbcms.loc/Auth/AppLogin/appLogin
![图片](https://dn-coding-net-production-pp.qbox.me/f47f956a-7f0b-4fde-ba0a-2e4dee7ec603.png)
2. 缓存数据 userid,access_token,platform
3. 签名，规则请看下面
4. 构造自动登录链接
```
http://ztbcms.loc/Auth/AppLogin/loginRedirect?uid=1&timestamp=1527833183&platform=iOS&redirect=http%3a%2f%2fwww.zhutibang.cn&sign=27e5a7cf706d1a6c06133d8443ebdee6

uid=xxx //用户ID，登陆接口中返回的user_id
timestamp=xxx //创建参数时的时间戳,单位:秒 10位数字，用于判断操作是否超时，目前默认5分钟后过期
platform=xxx //来自哪个平台，安卓端请填写 Android 苹果端请填写 iOS
redirect= //跳转目标页，需要urlencode
sign=xxx //参数签名，规则请看下面
```
5. 跳转到此链接即可完成登录

### 签名规则

假设传送的参数如下：
```
uid：12
timestamp：1527488472
platform：iOS
redirect：http%3a%2f%2fjingshui.front.ztbcms.cn%2f%23%2fcontrol
```

第一步：对参数按照key=value的格式，并按照参数名ASCII字典序排序如下：
```
platform=iOS&redirect=http%3A%2F%2Fjingshui.front.ztbcms.cn%2F%23%2Fcontrol&timestamp=1527488472&uid=12
```
第二步：拼接access_token，access_token为登录接口返回
```
platform=iOS&redirect=http%3A%2F%2Fjingshui.front.ztbcms.cn%2F%23%2Fcontrol&timestamp=1527488472&uid=12&access_token=qydRzZEYq6bPiq58LdgpwoVLCjWAlh9MXiGNFpEGOADv4dXllZhVi7D0zvxNSwn2wlL8XhI5oUXquaP8iVLvErnvpStEAleeGvGTpATZRUhHYXA6DcKUhKCGhmA47hGv
```
第三步：md5，获得签名
```
9583ca6d15af2987960e163a85299f21
```
