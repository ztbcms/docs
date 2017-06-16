### 购物车-创建订单


#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=OrderApi&a=create_order_by_cart`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
address_id|int|是|用户收货地址id
invoice_title|varchar|否|发票抬头
pay_points|int|否|使用的积分
user_money|float|否|用户使用余额支付
cart_ids|varchar|是|购物车多个id，eg：12,3,33

#### response

```
{
  "status": 1,
  "msg": "提交订单成功",
  "result": "811",
  "url": "",
  "state": "success"
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**result 是新订单id**

