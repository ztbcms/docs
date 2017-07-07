## 计划任务 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Cron.svg?maxAge=36000)

计划任务是一项使系统在规定时间自动执行某些特定任务的功能,合理设置执行时间，能有效地为服务器减轻负担。触发任务除系统指定的时间外，用户行为也可触发。

### 使用

1.创建计划任务：在 `app/Application/Cron/CronScript/` 目录下,新建计划任务文件

样例：
```php
<?php
namespace Cron\CronScript;

use Cron\Base\Cron;

class Demo extends Cron {

	//任务主体
	public function run($cronId) {
		\Think\Log::record("我执行了计划任务事例 Demo.class.php！");
	}

}

```

2.在计划任务管理页面注册计划任务

![图片](https://dn-coding-net-production-pp.qbox.me/529bcfa0-1f5a-46fd-8473-8c2c085ebb56.png) 

3.访问 `http://网站地址/index.php?g=Cron&m=Index&a=index` 即可触发执行计划任务


### 环境部署

想要执行计划任务，需要一个触发媒介

#### 1.独立主机

独立主机用户可以在系统增加计划任务间隔1分钟执行访问 `http://example.com/index.php?g=Cron&m=Index&a=index&cron_secret_key=ztbcms`

- Linux 下，添加 crontab 任务

```shell
# 借用 curl 来发起 http 请求
* * * * * curl 'http://网站地址/index.php?g=Cron&m=Index&a=index&cron_secret_key=ztbcms'

# 以 CLI 模式启动运行
* * * * * php /你的应用根目录/index.php /Cron/Index/index/cron_secret_key/ztbcms
```

参考：[Cron表达式生成器](http://www.pdtools.net/tools/becron.jsp)

- Windows 使用计划任务

Windows 没有默认安装Curl, Wget 等工具，你可以选择安装，并模仿linux上的调用写在bat脚本上即可。但是为了更具跨平台，可以参考下面的例子：

1.首先编写一个发送HTTP请求的 `cron.php` (注意修改网站地址): 
```php
<?php

class Curl {
    public $headers;
    public $user_agent;
    public $compression;
    public $proxy;
    function __construct($compression = 'gzip', $proxy = '') {
        $this->headers[] = 'Connection: Keep-Alive';
        $this->headers[] = 'Content-type: application/x-www-form-urlencoded;charset=UTF-8';
        $this->user_agent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)';
        $this->compression = $compression;
        $this->proxy = $proxy;
    }
    function get($url) {
        $process = curl_init($url);
        curl_setopt($process, CURLOPT_HTTPHEADER, $this->headers);
        curl_setopt($process, CURLOPT_HEADER, 0);
        curl_setopt($process, CURLOPT_USERAGENT, $this->user_agent);
        curl_setopt($process, CURLOPT_ENCODING, $this->compression);
        curl_setopt($process, CURLOPT_TIMEOUT, 10); //超时时间 10秒即可
        if ($this->proxy) {
            curl_setopt($process, CURLOPT_PROXY, $this->proxy);
        }
        curl_setopt($process, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($process, CURLOPT_FOLLOWLOCATION, 1);
        $return = curl_exec($process);
        curl_close($process);
        return $return;
    }
}
$curl = new Curl();
$curl->get('http://网站地址/index.php?g=Cron&m=Index&a=index&cron_secret_key=ztbcms');
```

2.编写bat脚本

```shell
php {你的项目路径}\cron.php
```
注意： 需要把 `php.exe` 的路径放到环境变量

3.创建计划任务(控制面板->管理工具->计划任务)，运行bat

参考：[百度百科-如何使用windows的计划任务？](http://jingyan.baidu.com/article/ca00d56c767cfae99febcf73.html)


#### 2.虚拟主机用户

虚拟主机用户，需要在网站模板中最底部增加一个js调用:

```html
<script type="text/javascript" src="http://网站地址/index.php?g=Cron&m=Index&a=index&cron_secret_key=ztbcms"></script>
```

### 最佳实战

#### 1. 更安全的触发计划任务

由于触发定时任务的入口链接是固定的，暴露出去容易被恶意攻击。因此提供了可配置的`CRON_SECRET_KEY`私钥，请求计划任务入口链接的时带上私钥即可！

`Application/Cron/Conf/config.php`:
```php
return array(
    'CRON_SECRET_KEY' => 'ztbcms' //计划任务私钥,随机字符串即可,不含空格，等号`=`,问号`?`,或号`&`,示例：ztbcms
);
```

触发执行计划任务入口改为：`http://网站地址/index.php?g=Cron&m=Index&a=index&cron_secret_key=ztbcms`

### 2. 计划任务执行日志

开启记录计划任务执行日志,有助于监控计划任务的执行情况，如单个任务的执行时长，太长的计划可以作进一步优化

`Cron/Conf/config.php`
```php
return array(
    'CRON_LOG' => true, //开启计划任务日志，默认开启
    'CRON_SCHEDULING_LOG' => true //是否开启计划任务调度运行日志
);
```

### 3. 添加『 Cron\CronScript\DeleteCronLog - 删除计划任务日志』计划任务

定期(默认每30日, 根据自己需求调整)删除计划任务日志，减少大量的日志带来的空间压力。计划任务 DeleteCronLog 建议**每日凌晨时间执行一次**即可。


