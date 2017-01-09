### 购物车-列表


#### request

 **method** ：get
 
 **URL**： `index.php?g=Shop&m=OrderApi&a=order_detail`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
#### response

```
{
  "info": {
    "order_status": [
      "待确认",
      "已确认",
      "已收货",
      "已取消",
      "已完成",
      "已作废"
    ],
    "shipping_status": [
      "未发货",
      "已发货",
      "部分发货"
    ],
    "pay_status": [
      "未支付",
      "已支付"
    ],
    "order_info": {
      "order_id": "805",
      "order_sn": "201611222055132500",
      "user_id": "15",
      "order_status": "0",
      "shipping_status": "0",
      "pay_status": "0",
      "consignee": "",
      "country": "0",
      "province": "0",
      "city": "0",
      "district": "0",
      "twon": "0",
      "address": "",
      "zipcode": "",
      "mobile": "",
      "email": "",
      "shipping_code": "",
      "shipping_name": "",
      "pay_code": "",
      "pay_name": "",
      "invoice_title": "",
      "goods_price": "2.08",
      "shipping_price": "0.00",
      "user_money": "0.00",
      "coupon_price": "0.00",
      "integral": "0",
      "integral_money": "0.00",
      "order_amount": "2.08",
      "total_amount": "2.08",
      "add_time": "1479819313",
      "shipping_time": "0",
      "confirm_time": "0",
      "pay_time": "0",
      "order_prom_id": "0",
      "order_prom_amount": "0.00",
      "discount": "0.00",
      "user_note": "",
      "admin_note": "",
      "parent_sn": "",
      "is_distribut": "0",
      "goods_list": []
    },
    "order_action": [
      {
        "action_id": "1032",
        "order_id": "805",
        "action_user": "15",
        "order_status": "0",
        "shipping_status": "0",
        "pay_status": "0",
        "action_note": "您提交了订单，请等待系统确认",
        "log_time": "1479819313",
        "status_desc": "提交订单"
      }
    ]
  },
  "status": 1,
  "url": "",
  "state": "success"
}
```

##### 返回数据-data
字段 | 类型|描述
---|---|---|
total|int|总记录数
page|int|当前页数
limit|int|每页数量
order_status|array|订单状态中文解释。
shipping_status|array|发货状态中文解释
pay_status|array|支付状态中文解释
lists|array|列表数据

**order_info 订单数据**

字段 | 类型|描述
---|---|---|
order_id|int|订单id
order_sn|string|订单编号
user_id|int|所属用户id
order_status|int|订单状态
shipping_status|int|发货状态
pay_status|int|支付状态
consignee|varchar|收货人
country|int|国家，默认是0
province|int|省份id
city|int|城市id
district|int|县区id
twon|int|城镇
address|varchar|详细地址
zipcode|int|邮编
mobile|varchar|电话
email|email|邮箱
shipping_code|int|快递号
shipping_name|varchar|快递名字
pay_code|int|支付类型
pay_name|int|支付类型名称
invoice_title|varchar|发票抬头
goods_price|float|商品总价
shipping_price|float|快递费用
user_money|float|用户余额支付金额
coupon_price|float|优惠金额
integral|int|积分抵扣数量
integral_money|float|积分抵扣金额
order_amount|float|订单实际支付价格
total_amount|float|订单总价格
add_time|int|创建名称
shipping_time|int|发货时间
confirm_time|int|确认时间
pay_time|int|支付时间
order_prom_id|int|优惠券id
order_prom_amount|float|优惠券金额
discount|float|折扣
user_note|varchar|用户留言
admin_note|varchar|管理员留言
parent_sn|varchar|父订单编号
is_distribut|int|是否拆分
goods_list|array|订单商品列表

**goods_list 商品列表说明**

字段 | 类型|描述
---|---|---|
rec_id|int|自增长的id
order_id|int|订单id
goods_id|int|商品id
goods_name|varchar|商品名称
goods_sn|varchar|商品编号
goods_num|int|下单商品数量
market_price|float|市场价格
goods_price|float|商品售价
cost_price|float|成本价格
member_goods_price|float|会员价格
give_integral|int|赠送的积分
spec_key|varchar|商品规格
spec_key_name|varchar|商品规格名称
is_comment|int|是否评论
prom_type|varchar|优惠类型
prom_id|int|优惠id
original_img|varchar|缩略图


**order_action 订单操作日志**

字段 | 类型|描述
---|---|---|
action_id|int|自增长id
order_id|int|订单id
action_user|int|操作者id
order_status|int|订单状态
shipping_status|int|发货状态
pay_status|int|支付状态
action_note|int|日志内容
log_time|int|日志时间
status_desc|int|状态介绍


**ps: 失败返回 status != 1,具体看msg信息**


**登录成功之后返回的shop_user表上的信息。**
