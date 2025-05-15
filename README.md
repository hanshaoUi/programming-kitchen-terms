# 编程术语 · 做菜版解释 🍳

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![License](https://img.shields.io/badge/license-MIT-blue)

一个用厨房和烹饪的比喻来解释编程概念的交互式应用，让技术更易理解。

![软件截图](https://www.pnglog.com/zStw1S.png)

## ✨ 特点

- 🧩 **分类整理**：将编程术语按类别分组，方便查找和学习
- 🍳 **厨房比喻**：用烹饪和厨房的概念解释抽象的编程术语
- 📱 **响应式设计**：在各种设备上都能良好显示
- 🎨 **精美界面**：现代化UI设计，包括卡片、手风琴和标签页组件
- 🌓 **深色模式支持**：支持浅色和深色主题

## 🚀 快速开始

### 前提条件

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装

1. 克隆仓库

```bash
git clone https://github.com/yourusername/kitchen-coding-terms.git
cd kitchen-coding-terms

```

2. 安装依赖


```shellscript
npm install
# 或
yarn install
```

3. 启动开发服务器


```shellscript
npm run dev
# 或
yarn dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)


## 🛠️ 技术栈

- **Next.js** - React框架
- **React** - 用户界面库
- **Tailwind CSS** - 样式解决方案
- **shadcn/ui** - UI组件库


## 📖 使用方法

该应用将编程术语分为以下几类：

- 前端工具 🧰
- 基础编程概念 💡
- 运行逻辑 ⚙️
- 开发与工具 🔧
- 设计与架构 🏛️
- 安全与性能 🔒
- 测试与质量 🧪


点击不同的标签页可以查看不同类别的术语。点击每个术语可以展开查看详细的"厨房版"解释。

## 🤝 贡献

欢迎贡献新的术语解释或改进现有内容！请按照以下步骤：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request


## 📝 添加新术语

要添加新的术语，请编辑 `kitchen-coding-terms.tsx` 文件中的 `TERMS` 对象：

```javascript
{
  term: "新术语名称",
  emoji: "相关表情符号",
  explain: "用厨房比喻的解释"
}
```

## 📄 许可证

© HOPE
本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

