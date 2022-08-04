## 队列 Queue


### 简介

队列提供能异步执行任务的能力。当长时间，批量、异步执行任务，如邮件、短信发送，每日生成报表等。


### 依赖与安装

```bash
composer require jayin/think-queue
```

ztbcms 已经集成了队列，可以直接使用。

### 配置

队列配置文件在`config/queue.php`和`.env`中配置。主要配置项在`.env`中
```ini
# 队列
[queue]
# 队列驱动可选值：sync、database(建议)、redis
driver=database
# 是否开启队列监控;开启后需要正确设置 redis_connection 参数
watch_queue=false
# redis 默认链接
redis_connection=default
# 保留队列日志
keep_log_day=30
```


### 使用

#### 1. 创建任务

```php

use think\queue\Job;
use app\common\libs\queue\BaseQueueJob;

// 继承 BaseQueueJob
class ReportDailyJob extends BaseQueueJob {

    /**
     * @param Job $job
     * @param $data
     */
    function generateDailyReport(Job $job, $data)
    {
        if ($job->attempts() > 1) {
            // 重试次数达到N次处理
            return;
        }

        // 业务逻辑
        $id = $data['id'];

        // 请务必删除任务
        $job->delete();

        // 也可以重新发布这个任务
        $job->release($delay); //$delay为延迟时间
    }
}
```

### 2. 推送到指定队列中

```php
use think\facade\Queue

# Method 1
Queue::push('app\job\ReportDailyJob@generateDailyReport', ['id' => 1], 'queu_name');

# Method 2
queue('app\job\ReportDailyJob@generateDailyReport', ['id' => 1], 0, 'queu_name');
```

### 3. 部署


```shell
php think queue:listen --queue queue_name --tries 3 --sleep 10 --timeout 300 --delay 300
```

更稳定，多进程部署,可使用进程管理软件进行配置。如:[supervisor](http://supervisord.org/), [PM2](http://pm2.io/)


添加计划任务`app\common\cronscript\QueueCleanLogScript`以清理队列日志。

### 最佳实践


### 常见问题

