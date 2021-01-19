---
title: Webpack
order: 2
nav:
  title: 工程化
  path: /engineering
  order: 8
---

# webpack

### Webpack热更新的原理

### CodeSplit原理

### Webpack打包内容过大，如何减少？
- 提取第三方库或通过引用外部文件的方式引入第三方库
- 代码压缩插件UglifyJsPlugin
- 服务器启用gzip压缩
- 按需加载资源文件 require.ensure
- 优化devtool中的source-map
- 剥离css文件，单独打包
- 去除不必要插件，通常就是开发环境与生产环境用同一套配置文件导致

### webpack打包效率太低，如何提升？
- 使用HappyPack开启多进程Loader转换
- 使用DllPlugin减少基础模块编译次数

### 按需加载原理

### treeshaking原理 

### 单页面和多页面的区别

### webpack的模块打包原理

### 说一些常用的loader

### 说一些常用的plugin

### loader的执行顺序为什么是后写的先执行

### webpack配置优化
[3.4版本性能优化](https://juejin.cn/post/6844903651291447309)

### plugin与loader的区别

### webpack执行的过程

### 如何编写一个loader、plugin

### 什么是 HMR，原理是什么

### webpack几种hash的实现原理（长缓存）

### splitChunksPlugin原理
