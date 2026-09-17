# Startup Radar 创业机会日报｜2026-09-17

> UTC 快照：2026-09-17T01:20:10Z；采集窗口约 01:12—01:20。Show HN points/comments 固定于 01:20:10 UTC。
> 本期优先验证 Shopify 实验回滚和客户门户入口。模型路由复核、知识新鲜度、工具权限清单与创意交接仍是假设；本报告没有取得客户访谈、付费试点或收入证据。

## 1. 方法与证据口径

研究前读取了 [评分方法](startup_radar_method_zh.md)、现有结构化数据和 [上一期 2026-09-16](startup_radar_2026-09-16_zh.md)。本期重新采集 Product Hunt、Show HN、GitHub Trending、YC、Crunchbase、36氪、IT桔子公开材料及应用市场评论，没有用日期替换代替研究。

- **页面观察**：榜单条目、页面评分、帖子时间和产品定位；动态指标注明快照时刻。
- **一方陈述**：商家投诉、厂商回复、项目功能与基准。商家损失和厂商效果均未自动视为事实。
- **资本口径**：融资媒体与数据库统计存在披露延迟；金额不能换算成收入、需求或技术完成度。
- **分析推断**：买家、MVP、实验价格和停止条件是待验证设计，不是已发生的销售结果。

评分仍按 100 分：需求证据 30、买家清晰度 20、跨源共振 15、两周可验证性 15、分发路径 10、防御性 10。Star、points、评论、目录数量与融资只用于发现问题，不等于采购、留存或市场规模。

## 2. 相比上一期的关键变化

1. **发布样本全部换新。** 当前 Product Hunt 批次由 [Weave Router 2.0](https://www.producthunt.com/products/weave)、[Appwrite 2.0](https://www.producthunt.com/products/appwrite)、[Twigg](https://www.producthunt.com/products/twigg) 和 [Project Feed](https://www.producthunt.com/products/project-feed) 等组成。页面把批次标为 9 月 16 日，而本报告在 9 月 17 日 UTC 采集，因此保留站点日期差异。
2. **Show HN 七日窗口前移并加入 9 月 16 日项目。** [How Stale Is Your AI](https://news.ycombinator.com/item?id=49726343) 在快照时为 70 points / 44 comments；另纳入 Swift-Qwen、Monid、Friday、Legion 和 SeasonMap。上一期 Capsule 仅重采指标，不当作今日新发布。
3. **GitHub 三窗样本显著变化。** daily / weekly / monthly 分别读到 21 / 22 / 21 个 `article.Box-row`。新入选 [Cloudflare security-audit-skill](https://github.com/cloudflare/security-audit-skill)、[OpenResearch](https://github.com/alphaXiv/OpenResearch)、[knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) 和 [OpenLogi](https://github.com/AprilNEA/OpenLogi)。
4. **最强需求信号转向发布回滚。** [ABsolutely 9 月 15 日评论](https://apps.shopify.com/absolutely) 称结束 A/B 测试后返回用户遇到 `ERR_TOO_MANY_REDIRECTS`，卸载也未恢复。该样本具体且严重，但仍是单一商家陈述，未独立复现或判责。
5. **客户入口问题跨两个 marketplace 出现。** [Shopify Inbox](https://apps.shopify.com/inbox/reviews) 用户称更新后联系量接近零，官方给出减少必填信息的方法并承认导航反馈；[Refined for JSM](https://marketplace.atlassian.com/apps/1218481/refined-for-jira-?hosting=cloud&tab=reviews) 实施者描述编辑器焦点、注册跳转和分享限制。
6. **模型成本方向从硬件采购转为路由验收。** Weave 当前唯一公开评测明确要求逐请求解释为何选中较弱模型；本期因此替换昨日“本地模型采购成本”方向，关注结果、重试、缓存重建与最终成本。
7. **中国资本样本更新。** [超衍智能](https://www.36kr.com/p/3985996309265156) 披露成立约三个月、累计近 4 亿元天使系列融资；[深度内核](https://www.36kr.com/p/3984013270685317) 披露数千万元种子轮。与此同时，[36氪机器人报道](https://eu.36kr.com/zh/p/3985522499287811) 同时记录融资热度和破产案例，提醒融资与订单都不能替代现金流验证。

上一期邮件迁移、库存连接器和插件计费假设本次退出前六。原因是今天出现了更近、更具体的回滚和入口阻断证据，并不表示旧问题已经消失。

## 3. 覆盖范围与来源快照

| 来源 | 本次覆盖 | 口径与限制 |
|---|---|---|
| [Product Hunt](https://www.producthunt.com/) | 首页 17 个编号条目 / 7 个精选 | 约 01:18 UTC；详情页标为 09-16。points 统一取首页同一时点。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1789003210%2Ccreated_at_i%3C%3D1789608010&hitsPerPage=100) | 872 条匹配 / 返回前 100 / 7 个精选 | 固定 09-10 01:20:10 至 09-17 01:20:10 UTC；未逐条审核 872 条。 |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 21 / weekly 22 / monthly 21 | Language Any / Spoken Language Any；64 个跨窗条目未去重，精选 10 个。 |
| [YC RFS / AI Directory](https://www.ycombinator.com/rfs) | Fall 2026 / AI 标签 923 家 | RFS 与目录可读；923 与昨日相同，数量不代表收入或公司状态。 |
| [Crunchbase News](https://news.crunchbase.com/venture/global-funding-billion-dollar-deals-august-2026/) | 2 篇近期公开统计 | 八月全球融资和年内销售营销融资口径分开。 |
| [36氪 / IT桔子](https://www.36kr.com/p/3985996309265156) | 3 个中国资本与产业样本 | 36氪正文可读；IT桔子当前事件列表未取得公开正文，采用其官方澎湃号报告。 |
| [Shopify / Atlassian / Product Hunt 评论](https://apps.shopify.com/absolutely) | 5 个具体问题 | 自选评论样本，不能计算产品故障率。 |

### 3.1 Product Hunt 当前发布

以下 points 固定于首页约 01:18 UTC。功能与基准均为发布者陈述，本报告没有安装或购买产品。

| 发布 | 首页快照 | 观察与边界 |
|---|---|---|
| [Weave Router 2.0](https://www.producthunt.com/products/weave) | [#1 / 297 points](https://www.producthunt.com/) | 按任务复杂度、成本与缓存状态路由编码模型；厂商基准未复跑，当前评测要求提供选模原因。 |
| [Appwrite 2.0](https://www.producthunt.com/products/appwrite) | [#2 / 217 points](https://www.producthunt.com/) | 重建底层引擎并扩展数据、存储和身份能力；大版本迁移结果未验证。 |
| [Toki Coordination](https://www.producthunt.com/products/toki-ai) | [#4 / 166 points](https://www.producthunt.com/) | 用邮件协商多人会议并跟进；免费发布和 points 不证明长期留存。 |
| [Expand Board for macOS](https://www.producthunt.com/products/expand-board-for-macos) | [#6 / 127 points](https://www.producthunt.com/) | 嵌套空间画板；未观察团队采购证据。 |
| [Twigg](https://www.producthunt.com/products/twigg) | [#9 / 109 points](https://www.producthunt.com/) | 有状态 LLM API，管理上下文、工具 schema、路由、用量和计费；可靠性未实测。 |
| [ZeroClick](https://www.producthunt.com/products/zeroclick) | [#10 / 104 points](https://www.producthunt.com/) | 把 API 包装为 Agent 可发现与购买的店面；未披露可独立核验的交易量。 |
| [Project Feed](https://www.producthunt.com/products/project-feed) | [#12 / 98 points](https://www.producthunt.com/) | 串联多格式文件反馈、任务和客户批准；无独立交付时长数据。 |

### 3.2 Show HN 最近七日

[固定 Algolia 查询](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1789003210%2Ccreated_at_i%3C%3D1789608010&hitsPerPage=100) 覆盖 **2026-09-10 01:20:10 至 2026-09-17 01:20:10 UTC**，匹配 872 条并返回前 100 条。本报告从返回结果筛选七项，未声称遍历全部匹配。

| 项目 | 互动快照 | 观察与限制 |
|---|---|---|
| [How Stale Is Your AI](https://news.ycombinator.com/item?id=49726343) | 09-16；70 points / 44 comments | 汇总 20 个模型的发布时间与截止日；讨论有检索和日期判断失败自述，元数据不能替代任务测试。 |
| [Swift-Qwen3.8-27B](https://news.ycombinator.com/item?id=49727511) | 09-16；26 / 11 | 标题主张减少 thinking 并提高速度；未复跑基准。 |
| [SeasonMap](https://news.ycombinator.com/item?id=49728781) | 09-16；11 / 9 | 以气候数据可视化旅行季节；覆盖与推荐适用性未知。 |
| [Monid](https://news.ycombinator.com/item?id=49730644) | 09-16；11 / 3 | Agent 工具路由供给，小样本互动不能证明采购需求。 |
| [Friday](https://news.ycombinator.com/item?id=49731353) | 09-16；9 / 2 | 自托管持久记忆 MCP；未测召回与错误记忆。 |
| [Legion](https://news.ycombinator.com/item?id=49726662) | 09-16；9 / 0 | 在 Elixir 中让 Agent 编写沙箱 Lua；零评论不代表安全或无需求。 |
| [Capsule](https://news.ycombinator.com/item?id=49712278) | 09-15；366 / 156 | 昨日项目重采指标；副本合并和权限边界仍在，不把互动增长写成需求。 |

### 3.3 GitHub Trending 三个窗口

[Daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) 均核对 Language Any / Spoken Language Any。期间 stars 是对应窗口值，不是仓库总 star，也不能跨窗相加。

| 仓库 | 窗口快照 | 信号 |
|---|---|---|
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | +3,231 daily | 混合确定性规则与 LLM；通用审查拥挤，未测准确率。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +927 daily | 强调多阶段和独立验证；受欢迎不等于覆盖完整。 |
| [abue-ammar/tinycast](https://github.com/abue-ammar/tinycast) | +1,179 daily | 本地 macOS 效率工具；个人热度不是企业需求。 |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | +1,017 daily | 研究 Agent 供给；来源覆盖和结论准确性未验证。 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | +110 daily | 知识工作插件供给增长，也扩大权限和来源治理面。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | +1,612 weekly | 上下文压缩数字是项目自述，未独立测量。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | +998 weekly | 并行 worktree 管理不自动解决语义冲突。 |
| [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) | +12,927 monthly | 本地设备控制替代；兼容范围和支持成本未知。 |
| [apache/maka](https://github.com/apache/maka) | +4,197 monthly | 完整行为记录可供审阅，但不能证明执行正确。 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | +5,249 monthly | 时间序列模型仍需按行业数据回测。 |

### 3.4 市场、投资与中国信号

| 信号 | 披露口径 | 可支持的判断 |
|---|---|---|
| [Crunchbase 全球八月融资](https://news.crunchbase.com/venture/global-funding-billion-dollar-deals-august-2026/) | $42B、逾 1,500 家、7 笔十亿美元级 | 同比增长但低于七月；总金额受巨额轮次集中影响。 |
| [销售、营销与 CRM 融资](https://news.crunchbase.com/sales-marketing/ai-growing-share-ecommerce-saas-crm-startup-funding/) | 2026 年内 $7.5B / 830 轮 | 资本仍关注获客与客户管理，同时投资笔数低于疫情前后高峰。 |
| [超衍智能](https://www.36kr.com/p/3985996309265156) | 09-16；累计近 4 亿元天使系列 | RSI 获资本关注，金额不证明模型或商业结果。 |
| [深度内核](https://www.36kr.com/p/3984013270685317) | 09-15；数千万元种子轮 | 主权 AI 与可验证基础设施是相关方定位，合作未独立核验。 |
| [具身智能融资与破产风险](https://eu.36kr.com/zh/p/3985522499287811) | IT桔子截至 08-20：466 起 / 1,245.1 亿元 | 同篇列出破产审查与清算，融资、订单、产能均不等于现金流。 |
| [IT桔子 AI 上半年报告](https://m.thepaper.cn/newsDetail_forward_33513453) | 1,203 起 / 超 3,000 亿元 | 官方澎湃号文章称资金集中于头部，保留其数据库定义。 |
| [YC Fall 2026 RFS](https://www.ycombinator.com/rfs) | AI 目录 923 家 | 小软件云、多人 AI、自维护 API 仍在当前 RFS；这是投资人观点。 |

### 3.5 客户投诉与 marketplace 缺口

| 问题 | 时间与评分 | 双方陈述／可支持结论 |
|---|---|---|
| [ABsolutely 回滚后重定向循环](https://apps.shopify.com/absolutely) | 09-15 一星；4.8 / 44 | 商家称数据不一致、结束测试后站点不可达、卸载未恢复；未复现与判责。 |
| [Shopify Inbox 入口摩擦](https://apps.shopify.com/inbox/reviews) | 09-01；4.6 / 5,798 | 商家称联系量接近零；官方建议减少必填信息，并承认导航反馈。 |
| [Refined for JSM 门户限制](https://marketplace.atlassian.com/apps/1218481/refined-for-jira-?hosting=cloud&tab=reviews) | 09-10；Cloud 4.4 / 55 | 实施者称元素遮挡、焦点丢失和原生门户跳转受限，同时肯定支持。 |
| [Weave Router 选模解释不足](https://www.producthunt.com/products/weave) | 当前 1 条评测；4.0 | 评测者希望逐请求回看较弱模型为何被选中；只有一个评测。 |
| [Judge.me 卸载账单沟通](https://apps.shopify.com/judgeme/reviews) | 编辑于 09-01；原一星改五星 | 厂商解释已开始账期并退款。支持清晰停用收据，不证明错误收费。 |

## 4. 跨源主题

### 4.1 实验结束不等于副作用已经回滚

**证据等级**：近期严重投诉 + 基础设施迁移供给，单一商家未复现。ABsolutely 评论描述结束测试和卸载后仍有跳转问题；Appwrite 2.0 展示大版本重建供给。推断是对 cookie、跳转与结账结果做可签收回滚演练，而不是再造实验平台。

### 4.2 客户入口的每一步都需要真实路径验收

**证据等级**：两个近期 marketplace 样本 + 新客户门户供给。Shopify Inbox 与 Refined 分别出现必填项、返回导航、编辑器和原生门户限制；Project Feed 新发布也把客户批准作为核心流程。推断是从入口到提交结果做身份和设备组合测试。

### 4.3 模型路由节省需要逐次解释质量与成本

**证据等级**：当前产品评测 + 技术供给，缺少团队采购访谈。Weave 评测提出可观察缺口，Swift-Qwen、Twigg 和 context-mode 展示效率方案。应同时记录路由、重试、缓存和最终任务通过率。

### 4.4 知识截止日是运行时验收问题

**证据等级**：新社区讨论 + 开源供给。How Stale Is Your AI 的用户案例提示模型可能不主动查证；OpenResearch、knowledge-work-plugins 与 YC Self-Maintaining APIs 提供邻近供给。推断是强制官方来源、日期和未知项，而不是只展示模型截止日。

### 4.5 Agent 工具数量增长后需要最小权限与路由清单

**证据等级**：多项技术供给共振，直接损失证据弱。Monid、Twigg、OpenAI plugins 与 Cloudflare security-audit-skill 共同指向工具、schema 与审计。先验证一个团队五个工具的允许与拒绝路径，再判断是否需要控制面。

### 4.6 资本继续押注基础层，小团队更适合验证交付层

**证据等级**：数据库与媒体资本信号，不能推出客户需求。全球巨额轮次、国内 RSI、主权 AI 和具身智能融资都提高基础层门槛。本期把可在两周验收的回滚、入口和证据链排在硬件与基础模型之前。

## 5. 六个机会及 100 分拆解

| 机会 | 需求 30 | 买家 20 | 共振 15 | 两周 15 | 分发 10 | 防御 10 | 总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Shopify A/B 测试的上线与回滚验收包 | 27 | 19 | 11 | 15 | 7 | 5 | **84** |
| 客户门户更新前后的入口回归验收 | 25 | 19 | 11 | 14 | 7 | 4 | **80** |
| 编码 Agent 模型路由的质量与成本复核 | 20 | 18 | 13 | 13 | 6 | 5 | **75** |
| 面向 API 与产品支持 Agent 的新鲜度闸门 | 18 | 17 | 12 | 14 | 6 | 5 | **72** |
| Agent 工具路由的最小权限清单与拒绝测试 | 13 | 17 | 13 | 13 | 5 | 5 | **66** |
| 创意文件反馈到客户批准的交接收据 | 11 | 16 | 10 | 13 | 6 | 6 | **62** |

需求分最高为 27/30，因为 ABsolutely 样本具体且有明确损失路径；仍没有本报告完成的复现、重复样本或付费验证。第五、六项主要由供给驱动，必须先找到买家损失才值得开发。

### 5.1 Shopify A/B 测试的上线与回滚验收包 — 84

**买家**：运行价格、主题或页面实验的 Shopify 品牌增长负责人；店主或电商主管批准预算。

**窄 MVP**：一个商店、一个实验、两种浏览器状态和 20 条路径；记录实验前、运行中、结束后和卸载后的 HTTP 跳转、页面值与结账值。

**证据**：[ABsolutely 评论](https://apps.shopify.com/absolutely) 提供具体回滚失败陈述；[Appwrite 2.0](https://www.producthunt.com/products/appwrite) 只是邻近的大版本迁移供给，因此跨源分有限。

**主要风险**：只有一个严重样本，根因和责任未确认；缓存差异可能制造误报，厂商快速修复也会降低持续价值。

**两周实验**：由 2 家 Shopify 实施代理引荐 3 个待上线实验，人工跑基线与回滚，让店主逐项签收。若没有 2 家愿为一次验收支付 250 美元，或无可复现差异，停止。

### 5.2 客户门户更新前后的入口回归验收 — 80

**买家**：Shopify Inbox 或 Jira Service Management 门户的支持运营负责人；客服主管或实施项目负责人付款。

**窄 MVP**：一个门户、匿名与登录身份、桌面和移动端共 12 条路径；只读记录到达率、阻断步骤和最终工单编号。

**证据**：[Shopify Inbox](https://apps.shopify.com/inbox/reviews) 用户与官方回复提供同一问题的两方陈述；[Refined](https://marketplace.atlassian.com/apps/1218481/refined-for-jira-?hosting=cloud&tab=reviews) 给出另一个门户实施样本；[Project Feed](https://www.producthunt.com/products/project-feed) 是新供给。

**主要风险**：联系量也受流量和设置影响；Atlassian 原生限制可能无法修复，测试必须使用假账号和非敏感数据。

**两周实验**：招募 2 家电商和 1 家 JSM 实施方复跑升级前后路径。若问题不能复现，或负责人不愿为每次发布前验收支付 150 美元，停止跨平台扩展。

### 5.3 编码 Agent 模型路由的质量与成本复核 — 75

**买家**：同时使用多个编码模型的工程平台负责人；工程 VP 或 CTO 付款。

**窄 MVP**：导出 50 条授权脱敏 trace，标注任务难度与结果；复算选模、失败重试、缓存重建和最终通过成本。

**证据**：[Weave 当前评测](https://www.producthunt.com/products/weave) 明确要求选模解释；[Swift-Qwen](https://news.ycombinator.com/item?id=49727511)、[Twigg](https://www.producthunt.com/products/twigg) 与 [context-mode](https://github.com/mksglu/context-mode) 显示效率供给活跃，性能数字均未复测。

**主要风险**：需求证据只有一个评测；厂商可原生增加日志，订阅配额和模型条款会影响成本比较。

**两周实验**：在 2 个团队离线复核各 50 条 trace。若不能稳定解释至少 10% 的失败或成本差异，或无法合法导出 trace，停止。

### 5.4 面向 API 与产品支持 Agent 的新鲜度闸门 — 72

**买家**：更新频繁的 API 厂商文档和技术支持负责人。

**窄 MVP**：一个产品、30 个过去 90 天内变化的问题、两份官方来源；测引用覆盖、过期回答与不必要检索成本。

**证据**：[How Stale Is Your AI](https://news.ycombinator.com/item?id=49726343) 讨论有多名用户案例；[YC RFS](https://www.ycombinator.com/rfs) 的 Self-Maintaining APIs、[OpenResearch](https://github.com/alphaXiv/OpenResearch) 与知识插件提供邻近供给。

**主要风险**：模型行为会变化，社区案例未经独立复现；强制检索增加延迟与费用，官方文档也可能滞后。

**两周实验**：对 2 家有公开 changelog 的 API 各跑 30 题，由支持人员盲审。若 60 题没有可复现过期回答，或无人愿付 200 美元，停止。

### 5.5 Agent 工具路由的最小权限清单与拒绝测试 — 66

**买家**：内部编码或知识 Agent 的平台工程负责人；安全负责人共同签收。

**窄 MVP**：一个非生产 Agent、最多 5 个工具、三类角色和 15 个允许／拒绝用例；不代管凭据。

**证据**：[Monid](https://news.ycombinator.com/item?id=49730644)、[Twigg](https://www.producthunt.com/products/twigg)、[OpenAI plugins](https://github.com/openai/plugins) 与 [Cloudflare skill](https://github.com/cloudflare/security-audit-skill) 共同显示工具生态和验证供给，尚无本期事故样本。

**主要风险**：平台原生 scope 可能足够；测试环境和生产权限差异会制造虚假安全感。

**两周实验**：在 2 个授权沙箱加入过期角色和越权参数。若现有平台能完整导出并验证权限，或没有历史漏项和付费意愿，停止。

### 5.6 创意文件反馈到客户批准的交接收据 — 62

**买家**：交付视频、图片、PDF 或 3D 文件的小型创意代理项目经理。

**窄 MVP**：一个客户项目、最多 20 个文件和两轮修订；导出批注、任务、版本和批准时间，生成签收清单。

**证据**：[Project Feed](https://www.producthunt.com/products/project-feed) 是明确供给；[YC Multiplayer AI](https://www.ycombinator.com/rfs) 和 [Refined 门户评论](https://marketplace.atlassian.com/apps/1218481/refined-for-jira-?hosting=cloud&tab=reviews) 仅提供邻近协作信号，未取得创意代理损失样本。

**主要风险**：现有项目管理工具可能足够，客户不按流程批准属于组织问题。该方向需求分最低。

**两周实验**：让 3 家代理用历史非敏感项目重建交接链。若没有确认漏项，或没有 2 家愿付 100 美元，停止。

## 6. 本期剔除或拥挤方向

- **通用编码 Agent、通用代码审查与通用研究 Agent**：[open-code-review](https://github.com/alibaba/open-code-review)、[OpenResearch](https://github.com/alphaXiv/OpenResearch) 与大量周榜插件已经形成密集供给。没有垂直买家和验收标准时不推荐再做一个入口。
- **再造模型网关或上下文 API**：[Weave](https://www.producthunt.com/products/weave)、[Twigg](https://www.producthunt.com/products/twigg)、[context-mode](https://github.com/mksglu/context-mode) 和 [Monid](https://github.com/monid-ai/monid) 已覆盖路由、状态、压缩和工具分发。本期只推荐独立复核层。
- **通用会议助理与个人知识库**：[Toki](https://www.producthunt.com/products/toki-ai)、Friday 及多个知识插件说明供给多；本期缺少具体买家损失和替换触发点。
- **Agent 商务市场**：[ZeroClick](https://www.producthunt.com/products/zeroclick) 提供新供给，但没有独立交易量、结算或复购证据。本期不把 points 写成 Agent 采购需求。
- **RSI 基础模型、主权 AI 基础设施、机器人本体与海上算力：资本密集。** 近期融资和 YC RFS 反映资本兴趣，不适合小团队两周软件验证。
- **绕过平台审核、登录墙或访问限制**不构成机会。客户验证只用公开页面、正式授权导出和测试账号。

## 7. 下一轮实验

1. **第 1—2 天：找触发点。** 通过 Shopify 和 Atlassian 实施代理访谈 6 位负责人，确认最近一次更新、谁签收、失败损失与现有回滚步骤。
2. **第 3—5 天：建立人工基线。** 为实验回滚和客户入口分别写 20 条、12 条路径；使用测试商店、测试账号和非敏感数据。
3. **第 6—10 天：盲测误报。** 让商家或支持主管在不知道工具结论的情况下复核差异；模型路由和新鲜度只用授权脱敏 trace 或公开 changelog。
4. **第 11—14 天：收付费证据。** 所有价格都是实验阈值。分清一次性交付和周期复核，未达到各机会停止条件即停止开发。

## 8. 限制与访问记录

| 来源 | 访问结果 | 结论边界 |
|---|---|---|
| GitHub Trending | 网页读取工具提示 restricted URL；普通公开 HTTPS 下载三个页面成功 | 只解析 `article.Box-row`；未登录、未绕过限制，榜单不证明采用质量。 |
| Show HN | 网页工具拒绝带筛选参数的 Algolia URL；公开 API 普通请求成功；后续 HN 页面出现安全拦截和一次 429 | 固定指标来自一次 API 响应；停止追加 HN 请求，没有绕过限流。 |
| Product Hunt | 首页及七个产品页公开可读 | 首页和详情会异步变化；页面批次日期为 09-16。 |
| YC | RFS 与 AI 目录公开可读，Fall 2026 筛选页无正文 | 目录只作供给样本；RFS 是投资观点。 |
| Crunchbase News | 两篇公开文章可读 | 统计有披露延迟和分类口径；未使用付费数据库。 |
| 36氪 | 三篇相关正文公开可读 | 融资金额为媒体或相关方披露，未核实到账。 |
| IT桔子 | 搜索可见官方产品/API说明，未取得无需登录的当前事件列表 | 使用 IT桔子官方澎湃号公开报告及 36氪转述；没有尝试登录或绕过。 |
| Shopify / Atlassian / Product Hunt 评论 | 公开页面可读 | 评论是自选样本；不据此计算故障率或认定责任。 |

本期采用 Crunchbase 满足全球市场来源覆盖，未额外使用 Dealroom。所有机会仍需真实买家、可复现结果和付款证据升级；资本、榜单和发布热度只决定下一步研究顺序。
