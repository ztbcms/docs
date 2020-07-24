## 消息系统 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Message.svg?maxAge=36000)

描述：一个系统里面通常都会有一些类似于站内信，用户私信等消息(Message)，然后通过邮件，微信模板消息，短信等多种渠道（Sender）发送到对应用户上。消息系统这是解决这个问题。

### 目录结构

```
.
├── Controller
├── CronScript 计划任务脚本
├── Install 
├── Libs 核心实现库
├── Messages 消息实体类
├── Model 
├── Senders 发送渠道实现
├── Service 服务
└── Uninstall
```

### 使用指南

#### 1.创建你的消息实体类

在 `Message/Messages/` 目录下创建消息实体类，并继承 `Message\Libs\Message` 类，实现 `createSender()`

```php

use Message\Libs\Message;
use Message\Model\MessageModel;

class SimpleMessage extends Message {

    /**
     * SimpleMessage constructor.
     *
     * @param string $sender 发送人
     * @param string $receiver 接收人
     * @param string $content  消息ID
     */
    public function __construct($sender, $receiver, $content = '') {
        $this->setContent($content);
        $this->setType(MessageModel::TYPE_MESSAGE); //消息类型本系统没有过多的指定，默认提供 message 私信 和 remind 提醒这两种

        $this->setSender($sender); //发送人，可以是ID，也可以名字，由你的业务决定
        $this->setSenderType('member');//发送人的类型，可以为空，由你的业务决定

        $this->setReceiver($receiver); //接收人，可以是ID，也可以名字，由你的业务决定
        $this->setReceiverType('member'); //接收人的类型，可以为空，由你的业务决定

        $this->setTarget('1');  //消息源，如某某人点赞了一文章，则 Target 可能是文章ID，具体由你的业务决定
        $this->setTargetType('11');//消息源类型，如某某人点赞了一文章，则 Target 应该是文章类型名称，具体由你的业务决定

    }

    /**
     * 定义该消息的消息分发渠道
     *
     * @return array Senders数组
     */
    function createSender() {
        return [
            new SimpleSender(), //示例：发邮件
            new SimpleWxSender() //示例：发微信模板消息
        ];
    }
}
```

#### 2.创建你的分发渠道

在 `Message/Senders/` 目录下创建消息实体类，并继承 `Message\Libs\Sender` 类，实现 `doSend()`

示例：SimpleSender:
```php
class SimpleSender extends Sender {


    /**
     * 发送消息操作
     *
     * @param Message $message
     * @return boolean
     */
    function doSend(Message $message) {
        echo 'simple send => ' . $message->getContent() . '<br>';

        return true;
    }
}
```

#### 3.创建消息

使用 `Message\Service\MessageService::createMessage($msg)` 添加消息

```php
use Message\Service\MessageService;

class TestController extends AdminBase {

    //发送信息
    function pushMessage() {
        $sender = 'jayin';
        $receiver = 'admin';
        $content = '用户 ' . $sender . ' 对用户 ' . $receiver . ' 说:' . '你好，这是推送 at ' . date('Y-m-d H:i:s');
        
        $msg = new SimpleMessage($sender, $receiver, $content);
        MessageService::createMessage($msg);
    }

}
```


#### 4.消息处理

使用 `Message\Service\MessageService::handleMessage($msg_id)` 处理(发送)消息

##### 4.1 手动处理一条消息
```php
use Message\Service\MessageService;

class TestController extends AdminBase {

    //处理信息
    function handleMessage() {
        //取出未处理的消息，进行处理
        $messages = D('Message/Message')->where(['process_status' => MessageModel::PROCESS_STATUS_UNPROCESS])->field('id')->select();
        foreach ($messages as $index => $message) {
            MessageService::handleMessage($message['id']);
        }
    }
}
```

##### 4.2 使用计划任务执行【推荐】

或者你可以添加计划任务，`Message/CronScript/HandleMessage`，建议每隔1分钟处理一次。执行延迟为分钟级别。

##### 4.3 使用命令行执行【推荐】

使用命令行可以创建多个处理消息进程，可以应付海量的消息处理。执行延迟为秒级别。
```shell
# 启动
php index.php /Message/Cli/start 

# 平滑停止(请务必使用这种方式停止，否则任务没有结束就强制结束会有产生系统异常，脏数据等)
php index.php /Message/Cli/stop 
```

### 最佳实践与提示

1. 有多少不同类型的消息就建多少种 Message
2. 有多少个消息分发渠道就建多少种 Sender
3. 其实 Sender 相当于一个事件处理器(Handler)，**不要认为只能用来发消息**(模板消息，短信等)
4. Message 里 `setContent()`, `setReceiver()`, `setTarget()` 都不是必须，只是传入对应的参数方便 Sender 中自由的根据消息的来源信息自由修改发送内容
