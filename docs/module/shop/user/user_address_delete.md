### 商城-删除收货地址



#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=UserApi&a=del_address`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
id | int|是|收货地址id|

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