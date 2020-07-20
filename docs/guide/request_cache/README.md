## 实现原理

实现参考[『Thikphp 3.2-静态缓存』](https://www.kancloud.cn/manual/thinkphp/1839), 静态缓存只能提供HTML的缓存且只能以文件形式进行缓存。而请求缓存，支持ajax/html的缓存，而且可以根据缓存配置自行切换文件/redis的缓存

缓存检测：
1、行为app_begin时，检测路由是否需要有缓存，有则返回缓存内容

缓存更新
2、行为ajax_return/view_filter时，更换请求的缓存内容

## 使用指南

### 1、开启配置`app/Application/Common/config.php`
```php
    // 请求缓存
    'REQUEST_CACHE_ON'    => true, // 开启静态缓存
    'REQUEST_CACHE_TIME'  => 30*60,   // 全局静态缓存有效期（秒）
    // 定义静态缓存规则 ['路由规则'  =>  ['expire'=> 10, 'subscribe'=>['路由1','路由2']]],
    'REQUEST_CACHE_RULES' => array(
        'content/index/test'  => [
            'expire'    => 10000,
            'subscribe' => [ // 依赖test2/test3路由，当test2/test3缓存更新一次后，本路由也需要重新更新缓存
                'Content/Index/test2',
                'Content/Index/test3',
            ]
        ],
        'Content/Index/test2' => [
            'expire'    => 30,
            'subscribe' => []
        ],
        'content/index/test3' => [
            'expire'    => 30,
            'subscribe' => ['Content/Index/test2']
        ],
        'content/index/index' => [], // 最简单配置，默认 全局静态缓存有效期，不依赖其他路由
   ),
```

定义静态缓存规则
- 路由规则：遵循`module/controller/action`
- expire：过期时间
- subscribe： 依赖配置。当依赖的路由缓存失效或更新后，此路由也需要重新更新缓存

### 2、Controller 必须继承自 `Cms.class.php`或其子类

```
// 正确
class MyController extends Base {}
class MyController extends AdminBase {}

// 错误
class MyController extends Controller {}
```

## 最佳实践

- 开发调试时，不建议开启缓存
- 把缓存的驱动改为redis,提升响应速度
- 不建议一个路由同时处理GET/POST,否则缓存会异常，请保持一个路由一种请求方法

## 启示

### 保存缓存内容时，我们采用serialize而非json

serialize 优点
- 体积更小
- 序列化和反序列化性能更优，如下图

![UhjrIf.png](https://s1.ax1x.com/2020/07/20/UhjrIf.png)

参考链接：https://medium.com/@moinuddinchowdhury/serialize-vs-json-67fe872a7755