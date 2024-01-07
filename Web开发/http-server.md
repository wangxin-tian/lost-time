# http-server

## 概述

### 快速开启一个本地服务

### 安装

#### npm i http-server -g 

### 启动

#### http-server -cors -o

## 参数

### -p 或者 --port	端口设置，默认是 8080

### -a	监听地址设置默认是 0.0.0.0

### -d	是否显示文件列表 默认true

### -i	显示自动索引 默认true

### -g 或者 --gzip	默认false，当文件的gzip版本存在且请求接受gzip编码时，它将服务于./public/some-file.js.gz，而不是./public/some-file.js

### -e 或者 --ext	如果没有提供默认文件扩展名(默认为html)

### -s或者 --silent	禁止控制台日志信息输出

### –cors	允许跨域资源共享

### -o	启动服务后打开默认浏览器

### -c	设置缓存cache-control max-age heade存留时间（以秒为单位），示例：-c10是10秒，默认是3600秒，如果要禁用缓存就使用-c-1

### -U 或者 --utc	使用 UTC格式，在控制台输出时间信息

### -P 或者 --proxy	通过一个 url地址，代理不能通过本地解析的资源

### -S 或者 --ssl	使用https协议

### -C 或者 --cert	ssl证书文件的路径，默认是cert.pem

### -K 或者 --key	ssl密匙文件路径

### -h 或者 --help	显示帮助

### 原文链接：https://blog.csdn.net/weixin_53791978/article/details/131715913
