## 模型相关


### 关联模型 - RelationModel

```php
use Common\Model\RelationModel;
class OrderModel extends RelationModel {

    /**
     * 关联表
     *
     * @var array
     */
    protected $_link = array(
        //订单商品列表
        'orderGoodsData' => array(  //orderGoodsData 未字段名
            "mapping_type" => self::HAS_MANY,
            "class_name" => 'Shop/OrderGoods',  //关联Shop模块下的OrderGoods模型
            "foreign_key" => "order_id", //本表字段
            "mapping_key" => "order_id",  //它表字段
            "mapping_order" => "filter_order ASC", //排序
            "mapping_fields" => "id,username,nickname,store_id",  //返回字段
            "relation_deep" => true //开启深度关联，也就是 模型『Shop/OrderGoods』还有关联，则继续关联获取数据，默认为false
        ),
    );
}
```

### 模型缓存

开启配置

```php
$result = M('Search')->where($where)->cache(true, $cachetime)->select();
```

该模型缓存采用的时候，会以文件形式的缓存改数据。使用的时候，你不需要考虑他的 key 是什么。
