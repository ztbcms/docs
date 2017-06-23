## 监控

定期去自动访问网站，检测网站是否延迟，能否打开。

### 环境

需要预先安装依赖模块：『Cron-计划任务』『Message-消息模块』『Queue-队列模块』

### 使用

#### 1.配置邮箱信息

![图片](https://dn-coding-net-production-pp.qbox.me/c70ef0b0-b5ea-40bc-b868-ddd3e96c80b0.png) 


#### 2.创建计划任务

![图片](https://dn-coding-net-production-pp.qbox.me/6c20928d-3878-40ee-937c-1cc2adad350e.png)

#### 3.启动任务队列

```shell
cd path/to/your_project
php index.php /Queue/worker/run/queue/Mirror 
```


