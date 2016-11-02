## 行为管理使用

在使用该功能时，请你认真阅读一遍[ThinkPHP - 行为扩展][1]这章节, 需要有了这些预备知识。

CMS中的行为系统改写了ThinkPHP的系统行为实现`app/Libs/System/Hook.class.php`，与TP的行为管理方式
使用略有差异。

CMS中有部分模块使用到了行为管理进行开发。以`Wap`模块为例：

使用方法：

1. 创建 Behavior

一般来说，写在对应模块的下 `Behavior/` 下，命名格式遵循 `XXXBehavior`

 ![图片](https://dn-coding-net-production-pp.qbox.me/55fa11e1-0fcd-4b37-b7f0-2a5172e388df.png)

 主要实现一个 `run(&$data)` 方法

 ```php
<?php

namespace Wap\Behavior;

class WapBehavior {

	public function run(&$data) {
		if (MODULE_NAME == 'Content' && CONTROLLER_NAME == 'Index' && $this->isMobile()) {
			$catid = I('catid', 0, 'intval');
			$id = I('id', 0, 'intval');
			$parameter = $_GET;
			if ($catid && $id) {
				$action = 'shows';
			} else if ($catid && $id == 0) {
				$action = 'lists';
			} else {
				$action = 'index';
			}
			unset($parameter[C('VAR_MODULE')], $parameter[C('VAR_CONTROLLER')], $parameter[C('VAR_ACTION')]);
			redirect(U("Wap/Index/{$action}", $parameter));
		}
	}

	//判断是否属手机
	protected function isMobile() {
        ....
		return true;
	}

}

```

2. 注册 `Behavior` 到行为管理

设置->行为管理->选择对应的行为进行编辑，规则参考[行为规则使用说明](rule.md)

![图片](https://dn-coding-net-production-pp.qbox.me/f700eadb-a253-499f-8743-c2e35fcd8d54.png) 

![图片](https://dn-coding-net-production-pp.qbox.me/f64218a6-4f71-4796-8a06-c4f50c5ca069.png)

测试：用手机打开首页时，自动回跳转到Wap首页。（当然，最好打Log了）

### 如何自定义行为？ 

上述Wap模块只是使用到了系统默认的行为 `app_begin` ，那么如何创建自己的行为呢？

1. 添加行为到行为系统

设置->行为管理->添加行为

![图片](https://dn-coding-net-production-pp.qbox.me/4c304ddd-d29e-4aeb-a3db-94356f1cb8f1.png)


2. 行为埋点触发

![图片](https://dn-coding-net-production-pp.qbox.me/d79b716d-9055-4599-8429-6ca18be1c1fc.png)   


更多可以参考[行为管理最佳实践](../../best_practic/behavior_manage.md)

[1]: http://document.thinkphp.cn/manual_3_2.html#behavior_extend

