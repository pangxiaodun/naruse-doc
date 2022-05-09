# 最佳实践

###  withPage

我们有时会将withPage和renderComponentOnPage配合使用，如下面的例子，当本页面被卸载时在另一个页面渲染一个组件

```jsx

import { Component, withPage } from 'Naruse';
class Demo extends Component {
    componentDidMount() {
        const { currentPage } = this.props;
        currentPage.events.on('onUnload', () => {
            renderComponentOnPage('pages/tradeIndex/index', withPage(Demo2))
        });
    }
    
    render() {
        return <view>测试页</view>
    }
}

class Demo2 extends Component {
    render () {
        return <view>这是另一个页面要展示的组件！</view>
    }
}

export default Naruse.withPage(Demo)
```

