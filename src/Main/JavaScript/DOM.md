---
title: DOM
order: 5
nav:
    title: Main
    path: /main
    order: 2
group:
    title: JavaScript
    path: /javascript
    order: 2
---

# DOM

### #什么是 DOM 和 BOM？

dom 是文档对象模型，bom 是浏览器对象模型
[DOM, DOCUMENT, BOM, WINDOW 有什么区别?](https://www.zhihu.com/question/33453164)
[JavaScript 学习总结（三）BOM 和 DOM 详解](https://segmentfault.com/a/1190000000654274#articleHeader21)

---

### #三种事件模型是什么？

DOM0 级模型，IE 事件模型，DOM2 级事件模型
[《一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获》](https://blog.csdn.net/u013217071/article/details/77613706)

---

### #事件委托是什么？

事件代理，动态绑定
[《JavaScript 事件委托详解》](https://zhuanlan.zhihu.com/p/26536815)

---

### #事件捕获和事件冒泡

-   先捕获：window----> document----> html----> body ---->目标元素
-   在冒泡：当前元素---->body ----> html---->document ---->window

---

### #DOM 操作

添加、移除、复制、创建、查找[《原生 JS 中 DOM 节点相关 API 合集》](https://microzz.com/2017/04/06/jsdom/)

### JS 实现事件绑定的方法

1. `elementObject.addEventListener(eventName,handle,useCapture)`
2. `elementObject.attachEvent(eventName,handle);`（仅支持 IE8 及以下）
3. `document.getElementById("demo").onclick = function(){};`

### DOMContentLoad 和 Load 和 Finish 的区别

-   DOMContentLoaded：DOM 树构建完成。即 HTML 页面由上向下解析 HTML 结构到末尾封闭标签`</html>`
-   Load：页面加载完毕。 DOM 树构建完成后，继续加载 html/css 中的图片资源等外部资源，加载完成后视为页面加载完毕。
-   DOMContentLoaded 会比 Load 时间小，两者时间差大致等于外部资源加载的时间。
-   Finish：是页面上所有 http 请求发送到响应完成的时间

### 手写遍历 DOM 树所有节点（非递归）

### mouseover 和 mouseenter 的区别

-   mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是 mouseout
-   mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是 mouseleave

### js 获取各种高度，宽度

-   clientHeight
-   offsetHeight
-   scrollHeight
-   clientTop
-   scrollTop

### window 的 onload 事件和 domcontent load 谁先谁后？

### 请指出 document load 和 document ready 的区别

ready：页面的文档结构加载完成，不包括图片视频等非文字内容。 load：所有页面元素都加载完成 ready 的速度比 load 快

### addEventListener 的第三个参数起到什么作用

### onbeforeunload 事件

### js 获取盒模型对应的宽和高

-   `dom.style.width/height`
-   `dom.currentStyle.width/height`
-   `window.getComputedStyle(dom).width/height`
-   `dom.getBoundingClientRect().width/height`
