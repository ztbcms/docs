## 表单 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-domains.svg?maxAge=36000)

表单模块是一个可以帮用户快速的创建一个表单，并在前台调用的一个模块。

#### 使用
首先，从ZTBCMS模块仓库中下载好表单模块并安装，从模块管理界面上可以看到

![图片](https://dn-coding-net-production-pp.qbox.me/3aa346bc-b2fa-465c-ba33-c025ed4259ff.png)

添加表单
> 如下图所示，上面要填写的信息包括表单名称、数据表名、表单简介、提交后跳转的地址等信息，需要注意的是，如果设置了不允许游客登录表单的话，那么就需要登录账号才可以调用创建的表单。

![图片](https://dn-coding-net-production-pp.qbox.me/186f075c-4d10-4289-bbe9-f01f9b54355c.png)

> 如下图所示添加一个货物清单的表单，数据信息保存在goods这个数据表中，并且允许游客和一个IP多次调用。

![图片](https://dn-coding-net-production-pp.qbox.me/0565bc6f-56c9-490d-a5bb-d12e8ffde5be.png)

> 如下图是添加好的表单，给这个表单添加字段

![图片](https://dn-coding-net-production-pp.qbox.me/6d8cc122-e343-4c82-9750-3913f2bd2d59.png)

![图片](https://dn-coding-net-production-pp.qbox.me/bf3a1d95-2653-42f6-b6ef-4629456bf367.png)

> 添加完字段之后，就可以在前台进行调用了，调用的方式如下：

![图片](https://dn-coding-net-production-pp.qbox.me/ad41c7b8-d69e-4a17-b4af-2031c46a290d.png)

> 如下图在前端调用的方式：

![图片](https://dn-coding-net-production-pp.qbox.me/1f01ee88-b70e-4d43-97b5-86b19a32dc03.png)

> 显示的页面如下所示：

![图片](https://dn-coding-net-production-pp.qbox.me/3f4eb3b7-bd63-4f02-b680-3fb9d26c0210.png)

> 可以在这个表单上添加信息，然后点击“提交”，这些数据就提交到了名为“form_goods”的数据表中了，然后跳转到设置的URL地址所显示的界面去。

![图片](https://dn-coding-net-production-pp.qbox.me/b05c2df6-946f-4b3c-b64d-3760f28f9339.png)
