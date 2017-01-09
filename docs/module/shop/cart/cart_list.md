### 购物车-列表


#### request

 **method** ：get
 
 **URL**： `index.php?g=Shop&m=Cart&a=index`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
#### response

```
{
  "status": 1,
  "url": "",
  "state": "success",
  "info": [
    {
      "id": "1675",
      "user_id": "15",
      "session_id": "b80181d9794ccaaa2fbaa8d61a03da9f",
      "goods_id": "39",
      "goods_sn": "TP0000039",
      "goods_name": "华为（HUAWEI） M2 10.0 平板电脑 WiFi 月光银",
      "market_price": "2388.00",
      "goods_price": "4200.00",
      "member_goods_price": "4200.00",
      "goods_num": "2",
      "spec_key": "41_48_52",
      "spec_key_name": "尺寸:7寸及以下 内存:32G 颜色:黑色",
      "bar_code": "",
      "selected": "0",
      "add_time": "1480144275",
      "prom_type": "0",
      "prom_id": "0",
      "sku": ""
    }
  ]
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**登录成功之后返回的shop_user表上的信息。**