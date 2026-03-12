# My-Element

一个基于 Vue 3 + TypeScript + Vite 构建的现代化 UI 组件库。

## ✨ 特性

- 🎨 精心设计的组件样式
- 📦 开箱即用的高质量 Vue 3 组件
- 🔥 使用 Vue 3 Composition API 开发
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 📚 详细的文档和示例
- 🎯 支持按需引入
- 🌍 支持 ES Module 和 UMD 两种构建格式

## 📦 安装

使用 npm:

```bash
npm install vikingmute/element
```

使用 pnpm:

```bash
pnpm add vikingmute/element
```

使用 yarn:

```bash
yarn add vikingmute/element
```

## 🔨 使用

### 完整引入

```ts
import { createApp } from "vue";
import VElement from "vikingmute/element";
import "vikingmute/element/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(VElement);
app.mount("#app");
```

### 按需引入

```vue
<script setup lang="ts">
import { VButton, VInput, VAlert } from "vikingmute/element";
import "vikingmute/element/dist/index.css";
</script>

<template>
  <VButton type="primary">按钮</VButton>
  <VInput v-model="value" placeholder="请输入内容" />
  <VAlert title="成功提示" type="success" />
</template>
```

## 📑 组件列表

- **Alert** - 警告提示
- **Button** - 按钮
- **Collapse** - 折叠面板
- **Dropdown** - 下拉菜单
- **Form** - 表单
- **Icon** - 图标
- **Input** - 输入框
- **Message** - 全局提示
- **Select** - 选择器
- **Switch** - 开关
- **Tooltip** - 文字提示

## 📖 文档

完整文档请访问：[https://iirrony.github.io](https://iirrony.github.io)

## 🛠️ 开发

### 环境要求

- Node.js 16+
- pnpm 7+

### 推荐 IDE 配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 克隆项目

```bash
git clone <repository-url>
cd v-element
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建组件库

```bash
pnpm build
```

构建产物包括：

- ES Module 格式：`dist/es/`
- UMD 格式：`dist/umd/`
- 类型声明文件：`dist/types/`
- 样式文件：`dist/index.css`

### 启动文档站点

```bash
pnpm docs:dev
```

### 构建文档站点

```bash
pnpm docs:build
```

### 运行测试

```bash
pnpm test
```

### 代码检查与格式化

```bash
pnpm lint
```

## 📜 可用脚本

| 命令                | 说明                   |
| ------------------- | ---------------------- |
| `pnpm dev`          | 启动开发服务器         |
| `pnpm build`        | 构建组件库（ES + UMD） |
| `pnpm build-es`     | 构建 ES Module 格式    |
| `pnpm build-umd`    | 构建 UMD 格式          |
| `pnpm type-check`   | TypeScript 类型检查    |
| `pnpm lint`         | ESLint 代码检查和修复  |
| `pnpm docs:dev`     | 启动文档开发服务器     |
| `pnpm docs:build`   | 构建文档站点           |
| `pnpm docs:preview` | 预览构建的文档站点     |
| `pnpm preview`      | 预览构建产物           |

## 🔗 技术栈

- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [VitePress](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [Vitest](https://vitest.dev/) - 基于 Vite 的单元测试框架
- [FontAwesome](https://fontawesome.com/) - 图标库
- [Popper.js](https://popper.js.org/) - 定位引擎

## 📄 许可证

[MIT](LICENSE) © Really Ren

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

如果这个项目对你有帮助，请给一个 ⭐️ 支持一下！
