## 使用指南

使用场景：A【商家】向 B【用户】转账 200 元


**A 商家产生一条支出记录**

```php
// transfer_out 是记录产生来源的类型，12345677记录产生来源的唯一标示，这里是指转账流水号
$recode = new TradeRecord(A, 'transfer_out', '12345677');
$recode->setPay(100); //支付金额
$recode->setToType('商家');
$recode->setFrom(0); //无来源（可以不设置）
$recode->setToType(''); // 无来源类型 可以不设置）
$this->ajaxReturn(RecordService::createRrcord($recode));

```

**B 用户产生一条收入记录**

```php
// transfer_in 是记录产生来源的类型，12345677记录产生来源的唯一标示，这里是指转账流水号
$recode = new TradeRecord(B, 'transfer_in', '12345677');
$recode->setIncome(100); //收入金额
$recode->setToType('用户');
$recode->setFrom(A); //来源A（
$recode->setToType('商家'); // 来源类型-商家
$this->ajaxReturn(RecordService::createRrcord($recode));

```

**说明**
这样我们可以通过  target=12345677，target_type='transfer_in' 朔源到转账的订单信息。获取到该转账的详情。

通过 target_type='transfer_in' 查出 B 转账收入情况。

通过 from='A' from_type='商家' 和 target_type='transfer_in' 查出B向A转账的所有金额情况



ps：target_type target 可以根据产生的业务自由定义，例如阅读文章收益：target_type='pay_read' target='1' ( 这时候target可以是支付的文章id )