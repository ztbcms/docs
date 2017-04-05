## [队列](https://github.com/ztbcms/ztbcms-Queue) ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Queue.svg?maxAge=36000)

### 使用

1.创建任务

要点：继承 ` Queue\Libs\Job` 并实现`handle()`方法

```php
use Queue\Libs\Job;

class UpdateJob extends Job {

    //定义 你的Job数据
    public $userid;
    public $username;

    //利用初始化函数导入数据
    public function __construct($userid, $username) {
        $this->userid = $userid;
        $this->username = $username;
    }

    //实现handle()
    public function handle() {
        //your code
    }
}
```

2.把任务推送到指定队列中

```php
 $job = new UpdateJob(time(), 'ztbcms');

$queue = Queue::getInstance();
$result = $queue->push('high', $job);//注: high即为队列名
```

### 部署

#### 1.简单部署，本地测试时可以选择这种方式

1.1. 启动队列

```shell
$ php index.php /queue/worker/run/queue/high,mid,low/_qsk/{你的私钥}
```

上述命令监听了3个名为high,mid,low的队列。路由解析方式跟TP重写URL原理一样，`/queue/worker/run`分别对应Module,Controller,Action,后面则是key-value的
参数

1.2. 平滑停止

```shell
$ php index.php /queue/worker/stop/_qsk/{你的私钥}
```

#### 2. 更安全的部署方式

用于功能的实现基于Controller-Action,可能会被恶意请求URL，因此我们提供了私钥校验

1.设置队列的私钥

```php
return array(
    'QUEUE_SECRET_KEY' => 'ztbcms',//队列校验私钥
);
```

2.启动时带着私钥参数`_qsk`

```shell
$ php index.php /queue/worker/run/queue/high,mid,low/_qsk/ztbcms
```

#### 3. 更稳定，多进程部署

使用进程管理软件进行配置。如:[supervisor](http://supervisord.org/), [PM2](http://pm2.io/)

### 最佳实践

#### 1.定期删除已完成任务

安装[计划任务模块]，添加计划任务`Queue\DeleteFinishJob`，推荐每日执行一次，每次删除7日前的已完成的任务。当然，可以根据你的业务逻辑调整其执行频率。

```php
class DeleteFinishJob extends Cron {

    public function run($cronId) {
        $hour = 7 * 24; //删除X小时前已完成的任务，你可以
        //....
    }
}
```
