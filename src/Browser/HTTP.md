---
title: HTTP
order: 1
nav:
  title: 浏览器
  path: /browser
  order: 6
---

# HTTP

### HTTP的请求方法
- HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法
- HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT

### HTTP的状态码
「1xx」: 代表请求已被接受，需要继续处理。
- 100 Continue，继续发请求
- 101 Switching Protocols，切换协议
  
「2xx」: 表示成功状态。
- 200 OK，正确请求并返回
- 204 No content，请求成功，无返回
- 206 Partial Content，服务器成功处理了部分GET请求

「3xx」: 重定向状态。
- 301 moved permanently，永久性重定向
- 302 found，临时性重定向
- 303 see other， 
- 304 not modified，
- 307 temporary redirect

「4xx」: 客户端错误。
- 400 bad request，客户端请求的语法错误，服务器无法理解
- 401 unauthorized，
- 403 forbidden，
- 404 not found，在服务器上没有找到请求的资源
- 405 Method Not Allowed，

「5xx」: 服务器端错误。
- 500 internal sever error，服务器执行请求发生错误
- 502 Bad Gateway，
- 503 service unavailable，

### HTTP的请求头包含什么

### WebSocket 和socket、HTTP的区别和联系
[WebSocket 和socket、HTTP的区别和联系](https://www.cnblogs.com/aspirant/p/11334957.html)

### HTTPS的加密方式,混合加密的好处

### http2 和http1 区别

### http2 有新哪些特性
- 头部压缩 (HPACK算法)
- 多路复用
- 服务器推送 (允许服务器未经请求，主动向客户端发送资源)
- 二进制分帧 (头信息帧和数据帧)
- 请求优先级 (可以设置数据帧的优先级)

### http2 多路复用原理
多路复用（MultiPlexing），即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。

### http 握手原理

### HTTP中的Keep-Alive有了解过吗？

### http和https的区别，https为什么更安全？

### 说说 TCP 三次握手和四次挥手的过程

### Socket、TCP、UDP、HTTP、HTTPS（见表格）

### http请求可以怎么拦截

### GET 和 POST 的区别

### http请求可以怎么拦截

### 在项目中如何把http的请求换成https
