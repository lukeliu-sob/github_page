# AGENTS.md

个人网站项目，托管于 GitHub Pages：https://lukeliu-sob.github.io/github_page/
仓库：https://github.com/lukeliu-sob/github_page

## 项目概述

纯静态个人主页（无构建步骤、无依赖、无框架）：
- `index.html` — 单页结构：Hero、关于、项目、联系四个区块，锚点导航
- `style.css` — 全部样式，基于 CSS 自定义属性（主题变量）实现深浅色切换
- `script.js` — 主题切换逻辑（localStorage 记忆 + 跟随系统偏好）
- `.gitignore` — 忽略 `.idea/`

## 技术约定

- 不引入任何框架或构建工具，保持零依赖纯静态
- 深浅色主题：所有颜色必须走 `style.css` 顶部的 CSS 变量（`--bg`、`--text`、`--accent` 等），禁止硬编码颜色
- 新增内容优先复用现有 class：`.card`、`.section`、`.container`、`.btn` 等
- 响应式：移动端断点为 `@media (max-width: 600px)`
- 页面语言为中文，占位文案需标注清楚是占位，方便后续替换

## Git 提交规范

- 提交信息用英文，格式 `type: 简述`，type 常用：`feat` / `fix` / `style` / `chore` / `content`
- 推送到 `main` 分支后 GitHub Pages 自动部署，无需额外操作

## 注意事项

- Windows 环境，Git 会提示 LF/CRLF 警告，属正常现象，忽略即可
- 所有对外链接（GitHub、Email 等）目前指向占位地址，替换真实内容时需同步更新 `index.html` 中的 `#contact` 区块
