## 中国区域

### 快速入门

1. 区域查询接口都在`app/Application/Area/Model`目录下，包含省份(Province)、城市(City)、区县(District)
2. HTTP接口在`app/Application/Area/Controller`目录下


### 接口示例

#### 获取全部省份

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getProvinces`

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "110000",
            "areaname": "北京",
            "parentid": "0",
            "shortname": "北京",
            "lng": "116.405289",
            "lat": "39.904987",
            "level": "1",
            "sort": "1"
        },
        ......
    ],
    "state": "success"
}

```


#### 获取省份下的市

示例（广东省）：通过省份id查找下属城市

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getCitiesByProvinceId&id=440000`

注:`id`为省份id

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "445100",
            "areaname": "潮州市",
            "parentid": "440000",
            "shortname": "潮州",
            "lng": "116.632301",
            "lat": "23.661701",
            "level": "2",
            "sort": "1"
        },
       .........
    ],
    "state": "success"
}

```

示例（广东省）：通过省份名称查找下属城市

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getCitiesByProvince&provice_name=广东省`

注:`provice_name`为省份名称（可以是简称）

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "445100",
            "areaname": "潮州市",
            "parentid": "440000",
            "shortname": "潮州",
            "lng": "116.632301",
            "lat": "23.661701",
            "level": "2",
            "sort": "1"
        },
       .........
    ],
    "state": "success"
}

```



#### 获取城市下的区、县

示例（佛山市）: 通过城市id查找下属区县

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getDistrictsByCityId&id=440600`

注：`id`为城市id

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "440604",
            "areaname": "禅城区",
            "parentid": "440600",
            "shortname": "禅城",
            "lng": "113.112411",
            "lat": "23.019644",
            "level": "3",
            "sort": "1"
        },
        ........
    ],
    "state": "success"
}

```

示例（佛山市）: 通过城市名称查找下属区县

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getDistrictsByCity&city_name=佛山市`

注：`city_name`为城市名称

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "440604",
            "areaname": "禅城区",
            "parentid": "440600",
            "shortname": "禅城",
            "lng": "113.112411",
            "lat": "23.019644",
            "level": "3",
            "sort": "1"
        },
        ........
    ],
    "state": "success"
}

```


#### 获取区县下的街道、镇

示例（南海区）：

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getStreetsByDistrictId&id=440605`

注: `id`为区县id

返回数据：
```json
{
    "status": "success",
    "data": [
        {
            "id": "440605125",
            "areaname": "大沥镇",
            "parentid": "440605",
            "shortname": "大沥镇",
            "lng": "113.110573",
            "lat": "23.108711",
            "level": "4",
            "sort": "1"
        },
        ........
    ],
    "state": "success"
}

```
