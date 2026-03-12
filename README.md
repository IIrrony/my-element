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

## � 组件列表

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

## 📖 在线文档

完整文档请访问：[https://iirrony.github.io/my-element/](https://iirrony.github.io/my-element/)

## 🚀 快速开始

### 环境要求

- Node.js 16+
- pnpm 8+

### 推荐 IDE 配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 1. 克隆项目

```bash
git clone <repository-url>
cd my-element
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

运行组件开发环境：

```bash
pnpm dev
```

访问 http://localhost:5173 查看组件示例。

### 4. 启动文档服务器

运行 VitePress 文档：

```bash
pnpm docs:dev
```

访问 http://localhost:5173 查看完整文档和组件展示。

文档源码位于 `docs/` 目录下，包含：

- 组件文档：`docs/components/`
- 组件演示：`docs/demo/`
- VitePress 配置：`docs/.vitepress/`

## 🛠️ 构建

### 构建组件库

构建 ES Module 和 UMD 两种格式：

```bash
pnpm build
```

生成的文件位于 `dist/` 目录：

- `dist/es/` - ES Module 格式
- `dist/umd/` - UMD 格式
- `dist/types/` - TypeScript 类型声明
- `dist/index.css` - 样式文件

### 构建文档

构建 VitePress 静态站点：

```bash
pnpm docs:build
```

生成的文件位于 `docs/.vitepress/dist/` 目录。

### 预览构建结果

预览组件库构建：

```bash
pnpm preview
```

预览文档构建：

```bash
pnpm docs:preview
```

## 📝 其他命令

```bash
# 类型检查
pnpm type-check

# 代码检查和修复
pnpm lint

# 运行测试
pnpm test
```

## 📂 项目结构

```
my-element/
├── src/                    # 组件源码
│   ├── components/        # 组件目录
│   ├── hooks/             # 组合式函数
│   └── styles/            # 样式文件
├── docs/                  # VitePress 文档
│   ├── .vitepress/       # VitePress 配置
│   ├── components/       # 组件文档
│   └── demo/             # 组件演示
├── dist/                  # 构建产物
└── public/               # 静态资源
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
