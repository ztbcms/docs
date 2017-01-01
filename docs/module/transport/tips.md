### 数据导入导出实战提示

### 导入

- 导入时，支持上传`.xls`或`.xlsx`后缀的文件
- 导入时，Excel的字段顺序需要跟设置的字段顺序一致


#### 过滤处理器(FieldFilter)

编写FieldFilter时，把单元格 `$value` 值可能会在值的前后新增空格(如Excel会在值未全数字单元格的前面加上空格，以避免自动转化为科学计数法显示)，如有无需要自行清除多余空格

![图片](https://dn-coding-net-production-pp.qbox.me/d32554ce-0ce9-4443-9c08-d52062b20544.png)