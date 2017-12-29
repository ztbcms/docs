## 银联支付 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Unionpay.svg?maxAge=36000)

- PC/Wap（会自动检测是否在手机环境）
- 支付超时配置1小时；
- 生产和测试环境的配置（证书路径(注意系统日志)，回调地址（请注意生产环境）等）
- 银联的日志放在 /runtime/unionpay/log/
- 生产环境请用 Unionpay/Sdk/acp_sdk.ini.prd 的配置 替换Unionpay/Sdk/acp_sdk.ini,
- acp_sdk.ini.dev 为测试环境配置，acp_sdk.ini.prd 为生产环境配置

开发文档：https://open.unionpay.com/ajweb/product/newProDetail?proId=1
银联SDK版本：V1.1.9

测试银联支付页面访问
```
http://localhost/Unionpay/Test/unionpay?orderid={你的订单号}
```

后台通知地址，填写接收银联后台通知的地址，必须外网能访问
acpsdk.backUrl=http://xx.com/Unionpay/Payment/pay_notify

前台通知地址，填写处理银联前台通知的地址，必须外网能访问
acpsdk.frontUrl=http://xx.cn/Unionpay/Payment/pay_return
