### 商城-获取商品列表



#### request

 **method** ：get
 
 **URL**： `index.php?g=Shop&m=GoodsApi&a=goods_list`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
goods_id | int|否|商品id|

#### response

```
{
  "info": {
    "goods_info": {
      "goods_id": "140",
      "cat_id": "123",
      "extend_cat_id": "0",
      "goods_sn": "TP0000140",
      "goods_name": "Apple iPhone 6s 16GB 玫瑰金色 移动联通电信4G手机",
      "click_count": "39",
      "brand_id": "0",
      "store_count": "1000",
      "comment_count": "0",
      "weight": "500",
      "market_price": "4958.00",
      "shop_price": "4858.00",
      "cost_price": "0.00",
      "keywords": "",
      "goods_remark": "",
      "goods_content": "&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/04-22/5719844a174d0.jpg&quot; style=&quot;float:none;&quot; title=&quot;000000000134003091_1_800x800.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/04-22/5719844a2c06c.jpg&quot; style=&quot;float:none;&quot; title=&quot;000000000134003091_2_800x800.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/04-22/5719844a3bd54.jpg&quot; style=&quot;float:none;&quot; title=&quot;000000000134003091_3_800x800.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/04-22/5719844a4ca6e.jpg&quot; style=&quot;float:none;&quot; title=&quot;000000000134003091_4_800x800.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/Public/upload/goods/2016/04-22/5719844a61cbd.jpg&quot; style=&quot;float:none;&quot; title=&quot;000000000134003091_5_800x800.jpg&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
      "original_img": "/Public/upload/goods/2016/04-22/5719843a87434.jpg",
      "is_real": "1",
      "is_on_sale": "1",
      "is_free_shipping": "0",
      "on_time": "1461290389",
      "sort": "50",
      "is_recommend": "1",
      "is_new": "0",
      "is_hot": "1",
      "last_update": "0",
      "goods_type": "4",
      "spec_type": "4",
      "give_integral": "0",
      "exchange_integral": "0",
      "suppliers_id": "0",
      "sales_sum": "0",
      "prom_type": "3",
      "prom_id": "1",
      "commission": "0.00",
      "spu": "",
      "sku": "",
      "shipping_area_ids": ""
    },
    "goods_images_list": [
      {
        "img_id": "522",
        "goods_id": "140",
        "image_url": "/Public/upload/goods/2016/04-22/5719843a87434.jpg"
      },
      {
        "img_id": "523",
        "goods_id": "140",
        "image_url": "/Public/upload/goods/2016/04-22/57198456a2514.jpg"
      },
      {
        "img_id": "524",
        "goods_id": "140",
        "image_url": "/Public/upload/goods/2016/04-22/57198456932b4.jpg"
      },
      {
        "img_id": "525",
        "goods_id": "140",
        "image_url": "/Public/upload/goods/2016/04-22/57198456817bf.jpg"
      },
      {
        "img_id": "526",
        "goods_id": "140",
        "image_url": "/Public/upload/goods/2016/04-22/57198455d2e1b.jpg"
      }
    ],
    "goods_attribute": {
      "56": "网络制式",
      "57": "支持频率/网络频率",
      "58": "尺寸体积",
      "59": "外观样式/手机类型",
      "60": "主屏参数/内屏参数",
      "61": "副屏参数/外屏参数",
      "62": "清晰度",
      "63": "色数/灰度",
      "64": "长度",
      "65": "宽度",
      "66": "厚度",
      "67": "屏幕材质",
      "68": "内存容量",
      "69": "操作系统",
      "70": "通话时间",
      "71": "待机时间",
      "72": "标准配置",
      "73": "WAP上网",
      "74": "数据业务",
      "75": "天线位置",
      "76": "随机配件",
      "77": "铃声",
      "78": "摄像头",
      "79": "彩信/彩e",
      "80": "红外/蓝牙",
      "81": "价格等级"
    },
    "goods_attr_list": [
      {
        "goods_attr_id": "949",
        "goods_id": "140",
        "attr_id": "56",
        "attr_value": "移动4G(TD-LTE),联通4G(TD-LTE),电信4G(TD-LTE),联通4G（FDD-LTE）,电信4G（FDD-LTE）",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "950",
        "goods_id": "140",
        "attr_id": "57",
        "attr_value": "FDD-LTE/TD-LTE/WCDMA/TD-SCDMA/CDMA2000/GSM",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "951",
        "goods_id": "140",
        "attr_id": "58",
        "attr_value": "138.3*67.1*7.1毫米",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "952",
        "goods_id": "140",
        "attr_id": "59",
        "attr_value": "直板",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "953",
        "goods_id": "140",
        "attr_id": "62",
        "attr_value": "1334×750",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "954",
        "goods_id": "140",
        "attr_id": "64",
        "attr_value": "138.3mm",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "955",
        "goods_id": "140",
        "attr_id": "65",
        "attr_value": "67.1mm",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "956",
        "goods_id": "140",
        "attr_id": "66",
        "attr_value": "7.1mm",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "957",
        "goods_id": "140",
        "attr_id": "68",
        "attr_value": "32G",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "958",
        "goods_id": "140",
        "attr_id": "69",
        "attr_value": "ios",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "959",
        "goods_id": "140",
        "attr_id": "75",
        "attr_value": "内置",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "960",
        "goods_id": "140",
        "attr_id": "78",
        "attr_value": "1200万像素",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "961",
        "goods_id": "140",
        "attr_id": "79",
        "attr_value": "支持",
        "attr_price": "0"
      },
      {
        "goods_attr_id": "962",
        "goods_id": "140",
        "attr_id": "81",
        "attr_value": "高价机",
        "attr_price": "0"
      }
    ],
    "spec_goods_price": {
      "11_28_100": {
        "key": "11_28_100",
        "price": "6858.00",
        "store_count": "100"
      },
      "11_28_57": {
        "key": "11_28_57",
        "price": "6000.00",
        "store_count": "100"
      },
      "11_28_55": {
        "key": "11_28_55",
        "price": "4858.00",
        "store_count": "100"
      },
      "11_13_100": {
        "key": "11_13_100",
        "price": "6000.00",
        "store_count": "100"
      },
      "11_13_57": {
        "key": "11_13_57",
        "price": "5868.00",
        "store_count": "100"
      },
      "11_13_55": {
        "key": "11_13_55",
        "price": "4858.00",
        "store_count": "100"
      }
    },
    "filter_spec": {
      "网络": [
        {
          "item_id": "11",
          "item": "4G",
          "src": null
        }
      ],
      "内存": [
        {
          "item_id": "13",
          "item": "16G",
          "src": null
        },
        {
          "item_id": "28",
          "item": "32G",
          "src": null
        }
      ],
      "颜色": [
        {
          "item_id": "55",
          "item": "黑色",
          "src": null
        },
        {
          "item_id": "57",
          "item": "金色",
          "src": null
        },
        {
          "item_id": "100",
          "item": "玫瑰金",
          "src": null
        }
      ]
    }
  },
  "status": 1,
  "url": "",
  "state": "success"
}
```

字段 | 类型|描述
---|---|---|---|
goods_info | array|商品基本信息|
goods_images_list | array|商品图册|
goods_attribute | array|商品所属属性|
goods_attr_list | array|商品拥有属性值|
spec_goods_price | array|商品规格对应的价格|
filter_spec | array|商品拥有的规格|



**ps: 失败返回 status != 1,具体看msg信息**


**收货地址这里关系到省市联动效果**