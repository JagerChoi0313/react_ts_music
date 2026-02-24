import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderWrapper} from './style'
import {HeaderLeft} from './style'
import {HeaderRight} from './style'
import headerTitles from '@/assets/data/header-title.json'


interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = (props) => {

//定义组件内部状态

//组件展示逻辑
    function showItem(item:any){
        if(item.type==='path')
        {
            return <NavLink to={item.link}>{item.title}</NavLink>
        }else{
            return <a href={item.link} rel="noreferrer" target="_blank">
                {item.title}</a>
        }

    }
    
    return (
    <HeaderWrapper>
        <div className="content wrap-v1">
        <HeaderLeft>
            <a className="logo sprite_01" href="/">
            网易云音乐
            </a>
        <div className="title-list">
        {headerTitles.map((item)=>{
            return(
                <div className="item active" key={item.title}>
                    {showItem(item)}
                </div>
            )
        })}
        </div>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
        </div>
    </HeaderWrapper>
      )
}

export default memo(AppHeader),为什么要把{Link}改成{NavLink} ？





你问的是为什么在 React Router 中要把 `{Link}` 改成 `{NavLink}`，其实核心原因跟“高亮当前路由”有关，我给你详细分析一下。

------

### 1️⃣ `Link` 和 `NavLink` 的区别

- **`Link`**

  - 基本功能是跳转页面，不会刷新整个网页。

  - 用法：

    ```tsx
    <Link to="/discover">发现音乐</Link>
    ```

  - **不会自动加样式**，即使你当前页面已经在 `/discover`，它也不会有“选中状态”效果。

- **`NavLink`**

  - 继承自 `Link`，除了可以跳转，还能根据当前 URL 自动给元素加上 **active 样式**。

  - 用法：

    ```tsx
    <NavLink to="/discover" className={({isActive}) => isActive ? 'active' : ''}>
      发现音乐
    </NavLink>
    ```

  - 自动判断当前路由是否匹配 `to`，可以高亮显示，让导航栏更直观。

------

### 2️⃣ 你的代码里的问题

```tsx
<div className="item active" key={item.title}>
  {showItem(item)}
</div>
```

- 你手动写了 `className="item active"`，这意味着**所有导航都会被默认高亮**，用户无法区分当前页面。
- 如果改成 `NavLink`，可以这样写：

```tsx
<NavLink 
  to={item.link} 
  className={({isActive}) => isActive ? 'item active' : 'item'}
>
  {item.title}
</NavLink>
```

- 这样就会根据当前路径自动加 `active` 类，只高亮当前页面对应的导航项，而不是每个都亮。

------

### 3️⃣ 总结

- 用 `Link`：只跳转，不管高亮。
- 用 `NavLink`：跳转 + 当前页面高亮。
- 因为你的 `AppHeader` 是导航栏，用户体验要求知道自己在哪一页，所以用 `NavLink` 更合适。

------

💡 **小贴士**
如果你的 `headerTitles.json` 里有一些外链（type !== 'path'），你仍然用 `<a>`，这很好，NavLink 只对内部路由有用。

------

如果你愿意，我可以帮你改写你的 `showItem` 函数，让 NavLink 自动加 `active` 类，这样你的导航栏就完全动态高亮了。

你想让我帮你改吗？







好，这次我给你讲**底层逻辑 + 实际运行原理 + 为什么必须用 NavLink**，让你彻底明白。

------

# 一、先理解：React Router 到底在干嘛？

你项目里用的是：

```ts
import { NavLink } from 'react-router-dom'
```

它来自 👉 **`react-router-dom`**

## 🔹 React Router 的核心作用

它帮你做两件事：

1. 监听浏览器地址变化
2. 根据地址渲染不同组件

比如：

```
/discover   → 发现页面
/mine       → 我的页面
/friend     → 朋友页面
```

------

# 二、Link 到底做了什么？

```tsx
<Link to="/discover">发现音乐</Link>
```

它本质上干了两件事：

1. 阻止 `<a>` 默认刷新
2. 调用 React Router 的跳转方法

等价于：

```tsx
<a href="/discover">发现音乐</a>
```

但不会刷新页面。

❗但是它不会关心：

> 当前页面是不是 /discover

它只负责“跳”。

------

# 三、NavLink 多做了什么？

```tsx
<NavLink to="/discover">发现音乐</NavLink>
```

它在 Link 的基础上多做了一步：

### ✅ 它会读取当前 URL

React Router 内部有一个：

```
当前路径：window.location.pathname
```

比如现在地址是：

```
http://localhost:3000/discover
```

那当前路径就是：

```
/discover
```

------

### ✅ 然后 NavLink 会对比

```ts
当前路径 === to ?
```

如果相等：

```
/discover === /discover → true
```

那它就会：

```
自动给这个元素加 active 类
```

------

# 四、所以差别本质是：

| 功能             | Link | NavLink |
| ---------------- | ---- | ------- |
| 页面跳转         | ✅    | ✅       |
| 自动判断当前页面 | ❌    | ✅       |
| 自动加 active 类 | ❌    | ✅       |

------

# 五、结合你现在的代码分析

你现在写的是：

```tsx
<div className="item active">
  {showItem(item)}
</div>
```

问题在哪里？

👉 你是手动写死了 active

这意味着：

```
每个导航项都高亮
```

而真正应该是：

```
当前页面的那个才高亮
```

------

# 六、NavLink 是怎么帮你自动高亮的？

在 React Router v6 里：

```tsx
<NavLink
  to="/discover"
  className={({ isActive }) =>
    isActive ? "item active" : "item"
  }
>
  发现音乐
</NavLink>
```

内部逻辑是：

```ts
const isActive = 当前路径 === to
```

然后根据 isActive 返回不同 className

------

# 七、运行过程模拟

假设当前地址是：

```
/discover
```

你有 3 个导航：

```
/discover
/mine
/friend
```

React Router 会依次对比：

```
/discover === /discover → true
/discover === /mine → false
/discover === /friend → false
```

最终效果：

```
发现音乐  ← 高亮
我的音乐
朋友
```

------

# 八、为什么导航栏必须用 NavLink？

导航栏的本质是什么？

👉 让用户知道“我现在在哪一页”

如果不用 NavLink：

- 你必须手动写判断逻辑
- 自己去拿当前路径
- 自己对比
- 自己控制 class

而 NavLink 已经帮你封装好了。

------

# 九、一个更底层理解（重要）

NavLink =

```
Link + useLocation + 路径匹配算法 + 自动 class 切换
```

所以你可以把它理解成：

```
“会思考的 Link”
```

------

# 十、如果用 Link 怎么实现高亮？

你得自己写：

```tsx
import { useLocation } from 'react-router-dom'

const location = useLocation()

const isActive = location.pathname === item.link
```

然后：

```tsx
<div className={isActive ? "item active" : "item"}>
  <Link to={item.link}>{item.title}</Link>
</div>
```

是不是复杂很多？

所以：

👉 导航一定用 NavLink
👉 普通跳转用 Link

------

# 十一、最后给你一句总结

Link 只负责跳转
NavLink 负责：

跳转 + 判断当前页面 + 自动加 active 样式

------

如果你愿意，我可以再给你画一个“浏览器地址变化 → React Router 工作流程图”，让你真正理解它的运行机制。









好，这次我用**最通俗版本**讲，不讲源码，不讲底层，只讲你能“秒懂”的版本。

------

# 🎯 一句话区别

👉 **Link = 只负责跳转**
👉 **NavLink = 跳转 + 自动高亮当前页面**

就这么简单。

------

# 🧠 想象一个现实场景

假设你在商场里，有一个指示牌：

```
[一楼]  [二楼]  [三楼]
```

你现在在二楼。

你希望什么效果？

```
一楼
👉 二楼（亮着）
三楼
```

对吧？

------

# 🟢 如果用 Link

Link 只会帮你“走到二楼”，
但不会帮你“把二楼亮起来”。

也就是说：

```
一楼
二楼
三楼
```

全部一样，看不出你在哪。

------

# 🔵 如果用 NavLink

NavLink 会自动帮你判断：

> 你现在是不是在这个页面？

如果是，它就自动加上：

```
active
```

于是变成：

```
一楼
👉 二楼（自动高亮）
三楼
```

你不用自己写判断代码。

------

# 💻 回到你的代码

你现在写的是：

```tsx
<div className="item active">
```

意思是：

> 所有导航都亮

那当然不对。

应该是：

> 只有当前页面那个亮

而 NavLink 就是专门干这个的。

------

# 🎬 再举个更生活化的例子

想象手机底部导航栏：

```
🏠 首页   🔍 搜索   👤 我的
```

当你点“搜索”：

```
🏠 首页
🔍 搜索（亮）
👤 我的
```

这种效果就是用 NavLink 做的。

如果用 Link，就做不出来自动亮。

------

# 🔥 再压缩成最简单理解

Link：

> “带你过去”

NavLink：

> “带你过去 + 告诉你现在在哪”

------

# 📌 所以什么时候用哪个？

| 场景         | 用什么  |
| ------------ | ------- |
| 导航栏       | NavLink |
| 普通按钮跳转 | Link    |

------

# 🎯 你现在这个 AppHeader 是导航栏

所以必须用：

```tsx
import { NavLink } from 'react-router-dom'
```

因为导航栏一定要知道：

> 当前在哪一页

------

如果你愿意，我可以再用“打游戏选关卡”的例子给你讲一次 😂





好，这次我们专门讲：

> **为什么 NavLink 要那样写？它背后的逻辑到底是什么？**

我们不讲复杂概念，就讲“它到底在判断什么”。

------

# 一、核心逻辑只有一句话

NavLink 本质是在做：

```js
当前浏览器路径 === 你写的 to ?
```

如果相等 → 加 active
如果不等 → 不加

就这么简单。

------

# 二、一步一步拆开逻辑

假设你现在浏览器地址是：

```
http://localhost:3000/discover
```

那 React Router 读到的当前路径是：

```
/discover
```

------

然后你写了三个导航：

```tsx
<NavLink to="/discover">发现</NavLink>
<NavLink to="/mine">我的</NavLink>
<NavLink to="/friend">朋友</NavLink>
```

React Router 会一个个对比：

```
当前路径 === /discover ?   ✅ true
当前路径 === /mine ?       ❌ false
当前路径 === /friend ?     ❌ false
```

------

# 三、所以才要这样写

你看到的写法：

```tsx
<NavLink
  to={item.link}
  className={({ isActive }) =>
    isActive ? "item active" : "item"
  }
>
```

这段代码的逻辑是：

### 第一步：React Router 帮你算出

```js
isActive = 当前路径 === to
```

### 第二步：把结果给你

```js
isActive 是 true 或 false
```

### 第三步：你根据 true / false 决定 class

```js
true  → "item active"
false → "item"
```

------

# 四、如果不这样写会发生什么？

如果你写：

```tsx
<div className="item active">
```

那意思就是：

```
不管在哪个页面
全部都 active
```

那导航栏就失去意义了。

------

# 五、为什么不能直接用 Link？

因为 Link 只负责：

```
点了 → 改地址
```

它不会帮你做：

```
现在是不是这个页面？
```

NavLink 比 Link 多做的一步就是：

```
自动判断当前路径
```

------

# 六、最底层运行流程（超通俗）

浏览器地址变化
↓
React Router 监听到
↓
NavLink 读取当前路径
↓
和 to 做比较
↓
返回 isActive
↓
你根据 isActive 决定样式

------

# 七、再用一句超直白的话总结

NavLink 的逻辑就是：

> “如果我代表的页面正在显示，那我就亮起来。”

------

如果你愿意，我可以再讲一个更关键的问题：

👉 为什么 `className` 要写成函数？
👉 为什么不能直接写字符串？

这个理解了，你对 React Router 就真的入门了。