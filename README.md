# 每日 arXiv 论文精选

这是一个可部署到 GitHub Pages 的静态网站，用来每天自动整理 arXiv 上与以下方向相关的重要论文：

- vision-language-action
- world action model
- 机器人
- 自动驾驶

检索分类：

- `cs.RO`
- `cs.AI`
- `cs.CV`
- `cs.LG`

## 功能

- 每天北京时间 `08:00` 自动更新
- 默认精选 `20` 篇近期重要论文
- 中文布局，英文论文标题与摘要
- 支持手机和电脑访问
- 每页 `10` 篇，自动分页
- 点击即可跳转 arXiv 原文或 PDF

## 本地文件说明

- `index.html`：网页结构
- `styles.css`：样式
- `script.js`：前端渲染与分页
- `data/site-data.js`：网页读取的数据文件
- `scripts/update_papers.py`：抓取 arXiv 并生成精选数据
- `.github/workflows/pages.yml`：GitHub Actions 自动更新与部署

## 部署方式

1. 创建一个 GitHub 仓库并把这些文件推送到 `main`
2. 打开仓库设置中的 `Pages`
3. 将构建来源设置为 `GitHub Actions`
4. 推送代码后等待 Actions 执行完成

部署成功后，网址通常是：

`https://你的用户名.github.io/你的仓库名/`

## 手动触发更新

你也可以在 GitHub 仓库的 `Actions` 页面手动运行 `Update and Deploy arXiv Digest` 工作流。
