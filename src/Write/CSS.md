---
title: CSS
nav:
  title: 手写系列
  path: /write
  order: 5
---
### 圣杯布局
```html
<!-- 最外层容器 -->
<div class="container">
  <!-- 中间 -->
  <div class="center">center</div>

  <!-- 左侧 -->
  <div class="left">left</div>

  <!-- 右侧 -->
  <div class="right">right</div>
</div>
```

```css
body {
  min-width: 500px;
  background: gray;
}
.container {
  padding-left: 200px;
  padding-right: 100px;
  background: lightblue;
}
.center {
  width: 100%;
  height: 300px;
  background: lightcyan;
  float: left;
}
.left {
  width: 200px;
  height: 300px;
  background: lightpink;
  position: relative;
  left: -200px;
  float: left;
  margin-left: -100%;
}
.right {
  width: 100px;
  height: 300px;
  background: lightseagreen;
  float: left;
  margin-right: -100px;
}
```
### 双飞翼布局
```html
<!-- 中间 -->
<div class="center-container">
  <div class="center">center</div>
</div>
<!-- 左侧 -->
<div class="left">left</div>
<!-- 右侧 -->
<div class="right">right</div>
```

```css
.center-container {
  float: left;
  width: 100%;
  background: gray;
}

.center {
  height: 300px;
  margin-left: 200px;
  margin-right: 100px;
  background: lightblue;
}
.left {
  float: left;
  width: 200px;
  height: 300px;
  background: lightpink;
  margin-left: -100%;
}
.right {
  float: left;
  width: 100px;
  height: 300px;
  background: lightgreen;
  margin-left: -100px;
}
```

### 设计一个三角形
```css
.triangle{
    width: 0;
    height: 0;
    margin: 0 auto;
    border-width: 20px;
    border-style: solid;
    border-color: transparent transparent red transparent; //颜色位置上右下左, 对应三角形箭头下左上右
}
```

### 设计一个菊花loading(antd spin)
```html
 <span class="ant-spin-dot ant-spin-dot-spin">
    <i></i><i></i><i></i><i></i>
  </span>
```
```css
.ant-spin-dot {
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.ant-spin-dot-spin{
  transform: rotate(45deg);
  animation: antRotate 1.2s infinite linear;
}
 
.ant-spin-dot i {
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: #1890ff;
  transform: scale(0.75);
  display: block;
  position: absolute;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
  transform-origin: 50% 50%;
  &:nth-child(1) {
    left: 0;
    top: 0;
  }
  &:nth-child(2) {
    right: 0;
    top: 0;
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }
  &:nth-child(4) {
    left: 0;
    bottom: 0;
    animation-delay: 1.2s;
  }
}
@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@keyframes antRotate {
  to {
    transform: rotate(405deg);
  }
}
```

### flex实现多行布局九宫格
每个子元素自适应宽度，中间有20px空隙。周边不留空隙
```html
<div class="container">
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
</div>
```
```css
.container{
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.block{
    /*width: calc((100% - 40px) / 3); 和flex取一个就行*/
    height: calc((100% - 40px) / 3);
    border: 1px solid #ccc;
    flex: 0 1 calc((100% - 40px) / 3);
    box-sizing: border-box;
}
```
