## 短信平台 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Sms.svg?maxAge=36000)

短信模块已经内置了`阿里大于`和`云之讯`两个短信平台，默认启用的是`阿里大于`，可在后台自行切换。

### 配置短信平台参数

短信平台在使用前需要在后台「模块 - 短信模块 - 短信模版管理」处添加模版获得模版 ID。详细参数如下，

### 1.阿里大于

阿里大于需要配置的参数主要有 5 个

- type ： 普通短信固定为 normal   
- sign ： 短信签名，传入的短信签名必须是在阿里大于“管理中心-短信签名管理”中的可用签名。  
- template : 短信模板ID，传入的模板必须是在阿里大于“管理中心-短信模板管理”中的可用模板。  
- appkey : 短信所属的应用标识  
- secret : 阿里大于短信平台用户 secret_key  
- extend : （非必填）额外标识，回调会传回该参数。  

### 2.云之讯

云之讯需要配置的参数有 4 个

- accountsid : 开发者账号ID。由32个英文字母和阿拉伯数字组成的开发者账号唯一标识符。  
- token : 开发者账号TOKEN  
- appid: 应用ID  
- templateid ： 短信模板ID  

### 3.阿里消息服务(短信消息)

> 注意，这里不是[短信服务](https://www.aliyun.com/product/sms)，而是[消息服务下的短信消息](https://www.aliyun.com/product/mns)

使用前，请**务必**先阅读一次 [消息服务>SDK 参考>PHP SDK>发布短信消息示例](https://help.aliyun.com/document_detail/51929.html)

阿里短信服务需要配置的参数有 7 个

- end_point : 短信服务对外API地址，分公网和私网，请根据业务自行选择
- access_id : 阿里云API密钥
- access_key: 阿里云API密钥
- topic_name ： 短信主题名称
- sign : 短信签名
- template : 短信模版 Code
- message_body : SMS消息体（阿里没有说明作用，不为空即可）

以上字段，除注明外，均为必填字段，如业务需求，需要额外参数，可在「模块 - 短信模块 - 模型管理」处增减参数字段。

### 【推荐】阿里云短信服务
> 阿里云正式整合了阿里大于和阿里云消息服务下的短信消息，整理后就是阿里云短信服务。若是没有历史问题，请使用阿里云短信服务。

使用前，请**务必**先阅读一次 [短信服务 > 开发指南 > API文档 > PHP > 短信发送API(SendSms)---PHP](https://help.aliyun.com/document_detail/55451.html) 

阿里云短信服务配置

- access_id : 阿里云API密钥
- access_key: 阿里云API密钥
- sign : 短信签名
- template : 短信模版 Code

上述文档的配置参数请按照说明文档中步骤去申请获取。

### 短信发送接口

- [v2.x](2.x.md)
- [v3.x](3.x.md)
