[HTTP/2 服务器推送](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)
HTTP/2协议的主要目的是提高网页性能。
头信息(header)原来是直接传输文本， 压缩后传输。 原来是在同一个TCP连接里面， 
上一个回应response 发送完了， 再下一个， 现在可以多个回应一起。

server push  HTTP/2协议里面， 不需要开发者自己配置的功能。

## 传统网页请求方式
GET /index.html HTTP/1.1
GET /style.css HTTP/1.1
GET /example.png HTTP/1.1

至少两轮HTTP通信
收到样式文件前， 网页会显示一片空白， 超过2秒， 体验不好。

## 传统方式的改进
减少http请求   违反分工原则
style +   Base64
预加载   提前下载时间， 并没有减少HTTP请求

三 服务器推送的概念
还没有收到浏览器的请求， 服务器就把各种资源推送给服务器。

四 Nginx 实现


