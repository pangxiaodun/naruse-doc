# API
`Naruse` 的 API 包括 `Naurse` 内置提供的 API 以及对小程序的端能力 API 的封装，同时大部分的标准与封装方式与 `Taro` 保持统一。

其中对小程序的端能力 API 的封装，主要会基于支付宝小程序的 API 规范，对于其他小程序类似的 API，会在 Naruse 中适配为小程序 API 的规范格式，并且都挂载在 Naruse 命名空间下。

对于小程序平台特有的 API，可以先尝试用 Naruse. + API 名称来进行调用，如果出现未定义，则可以使用对应小程序平台的命名空间（如 my、wx 等）来进行调用，并通过提 PR 或者 issue来获得更新支持。

本章主要介绍已经统一的平台 API

当然，由于各个平台的差异过多，个人精力有限，仅统一了部分常用平台API， 所以难免有些 API 没有加入 Naruse 的适配，你可以通过提 PR 或者 issue，来获得帮助。

同时，为了方便代码书写，Naruse 默认对小程序的异步 API 进行了 promisify 化，你可以像使用 Promise 那样进行调用，例如

```javascript
import Naruse from 'Naruse'

Naruse.setStorage({ key: '123', data: '123' }).then(function (res) {
  console.log(res)
})
```



## 基础

### getSystemInfoSync()

获取系统基础信息同步版本

> 参考: [my.getSystemInfo - 支付宝文档中心 (alipay.com)](https://opendocs.alipay.com/mini/api/system-info)

#### 参数 

无

#### 返回值

| 参数            | **类型** | **说明**                                                     |
| --------------- | -------- | ------------------------------------------------------------ |
| model           | String   | 手机型号。                                                   |
| pixelRatio      | Number   | 设备像素比。PC端默认 1.5                                     |
| windowWidth     | Number   | 窗口宽度。                                                   |
| windowHeight    | Number   | 窗口高度。                                                   |
| language        | String   | zh-Hans                                                      |
| version         | String   | naruse版本号。                                               |
| storage         | String   | 设备磁盘容量。PC没有此字段                                   |
| currentBattery  | String   | 当前电量百分比。PC没有此字段                                 |
| system          | String   | 系统版本。pc端为 mac/win/linux/unix                          |
| platform        | String   | 系统名：Android，iOS / iPhone OS / PC                        |
| titleBarHeight  | Number   | 标题栏高度。PC为0                                            |
| statusBarHeight | Number   | 状态栏高度。PC为0                                            |
| screenWidth     | Number   | 屏幕宽度。                                                   |
| screenHeight    | Number   | 屏幕高度。                                                   |
| brand           | String   | 手机品牌。PC为空                                             |
| fontSizeSetting | Number   | 用户设置字体大小                                             |
| app             | String   | 当前运行的客户端。若当前为支付宝，则有效值为 "alipay"。pc端则为NARUSE |

#### 例子

```javascript
  const res = Naruse.getSystemInfoSync()
  console.log(res.model)
  console.log(res.pixelRatio)
  console.log(res.windowWidth)
  console.log(res.windowHeight)
  console.log(res.language)
  console.log(res.version)
  console.log(res.platform)
```



### getSystemInfo(option)

获取用户信息的异步版本

#### 参数

**option**

| 参数     | 类型                            | 必填 | 说明                                             |
| -------- | ------------------------------- | ---- | ------------------------------------------------ |
| success  | `(res: Result) => void`         | 否   | 接口调用成功的回调函数                           |
| fail     | `(res: CallbackResult) => void` | 否   | 接口调用失败的回调函数                           |
| complete | `(res: any) => void`            | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### 返回值

**Result**

| 参数            | **类型** | **说明**                                                     |
| --------------- | -------- | ------------------------------------------------------------ |
| model           | String   | 手机型号。                                                   |
| pixelRatio      | Number   | 设备像素比。PC端默认 1.5                                     |
| windowWidth     | Number   | 窗口宽度。                                                   |
| windowHeight    | Number   | 窗口高度。                                                   |
| language        | String   | zh-Hans                                                      |
| version         | String   | naruse版本号。                                               |
| storage         | String   | 设备磁盘容量。PC没有此字段                                   |
| currentBattery  | String   | 当前电量百分比。PC没有此字段                                 |
| system          | String   | 系统版本。pc端为 mac/win/linux/unix                          |
| platform        | String   | 系统名：Android，iOS / iPhone OS / PC                        |
| titleBarHeight  | Number   | 标题栏高度。PC为0                                            |
| statusBarHeight | Number   | 状态栏高度。PC为0                                            |
| screenWidth     | Number   | 屏幕宽度。                                                   |
| screenHeight    | Number   | 屏幕高度。                                                   |
| brand           | String   | 手机品牌。PC为空                                             |
| fontSizeSetting | Number   | 用户设置字体大小                                             |
| app             | String   | 当前运行的客户端。若当前为支付宝，则有效值为 "alipay"。pc端则为NARUSE |

#### 示例 1

```tsx
Naruse.getSystemInfo({
  success: res => console.log(res)
})
.then(res => console.log(res))
```

#### 示例 2

```tsx
Naruse.getSystemInfo({
  success: function (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
```



## 路由


### navigateTo(option)

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Naruse.navigateBack 可以返回到原页面。小程序中页面栈最多十层。

#### 参数

**option**

| 参数     | 类型                           | 必填 | 说明                                                         |
| -------- | ------------------------------ | ---- | ------------------------------------------------------------ |
| url      | `string`                       | 是   | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' |
| complete | `(res:CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |
| fail     | `(res:CallbackResult) => void` | 否   | 接口调用失败的回调函数                                       |
| success  | `(res: any) => void`           | 否   | 接口调用成功的回调函数                                       |

#### 示例

```javascript
Naruse.navigateTo({
  url: '#/tradeManagment',
  success: function (res) {
    console.log(res)
  }
})
```



### navigateBack(option)

关闭当前页面，返回上一页面或多级页面。

#### 参数

| 参数     | 类型                            | 必填 | 说明                                                    |
| -------- | ------------------------------- | ---- | ------------------------------------------------------- |
| complete | `(res: CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）        |
| delta    | `number`                        | 否   | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |
| fail     | `(res: CallbackResult) => void` | 否   | 接口调用失败的回调函数                                  |
| success  | `(res: CallbackResult) => void` | 否   | 接口调用成功的回调函数                                  |

#### 例子

```javascript
// 注意：调用 navigateTo 跳转时
// 此处是A页面
Naruse.navigateTo({
  url: 'B'
})
// 此处是B页面
Naruse.navigateTo({
  url: 'C'
})
// 在C页面内 navigateBack，将返回A页面
Naruse.navigateBack({
  delta: 2
})
```



### navigateToWebPage(option)

打开一个外部H5页面

#### 参数

**option**

| 参数     | 类型                           | 必填 | 说明                                                         |
| -------- | ------------------------------ | ---- | ------------------------------------------------------------ |
| url      | `string`                       | 是   | 需要打开的外面页面地址，http或者https，在小程序中调用时请注意白名单限制 |
| complete | `(res:CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |
| fail     | `(res:CallbackResult) => void` | 否   | 接口调用失败的回调函数                                       |
| success  | `(res: any) => void`           | 否   | 接口调用成功的回调函数                                       |

#### 示例

```javascript
Naruse.navigateToWebPage({
  url: 'https://taobao.com'
})
```



## 设备

### setClipboardData(option)

设置系统剪贴板的内容。

#### 参数

**option**

| 参数     | 类型                            | 必填 | 说明                                             |
| -------- | ------------------------------- | ---- | ------------------------------------------------ |
| data     | `string`                        | 是   | 剪贴板的内容                                     |
| complete | `(res: CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res: CallbackResult) => void` | 否   | 接口调用失败的回调函数                           |
| success  | `(res: CallbackResult) => void` | 否   | 接口调用成功的回调函数                           |

#### 返回值

**Promised**

| 参数   | 类型     | 说明         |
| ------ | -------- | ------------ |
| errMsg | `string` | 调用信息     |
| data   | `string` | 剪贴板的内容 |

#### 示例代码

```javascript
Naruse.setClipboardData({
  data: 'data',
  success: function (res) {
    Naruse.getClipboardData({
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
```



### getClipboardData(option)

获取系统剪贴板内容

#### 参数

**option**

| 参数     | 类型                                   | 必填 | 说明                                             |
| -------- | -------------------------------------- | ---- | ------------------------------------------------ |
| complete | `(res:CallbackResult) => void`         | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res:CallbackResult) => void`         | 否   | 接口调用失败的回调函数                           |
| success  | `(res: SuccessCallbackOption) => void` | 否   | 接口调用成功的回调函数                           |

**SuccessCallbackOption**

| 参数 | 类型     | 说明         |
| ---- | -------- | ------------ |
| data | `string` | 剪贴板的内容 |

#### 返回值

| 参数   | 类型     | 说明         |
| ------ | -------- | ------------ |
| errMsg | `string` | 调用信息     |
| data   | `string` | 剪贴板的内容 |

#### 示例

```javascript
Naruse.getClipboardData({
  success: function (res){
    console.log(res.data)
  }
})
```



## 数据缓存

### setStorageSync(key, data)
设置缓存的同步版本

> 参考：[my.getSystemInfo - 支付宝文档中心 (alipay.com)](https://opendocs.alipay.com/mini/api/system-info)

#### 参数

| 参数 | 类型     | 说明                                                         |
| ---- | -------- | ------------------------------------------------------------ |
| key  | `string` | 本地缓存中指定的 key                                         |
| data | `any`    | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |

#### 示例

```tsx
Naruse.setStorageSync('key', 'value')
```



### setStorage(option)

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

#### 参数

**option**

| 参数     | 类型                            | 必填 | 说明                                                         |
| -------- | ------------------------------- | ---- | ------------------------------------------------------------ |
| data     | `any`                           | 是   | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |
| key      | `string`                        | 是   | 本地缓存中指定的 key                                         |
| complete | `(res: CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |
| fail     | `(res: CallbackResult) => void` | 否   | 接口调用失败的回调函数                                       |
| success  | `(res: CallbackResult) => void` | 否   | 接口调用成功的回调函数                                       |

#### 示例

```javascript
Naruse.setStorage({
  key:"key",
  data:"value"
})
```



### getStorageSync(key)

获取缓存的同步版本

#### 参数

| 参数 | 类型 | 说明                 |
| ---- | ---- | -------------------- |
| key  | `T`  | 本地缓存中指定的 key |

#### 示例

```JavaScript
 var value = Naruse.getStorageSync('key')
 if (value) {
    // Do something with return value
 }

```



### getStorage(option)

从本地缓存中异步获取指定 key 的内容

#### 参数

option

| 参数     | 类型                                         | 必填 | 说明                                             |
| -------- | -------------------------------------------- | ---- | ------------------------------------------------ |
| key      | `string`                                     | 是   | 本地缓存中指定的 key                             |
| complete | `(res: CallbackResult) => void`              | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res: CallbackResult) => void`              | 否   | 接口调用失败的回调函数                           |
| success  | `(result: SuccessCallbackResult<T>) => void` | 否   | 接口调用成功的回调函数                           |

**SuccessCallbackResult**

| 参数   | 类型     | 说明          |
| ------ | -------- | ------------- |
| data   | `T`      | key对应的内容 |
| errMsg | `string` | 调用结果      |



#### 示例代码

```javascript
Naruse.getStorage({
  key: 'key',
  success: function (res) {
    console.log(res.data)
  }
})
```



### removeStorage(option)

从本地缓存中移除指定 key

#### 参数

option

| 参数     | 类型                              | 必填 | 说明                                             |
| -------- | --------------------------------- | ---- | ------------------------------------------------ |
| key      | `string`                          | 是   | 本地缓存中指定的 key                             |
| complete | `(res: CallbackResult) => void`   | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res: CallbackResult) => void`   | 否   | 接口调用失败的回调函数                           |
| success  | `(result:CallbackResult) => void` | 否   | 接口调用成功的回调函数                           |

#### 示例代码

```javascript
Naruse.removeStorage({
  key: 'key',
  success: function (res) {
    console.log(res)
  }
})
```



### removeStorageSync(key)

同步的从缓存中删除某个key

#### 参数

| 参数 | 类型     | 说明                 |
| ---- | -------- | -------------------- |
| key  | `string` | 本地缓存中指定的 key |

#### 示例代码

```javascript
Naruse.removeStorageSync('key')
```



#### getStorageInfo(option)

异步获取当前storage的相关信息

#### 参数

**option**

| 参数     | 类型                              | 必填 | 说明                                             |
| -------- | --------------------------------- | ---- | ------------------------------------------------ |
| complete | `(res: CallbackResult) => void`   | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res: CallbackResult) => void`   | 否   | 接口调用失败的回调函数                           |
| success  | `(result:CallbackResult) => void` | 否   | 接口调用成功的回调函数                           |

**SuccessCallbackOption**

| 参数        | 类型       | 说明                        |
| ----------- | ---------- | --------------------------- |
| currentSize | `number`   | 当前占用的空间大小, 单位 KB |
| keys        | `string[]` | 当前 storage 中所有的 key   |
| limitSize   | `number`   | 限制的空间大小，单位 KB     |

#### 示例代码

```javascript
Naruse.getStorageInfo({
  success: function (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```



### getStorageInfo(option)

异步获取当前storage的相关信息

#### 返回值

| 参数        | 类型       | 说明                        |
| ----------- | ---------- | --------------------------- |
| currentSize | `number`   | 当前占用的空间大小, 单位 KB |
| keys        | `string[]` | 当前 storage 中所有的 key   |
| limitSize   | `number`   | 限制的空间大小，单位 KB     |

#### 示例代码

```javascript
  const res = Naruse.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
```



### clearStorage(option)

异步的清理本地数据缓存

#### 参数

option

| 参数     | 类型                              | 必填 | 说明                                             |
| -------- | --------------------------------- | ---- | ------------------------------------------------ |
| complete | `(res: CallbackResult) => void`   | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail     | `(res: CallbackResult) => void`   | 否   | 接口调用失败的回调函数                           |
| success  | `(result:CallbackResult) => void` | 否   | 接口调用成功的回调函数                           |

#### 示例

```javascript
Naruse.clearStorage()
```



### clearStorageSync()

同步的清除本地数据缓存

#### 示例

```javascript
Naruse.clearStorageSync()
```



## DOM

#### renderComponentOnPage(pageRoute,T)

在某个指定的页面渲染某个组件，渲染组件在页面中具体的位置依照Componet组件的位置而不同。

> 注意：如果要渲染的页面并没有被加载，则组件并不会渲染，即使页面加载了也不会重新渲染

#### 参数

**pageRoute** 页面路由

> string

**T**   渲染组件

> Naruse.Component

#### 示例

```jsx
class Demo extends React.Component {
  render () {
    return <view>测试组件</view>
  }
}
Naruse.renderComponentOnPage('/pages/index/index', Demo)
```



## HOC（高阶函数）

### wtihPage(T)

你可以用withPage包裹你的组件，你的组件通过这个高阶函数会你的组件在**初始化**时，将当前页面的 **page** 实例作为参数 `currentPage` 传入到组件的props中供你使用。

#### 参数

> withPage = (T: Naruse.Component) => Naruse.component

**Page** 页面实例

| 参数   | **类型**                 | **说明**                                                 |
| ------ | ------------------------ | -------------------------------------------------------- |
| route  | `string`                 | 当前页面路由。示例：小程序端: `pages/my/my` h5端 :`#/my` |
| events | `PageEvent`              | 页面事件中心，订阅事件监听页面的相关行为                 |
| parma  | `Record<string, string>` | 页面路由参数                                             |

**PageEvent** 页面事件中心

| 参数 | **类型**                                | **说明**     |
| ---- | --------------------------------------- | ------------ |
| on   | `(eventName: string, Function)=>void`   | 监听某个事件 |
| off  | ``(eventName: string, Function)=>void`` | 卸载某个事件 |

**目前支持的事件有**

| 事件名       | 触发时机           |
| ------------ | ------------------ |
| onUnload     | 当页面被卸载时调用 |
| onPageScroll | 当页面滚动时触发   |

#### 示例

```jsx
class Demo extends Naruse.Component {
  componentDidMount () {
    const { currentPage } = this.props;
   	console.log(currentPage.route);
    currentPage.on('onUnload', () => {
      	console.log('当前页面被卸载啦，提醒一下');
    });
  }
  render () {
    return <view>测试页</view>;
  }
}
```



## 网络

因为naruse目前的应用场景是融入到各个产品不同的开发体系当中，因此没有单独封装网络请求能力，但是为了统一性，多个平台之间保持统一，在引用naruse时建议自行封装统一的网络接口。

> 提示：爱用产品线内所有产品内使用的naruse均按照以下标准封装完毕，详细的可以查看[爱用产品线专属api](#爱用产品线专属api)



## 爱用产品线专属api

naruse专门为爱用产品线服务封装的统一api，会作为全局变量注入到运行环境当中，可以直接使用

> 注意：专属api大部分是由产品内部封装，并没有promise 化

> 所有变量名均使用$ + 属性域



### $mappUtils 工具类

封装了一些程序常用工具类



### $mappUtils.hideTabBar()

隐藏底部tab栏。PC端调用无效，只会在有tab栏的页面生效

#### 示例

```javascript
$mappUtils.hideTabBar()
```



### $mappUtils.showTabBar()

显示底部tab栏。PC端调用无效，只会在有tab栏的页面生效

#### 示例

```javascript
$mappUtils.showTabBar()
```



### $mappUtils.getCurrentPageName()

获取当前页面路由名。PC端会获取当前window.page变量名

#### 返回值

返回当前页面路径名

#### 示例

```javascript
$mappUtils.getCurrentPageName()
```



### $mappUtils.isIOS()

判断当前环境是否是ios

#### 返回值

| 参数  | 类型      | 说明      |
| ----- | --------- | --------- |
| isIOS | `boolean` | 是否是ios |

#### 示例

```javascript
$mappUtils.isIOS()
```



### $mappUtils.isAndroid()

判断当前环境是否是Android

#### 返回值

| 参数      | 类型      | 说明           |
| --------- | --------- | -------------- |
| isAndroid | `boolean` | 是否是安卓环境 |

#### 示例

```javascript
$mappUtils.isAndroid()
```





### $openChat

联系用户相关全局变量，PC端与小程序端均是通过旺旺联系



### $openChat.openChat(option)

通过旺旺联系，打开对应旺旺窗口

#### 参数

**option**

| 参数    | 类型                              | 必填 | 说明                   |
| ------- | --------------------------------- | ---- | ---------------------- |
| nick    | `string`                          | 否   | 要联系的旺旺名称       |
| text    | `string`                          | 是   | 要发送的消息           |
| success | `(result:CallbackResult) => void` | 否   | 接口调用成功的回调函数 |
| fail    | `(result:CallbackResult) => void` | 否   | 接口调用失败的回调函数 |

#### 示例

```javascript
$openChat.openChat({
  nick: '爱用科技',
  text: '你好呀'
})
```



### $openChat.contactCustomerService(text, nick)

联系旺旺的简易版本，当不填nick时自动转向对应产品客服

#### 参数

| 参数     | 类型     | 必填 | 说明                                               |
| -------- | -------- | ---- | -------------------------------------------------- |
| **text** | `string` | 是   | 要发送的消息                                       |
| **nick** | `string` | 否   | 要联系的旺旺名称，当不填nick时自动转向对应产品客服 |

#### 示例

```javascript
$openChat.contactCustomerService('我有问题要联系客服！')
```



### $userInfoChanger

用户信息管理相关



### $userInfoChanger.getUserInfo()

获取当前已登陆的用户信息

> 此处不会写出用户信息的详细结构，详细结构请自行查看对应产品文档

#### 示例

```javascript
const userInfo = $userInfoChanger.getUserInfo()
console.log(userInfo)
```



### $userInfoChanger.updateUserInfo()

更新用户信息

> 当用户完成某些动作后需要更新用户信息，用于从后端重新获取最新的用户信息

#### 返回值

**Promise\<newest\>**

| 参数   | 说明                                              |
| ------ | ------------------------------------------------- |
| newest | 用户最新的用户信息，与getUserInfo获取到相同的参数 |

#### 示例

```javascript
$userInfoChanger.updateUserInfo().then((newest) => {
  console.log(newest)
})
```





### $beacon

爱用专用埋点

> 补充ing



### $sensorsBeacon

神策埋点相关



### $sensorsBeacon.sensorsBeacon(name, ext)

发送神策埋点

> 广告系统相关埋点请使用封装好的广告[$adSensorsBeacon](#adSensorsBeacon)

| 参数 | 类型                 | 必填 | 说明         |
| ---- | -------------------- | ---- | ------------ |
| name | `string`             | 是   | 神策埋点名称 |
| ext  | `Record<stirng,any>` | 否   | 埋点属性     |

#### 示例

```javascript
$sensorsBeacon.sensorsBeacon('test', {
  testProperty: true
})
```



###  $moment

日期处理函数，具体调用方式可以直接查看官方文档

[http://momentjs.cn/docs/](http://momentjs.cn/docs/)

#### 示例

```javascript
console.log($moment('2012-10-14'))
```



### $ayApi

爱用专用网络请求相关



### $ayApi.api(option)

http请求api

> 默认所有请求均为POST请求，在移动端使用时请自行添加apiName

#### 参数

**option**

| 参数        | 类型                 | 必填 | 说明           |
| ----------- | -------------------- | ---- | -------------- |
| method      | `string`             | 是   | 请求URL        |
| args        | `Record<stirng,any>` | 否   | 请求参数       |
| mode        | `jsonp` 或 `post `   | 否   | 请求类型       |
| host        | `string`             | 否   | 服务器地址     |
| headers     | `Record<stirng,any>` | 否   | 请求头         |
| callback    | `(res: any) => void` | 否   | 成功后调用     |
| errCallback | `(res: any) => void` | 否   | 失败后调用     |
| apiName     | `string`             | 是   | 移动端网关映射 |

#### 示例

```javascript
$ayApi.api({ 
	method: '/test/qwer',
  host: 'https://trade.aiyongtech.com',
  apiName: 'aiyong.test.get'
  callback: (res) => {
    console.log('请求结果', res)
  }
})
```



### $ayApi.apiAsync(option)

http请求api的异步版

> 默认所有请求均为POST请求，在移动端使用时请自行添加apiName

#### 参数

**option**

| 参数    | 类型                 | 必填 | 说明           |
| ------- | -------------------- | ---- | -------------- |
| method  | `string`             | 是   | 请求URL        |
| args    | `Record<stirng,any>` | 否   | 请求参数       |
| mode    | `jsonp` 或 `post `     | 否   | 请求类型       |
| host    | `string`             | 否   | 服务器地址     |
| headers | `Record<stirng,any>` | 否   | 请求头         |
| apiName | `string`             | 是   | 移动端网关映射 |

#### 返回值

> Promise< T >

接口请求成功时，promise会被reslove，请求失败时，会被reject

#### 示例

```javascript
$ayApi.apiAsync(option).then((res) => {
  console.log('接口请求成功啦', res)
}).catch((err) => {
  console.log('接口请求失败啦', err)
})
```



### $adSensorsBeacon

针对爱用广告系统的埋点



### $adSensorsBeacon.adViewBeacon(adData,pid)

 广告浏览埋点

> 请在每个广告展示时调用此方法

#### 参数

| 参数   | 类型     | 必填 | 说明         |
| ------ | -------- | ---- | ------------ |
| adData | `T`      | 是   | 对应广告数据 |
| Pid    | `number` | 是   | 广告pid      |



### $adSensorsBeacon.adOrderNowBeacon(adData,btnText,pid)

广告点击埋点

| 参数    | 类型     | 必填 | 说明         |
| ------- | -------- | ---- | ------------ |
| adData  | `T`      | 是   | 对应广告数据 |
| btnText | `string` | 是   | 按钮文字     |
| pid     | `number` | 是   | 广告pid      |



###  $adImport

针对广告系统中运行的naruse所注入的广告信息

> 仅限广告系统内部使用



### $adImport.adData

广告接口信息，广告接口请求到的数据均在里面

adData大概是一个如下JSON的一个JS对象

```typescript
interface adData {
    message: "OK" | "offline",
    open_id: string,
    results: [
        {
            creative_name: string,
            dest_url: string,
            pid: number,
            img_size: string,
            secondary_class: string,
            creative_id: string,
            primary_class: string,
            user_define: {
                id: "templateDefine",
                title: "自定义模板",
                body: {
                    /** 加载的代码 */
                    code: string;
                    [key: string]: string;
                }
            },
            group_id: number,
            img_path: string,
            creative_type: string,
            pid_name: string,
            plan_id: number,
        }
    ],
    status: "200" | "500",
    total_num: 1 | 0,
    createTime: number
}
```





### $adImport.callback(isBlock)

> 仅限拥有阻塞权限的pid

当一个广告的pid触发方式为阻塞时，当广告组件完成所对应的动作时，调用此方法传入一个布尔值是否让正在阻塞的动作继续。

#### 参数

| 参数    | 类型      | 必填 | 说明             |
| ------- | --------- | ---- | ---------------- |
| isBlock | `boolean` | 是   | 是否继续阻塞动作 |



### $uninstall()

> 仅限广告系统内部使用

卸载已经装载的naruse组件。

建议在关闭广告后就卸载广告组件。
