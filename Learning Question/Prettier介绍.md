prettier是什么

**Prettier** 是一个**代码格式化工具（Code Formatter）**，核心作用只有一件事：
 👉 **自动把你的代码“排整齐”，并且所有人用同一套格式规则。**

------

## 一句话理解

> **Prettier = 自动整理代码排版的工具**
>  不管你怎么写，它都会帮你改成“统一、规范、可读”的样子。

------

## Prettier 能做什么？

它会**自动处理这些事**：

- 缩进（2 空格 / 4 空格）
- 换行
- 引号（单引号 / 双引号）
- 逗号、分号
- 一行太长时自动换行
- 对象、数组、函数参数的排版

你**不需要手动管这些细节**。

------

## 举个最直观的例子

### 你写的代码（很随意）

```
function sum(a,b){return a+b}
```

### Prettier 格式化后

```
function sum(a, b) {
  return a + b;
}
```

💡 **逻辑完全没变，只改了“样子”**

------

## Prettier 和 ESLint 的区别（很重要）

很多初学者会混淆，这里用一句话区分：

| 工具         | 主要负责                                   |
| ------------ | ------------------------------------------ |
| **Prettier** | 👉 代码“长什么样”（格式、排版）             |
| **ESLint**   | 👉 代码“对不对”（语法、潜在 bug、最佳实践） |

### 举例

```
if(a==b){console.log("ok")}
```

- **Prettier**：会帮你换行、加空格
- **ESLint**：可能会提示你应该用 `===`

👉 **一个管“美观”，一个管“质量”**

------

## Prettier 支持哪些语言？

非常多，包括但不限于：

- JavaScript / TypeScript
- React / Vue
- HTML / CSS / SCSS
- JSON
- Markdown
- YAML

所以在前端项目里几乎是**标配**。

------

## Prettier 一般怎么用？

### 1️⃣ 编辑器自动格式化（最常见）

比如 **VS Code**：

- 安装 Prettier 插件
- 保存文件时自动格式化

你只负责写代码，保存时它帮你整理。

------

### 2️⃣ 配置文件（统一团队风格）

项目里通常会有：

```
.prettierrc
```

例如：

```
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

意思是：

- 要分号
- 用单引号
- 缩进 2 个空格

------

### 3️⃣ 和 Git / 团队协作的意义

没有 Prettier：

> “你这缩进不对”
>  “你为啥用双引号？”

有 Prettier：

> **机器说了算，别吵了 😄**

------

## 为什么几乎所有前端项目都用 Prettier？

✅ 省时间
 ✅ 代码统一
 ✅ 减少无意义的代码 review
 ✅ 新手友好
 ✅ 不影响逻辑，只管格式

------

## 用一句类比帮你记住

> **ESLint 像老师：管你写得对不对**
>  **Prettier 像整理机器人：管你桌子整不整齐**

------

如果你愿意，我可以**结合你现在学的 React / Webpack / CRACO 项目**，直接告诉你：

- Prettier 在真实项目里是怎么配的
- `.prettierrc` 每一项到底在控制什么

你想从哪一步继续？



我的VScode的设置中的editor default设置中没有prettier -code matter的选项怎么办

这是**很常见的情况**，不用担心 👍
 我们一步一步来定位原因，你一定能解决。

------

## 一、先说结论（最常见原因）

> **VS Code 的 `Editor: Default Formatter` 里没有 `Prettier - Code formatter`，几乎一定是因为：
>  👉 你还没有安装 Prettier 插件，或者插件没有被 VS Code 正确识别。**

------

## 二、一步一步排查（按顺序做）

### ✅ 第 1 步：确认是否安装了 Prettier 插件（最关键）

1. 打开 VS Code

2. 按 `Ctrl + Shift + X`（扩展市场）

3. 搜索：

   ```
   Prettier - Code formatter
   ```

4. 看状态：

   - 如果是 **Install** → 点 **Install**
   - 如果是 **Disable** → 点 **Enable**
   - 如果已经 **Enabled** → 继续下一步

⚠️ **一定要是这个官方插件**
 作者是：**Prettier**

------

### ✅ 第 2 步：重启 VS Code（非常重要）

安装或启用插件后：

> ❗**一定要完全关闭 VS Code，再重新打开**

很多人就是因为没重启，导致选项不出现。

------

### ✅ 第 3 步：确认当前文件类型是 Prettier 支持的

Prettier **只会在它支持的语言里出现**，例如：

支持：

- `.js`
- `.ts`
- `.jsx`
- `.tsx`
- `.json`
- `.css`
- `.html`
- `.vue`
- `.md`

不支持 / 不触发：

- `.txt`
- `.cpp`
- `.c`
- `.py`（默认不是 Prettier）

📌 **操作建议：**

- 打开一个 `.js` 或 `.json` 文件
- 再去 `Settings → Editor: Default Formatter` 看

------

### ✅ 第 4 步：用“语言级设置”找（很多人漏掉）

不要只看 **全局设置**，Prettier 常常在**语言专属设置里**。

操作路径：

1. `Ctrl + ,` 打开设置

2. 右上角点 `{}`（打开 settings.json），或：

3. 搜索框输入：

   ```
   formatter
   ```

4. 找到类似：

   ```
   [javascript]
   ```

   或

   ```
   [json]
   ```

或者直接这样设置 👇（推荐）

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

> `esbenp.prettier-vscode` 就是 Prettier 的 ID

------

### ✅ 第 5 步：排查是否被其他 Formatter 抢占

如果你装过这些插件：

- ESLint
- Beautify
- Vetur
- Volar

它们**可能把 Prettier 顶掉了**

👉 解决方案（语言级指定，最稳）：

```
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

------

## 三、如果你想「不通过设置列表，直接验证 Prettier 是否生效」

### 方法 1：右键格式化

1. 打开 `.js` 文件

2. 右键 → **Format Document With…**

3. 看列表里有没有：

   ```
   Prettier - Code formatter
   ```

如果这里有，说明 Prettier 是**正常工作的**。

------

### 方法 2：命令面板

1. `Ctrl + Shift + P`

2. 输入：

   ```
   Format Document With
   ```

3. 看有没有 Prettier

------

## 四、90% 问题的快速解决方案（直接照做）

👉 打开 `settings.json`，粘贴：

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

然后：

- 重启 VS Code
- 打开 `.js` / `.json` 文件
- `Ctrl + S` 保存测试

------

## 五、如果你愿意，我可以继续帮你

你可以直接告诉我：

1. ✔️ Prettier 插件是否已安装
2. ✔️ 你当前打开的文件后缀（比如 `.js` / `.vue`）
3. ✔️ 是否安装了 ESLint / Volar / Vetur

我可以**精确告诉你为什么你的 VS Code 里不显示这个选项**，而不是泛泛而谈。