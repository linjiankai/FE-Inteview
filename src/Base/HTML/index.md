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

---

### script标签中defer和async的区别

默认情况下，脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。
下面是async和defer两者区别：
- 当script中有defer属性时，脚本的加载过程和文档加载是异步发生的，等到文档解析完(DOMContentLoaded事件发生)脚本才开始执行。
- 当script有async属性时，脚本的加载过程和文档加载也是异步发生的。但脚本下载完成后会停止HTML解析，执行脚本，脚本解析完继续HTML解析。
- 当script同时有async和defer属性时，执行效果和async一致。


### HTML语义化
根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析

---



