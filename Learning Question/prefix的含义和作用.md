prefix是什么

“**prefix**” 是一个英文单词，意思是：**前缀 / 前面加的内容**。

它在不同场景下意思会稍微不一样，我给你分成几个你常见的场景讲 👇

------

## 1️⃣ 英语里的 prefix（语言学）

在单词前面加的部分。

比如：

- **un** + happy → unhappy
- **re** + write → rewrite
- **pre** + view → preview

这里的 **un / re / pre** 就是 prefix（前缀）。

------

## 2️⃣ 编程里的 prefix（前缀）

在开发中，prefix 通常表示：

> 给某个东西“前面加一个标识”

### ✅ 例子 1：URL 前缀

```
/api/user
```

这里的 `/api` 就是 prefix。

比如：

```
BASE_URL = 'http://localhost:3000'
```

那：

```
http://localhost:3000/api/user
```

`/api` 就是接口前缀。

------

### ✅ 例子 2：CSS 前缀

```
-webkit-transform
```

`-webkit-` 就是 prefix。

------

### ✅ 例子 3：变量命名前缀

```
isLoading
hasError
```

这里：

- `is`
- `has`

是布尔变量的 prefix。

------

## 3️⃣ React / Antd 里的 prefix

如果你在用 **Ant Design**（antd），你可能会看到：

```
<ConfigProvider prefixCls="my-app" />
```

`prefixCls` 的意思是：

> 给组件的 class 名加一个前缀

比如默认：

```
ant-btn
```

如果你改 prefix：

```
my-app-btn
```

这样可以防止样式冲突。

------

## 4️⃣ 数学 / 数据结构里的 prefix

比如：

- prefix sum（前缀和）
- prefix tree（Trie 前缀树）

意思就是“从前面开始的部分”。

------

# 🔥 一句话总结

**prefix = 前面加的东西**

你是在哪看到 prefix 的？
 是在 React 项目里？还是在 antd 里？我可以结合你现在的项目给你讲得更贴近一点 👌