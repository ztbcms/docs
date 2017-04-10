### 商城-用户收货地址


**用户添加自己收货资料，省份，城市，地区这里需要依赖地区模块**

#### request

 **method** ：Get
 
 **URL**： `index.php?g=Shop&m=UserApi&a=address_list`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|


#### response

```
{
  "info": [
    {
      "address_id": "3",
      "userid": "4",
      "consignee": "黄振炼",
      "email": "",
      "country": "0",
      "province": "110000",
      "city": "110100",
      "district": "110101",
      "twon": "0",
      "address": "2222",
      "zipcode": "",
      "mobile": "13800138000",
      "is_default": "0",
      "is_pickup": "0",
      "province_name": "北京",
      "city_name": "北京市",
      "district_name": "东城区"
    }
  ],
  "status": 1,
  "url": "",
  "state": "success"
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**收货地址这里关系到省市联动效果，获取所属的用户是登录用户**