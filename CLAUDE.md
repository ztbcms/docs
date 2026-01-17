# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 ZTBCMS 框架的官方文档站点，使用 VuePress 2.x + Vite 构建。ZTBCMS 是一个基于 ThinkPHP 的高性能、模块化 PHP Web 框架。

## 常用命令

```bash
# 安装依赖
npm install

# 本地开发预览 (热重载)
npm run dev

# 构建生产环境静态文件
npm run build

# 部署到远程分支
npm run deploy

# 构建并部署
npm run buildAndDeploy
```

## 项目结构

```
docs/                       # 文档源文件
├── .vuepress/
│   ├── config.js          # VuePress 核心配置 (导航、侧边栏)
│   └── public/            # 静态资源 (logo、图片)
├── basic/                 # 基础文档 (环境搭建、目录结构)
├── guide/                 # 开发指南 (模块开发、后台管理)
├── module/                # 模块文档 (Redis、Cron、Queue、Member等)
├── best_practic/          # 最佳实践 (部署、规范、性能优化)
└── README.md              # 首页配置 (VuePress 主题首页格式)
```

## 架构说明

- **VuePress 配置**: `docs/.vuepress/config.js` 使用 ESM 格式，通过 `defineUserConfig` 定义配置
- **首页**: `docs/README.md` 使用 VuePress 主题首页 YAML frontmatter 配置
- **侧边栏**: 设置为 `auto` 模式，自动从文档标题生成，深度为 2 级
- **Bundler**: 使用 Vite 作为构建工具
- **部署**: Travis CI 自动化部署到 GitHub Pages / Coding.net

## 文档编写规范

- 所有文档使用 Markdown 格式
- 每个目录下的 `readme.md` 作为该分类的入口页面
- 图片资源放置在 `docs/.vuepress/public/img/` 或文档同级目录
