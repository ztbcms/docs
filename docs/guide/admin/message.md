# 消息中心

> 一个简易的消息管理模块，你可以进行存储消息，记录消息的已读状态。也可自行扩展，当作消息队列的基础。或者也可以用做记录，管理员之间的留言。

![U4M1eI.png](https://s1.ax1x.com/2020/07/20/U4M1eI.png)

## Service说明
### 1、创建单一消息
```php
/**
  * @param $title         消息标题
  * @param $content       消息内容
  * @param $receiver      接收者（例如管理员id）
  * @return array
*/
\AdminMessage\Service\AdminMessageService::createAdminMessage($title,$content,$receiver);
```

### 2、创建群发消息
```php
/**
  * @param $title         消息标题
  * @param $content       消息内容
  * @return array
*/
\AdminMessage\Service\AdminMessageService::createGroupMessage($title,$content);
```

### 3、创建系统消息
```php
/**
  * @param $title         消息标题
  * @param $content       消息内容
  * @return array
*/
\AdminMessage\Service\AdminMessageService::createSystemMessage($title,$content);
```

新增表 admin_message：
```sql
 CREATE TABLE `cms_admin_message` (
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
      `title` varchar(255) NOT NULL DEFAULT '' COMMENT '标题',
      `content` varchar(255) NOT NULL DEFAULT '' COMMENT '内容',
      `target` varchar(255) NOT NULL DEFAULT '' COMMENT '消息源',
      `target_type` varchar(255) NOT NULL DEFAULT '' COMMENT '消息源类型',
      `sender` varchar(255) NOT NULL DEFAULT '' COMMENT '发送者',
      `sender_type` varchar(255) NOT NULL DEFAULT '' COMMENT '发送者类型',
      `receiver` varchar(255) NOT NULL DEFAULT '' COMMENT '接收者',
      `receiver_type` varchar(255) NOT NULL DEFAULT '' COMMENT '接收者类型',
      `type` varchar(255) NOT NULL DEFAULT '' COMMENT '消息类型',
      `read_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '阅读时间',
      `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
      `read_status` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '阅读状态: 0未阅读 1已阅读',
      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

使用场景模拟：  
1、手动发送给某个管理员消息
系统类型           type  = '' （默认为空）

target（消息源） | target_type （消息源类型 ） | type（系统类型）
:-----------: | :-----------: | :-----------:
 system       |     system   |       '  '

2、创建系统消息   
target（消息源） | target_type （消息源类型 ） | type（系统类型）
:-----------: | :-----------: | :-----------:
 system       |     system    |   system

3、张三发送消息通知李四，注意审查  
target（消息源） | target_type （消息源类型 ） | type（系统类型）
:-----------: | :-----------: | :-----------:
 张三的id    |  admin_id   |       '    '

4、用户下单后通知管理员  
target（消息源） | target_type （消息源类型 ） | type（系统类型）
:-----------: | :-----------: | :-----------:
 20200715224515    |  order_no  |       '    '
