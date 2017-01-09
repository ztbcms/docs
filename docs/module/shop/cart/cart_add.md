### 购物车-添加


#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=Cart&a=add_cart`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
goods_id | varchar|是|用户注册的邮箱或者手机|
goods_num | int|是|购物车数量，默认是1|
goods_spec | array|是|商品规格，goods_spec[尺寸],goods_spec[内存],goods_spec[颜色]|

#### response

```
{
  "info": "2", //当前购物车的数量
  "status": 1,
  "url": "",
  "state": "success"
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**登录成功之后返回的shop_user表上的信息。**