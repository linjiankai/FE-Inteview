---
title: 常见问题
nav:
  title: Base
  path: /base
group:
  title: 移动端
  path: /webapp
  order: 4
---

# WebApp

### 适配方案
- rem + lib-flexible
- postcss + vw
[参考1](https://juejin.cn/post/6844903613320396808#heading-8)
[参考2](https://github.com/forthealllight/blog/issues/13)
[参考3](https://juejin.cn/post/6844903651245293582#heading-25)
### 1px 
- 0.5px
- border-image
- transform: scale()

### 点击延迟300ms
- `<meta name="viewport" content="width=device-width, user-scalable=no"> `
- FastClick

### 移动端软键盘弹出，页面上移，软键盘收回，ios有留白

### 移动端弹窗点透问题

### 移动端样式bug
1. 点击一个链接或者通过Javascript定义的可点击元素有半透明的灰色背景：`-webkit-tap-highlight-color : rgba (255, 255, 255, 0)`
2. ios清除输入框内阴影：`-webkit-appearance: none;`
3. CSS动画页面闪白,动画卡顿： `transform: translate3d(0, 0, 0);`
4. ios上下拉动滚动条时卡顿、慢：`-webkit-overflow-scrolling: touch;`
5. ios 系统中文输入法输入英文时，字母之间可能会出现一个六分之一空格：`this.value = this.value.replace(/\u2006/g, '');`

### 移动端一些功能
1. 禁止用户选择页面中的文字或者图片：`user-select: none;`
2. 禁止文本缩放：`-webkit-text-size-adjust: 100%;`
3. 如何禁止保存或拷贝图像：`img{-webkit-touch-callout: none;}`
4. 解决字体在移动端比例缩小后出现锯齿的问题：`-webkit-font-smoothing: antialiased;`
5. audio元素和video元素在ios和andriod中无法自动播放: 
``` js
    (window).one('touchstart', function(){
        video.play();
    })
```
6. ios下取消input在输入的时候英文首字母的默认大写：`<input autocapitalize="off" autocorrect="off" />`
7. ios下yyyy-mm-dd hh:mm:ss格式日期不能转化：`replace(/-/g, "/")`转成yyyy/mm/dd hh:mm:ss格式
8. 