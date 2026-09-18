# Startup Radar 创业机会日报｜2026-09-18

> UTC 快照：2026-09-18T01:21:00Z；采集窗口约 01:17—01:21。Show HN points/comments 固定于 01:17:32 UTC。
> 本期最值得先验证的是多渠道库存影子对账和 Shopify 应用回滚收据。所有事故与损失均按公开评论陈述记录；本报告没有独立复现、客户访谈、付费试点或收入证据。

## 1. 方法与证据口径

研究前读取了[评分方法](startup_radar_method_zh.md)、现有结构化数据和[上一期 2026-09-17](startup_radar_2026-09-17_zh.md)。本期重新采集 Product Hunt、Show HN、GitHub Trending、YC、Crunchbase News、36氪、IT桔子和 Shopify App Store 的公开页面，不以日期替换代替研究。

- **页面观察**：榜单、feed entry、评分、帖子时间和厂商定位。动态指标注明快照时刻。
- **用户或厂商陈述**：应用评论、厂商回复、产品功能和项目基准。除厂商明确确认的技术问题外，均不当作已判责事实。
- **资本信号**：融资额、承诺额和数据库统计保留报道口径；不换算为收入、到账、需求或技术完成度。
- **分析推断**：买家、MVP、实验价格、停止条件和防御性是待验证设计，不是已经发生的销售结果。

机会仍按 100 分排序：需求证据 30、买家清晰度 20、跨源共振 15、两周可验证性 15、分发路径 10、防御性 10。Star、points、评论、融资和目录出现只决定研究顺序，不证明留存、采购或市场规模。

## 2. 相比上一期的关键变化

1. **Product Hunt 改用官方 Atom feed，且不再报告无法核验的名次。** 首页本次返回 Cloudflare challenge；没有尝试绕过。官方 [feed](https://www.producthunt.com/feed) 可读 50 条，选出 [QAgent](https://www.producthunt.com/products/qagent-2)、[MCPJam](https://www.producthunt.com/products/mcpjam-inspector)、[Bitrise Remote Dev Environments](https://www.producthunt.com/products/bitrise) 等 9 项。发布时间是条目字段，不代表首页排名。
2. **Show HN 七日窗口前移，09-17 项目成为主体。** [MySetup.ai](https://news.ycombinator.com/item?id=49740105) 在固定快照为 182 points / 92 comments，[Flat.social](https://news.ycombinator.com/item?id=49740047) 为 93 / 52；另纳入 Aclif、SkillBay、AutoBot、MCPJam 和 OJ。
3. **GitHub Trending 的新变化集中在 Agent 权限与技能供给。** daily / weekly / monthly 分别解析 20 / 21 / 22 个 `article.Box-row`。[Tencent BrowserSkill](https://github.com/Tencent/BrowserSkill) 新进入日榜，[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 日增量升至 3,607；月榜 [archify](https://github.com/tt-a1i/archify) 显示 +52,260。
4. **需求证据从单一回滚投诉扩展为可重复的多渠道同步事故簇。** [Marketplace Connect 一星页](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 在 09-01 至 09-12 出现多条关于 eBay/Walmart 授权、库存、价格、图片和刊登失联的商家陈述，因此“只读影子对账”升至第一。
5. **新增当天卸载残留样本。** [Klaviyo 09-17 评论](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1) 称移除应用后代码受损并需 Shopify 团队修复；与 [ABsolutely 09-15 评论](https://apps.shopify.com/absolutely/reviews?ratings%5B%5D=1) 的卸载后重定向问题形成重复模式，但两者都未独立复现或判责。
6. **触达链路有一项厂商公开确认。** [Judge.me 09-11 回复](https://apps.shopify.com/judgeme/reviews?ratings%5B%5D=1) 确认部分评价请求被导向未安装 widget 的页面，并确认提醒邮件未正确调度；这比纯用户抱怨更强，但仍只代表一个产品的一次问题。
7. **资本样本转向“结果可归因”与硬科技。** [Crunchbase 09-17 报道](https://news.crunchbase.com/venture/fintech-alternative-funding-customer-acquisition-skalar/)称 Skalar 已承诺未来 12 个月向 7 家科技公司提供逾 1.25 亿美元获客融资；同日[物理 AI 报道](https://news.crunchbase.com/venture/interesting-startup-deals-nuclear-power-robotics-ai-agtech-proptech/)记录 Robocurve 的 1,000 万美元种子轮。中国侧，[36氪 09-18](https://www.36kr.com/newsflashes/3988212400258048)记录宇算星河亿元级天使及 Pre-A 轮。

上一期“编码模型路由复核”“知识新鲜度闸门”和“创意交接收据”退出前六。不是问题已经消失，而是今天出现了更新、更具体且更接近可量化损失的电商事故样本。

## 3. 覆盖范围与来源快照

| 来源 | 本次覆盖 | 口径与限制 |
|---|---|---|
| [Product Hunt Atom feed](https://www.producthunt.com/feed) | 50 条 / 9 个精选 | 首页触发 challenge；只用官方 feed 的条目和发布时间，不报告名次或 points。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1789089452%2Ccreated_at_i%3C%3D1789694252&hitsPerPage=100) | 880 条匹配 / 返回前 100 / 7 个精选 | 固定 09-11 01:17:32 至 09-18 01:17:32 UTC；没有逐条审核全部 880 条。 |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 20 / weekly 21 / monthly 22 | Language Any / Spoken Language Any；窗口增量不是总 stars，跨窗不相加。 |
| [YC RFS](https://www.ycombinator.com/rfs) / [Directory](https://www.ycombinator.com/companies) | Fall 2026 / 公开目录页 | RFS 是投资观点；目录收录不证明公司活跃、收入或采购。 |
| [Crunchbase News](https://news.crunchbase.com/feed/) | 09-16 至 09-17 三篇报道 | 采用公开新闻 feed 与正文，不使用付费数据库；保留媒体和相关方口径。 |
| [36氪融资快报](https://pitchhub.36kr.com/financing-flash) / IT桔子 | 5 个近期中国融资条目 / IT桔子受限 | 36氪公开页可读；IT桔子首页返回 412，没有登录、绕过或把搜索摘要当事实。 |
| [Shopify App Store](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1) | 6 个应用、6 类具体问题 | 公开一星筛选页；自选样本不能估算总体故障率。 |

### 3.1 Product Hunt 当前发布

以下均来自官方 [Atom feed](https://www.producthunt.com/feed)。feed 顶层日期为 2026-09-17 PDT；条目发布时间反映提交字段，不是榜单名次。

| 发布 | feed 时间 | 观察与边界 |
|---|---|---|
| [NavKey](https://www.producthunt.com/products/navkey) | 09-16 20:15 PDT | 用键盘控制 Windows；无采用和付费证据。 |
| [Amy by Jellyfish](https://www.producthunt.com/products/amy-by-jellyfish) | 09-16 22:23 PDT | AI recruiting sourcing；未观察招聘质量或回复率。 |
| [QAgent](https://www.producthunt.com/products/qagent-2) | 09-16 07:12 PDT | 自动化 Agent QA；覆盖率、误报率和采购未知。 |
| [S-Roll](https://www.producthunt.com/products/s-roll) | 09-16 23:40 PDT | 长视频转短片；未观察成片接受率和版权流程。 |
| [Opyt](https://www.producthunt.com/products/opyt) | 09-16 02:21 PDT | 把注意力作为 AI 上下文；隐私边界和任务收益未知。 |
| [Figo](https://www.producthunt.com/products/figo-3) | 09-16 13:22 PDT | 竞争动作追踪；数据合法来源与决策价值未验证。 |
| [Higgsfield API](https://www.producthunt.com/products/higgsfield) | 09-16 16:58 PDT | 文案称一个异步 API 接 50+ 生成媒体模型；数字未实测。 |
| [Bitrise Remote Dev Environments](https://www.producthunt.com/products/bitrise) | 09-16 09:33 PDT | 为编码 Agent 提供云 Mac；构建成功率和排队时间未知。 |
| [MCPJam](https://www.producthunt.com/products/mcpjam-inspector) | 09-16 23:17 PDT | MCP 测试与评估平台；与 Show HN 同日出现，但还没有生产事故或付费证据。 |

### 3.2 Show HN 最近七日

[固定 Algolia 查询](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1789089452%2Ccreated_at_i%3C%3D1789694252&hitsPerPage=100)匹配 880 条并返回前 100 条。以下 points/comments 均固定于 2026-09-18 01:17:32 UTC。

| 项目 | 快照 | 观察与限制 |
|---|---:|---|
| [MySetup.ai](https://news.ycombinator.com/item?id=49740105) | 182 / 92 | 分享 AI setup；讨论兴趣不证明配置可复现或安全。 |
| [Flat.social](https://news.ycombinator.com/item?id=49740047) | 93 / 52 | 3D 在线会议新版；未观察团队留存。 |
| [Aclif](https://news.ycombinator.com/item?id=49743382) | 29 / 16 | 统一跨 SaaS Agent CLI 命名；兼容与权限未验证。 |
| [SkillBay](https://news.ycombinator.com/item?id=49743459) | 21 / 16 | 人工策展技能目录；策展不等于代码审计。 |
| [AutoBot](https://news.ycombinator.com/item?id=49743478) | 17 / 3 | 长任务语音控制；未测试误触发和恢复。 |
| [MCPJam](https://news.ycombinator.com/item?id=49745351) | 9 / 4 | MCP 测试供给；小样本互动不能证明需求。 |
| [OJ](https://news.ycombinator.com/item?id=49746713) | 7 / 0 | Rust 的 Vite 替代；兼容性未测试。 |

### 3.3 GitHub Trending 三个窗口

| 仓库 | 窗口快照 | 信号与边界 |
|---|---:|---|
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +3,607 daily | 分阶段独立验证；热度不证明覆盖或付费。 |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | +1,302 daily | 使用真实登录态浏览器，同时扩大权限和审计面。 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | +1,125 daily | 自维护知识平台供给；不证明答案新鲜或正确。 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | +667 daily | 本地语音工作室；授权和生产支持未知。 |
| [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | +14,460 weekly | 公开空间情报；合法性、时效与误用风险未评估。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | +1,482 weekly | 98% 上下文减少是项目主张，未复测。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | +1,060 weekly | worktree 隔离不自动解决语义冲突。 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | +52,260 monthly | 可验证图表供给；高增量不保证与实际系统一致。 |
| [apache/maka](https://github.com/apache/maka) | +4,224 monthly | 完整行为记录可审阅，但日志不证明执行正确。 |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | +2,586 monthly | 对话式销售 CRM 供给；stars 不证明转化或合规。 |

### 3.4 市场、投资与中国信号

| 信号 | 披露口径 | 可支持的判断 |
|---|---|---|
| [Skalar 获客融资](https://news.crunchbase.com/venture/fintech-alternative-funding-customer-acquisition-skalar/) | 09-17；未来 12 个月向 7 家公司承诺逾 $125M；seed 未披露 | 公司称按获客 cohort 收入回收、常见上限约 1.1 倍；承诺额不是已投放或收入。 |
| [物理 AI 与 Robocurve](https://news.crunchbase.com/venture/interesting-startup-deals-nuclear-power-robotics-ai-agtech-proptech/) | H1 2026 $47.4B / 521 笔；Robocurve $10M seed | 物理 AI 资本密集，独立基准受关注；不证明基准独立性或商业采用。 |
| [2026 美国科技 IPO](https://news.crunchbase.com/public/energy-ai-defense-saas-ipos-2026/) | 近 $90B；SpaceX 占 83%；其余 21 家不足 $10B | 退出金额高度集中，企业软件基本缺席；不能直接预测早期融资。 |
| [宇算星河](https://www.36kr.com/newsflashes/3988212400258048) | 09-18；亿元级天使轮及 Pre-A | 天基模型获资本支持；未证明模型已在轨运行。 |
| [地瓜机器人](https://www.36kr.com/newsflashes/3986877341989895) | 09-17；$400M C 轮 | 机器人芯片与软件全链路资本门槛高；金额不证明量产和收入。 |
| [曦嘉医疗](https://www.36kr.com/p/3985907573881609) | 09-17；数千万元 Pre-A；公司称 20 余例临床植入 | 临床和审批需独立核验；融资不是临床效果。 |
| [YC Fall 2026 RFS](https://www.ycombinator.com/rfs) | 当前可见版本 | Small Software、Multiplayer AI、Self-Maintaining APIs 是投资人观点，不是订单。 |

### 3.5 客户投诉与 marketplace 缺口

| 问题 | 时间与评分 | 双方陈述／可支持结论 |
|---|---|---|
| [Marketplace Connect 同步与授权失联](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) | 4.1 / 2,110；09-01—09-12 多条一星 | 多名商家分别报告 eBay/Walmart 库存、价格、图片、刊登或授权异常；未独立复现，不能估算比例。 |
| [Klaviyo 移除后代码受影响](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1) | 4.7 / 3,310；09-17 一星 | 商家称 Shopify 团队正在修复；没有技术证据，根因未知。 |
| [ABsolutely 卸载后重定向循环](https://apps.shopify.com/absolutely/reviews?ratings%5B%5D=1) | 4.8 / 44；09-15 一星 | 商家称返回用户无法访问、清缓存后才恢复；单一样本。 |
| [PageFly 编辑器—线上差异](https://apps.shopify.com/pagefly/reviews?ratings%5B%5D=1) | 4.9 / 5,901；08-27 与 09-10 一星 | 用户报告线上差异和实施耗时；厂商承认沟通不足，未承认全部技术归因。 |
| [Shopify Inbox 客户入口](https://apps.shopify.com/inbox/reviews?ratings%5B%5D=1) | 4.6 / 5,798；09-01 一星 | 商家称联系量接近零；官方提供设置调整并接受导航反馈，因果未证明。 |
| [Judge.me 跳转与提醒调度](https://apps.shopify.com/judgeme/reviews?ratings%5B%5D=1) | 5.0 / 47,128；09-04 评论 / 09-11 回复 | 厂商确认部分跳转和提醒调度技术问题；不能外推总体可靠性。 |

## 4. 跨源主题

### 4.1 多渠道同步故障需要平台外的影子账本

**证据等级：同一应用的多条近期商家陈述 + 日志供给，未复现。** Marketplace Connect 的评论形成时间接近、字段具体的事故簇；[Apache Maka](https://github.com/apache/maka)提供完整行为记录的邻近供给。推断是只读比较源与渠道实际状态，不自动写回，也不把连接器替掉。

### 4.2 卸载动作不等于商店状态已恢复

**证据等级：两个近期商家陈述 + QA 供给。** Klaviyo 与 ABsolutely 都出现“移除/结束后仍有影响”的说法；[QAgent](https://www.producthunt.com/products/qagent-2)和 [security-audit-skill](https://github.com/cloudflare/security-audit-skill)显示验证供给活跃。应将安装前基线、更新差异和卸载后客户路径放在同一收据里。

### 4.3 编辑器正确不代表线上客户路径正确

**证据等级：三个 marketplace 产品样本，其中一个获厂商确认。** PageFly 的预览—线上差异、Inbox 的入口摩擦和 Judge.me 的提醒调度共同支持“合成客户”回归。它们不能证明同一个根因，但都能被端到端结果验收。

### 4.4 MCP 与 Agent QA 从 Demo 转向版本验收

**证据等级：Product Hunt、Show HN、GitHub 三类供给共振，需求弱。** MCPJam 在两处发布，QAgent 主打 Agent QA，Cloudflare skill 强调独立验证。建议只验证一个非生产 server 的版本差异，不先造通用控制面。

### 4.5 技能市场与登录态浏览器扩大来源和权限面

**证据等级：新技术供给集中，缺少事故。** [BrowserSkill](https://github.com/Tencent/BrowserSkill)、[SkillBay](https://news.ycombinator.com/item?id=49743459)、[Aclif](https://news.ycombinator.com/item?id=49743382)和插件榜单说明 Agent 可调用面扩大。推断是先列来源、版本、域名、权限和拒绝路径；热度不证明安全预算。

### 4.6 资本偏好可归因结果，硬科技方向仍明显资本密集

**证据等级：全球与中国媒体/数据库信号。** Skalar 把融资回收绑到客户收入，Robocurve 把独立评估用于机器人模型；宇算星河和地瓜机器人则显示航天与芯片的大额资本门槛。小团队更适合数据准备、验证与证据层。

## 5. 六个机会及 100 分拆解

| 机会 | 需求 30 | 买家 20 | 共振 15 | 两周 15 | 分发 10 | 防御 10 | 总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 多渠道库存同步的只读影子对账与事故证据包 | 28 | 20 | 11 | 15 | 8 | 7 | **89** |
| Shopify 应用安装—更新—卸载回滚收据 | 27 | 19 | 13 | 15 | 8 | 5 | **87** |
| 落地页编辑器与线上页面的发布前差异验收 | 25 | 19 | 8 | 14 | 7 | 5 | **78** |
| 客服与评价触达链路的合成客户回归 | 23 | 18 | 10 | 14 | 7 | 5 | **77** |
| MCP 服务变更的能力、权限与恢复验收 | 11 | 18 | 15 | 13 | 6 | 7 | **70** |
| 按获客 cohort 的融资口径对账包 | 16 | 18 | 6 | 12 | 4 | 7 | **63** |

前两项分高，是因为有具体字段、恢复时长和站点不可达等可验收结果；仍没有独立复现、总体故障率或付款证据。第五项跨源供给最强但需求最弱，因此不能因为“到处都有 MCP”就提高需求分。

### 5.1 多渠道库存同步的只读影子对账与事故证据包 — 89

**买家**：1 万 SKU 以上、同时经营 Shopify 与 eBay/Walmart 的多渠道运营负责人；店主或电商负责人付款。

**窄 MVP**：一个店、一个渠道、最多 5 万 SKU；用正式导出每日比较 SKU、可售库存、价格、图片、刊登和授权状态，只读输出差异与恢复时间线。

**支持证据**：[Marketplace Connect 一星页](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)有多条近期字段级投诉；[Apache Maka](https://github.com/apache/maka)只支持“完整记录可审阅”的方法，不是买方需求。

**主要风险**：可能是一次已修复事故；渠道同步延迟会制造假阳性。任何自动写回都可能扩大损失，MVP 明确禁止。

**两周实验**：2 家实施代理引荐 5 家商户，正式导出对账 14 天。若少于 3 家发现可确认差异，或少于 2 家愿付一次 500 美元，停止。

### 5.2 Shopify 应用安装—更新—卸载回滚收据 — 87

**买家**：为品牌安装营销、实验和页面应用的 Shopify 代理工程师；品牌电商负责人付款。

**窄 MVP**：一个测试商店、一个应用、两种浏览器状态、20 条路径；对比安装前、更新后和卸载后的 DOM、请求、重定向、cookie 与结账结果。

**支持证据**：[Klaviyo 09-17 评论](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1)和 [ABsolutely 09-15 评论](https://apps.shopify.com/absolutely/reviews?ratings%5B%5D=1)都描述移除后仍有影响；[QAgent](https://www.producthunt.com/products/qagent-2)和 [Cloudflare skill](https://github.com/cloudflare/security-audit-skill)只是测试供给。

**主要风险**：主题、缓存或其他应用也可能是根因；差异不能自动解释成责任。必须使用测试商店和明确授权。

**两周实验**：3 家代理各提供一个待更新应用。若三次均无可复现差异，或少于 2 家愿将 300 美元验收包加入报价，停止。

### 5.3 落地页编辑器与线上页面的发布前差异验收 — 78

**买家**：使用 PageFly 等编辑器的效果营销代理和 DTC 增长负责人。

**窄 MVP**：一个落地页、桌面/移动端、三个商品变体和两个促销规则；对比编辑器预览、线上匿名页与结账结果。

**支持证据**：[PageFly 评论](https://apps.shopify.com/pagefly/reviews?ratings%5B%5D=1)描述编辑器—线上差异和基础需求核验耗时；[ABsolutely](https://apps.shopify.com/absolutely/reviews?ratings%5B%5D=1)提供页面值—结账值不一致的邻近样本。

**主要风险**：广告脚本、个性化和 CDN 会制造非确定性；通用视觉回归工具可能已足够。

**两周实验**：3 家投放代理各跑一个待上线页。若现有流程已捕获全部差异，或少于 2 家愿付每页 150 美元，停止。

### 5.4 客服与评价触达链路的合成客户回归 — 77

**买家**：Shopify 品牌客服运营与生命周期营销负责人；电商运营主管付款。

**窄 MVP**：一个商店、两个测试身份、桌面/移动端、10 条路径；只向测试地址发送，记录入口、会话 ID、评价请求、提醒和最终页面。

**支持证据**：[Shopify Inbox](https://apps.shopify.com/inbox/reviews?ratings%5B%5D=1)有入口摩擦陈述；[Judge.me](https://apps.shopify.com/judgeme/reviews?ratings%5B%5D=1)厂商回复确认过跳转和提醒调度问题。

**主要风险**：联系量下降不一定是更新造成；测试不能覆盖所有邮箱客户端，严禁真实客户身份和批量发送。

**两周实验**：3 家商户在一次配置变更前后各复跑。若 30 条路径没有可复现阻断，或少于 2 家愿付每月 200 美元，停止。

### 5.5 MCP 服务变更的能力、权限与恢复验收 — 70

**买家**：维护内部 Agent 工具接入的平台工程负责人；安全负责人和业务 owner 共同签收。

**窄 MVP**：一个非生产 MCP server、10 个工具、3 类角色和 25 个用例；验证能力发现、参数、允许/拒绝、超时和恢复，不保存生产凭据。

**支持证据**：[MCPJam Product Hunt](https://www.producthunt.com/products/mcpjam-inspector)、[Show HN](https://news.ycombinator.com/item?id=49745351)、[security-audit-skill](https://github.com/cloudflare/security-audit-skill)和 [BrowserSkill](https://github.com/Tencent/BrowserSkill)构成供给共振；没有生产事故或预算证据。

**主要风险**：平台原生测试可能快速覆盖；测试环境与生产权限差异会制造虚假安全感。

**两周实验**：两个授权沙箱比较旧版与新版。若找不到一个真实版本差异，或没有两个愿付费团队，停止。

### 5.6 按获客 cohort 的融资口径对账包 — 63

**买家**：月获客支出约 10 万至 300 万美元、考虑非股权增长融资的科技公司 CFO/财务运营。

**窄 MVP**：一个渠道、三个 cohort、90 天数据；只读对账广告账单、CRM、支付、退款和毛利，列出无法归因项。它不是审计、法律意见或融资承诺。

**支持证据**：[Crunchbase 对 Skalar 的报道](https://news.crunchbase.com/venture/fintech-alternative-funding-customer-acquisition-skalar/)称其依赖详细交易数据评估 CAC、留存和收入，且已向 7 家公司承诺逾 1.25 亿美元；全部是媒体与公司陈述，没有借款方续约或批准率。

**主要风险**：市场窄、数据敏感、会计和合同边界重；分发依赖 CFO 顾问与会计事务所。

**两周实验**：3 位有增长融资经验的 CFO 用脱敏历史数据对账。若无法两周完成，或少于 2 位愿付 1,500 美元，停止。

## 6. 本期剔除或拥挤方向

- **通用 Agent 技能市场、插件目录和 AI setup 社区**：[SkillBay](https://news.ycombinator.com/item?id=49743459)、[MySetup.ai](https://news.ycombinator.com/item?id=49740105)、[OpenAI plugins](https://github.com/openai/plugins)及多项 skills 周榜已经形成密集供给。没有可信 provenance、版本验收和明确买家时不推荐再做目录。
- **再造通用 Agent QA 平台**：[QAgent](https://www.producthunt.com/products/qagent-2)、[MCPJam](https://www.producthunt.com/products/mcpjam-inspector)和 [security-audit-skill](https://github.com/cloudflare/security-audit-skill)已覆盖测试与审计定位。本期只建议从一个版本变更和一套拒绝用例切入。
- **通用 AI recruiting、会议和视频剪辑 Agent**：[Amy](https://www.producthunt.com/products/amy-by-jellyfish)、[Flat.social](https://news.ycombinator.com/item?id=49740047)和 [S-Roll](https://www.producthunt.com/products/s-roll)只有发布/讨论信号，没有本期可量化损失和替换触发点。
- **通用模型聚合和上下文压缩**：[Higgsfield API](https://www.producthunt.com/products/higgsfield)与 [context-mode](https://github.com/mksglu/context-mode)展示供给，未取得独立性能、成本或买方投诉。
- **天基模型、机器人芯片、核能、物理 AI 实验室与脑机接口：资本密集。** [宇算星河](https://www.36kr.com/newsflashes/3988212400258048)、[地瓜机器人](https://www.36kr.com/newsflashes/3986877341989895)、[Robocurve 等融资](https://news.crunchbase.com/venture/interesting-startup-deals-nuclear-power-robotics-ai-agtech-proptech/)和[曦嘉医疗](https://www.36kr.com/p/3985907573881609)不适合小团队用两周软件 MVP 验证。本期只考虑它们的数据准备或独立验收层。
- **绕过登录、CAPTCHA、rate limit 或平台风控**不构成机会。客户实验只用公开页面、正式导出、测试商店、测试账号和明确授权。

## 7. 下一轮实验

1. **第 1—2 天：验证重复性。** 访谈 2 家多渠道实施代理和 2 家 Shopify 主题/营销代理，确认最近一次同步或卸载事故、可恢复证据、谁签收和损失口径。
2. **第 3—5 天：只读基线。** 为库存对账建立字段映射和允许延迟；为应用回滚建立 20 条路径。全部使用正式导出和测试商店，不写回生产。
3. **第 6—10 天：盲审误报。** 让商家不知道工具结论先判断样本是否真实；记录假阳性、无法归因和需要人工审批的项。
4. **第 11—14 天：收付款证据。** 报价 500 美元库存对账、300 美元应用回滚、150 美元落地页验收。价格只是实验阈值；未达到各机会停止条件即停止。

## 8. 限制与访问记录

| 来源 | 访问结果 | 结论边界 |
|---|---|---|
| GitHub Trending | 三个公开页面下载成功 | 只解析 `article.Box-row`；stars 是窗口增量，不证明质量或收入。 |
| Show HN / Algolia | 公开 API 成功返回 100 条，匹配 880 条 | 固定一次 API 响应；没有声称审核全部结果。 |
| Product Hunt | 首页触发 Cloudflare challenge；官方 Atom feed 成功 | 未绕过 challenge；不报告首页排名、points 或评论数。 |
| YC | RFS 与 Company Directory 公开页可读 | RFS 是投资观点；没有把目录数量当公司活跃度。 |
| Crunchbase News | 公开 RSS 与正文可读 | 统计有数据库定义和披露延迟；未使用付费数据库。 |
| 36氪 | 融资快报 SSR 数据和公开文章可读 | 金额、用途、临床/部署数字为媒体或相关方披露，未核实到账。 |
| IT桔子 | 首页返回 HTTP 412 | 没有登录、绕过或引用不可核验的当前事件；只记录访问限制。 |
| Shopify App Store | 公开一星筛选页和回复可读 | 评论是自选样本；不计算故障率、不认定法律责任。 |

本期采用 Crunchbase News 满足全球市场信号覆盖，未额外使用 Dealroom。机会只有在真实买家、可复现结果和付款三项都出现后，才能从“研究假设”升级。
