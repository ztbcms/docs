## 最佳实践

### 1.导入

1.导入时，支持上传`.xls`或`.xlsx`后缀的文件，但建议统一上传xls,因为文档解析兼容性问题。如下图  

![image](https://cloud.githubusercontent.com/assets/6230834/23577517/2f456ce8-00fc-11e7-9112-f619aec29832.png)  


2.导入时，Excel的字段顺序需要跟设置的字段顺序一致


### 2.过滤处理器(FieldFilter)

编写FieldFilter时，把单元格 `$value` 值可能会在值的前后新增空格(如Excel会在值未全数字单元格的前面加上空格，以避免自动转化为科学计数法显示)，如有无需要自行清除多余空格

![图片](https://dn-coding-net-production-pp.qbox.me/d32554ce-0ce9-4443-9c08-d52062b20544.png)


导入导出时默认值这样设置
 ![图片](https://dn-coding-net-production-pp.qbox.me/de5a5f27-db05-4f1d-9a06-f92c808572eb.png) 
 ![图片](https://dn-coding-net-production-pp.qbox.me/76698155-e497-45dd-890c-aff437aceee5.png) 
 
 ### 3.如何自定义导入导出
 
 请看参考`TestController:testExport()`和`TestController:testImport()`
