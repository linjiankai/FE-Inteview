---
title: ES6
order: 6
nav:
  title: Main
  path: /main
  order: 2
group:
  title: ES6
  path: /es6
  order: 3
---

# ES6

[参考 1](https://juejin.cn/post/6844903726201700365)
[参考 2](https://juejin.cn/post/6844903726168145933)
[参考 3](https://juejin.cn/post/6844903775329583112)
[参考 4](https://juejin.cn/post/6844903811622912014)
[参考 5](https://juejin.cn/post/6844904023787569159)

### Set 和 Map 区别

- Set 是一种叫做集合的数据结构(类似于数组)，Map 是一种叫做字典的数据结构(类似于['key': value])。
- 共同点：集合、字典 可以储存不重复的值
- 不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存

[Set、WeakSet、Map 及 WeakMap](https://github.com/sisterAn/blog/issues/24)

### 箭头函数和普通函数的区别

- 没有单独的 this
- 不绑定 arguments
- 箭头函数不能用作构造器，和 new 一起用会抛出错误
- 箭头函数没有 prototype 属性

### 箭头函数为什么不能作为构造函数

### 什么时候你不能使用箭头函数？? 说出三个或更多的例子

### 模块化：ES6，CommonJS，AMD，CMD 及区别？

### import 和 require 的区别

### var、let、const 的区别是什么

### 解释一下 Object.freeze() 和 const 的区别（冻结对象）

### ES6 中的临时死区是什么

### 什么是 IIFE (立即调用的函数表达式)

### 在 JS 中定义枚举的首选语法是什么

### 使用 Proxy 实现简单的数据绑定

### 扩展运算符... 和用途

- 克隆数组/对象

- 将类数组结构转换为数组

- 延展操作符作为参数

- 将元素添加到数组/对象

- 合并数组/对象

### for of 和 for in 区别 ❤️

[参考](https://www.jianshu.com/p/c43f418d6bf0)

### Proxy 相比于 Object.defineProperty() 的优势 🧡

### common.js 和 es6 中模块引入的区别

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJs 是单个值导出，ES6 Module 可以导出多个
- CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
- CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined

### 可选链操作符?.

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE)
