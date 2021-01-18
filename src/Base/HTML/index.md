---
nav:
  title: Base
  path: /base
group:
  title: HTML
  path: /html
  order: 1
---

# HTML

### html5的新特性
- 离线存储特性
- 设备兼容特性 HTML5提供了前所未有的数据与应用接入开放接口
- 连接特性 WebSockets
- 网页多媒体特性 支持Audio Video SVG Canvas WebGL CSS3
- CSS3特性

[mdn-html5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)(可以把每个特性延伸学习下)

---

### script标签中defer和async的区别

默认情况下，脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。
下面是async和defer两者区别：
- 当script中有defer属性时，脚本的加载过程和文档加载是异步发生的，等到文档解析完(DOMContentLoaded事件发生)脚本才开始执行。
- 当script有async属性时，脚本的加载过程和文档加载也是异步发生的。但脚本下载完成后会停止HTML解析，执行脚本，脚本解析完继续HTML解析。
- 当script同时有async和defer属性时，执行效果和async一致。


### HTML语义化
根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析(SEO)

---

### Canvas 和 SVG 有什么区别？
[HTML 5 Canvas vs SVG](https://www.w3school.com.cn/html5/html_5_canvas_vs_svg.asp)

--- 

### HTML 全局属性
[全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)

---

### meta viewport的原理
---

### 利于SEO的方法
---

### XML和HTML的区别

--- 

### HTML5为什么只需要写 `<!DOCTYPE HTML>`
作用：告知浏览器的解析器用什么文档标准解析这个文档(严格模式与混杂模式)
- 严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
- 混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。
--- 
### iframe的优缺点和应用

--- 

### 渐进式渲染是什么
渐进式渲染是用来提高网页性能，以尽快呈现页面的技术。
- 图片懒加载——页面上的图片不会一次性的全部加载，当用户滚动页面到图片位置时，JS将加载并显示图像。
- 确定显示内容的优先级——为了尽快将页面呈现给用户，页面只将一小部分CSS，脚本，内容加载，然后在延时加载或者监听事件来加载。
- 异步加载HTML片段——当页面通过后台渲染时，把HTML拆分，通过异步请求，分块发送给浏览器。

### 100*100的 canvas 占多少内存
[参考](https://www.jianshu.com/p/27dd0e802809)
[参考2](https://juejin.cn/post/6844903704139661326)

### `<noscript>`标签的作用
noscript 元素用来定义在脚本未被执 行时的替代内容（文本）, 此标签可被用于可识别 `<script>` 标签但无法支持其中的脚本的浏览器。


