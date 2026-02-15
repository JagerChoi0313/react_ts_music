import React from 'react' interface Iprops{ name:string age:number height?:number } //直接对props进行类型约束 const Download =(props:Iprops)=>{ return ( <div> <div>name:{props.name}</div> <div>age:{props.age}</div> <div>height{props.height}</div> </div> ) } export default Download    import React from 'react'

interface IProps{
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
​    )
}这两种写法有什么不同 ？





你这个问题问得很好 👍，这两种写法在 **TypeScript + React** 里非常常见，我们来系统对比一下。

------

# 第一种写法（直接给 props 标注类型）

```tsx
interface IProps{
    name:string
    age:number
    height?:number
}

const Download = (props: IProps) => {
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height:{props.height}</div>
        </div>
    )
}
```

### ✅ 特点

- 直接给 `props` 参数标注类型
- `Download` 是一个普通函数
- 没有使用 `React.FC`

### 👉 本质类型

它的本质是：

```ts
const Download: (props: IProps) => JSX.Element
```

------

# 第二种写法（使用 React.FC）

```tsx
interface IProps{
    name:string
    age:number
    height?:number
}

const Download: React.FC<IProps> = (props) => {
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height:{props.height}</div>
        </div>
    )
}
```

------

## React.FC 是什么？

`React.FC` 是 React 提供的一个函数组件类型。

完整名字是：

```ts
React.FunctionComponent
```

------

# 🚨 两种写法的核心区别

| 对比点              | 第一种   | 第二种         |
| ------------------- | -------- | -------------- |
| 类型写在哪          | 参数上   | 组件整体       |
| 是否自动带 children | ❌ 不带   | ✅ 自动带       |
| 是否推荐            | ✅ 更推荐 | ⚠️ 现在不太推荐 |

------

# 🔥 最大区别：children

这是关键。

------

## 第一种写法

```tsx
const Download = (props: IProps) => {}
```

**没有自动包含 children**

如果你这样写：

```tsx
<Download>
   hello
</Download>
```

❌ 会报错，因为 `IProps` 里没有 children。

------

## 第二种写法

```tsx
const Download: React.FC<IProps>
```

它等价于：

```ts
interface IProps {
   name: string
   age: number
   height?: number
   children?: React.ReactNode
}
```

也就是说：

👉 它默认帮你加上了 `children`

所以你可以写：

```tsx
<Download name="aaa" age={18}>
   hello
</Download>
```

不会报错。

------

# 🚨 为什么现在不太推荐 React.FC？

在 React 18 以后官方更推荐第一种写法。

原因：

### 1️⃣ children 是隐式的

你组件到底要不要 children？
React.FC 会自动给你加上，可能导致误用。

### 2️⃣ 泛型组件写起来麻烦

使用 React.FC 会影响泛型推导。

### 3️⃣ 代码更复杂

现代 React 推荐简单函数写法。

------

# 🎯 官方推荐写法（最佳实践）

```tsx
interface IProps{
    name:string
    age:number
    height?:number
}

function Download(props: IProps) {
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height:{props.height}</div>
        </div>
    )
}
```

或者

```tsx
const Download = ({ name, age, height }: IProps) => {
    return (
        <div>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>height:{height}</div>
        </div>
    )
}
```

------

# 🧠 一句话总结

| 如果你想          | 用哪种     |
| ----------------- | ---------- |
| 写现代 React      | ✅ 第一种   |
| 想自动带 children | 第二种     |
| 团队项目          | 推荐第一种 |

------

# 🔥 你现在阶段该怎么选？

你现在正在系统学习 React + TS（从你最近的路由、组件问题能看出来 👍），

建议你：

👉 **以后统一用第一种写法**

因为：

- 更贴近底层
- 更符合 React 18 规范
- 面试中更常见
- 未来不会被淘汰

------

如果你愿意，我可以：

- 给你画一张 React.FC 的类型展开图
- 或者带你理解 React 组件的底层类型定义
- 或者讲一下为什么 React 18 官方不推荐 React.FC

你想深入哪一块？







