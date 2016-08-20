## 中国区域模块 


#### 获取全部省份

http://fenxiangbei.dev:8888/ztbcms/index.php?g=Area&m=Api&a=getProvinces


#### 获取省份下的市

示例（广东省）：http://fenxiangbei.dev:8888/ztbcms/index.php?g=Area&m=Api&a=getCitiesByProvinceId&id=440000

id为省份id


#### 获取城市下的区、县

示例（佛山市）：http://fenxiangbei.dev:8888/ztbcms/index.php?g=Area&m=Api&a=getDistrictsByCityId&id=440600

id为城市id

#### 获取区县下的街道、镇

示例（南海区）：http://fenxiangbei.dev:8888/ztbcms/index.php?g=Area&m=Api&a=getStreetsByDistrictId&id=440605

id为区县id