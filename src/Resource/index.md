---
title: 学习资源
order: 1
# nav:
#     title: 资源
#     path: /resource
#     order: 100
---

```jsx
/**
 * inline: true
 * background: '#f6f7f9'
 */
import React from 'react';
import collect from './collect.js';
import './index.less';

const Index = () => {
    return (
        <div className="collect">
            {collect.map((item, i) => (
                <div className="item" key={i}>
                    <div className="title">{item.title}</div>
                    <div className="detail">
                        {item.child.map((child, index) => (
                            <div className="card" key={index}>
                                <a
                                    href={child.url}
                                    className="link"
                                    target="_blank"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../public/img/collect/${child.icon}`)}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="name">{child.name}</div>
                                </a>
                                <div className="desc" title={child.desc}>
                                    {child.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;
```

### 关注

-   [张鑫旭](https://www.zhangxinxu.com/)

### 已停运的框架

-   [YDUI](http://vue.ydui.org/)
-   [Mint Ul](http://mint-ui.github.io/#!/zh-cn)
-   [iView => View UI](https://github.com/view-design/ViewUI)

### 纪念 jq 时代

-   [Bootstrap](https://www.bootcss.com/)
-   [jqueryui](http://jqueryui.com/)
-   [Weui](https://github.com/weui/weui)
-   [FrozenUI](https://github.com/frozenui/frozenui)
-   [Layui](https://www.layui.com/)
-   [Amazeui](https://github.com/amazeui/amazeui)

### 文档工具

-   [docsify](https://docsify.js.org/)
-   [dumi](https://d.umijs.org/zh-CN)
-   [vuepress](https://vuepress.vuejs.org/zh/)
-   [storybook](https://storybook.js.org/)

### 其他

-   [amis\_低代码前端框架](https://baidu.github.io/amis/zh-CN/docs/index)
-   NutUI
-   Chameleon 滴滴跨端解决方案
-   avui 二次封装 Elementui
-   fusion desgin
-   GuiLite
-   wepy 小程序框架
-   Rsuite react ui 库
