## 性能优化

### 软件层面的优化

- PHP
    - 开启OPCache
- Apache
    - 根据服务器的操作系统，进行MPM的参数调优
- CDN
    - 静态资源采用CDN,推荐使用七牛，利用其镜像功能能快速把资源目录`d/`放置到CDN上
- MySQL 参数调优

### 采用缓存

把不经常变化的内容缓存起来

- [content][1] 标签设置`cache`时间
- [position][2] 标签设置`cache`时间


### 页面预生成

- 生成首页


[1]: ../../guide/template/tag/content.html
[2]: ../../guide/template/tag/position.html