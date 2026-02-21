import React,{PureComponent} from 'react'

class Demo02 extends PureComponent {
    render():React.ReactNode{
        return <div>Demo02</div>
    }
}

export default Demo02这段代码在React中是干什么的，Purecomponent是什么 





这段代码我们一行一行拆开讲，而且我会讲得**非常通俗**。

------

## 一、这段代码在干什么？

```tsx
import React,{PureComponent} from 'react'
```

👉 从 React 里导入：

- `React`
- `PureComponent`

------

```tsx
class Demo02 extends PureComponent {
```

👉 定义一个 **类组件**
👉 这个组件叫 `Demo02`
👉 它继承自 `PureComponent`

------

```tsx
render():React.ReactNode{
    return <div>Demo02</div>
}
```

👉 每个类组件都必须有 `render()` 方法
👉 这个方法返回 JSX
👉 这里就是渲染：

```html
<div>Demo02</div>
```

------

```tsx
export default Demo02
```

👉 把这个组件导出去，别的文件可以 `import Demo02` 使用。

------

## 二、那它整体是干嘛的？

它定义了一个 **React 类组件**，
页面上会显示：

```
Demo02
```

就这么简单。

------

# 三、重点：PureComponent 是什么？

## 先说 Component 是什么？

在 React 里有两种类组件写法：

```tsx
class A extends React.Component
```

和

```tsx
class B extends React.PureComponent
```

------

## 普通 Component 的特点

当：

- state 改变
- props 改变
- 父组件重新渲染

👉 它都会重新执行 render()

不管数据是不是“真的变了”。

------

## PureComponent 的特点（核心重点）

`PureComponent` 是一个 **带自动优化的组件**。

它会帮你自动做一件事：

> 对 props 和 state 做“浅比较”（shallow compare）

如果数据没变：

👉 就不重新 render
👉 性能更好

------

## 举个简单例子

假设：

```tsx
<Demo02 name="Jager" />
```

父组件每秒重新渲染一次，但：

```tsx
name 还是 "Jager"
```

如果是：

### 普通 Component

👉 Demo02 每秒都会重新 render

### PureComponent

👉 React 会比较 props
👉 发现没变
👉 就不 render
👉 省性能

------

# 四、什么是“浅比较”？

它只比较：

- 基本类型值（number、string）
- 对象的引用地址

举个例子：

```tsx
this.setState({ count: 1 })
this.setState({ count: 1 })
```

PureComponent 会发现：

```
1 === 1
```

👉 不会重新 render

------

但如果是对象：

```tsx
this.setState({ user: { name: 'Tom' } })
```

每次都是新对象：

👉 地址变了
👉 即使内容一样
👉 也会重新 render

------

# 五、为什么现在很少用 PureComponent？

因为现在主流是：

👉 **函数组件 + React.memo**

函数组件写法：

```tsx
const Demo02 = React.memo(() => {
  return <div>Demo02</div>
})
```

React.memo 就是函数版的 PureComponent。

------

# 六、总结一句话

这段代码：

👉 定义了一个类组件
👉 使用 PureComponent 自动优化
👉 如果 props 和 state 没变，就不会重新渲染

------

# 七、超简单总结版

PureComponent =

> 自带“自动判断数据有没有变”的组件
> 没变就不重新画页面
> 帮你省性能

------

如果你愿意，我可以：

- 给你画一张 Component vs PureComponent 的流程图
- 或者给你写一个对比 demo 让你彻底明白

你想要哪个？





好 👍 我给你画一张 **Component vs PureComponent 的对比流程图**
 （用文字流程图，保证你一看就懂）

------

# 一、普通 Component 流程

```
class Demo extends React.Component
```

### 当父组件重新渲染时：

```
父组件 render
      ↓
子组件接收到新的 props
      ↓
不管数据变没变
      ↓
直接执行 render()
      ↓
页面重新渲染
```

👉 特点：
 **只要父组件动，它就动**

------

# 二、PureComponent 流程

```
class Demo extends React.PureComponent
```

### 当父组件重新渲染时：

```
父组件 render
      ↓
子组件接收到新的 props
      ↓
React 自动做 “浅比较”
      ↓
数据一样？ —— 是 → ❌ 不执行 render
                否 → ✅ 执行 render
```

👉 特点：
 **数据不变就不重新渲染**

------

# 三、对比图（最清晰版本）

```
普通 Component

props/state 变化
        ↓
直接 render()



PureComponent

props/state 变化
        ↓
先浅比较
        ↓
没变 —— 不 render
变了 —— render
```

------

# 四、举个最直观的例子

父组件：

```
render(){
  return <Demo02 name="Jager" />
}
```

如果父组件每秒刷新一次：

------

### 普通 Component

每秒都：

```
render
render
render
render
```

------

### PureComponent

第一次：

```
render
```

之后：

```
不 render
不 render
不 render
```

因为：

```
"Jager" === "Jager"
```

------

# 五、为什么它叫 Pure？

“Pure” 的意思是：

> 只要输入一样（props + state）
>  输出就一样

所以它可以安全地跳过重复渲染。

------

# 六、什么时候不能用 PureComponent？

当你传的是对象或数组：

```
<Demo02 user={{name:'Tom'}} />
```

每次都会创建新对象：

```
{} !== {}
```

地址不同 → 会重新 render

------

# 七、终极理解

PureComponent 本质就是帮你自动写了：

```
shouldComponentUpdate(nextProps, nextState){
   return 数据有没有变
}
```

它就是一个：

👉 自带 shouldComponentUpdate 的 Component

------

如果你愿意，我可以再给你画一张：

🔥 React 渲染全过程大图（从 setState 到 DOM 更新）

那个会让你彻底理解 React 的底层逻辑。

那这个和Memo有什么区别

好，这个问题问得非常好 👍
 **PureComponent 和 React.memo 到底有什么区别？**

我给你讲清楚，本质 + 用法 + 区别一次搞懂。

------

# 一句话先记住

|          | PureComponent              | React.memo       |
| -------- | -------------------------- | ---------------- |
| 适用组件 | 类组件                     | 函数组件         |
| 优化方式 | 自动浅比较 props + state   | 自动浅比较 props |
| 本质     | 内置 shouldComponentUpdate | 高阶组件         |

------

# 一、本质区别

## 1️⃣ PureComponent

```
class Demo extends React.PureComponent
```

它：

- 自动帮你写了 `shouldComponentUpdate`
- 会比较：
  - props
  - state

只要没变，就不 render。

------

## 2️⃣ React.memo

```
const Demo = React.memo((props)=>{
  return <div>{props.name}</div>
})
```

它：

- 只比较 props
- 不比较 state（因为函数组件没有 class state）

------

# 二、最核心区别（真正关键点）

## 🔥 PureComponent 会比较 state

```
this.setState({ count: 1 })
```

如果值没变：

👉 不 render

------

## 🔥 React.memo 不管 state

函数组件里的：

```
const [count,setCount] = useState(1)
```

只要你调用：

```
setCount(1)
```

函数组件一定重新执行。

因为：

> 函数组件没有 shouldComponentUpdate 机制
>  它是重新执行整个函数

------

# 三、执行机制区别（底层思维）

## 类组件

```
render()
```

是 React 主动调用的

React 可以控制：

```
要不要调用 render
```

------

## 函数组件

```
const Demo = () => { ... }
```

是直接重新执行整个函数

React 控制的是：

```
要不要重新执行函数
```

而 memo 就是帮你判断：

```
props 有没有变
```

------

# 四、图解对比

## PureComponent

```
父组件更新
    ↓
子组件接收 props
    ↓
浅比较 props + state
    ↓
决定是否 render
```

------

## React.memo

```
父组件更新
    ↓
子组件接收 props
    ↓
浅比较 props
    ↓
决定是否重新执行函数
```

------

# 五、现在谁更常用？

现在主流是：

```
函数组件 + hooks + React.memo
```

类组件基本属于旧写法了。

------

# 六、进阶知识（高手理解）

React.memo 本质是一个：

> 高阶组件（HOC）

它内部大概做了类似：

```
if (props没变) return 上一次结果
```

------

# 七、再给你一个超清晰总结

## 🔥 PureComponent

= 类组件版本的自动优化
 = 比较 props + state

------

## 🔥 React.memo

= 函数组件版本的优化
 = 只比较 props

------

# 八、终极一句话

> PureComponent 是类组件时代的性能优化
>  React.memo 是函数组件时代的性能优化

------

如果你愿意，我可以再讲一个更高级的：

🔥 为什么 React.memo 在有 children 时可能失效？

那个会让你进入“中级 React”水平 😎

props和State有什么不同

这个问题是 React 的**核心中的核心**。
 你一旦真正搞懂 props 和 state，React 就通透了。

我给你讲到完全清楚为止。

------

# 一句话区别

> **props 是别人给你的数据**
>  **state 是你自己管理的数据**

------

# 一、props 是什么？

props = properties（属性）

是：

👉 父组件传给子组件的数据
 👉 只读的
 👉 子组件不能修改

------

## 举个例子

父组件：

```
<Demo name="Jager" age={20} />
```

子组件：

```
function Demo(props){
  return <div>{props.name}</div>
}
```

这里：

```
name 和 age 就是 props
```

------

### 特点

- 来自外部
- 只能读取
- 不能改

如果你写：

```
props.name = "Tom"
```

❌ 会报错

------

# 二、state 是什么？

state = 组件内部状态

是：

👉 组件自己创建
 👉 组件自己修改
 👉 会触发重新渲染

------

## 举个例子（函数组件）

```
const [count,setCount] = useState(0)
```

这里：

```
count 是 state
```

当你执行：

```
setCount(1)
```

👉 页面重新渲染

------

# 三、超清晰对比表

|                 | props        | state        |
| --------------- | ------------ | ------------ |
| 谁给的          | 父组件       | 自己         |
| 能不能改        | ❌ 不能       | ✅ 能         |
| 是否触发 render | 改变会       | 改变会       |
| 作用            | 组件之间通信 | 组件内部数据 |

------

# 四、生活类比（保证你秒懂）

假设一个学生：

- 父母给他零花钱 → props
- 他钱包里的钱 → state

父母决定给多少（子不能改）
 学生可以花自己的钱（自己控制）

------

# 五、数据流方向

React 是：

> 单向数据流

```
父组件
   ↓
props
   ↓
子组件
```

不能反过来。

------

# 六、再深入一点（你进阶必懂）

### props 是组件的“输入”

### state 是组件的“内部记忆”

如果一个组件：

- 只接收 props
- 没有 state

那它就是一个“纯展示组件”。

------

# 七、终极理解图

```
        父组件
            ↓
          props
            ↓
        子组件
            ↓
         内部 state
            ↓
        重新 render
```

------

# 八、很多人会混淆的点

❓ props 变了会不会重新渲染？

✅ 会

❓ state 变了会不会重新渲染？

✅ 会

区别不在于渲染
 而在于：

```
数据是谁控制的
```

------

# 九、你现在属于哪个阶段？

如果你：

- 已经会 useState
- 理解 props 传值
- 理解 render 触发

那你已经进入 React 初级中段了。

------

如果你愿意，我可以再讲一个：

🔥 props → 子组件修改父组件数据 是怎么实现的？

那个会让你理解 React 的“回调传递机制”。