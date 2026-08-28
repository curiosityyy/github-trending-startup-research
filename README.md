# Startup Radar

把产品发布、技术社区、投资主题、GitHub 趋势和真实用户差评交叉验证，寻找值得测试的创业机会。

## Website

本地开发：

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

当前机器使用只监听回环地址的静态服务，并由 Caddy 在 `/startup-radar/` 路径对外转发。部署文件位于 [`deploy/`](deploy/)。

## Daily automation

`startup-radar-update.timer` 每天在北京时间 09:15 后的五分钟窗口内运行。任务在隔离 worktree 中研究并更新完整数据页、机会页和当日报告；只有允许文件白名单、数据校验、前端构建、Git 推送和 HTTP 健康检查全部成功后才切换线上版本。

检查定时器：

```bash
systemctl status startup-radar-update.timer
journalctl -u startup-radar-update.service
```

## Reports

- [2026-08-28 Startup Radar 创业机会日报](docs/startup_radar_2026-08-28_zh.md)
- [Startup Radar 研究方法](docs/startup_radar_method_zh.md)
- [2026-08-28 GitHub Trending 创业灵感日报](docs/github_trending_startup_report_2026-08-28_zh.md)
- [2026-08-26 GitHub Trending 创业灵感报告](docs/github_trending_startup_report_2026-08-26_zh.md)
