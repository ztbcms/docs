### 用户-注册



#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=UserApi&a=register`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
username | varchar|是|用户注册的邮箱或者手机|
password | varchar|是|用户注册密码|
password2 | varchar|是|用户注册确认密码|

#### response

```
{
  "info": {
    "userid": "1",
    "email": "",
    "sex": "0",
    "birthday": "0",
    "user_money": "0.00",
    "frozen_money": "0.00",
    "distribut_money": "0.00",
    "pay_points": "0",
    "address_id": "0",
    "reg_time": "1483371522",
    "last_login": "0",
    "last_ip": "",
    "qq": "",
    "mobile": "15088132444",
    "mobile_validated": "1",
    "oauth": "",
    "openid": "",
    "head_pic": "",
    "province": "0",
    "city": "0",
    "district": "0",
    "email_validated": "0",
    "nickname": "15088132444",
    "level": "0",
    "discount": "0.00",
    "total_amount": "0.00",
    "is_lock": "0",
    "is_distribut": "0",
    "first_leader": "0",
    "second_leader": "0",
    "third_leader": "0",
    "token": "9ce184919872f6be2c3328792dcde271"
  },
  "status": 1,
  "url": "",
  "state": "success"
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**登录成功之后返回的shop_user表上的信息。**