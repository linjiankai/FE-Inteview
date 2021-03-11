---
title: TypeScript
nav:
    title: Main
    path: /main
    order: 3
group:
    title: TypeScript
    path: /typeScript
    order: 7
---

# TypeScript

[参考](https://juejin.cn/post/6844904182843965453)

### TypeScript 与 JavaScript 的区别

| TypeScript                   | JavaScript               |
| ---------------------------- | ------------------------ |
| 可以在编译期间发现并纠正错误 | 只能在运行时发现错误     |
| 强类型，支持静态和动态类型   | 弱类型，没有静态类型选项 |
| 开发大型的应用，更好的协作   | 灵活性更高               |

### type 和 interface 的区别

-   都可以描述一个对象或者函数，都可以 extends
-   type 可以声明基本类型别名，联合类型，元组等类型
-   interface 能够声明合并

### 如何实现一个函数的重载

### 解释下泛型,场景

泛型的好处

-   函数和类可以轻松支持多种类型，增强程序的扩展型
-   不必写多条函数重载，冗长的联合类型声明，增强代码可读性
-   灵活控制类型直接的约束

### 实现与继承：implements vs extends

### 声明文件与命名空间：declare 和 namespace

### 泛型与 Any 的区别

### implements 与 extends 的区别

-   implements(实现)： 一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能
-   extends(继承)：一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法
-   在 java 和 c++中，只有接口可以被 implement，而只有类才能被 extends，而在 ts 中，一个类既可以被 implement 也可以被 extends。
                                                        