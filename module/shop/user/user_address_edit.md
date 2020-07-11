### 商城-用户添加收货地址


**用户添加自己收货资料，省份，城市，地区这里需要依赖地区模块**

#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=UserApi&a=edit_address`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
address_id | int|是|收货地址id|
consignee | string|是|收货人地址|
province | int|是|省份id|
city | int|是|城市id|
district | int|是|地区id|
address | string|是|详细地址|
mobile | phone|是|收货联系手机|
is_default | int|否|是否默认收货地址|


#### response

```
{
  "info": "操作成功",
  "status": 1,
  "url": "",
  "state": "success"
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**收货地址这里关系到省市联动效果**
