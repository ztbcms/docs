## 部署指南

### 数据库配置

注意：以下功能要求ztbcms版本 v3.7.2.15 或以上

有时候，生产环境和测试环境用的是两套配置(数据库配置)，如果我们把这两种配置都写在配置文件`dataconfig.php`中，这个不太合理的。
ztbcms中通过判断`app/Common/Conf/`判断是否存在文件`local_dataconfig.php`，若存在，则会用该配置文件的配置覆盖 `dataconfig.php` 的配置

#### 操作如下：

生产环境中，在 `app/Common/Conf/` 中创建文件 `local_dataconfig.php` ，写入生产环境配置,但**不要把该文件提交到源码仓库**

local_dataconfig.php
```php
<?php

return array(
    /* 数据库设置 */
    'DB_TYPE' => 'mysql', // 数据库类型
    'DB_HOST' => 'xxxx', // 服务器地址
    'DB_NAME' => 'xxxxx', // 数据库名
    'DB_USER' => 'xxx', // 用户名
    'DB_PWD' => 'xxxx', // 密码
    'DB_PORT' => '3306', // 端口
    'DB_PREFIX' => 'xx_', // 数据库表前缀
);

``` 