# 开放平台
> 适用于需要开放部分接口給第三方系统接入，而此时你需要一个开放平台管理，对第三方平台进行管理、授权验证

### 创建应用
![图片](https://dn-coding-net-production-pp.qbox.me/5fa9a386-d580-4a8b-9fa2-f4cae1fdb34e.png)

### 获取app_id与app_secret
- 首次获取app_secret需要重置
![图片](https://dn-coding-net-production-pp.qbox.me/6817b8b1-81ed-4537-a8b2-5e3b8f55b157.png)
![图片](https://dn-coding-net-production-pp.qbox.me/ff6eb91a-055c-4600-8cbe-0c5e52bd0312.png)

### 所有的请求需要都要带上app_id与sign

### 签名规则

- 假如GET请求的参数中含有url,url参数需要urlencode,参与签名的url不需要urlencode

假设传送的GET参数如下：
```
app_id：ZTB488696289
timestamp：1527488472
content：123
url: http%3a%2f%2fwww.zhutibang.cn%3fp1%3dtest1%26p2%3dtest2
```

第一步：对参数按照key=value的格式，并按照参数名ASCII字典序排序如下：
```
app_id=ZTB488696289&content=123&timestamp=1527488472&url=http://www.zhutibang.cn?p1=test1&p2=test2
```
第二步：拼接app_secret
```
app_id=ZTB488696289&content=123&timestamp=1527488472&url=http://www.zhutibang.cn?p1=test1&p2=test2&app_secret=zATURBDPMvpYBAqV1vntHYxdjTFzxhdM
```
第三步：md5，获得签名
```
9583ca6d15af2987960e163a85299f21
```
第四步：最终参数为
```
app_id：ZTB488696289
timestamp：1527488472
content：123
url: http%3a%2f%2fwww.zhutibang.cn%3fp1%3dtest1%26p2%3dtest2
sign: 9583ca6d15af2987960e163a85299f21
```

