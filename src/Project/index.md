---
title: 项目方案
order: 1
nav:
  title: 项目
  path: /project
  order: 7
---

# 项目方案


### 前端兼容性问题 
- CSS Hack

### 管理员账户和普通账户登陆后，sideBar可以根据不同账户展现不同东西，如何做到？

### 前端安全，常见的 web 

### 前端资源独立发布系统

### 前端埋点监控上报
用户行为监控 性能监控 异常监控
[参考1](https://juejin.cn/post/6844903535889367054)

### 前端微服务的实现方法

### 前端权限控制 （登录权限，路由权限）

### 模板引擎

### 前端持续集成

### 可视化（地图、echats、canvas、webgl、d3.js、three.js）

### 跨平台（flutter、react-native、weex、electron）

### 前端如何处理十万级别的大量数据

### 通常在发送数据埋点请求的时候使用的是 1x1 像素的图片？
不存在跨域问题 执行过程无阻塞 体积较小 不占用ajax的请求限额

### 接口防刷方法
- 网关控制流量洪峰，对在一个时间段内出现流量异常，可以拒绝请求（参考个人博客文章 https://mp.csdn.net/postedit/81672222）
- 源ip请求个数限制。对请求来源的ip请求个数做限制
- http请求头信息校验；（例如host，User-Agent，Referer）
- 对用户唯一身份uid进行限制和校验。例如基本的长度，组合方式，甚至有效性进行判断。或者uid具有一定的时效性
- 前后端协议采用二进制方式进行交互或者协议采用签名机制
- 人机验证，验证码，短信验证码，滑动图片形式，12306形式

### 国际化方案
国际化后出现样式布局问题的通用方案
[kiwi](https://github.com/alibaba/kiwi)

### PWA
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)






