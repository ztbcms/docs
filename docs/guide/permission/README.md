## 后台权限

* 后台菜单管理
* 设置角色与权限管理(设置系统默认的模块)
* 设置权限组(可以给自己创建的模块进行设置权限)


#### 1、后台菜单管理
![图片](https://dn-coding-net-production-pp.qbox.me/9045ada7-5e63-473c-9b63-0e29bd294303.png)
    
如上图所示，进入后台依次点击 设置->系统设置->后台菜单管理，点击之后会出现一个后台菜单管理的界面，如下图所示：

![图片](https://dn-coding-net-production-pp.qbox.me/e1bb92c3-6f15-4447-be5f-f31d0f9269bc.png)

“后台菜单管理“界面是显示所有后台菜单的页面，第二个“添加菜单”是新增后台菜单。
点击“添加菜单”，可以看到如下界面：

![图片](https://dn-coding-net-production-pp.qbox.me/a1d6c986-b73f-4afd-8513-ffd884d39385.png)

##### 上级：这里是选择要添加的菜单的上一级菜单，一般设置为一级菜单，如果要添加的菜单要作为某一个一级菜单的二级菜单或者更高级的菜单，可以在下拉列表找到这个菜单的上级进行选择。
##### 名称：这里填写菜单名称。
##### 模块：这里可以选择CMS上面默认安装的模块，也可以选择自己所安装的模块，上面的例子是显示系统默认安装的内容模块。
##### 控制器：这里可以选择模块下面哪个控制器，如上所示。
##### 方法：这里可以选择控制器下面哪个方法，如上所示。
##### 参数和配置：这两个配置可以不填写，视具体情况而定。
##### 其他的一般默认。

填写完所有的信息之后，点击添加，然后再点击一下系统管理->后台菜单管理，拉到这个页面的最后，就可以看到新添加的内容管理菜单。

![图片](https://dn-coding-net-production-pp.qbox.me/0572660c-aaa6-41d0-80bf-0a921f7d2f95.png)

接着重新刷新一下页面，就可以看到新添加的菜单显示在菜单栏了，如下图所示：

![图片](https://dn-coding-net-production-pp.qbox.me/be6563dc-3961-4745-bd9c-92b38f6cf622.png)

如果要设置一个二级菜单的话，有两种方法实现
##### 第一种方法：
按照创建一级菜单的方法进行设置，然后在选择上级的时候，在下拉列表找到“内容管理”这个一级菜单，选择它作为新创建菜单的上级，点击“添加”之后，这样就设置好了二级菜单。
![图片](https://dn-coding-net-production-pp.qbox.me/de61e744-a6a1-47ea-8c6d-ea82ec94cd0f.png)
![图片](https://dn-coding-net-production-pp.qbox.me/871e64e3-444c-4547-95e6-3cfdd1d19893.png)

##### 第二种方法：
在后台菜单管理详情页面上找到“内容管理”这个一级菜单，然后点击“添加子菜单”，这样也可以设置二级菜单。
![图片](https://dn-coding-net-production-pp.qbox.me/54dd25b3-1fcf-4e74-91a7-fab8b0bd0f28.png)

#### 2、设置角色
##### 第一步：设置角色管理
进入后台依次点击 模块->管理员设置->角色管理，然后点击“添加角色”，出现如下界面：
![图片](https://dn-coding-net-production-pp.qbox.me/2a678502-3aa0-4195-b3c9-5a4285d94ce5.png)

可以在上面选择要添加父角色(一般默认超级管理员)、角色名称和角色描述等
![图片](https://dn-coding-net-production-pp.qbox.me/cddd73c9-c586-42de-94f4-695374b54c8b.png)

如上图，填写一个“内容管理员”角色，点击“提交”之后就创建了一个“内容管理员”的角色。
![图片](https://dn-coding-net-production-pp.qbox.me/928cb7ce-180d-4a24-88b7-f764ce194c2e.png)

上图红色正方形处可以给这个角色进行权限组设置、权限设置、栏目设置等，这三个是最重要的。
##### 第二步：给这个角色设置权限
经过第一步创建了角色，接着就要给这个角色设置权限，首先说一下权限设置，点击“权限设置”，可以给角色授权系统的一些功能，找到新添加的菜单给创建的角色授权，如下图所示：
![图片](https://dn-coding-net-production-pp.qbox.me/a279432f-8670-4ed7-b2ba-9c259350d28b.png)

点击“授权”，再给这个角色授权栏目权限，点击“栏目设置”，如下图所示：
![图片](https://dn-coding-net-production-pp.qbox.me/8de460e9-df6d-4343-ad06-8978ab844a2f.png)

可以给这个角色授权栏目的查看、添加、删除、修改等功能。
##### 第三步：添加管理员
点击“提交”之后，接着下一步就是添加该系统的管理员，点击“管理员管理”，如下图所示：
![图片](https://dn-coding-net-production-pp.qbox.me/06f1a6f4-16f6-43a3-93e5-5a631457a690.png)

然后点击“添加管理员”，出现如下图的界面：
![图片](https://dn-coding-net-production-pp.qbox.me/769214d3-6a33-4911-b6c9-7ac356a301c6.png)

按照要求填写信息，但要注意一点就是“所属角色”这个选项，选择刚刚添加的“内容管理员”这个角色。
![图片](https://dn-coding-net-production-pp.qbox.me/7b4eae9b-f612-4bf8-ae43-80beeb9268fe.png)

然后重新登录系统，用刚刚创建的管理员（PHPer）登录系统，登录成功之后，可以看到系统只显示内容管理这个菜单。
![图片](https://dn-coding-net-production-pp.qbox.me/82d9ecfe-0b85-4d74-bd7d-61a00e47f5e3.png)

#### 3、设置权限组(可以给自己创建的模块进行设置权限)
另一种方法实现管理员权限设置。
点击“权限设置”，会看到“权限组”，点击进去，可以看到如下图所示界面：
![图片](https://dn-coding-net-production-pp.qbox.me/4f306a5e-faef-4a09-814a-735b5626d14e.png)

然后点击“添加”，可以看到如下界面：
![图片](https://dn-coding-net-production-pp.qbox.me/d72654ac-b1b8-4e01-97f6-1915863e4983.png)

按照要求填写信息，如下例子添加一个后台内容管理的权限组。
![图片](https://dn-coding-net-production-pp.qbox.me/09c666af-8b54-45eb-8644-a75e42caca61.png)

点击“提交之后”，就添加了一个权限组，接着给这个权限组添加权限，如下图给这个权限组添加内容管理菜单的权限管理。
![图片](https://dn-coding-net-production-pp.qbox.me/59d6f29a-59d0-4fad-ad8d-2e5e4add267e.png)

添加完权限，就可以看到“后台内容管理”这个权限组所拥有的权限，如下图所示：
![图片](https://dn-coding-net-production-pp.qbox.me/f40a51db-d228-4345-b2e1-aa55f09a7ff9.png)

接着，再点击“角色管理”，找到“站点管理员”这个角色，点击“权限组设置”，出现如下界面：
![图片](https://dn-coding-net-production-pp.qbox.me/d117f83b-8be3-4c9f-80b6-5f7440d0392e.png)

然后再给站点管理员这个角色添加权限组“后台内容管理”。
![图片](https://dn-coding-net-production-pp.qbox.me/08614233-7207-475b-b681-7a1a8820e2d5.png)

确认选择之后，就给“内容管理角色”设置好了“后台内容管理”这个权限组，然后退出系统，使用创建的管理员“PHP开发”登录进去系统，系统只显示内容管理这个菜单。
![图片](https://dn-coding-net-production-pp.qbox.me/496c4240-4bd7-459c-bb5c-b8a79d37681b.png)

#### 4、icon设置
![图片](https://dn-coding-net-production-pp.qbox.me/afe45fce-69a9-4cd7-8d38-e2908aa70e8f.png)
![图片](https://dn-coding-net-production-pp.qbox.me/7579b6d2-a62e-411e-8bfd-f5e286980dc9.png)
##### icon设置需要引入iconfont.css
http://www.iconfont.cn
##### 系统默认图标 statics/css/iconfont/iconfont.css
![图片](https://dn-coding-net-production-pp.qbox.me/868aa9ab-953f-4970-b83c-14e1bd7e5cbc.png)
