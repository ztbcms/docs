## 中国高校管理模块 


#### 通过关键字获取学校列表

注:`keyword`为学校名称关键字（示例：广东）

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getSchoolList&keyword=广东`

返回数据：
```json
{
  "status": "success",
  "data": [
    {
      "school_id": "1814",
      "school_name": "广东工业大学",
      "province_id": "440000",
      "type_id": "1"
    },{
      "school_id": "1816",
      "school_name": "广东海洋大学",
      "province_id": "440000",
      "type_id": "1"
  }
  ],
   "state": "success"
}

```

#### 通过省份id获取学校列表

注:`province_id` 所属省份id

`http://{你的站点}/ztbcms/index.php?g=Area&m=Api&a=getSchoolListByProvinceId&province_id=440000`

返回数据：
```json
{
  "status": "success",
  "data": [
    {
      "school_id": "1808",
      "school_name": "中山大学",
      "province_id": "440000",
      "type_id": "1"
    },
    {
      "school_id": "1809",
      "school_name": "华南理工大学",
      "province_id": "440000",
      "type_id": "1"
    }
  ],
   "state": "success"
}
```

