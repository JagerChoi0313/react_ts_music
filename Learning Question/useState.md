const [banners,setBanner] = useState<any[]>([])为什么可以这么写

你这句代码：

```
const [banners, setBanner] = useState<any[]>([])
```

我们一步一步拆开讲，保证你彻底明白。

------

## 一、这是在用谁？

这是在用 **React** 里的 `useState`。

`useState` 是 React 里的一个 **Hook**，作用是：

> 在函数组件里创建“状态”

------

## 二、useState 是干嘛的？

最简单理解：

```
const [状态变量, 修改函数] = useState(初始值)
```

它会返回两个东西：

| 返回值    | 含义           |
| --------- | -------------- |
| banners   | 当前状态       |
| setBanner | 修改状态的函数 |

------

## 三、为什么可以写成 `useState<any[]>([])`？

重点来了 👇

### 1️⃣ `<any[]>` 是什么？

这是 **TypeScript 泛型写法**。

意思是：

> 我告诉 TypeScript：这个状态是一个数组，数组里面的类型是 any。

也就是说：

```
banners 是：any[]
```

等价于：

```
let banners: any[]
```

------

### 2️⃣ 为什么需要写 `<any[]>`？

因为你给的初始值是：

```
[]
```

这是一个空数组。

问题来了：

空数组 `[]` —— TypeScript 不知道里面放什么类型。

如果你不写泛型：

```
useState([])
```

TS 可能推断成：

```
never[]
```

意思是：
 “这是一个永远不能往里放东西的数组”

你后面：

```
setBanner([1,2,3])
```

就会报错。

------

## 四、那这句完整的意思是什么？

```
const [banners,setBanner] = useState<any[]>([])
```

翻译成人话就是：

> 创建一个叫 banners 的状态，它是一个数组（里面可以放任何类型），初始值是空数组。

------

## 五、举个真实项目场景（你最近在学接口）

比如你用 axios 请求轮播图数据：

```
useEffect(() => {
  axios.get('/banner').then(res => {
    setBanner(res.data.banners)
  })
}, [])
```

后端返回的是数组：

```
[
  { id:1, imageUrl:'xxx' },
  { id:2, imageUrl:'xxx' }
]
```

所以我们提前告诉 TS：

```
useState<any[]>([])
```

意思是：

“以后这里会存数组”

------

## 六、更专业写法（推荐）

`any` 不太安全。

更好的写法是定义类型：

```
interface IBanner {
  id: number
  imageUrl: string
}

const [banners, setBanner] = useState<IBanner[]>([])
```

这样：

- 访问错属性会报错
- 更安全
- 更专业

------

## 七、为什么数组类型写成 `any[]` 而不是 `Array<any>`？

这两种写法完全一样：

```
any[]
Array<any>
```

90%项目都用 `any[]`，更简洁。

------

## 八、总结一句话（超通俗版）

```
useState<any[]>([])
```

意思就是：

> “我创建一个数组状态，现在是空的，以后会往里面放东西。”

------

如果你愿意，我可以再给你画一张：

useState + 泛型 + 数组 的完整流程图 👀