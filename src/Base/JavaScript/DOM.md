---
title: DOM
order: 5
nav:
  title: Base
  path: /base
group:
  title: JavaScript
  path: /javascript
  order: 2
---

# DOM

### #什么是 DOM 和 BOM？
dom是文档对象模型，bom是浏览器对象模型
[DOM, DOCUMENT, BOM, WINDOW 有什么区别?](https://www.zhihu.com/question/33453164)
[JavaScript学习总结（三）BOM和DOM详解](https://segmentfault.com/a/1190000000654274#articleHeader21)

---

### #三种事件模型是什么？
DOM0级模型，IE事件模型，DOM2级事件模型
[《一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获》](https://blog.csdn.net/u013217071/article/details/77613706)

---

### #事件委托是什么？
事件代理，动态绑定
[《JavaScript 事件委托详解》](https://zhuanlan.zhihu.com/p/26536815)

---

### #事件捕获和事件冒泡

- 先捕获：window----> document----> html----> body ---->目标元素
- 在冒泡：当前元素---->body ----> html---->document ---->window

---

### #DOM 操作
添加、移除、复制、创建、查找[《原生JS中DOM节点相关API合集》](https://microzz.com/2017/04/06/jsdom/)