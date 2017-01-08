### 商城-获取商品列表



#### request

 **method** ：get
 
 **URL**： `index.php?g=Shop&m=GoodsApi&a=goods_list`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
page | int|否|当前页数|
limit|int|否|每页显示数量|
is_recommend|bool|否|是否推荐|
is_new|bool|否|是否新品|
is_hot|bool|否|是否热销|
catid|int|否|商品所属栏目，默认是全部
order|string|列表的排序方式 eg : id desc 
#### response

```
{
  "info": {
    "goods_list": [
      {
        "goods_id": "1",
        "cat_id": "12",
        "extend_cat_id": "0",
        "goods_sn": "TP000000",
        "goods_name": "Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机",
        "click_count": "510",
        "brand_id": "11",
        "store_count": "299",
        "comment_count": "5",
        "weight": "150",
        "market_price": "6107.00",
        "shop_price": "6007.00",
        "cost_price": "0.00",
        "keywords": "LG 3g 876 支持 双模 2008年04月 灰色 GSM,850,900,1800,1900",
        "goods_remark": "选择【联通合约机0元购机】，购机款仅需4066\r\n选择【移动合约机】，锯惠5588，不换号，购机入网返高额话费~\r\n选【电信合约机】，买手机送话费！激活到账100元，实付低至29元/月，月享4GB大流量",
        "goods_content": "&lt;p style=&quot;text-align: center;&quot;&gt;&lt;img src=&quot;/Public/upload/goods/2016/03-09/56e01a6586cd0.jpg&quot; title=&quot;4.jpg&quot;/&gt;&lt;/p&gt;",
        "original_img": "/Public/upload/goods/2016/03-09/56e01a4088d3b.jpg",
        "is_real": "1",
        "is_on_sale": "1",
        "is_free_shipping": "0",
        "on_time": "1477121173",
        "sort": "54",
        "is_recommend": "1",
        "is_new": "1",
        "is_hot": "1",
        "last_update": "1269589545",
        "goods_type": "4",
        "spec_type": "4",
        "give_integral": "0",
        "exchange_integral": "100",
        "suppliers_id": "0",
        "sales_sum": "0",
        "prom_type": "0",
        "prom_id": "0",
        "commission": "0.00",
        "spu": "",
        "sku": "",
        "shipping_area_ids": ""
      },
      {
        "goods_id": "39",
        "cat_id": "191",
        "extend_cat_id": "0",
        "goods_sn": "TP0000039",
        "goods_name": "华为（HUAWEI） M2 10.0 平板电脑 WiFi 月光银",
        "click_count": "39",
        "brand_id": "15",
        "store_count": "1000",
        "comment_count": "3",
        "weight": "1000",
        "market_price": "2388.00",
        "shop_price": "2288.00",
        "cost_price": "0.00",
        "keywords": "",
        "goods_remark": "今日起商城搞活动,注册立马送30元代金券,全场满69全国包邮,全场满299送20元优惠券,全场满399送电影票,满999送美国旅游景点门票1张",
        "goods_content": "&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/01-13/5695b35c538bb.jpg&quot; style=&quot;float:none;&quot; title=&quot;428_428_1452218607027.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/01-13/5695b35c65802.jpg&quot; style=&quot;float:none;&quot; title=&quot;428_428_1452218609169.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/01-13/5695b35c7b577.jpg&quot; style=&quot;float:none;&quot; title=&quot;428_428_1452218613383.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
        "original_img": "/Public/upload/goods/2016/01-13/5695b2f14616a.jpg",
        "is_real": "1",
        "is_on_sale": "1",
        "is_free_shipping": "0",
        "on_time": "0",
        "sort": "50",
        "is_recommend": "1",
        "is_new": "0",
        "is_hot": "1",
        "last_update": "0",
        "goods_type": "15",
        "spec_type": "15",
        "give_integral": "0",
        "exchange_integral": "100",
        "suppliers_id": "0",
        "sales_sum": "0",
        "prom_type": "0",
        "prom_id": "0",
        "commission": "0.00",
        "spu": "",
        "sku": "",
        "shipping_area_ids": ""
      }
      ……
    ],
    "page": 1,
    "limit": 20,
    "total_count": "109"
  },
  "status": 1,
  "url": "",
  "state": "success"
}
```




**ps: 失败返回 status != 1,具体看msg信息**


**收货地址这里关系到省市联动效果**