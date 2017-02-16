## 测试Behavior

Behavior 遵循TP的自动加载方式，所以直接创建对应的Behavior 并填写模拟参数调用run()方法即可

样例：

行为`PaidChongzhiOrderBehavior.class.php`

```php
/**
 * 支付充值订单后
 */
class PaidChongzhiOrderBehavior extends BaseBehavior  {

    /**
     * @param PaidOrderBehaviorParam $param
     */
    public function run(&$param) {
        parent::run($param);

        //你的代码
    }
}
```

Behavior参数类`PaidOrderBehaviorParam.class.php`

```php
class PaidOrderBehaviorParam extends BaseBehaviorParam {

    /**
     * @var 订单号
     */
    public $orderid;

}
```

调用样例：

```php
<?php

namespace Payment\Controller;

use Common\Controller\Base;
use Payment\Behavior\PaidChongzhiOrderBehavior;
use Payment\BehaviorParam\PaidOrderBehaviorParam;

class TestController extends Base {

    function testPaidChongzhiOrderBehavior(){
        $b = new PaidChongzhiOrderBehavior();
        $bp = PaidOrderBehaviorParam::create(['orderid' => '2016111011144970299']);
        $b->run($bp);
    }
}
```

### 建议

为每个行为都配合写一个 PaidOrderBehaviorParam ，这样明确了，执行该行为的回调函数时
到底含有哪一些参数

`BaseBehavior.class`参考如下（未来将会内置到 CMS 中）：

```php

<?php

namespace Common\BehaviorParam;
/**
 * 行为回调参数
 *
 */
class BaseBehaviorParam {
    function __get($name) {
        return $this->$name;
    }
    function __set($name, $value) {
        $this->$name = $value;
    }
    /**
     * 创建参数实例
     * @param array $data
     * @return mixed
     */
    static function create(array $data) {
        $class = __CLASS__;
        $param = new $class;
        foreach ($data as $key => $val){
            if(empty($param->$key)){
                $param->$key = $val;
            }
        }
        return $param;
    }
}
```


