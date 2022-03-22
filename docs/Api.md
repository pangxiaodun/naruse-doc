# API
`Naruse` 的 API 包括 `Naurse` 内置提供的 API 以及对小程序的端能力 API 的封装，同时大部分的标准与封装方式与 `Taro` 保持统一。

其中对小程序的端能力 API 的封装，主要会基于支付宝小程序的 API 规范，对于其他小程序类似的 API，会在 Naruse 中适配为小程序 API 的规范格式，并且都挂载在 Naruse 命名空间下。

对于小程序平台特有的 API，可以先尝试用 Naruse. + API 名称来进行调用，如果出现未定义，则可以使用对应小程序平台的命名空间（如 my、wx 等）来进行调用，并反馈给我。

当然，由于各个平台的差异过多，个人精力有限，仅统一了部分平台API， 所以难免有些 API 没有加入 Naruse 的适配，你可以通过提 PR 或者 issue，来获得帮助。

本章主要介绍已经被统一的平台 API

同时，为了方便代码书写，Naruse 默认对小程序的异步 API 进行了 promisify 化，你可以像使用 Promise 那样进行调用，例如

```javascript
import Naruse from 'Naruse'

Naruse.request(url).then(function (res) {
  console.log(res)
})
```

```javascript
import { Storage } from 'Naruse';

console.log(Storage.getStorageSync('key'));
```
