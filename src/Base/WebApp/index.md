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

### meta viewport 的原理

### 适配方案 ❤️

-   rem + lib-flexible
-   postcss + vw
    [参考 1](https://juejin.cn/post/6844903613320396808#heading-8)
    [参考 2](https://github.com/forthealllight/blog/issues/13)
    [参考 3](https://juejin.cn/post/6844903651245293582#heading-25)
    [参考 4](https://juejin.cn/post/6844903845617729549)
    [参考 5](https://juejin.cn/post/6885721051360133133)

### 1px

-   0.5px
-   border-image
-   transform: scale()

### 点击延迟 300ms

-   `<meta name="viewport" content="width=device-width, user-scalable=no">`
-   FastClick

### 移动端软键盘弹出，页面上移，软键盘收回，ios 有留白

[解决方案](https://juejin.cn/post/6859545317378490376)

### 移动端弹窗点透问题

### 移动端样式 bug

1. 点击一个链接或者通过 Javascript 定义的可点击元素有半透明的灰色背景：`-webkit-tap-highlight-color : rgba (255, 255, 255, 0)`
2. ios 清除输入框内阴影：`-webkit-appearance: none;`
3. CSS 动画页面闪白,动画卡顿： `transform: translate3d(0, 0, 0);`
4. ios 上下拉动滚动条时卡顿、慢：`-webkit-overflow-scrolling: touch;`
5. ios 系统中文输入法输入英文时，字母之间可能会出现一个六分之一空格：`this.value = this.value.replace(/\u2006/g, '');`

### 移动端一些功能

1. 禁止用户选择页面中的文字或者图片：`user-select: none;`
2. 禁止文本缩放：`-webkit-text-size-adjust: 100%;`
3. 如何禁止保存或拷贝图像：`img{-webkit-touch-callout: none;}`
4. 解决字体在移动端比例缩小后出现锯齿的问题：`-webkit-font-smoothing: antialiased;`
5. audio 元素和 video 元素在 ios 和 andriod 中无法自动播放:

```js
window.one('touchstart', function() {
    video.play();
});
```

6. ios 下取消 input 在输入的时候英文首字母的默认大写：`<input autocapitalize="off" autocorrect="off" />`
7. ios 下 yyyy-mm-dd hh:mm:ss 格式日期不能转化：`replace(/-/g, "/")`转成 yyyy/mm/dd hh:mm:ss 格式

### rem 原理

-   rem 布局的本质是等比缩放，一般是基于宽度，假设将屏幕宽度分为 100 份，每份宽度是 1rem，1rem 的宽度是屏幕宽度/100,，然后子元素设置 rem 单位的属性，
-   通过改变 html 元素的字体大小，就可以设置子元素的实际大小。
