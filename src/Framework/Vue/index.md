---
title: Vue
nav:
    title: Framework
    path: /framework
    order: 3
group:
    title: Vue
    path: /Vue
    order: 3
---

## Vue

[参考](https://juejin.cn/post/6844903918753808398)
[参考 2](https://juejin.cn/post/6870737289736093710)

### vue 内部运行机制

### v-if 和 v-show 区别 ❤️-

### vue 进入一个页面出现字体抖动，如何处理

### nextTick 原理 ❤️

[参考](https://juejin.cn/post/6844903843197616136)

### Vue render 函数如何渲染页面

### watch 和 computed 区别，运用的场景？❤️

-   当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性 computed
-   watch 用于观察和监听页面上的 vue 实例，如果要在数据变化的同时进行异步操作或者是比较大的开销，那么 watch 为最佳选择

### 组件之间通信方式 ❤️

### vue 父子组件生命周期执行顺序

父 created -> 子 created -> 子 mounted -> 父 mounted？

### diff 算法，虚拟 dom

### 双向数据绑定的原理 🧡

### Class 与 Style 如何动态绑定？

### 怎样理解 Vue 的单向数据流？

### 直接给一个数组项赋值，Vue 能检测到变化吗？Vue3.0 赋值?

### 权限路由实现方式

[参考](https://juejin.cn/post/6844903648057622536)

### vue 的生命周期的理解 ❤️

-   beforeCreate（初始化界面前）
-   created（初始化界面后）
-   beforeMount（渲染 dom 前）
-   mounted（渲染 dom 后）
-   beforeUpdate（更新数据前）
-   updated（更新数据后）
-   beforeDestroy（卸载组件前）
-   destroyed（卸载组件后）

[参考](https://juejin.cn/post/6844903780736040973)

### vue 懒加载 🧡

### vue-router 有哪几种导航钩子?

-   全局守卫
-   路由独享守卫
-   路由组件内的守卫

### 动态组件 & 异步组件(keep-alive), 原理？🧡

### vue 响应式数据的实现原理 🧡

[参考](https://juejin.cn/post/6844903760771153933)

### vue 的 template 编译原理 🧡

### template 和 jsx 的有什么分别？

### 谈谈你对 vuex 的理解

### vue-router 中 hash 模式和 history 模式的区别 ❤️

-   最明显的是在显示上，hash 模式的 URL 中会夹杂着#号，而 history 没有。
-   Vue 底层对它们的实现方式不同。hash 模式是依靠 onhashchange 事件(监听 location.hash 的改变)，而 history 模式是主要是依靠的 HTML5 history 中新增的两个方法，pushState()可以改变 url 地址且不会发送请求，replaceState()可以读取历史记录栈,还可以对浏览器记录进行修改。
-   当真正需要通过 URL 向后端发送 HTTP 请求的时候，比如常见的用户手动输入 URL 后回车，或者是刷新(重启)浏览器，这时候 history 模式需要后端的支持。因为 history 模式下，前端的 URL 必须和实际向后端发送请求的 URL 一致，例如有一个 URL 是带有路径 path 的(例如 www.lindaidai.wang/blogs/id)，如果后端没有对这个路径做处理的话，就会返回 404 错误。所以需要后端增加一个覆盖所有情况的候选资源，一般会配合前端给出的一个 404 页面。

### style scoped 属性作用和原理，样式穿透

### ref 的作用

-   获取 dom 元素 `this.$refs.box`
-   获取子组件中的 data `this.$refs.box.msg`
-   调用子组件中的方法 `this.$refs.box.open()`

### 组件中 data 为什么是一个函数？

### slot 是什么？有什么作用？原理是什么？

### Vue 中 filter 能不能写异步代码，能不能获取\$vm？

### 有几种方法获取 dom 元素

### vue 监听数据变化，手动实现？

### SSR 有了解吗？原理是什么？

### 描述组件渲染和更新的过程

### vue 多次改变数据，更新一次还是多次，借鉴了 js 什么特性（单线程？）
