cursor：pointer是什么

`cursor: pointer;` 是 **CSS** 里的一个样式属性，用来控制鼠标悬停时的形状。

------

## 一句话理解

👉 `cursor: pointer;` 的意思是：

**当鼠标移动到这个元素上时，鼠标会变成“小手”形状。**

------

## 举个最常见的例子

```
button {
  cursor: pointer;
}
```

或者：

```
div {
  cursor: pointer;
}
```

效果是：

- 鼠标移上去
- 光标变成 👆 小手
- 表示：**这个东西可以点击**

------

## 为什么叫 pointer？

因为 `pointer` 指的是“指针形状”（就是那只小手）。

浏览器中常见的鼠标形态：

| 值            | 效果                 |
| ------------- | -------------------- |
| `default`     | 普通箭头             |
| `pointer`     | 小手（可点击）       |
| `text`        | 输入文本光标（I 形） |
| `not-allowed` | 禁止符号 🚫           |
| `move`        | 可移动               |

------

## 实际开发中什么时候用？

### ✅ 用在：

- 按钮
- 可点击的 div
- 卡片组件
- 自定义菜单
- 任何点击区域

例如你在 React 里：

```
<div onClick={handleClick} style={{ cursor: 'pointer' }}>
  点我
</div>
```

不加的话：

- 鼠标还是普通箭头
- 用户可能不知道可以点

加了以后：

- 用户一看小手
- 就知道能点击

------

## 一个重要概念

HTML 原生的 `<button>` 和 `<a>` 标签：

浏览器默认已经有 `cursor: pointer`

但是：

- `div`
- `span`

默认是 `cursor: default`

所以你做自定义按钮时必须手动加。

------

## 总结

```
cursor: pointer;
```

= 鼠标悬停时变成小手
 = 表示元素可点击
 = 提升用户体验

------

如果你愿意，我可以给你讲讲：

- 为什么有时候 Ant Design 的按钮不用写 pointer？
- 或者 cursor 背后其实属于 CSS 交互体验的一部分

你最近在写 React + antd，对这种细节理解很有帮助 👍