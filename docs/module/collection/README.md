## 采集 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Collection.svg?maxAge=36000)

采集模块是可以批量采集目标网站内容入库

<ul>
    <li>下载安装</li>
    <li>采集流程</li>
    <ol>★ 添加采集点，填写采集规则</ol>  
    <ol>★ 采集网址，采集内容
    </ol>
    <ol>★ 发布内容到指定栏目</ol>
</ul>

#### 1、下载安装
> 从ZTBCMS 模块->模块->模块仓库 中找到采集模块，点击下载。

![图片](https://dn-coding-net-production-pp.qbox.me/1e32baa1-7897-419a-9d85-fe835ea79679.png)

> 下载完成后，解压出来，并命名为“Collection”，然后将它copy至项目目录中。

![图片](https://dn-coding-net-production-pp.qbox.me/6d63149d-c6c9-406a-b4c7-43d3dad934a9.png)

![图片](https://dn-coding-net-production-pp.qbox.me/355315ac-1e2c-45df-a751-9e5d10abe34c.png)

> 接着在后台本地模块中进行安装。

![图片](https://dn-coding-net-production-pp.qbox.me/b2fee4be-cb43-464c-b39c-eeef0c272cc7.png)

#### 2、采集流程
> 位置：内容>内容管理>采集管理

![图片](https://dn-coding-net-production-pp.qbox.me/18fe753b-3152-4c1a-b40a-ff78dd7e1730.png)

> 采集流程有三个步骤：
* (1)添加采集点，填写采集规则
* (2)采集网址，采集内容
* (3)发布内容到指定栏目

#### 实例说明：
> 目标：采集新浪新闻

##### (1)添加采集点
##### a、网址规则配置
> 点击系统上“添加采集点”，可以看到在网址规则上的页面中总共有基本信息和网址采集这两个大项的信息需要填写，在网址采集中的网址类型总共有四种：序列网址、多个网址、单一网页和RSS。以下例子是使用多个网址类型来进行采集。

![图片](https://dn-coding-net-production-pp.qbox.me/50317d49-50a3-4724-b4f2-41436d675f44.png)

![图片](https://dn-coding-net-production-pp.qbox.me/fe77ef13-4fb9-450a-9737-b20b46758980.png)

> 设置好网址规则之后，测试一下是否正确

![图片](https://dn-coding-net-production-pp.qbox.me/144b1253-28f0-47bb-a91d-7969ba0b748d.png)

##### b、内容规则配置
> 内容规则这里看起来比较复杂，其实也很简单，以下为了便于说明，只采集标题、内容两个字段。采集内容网址：从网址规则上获取的网址，打开其中一个网址，然后页面空白处右键->查看网页搜索标题和内容的开始边界。

![图片](https://dn-coding-net-production-pp.qbox.me/f4084552-8e21-420b-8c03-bf6ce527d768.png)

* 标题采集配置：
> 从网页&lt;h1 class="main-title"></h1>中获取标题，可以使用规则来去除不必要的字符，如下图：

![图片](https://dn-coding-net-production-pp.qbox.me/1ea2cb2a-ad17-43dd-855b-38897b83694a.png)

* 内容采集配置：
> 新浪新闻的最终页，新闻内容都包含在&lt;div class="article" id="article">[内容]</div>&lt;!-- 正文 end -->之间，而且这二个结点，在整个页面源代码中具有唯一性。所以可以以此为规则取内容。并对内容进行过滤。如下图：

![图片](https://dn-coding-net-production-pp.qbox.me/205f5e93-32e5-498c-a693-846a6d3dbb8c.png)

![图片](https://dn-coding-net-production-pp.qbox.me/8dc925ac-54bf-4036-b392-387395b93879.png)

> 过滤选项格式为“要过滤的内容[|]替换值”，要过滤的内容支持正则表达式，每行一条。 同时还支持函数模式，例如：“fun=str_replace|新浪,sina,###”表示对采集的内容执行替换后返回（###表示采集到的内容，多个参数用“,”隔开）。 注：函数可以添加到 Collection 模块目录下的 Funs 文件夹下的 funs.php 文件中。

##### c、自定义规则
![图片](https://dn-coding-net-production-pp.qbox.me/a1699d46-b34a-4d93-b081-83fb06535999.png)

##### d、高级配置
> 可设置是否把图片下载到服务器，是否打水印等配置

![图片](https://dn-coding-net-production-pp.qbox.me/10f6f8e2-2c1b-45a2-a173-6399bd3f8678.png)

##### (2)采集网址、采集内容
> 采集规则配好以后，即可进行网址的采集，然后进行内容的采集。

![图片](https://dn-coding-net-production-pp.qbox.me/3aa670e0-0e4c-4979-97ef-5d5c98288b90.png)

> 采集到的网址：

![图片](https://dn-coding-net-production-pp.qbox.me/2cabb18b-3189-4efa-9246-e49c25ba7f6f.png)

> 采集到的内容：

![图片](https://dn-coding-net-production-pp.qbox.me/f9a8b34f-cf7f-4616-9674-3e4bca9a25cf.png)

##### (3)发布内容到指定栏目

![图片](https://dn-coding-net-production-pp.qbox.me/0afcf8f3-cee7-4e8c-9192-104a72d7c94b.png)

![图片](https://dn-coding-net-production-pp.qbox.me/22882e2f-cf3e-4733-b373-52056371126e.png)

> 选择要导入的栏目

![图片](https://dn-coding-net-production-pp.qbox.me/748bc936-10c4-466c-8a77-d3e68fbc5101.png)

![图片](https://dn-coding-net-production-pp.qbox.me/62a2d5d1-0696-4614-a126-3e4697946461.png)

> 设置采集内容与数据库的字段对应关系提交进行数据入库，在此期间请耐心等待，完成后会自动转向。至此一个简单的采集流程就操作完成。

![图片](https://dn-coding-net-production-pp.qbox.me/9fbabdf7-c09a-4d1e-98f5-90d936a36a5d.png)

![图片](https://dn-coding-net-production-pp.qbox.me/3f73054a-dbce-42c0-8cd4-a7cfd1290f8f.png)
