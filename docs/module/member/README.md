
1. 安装好会员模块后直接去注册会员，会返回没有选择会员模型的错误信息
![图片](https://dn-coding-net-production-pp.qbox.me/f60e6fa8-0277-42d8-9d57-c3a480152960.png)

2. 原因：在会员模块下有一个模型管理，上面的错误提示信息就是因为这里缺少模型
![图片](https://dn-coding-net-production-pp.qbox.me/787f5716-1c0f-4dfa-be45-c698130479c7.png)

3. 为什么要建模型？

> * 这里的模型就是会员表的副表，对于会员来说，不同的身份会有很多不同的信息，在数据表里来说就是会有不同的字段，所以无法用同一张表去记录所有不同身份的会员。


### 关于service("Passport")，文件地址路径：
![图片](https://dn-coding-net-production-pp.qbox.me/5e0c2d91-ed8b-4216-83ae-6146d10481b5.png)

service类的功能其实就是为了获取会员设置的信息
![图片](https://dn-coding-net-production-pp.qbox.me/ad0e0ca5-98e5-4688-9137-b18a3cb776db.png)
