---
title: Promise
order: 1
nav:
    title: Main
    path: /main
    order: 2

group:
    title: ES6
    path: /es6
    order: 3
---

# Promise

[45 道 Promise 面试题](https://juejin.im/post/6844904077537574919)
[图解 Promise 实现原理](https://zhuanlan.zhihu.com/p/58428287)
[参考](https://juejin.cn/post/6844904096525189128)

### async/await

### promise.all 异常处理

all 和 race 传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被 then 的第二个参数或者后面的 catch 捕获；但并不会影响数组中其它的异步任务的执行。

### Promise 为什么能链式调用

由于它的 then 方法和 catch、finally 方法会返回一个新的 Promise 所以可以允许我们链式调用

### 介绍下 promise 的特性、优缺点，内部是如何实现的，动手实现 Promise

[详解](https://github.com/lgwebdream/FE-Interview/issues/29)
