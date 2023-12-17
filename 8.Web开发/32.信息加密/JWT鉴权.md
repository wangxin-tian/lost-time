#

## 鉴权

### jwt认证流程

1. 浏览器发起请求登陆，携带用户名和密码；
2. 服务端根据用户名和密码到数据库验证身份，根据算法，将用户标识符打包生成 token,
3. 服务器返回JWT信息给浏览器，JWT不应该包含敏感信息，这是很重要的一点
4. 浏览器发起请求获取用户资料，把刚刚拿到的 token一起发送给服务器，一般放在header里面，字段为authorization
5. 服务器发现数据中有 token，decode token的信息，然后再次签名，验明正身；
6. 服务器返回该用户的用户资料；
7. 服务器可以在payload设置过期时间， 如果过期了，可以让客户端重新发起验证。

### 负载、载荷

Payload 负载、载荷，JWT 规定了7个官方字段

> iss (issuer)：签发人
> exp (expiration time)：过期时间
> sub (subject)：主题
> aud (audience)：受众
> nbf (Not Before)：生效时间
> iat (Issued At)：签发时间
> jti (JWT ID)：编号

