---
title: Vue3.0
nav:
  title: Framework
  path: /famework
  order: 3
group:
  title: Vue
  path: /Vue
  order: 3
---

### Vue3.0 都有哪些重要新特性？

建议往 Composition API 和 Tree-shaking 方面答，对应比较 React Hooks 和 webpack 的 Tree-shaking

### Vue3.0 对比 Vue2.0 的优势在哪？

1. 重构响应式系统，使用 Proxy 替换 Object.defineProperty，使用 Proxy 优势：

- 可直接监听数组类型的数据变化
- 监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
- 可拦截 apply、ownKeys、has 等 13 种方法，而 Object.defineProperty 不行
- 直接实现对象属性的新增/删除

2. 新增 Composition API，更好的逻辑复用和代码组织
3. 重构 Virtual DOM

- 模板编译时的优化，将一些静态节点编译成常量
- slot 优化，将 slot 编译为 lazy 函数，将 slot 的渲染的决定权交给子组件
- 模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）

4. 代码结构调整，更便于 Tree shaking，使得体积更小
5. 使用 Typescript 替换 Flow

### Vue3.0 和 React 16.X 都有哪些区别和相似处？

Composition API 与 React Hook 很像

### Vue3.0 是如何实现代码逻辑复用的？

### SSR 有了解吗？原理是什么？
