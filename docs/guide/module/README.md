<center> <h2>模块开发</h2></center>
<ul>
    <li>模块的下载与安装</li>
    <li>模块目录结构</li>
    <li>如何编写模块</li>
</ul>

#### 1、模块的下载与安装

> 首先，来看一下ZTBCMS的目录结构：

![图片](https://dn-coding-net-production-pp.qbox.me/349dfec4-0853-47ec-95be-35f6825ceada.png)

> 如上图所示，红色方框内就是安装ZTBCMS之后，系统默认下载好的模块了，而开发的时候需要用到一些另外的模块，比如微信管理模块，短信模块等，这些就需要从ZTBCMS系统后台下载。</br>
#### ★ 模块的下载：
> 进入后台，依次点击 模块->模块仓库，如下图所示：</br>
![图片](https://dn-coding-net-production-pp.qbox.me/99db96ff-1ae9-4713-a1b8-edab879ac480.png)

> 接着就列出来ZTBCMS系统已经开发好的一些模块了，如下图所示(由于模块数量比较多，就不全部罗列出来了)：
![图片](https://dn-coding-net-production-pp.qbox.me/66b654f2-bdd6-42d9-a7ea-32c5534690cc.png)

> 接下来模块下载就是很简单的一步了，比如拿下载微信管理模块作为例子：</br>
> 首先找到微信管理模块，可以看到微信模块后面说明了这个模块的作用和版本等，一般选择最新的一个版本，点击“下载”。

![图片](https://dn-coding-net-production-pp.qbox.me/88dfc9fe-95b5-4dea-aab4-da567561e4ab.png)

![图片](https://dn-coding-net-production-pp.qbox.me/04ad8af9-0875-49c4-981a-79ac4273d3a5.png)

> 下载完成之后，然后将它解压至ZTBCMS的app->Application模块目录下，可以对它重新命名。
![图片](https://dn-coding-net-production-pp.qbox.me/61fa4476-8674-47f0-b293-0a67e7cf8159.png)

> 接着进入系统后台，依次点击 模块->本地模块，就可以看到新下载的模块了。
![图片](https://dn-coding-net-production-pp.qbox.me/c1b63546-93e4-4e52-8176-fe26c16e30b1.png)

#### ★ 模块的安装：
> 这个样子还需要最后一步了，就是点击“安装”，安装完之后就可以在框架中使用了。 </br>
其他模块在这里就可以使用了，但是“微信管理”模块的安装还需要在本地模块中安装“会员中心“模块，如下图所示：
![图片](https://dn-coding-net-production-pp.qbox.me/568986ad-97bc-4718-a906-866139aa0761.png)

> 安装完“会员中心模块“之后，接着就可以安装”微信管理“模块了。
![图片](https://dn-coding-net-production-pp.qbox.me/b02d74d6-8dbe-416e-832e-49e03666cb38.png)

> 接着看一下ZTBCMS的目录结构，如下所示(红色方框就是微信管理模块)：
![图片](https://dn-coding-net-production-pp.qbox.me/8fc1e459-aa82-47d3-97b9-d49a8f90818f.png)

### 2、制作模块
> 首先先了解一下模块的基本目录结构:

![图片](https://dn-coding-net-production-pp.qbox.me/38beccd2-4c19-4d53-b76e-8e182aed6966.png)

> Behavior 是行为扩展目录 </br>
Behavior 是行为扩展参数目录 </br>
Common 是自定义函数目录 </br>
Conf 是该模块相关配置目录 </br>
Controller 是控制器目录 </br>
Install 是模块安装文件目录 </br>
Model 是模块所拥有的模型存放目录 </br>
Uninstall 是模块卸载程序目录 </br>
View 是模块视图模板目录 </br>
Config.inc.php 是模块配置文件 </br>

> 以上就是一个模块的比较齐全的目录了，但是在开发的时候，Config.inc.php模块配置文件和Controller控制器目录是必须的，其他目录视情况而定。

##### 配置文件：
> 每个模块目录里，都有一个Config.inc.php配置文件，这里讲解下这个配置文件如何使用：</br>
return array( </br>
    &emsp;&emsp;//模块名称 </br>
    &emsp;&emsp;'modulename' => '模块名称', </br>
    &emsp;&emsp;//图标 </br>
    &emsp;&emsp;'icon' => 'https://dn-coding-net-production-pp.qbox.me/e57af720-f26c-4f3b-90b9-88241b680b7b.png', </br>
    &emsp;&emsp;//模块简介 </br>
    &emsp;&emsp;'introduce' => '模块简介', </br>
    &emsp;&emsp;//模块介绍地址 </br>
    &emsp;&emsp;'address' => 'http://www.ztbcms.com', </br>
    &emsp;&emsp;//模块作者 </br>
    &emsp;&emsp;'author' => 'ZTBCMS', </br>
    &emsp;&emsp;//作者地址 </br>
    &emsp;&emsp;'authorsite' => 'http://www.ztbcms.com', </br>
    &emsp;&emsp;//作者邮箱 </br>
    &emsp;&emsp;'authoremail' => 'admin@ztbcms.com', </br>
    &emsp;&emsp;//版本号，请不要带除数字外的其他字符 </br>
    &emsp;&emsp;'version' => '1.0.0.0', </br>
    &emsp;&emsp;//适配最低版本， </br>
    &emsp;&emsp;'adaptation' => '3.0.0.0', </br>
    &emsp;&emsp;//签名 </br>
    &emsp;&emsp;'sign' => ''模块签名，需要ztbcms扩展中心唯一', </br>
    &emsp;&emsp;//依赖模块 </br>
    &emsp;&emsp;'depend' => array(), </br>
    &emsp;&emsp;//注册缓存 </br>
    &emsp;&emsp;'cache' => array(), </br>
    &emsp;&emsp;//行为 </br>
    &emsp;&emsp;'tags' => array(), </br>
);

> 上面就是模块配置文件的基本格式了。需要注意的是sign签名可以使用MD5加密技术对模块名称进行加密，然后将加密后的字符赋值给sign签名。

> 在ZTBCMS中，创建好这个配置文件之后，依次点击模块->本地模块，就可以看到新创建的模块了，如下例子是创建了一个名为“测试所用”的MyTest模块。
![图片](https://dn-coding-net-production-pp.qbox.me/09b3f39e-93f2-4301-b1a6-27fb74eafa42.png)

![图片](https://dn-coding-net-production-pp.qbox.me/79f1ddaa-cfdc-42fc-af94-6c8cd8a3d310.png)

> 点击“安装”之后，系统就可以使用这一个新创建的模块了。

