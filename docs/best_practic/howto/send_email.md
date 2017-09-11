## 发送邮件

### 使用

1. 邮箱发送配置

![图片](https://dn-coding-net-production-pp.qbox.me/8d0de7c3-ff46-46e1-8016-5a0cb99319bc.png)

此处以阿里云邮件推送服务配置为例，下面有详细说明如何获取

2. 调用发邮件方法

版本比较旧的
```php
sendMail('test@ztbcms.com', '标题', '邮件内容,支持HTML');
```

v3.7.2.2或以后的可以调用`EmailService::send`

```php
\Common\Service\EmailService::send('test@ztbcms.com', '标题', '邮件内容,,支持HTML');
```

接收到的邮件示例：

![图片](https://dn-coding-net-production-pp.qbox.me/d20e824c-7732-445b-aff3-e49108fb1670.png)


### 邮箱配置获取-以阿里云邮件推送服务为例

1. 设置发信域名

![图片](https://dn-coding-net-production-pp.qbox.me/5eac635b-8944-41e0-9a65-cc5977e8f89b.png)

2. 设置发信地址

![图片](https://dn-coding-net-production-pp.qbox.me/45e3771d-7e50-41bc-a353-cadcedd2fd6f.png)


3. SMTP服务地址

SMTP服务地址： smtpdm.aliyun.com ，SMTP服务端口号：25或80或465(SSL加密)。

更详细说明请参阅阿里云[邮件推送文档](https://help.aliyun.com/product/29412.html)
