## 搜索 ![version](https://img.shields.io/github/release/ztbcms/ztbcms-Search.svg?maxAge=36000)

### 环境配置

MySQL 5.6前，只有 MyISAM 引擎支持全文搜索,MySQL 5.6 InnoDB 也支持全文索引。

配置`mysql.cnf` 

```shell
#mysql指定了最小字符长度，默认是4，必须要匹配大于4的才会有返回结果
ft_min_word_len = 2
```

字段是否加入全文搜索

![图片](https://dn-coding-net-production-pp.qbox.me/40168369-816a-4a9d-8163-2c0f2d4956d9.png)
