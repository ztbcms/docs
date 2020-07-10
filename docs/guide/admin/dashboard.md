## 后台框架页使用及二开

页面分为4部分: 
- 1.左侧菜单栏
- 2.顶部栏
- 3.tag栏
- 4.内容页

![UTOOLS1594371731548.png](https://user-gold-cdn.xitu.io/2020/7/10/17337f5f26051d82?w=1918&h=927&f=png&s=151352)

### 页面权限：功能按权限显示

`hasRolePermission()`用于检测当前登录用户是否有权限访问路由。请参考页面中的『缓存清理』功能实现。

![图片](https://dn-coding-net-production-pp.codehub.cn/988b5094-4b3b-4869-9d29-c7635bcd5386.png)


### 页面操作

1.打开新窗口
```js

//方法1.直接调用(兼容性差)

parent.window.__adminOpenNewFrame({
    title: '概览',
    url: '/Main/Index/index'
})

//方法2. 封装后再调用
window.openNewIframe = function (title, url) {
    if (parent.window != window) {
        parent.window.__adminOpenNewFrame({
            title: title,
            url: url
        })
    } else {
        window.location.href = url;
    }
}.bind(this)

//调用
window.openNewIframe('概览','/Main/Index/index');

//方法3 底层实现方法,使用事件触发
const event = new CustomEvent('adminOpenNewFrame', {
  detail: {
    title: '启动父窗口1', 
    url: '/Main/Index/index'
  }
})
window.parent.dispatchEvent(event)

// 方法4(推荐) `/statics/js/ztbcms/ztbcms.js`中已经封装好了，只要引入即可
ztbcms.openNewIframeByUrl('概览', '/Main/Index/index')
ztbcms.openNewIframeByUrl('百度', 'https://baidu.com')
```

3. 图标配置

到iconfont.cn选取icon,用的是svg
![图片](https://dn-coding-net-production-pp.codehub.cn/c02721e8-2d56-4407-8e59-8101e6f3fe1b.png)

在dashborad.php 引入js
![图片](https://dn-coding-net-production-pp.codehub.cn/8b6dea28-655d-4dc0-9525-848ab9452635.png)

设置菜单的icon
![图片](https://dn-coding-net-production-pp.codehub.cn/f856614b-fcbe-40f6-9f47-b332c34852dd.png)