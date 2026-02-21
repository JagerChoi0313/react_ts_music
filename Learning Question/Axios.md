什么是axios

## 什么是 Axios？

**Axios** 是一个专门用来“发送网络请求”的 JavaScript 工具库。

简单讲一句话：

> 👉 Axios = 帮你向后端服务器要数据的工具。

它常用于前端项目，比如在 **React**、**Vue.js** 项目里请求接口数据。

------

## 一句话超通俗理解 🌰

你的网站需要从服务器拿数据：

- 用户列表
- 商品数据
- 登录验证
- 音乐列表

浏览器本身有 `fetch` 可以用，但 Axios 更好用、更方便。

所以：

> Axios = 更好用的 fetch

------

## 它能干嘛？

Axios 主要做 5 件事：

1. ✅ 发送 GET 请求（拿数据）
2. ✅ 发送 POST 请求（提交数据）
3. ✅ 自动帮你转换 JSON
4. ✅ 统一处理请求错误
5. ✅ 可以设置请求拦截器（比如自动加 token）

------

## 最简单例子

```
import axios from 'axios'

axios.get('https://api.example.com/users')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
```

意思是：

- 向服务器要 users 数据
- 成功就打印
- 失败就报错

------

## 为什么大家都用 Axios？

因为它比原生 `fetch`：

| 对比        | fetch        | axios  |
| ----------- | ------------ | ------ |
| 自动转 JSON | ❌ 需要手动写 | ✅ 自动 |
| 请求拦截    | ❌ 没有       | ✅ 有   |
| 响应拦截    | ❌ 没有       | ✅ 有   |
| 超时设置    | 麻烦         | 简单   |
| 语法简洁    | 一般         | 更清晰 |

------

## 在 React 项目中怎么用？

一般会：

1️⃣ 单独建一个 `request.ts`
 2️⃣ 创建 axios 实例
 3️⃣ 统一配置 baseURL
 4️⃣ 加请求拦截器

比如：

```
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
```

------

## 用一句人话总结

> Axios 就是前端向后端要数据的“快递员”。

你写 React 项目（你最近在学 Redux 和路由），以后几乎一定会用到它。

------

如果你愿意，我可以给你画一个：

👉 前端 → Axios → 后端 → 返回数据 的流程图

保证你一秒彻底理解 😄