useEffect是什么，怎么用

你最近一直在学 React（路由、Redux、lazy、memo 都问过 👍），那我们这次把 **useEffect 彻底讲清楚**，用最通俗版本讲。

------

# 一、useEffect 是什么？

一句话版本：

> **useEffect 是 React 里专门用来“做副作用”的 Hook。**

那什么是“副作用”？

简单说就是：

👉 不是单纯渲染页面
 👉 而是“额外要做的事情”

比如：

- 请求接口（axios）
- 监听事件
- 定时器
- 操作 DOM
- 打印日志
- 修改 document.title

这些都叫 **副作用（effect）**

------

# 二、为什么需要 useEffect？

React 组件本质是：

```
const App = () => {
  return <div>Hello</div>
}
```

组件是一个函数。

⚠️ 函数默认只负责“返回 UI”。

但是现实中你还要：

- 页面加载后请求数据
- 数据变化后重新请求
- 页面卸载时清理定时器

这时候就需要 useEffect。

------

# 三、最基本用法

```
import { useEffect } from 'react'

useEffect(() => {
  console.log('组件渲染了')
})
```

👉 只要组件渲染，就执行一次

------

# 四、真正常用写法（带依赖数组）

```
useEffect(() => {
  console.log('只执行一次')
}, [])
```

第二个参数是：依赖数组

------

# 五、三种经典用法（必须掌握）

------

## ✅ 1️⃣ 只执行一次（模拟 componentDidMount）

```
useEffect(() => {
  console.log('页面加载执行一次')
}, [])
```

空数组 `[]`

👉 只在组件第一次加载时执行

常用于：

- 请求数据
- 初始化操作

------

## ✅ 2️⃣ 依赖变化时执行

```
useEffect(() => {
  console.log('count 变了')
}, [count])
```

意思是：

👉 只要 count 变了，就执行

------

## ✅ 3️⃣ 每次渲染都执行

```
useEffect(() => {
  console.log('每次渲染都执行')
})
```

没有第二个参数

------

# 六、真实案例（结合你之前学的 axios）

比如页面加载请求数据：

```
import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/list').then(res => {
      setData(res.data)
    })
  }, [])

  return <div>{data.length}</div>
}
```

流程：

1. 页面加载
2. useEffect 执行
3. 发请求
4. setData
5. 页面更新

------

# 七、清理函数（高级一点）

```
useEffect(() => {
  const timer = setInterval(() => {
    console.log('执行')
  }, 1000)

  return () => {
    clearInterval(timer)
  }
}, [])
```

return 的函数叫：

👉 清理函数（cleanup）

什么时候执行？

- 组件卸载时
- 下次 effect 执行前

------

# 八、用最通俗的话总结

你可以把 useEffect 理解成：

> “当页面发生某种变化时，我要做点别的事情”

结构记住这一句话就够了：

```
useEffect(() => {
  要做的事情

  return () => {
    清理事情
  }
}, [依赖])
```

------

# 九、和 class 组件对比（帮你建立体系）

以前 class 写法：

```
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

现在函数组件：

👉 全部用 useEffect 搞定

------

# 十、面试级理解（一句话）

useEffect 本质是：

> 在 React 完成 DOM 渲染之后执行副作用代码

------

# 你现在可以这样记

| 写法               | 什么时候执行 |
| ------------------ | ------------ |
| useEffect(fn)      | 每次渲染     |
| useEffect(fn, [])  | 只执行一次   |
| useEffect(fn, [a]) | a 变化时执行 |

------

如果你愿意，我可以给你：

- 画一个 useEffect 执行流程图
- 或者讲清楚为什么不能在函数体里直接写请求
- 或者讲清楚依赖数组的底层原理

你想进阶一点，还是再用更生活化的例子讲一遍？

useEffect 本质是： 在 React 完成 DOM 渲染之后执行副作用代码，什么是DOM渲染，什么是副作用

很好 👍 你这个问题问得非常关键。

你已经进入 **React 核心原理层面** 了。

我们分开讲清楚：

------

# 一、什么是 DOM 渲染？

## 1️⃣ 什么是 DOM？

DOM 全称：

> Document Object Model（文档对象模型）

简单说：

👉 **浏览器里真实存在的页面结构**

比如你写：

```
<div>Hello</div>
```

浏览器会变成：

```
一个真正存在的 div 节点
```

这个真实存在的节点，就叫：

> DOM 节点

------

## 2️⃣ 什么是 DOM 渲染？

DOM 渲染就是：

> React 把你写的 JSX 变成浏览器里真正能看到的页面

比如：

```
const App = () => {
  return <h1>Hello</h1>
}
```

React 做了三件事：

1. 执行函数
2. 生成虚拟 DOM
3. 更新浏览器真实 DOM

最后你才看到页面。

这一步把内容显示到屏幕上，就叫：

> DOM 渲染

------

# 二、什么是副作用？

副作用这个词听着抽象，其实很好理解。

先讲“纯函数”概念。

------

## 1️⃣ 纯函数是什么？

纯函数的特点：

- 只根据输入返回输出
- 不影响外部
- 不改变外部变量

例如：

```
function add(a, b) {
  return a + b
}
```

它不会影响世界。

------

## 2️⃣ 副作用是什么？

只要函数：

- 改变外部变量
- 请求接口
- 修改 DOM
- 设置定时器
- 打印日志
- 操作浏览器 API

这些都叫：

> 副作用（Side Effect）

因为它“影响了函数外部的世界”

------

# 三、为什么 React 需要副作用？

React 组件本质是函数：

```
const App = () => {
  return <div>Hello</div>
}
```

React 希望：

👉 组件函数只负责“返回 UI”

不要在函数执行时：

- 直接发请求
- 直接操作 DOM
- 直接 setInterval

因为函数会反复执行。

------

# 四、关键点来了

React 渲染流程是：

```
1. 执行组件函数
2. 生成虚拟 DOM
3. 更新真实 DOM
4. 页面显示
5. 执行 useEffect
```

所以：

> useEffect 是在页面已经更新完成后执行的

也就是说：

👉 先让页面显示出来
 👉 再去做“额外的事情”

------

# 五、用生活例子帮你理解

想象你开一家餐厅。

React 渲染 = 上菜

副作用 = 做额外事情：

- 播音乐
- 打电话进货
- 清理桌子
- 记账

餐厅核心是上菜（UI 渲染）

其他都叫副作用。

------

# 六、为什么不能直接在组件函数里写副作用？

比如这样：

```
const App = () => {
  fetch('/api')   // ❌

  return <div>Hello</div>
}
```

问题是：

React 每次重新渲染都会执行函数。

那请求就会疯狂触发。

所以 React 提供：

```
useEffect(() => {
  fetch('/api')
}, [])
```

这样就只在合适时机执行。

------

# 七、用一句话彻底总结

## DOM 渲染是什么？

> 把 React 生成的内容更新到浏览器真实页面上

## 副作用是什么？

> 除了“返回 UI”以外，对外部世界产生影响的行为

------

# 八、最核心理解（非常重要）

React 设计思想是：

> 组件 = 纯函数
>  副作用 = 单独处理

这就是 useEffect 存在的根本原因。

------

如果你愿意，我可以下一步讲：

- React 为什么要先虚拟 DOM 再真实 DOM？
- useEffect 和 useLayoutEffect 的区别
- 为什么依赖数组会产生闭包问题？
- 或者画一个完整执行流程图

你现在的理解已经在往中级靠了 🔥