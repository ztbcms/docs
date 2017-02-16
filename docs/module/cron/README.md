## 计划任务 [![version](https://img.shields.io/github/release/ztbcms/ztbcms-Cron.svg?maxAge=36000)](https://github.com/ztbcms/ztbcms-Cron)

计划任务是一项使系统在规定时间自动执行某些特定任务的功能,合理设置执行时间，能有效地为服务器减轻负担。触发任务除系统指定的时间外，用户行为也可触发。触发任务的任务周期只是初始值。

想要执行计划任务，需要一个触发媒介

#### 独立主机

独立主机用户可以在系统增加计划任务间隔20秒执行访问[http://网站地址/index.php?g=Cron&m=Index&a=index]

- Linux 下

```
0/20 0/1 * * * curl http://网站地址/index.php?g=Cron&m=Index&a=index
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
$curl->get('http://网站地址/index.php?g=Cron&m=Index&a=index');
```

2.编写bat脚本

```
php {你的项目路径}\cron.php
```
注意： 需要把 `php.exe` 的路径放到环境变量

3.创建计划任务(控制面板->管理工具->计划任务)，运行bat

参考：[百度百科-如何使用windows的计划任务？](http://jingyan.baidu.com/article/ca00d56c767cfae99febcf73.html)


#### 2. 虚拟主机用户

虚拟主机用户，需要在网站模板中最底部增加一个js调用:

```    
<script type="text/javascript" src="http://网站地址/index.php?g=Cron&m=Index&a=index"></script>
```


### 使用


1.创建计划任务：在 `app/Application/Cron/CronScript/` 目录下,新建计划任务文件

样例：
```php
<?php

// +----------------------------------------------------------------------
// | 计划任务 - 示例脚本
// +----------------------------------------------------------------------

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

