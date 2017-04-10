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

    public function __construct($userid, $type, $record_no) {
        $this->setUserid($userid);
        $this->setType($type);
        $this->setRecordNo($record_no);
    }
}

```


#### 2.创建消息

使用 `Record\Service\RecordService::createRrcord($record)` 添加消息

```php

<?php
namespace Record\Controller;


use Common\Controller\AdminBase;
use Record\Service\RecordService;

class TestController extends AdminBase {
    public function index() {        
        $recode = new TradeRecord('1', 'wxpay', '1232122');
        $recode->setIncome(100);
        RecordService::createRecord($recode);
    }
}

```

#### 3.进一步封装 service

```

<?php
namespace Record\Service;

use Record\Model\RecordModel;
use Record\Records\TradeRecord;

class TradeRecordService extends RecordService {
    static function createTradeRecord(
        $userid,
        $type,
        $record_no,
        $income = 0,
        $pay = 0,
        $status = RecordModel::STATUS_VAILD,
        $detail = '',
        $remark = ''
    ) {
        $trade_recored = new TradeRecord($userid, $type, $record_no);
        $trade_recored->setIncome($income);
        $trade_recored->setPay($pay);
        $trade_recored->setStatus($status);
        $trade_recored->setDetail($detail);
        $trade_recored->setRemark($remark);

        return self::createRrcord($trade_recored);
    }
}

```