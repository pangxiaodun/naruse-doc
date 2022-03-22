# API
`Naruse` 的 API 包括 `Naurse` 内置提供的 API 以及对小程序的端能力 API 的封装，同时大部分的标准与封装方式与 `Taro` 保持统一。

其中对小程序的端能力 API 的封装，主要会基于支付宝小程序的 API 规范，对于其他小程序类似的 API，会在 Naruse 中适配为小程序 API 的规范格式，并且都挂载在 Naruse 命名空间下。

对于小程序平台特有的 API，可以先尝试用 Naruse. + API 名称来进行调用，如果出现未定义，则可以使用对应小程序平台的命名空间（如 my、wx 等）来进行调用，并反馈给我。

当然，由于各个平台的差异过多，个人精力有限，仅统一了部分常用平台API， 所以难免有些 API 没有加入 Naruse 的适配，你可以通过提 PR 或者 issue，来获得帮助。

本章主要介绍已经统一的平台 API

同时，为了方便代码书写，Naruse 默认对小程序的异步 API 进行了 promisify 化，你可以像使用 Promise 那样进行调用，例如

```javascript
import Naruse from 'Naruse'

Naruse.request(url).then(function (res) {
  console.log(res)
})
```

```javascript
import { getStorage } from 'Naruse';

getStorage('key').then((res)=>{
  console.log(res)
});
```



## 数据缓存

### Naruse.setStorageSync(key, data)

Naruse.setStorage 的同步版本

> 参考文档 [my.getStorageSync - 支付宝文档中心 (alipay.com)](https://opendocs.alipay.com/mini/api/ox0wna)

#### 参数

| 参数 | 类型     | 说明                                                         |
| ---- | -------- | ------------------------------------------------------------ |
| key  | `string` | 本地缓存中指定的 key                                         |
| data | `any`    | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |

### 示例代码

#### 示例 1

```tsx
Naruse.setStorage({
  key:"key",
  data:"value"
})
```

#### 示例 2

```tsx
try {
  Naruse.setStorageSync('key', 'value')
} catch (e) { }
```





### Naruse.setStorage(option)

将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

#### 参数

| 参数   | 类型     |
| ------ | -------- |
| option | `Option` |

| 参数     | 类型                            | 必填 | 说明                                                         |
| -------- | ------------------------------- | ---- | ------------------------------------------------------------ |
| data     | `any`                           | 是   | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |
| key      | `string`                        | 是   | 本地缓存中指定的 key                                         |
| complete | `(res: CallbackResult) => void` | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |
| fail     | `(res: CallbackResult) => void` | 否   | 接口调用失败的回调函数                                       |
| success  | `(res: CallbackResult) => void` | 否   | 接口调用成功的回调函数                                       |