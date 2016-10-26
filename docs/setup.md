### 环境要求

- Mysql 5.5+
- curl
- mysql-client 
- apache2 
- php5(5.5+)
    - php5-curl 
    - php5-gd

环境需要支持PDO数据库连接
注：http://blog.163.com/song_0803/blog/static/4609759720113163623385/

### 环境配置(在Ubuntu环境下)

详情请看`Makefile`

```shell
# 初始化Ubuntu环境(相关依赖安装)
$ make setup-ubuntu-env

# 修改权限
$ make setup-env
```

推荐：[CentOS/Debian/Ubuntu LAMP一键安装](https://github.com/teddysun/lamp)

## 下载安装

下载最新**稳定版**
```shell
$ git clone --branch master https://github.com/ztbcms/ztbcms.git
```

下载最新**开发版**(慎用)
```shell
$ git clone https://github.com/ztbcms/ztbcms.git
```
把项目放置到www目录，推荐用根目录的形式运行该应用。

用php内置HTTP Server一键开启应用:
```shell
$ cd ztbcms
$ php -S 127.0.0.1:8080 -t .
```

访问 `http://localhost:8080` 即可

### 根据安装程序安装好后，进入后台需要进行如下操作：

* 更新站点缓存。
* 进入 内容 -> 批量更新URL 更新地址。
* 进入 内容 -> 批量更新栏目页 进行生成栏目页。
* 进入 内容 -> 批量更新内容页 进行生成内容页。
* 进入 模块 -> 搜索配置 -> 重建索引 进行搜索数据的重建。


    
