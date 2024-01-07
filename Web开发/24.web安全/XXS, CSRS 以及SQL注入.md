#

## web安全漏洞种类

**1、命令注入(Command Injection)**

**2、eval注入(Eval Injection)**

**3、客户端脚本攻击(Script Insertion)**

**4、跨网站脚本攻击(Cross Site Scripting, XSS)**

**5、SQL注入攻击(SQL injection)**

**6、跨网站请求伪造攻击(Cross Site Request Forgeries, CSRF)**

**7、Session 会话劫持(Session Hijacking)**

**8、Session  会话固定（Sessionfixation）**

**9、HTTP响应拆分攻击(HTTP Response Splitting)**

**10、文件上传漏洞(File Upload Attack)**

## XSS漏洞防御

:* **防止XSS解决方案**

XSS的根源主要是没完全过滤客户端提交的数据 ，所以重点是要过滤用户提交的信息。

- 将重要的cookie标记为http only, 这样的话js 中的document.cookie语句就不能获取到cookie了.
- 只允许用户输入我们期望的数据。例如：age用户年龄只允许用户输入数字，而数字之外的字符都过滤掉。
- 对数据进行Html Encode 处理：用户将数据提交上来的时候进行HTML编码，将相应的符号转换为实体名称再进行下一步的处理。
- 过滤或移除特殊的Html标签， 例如: `<script>, <iframe> , < for <, > for >, &quot for`
- 过滤js事件的标签。例如 "onclick=", "onfocus" 等等。

## CSRF漏洞防御

:* **防止CSRF的解决方案**

- 重要数据交互采用POST进行接收，当然是用POST也不是万能的，伪造一个form表单即可破解。
- 使用验证码，只要是涉及到数据交互就先进行验证码验证，这个方法可以完全解决CSRF。但是出于用户体验考虑，网站不能给所有的操作都加上验证码。因此验证码只能作为一种辅助手段，不能作为主要解决方案。
- 验证HTTP Referer字段，该字段记录了此次HTTP请求的来源地址，最常见的应用是图片防盗链。
- 为每个表单添加令牌token并验证。

## SQL注入攻击防御(SQL injection)

1、**SQL注入**

所谓的SQL注入攻击，即一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据。

SQL注入攻击(SQL Injection)，是攻击者在表单中提交精心构造的sql语句，改动原来的sql语句，如果web程序没有对提交的数据经过检查，那么就会造成sql注入攻击。

SQL注入攻击的一般步骤:

- 攻击者访问有SQL注入漏洞的站点，寻找注入点
- 攻击者构造注入语句，注入语句和程序中的SQL语句结合生成新的sql语句
- 新的sql语句被提交到数据库中执行处理
- 数据库执行了新的SQL语句，引发SQL注入攻击

2、**防止SQL注入的方式**

通常情况下，SQL注入的位置包括：

（1）表单提交，主要是POST请求，也包括GET请求；
（2）URL参数提交，主要为GET请求参数；
（3）Cookie参数提交；
（4）HTTP请求头部的一些可修改的值，比如Referer、User_Agent等；

**简要举例**

举一个简单的例子,`select * from user where id=100` ,表示查询id为100的用户信息，如果`id=100`变为 `id=100 or 2=2`,sql将变为：`select * from user where id=100 or 2=2`，将把所有user表的信息查询出来，这就是典型的sql注入。

3、**防止SQL注入的解决方案**

1）对用户的输入进行校验，使用正则表达式过滤传入的参数
2）使用参数化语句，不要拼接sql，也可以使用安全的存储过程
3）不要使用管理员权限的数据库连接，为每个应用使用权限有限的数据库连接
4）检查数据存储类型
5）重要的信息一定要加密
