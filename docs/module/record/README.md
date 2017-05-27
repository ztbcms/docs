## 记录 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Record.svg?maxAge=36000)

描述：

### 目录结构

```
.
├── Controller
├── Install 
├── Libs 核心实现库
├── Records 记录实体类
├── Model 
├── Service 服务
└── Uninstall
```

### 使用指南

#### 1.创建你的记录实体类

在 `Record/Records/` 目录下创建消息实体类，并继承 `Record\Libs\Record` 类

```php

<?php
namespace Record\Records;

use Record\Libs\Record;

class TradeRecord extends Record {
    public $table_name = 'RecordTrade';

    public function __construct($to, $target_type, $target) {
        $this->setTo($to);
        $this->setTargetType($target_type);
        $this->setTarget($target);
    }
}

```


#### 2.添加记录

使用 `Record\Service\RecordService::createRrcord($record)` 添加消息

```php

<?php
namespace Record\Controller;


use Common\Controller\AdminBase;
use Record\Records\TradeRecord;
use Record\Service\RecordService;
use Record\Service\TradeRecordService;

class TestController extends AdminBase {
    public function index() {
        $recode = new TradeRecord('1', 'wxpay', '1232122');
        $recode->setIncome(100);
        $this->ajaxReturn(RecordService::createRrcord($recode));
//        $this->ajaxReturn(TradeRecordService::createTradeRecord('1', 'wxpay', '1232122', 100, 50));
    }
}

```

#### 3.进一步封装 service

```php

<?php
namespace Record\Service;

use Record\Libs\Record;
use Record\Model\RecordModel;
use System\Service\BaseService;

class RecordService extends BaseService {
    static function createRrcord(Record $record) {
        //获取上一条合法的record id
        $where['status'] = RecordModel::STATUS_VAILD;
        $where['to'] = $record->getTo();
        $where['to_type'] = $record->getToType();
        $last_vaild_record = M($record->table_name)->where($where)->order('id desc')->find();
        $last_vaild_balance = self::getBalance($record)['data']; //获取最近的余额信息

        $data = [
            'parent_id' => $last_vaild_record ? $last_vaild_record['id'] : 0,
            'to' => $record->getTo(),
            'to_type' => $record->getToType(),
            'from' => $record->getFrom(),
            'from_type' => $record->getFromType(),
            'target' => $record->getTarget(),
            'target_type' => $record->getTargetType(),
            'income' => $record->getIncome(),
            'pay' => $record->getPay(),
            'balance' => ($last_vaild_balance + $record->getIncome() - $record->getPay()),//计算当前记录的余额
            'detail' => $record->getDetail(),
            'status' => $record->getStatus(),
            'create_time' => time(),
            'remark' => $record->getRemark()
        ];
        $result = M($record->table_name)->add($data);
        if ($result) {
            return self::createReturn(true, $result);
        }

        return self::createReturn(false, null, '操作失败');
    }

    static function getBalance(Record $record) {
        $where = [
            'to' => $record->getTo(),
            'to_type' => $record->getToType(),
            'status' => RecordModel::STATUS_VAILD
        ];
        $lists = M($record->table_name)->field('income,pay')->where($where)->select();
        $total = 0;
        for ($i = 0; $i < count($lists); $i++) {
            $total = $total + $lists[$i]['income'] - +$lists[$i]['pay'];
        }

        return self::createReturn(true, $total, 'ok');
    }
}

```
