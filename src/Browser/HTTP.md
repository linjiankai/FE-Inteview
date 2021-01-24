---
title: HTTP
order: 1
nav:
  title: 浏览器
  path: /browser
  order: 6
---

# HTTP

### HTTP 的请求方法

- HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法
- HTTP1.1 新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT

### HTTP 的状态码

「1xx」: 代表请求已被接受，需要继续处理。
「2xx」: 表示成功状态。
「3xx」: 重定向状态。
「4xx」: 客户端错误。
「5xx」: 服务器端错误。
[更多参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/HTTP_response_codes)

### HTTP 的请求头包含什么

### WebSocket 和 socket、HTTP 的区别和联系

[WebSocket 和 socket、HTTP 的区别和联系](https://www.cnblogs.com/aspirant/p/11334957.html)

### WebSocket 心跳检测

### HTTPS 的加密方式,混合加密的好处

### http2 和 http1 区别

### http2 有新哪些特性 🧡

- 头部压缩 (HPACK 算法)
- 多路复用
- 服务器推送 (允许服务器未经请求，主动向客户端发送资源)
- 二进制分帧 (头信息帧和数据帧)
- 请求优先级 (可以设置数据帧的优先级)

### http2 多路复用原理

多路复用（MultiPlexing），即连接共享，即每一个 request 都是是用作连接共享机制的。一个 request 对应一个 id，这样一个连接上可以有多个 request，每个连接的 request 可以随机的混杂在一起，接收方可以根据 request 的 id 将 request 再归属到各自不同的服务端请求里面。

### http 握手原理

[参考](https://juejin.cn/post/6844904132071948295)

### HTTP 中的 Keep-Alive 有了解过吗？

### https 协议的工作原理

- 客户使用 https url 访问服务器，则要求 web 服务器建立 ssl 链接。
- web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
- 客户端和 web 服务器端开始协商 SSL 链接的安全等级，也就是加密等级。
- 客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
- web 服务器通过自己的私钥解密出会话密钥。
- web 服务器通过会话密钥加密与客户端之间的通信。

### https 协议的优缺点

### http 和 https 的区别，https 为什么更安全？❤️

### 说说 TCP 三次握手和四次挥手的过程

### 一个 tcp 连接能发几个 http 请求

### Socket、TCP、UDP、HTTP、HTTPS（见表格）

### http 请求可以怎么拦截

### GET 和 POST 的区别

### 在项目中如何把 http 的请求换成 https

### 响应头中 ETag 是怎么生成的

nginx 里面，是由 Last-Modified 和 content-length 的十六进制组合而成 不同 Web 服务器或者 CDN 的 ETag 生成方式不一样。

### 为什么 http1 不能实现多路复用？

http1 阶段是基于文本传输的，由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在接收到响应后，并不能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用。

### fetch 发送跨域 post 请求，出现 2 个请求，原因？解决方法？(需要深入研究)

发送 post 请求使用 OPTIONS 方法，进行预检请求，询问服务端是否允许该跨源请求，然后在允许(204)的情况发送真正的请求
[跨源资源共享(cros)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

### 为什么 cros 能解决跨域？

和第一次发送的 option 请求有关；
跨域时，浏览器会拦截 Ajax 请求，并在 http 头中加 Origin。

### 304 状态码，通过什么来判断是否用缓存

### TTP 如何实现长连接

### websocket 是怎么建立链接的
