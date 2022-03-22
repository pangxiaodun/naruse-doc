# 简介

> しろは　なるせ（shiroha naruse） 白羽 鸣濑是一名鸟白岛上的巫女，经常站在海岸边眺望大海。
## [快速开始](./快速开始.md)

Naruse是一个在小程序内支持使用 **react** 开发，同时在小程序内部支持**热更新**的解决方案
特性

🔥   原生react开发体验（生命周期，组件化开发，事件机制）

🍰   双端统一（一套代码两端使用）

🚀   热更新代码（无需等待小程序繁琐的审核！）

🧱   完善的配套开发工具（rollup插件， 类型提示...）



# packages
## naruse-element
用于在支付宝小程序内模拟dom树，同时提供一个简易的react运行时
#### 借鉴
1. [NervJS/Taro](https://github.com/NervJS/taro/tree/next/packages/taro-runtime)
   开放式跨端跨框架解决方案
2. [Tencent/Kbone](https://github.com/Tencent/kbone)
   一个致力于微信小程序和 Web 端同构的解决方案
3. [Facebook/React](https://github.com/facebook/react)
   About A declarative, efficient, and flexible JavaScript library for building user interfaces.
4. [支付宝开发程序](https://opendocs.alipay.com/mini/developer) 提供文档支持

## naruse-parser
12KB的js编译器+js解释器
用于在小程序等不支持动态执行js代码的环境内运行js代码

#### 借鉴
1. [acornjs/acorn](https://github.com/acornjs/acorn)
   A small, fast, JavaScript-based JavaScript parser
2. [bramblex/jsjs](https://github.com/bramblex/jsjs)
   About
简易的 JavaScript 元循环解释器

## naruse-h5
在pc端封装了统一的组件库，同时提供与小程序一致的事件机制与热更新开发体验

## rollup-plugin-naruse
naruse rollup 插件与loader，用与将标准的react组件转换为naruse-paser引擎支持的代码

## naurse-ay-polyfill
爱用项目所需的polyfill，用于本地环境开发使用
