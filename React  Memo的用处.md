import React ,{memo}from 'react'
import type {ReactNode} from 'react'

interface IProps{
    children?:ReactNode //一定要加上children属性,因为现在的版本FC特性不支持直接用children
    name:string
    age:number
    height?:number
}


const Download:React.FC<IProps>=(props)=>{
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height{props.height}</div>
        </div>
    )
}


//直接对props进行类型约束
// const Download =(props:Iprops)=>{
//     return (
//         <div>
//             <div>name:{props.name}</div>
//             <div>age:{props.age}</div>
//             <div>height{props.height}</div>
//         </div>
//     )
// }

export default memo(Download) ，为什么这里要加上memo，有什么用？





你这个问题问得非常好 👍，因为 **`memo` 是 React 性能优化里非常核心的一块**。

我们一步一步讲清楚。

------

## 一、先看这句代码

```ts
export default memo(Download)
```

这里用的是：

```ts
import React, { memo } from 'react'
```

`memo` 是 React 提供的一个 **高阶组件（HOC）**。

------

## 二、memo 是什么？

`memo` 的作用是：

> **当 props 没有发生变化时，阻止组件重新渲染**

它类似于类组件里的：

```ts
PureComponent
```

------

## 三、不加 memo 会发生什么？

假设父组件是这样：

```tsx
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Download name="Jager" age={20} />
    </div>
  )
}
```

### 现在发生什么？

当你点击按钮：

- App 重新渲染
- Download 也会重新执行一遍
- 即使它的 props 没变

⚠️ React 默认机制：**父组件重新渲染 → 子组件全部重新执行**

------

## 四、加了 memo 会发生什么？

```ts
export default memo(Download)
```

现在逻辑变成：

- 父组件重新渲染
- React 会比较 Download 前后的 props
- 如果 props 没变
- ✅ 就不会重新执行 Download

------

## 五、它的原理是什么？

`memo` 会做一件事：

```ts
浅比较（shallow compare）props
```

也就是：

- 基本类型 → 比较值
- 引用类型 → 比较地址

例如：

```ts
name="Jager"
age={20}
```

值一样 → 不重新渲染

但如果是：

```ts
obj={{a:1}}
```

每次都是新对象 → 会重新渲染

------

## 六、那为什么要加 memo？

因为：

### 1️⃣ 避免不必要的重新渲染

### 2️⃣ 提高性能

### 3️⃣ 大型项目中很重要

如果一个组件：

- 渲染复杂
- 子组件很多
- 计算量大

那 memo 非常有用。

------

## 七、什么时候适合用 memo？

✅ 组件是纯展示组件
✅ props 变化频率低
✅ 父组件频繁更新

❌ props 经常变
❌ 组件本身很简单

------

## 八、你的这个组件适合用 memo 吗？

```tsx
const Download:React.FC<IProps>
```

这是一个：

- 纯函数组件
- 只根据 props 渲染
- 没有内部 state

👉 是一个典型的“展示型组件”

所以：

✔️ 加 memo 是合理的
✔️ 是一种优化习惯

------

## 九、React.FC 和 memo 的关系

你写的是：

```ts
const Download:React.FC<IProps>
```

再包一层：

```ts
memo(Download)
```

这两个不冲突。

------

## 十、进阶：自定义比较函数

`memo` 还能这样写：

```ts
memo(Download, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name
})
```

你可以自己决定什么时候重新渲染。

------

## 十一、总结一句话

`memo` 的核心作用是：

> 父组件更新时，如果 props 没变，子组件不重新渲染

它是 React 性能优化中最常用的工具之一。

------

如果你愿意，我可以带你：

- 画一张渲染流程图
- 或者写一个完整 demo 让你彻底理解
- 或者讲清楚 memo + useCallback + useMemo 的组合用法

你现在 React 学到的这个阶段，其实正好是理解渲染机制的关键时期 🚀







好 👍 我给你一个**非常清晰、能直接看出区别的例子**。

我们做一个场景：

- 父组件有一个 `count`
- 子组件 `Download`
- 子组件的 props 根本没变
- 但父组件一更新，子组件会不会重新渲染？

我们用 `console.log` 看效果。

------

# ✅ 一、不加 memo 的情况

## 子组件 Download

```tsx
import React from "react"

interface IProps {
  name: string
  age: number
}

const Download: React.FC<IProps> = (props) => {
  console.log("Download 组件重新渲染了")

  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  )
}

export default Download
```

------

## 父组件 App

```tsx
import React, { useState } from "react"
import Download from "./Download"

const App = () => {
  const [count, setCount] = useState(0)

  console.log("App 组件重新渲染了")

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Download name="Jager" age={20} />
    </div>
  )
}

export default App
```

------

## 🔎 现在发生什么？

每次你点击 +1：

控制台会输出：

```
App 组件重新渲染了
Download 组件重新渲染了
```

⚠️ 即使：

```tsx
name="Jager"
age={20}
```

完全没变！

因为：

> 父组件更新 → 子组件默认都会重新执行

------

# ✅ 二、加上 memo 的情况

只改 Download：

```tsx
import React, { memo } from "react"

interface IProps {
  name: string
  age: number
}

const Download: React.FC<IProps> = (props) => {
  console.log("Download 组件重新渲染了")

  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  )
}

export default memo(Download)
```

------

## 🔎 再点按钮

控制台会变成：

```
App 组件重新渲染了
```

🔥 Download 不再重新渲染！

因为：

```
memo 做了 props 浅比较
```

发现：

```tsx
name 没变
age 没变
```

👉 直接跳过渲染

------

# 🧠 这就是 memo 的核心价值

它帮你做了：

```
if (props 没变) {
  不重新执行组件函数
}
```

------

# 🚨 但注意一个坑（非常重要）

如果你这样写：

```tsx
<Download name="Jager" age={20} />
```

没问题。

但如果你这样写：

```tsx
<Download name="Jager" age={20} obj={{a:1}} />
```

每次都会重新渲染 ❗

因为：

```tsx
{{a:1}}  // 每次都是新对象
```

浅比较时：

```
prev.obj !== next.obj
```

所以还是会更新。

------

# 🎯 最终总结

不加 memo：

```
父组件更新 → 子组件必更新
```

加 memo：

```
父组件更新 → props 不变 → 子组件不更新
```

------

如果你愿意，我可以再给你一个：

🔥 「真实项目中为什么必须用 memo」的复杂一点的例子
比如列表渲染 + 1000个子组件那种

那个你看完会彻底理解为什么大项目一定要优化。