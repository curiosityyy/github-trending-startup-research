# Startup Radar 创业机会日报（2026-08-31）

> 快照时间：2026-08-31 01:22 UTC
> 目标：把当前发布、技术采用、资本主题与具体用户问题交叉验证，寻找两周内可测试的创业假设。
> 评分方法：[Startup Radar 研究方法](startup_radar_method_zh.md)
> 对比基线：[2026-08-28 日报](startup_radar_2026-08-28_zh.md)

## 1. 今日结论

今天最值得验证的新方向不是“再做一个 Agent”，而是 **在模型、提示词、工具或权限变化后，证明 Agent 的真实行为没有悄悄漂移**。近七日 Show HN 中，[The load-bearing vocabulary of Claude](https://news.ycombinator.com/item?id=49461817) 在本次快照达到 694 points / 324 comments；与此同时，[RealDiff](https://news.ycombinator.com/item?id=49464459) 比较运行时行为，[Lenz](https://www.producthunt.com/products/lenz-2) 暴露事实核查步骤，[Apache Maka](https://github.com/apache/maka) 把工具、权限和终止事件写入追加日志。观察是四种供给同时出现；“企业会为统一回放门付费”仍是待验证推断。

第二个更接近收入的方向仍在电商，但应该拆成两个窄产品：搜索回归守门员，以及订阅结账状态机测试。[Shopify Search & Discovery](https://apps.shopify.com/search-and-discovery/reviews) 当前为 2.7 分 / 464 条评论，[Shopify Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews) 为 3.7 分 / 758 条评论。两者合计 1,222 条，比 8 月 28 日报告记录的 1,171 条多 51 条；新增评论数只说明评论池变化，不能直接当作故障增量或付费需求。

今日机会排序：

| 排名 | 机会 | 分数 | 首批买家 | 判断 |
|---:|---|---:|---|---|
| 1 | Agent 行为漂移回放与证据门 | 88 | 生产 Agent 的产品 / 质量负责人 | 新增最强跨源信号 |
| 2 | 电商搜索回归守门员 | 86 | 大目录 Shopify 品牌与代理商 | 需求最具体 |
| 3 | 订阅结账状态机测试 | 83 | DTC 运营与开发代理商 | 两周最易手工交付 |
| 4 | 合规 Web 数据来源账本 | 81 | 投研、情报与 Agent 数据团队 | 市场拥挤，需避开通用抓取 |
| 5 | 小团队 Agent 运行与接管台 | 79 | 同时运行 5—50 个 Agent 的团队 | 供给加速，入口必须很窄 |
| 6 | 小型律所事项证据包 | 74 | 5—30 人商事律所 | 有供给信号，需求证据较弱 |
| 7 | 机器人数据与现场验收工具 | 73 | 机器人测试与交付负责人 | 资本较重，必须先有现场伙伴 |

## 2. 方法与纳入边界

1. **时间范围**：Product Hunt 取当前公开首页和产品页；Show HN 取 2026-08-24 00:00 UTC 之后的公开 Algolia 结果；GitHub Trending 取 01:22 UTC 的 daily、weekly、monthly 页面。
2. **页面口径**：GitHub 使用 Language Any、Spoken Language Any，并按 `article.Box-row` 结构解析；没有把语言选择器文本误当成仓库。
3. **证据分层**：发布、Star、points、comments、融资和评分都只记为观察；买家、付费意愿、护城河与产品切口均标记为推断。
4. **评分**：按需求证据 30、买家清晰度 20、跨源共振 15、两周可验证性 15、分发路径 10、防御性 10，总计 100。分数只决定访谈顺序，不是成功率或投资回报预测。
5. **访问边界**：只读取无需登录的公开页面；没有绕过 CAPTCHA、登录墙、签名、限流或 robots 控制。

## 3. 相比 2026-08-28 的关键变化

### 3.1 从“交付 receipt”收窄为“变更前行为回放”

上期的 Agent 证据层仍成立，但今天的新证据把入口收得更具体：[Claude 词汇实验](https://news.ycombinator.com/item?id=49461817) 指向提示词依赖，[RealDiff](https://news.ycombinator.com/item?id=49464459) 指向运行时差异，[Apache Maka](https://github.com/apache/maka) 提供可重放事件源。可测试产品不必先做完整审计平台，只需回答一次模型升级是否改变了 50 条关键任务。

### 3.2 电商机会拆成搜索与订阅两条测试线

搜索问题继续存在，且 [8 月 19 日可见评论](https://apps.shopify.com/search-and-discovery/reviews) 新增了“同义词组功能消失”的描述。订阅侧则有更清晰的状态机故障：8 月 10 日评论报告 selling plan 阻断加购，8 月 2 日评论报告登录和预测缺口，7 月 20 日评论量化称九位客户被错误切成订阅。它们的触发点、买家、测试脚本和替代品不同，不应混成一个“大而全电商质量平台”。

### 3.3 Agent 运行时从概念变成多种可观察供给

[Maritime](https://www.producthunt.com/products/maritime) 把每个 Agent 放进持久隔离机器，[oMLX](https://www.producthunt.com/products/omlx) 把 Mac 变成本地推理服务，[YC Fall 2026 RFS](https://www.ycombinator.com/rfs) 同时提出 Small Software 与 Multiplayer AI。推断是小团队会需要跨本地与云的接管面；但云厂商和 Agent 框架也能内置它，因此不能以“统一仪表盘”为唯一差异。

### 3.4 Physical AI 热度继续上升，但机会进一步远离整机

[Crunchbase](https://news.crunchbase.com/venture/physical-ai-funding-startups-robotics-aerospace-h1-2026/) 统计 2026 上半年 Physical AI 为 474 亿美元、521 笔交易；其分类包含机器人、自动驾驶、航空航天、无人机、工业自动化和传感器，且大额交易明显抬高总数。[IT桔子署名的 36氪文章](https://www.36kr.com/p/3936247953898882) 记录中国灵巧手至 8 月初 74 起融资、47 家公司、已披露约 285.1 亿元。对小团队的推断仍是做数据质量、现场回放和交付验收，而不是造整机。

## 4. 来源快照

### 4.1 Product Hunt 当前发布

公开首页在抓取时可见 17 个当前产品。Product Hunt 的“today”按其榜单时区滚动，产品页部分徽章仍标为 8 月 30 日，因此这里只称“当前发布”，不把它解释成 8 月 31 日 00:00 UTC 后发布。

| 产品 | 页面观察 | 创业信号 |
|---|---|---|
| [Topview Motion Studio](https://www.producthunt.com/products/topview-ai) | 由 brief 和参考图生成产品发布视频 | 生成视频正在垂直到可验收的产品叙事 |
| [Hyperfocus](https://www.producthunt.com/products/hyperfocus-2) | 本地 macOS、目标优先的计划工具 | 通用生产力仍拥挤，非优先机会 |
| [Olostep](https://www.producthunt.com/products/olostep) | 搜索、抓取、爬取与结构化 API | Web 数据供给增长，差异应转向合规和来源 |
| [Murfy AI](https://www.producthunt.com/products/murfy) | 写作、引用核验、LaTeX 修复、协作 | 专业交付正在覆盖完整工作流 |
| [Referent](https://www.producthunt.com/products/referent) | 法律 intake、事项、文件、期限与计费准备 | 垂直 Agent 从单点生成走向系统记录 |
| [oMLX](https://www.producthunt.com/products/omlx) | Mac 本地推理、批处理与 KV 缓存 | 延迟、隐私和机器利用率仍是明确卖点 |
| [Maritime](https://www.producthunt.com/products/maritime) | 每 Agent 隔离持久机器，自动休眠唤醒 | Agent 运行成本与隔离进入产品层 |
| [Lenz](https://www.producthunt.com/products/lenz-2) | 本周发布；公开来源、模型争论与评分步骤 | “答案可审计”正在成为独立产品 |

### 4.2 Show HN 近七日

公开 [Algolia 查询](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E1787529600&hitsPerPage=100) 返回 837 条匹配；下表 points / comments 均为 01:22 UTC 快照，之后会变化。研究时查看按相关度排序的前 100 条，并用按时间排序结果检查 8 月 30—31 日新项目。

| 项目 | 时间 | Points | Comments | 观察 |
|---|---|---:|---:|---|
| [The load-bearing vocabulary of Claude](https://news.ycombinator.com/item?id=49461817) | 08-27 | 694 | 324 | 模型行为可能依赖少数高影响词汇 |
| [Experiential](https://news.ycombinator.com/item?id=49471407) | 08-27 | 220 | 46 | 开放模型路由与真实反馈闭环 |
| [LatticeDB](https://news.ycombinator.com/item?id=49437049) | 08-25 | 188 | 54 | SQLite 式图数据库体验 |
| [PicoMQ](https://news.ycombinator.com/item?id=49421806) | 08-24 | 159 | 31 | HTTP + 对象存储的持久流 |
| [Typebase](https://news.ycombinator.com/item?id=49447178) | 08-26 | 116 | 30 | 单目录 TypeScript 后端 |
| [Tare](https://news.ycombinator.com/item?id=49467551) | 08-27 | 88 | 67 | 从本地日志解释 Claude 配额 |
| [Sesame](https://news.ycombinator.com/item?id=49483038) | 08-28 | 63 | 85 | 本地密码管理的同步和恢复争议 |
| [Restoredrill](https://news.ycombinator.com/item?id=49465291) | 08-27 | 49 | 23 | 持续证明备份可恢复 |
| [RealDiff](https://news.ycombinator.com/item?id=49464459) | 08-27 | 40 | 10 | PR 级运行时行为差异 |
| [Academa](https://news.ycombinator.com/item?id=49503421) | 08-30 | 27 | 23 | 长篇 STEM 生成的事实与教学验收 |

### 4.3 GitHub Trending：Any / Any

快照页分别为 [daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)。结构化解析得到 daily 19、weekly 19、monthly 22，跨窗口 50 个去重仓库。下表的期间 Star 是榜单快照，不是仓库质量、活跃用户或收入。

| 窗口 | 仓库 | 期间 Star | 相关观察 |
|---|---|---:|---|
| Daily | [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | +1,370 | 多 Agent 互动课堂 |
| Daily | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | +1,114 | 科研技能供应链 |
| Daily | [Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli) | +361 | 移动环境命令行入口 |
| Daily | [every-app/open-seo](https://github.com/every-app/open-seo) | +469 | 开源搜索营销替代 |
| Daily | [corsairdev/corsair](https://github.com/corsairdev/corsair) | +126 | 用户授权的应用连接层 |
| Weekly | [apache/maka](https://github.com/apache/maka) | +1,973 | 追加式 Agent 事件日志 |
| Weekly | [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) | +3,406 | 无账号、无遥测的本地硬件控制 |
| Monthly | [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | +15,341 | 复杂 PDF 结构检查 |
| Monthly | [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | +15,913 | 团队级受治理记忆 |
| Monthly | [cactus-compute/needle](https://github.com/cactus-compute/needle) | +6,450 | 14MB 级端侧基础模型 |
| Monthly | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | +6,903 | 记忆、RAG 与技能统一上下文 |

### 4.4 YC、资本与中国市场

- [YC Fall 2026 RFS](https://www.ycombinator.com/rfs) 的 Small Software 和 Multiplayer AI 分别指出部署分享、身份权限、共同进入与接管 Agent 会话；这是投资偏好，不是客户需求证明。
- [YC AI Company Directory](https://www.ycombinator.com/companies/industry/artificial-intelligence) 当前显示 896 个公开结果，并出现 Agent FM、Dock、Traceforce 等 2026 团队。896 是目录结果数，不是 2026 新公司数。
- [Crunchbase Physical AI](https://news.crunchbase.com/venture/physical-ai-funding-startups-robotics-aerospace-h1-2026/) 给出 H1 2026 的 474 亿美元 / 521 笔交易，并说明其中包含一笔 160 亿美元的大额融资，不能据此推断普通机器人公司都容易融资。
- [IT桔子 / 36氪灵巧手观察](https://www.36kr.com/p/3936247953898882) 给出 74 起、47 家、约 285.1 亿元的公开统计；文章同时指出整机厂自研与独立供应商两条路线并存。
- [深海智人融资报道](https://www.36kr.com/p/3937295227796864) 记录超 5 亿元 A 轮和公开订单口径。融资与订单由报道方提供，本报告没有独立审计。

### 4.5 Marketplace 具体问题

[Search & Discovery 评论页](https://apps.shopify.com/search-and-discovery/reviews) 当前显示 464 条评论，其中 90 条一星；近期可复现问题包括：精确型号 / SKU 返回无关商品、无法默认过滤缺货、25 个过滤器上限，以及 8 月 19 日评论称同义词组功能被移除。

[Subscriptions 评论页](https://apps.shopify.com/shopify-subscriptions/reviews) 当前显示 758 条评论，其中 148 条一星；可见问题包括 selling plan 阻断加购、客户登录困难、现金流预测缺口，以及变体切换把一次性购买改为订阅。个别评论是商家自述，不代表总体故障率。

## 5. 七个机会与评分依据

| 机会 | 需求 30 | 买家 20 | 共振 15 | 两周 15 | 分发 10 | 防御 10 | 总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Agent 行为漂移回放与证据门 | 25 | 18 | 15 | 14 | 8 | 8 | 88 |
| 电商搜索回归守门员 | 28 | 20 | 11 | 15 | 8 | 4 | 86 |
| 订阅结账状态机测试 | 29 | 20 | 6 | 15 | 8 | 5 | 83 |
| 合规 Web 数据来源账本 | 19 | 18 | 15 | 14 | 8 | 7 | 81 |
| 小团队 Agent 运行与接管台 | 17 | 18 | 15 | 13 | 8 | 8 | 79 |
| 小型律所事项证据包 | 16 | 18 | 12 | 13 | 7 | 8 | 74 |
| 机器人数据与现场验收工具 | 19 | 17 | 15 | 7 | 5 | 10 | 73 |

### 5.1 Agent 行为漂移回放与证据门 — 88

**买家**：已经把 Agent 放进生产流程的 AI 产品负责人、质量负责人和合规负责人。
**窄 MVP**：接收 50 条脱敏轨迹；在一次模型、system prompt 或工具版本变更前后重放，比较事实、工具调用、权限请求、停止原因和最终结果。
**为什么现在**：[Claude 词汇实验](https://news.ycombinator.com/item?id=49461817) 提供行为敏感性信号，[RealDiff](https://news.ycombinator.com/item?id=49464459) 和 [Apache Maka](https://github.com/apache/maka) 分别提供运行时差异和事件日志形态，[Lenz](https://www.producthunt.com/products/lenz-2) 证明“暴露核查步骤”可以成为产品定位。
**防御性候选**：真实失败轨迹、领域 oracle、审批位置和历史回归模式。单纯调用 Judge 模型没有壁垒。
**主要风险**：离线环境不能重现外部副作用；敏感轨迹可能无法出域。第一版必须支持本地运行、字段脱敏和人工签字。
**两周实验**：找 5 个生产 Agent 团队，每队提供 10 条最近失败或高风险任务；手工重放一次模型变更。若至少 3 队能指出报告捕获了原 review 没发现的差异，再测试付费试点。

### 5.2 电商搜索回归守门员 — 86

**买家**：SKU 超过 1,000 的 Shopify 品牌电商负责人和开发代理商。
**窄 MVP**：导入 30 天真实搜索词，每日运行 100 条查询，检查精确 SKU、同义词、库存和排序，只交付 20 个高置信失败。
**证据**：[官方评论页](https://apps.shopify.com/search-and-discovery/reviews) 当前 2.7 分 / 464 条，具体问题跨多个长期商家重复出现；[open-seo](https://github.com/every-app/open-seo) 的 Trending 信号说明替代工具仍受关注。
**主要风险**：官方搜索可能快速修复；浏览器测试也可能误判个性化结果。
**两周实验**：为 10 家商店免费跑一次审计，要求商家逐条标注真实损失；至少 3 家确认问题并愿意每月支付 99—299 美元，才做持续监控。

### 5.3 订阅结账状态机测试 — 83

**买家**：使用 Shopify Subscriptions 的 DTC 运营负责人和代理商。
**窄 MVP**：只覆盖官方订阅应用和一个主流主题；自动遍历变体、一次性购买、订阅、登录、暂停和取消，输出录像、购物车状态和复现步骤。
**证据**：[评论页](https://apps.shopify.com/shopify-subscriptions/reviews) 当前 3.7 分 / 758 条；8 月评论报告 selling plan 错误与登录困难，另有商家自述九位客户被错误订阅。
**主要风险**：主题和第三方脚本组合很多，误报会迅速摧毁信任。
**两周实验**：与两家代理商合作，从过去 10 个上线项目反向跑脚本；若能稳定复现至少两个历史故障，再将它加进发布检查单。

### 5.4 合规 Web 数据来源账本 — 81

**买家**：投研、市场情报和需要审计来源的 Agent 产品团队。
**窄 MVP**：只支持 20 个公开、授权域名；每次抽取输出访问时间、字段映射、内容 hash、结构变化、引用可用性和停止原因。
**证据**：[Olostep](https://www.producthunt.com/products/olostep)、[Crawl4AI](https://github.com/unclecode/crawl4ai) 与 [last30days-skill](https://github.com/mvanhorn/last30days-skill) 显示数据供给增长，[Lenz](https://www.producthunt.com/products/lenz-2) 显示来源透明可以产品化。
**主要风险**：通用抓取极度拥挤，站点条款也会变化；不能以绕过访问控制作为能力。
**两周实验**：为一家投研团队重做一份现有周报，比较来源失效、字段漂移和人工核验时间；只有节省至少 30% 核验时间才继续。

### 5.5 小团队 Agent 运行与接管台 — 79

**买家**：同时运行 5—50 个编码或运营 Agent 的开发代理商和 AI 团队。
**窄 MVP**：只连接一台 Mac 和一种隔离 VM，显示工作中、阻塞、待审批、完成；不自建云。
**证据**：[Maritime](https://www.producthunt.com/products/maritime) 提供隔离持久机器，[oMLX](https://www.producthunt.com/products/omlx) 提供本地推理服务，[Apache Maka](https://github.com/apache/maka) 提供追加日志，[YC RFS](https://www.ycombinator.com/rfs) 提供多人接管命题。
**主要风险**：云和框架都能内置面板。长期价值必须来自跨环境权限、成本、审批和事故历史。
**两周实验**：为一个 10-Agent 团队做只读控制台，测量每天切换终端次数、遗漏阻塞数和接管时间；不先做调度器。

### 5.6 小型律所事项证据包 — 74

**买家**：5—30 人、处理重复商事事项的小型律所合伙人和运营负责人。
**窄 MVP**：只做一种合同审阅；交付来源清单、差异、风险问题、期限和律师签字，不自动给最终法律结论。
**证据**：[Referent](https://www.producthunt.com/products/referent) 覆盖事项系统，[YC AI 目录](https://www.ycombinator.com/companies/industry/artificial-intelligence) 出现法律与合规服务产品化团队，[Murfy](https://www.producthunt.com/products/murfy) 与 [Lenz](https://www.producthunt.com/products/lenz-2) 都把来源核验放进专业交付。
**主要风险**：今天缺少同等级的买方差评证据；责任、保密和无证服务边界很重，因此分数低于电商。
**两周实验**：访谈 8 位合伙人，只收集最近一次漏期限、错版本或引用追溯事件；先人工交付 3 份证据包。

### 5.7 机器人数据与现场验收工具 — 73（资本较重）

**买家**：灵巧手、工业机器人和特种作业机器人的测试与交付负责人。
**窄 MVP**：选择一种传感器和一个工序，连续两周记录漂移、失败与环境变化，生成可重复验收报告。
**证据**：[Crunchbase](https://news.crunchbase.com/venture/physical-ai-funding-startups-robotics-aerospace-h1-2026/) 的 474 亿美元 / 521 笔交易、[中国灵巧手统计](https://www.36kr.com/p/3936247953898882)、[Microduck RL](https://github.com/pollen-robotics/microduck_rl) 训练环境和 [YC AI 目录](https://www.ycombinator.com/companies/industry/artificial-intelligence) 中的 Physical AI 数据团队共同显示供给扩张。
**主要风险**：现场接入、硬件适配和销售周期都重。没有真实硬件伙伴、失败样本和采购负责人时应停止。
**两周实验**：只与一个已有付费交付的团队共创；若无法拿到连续现场数据，不做模拟数据 Demo。

## 6. 拒绝或暂缓的拥挤方向

- **通用 Web 抓取 API**：Olostep 产品页已经列出 Context.dev、Firecrawl 和 Browser Use 等相邻产品；除非以合规来源、字段 SLA 或垂直数据交付切入，否则不优先。
- **又一个 Agent Memory**：月榜已有 [TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)、[OpenViking](https://github.com/volcengine/OpenViking) 等高热度供给。没有 ACL、删除证明、错误记忆评测和迁移能力时，不成立。
- **通用 AI 计划工具**：[Hyperfocus](https://www.producthunt.com/products/hyperfocus-2) 的相似产品列表已经很长；发布热度不能证明差异化分发。
- **大而全法律 AI OS**：[Referent](https://www.producthunt.com/products/referent) 已覆盖 intake 到计费准备，YC 目录也有多支法律 / 合规团队；小团队应只做一个可验收事项包。
- **通用事实核查 API**：[Lenz](https://www.producthunt.com/products/lenz-2) 已直接占位。更好的切口是把核查嵌进一个高风险工作流的发布门，而不是单卖 verdict。
- **机器人整机或通用具身模型**：资本与供应链门槛不适合软件型小团队；即使做工具也必须标记为资本较重。

## 7. 下一步实验与停止条件

1. **Agent 漂移**：访谈 5 个生产团队，收集 50 条真实失败 / 高风险轨迹。若没有团队愿意提供脱敏轨迹或本地运行环境，停止。
2. **搜索回归**：为 10 家大目录商家跑审计。若少于 3 家确认报告对应真实损失，或无人愿付试点费，停止。
3. **订阅状态机**：与 2 家 Shopify 代理商复盘 10 个历史项目。若自动脚本不能低误报复现至少 2 个旧故障，停止。
4. **只保留一个工程方向**：三条测试线都先用人工与现成浏览器工具交付，不同时开发三个 SaaS。
5. **Physical AI**：只有拿到一个真实现场伙伴、明确传感器和连续失败样本才进入；否则只保留观察。

## 8. 限制与访问记录

- **Product Hunt**：公开首页和产品页可访问；“today”按站内时区滚动，排名与票数持续变化，因此数据集中只保留“当前发布”，不宣称 UTC 当日首发。
- **Show HN**：Algolia API 可公开访问，共返回 837 个匹配；points / comments 是 01:22 UTC 瞬时值，且本次详细阅读集中在相关度前 100 条与最新结果，不代表全量质量审查。
- **GitHub Trending**：三个 Any / Any 窗口可公开读取；期间 Star 会变化，Trending 不等于客户、留存或收入。
- **YC**：RFS 和目录公开可访问；目录的 896 是筛选结果数，不是 2026 batch 规模。RFS 是 YC 偏好，不是市场订单。
- **Crunchbase**：采用可公开读取的 Crunchbase News 分析，没有使用付费数据库；Physical AI 定义较宽且被大额融资显著抬高。
- **IT桔子**：主页在本次公共读取中未返回可用内容，没有尝试绕过访问限制；仅采用 [36氪公开托管、IT桔子署名的文章](https://www.36kr.com/p/3936247953898882)，无法逐条核验其底层 74 起事件。
- **36氪**：两篇公开文章可访问；融资、订单与公司自述没有独立审计。
- **Shopify App Store**：公开评分和评论可访问；个别评论是商家自述，不能外推总体故障率，也不能证明愿意购买替代品。
- **Dealroom、G2、Atlassian Marketplace**：本次没有用它们补数字；Crunchbase 与 Shopify 的公开证据更完整。未用不可访问页面填充结论。

本报告是创业研究快照，不是投资建议。所有机会仍是假设，只有访谈、可复现交付和付费试点能把信号变成需求证据。
