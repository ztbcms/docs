# 计划任务 Cron

计划任务是一项使系统在规定时间自动执行某些特定任务的功能,合理设置执行时间，能有效地为服务器减轻负担。触发任务除系统指定的时间外，用户行为也可触发。

## 使用

### 创建计划任务

在 `app/{module}/cronscript/` 目录下,新建计划任务文件

样例：
```php
<?php
namespace app\common\cronscript;

use app\common\cronscript\CronScript;

// 继承CronScript
class DeleteCronLogScript extends CronScript
{
    public function run($cronId)
    {
        // bussiness Code....
        return self::createReturn(true, [], '操作完成');
    }
}
```

### 注册计划任务

在『管理后台-计划任务-任务列表』中添加计划任务

### 部署触发任务

Linux 下，添加 crontab 任务

```shell
# 打开 crontab
contab -e
# 借用 curl 来发起 http 请求
* * * * * curl 'http://example.com/cron/index/index'

# 以 CLI 模式启动运行
* * * * * cd /你的应用根目录 && php think cron:run
```

参考：[Cron表达式生成器](http://www.pdtools.net/tools/becron.jsp)

Windows 下部署

1. 编写bat脚本
```shell
php think cron:run
```
注意： 需要把 `php.exe` 的路径放到环境变量
2.创建计划任务(控制面板->管理工具->计划任务)，运行bat，具体操作参考[百度百科-如何使用windows的计划任务？](http://jingyan.baidu.com/article/ca00d56c767cfae99febcf73.html)

## 最佳实践

### 更安全地触发计划任务

1、以HTTP请求形式触发定时任务，入口链接是固定的，暴露出去容易被恶意攻击。因此提供了可配置的密钥，请求计划任务入口链接的时带上私钥即可

2、改为采用 CLI 形式去触发[强烈建议]
```
cron 相关命令

1）启动计划任务调度 ： php think cron:run --progress 1

2）执行指定任务 ： php think cron:exec --id 1 (执行ID为1的任务)

3）执行指定任务 ： php think cron:exec --class "app\common\cronscript\DeleteCronLogScript"

4）计划任务清理 ： php think cron:clean
```


### 定时清理日志

添加计划任务 『删除计划任务日志』`app\common\cronscript\DeleteCronLogScript`



