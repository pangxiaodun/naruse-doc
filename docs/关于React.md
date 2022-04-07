# 关于类React语法 

## 写在前面

naruse 在最开始时就已经说明了，是使用react语法进行开发的，但只能说是类react语法。

因为双端之间不同的运行环境，Naruse的设计架构大概为下图所述

[![架构](https://s1.ax1x.com/2022/04/07/qznY40.png)](https://imgtu.com/i/qznY40)

Naruse在小程序中是通过将小程序的生命周期映射为React的生命周期来实现的React语法

在H5端是直接使用的原生React，但是考虑到多端同步的问题，请尽量使用Naruse本身支持的语法

在WEEX端同样是将原生组件的生命周期映射为React声明周期。





## Naruse.Component

Naruse 的组件可以定义为 class 或函数的形式。class 组件目前提供了更多的功能，这些功能将在此章节中详细介绍。如需定义 class 组件，需要继承 `Naruse.Component`：

> Naruse的组件写法与React组件写法几乎完全一致

```tsx
class Welcome extends Naruse.Component {
  render() {
    return <view>Hello, {this.props.name}</view>;
  }
}
```

**在 `Naruse.Component` 的子类中有个必须定义的 [`render()`](https://zh-hans.reactjs.org/docs/react-component.html#render) 函数。本章节介绍其他方法均为可选。**



## 组件支持的生命周期

#### 挂载

在组件的代码从远程服务器加载完毕后，会运行以下声明周期

- [**`constructor()`**](#constructor)
- [**`render()`**](#render)
- [**`componentDidMount()`**](#componentdidmount)

#### 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

+ [**`render()`**](#render)

+ [**`componentDidUpdate()`**](#componentDidUpdate)

#### 卸载

当组件从 DOM 中移除时会调用如下方法：

- [**`componentWillUnmount()`**](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)

### 其他 APIs

组件还提供了一些额外的 API：

- [`setState()`](https://zh-hans.reactjs.org/docs/react-component.html#setstate)
- [`forceUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#forceupdate)

### 实例属性

- [`props`](https://zh-hans.reactjs.org/docs/react-component.html#props)
- [`state`](https://zh-hans.reactjs.org/docs/react-component.html#state)