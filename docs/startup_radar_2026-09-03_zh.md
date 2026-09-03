# Startup Radar 创业机会日报｜2026-09-03

> 快照窗口：2026-09-03 01:20—01:31 UTC
> 目标：寻找小团队能在两周内验证的窄切口。榜单、points、Star、融资和评论是带时间戳的信号，不等于需求、留存、收入、产品质量或投资建议。

## 1. 方法与证据边界

本期沿用 [Startup Radar 研究方法](startup_radar_method_zh.md)：分别扫描发布、技术社区、开源、投资与 Marketplace 需求信号，再寻找至少两类来源的共振。观察、发布者或评论者自述、以及本报告推断分开表达。

机会仍按 100 分排序：

| 维度 | 权重 | 本期判断 |
|---|---:|---|
| 需求证据 | 30 | 是否有近期、具体、可复现的损失、费用或工作阻塞 |
| 买家清晰度 | 20 | 使用者、批准者和付款者能否被点名 |
| 跨源共振 | 15 | 是否至少由发布、社区、开源、资本、Marketplace 中两类支持 |
| 两周可验证性 | 15 | 能否用只读检查和人工报告完成首次交付 |
| 分发路径 | 10 | 前 20 位潜在客户能否从明确渠道找到 |
| 防御性 | 10 | 能否沉淀历史基线、失败集、审批位置或领域规则 |

研究只读取公开授权页面，没有绕过 CAPTCHA、登录、签名、速率限制或安全检测。受限来源及替代证据写在第 8 节。

## 2. 相比 2026-09-01 的关键变化

1. **最强需求信号从搜索退化切换到跨市场库存状态漂移。** [Shopify Marketplace Connect 一星评论页](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 在 9 月 1 日集中出现 Walmart 授权断开、eBay 库存与销售未同步、旧 Amazon 渠道误发和手工逐单修正。一个商家自述有 300,000 个 listing、100,000 个 eBay listing 和 400+ 个发布积压。这是商家陈述，不是平台总体故障率，但损失路径具体且可对账。
2. **Agent 比较从“插件是否兼容”推进到“同模型的生产成本与结果是否可互换”。** [FrontierHarness Eval](https://news.ycombinator.com/item?id=49538490) 的 01:20 UTC 快照为 70 points / 50 comments，作者报告同模型在 9 个 harness 下每次通过成本相差 17 倍；[pacifio/atlas](https://github.com/pacifio/atlas) 又以当日新增 888 stars 提供多 Agent 变更源控形态。17 倍是作者评测结论，尚未由本报告复跑。
3. **Product Hunt 恢复公开可读。** 当前页有 22 个产品；由于快照发生在 9 月 2 日太平洋时间，其站内仍显示 2026-09-02 榜单。[Monid](https://www.producthunt.com/products/monid) 与 [Browzer](https://www.producthunt.com/products/browzer) 分居 #1/#2。票数在采集期间滚动，只保留 01:31 UTC 快照。
4. **Agent 工具采购出现第一条直接预算抱怨。** Monid 宣称用一个 key 连接 1,800+ API；其当前唯一公开评论明确问到每 Agent/key 的硬额度，并指出坏重试循环可能在人工发现前累积账单。机会因此从“工具市场”收窄到预算授权、重试熔断和收据。
5. **中国资本信号更集中于 Physical AI、空间智能、光互连和 AI4S。** [36氪融资快报](https://pitchhub.36kr.com/financing-flash) 的公开索引在快照时展示映界科技、芯光界、鼎犀智创、天工机器人、合木智能等当日项目。融资额均为媒体或公司口径，原文页触发安全检测，因此没有扩写索引之外的数字。
6. **上一期前两名不再原样保留。** “代码—架构—证据同步”仍有 [Browzer](https://www.producthunt.com/products/browzer)、[Onset](https://www.producthunt.com/products/onset-io) 和 [archify](https://github.com/tt-a1i/archify) 新信号，但通用生成供给更拥挤，降为第四；上一期 Shopify 搜索哨兵被证据更强、更具直接损失的多渠道库存对账替代。

## 3. 跨源主题

### 3.1 跨市场库存状态漂移——本期最强需求信号

观察：[Marketplace Connect 评论](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 当前为 4.2 / 1,977，其中 271 条一星。9 月 1 日的近期评论来自使用约一年到近四年的商家，集中描述：

- Walmart authorization 断开、listing 解除和库存无操作消失；
- eBay 发布停止，但多年未使用的 Amazon 渠道出现随机发布；
- eBay 销售未回写 Shopify，页面显示零销售；
- 数百条 listing 积压，并需要逐单手工更新库存；
- 一位商家称问题已影响 eBay seller status，并担心影响以 Shopify 销售为依据的 credit limit。

这些都是评论者自述，不能外推发生率或因果。但与 [Restoredrill](https://news.ycombinator.com/item?id=49465291) 的“证明备份可恢复”和 [RealDiff](https://news.ycombinator.com/item?id=49464459) 的“比较运行时行为”相呼应：买家需要的不是又一条同步链路，而是独立对账、冻结危险写入和可复现证据。

### 3.2 Agent harness 的成本与结果不可互换——强技术共振

[FrontierHarness Eval](https://news.ycombinator.com/item?id=49538490) 报告 9 个 harness、同一模型、每次通过成本相差 17 倍；[pacifio/atlas](https://github.com/pacifio/atlas) 定位多编码 Agent 的 source control；月榜 [loopx](https://github.com/huangruiteng/loopx) 定位跨 harness 的长任务治理；[YC Multiplayer AI](https://www.ycombinator.com/rfs) 则认为长时间 Agent 任务需要多人进入、重定向和交接。

推断：企业升级 harness 前需要用自己的已验收任务回放，而不是相信一个公共平均分。应同时记录通过率、总费用、工具调用、人工接管、权限和最终工件。

### 3.3 Agent 工具按需采购需要预算护栏——早期需求共振

[Monid](https://www.producthunt.com/products/monid) 把发现、运行和支付 1,800+ API 放到一个 key；评论马上追问硬预算。[MCPay](https://news.ycombinator.com/item?id=49539661) 则直接定位 MCP 工具的 spend authorization 与 per-call billing，但只有 1 point / 0 comments，互动很低。[YC RFS](https://www.ycombinator.com/rfs) 同时点名 agentic commerce、AI-native compliance 与 audit trails。

推断：不要从发卡或托管资金开始。更适合小团队的切口是每任务额度、重试熔断、逐调用收据和超限人工批准。

### 3.4 仓库—文档—发布说明持续同步——供给加速

[Browzer](https://www.producthunt.com/products/browzer) 宣称在每次 merge 后“修复”文档、指南和 changelog；[Onset MCP](https://www.producthunt.com/products/onset-io) 把 release notes 接入 AI 助手；[archify](https://github.com/tt-a1i/archify) 本周新增 26,626 stars；[Codeknow](https://news.ycombinator.com/item?id=49540277) 则尝试不用 LLM 给架构健康打分。

推断：再做一个通用文档生成器不够。窄机会是“变更契约”：哪些 API、图、quickstart 和发布说明受本次 merge 影响，证据在哪里，谁批准。

### 3.5 合成语音与深伪把身份校验推入工作流——风险驱动

[VoiceStudio](https://github.com/debpalash/VoiceStudio) 当日新增 832 stars，项目自述覆盖本地语音克隆、配音、听写和 646 种语言；[Dial](https://www.producthunt.com/products/dial-3) 让 Agent 十秒获得真实电话号码；[deepeye](https://www.producthunt.com/products/deepidv) 把深伪检测嵌入浏览器；YC 又把 [Proving You're Human](https://www.ycombinator.com/rfs) 单列为 Fall 2026 RFS。

推断：单一“真假概率”不适合自动放行高风险动作。更可行的是按动作风险升级为回拨、设备证明、第二通道或双人批准，并仅保存最小化证据。

### 3.6 Physical AI 从模型演示走向现场验收——资本较重

[36氪融资快报](https://pitchhub.36kr.com/financing-flash) 当日索引出现轻工业具身数据闭环、制造 Physical AI、空间智能和材料自主实验室融资。[YC RFS](https://www.ycombinator.com/rfs) 进一步提出人、机器人和 Agent 共存的物理世界 OS，以及真实世界数据采集。[needle](https://github.com/cactus-compute/needle) 月榜新增 6,771 stars并瞄准端侧设备，[机器人提示注入](https://news.ycombinator.com/item?id=49539111) 也进入 Show HN。

推断：小团队只能从一个工序、一个设备、一个验收人切入。没有真实现场、连续失败样本和签字 oracle 时，不应做“机器人数据平台”。

## 4. 来源快照

### 4.1 Product Hunt 当前发布

[Product Hunt 当前页](https://www.producthunt.com/) 在 01:31 UTC 可见 22 个产品。站内仍按 2026-09-02 太平洋时间计日；points 在抓取过程中已发生变化，不用于推断收入或留存。

| 当前排名 | 发布 | Points | 页面观察 |
|---:|---|---:|---|
| 1 | [Monid](https://www.producthunt.com/products/monid) | 369 | Agent 用单 key 发现、调用并支付 1,800+ API |
| 2 | [Browzer](https://www.producthunt.com/products/browzer) | 346 | 仓库驱动、自修复技术内容 |
| 3 | [Articos](https://www.producthunt.com/products/articos) | 286 | 以证据支持发布决策 |
| 4 | [CleanShot 5.0](https://www.producthunt.com/products/cleanshot) | 203 | Mac 截图、录屏和协作 |
| 5 | [OpenClaw 2.0](https://www.producthunt.com/products/openclaw-formerly-clawdbot) | 178 | 能在本机执行任务的通用 Agent |
| 6 | [Dial](https://www.producthunt.com/products/dial-3) | 176 | 给 Agent 配真实电话号码 |
| 11 | [Stitch AI](https://www.producthunt.com/products/stitch-ai-by-dynamic-mockups) | 114 | 刺绣数字化 Agent |
| 12 | [deepeye](https://www.producthunt.com/products/deepidv) | 113 | 浏览器内深伪检测 |
| 16 | [Onset MCP](https://www.producthunt.com/products/onset-io) | 100 | 从 AI 助手发布 release notes |

### 4.2 Show HN：最近七日

公开 [Algolia 查询](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E1787788800&hitsPerPage=100) 返回 875 条 2026-08-27 00:00 UTC 后匹配。下表 points/comments 均为 01:20 UTC 瞬时值：

| 项目 | 时间 | Points | Comments | 观察 |
|---|---|---:|---:|---|
| [FrontierHarness Eval](https://news.ycombinator.com/item?id=49538490) | 09-02 | 70 | 50 | 9 个 harness 的成本/通过比较 |
| [Aura](https://news.ycombinator.com/item?id=49538195) | 09-02 | 20 | 2 | 调查并修复生产事故的 Rust Agent |
| [I Have Been Clawed](https://news.ycombinator.com/item?id=49532083) | 09-02 | 19 | 2 | 编码 Agent 事故索引 |
| [ZSvirt](https://news.ycombinator.com/item?id=49536562) | 09-02 | 71 | 9 | 轻量开源虚拟化 |
| [Restoredrill](https://news.ycombinator.com/item?id=49465291) | 08-27 | 49 | 23 | 证明 PostgreSQL 备份可恢复 |
| [RealDiff](https://news.ycombinator.com/item?id=49464459) | 08-27 | 40 | 10 | 六语言 PR 运行时行为 diff |
| [Conduct](https://news.ycombinator.com/item?id=49483173) | 08-28 | 22 | 4 | LLM/MCP 工具调用 guardrail |
| [HN Match Maker](https://news.ycombinator.com/item?id=49528057) | 09-01 | 106 | 45 | 匹配公开求职与招聘帖子 |

### 4.3 GitHub Trending：Language Any / Spoken Language Any

结构化读取 [daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) 的 `article.Box-row`：daily 19、weekly 21、monthly 22，跨窗口 55 个去重仓库。期间 Star 是榜单快照，不是采购或收入。

| 窗口 | 仓库 | 期间 Star | 观察 |
|---|---|---:|---|
| Daily | [pacifio/atlas](https://github.com/pacifio/atlas) | +888 | 多 Agent 变更 source control |
| Daily | [VoiceStudio](https://github.com/debpalash/VoiceStudio) | +832 | 本地语音克隆与处理 |
| Daily | [pdf-inspector](https://github.com/firecrawl/pdf-inspector) | +586 | PDF 分类和路由 |
| Daily | [TimesFM](https://github.com/google-research/timesfm) | +343 | 时间序列基础模型 |
| Daily | [portless](https://github.com/vercel-labs/portless) | +73 | 用命名本地 URL 替代端口 |
| Weekly | [gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | +10,679 | 公开数据的浏览器空间情报视图 |
| Weekly | [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | +9,426 | 多 Agent 互动课堂 |
| Weekly | [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | +7,558 | 科研技能与数据库 |
| Weekly | [open-seo](https://github.com/every-app/open-seo) | +2,767 | 开源 SEO 套件 |
| Monthly | [semantica](https://github.com/semantica-agi/semantica) | +9,973 | 图原生可追责上下文 |
| Monthly | [needle](https://github.com/cactus-compute/needle) | +6,771 | 14MB 端侧模型 |

### 4.4 YC、全球资本与中国市场

- [YC Fall 2026 RFS](https://www.ycombinator.com/rfs) 当前包括 Small Software、Multiplayer AI、物理世界 OS、现实数据、Proving You're Human、AI-native compliance 和 Self-Maintaining APIs 等命题。RFS 是投资偏好，不是需求证明。
- [YC AI Company Directory](https://www.ycombinator.com/companies/industry/artificial-intelligence) 可公开读取。页面上的 Golf、Parsewise、Tinfoil 等公司已覆盖 Agent/MCP 控制、可追溯文档处理和机密推理，说明通用治理供给不空白；公司描述由公司提交，不能当作审计后的客户或收入数据。
- [Crunchbase Proptech 专题](https://news.crunchbase.com/venture/proptech-funding-holds-exits-ipo-ai-green-steel-2026/) 称 2026 年迄今全球相关公司融资约 87 亿美元、794 笔；2025 年为 123 亿美元、1,446 笔。文章推断资本更集中于能证明 ROI 的施工、运营、承保和交易基础设施。
- [Dealroom 公开首页](https://dealroom.co/) 将 AI agents 列为 “Hot sectors momentum” 第一，页面显示 320 startups、140 亿美元和 +182%。首页未交代定义、基期或计算方法，本报告只把它作为平台当前口径。
- [映界科技](https://36kr.com/p/3966110122499585)：36氪公开索引称种子+轮超千万元，定位具身时空大脑。
- [芯光界](https://36kr.com/p/3965995249884421)：公开索引称完成数亿元天使+轮，指向光互连研发与商业化。
- [鼎犀智创](https://36kr.com/newsflashes/3965933887446535)：公开快讯称完成数亿元 Pre-A，资金将用于材料基础模型、可编排 Agent、自主实验室和放大验证。
- [合木智能等当日项目](https://pitchhub.36kr.com/financing-flash)：公开快报称合木智能获千万级种子轮，拟将语义计算嵌入检测设备或机器人。

### 4.5 Marketplace 具体问题

- [Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)：4.2 / 1,977，271 条一星。三位 9 月 1 日评论者分别描述 Walmart 授权/库存断开、大规模 eBay 积压与误发 Amazon、eBay 销售未回写。
- [SparkLayer](https://apps.shopify.com/sparklayer)：4.9 / 363。一条编辑于 9 月 2 日的评论称批发客户开户曾阻塞真实订单；解决后仍记录数小时排障和五天收入延迟。
- [Lucky Orange](https://apps.shopify.com/lucky-orange/reviews?page=1&sort_by=newest)：4.7 / 824。一位使用八天的商家称 14 天免费试用期间被提前收费且未获退款。
- [Monid](https://www.producthunt.com/products/monid)：4.0 / 1 review。评论者认为统一 1,800 个付费 API 很省事，但指出页面没有清楚说明每 Agent/key 的硬预算。

评论仅代表各自作者，不能从单条评论推导故障率、损失规模或付费意愿；其中 SparkLayer 问题已由评论者确认解决。

## 5. 六个机会与评分

| 机会 | 需求 30 | 买家 20 | 共振 15 | 两周 15 | 分发 10 | 防御 10 | 总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 多渠道库存状态漂移防火墙 | 30 | 20 | 13 | 15 | 8 | 4 | 90 |
| Agent harness 成本—结果回放发布门 | 24 | 19 | 15 | 15 | 7 | 6 | 86 |
| Agent 工具调用预算授权与收据层 | 25 | 19 | 15 | 13 | 7 | 5 | 84 |
| 技术文档变更契约审阅器 | 21 | 18 | 15 | 15 | 7 | 5 | 81 |
| 高风险 Agent 通话的分级真人校验 | 20 | 18 | 15 | 10 | 6 | 7 | 76 |
| 轻工业机器人现场验收数据包 | 19 | 17 | 15 | 8 | 5 | 9 | 73 |

### 5.1 多渠道库存状态漂移防火墙 — 90

**买家**：同时经营两种以上 Marketplace、SKU 超过 5,000 的 Shopify 商家运营负责人，以及管理多家商户的电商代理商。
**窄 MVP**：只接 Marketplace Connect 与 eBay；每 15 分钟抽样 500 个 SKU，对比 listing、可售库存、订单事件和授权状态。第一周只读告警，第二周才允许人工批准“冻结发布”。
**证据**：[Marketplace Connect 评论](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 提供具体断连、误发、漏回写和手工修正；[Restoredrill](https://news.ycombinator.com/item?id=49465291) 与 [RealDiff](https://news.ycombinator.com/item?id=49464459) 提供从状态存在升级到行为可验证的产品形态。
**防御性**：商家自己的 SKU 映射、已确认差异、渠道延迟基线与事件历史。
**主要风险**：评论可能集中于一次已修复事故；只读 API 自身延迟会制造误报，错误冻结会直接损失销售。
**两周实验**：找 5 家受影响商家导出 14 天事件；若不能重建至少 3 起真实分叉，或没有 2 家愿意为持续对账付 300 美元/月以上，就停止。

### 5.2 Agent harness 成本—结果回放发布门 — 86

**买家**：每月 Agent/API 支出超过 1 万美元、维护两个以上编码 Agent 或内部 harness 的工程效能负责人。
**窄 MVP**：导入最近 20 个已验收真实任务，在两个 harness 各回放三次，比较通过、总成本、工具调用、人工接管、权限与工件；不建设新 Agent。
**证据**：[FrontierHarness Eval](https://news.ycombinator.com/item?id=49538490) 给出 17 倍作者结论和较高讨论，[atlas](https://github.com/pacifio/atlas)、[loopx](https://github.com/huangruiteng/loopx) 与 [YC Multiplayer AI](https://www.ycombinator.com/rfs) 从变更、长任务和协作侧补强。
**防御性**：企业私有真实任务、失败最小复现、版本成本曲线和人工验收标签。
**主要风险**：公共基准偏置和 Agent 非确定性会制造虚假回归。
**两周实验**：对一个团队的 20 个任务做 120 次回放；若成本/通过差异小于 10%，或无法稳定复现 5 个生产失败，则不做 release gate。

### 5.3 Agent 工具调用预算授权与收据层 — 84

**买家**：允许 Agent 自主调用付费 API 的 AI 产品负责人、财务控制人和安全负责人。
**窄 MVP**：只代理一个 Monid key 或一套 MCP 工具；提供每任务上限、重试熔断、逐调用收据与超限人工批准，不发卡、不托管资金。
**证据**：[Monid](https://www.producthunt.com/products/monid) 的当前评论直接提出硬预算问题；[MCPay](https://news.ycombinator.com/item?id=49539661) 与 [YC RFS](https://www.ycombinator.com/rfs) 提供支出授权和合规背景。
**防御性**：按任务的成本基线、坏重试指纹、商户/工具风险规则和审批历史。
**主要风险**：平台可以内置简单额度；进入支付链路会触发更重监管。
**两周实验**：只读接入 3 个各运行 10+ Agent 的团队；若两周内找不到至少 5 次超预算、坏重试或无法归因费用，停止。

### 5.4 技术文档变更契约审阅器 — 81

**买家**：拥有公开 API/SDK、每周发布且 DevRel/文档团队少于 10 人的 B2B 开发者工具公司。
**窄 MVP**：只支持一个 TypeScript 仓库和 20 个关键页面；每个 PR 输出受影响 API、架构图、quickstart 和 release note，候选 patch 必须由 owner 批准。
**证据**：[Browzer](https://www.producthunt.com/products/browzer)、[Onset](https://www.producthunt.com/products/onset-io)、[archify](https://github.com/tt-a1i/archify) 和 [Codeknow](https://news.ycombinator.com/item?id=49540277) 同时覆盖自动更新、客户沟通、图和验证基线。
**防御性**：团队历史“代码变化—文档影响—误报修正”映射。
**主要风险**：Browzer、Mintlify 或代码托管平台可快速覆盖，通用生成没有壁垒。
**两周实验**：回放 10 个过去 PR；少于 5 个能发现真实漏更，或 owner 认为审阅时间没有下降 30%，停止。

### 5.5 高风险 Agent 通话的分级真人校验 — 76

**买家**：让语音 Agent 执行账户变更或付款前置流程的客服、保险、医疗预约和金融运营负责人。
**窄 MVP**：只覆盖“更换收款账户”；提交前按风险触发回拨、设备证明或双人批准，不凭单一深伪分数自动放行。
**证据**：[Dial](https://www.producthunt.com/products/dial-3)、[deepeye](https://www.producthunt.com/products/deepidv)、[VoiceStudio](https://github.com/debpalash/VoiceStudio) 和 [YC Proving You're Human](https://www.ycombinator.com/rfs) 形成通信、检测、生成和投资偏好共振。
**防御性**：客户动作风险图谱、已确认欺诈模式和最小化审计规则。
**主要风险**：误报、隐私、生物识别法规和紧急可用性；资本与合规均重。
**两周实验**：用 100 个脱敏历史请求离线演练；若无法在不增加超过 20% 人工量的前提下拦下既有高风险样本，不进入生产。

### 5.6 轻工业机器人现场验收数据包 — 73（资本较重）

**买家**：已进入电子、食品、医药或模具工厂试点的机器人厂商测试负责人、集成商和工厂工艺负责人。
**窄 MVP**：一种分拣或缺陷检测工序、一台设备、两周班次；人工标记 100 次失败，并由工厂签署验收 oracle。
**证据**：[36氪融资快报](https://pitchhub.36kr.com/financing-flash) 显示中国供给与资本进入，[YC physical-world RFS](https://www.ycombinator.com/rfs) 明确要求可靠性和真实数据，[needle](https://github.com/cactus-compute/needle) 与 [机器人提示注入](https://news.ycombinator.com/item?id=49539111) 提供端侧与安全背景。
**防御性**：真实失败视频、环境标签、人工接管轨迹和客户签署的验收条件。
**主要风险**：硬件接入、现场安全、数据权属和销售周期都重。
**两周实验**：只有拿到一台真实设备、连续现场数据和签字验收人时才开始；任一条件缺失即停止。

## 6. 拒绝或暂缓的拥挤方向

- **通用本机执行 Agent**：[OpenClaw 2.0](https://www.producthunt.com/products/openclaw-formerly-clawdbot)、[cloudflare/computer](https://github.com/cloudflare/computer) 和大量既有产品已覆盖。没有垂直责任边界与可验收输出时不做。
- **又一个 API/Agent 工具目录**：[Monid](https://www.producthunt.com/products/monid) 已占位，YC 目录也有大量集成和治理公司。优先做目录上方的预算和收据。
- **通用技术文档生成器**：[Browzer](https://www.producthunt.com/products/browzer)、Mintlify、GitBook 等供给成熟。只保留可审批变更契约。
- **通用多 Agent 协作画布**：[atlas](https://github.com/pacifio/atlas)、[loopx](https://github.com/huangruiteng/loopx)、[OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) 和 YC Multiplayer AI 均在推进。没有真实成本/失败回放数据时不做新画布。
- **通用深伪检测 API**：[deepeye](https://www.producthunt.com/products/deepidv) 已进入浏览器路径，且准确率、对抗更新和责任边界都重。只考虑高风险动作的分级确认流程。
- **通用 SEO 与内容 Agent**：[open-seo](https://github.com/every-app/open-seo) 周榜新增 2,767 stars，Browzer、Onset 也在内容链路。除非绑定可量化发布风险，不优先。
- **AI4S 平台或机器人本体**：[scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) 与中国融资说明供给旺盛，但小团队无法在两周验证硬件、材料放大或科学正确性。
- **公开空间情报聚合器**：[gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) 周榜热度很高，但隐私、误用、数据授权和国家安全风险不适合作为本期小团队验证方向。

## 7. 下一步实验与停止条件

1. **库存漂移**：5 家商家、14 天事件、至少 3 起真实分叉、2 家愿付 300 美元/月；任一门槛未达即停止。
2. **Harness 回放**：一个团队 20 个任务、两个 harness、各三次；差异低于 10%或无法复现 5 个生产失败则停止。
3. **Agent 预算**：3 个 10+ Agent 团队只读观察两周；找不到 5 次超预算、坏重试或无法归因费用则停止。
4. **文档契约**：回放 10 个 PR；少于 5 个真实漏更或 owner 审阅时间未下降 30%则停止。
5. **通话校验**：100 个脱敏历史动作；人工量上升超过 20%仍不能拦住既有风险样本则停止。
6. **Physical AI**：真实设备、连续数据、签字验收人缺一不可，不用模拟数据代替客户现场。
7. **统一边界**：所有实验先做只读分析和人工报告；没有付款人证据前，不并行建设六个平台。

## 8. 限制与访问记录

- **Product Hunt**：本次当前页和产品页公开可读。快照为 UTC 9 月 3 日，但站内仍是 9 月 2 日太平洋时区榜单；points 在采集期间滚动。
- **Show HN**：Algolia API 公开可访问，七日匹配 875 条；精读集中在最新 100 与相关度前 100，不代表对 875 条逐条审查。
- **GitHub Trending**：Any / Any 三窗口公开可访问并按 `article.Box-row` 解析；榜单与期间 Star 会变化。
- **YC**：RFS 与 AI Company Directory 公开可读。RFS 是投资偏好；目录公司介绍多为公司自述。
- **Crunchbase News**：9 月 1 日 Proptech 专题公开可读；其数字来自 Crunchbase 数据，未由本报告独立复算。
- **Dealroom**：公开首页可读，但热度、增长率、资金和公司数的定义与基期未披露，因此不把 320 / $14B / +182% 当作经审计市场规模。
- **36氪**：融资快报索引公开可读；点击部分原文后进入安全检测页。本报告没有运行验证脚本或切换出口，只采用公开索引已展示的标题、轮次、金额与资金用途。
- **IT桔子**：公开首页返回 HTTP 412 / Precondition Failed，未绕过。未采用其底层事件数。
- **Shopify App Store**：评分和评论公开可读；评论为个体商家自述，且 SparkLayer 评论已记录后续解决。
- **时间与语义边界**：所有 points、comments、stars、评分和评论数都是 01:20—01:31 UTC 的瞬时值。融资不是需求，Star 不是采购，评论不是总体故障率。

本报告只安排创业假设验证优先级，不构成投资建议。只有可复现交付、明确付款人和付费试点，才能把信号升级为需求证据。
