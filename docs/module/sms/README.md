## 短信平台 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Sms.svg?maxAge=36000)

短信模块已经内置了`阿里大于`和`云之讯`两个短信平台，默认启用的是`阿里大于`，可在后台自行切换。

### 配置短信平台参数

短信平台在使用前需要在后台「模块 - 短信模块 - 短信模版管理」处添加模版获得模版 ID。详细参数如下，

#### 阿里大于

阿里大于需要配置的参数主要有 5 个

- type ： (必填)普通短信固定为 normal   
- sign ： (必填)短信签名，传入的短信签名必须是在阿里大于“管理中心-短信签名管理”中的可用签名。  
- template : (必填)短信模板ID，传入的模板必须是在阿里大于“管理中心-短信模板管理”中的可用模板。  
- appkey : (必填)短信所属的应用标识  
- secret : (必填)阿里大于短信平台用户 secret_key  
- extend : 额外标识，回调会传回该参数，非必填。  

#### 云之讯

云之讯需要配置的参数有 4 个

- accountsid : 开发者账号ID。由32个英文字母和阿拉伯数字组成的开发者账号唯一标识符。  
- token : 开发者账号TOKEN  
- appid: 应用ID  
- templateid ： 短信模板ID  

如果需要额外参数，可在「模块 - 短信模块 - 模型管理」处增减参数字段。

### 发送短信

当选择好短信平台并配置好短信模版后，就可以发送短信了。sms 模块提供的发送短信接口为 :

```php
sms\Controller\ApiController::sendSms($templateID,$phone,$data,$operator)
```

#### 参数解析：

- $templateID : 短信模版，从后台配置得到  
- $phone ：短信接收人，多个接收人号码之间使用英文半角逗号隔开   
- $data ：短信模板变量，JSON字符串，非必填字段，视短信模板而定   
- $operator : 短信平台表名，如果没有传入则使用默认短信平台

返回数据：

查看看具体短信平台文档。

代码示例：

```php
use Sms\Controller\ApiController as sms;

class XXX {
  function sendSMS($templateID,$phone, $data){
    $smsClient = new sms();
    $result = $smsClient->sendSms($templateID,$phone,$data);
  }
}
```
