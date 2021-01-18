---
title: 浏览器
order: 1
nav:
  title: 浏览器
  path: /browser
  order: 6
---

# 浏览器

### URL从输入网址到最终呈现的流程❤️
1. 浏览器的地址栏输入URL并按下回车。
2. 浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
3. DNS解析URL对应的IP。
4. 根据IP建立TCP连接（三次握手）。
5. HTTP发起请求。
6. 服务器处理请求，浏览器接收HTTP响应。
7. 渲染页面，构建DOM树。
8. 关闭TCP连接（四次挥手）。

### EventLoop，浏览器 EventLoop 和 node 的 EventLoop 有什么区别？哪些常见的宏任务微任务？

### 浏览器渲染原理与过程
- 使用 HTML 创建文档对象模型（DOM）
- 使用 CSS 创建 CSS 对象模型（CSSOM）
- 基于 DOM 和 CSSOM 执行脚本（Scripts）
- 合并 DOM 和 CSSOM 形成渲染树（Render Tree）
- 使用渲染树布局（Layout）所有元素
- 渲染（Paint）所有元素

[关键渲染路径](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588806&idx=1&sn=408a54e7c8102fd6944c9a40b119015a&scene=21#wechat_redirect)

--- 

### 浏览器缓存❤️

### 跨域解决方案，跨域传cookie可以使用哪种方法， 表单可以跨域吗？❤️

### 重绘和重排(回流)的区别？如何优化？
- 当页面中元素样式的改变并不影 响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
- 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流

### 本地存储的方式，他们的区别
Cookie、localStorage、sessionStorage

### 怎么判断浏览器是否支持webp， webp优点

### 浏览器白屏是什么导致的

### 谈谈v8引擎

### 谈谈浏览器渲染页面过程

### 描述一下JSONP的原理

### 描述一下CORS的过程

### DNS原理及其解析过程

### 浏览器的事件机制有哪几个阶段？addEventListener的第三个参数起到什么作用

### cookie如何进行设置的，JS能改变哪些值

### 谈谈v8引擎

### 如何实现一个请求超时

### 什么是CRP，即关键渲染路径(Critical Rendering Path)？ 如何优化

### 浏览器如何验证服务器的身份

### 你们的token一般是存放在哪里的，token会不会被伪造？

### redis中一般用来存什么

### 前后端如何验证一个用户是否下线了

### CSP白名单知道吗？

### Script error出现的原因
[跨域错误](https://www.alibabacloud.com/help/zh/doc-detail/88579.htm)

### 浏览器跨标签页的通讯方式
- BroadCast Channel
- Service Worker
- LocalStorage + window.onstorage监听
- Shared Worker + 定时器轮询(setInterval)
- IndexedDB + 定时器轮询(setInterval)
- cookie + 定时器轮询(setInterval)
- window.open + window.postMessage
- Websocket

### 常见的浏览器内核
- Trident 内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称 MSHTML]
- Gecko 内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等
- Presto 内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]
- Webkit 内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

### 浏览器是怎样解析CSS的
从右到左解析

### 多域名重定向（301,302），对SEO有什么影响

### 谈谈Service worker的理解，应用

### 请描述一下DNS解析的具体过程


