### 用户-注册



#### request

 **method** ：post
 
 **URL**： `index.php?g=Shop&m=UserApi&a=reg`
 

 
字段 | 类型|是否必须|描述
---|---|---|---|
username | varchar|是|用户注册的邮箱或者手机|
password | varchar|是|用户注册密码|
password2 | varchar|是|用户注册确认密码|

#### response

```
{
  "status": 1,
  "msg": "注册成功",
  "result": null
}
```

**ps: 失败返回 status != 1,具体看msg信息**


**登录成功之后返回的shop_user表上的信息。**