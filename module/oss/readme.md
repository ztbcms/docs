## 云存储模块 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Oss.svg?maxAge=36000)

### 是什么

本模块用于上传文件，暂支持「阿里云」与「七牛云」两种云存储。

### 配置

模块安装后，需要配置一些参数，包括AK（AccessKey），SK（AccessKeySecret），阿里云的 endpoint，以及 七牛云的 domain。

#### 阿里云

阿里云的设置比较繁琐，建议直接阅读官方文档

官方文档：[https://help.aliyun.com/document_detail/31932.html?spm=5176.doc31931.6.646.Ie3E9Z](https://help.aliyun.com/document_detail/31932.html?spm=5176.doc31931.6.646.Ie3E9Z)

endpoint 表示 OSS 对外服务的访问域名。OSS 以 HTTP RESTful API 的形式对外提供服务，当访问不同的 Region 的时候，需要不同的域名。通过内网和外网访问同一个 Region 所需要的 Endpoint 也是不同的。进入 OSS 服务，点击指定的存储空间即可获取。

![图片](https://dn-coding-net-production-pp.qbox.me/84da9f89-b201-4c2f-9c80-446455398622.png)


#### 七牛云

七牛云登录管理后台，进入个人中心，点击秘钥管理，即可获取密钥。

 ![图片](https://dn-coding-net-production-pp.qbox.me/61be23d5-3ba2-46c7-b9e8-a86fab468933.png)

 domain 是七牛云对外的访问域名，每个存储空间对外的域名都是不一样的，这个不需要配置，但是在后台生成上传配置的时候需要用到，进入指定的存储空间的内容管理中可获取此访问域名。

 ![图片](https://dn-coding-net-production-pp.qbox.me/82dc2f67-7fb1-496c-8459-32120fd71807.png)


### 上传凭证

为了安全，不管是「阿里云」还是「七牛云」，上传都是需要验证权限的。  

虽然两者都支持前端直接鉴权生成凭证，但这样做就把生成凭证的密钥暴漏了，所以建议使用后台签名，返回上传凭证的方式。

获取上传的凭证的链接由后台提供，前端直接请求即可。

### 阿里云 直接上传

#### 前端

```js
//授权链接，此链接由后台提供
var get_token_url = '';
var OssData = null;

//获取凭证
function getToken() {
    if (!OssData || OssData.expire < new Date().getTime() / 1000) {
        $.ajax({
            url: get_token_url,
            type: 'get',
            dataType: 'json',
            async: false,//使用同步请求，保证 token 的可靠性，如不考虑兼容低版本的浏览器，这里考虑直接使用 async/await
            success: function (res) {
                OssData = res;
            }
        })
    }
}

//上传
function upload() {
        getToken();

        var formData = new FormData();
        // 添加签名信息
        formData.append('OSSAccessKeyId', OssData.accessid);
        formData.append('policy', OssData.policy);
        formData.append('Signature', OssData.signature);
        formData.append('key', OssData.dir);
        formData.append('success_action_status', '201');

        // 添加文件
        var file = document.getElementById('file').files[0];
        formData.append('file', file, file.name);

        $.ajax({
            url: OssData.host,
            data: formData,
            dataType: 'xml',
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                console.log(data)
                if ($(data).find('PostResponse')) {
                    var res = $(data).find('PostResponse');
                    // 文件地址
                    var url = res.find('Location').text()

                    //do string
                }
            },
            error: function (res) {
                console.log(res)
            }
        })
    }
```

#### 后端

```php
//返回 token 
function getToken() {
    $expire_time = 1800;
    AliOssService::init($expire_time);

    $bucket = 'ztb-open'; //存储空间名
    $dir    = 'ztb-open/';//文件前缀，如果以/结尾，则新建目录
    $this->ajaxReturn(AliOssService::getToken($bucket, $dir));
}
```

详细例子可见模块中的 AliyunOssTestController

### 七牛云 直接上传

#### 前端

```js
//授权链接，此链接由后台提供
var get_token_url = '';
var OssData = null;

//获取凭证
function getToken() {
    if (!OssData || OssData.expire < new Date().getTime() / 1000) {
        $.ajax({
            url: get_token_url,
            type: 'get',
            dataType: 'json',
            async: false,//使用同步请求，保证 token 的可靠性，如不考虑兼容低版本的浏览器，这里考虑直接使用 async/await
            success: function (res) {
                OssData = res;
            }
        })
    }
}

//上传
function upload() {
    getToken();

    var formData = new FormData();

    // token
    formData.append('token', OssData.token);

    // file
    var file = document.getElementById('file').files[0];
    formData.append('file', file, file.name);


    $.ajax({
        url: 'http://up.qiniu.com',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (res) {
            // 文件地址
            var url = res.url;

            //do string
        }
    })
}
```

#### 后端

```php
//返回 token 
function getToken() {
    $expire_time = 1800;
    QiniuService::init($expire_time);

    $bucket = 'xxx'; //指定存储空间名
    $domain = 'http://xxxx/';//存储空间外网访问链接，需以/结尾
    $this->ajaxReturn(QiniuService::getToken($bucket, $domain));
}
```

详细例子可见模块中的 QiniuTestController


### 镜像备份

由于历史遗留问题，已存在的项目可能没有接入云存储，而且已经产生了业务数据，如果需要接入云存储，但是不希望进行麻烦的数据迁移，可以通过云存储提供的镜像备份服务来完成数据的无缝迁移。

镜像备份的原理是，当客户端请求的资源在存储云上不存在时，存储云根据服务配置，把请求重定向到配置源，或者主动前往配置源中下载请求资源并存储到存储云中。

当配置源中也找不到指定资源时，云存储返回资源不存在。

### 使用镜像备份

当启用了镜像备份之后，文件的上传就无须上传到云存储服务了，只需要直接上传到源服务器中，当有请求时，云存储服务会自动抓取资源，并下载到云存储服务中去。

### 阿里云 镜像回源

阿里云的镜像备份称作「镜像回源」，开启方式为，进入指定的云存储空间，选择基础设置，滚动到底部找到，「镜像回源」，点击设置，进入回源设置，并创建规则即可，阿里云支持最多5条回源规则，规则匹配顺序为顺序匹配。

 ![图片](https://dn-coding-net-production-pp.qbox.me/3202db45-3227-4903-b938-523005964bc0.png) 
 参考文档： [https://help.aliyun.com/document_detail/31865.html](https://help.aliyun.com/document_detail/31865.html)


### 七牛云 镜像存储
 
七牛云的镜像备份称作「镜像存储」，开启方式为，进入指定的存储空间，选择镜像存储，配置镜像源地址即可，七牛云只支持一个源地址转发规则。

![图片](https://dn-coding-net-production-pp.qbox.me/027f539d-5689-4ec4-9cdc-7256e64ee69d.png)
 
  参考文档： [https://developer.qiniu.com/kodo/kb/1376/seven-cattle-image-storage-instruction-manuals](https://developer.qiniu.com/kodo/kb/1376/seven-cattle-image-storage-instruction-manuals)
    
