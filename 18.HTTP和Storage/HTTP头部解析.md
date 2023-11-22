# HTTP头部解析

- **请求头**

```
POST / HTTP/1.1
User-Agent: curl/7.26.0
Host: localhost
Accept: */*
Content-Length: 11
Content-Type: application/x-www-form-urlencoded

Hello World
```

这是一个HTTP请求的头部部分，具体解释如下：

1. 请求方法：POST，表示这是一个POST请求。
2. 请求路径：/，表示请求的资源路径为根目录。
3. 协议版本：HTTP/1.1，表示使用的HTTP协议版本是1.1。
4. User-Agent：curl/7.26.0，表示发送请求的客户端是curl工具，版本号为7.26.0。
5. Host：localhost，表示请求的目标主机是localhost。
6. Accept：*/*，表示客户端可以接受任何类型的响应内容。
7. Content-Length：11，表示请求体的长度为11个字节。
8. Content-Type：application/x-www-form-urlencoded，表示请求体的类型为application/x-www-form-urlencoded，即表单格式。
9. 请求体：Hello World，表示表单数据的内容。

总体来说，这个HTTP请求是一个POST请求，请求的目标主机是localhost，请求体是一个包含"Hello World"数据的表单，请求头部中还包含了一些其他的信息，如请求方法、协议版本、客户端信息等。

- **响应头**

```
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 11
Date: Tue, 05 Nov 2013 05:31:38 GMT
Connection: keep-alive

Hello World
```

这是一个HTTP响应的头部部分，具体解释如下：

1. 协议版本和响应状态：HTTP/1.1 200 OK，表示使用的是HTTP 1.1协议，响应状态码为200，表示请求成功。
2. Content-Type：text/plain，表示响应的内容类型是纯文本。
3. Content-Length：11，表示响应消息体的长度为11个字节。
4. Date：Tue, 05 Nov 2013 05:31:38 GMT，表示服务器响应的时间是格林威治标准时间（GMT）的2013年11月5日5时31分38秒。
5. Connection：keep-alive，表示连接是一个持久连接。

接下来是响应消息体部分，它只有一行内容："Hello World"，它的长度是11个字节。因为响应头中指定了Content-Type为text/plain，所以此时客户端应该将响应消息体解析为纯文本。