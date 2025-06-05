# 智膳通（Smart Canteen）- 前端项目

智膳通是一个面向高校的智慧营养食堂AI Agent系统，通过AI技术为学生和教职工提供个性化饮食推荐、便捷订餐服务和健康管理支持。

## 项目概述

本项目是智膳通系统的前端部分，基于React + TypeScript + Tailwind CSS构建，实现了面向不同角色用户（学生、商家、管理员、骑手）的界面和功能。

### 主要功能

- 用户认证与授权
- 个性化菜品推荐
- 在线菜单浏览与搜索
- 订单创建与管理
- 营养成分分析
- 商家管理系统
- 管理员后台
- 骑手配送系统

## 技术栈

- **核心框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **CSS框架**: Tailwind CSS
- **路由管理**: React Router v6
- **状态管理**: Zustand
- **HTTP客户端**: Axios
- **图表库**: Recharts
- **动画**: Framer Motion
- **图标**: Lucide React

## 项目结构

```
smart-canteen-ui/
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── components/      # 通用组件
│   ├── pages/           # 页面组件
│   │   ├── student/     # 学生相关页面
│   │   ├── merchant/    # 商家相关页面
│   │   ├── admin/       # 管理员相关页面
│   │   └── rider/       # 骑手相关页面
│   ├── services/        # API服务
│   ├── stores/          # 状态管理
│   ├── types/           # TypeScript类型定义
│   └── utils/           # 工具函数
├── .eslintrc.cjs        # ESLint配置
├── index.html           # HTML模板
├── package.json         # 项目依赖
├── postcss.config.js    # PostCSS配置
├── tailwind.config.js   # Tailwind CSS配置
├── tsconfig.json        # TypeScript配置
└── vite.config.ts       # Vite配置
```

## 角色与功能

### 学生用户

- 浏览食堂菜单
- 接收AI个性化推荐
- 查看菜品营养成分
- 在线下单
- 管理订单
- 设置健康饮食目标

### 商家用户

- 管理菜品信息
- 处理订单
- 查看销售统计
- 管理商家信息

### 管理员用户

- 系统监控与管理
- 用户管理
- 商家管理
- 数据分析

### 骑手用户

- 接收配送任务
- 管理配送订单
- 查看收入统计

## 安装与运行

### 环境要求

- Node.js 16+
- npm 7+ 或 yarn 1.22+

### 安装依赖

```bash
# 使用npm
npm install

# 或使用yarn
yarn
```

### 开发模式运行

```bash
# 使用npm
npm run dev

# 或使用yarn
yarn dev
```

### 构建生产版本

```bash
# 使用npm
npm run build

# 或使用yarn
yarn build
```

## 后端API

本项目需要连接后端API服务，API基础URL默认为：`/api`。可以在 `vite.config.ts` 中修改代理配置。

## 设计风格

项目使用现代简约的设计风格，主要特点：

- 清晰的层次结构
- 卡片式设计
- 渐变色彩
- 细腻的动画效果
- 响应式布局，支持移动端和桌面端

## 贡献指南

1. Fork仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

[MIT License](LICENSE) 