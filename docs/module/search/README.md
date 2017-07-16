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

### 搜索页面入口？

```
http://you_domain.com/index.php?g=Search
```

### 如何主动更新索引？

更新索引，更新需要检索字段的分词
```php
$SearModel::search_api($id, $data, $modelid);

# data 为传入该行数据 ，由$modelid + $id 两条件筛选出来
```

### 如何根据输入的关键字获取索引结果？

思路：先把关键字分词，然后进行检索。

核心代码
```php
//分词结果
if ($this->config['dzsegment']) {
    //用discuz的分词接口，http调用，比较耗时
    $segment_q = D('Search/Search')->discuzSegment($q);
} else {
    //内置的分词方法
    $segment_q = D('Search/Search')->segment($q);
}
if (!empty($segment_q[0]) && $this->config['segment']) {
    $words = $segment_q;
    $segment_q = implode(' ', $segment_q);
    $where['_string'] = " MATCH (`data`) AGAINST ('{$segment_q}' IN BOOLEAN MODE) ";
} else {
    //不推荐，性能差。若分词失败什么的，用最暴力的模糊查询
    $likeList = explode(' ', $q);
    if (count($likeList) > 1) {
        foreach ($likeList as $k => $rs) {
            $likeList[$k] = "%{$rs}%";
        }
        $where['data'] = array('like', $likeList, 'or');
    } else {
        $where['data'] = array('like', "%{$q}%");
    }
    $words = array($q);
}
//查询结果缓存
if ($cachetime) {
    //统计
    $count = M('Search')->where($where)->cache(true, $cachetime)->count();
    $page = page($count, $pagesize);
    $result = M('Search')->where($where)->cache(true, $cachetime)->limit($page->firstRow . ',' . $page->listRows)->order($order)->select();
} else {
    $count = M('Search')->where($where)->count();
    $page = page($count, $pagesize);
    $result = M('Search')->where($where)->limit($page->firstRow . ',' . $page->listRows)->order($order)->select();
}
```