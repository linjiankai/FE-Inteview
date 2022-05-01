---
title: Webpack
order: 2
nav:
    title: 工程化
    path: /engineering
    order: 8
---

# webpack

[参考](https://juejin.cn/post/6844904007362674701)
[参考](https://juejin.cn/post/6844904094281236487)

### Webpack 热更新的原理

### CodeSplit 原理

### Webpack 打包内容过大，如何减少？

-   提取第三方库或通过引用外部文件的方式引入第三方库
-   代码压缩插件 UglifyJsPlugin
-   服务器启用 gzip 压缩
-   按需加载资源文件 require.ensure
-   优化 devtool 中的 source-map
-   剥离 css 文件，单独打包
-   去除不必要插件，通常就是开发环境与生产环境用同一套配置文件导致

### webpack 打包效率太低，如何提升？

-   使用 HappyPack 开启多进程 Loader 转换
-   使用 DllPlugin 减少基础模块编译次数

### 按需加载原理

### treeshaking 原理

### 单页面和多页面的区别

### webpack 的模块打包原理

### 说一些常用的 loader

### 说一些常用的 plugin

### loader 的执行顺序为什么是后写的先执行

### webpack 配置优化

[3.4 版本性能优化](https://juejin.cn/post/6844903651291447309)

### plugin 与 loader 的区别

### webpack 执行的过程

### 如何编写一个 loader、plugin

### 什么是 HMR，原理是什么

### webpack 几种 hash 的实现原理（长缓存）

### splitChunksPlugin 原理

### module chunk bundle 分别什么意思，什么区别

### webpack 如何实现懒加载

### webpack 常见性能优化

### babel-runtime 和 babel-polyfill 的区别
