---
title: 浏览器
order: 1
nav:
    title: 浏览器
    path: /browser
    order: 6
---

# 浏览器

[参考](https://juejin.cn/post/6844904040346681358)

### URL 从输入网址到最终呈现的流程 ❤️

1. 浏览器的地址栏输入 URL 并按下回车。
2. 浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期。
3. DNS 解析 URL 对应的 IP。
4. 根据 IP 建立 TCP 连接（三次握手）。
5. HTTP 发起请求。
6. 服务器处理请求，浏览器接收 HTTP 响应。
7. 渲染页面，构建 DOM 树。
8. 关闭 TCP 连接（四次挥手）。

### EventLoop，浏览器 EventLoop 和 node 的 EventLoop 有什么区别？哪些常见的宏任务微任务？

### 浏览器渲染原理与过程

-   使用 HTML 创建文档对象模型（DOM）
-   使用 CSS 创建 CSS 对象模型（CSSOM）
-   基于 DOM 和 CSSOM 执行脚本（Scripts）
-   合并 DOM 和 CSSOM 形成渲染树（Render Tree）
-   使用渲染树布局（Layout）所有元素
-   渲染（Paint）所有元素

[关键渲染路径](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588806&idx=1&sn=408a54e7c8102fd6944c9a40b119015a&scene=21#wechat_redirect)

---

### 浏览器缓存 ❤️

### 重绘和重排(回流)的区别

-   当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
-   当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流

### 如何减少重绘和回流的次数(优化)

![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/345c2632d626430c88569741450c9309~tplv-k3u1fbpfcp-zoom-1.image?imageslim)

### 本地存储的方式，他们的区别

Cookie、localStorage、sessionStorage
区别：

-   数据存储大小
    cookie：4kb
    webStorge：5mb
-   数据存储有效期限
    cookie：根据自己的设置时间
    sessionStorage：关闭窗口后失效
    localStorage：永久有效除非 js 删除或者浏览器删除
-   作用域
    cookie 和 localStorage 是在同源窗口，同一个浏览器共享的，sessionStorage 只在同一个标签页共享。

### 怎么判断浏览器是否支持 webp， webp 优点

### 浏览器白屏是什么导致的 🧡

### 谈谈 v8 引擎,如何解析一段 js 代码

先转成 AST 树，再转成机器码，最后转为字节码，执行字节码。浏览器对重复的 js 代码有优化 即时编译技术，如果发现一段代码经常使用，则不用转字节码 直接执行机器码

### 谈谈浏览器渲染页面过程

### 描述一下 JSONP 的原理

### 描述一下 CORS 的过程

### DNS 原理及其解析过程

### DNS 解析耗时吗？「耗时的，因为要查看是否有缓存」如何优化?

dns 预解析

### 浏览器的事件机制有哪几个阶段？addEventListener 的第三个参数起到什么作用

### cookie 如何进行设置的，JS 能改变哪些值

### 如何实现一个请求超时

### 什么是 CRP，即关键渲染路径(Critical Rendering Path)？ 如何优化

### 浏览器如何验证服务器的身份

### 你们的 token 一般是存放在哪里的，token 会不会被伪造？

### redis 中一般用来存什么

### 前后端如何验证一个用户是否下线了

### CSP 白名单知道吗？

### Script error 出现的原因

[跨域错误](https://www.alibabacloud.com/help/zh/doc-detail/88579.htm)

### 浏览器跨标签页的通讯方式

-   BroadCast Channel
-   Service Worker
-   LocalStorage + window.onstorage 监听
-   Shared Worker + 定时器轮询(setInterval)
-   IndexedDB + 定时器轮询(setInterval)
-   cookie + 定时器轮询(setInterval)
-   window.open + window.postMessage
-   Websocket

### 常见的浏览器内核

-   Trident 内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称 MSHTML]
-   Gecko 内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等
-   Presto 内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]
-   Webkit 内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

### 浏览器是怎样解析 CSS 的

从右到左解析

### 多域名重定向（301,302），对 SEO 有什么影响

### 谈谈 Service worker 的理解，应用

[参考](https://juejin.cn/post/6844904082721767431)

### 浏览器的三级缓存策略了解吗

### 错误监控

1. 前端错误的分类和错误的捕获方式
    - 即时运行错误的捕获方式： `try...catch`,`window.onerror`
    - 资源加载错误：`object.onerror`, `performance.getEntries()`, `Error事件捕获`
2. 上报错误的原理
    - 采用 Ajax 通信的方式上报
    - 利用 Image 对象上报（常用方案）  
      `(new Image()).src = "http://baidu.com.tesjk?r=tksjk"`

### 跨域 js 运行错误可以捕获吗？错误提示什么？应该怎么处理？

可以，控制台报错 Script error
处理：

1. 在 script 标签添加 crossorigin 属性
2. 设置 js 资源响应头 Access-Control-Allow-Origin: \*
