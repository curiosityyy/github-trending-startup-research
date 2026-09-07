# Startup Radar 创业机会日报｜2026-09-07

> 快照窗口：2026-09-07 01:18—01:22 UTC
> 目标：寻找小团队能在两周内验证的窄切口。榜单、points、Star、融资、目录数量、评分和评论都是带时间戳的信号，不等于需求、留存、收入、产品质量或投资建议。

## 1. 方法与证据边界

本期沿用 [Startup Radar 研究方法](startup_radar_method_zh.md)：分别扫描发布、技术社区、开源、资本与 Marketplace 需求，再寻找至少两类来源的共振。报告严格区分页面观察、发布者或评论者自述，以及本报告推断。

机会继续按 100 分评分：需求证据 30、买家清晰度 20、跨源共振 15、两周可验证性 15、分发路径 10、防御性 10。分数只决定验证顺序，不是 TAM、成功率或投资评级。

研究仅访问公开、授权页面，没有绕过 CAPTCHA、登录、签名、robots、速率限制或安全检查。受限来源和替代证据记录在第 9 节。

## 2. 相比 2026-09-06 的关键变化

1. **Product Hunt 已完全换榜。** 当前首页前七名变为 [AI Toolbox 3.0](https://www.producthunt.com/products/chatgpt-toolbox)、[Tadata](https://www.producthunt.com/products/tadata)、[Notify.domains](https://www.producthunt.com/products/notify-domains)、[Gemini Agentic Video](https://www.producthunt.com/products/google)、[DocsAlot](https://www.producthunt.com/products/docsalot-2)、[H3 Max](https://www.producthunt.com/products/fal-ai) 和 [Kit](https://www.producthunt.com/products/speakeasydev)。页面按其时区将本批标为 9 月 6 日发布；本报告记录的是 9 月 7 日 01:19 UTC 的瞬时榜单。
2. **“跨模型聊天管理”第一次同时出现发布热度、maker 经营数字和明确用户缺口。** AI Toolbox maker 自述 40,000+ 用户、五位数 MRR和本地优先；一位当前评论者称 JSON 导出有助于复盘长任务，但搜索有时找不到已知值、上下文计量只是估算。这些数字未独立审计，评论也只是个人样本；但结合 [Supafork](https://news.ycombinator.com/item?id=49524608) 与 [YC Multiplayer AI](https://www.ycombinator.com/rfs)，足以把“跨模型项目续接账本”列为新机会第二名。
3. **共享 Agent 的新问题是“何时加入”，不是再多一个 Slack bot。** Tadata 当前 #2；maker 明确说现在必须 @ 提及才会进入对话，是为了避免工作区噪音。YC 同期希望多人进入、重定向和交接同一长期 Agent 会话。本期新增“参与边界与人工接管记录”，不推荐通用 Slack AI 同事。
4. **AI 视频从模型能力竞赛转向发行验收。** Gemini 和 H3 Max 分别强调长视频处理成本与生成吞吐，具体改善均为发布者口径；[36氪 9 月 7 日 AI 剧观察](https://eu.36kr.com/zh/p/3972532338536711) 则把本地化叙事、文化适配和内容合规列为出海门槛。本期新增“逐镜头本地化验收包”，并明确标注内容责任和资金投入较重。
5. **Show HN 七日新增了非 Agent 的高互动项目。** [Kadō](https://news.ycombinator.com/item?id=49586902) 为 67 points / 30 comments，[Mador](https://news.ycombinator.com/item?id=49590738) 为 65 / 22；[TERMy](https://news.ycombinator.com/item?id=49562219) 以“不用 LLM”的定位升至 209 / 45。推断：确定性、轻依赖和无注册仍是重要偏好，但互动不是付费证明。
6. **Marketplace Connect 的需求信号继续增强。** 页面总评从上一期记录的 4.2 变为 4.1，一星从 302 增至 303；同为 9 月 3 日的另一位长期用户报告 eBay 库存数日不同步且支持没有时间表。大目录影子对账因此继续第一，并从“发布前”扩展到“发布与库存同步前后”。
7. **资本侧出现更清晰的拥挤度对照。** [Dealroom](https://dealroom.co/) 公开首页把 AI agents 和 humanoid robotics 列为前两类热点；[Crunchbase 周榜](https://news.crunchbase.com/venture/biggest-funding-rounds-crusoe-fluidstack-multibillion-dollar-ai-infrastructure/) 仍由 30 亿美元、15 亿美元和 3 亿美元的 AI 基础设施轮次领衔。小团队应卖验收、迁移和工作流资产，不应参与基础模型或算力资本竞赛。

## 3. 跨源主题

### 3.1 大目录跨市场发布需要独立验收层——持续且增强

[Marketplace Connect 一星页](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 当前为 4.1 / 2,097、303 条一星。9 月 3 日，一位使用约两年的商家称 eBay 库存同步数日不可用、支持无法给出时间表；另一位使用三天、拥有 10 万+ SKU 的商家称应用很慢或不加载，最终未能发布产品。

观察不是总体故障率，也可能来自同一次平台事故。推断是：用 Shopify 和 eBay 的只读导出保存时间戳、差异和人工确认，比再造写入连接器更适合小团队。[Antifailure](https://news.ycombinator.com/item?id=49591260) 的“一次性生产副本”只有 3 points / 2 comments，却提供了隔离验证的技术形态。

### 3.2 跨模型聊天正在变成可携带工作记录——强发布、早期用户证据

[AI Toolbox 3.0](https://www.producthunt.com/products/chatgpt-toolbox) 当前 #1，将 ChatGPT、Claude、Gemini 和 Grok 的聊天放入本地索引，支持搜索、文件夹和多格式导出。maker 自述 40,000+ 用户、五位数 MRR和两人团队；这些未经独立审计。一位使用约一个月的评论者认可 JSON 导出对长任务复盘有用，同时指出搜索漏值和 context meter 不可靠。

[Supafork](https://news.ycombinator.com/item?id=49524608) 做跨 harness 会话分享；YC [Multiplayer AI](https://www.ycombinator.com/rfs) 明确指出只读 transcript 难以让团队共同接续长任务。推断：机会不是保存更多聊天，而是把用户主动导出的记录压成已决定、未解决、证据、owner 和下一步，并对 handoff 产生可审阅 diff。

### 3.3 共享 Agent 的关键不是自主，而是何时加入——新治理共振

[Tadata](https://www.producthunt.com/products/tadata) 当前 #2，定位 Slack 内的 AI employee。maker 在现场回答中说当前必须 @ 提及才加入，是为避免对工作区造成噪音；数据隔离、临时容器和安全评估也都是厂商陈述，未在本报告验证。

YC [Multiplayer AI](https://www.ycombinator.com/rfs) 希望同事能进入、观察、重定向和交接同一 Agent 会话；[I Have Been Clawed](https://news.ycombinator.com/item?id=49532083) 汇总编码 Agent 事故，[apache/maka](https://github.com/apache/maka) 保存 Agent 完整操作记录。推断：首个可收费单元应是参与触发、上下文范围、工具权限和人类接管记录，而不是更自主的通用 Slack 助手。

### 3.4 AI 视频瓶颈从生成速度移到出海验收——技术、发布与中国市场共振

[Gemini Agentic Video](https://www.producthunt.com/products/google) 当前 #4，发布页称可由模型决定观看片段、速度和模态，并给出最高 token、成本和准确率改善；[H3 Max](https://www.producthunt.com/products/fal-ai) 当前 #6，发布者称 5 秒视频约 3 秒生成并在其比较中领先 12 个模型。两者都没有在本报告复测。

[36氪 AI 剧观察](https://eu.36kr.com/zh/p/3972532338536711) 汇总多笔 7—8 月资本动作，并引用从业者把本地化叙事、文化适配、发行盲区和内容合规列为出海门槛；文章中的市场、成本和商业化数字多为媒体、机构和受访者口径。[Fast Cut](https://news.ycombinator.com/item?id=49580689) 则展示 Agent 可调用的视频裁切工具。推断：小团队可先做人工签收的逐镜头风险清单，不训练视频模型。

### 3.5 Agent-ready 文档需要双读者一致性——供给明确、需求待访谈

[DocsAlot](https://www.producthunt.com/products/docsalot-2) 当前 #5，把人类文档与 MCP、llms.txt、skill.md 放在同一产品中；[YC Self-Maintaining APIs](https://www.ycombinator.com/rfs) 把未通知的外部 API 变化列为停机来源，并希望供应商直接在客户仓库开修复 PR；[open-science](https://github.com/aipoch/open-science) 日榜新增 146 stars，强调本地优先和可复现 provenance。

推断：通用文档生成已经拥挤。更窄的机会是把人类页面、OpenAPI、Agent tool 和示例视为同一承诺的不同表示，检查参数、权限、错误和弃用说明是否一致。

### 3.6 Agent runtime 采购需要按每次通过计价——技术与资本共振

[Kit](https://www.producthunt.com/products/speakeasydev) 当前 #7，把终端、ACP、A2A 和子 Agent 编排装入静态二进制；[magnitude](https://github.com/magnitudedev/magnitude) 周榜新增 1,961 stars，按本机硬件运行模型；[FrontierHarness](https://news.ycombinator.com/item?id=49538490) 作者报告同模型在九个 harness 的 cost-per-pass 相差 17 倍。

[Crunchbase 周榜](https://news.crunchbase.com/venture/biggest-funding-rounds-crusoe-fluidstack-multibillion-dollar-ai-infrastructure/) 记录 Gimlet Labs 获 3 亿美元 B 轮，方向是异构芯片推理；更大的两笔为 Crusoe 30 亿美元与 Fluidstack 15 亿美元。融资是供给和竞争信号。推断：小团队可在买方自己的冻结任务上卖 runtime 采购验收，而不是开发另一个 harness。

### 3.7 小而确定的工具正在对抗 AI 功能膨胀——社区偏好

[TERMy](https://news.ycombinator.com/item?id=49562219) 以“不使用 LLM”的终端助手获得 209 points / 45 comments，[Mador](https://news.ycombinator.com/item?id=49590738) 用约 80 行状态层让 DOM 响应式，[DocsAlot](https://www.producthunt.com/products/docsalot-2) 把 “No AI required” 写进发布语，[FckSignups](https://github.com/BraveOPotato/FckSignups) 日榜新增 436 stars，收集无注册、浏览器内开源工具。

这些只说明开发者偏好低摩擦、可预测工具，不证明企业付款。本期用它作为产品原则：能用规则、diff 和人工签收完成的 MVP，不先引入自主 Agent。

## 4. 来源快照

### 4.1 Product Hunt 当前发布

[当前首页](https://www.producthunt.com/) 在 01:19 UTC 展示七个 Top Products Launching Today。Product Hunt 页面将本批标为 9 月 6 日发布；points 持续滚动：

| 排名 | 发布 | Points | 页面观察 |
|---:|---|---:|---|
| 1 | [AI Toolbox 3.0](https://www.producthunt.com/products/chatgpt-toolbox) | 325 | 四个平台的本地聊天搜索、整理、导出和续接 |
| 2 | [Tadata](https://www.producthunt.com/products/tadata) | 278 | Slack 内 Agent；当前需显式 @ 才进入对话 |
| 3 | [Notify.domains](https://www.producthunt.com/products/notify-domains) | 248 | 组合 WHOIS、RDAP、拍卖和市场信号的域名提醒 |
| 4 | [Gemini Agentic Video](https://www.producthunt.com/products/google) | 208 | 模型自行选择长视频观看片段、速度和模态 |
| 5 | [DocsAlot](https://www.producthunt.com/products/docsalot-2) | 167 | 人类与 Agent 共用事实源的文档编辑器 |
| 6 | [H3 Max](https://www.producthunt.com/products/fal-ai) | 132 | 视频生成吞吐和质量主张均待独立复测 |
| 7 | [Kit](https://www.producthunt.com/products/speakeasydev) | 113 | 单二进制 Agent runtime、ACP、A2A 和编排 |

### 4.2 Show HN：最近七日

公开 [Algolia API](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E1788134400&hitsPerPage=100) 返回 834 条 2026-08-31 00:00 UTC 后匹配。下表为 01:20 UTC 的 points/comments 快照；精读集中于相关度前 100 与最新 100，并非逐条审查 834 条。

| 项目 | 时间 | Points | Comments | 观察 |
|---|---|---:|---:|---|
| [OpenTrail](https://news.ycombinator.com/item?id=49567437) | 09-04 | 408 | 130 | 开源 eInk 自行车码表 |
| [TERMy](https://news.ycombinator.com/item?id=49562219) | 09-04 | 209 | 45 | 不用 LLM 的终端助手 |
| [Kadō](https://news.ycombinator.com/item?id=49586902) | 09-06 | 67 | 30 | 非二元 habit score 的开源 iOS 应用 |
| [Mador](https://news.ycombinator.com/item?id=49590738) | 09-06 | 65 | 22 | 约 80 行 Proxy state tuple |
| [VODForge](https://news.ycombinator.com/item?id=49590354) | 09-06 | 33 | 6 | 本地视频下载桌面界面，存在平台条款边界 |
| [Keen Bean](https://news.ycombinator.com/item?id=49584880) | 09-06 | 11 | 5 | 会议过程中起草规格 |
| [Fast Cut](https://news.ycombinator.com/item?id=49580689) | 09-05 | 8 | 8 | Agent 可调用的视频裁切 |
| [Dsnitch](https://news.ycombinator.com/item?id=49586159) | 09-06 | 5 | 1 | eBPF Docker 出站查看 |
| [Antifailure](https://news.ycombinator.com/item?id=49591260) | 09-06 | 3 | 2 | 每个 PR 的一次性生产副本 |

### 4.3 GitHub Trending：Language Any / Spoken Language Any

结构化解析 [daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) 的公开仓库条目：daily 18、weekly 21、monthly 22，跨窗口去重 53。Star 是窗口快照，不是采用或收入。

| 窗口 | 仓库 | 期间 Star | 观察 |
|---|---|---:|---|
| Daily | [mattpocock/skills](https://github.com/mattpocock/skills) | +2,207 | 可安装工程规则供给继续增长 |
| Daily | [affaan-m/ECC](https://github.com/affaan-m/ECC) | +1,485 | harness、记忆、安全和研究配置 |
| Daily | [blader/humanizer](https://github.com/blader/humanizer) | +748 | 输出接受度焦虑与透明披露风险并存 |
| Daily | [FckSignups](https://github.com/BraveOPotato/FckSignups) | +436 | 无注册、浏览器内开源工具目录 |
| Daily | [open-science](https://github.com/aipoch/open-science) | +146 | 本地科研、数据连接和可复现 provenance |
| Daily | [OpenWhispr](https://github.com/OpenWhispr/openwhispr) | +121 | 本地/BYOK 语音转写 |
| Weekly | [magnitude](https://github.com/magnitudedev/magnitude) | +1,961 | 按硬件运行本地模型 |
| Weekly | [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | +9,193 | 多 Agent 互动课堂，效果未验证 |
| Weekly | [VoiceStudio](https://github.com/debpalash/VoiceStudio) | +7,513 | 全本地语音生成与配音工具 |
| Weekly | [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | +4,718 | 科研 skills 与数据库聚合 |
| Monthly | [semantica](https://github.com/semantica-agi/semantica) | +10,145 | 图结构上下文与可问责 AI |
| Monthly | [needle](https://github.com/cactus-compute/needle) | +7,069 | 14MB 边缘基础模型 |
| Monthly | [apache/maka](https://github.com/apache/maka) | +3,647 | 保留 Agent 完整操作记录 |

### 4.4 YC、全球资本与中国市场

- [YC Fall 2026 RFS](https://www.ycombinator.com/rfs) 公开列出 Multiplayer AI、Cloud for Small Software、AI for the Aging Population、physical-world OS、Proving You're Human、AI-native compliance 和 Self-Maintaining APIs 等方向。RFS 是投资偏好，不是订单。
- [YC AI Company Directory](https://www.ycombinator.com/companies/industry/artificial-intelligence) 显示 911 家 AI 公司；公司介绍多为公司自述，目录数量只说明供给密度。
- [Dealroom 首页](https://dealroom.co/) 的 Hot sectors momentum 显示 AI agents 为 320 startups / 140 亿美元 / +182%，humanoid robotics 为 84 / 62 亿美元 / +140%。页面没有在相邻位置解释指标方法或基期，本报告只把它作为相对拥挤度信号。
- [Crunchbase 9 月 4 日周榜](https://news.crunchbase.com/venture/biggest-funding-rounds-crusoe-fluidstack-multibillion-dollar-ai-infrastructure/) 覆盖 8 月 29 日至 9 月 4 日美国已披露轮次：Crusoe 30 亿美元、Fluidstack 15 亿美元、Gimlet 3 亿美元。文章提示数据可能滞后。
- [36氪 Gimlet 快讯](https://36kr.com/newsflashes/3969862414266633) 详情页本次触发安全检测，未绕过；可公开读取的 [36氪融资索引](https://pitchhub.36kr.com/financing-flash) 与 Crunchbase 周榜交叉支持 3 亿美元轮次，估值仍按报道口径。
- [工信部通知](https://www.miit.gov.cn/jgsj/qyj/wjfb/art/2026/art_86c400b4473849818629663a94a6d44b.html) 于 9 月 4 日发布《人工智能中小企业创业支持计划（2026-2028年）》；计划目标不等于资源已经落地或企业已获得需求。
- [36氪 AI 剧观察](https://eu.36kr.com/zh/p/3972532338536711) 发布于 9 月 7 日，汇总中国 AI 视频资本与出海案例，同时指出本地化和内容合规门槛。商业数据主要来自媒体、机构与受访者，未独立审计。

### 4.5 Marketplace 与当前用户问题

- [Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)：4.1 / 2,097、303 条一星。9 月 3 日长期用户称 eBay 库存数日不同步且没有修复时间表；另一位 10 万+ SKU 商家称无法加载或发布。
- [AI Toolbox](https://www.producthunt.com/products/chatgpt-toolbox)：4.9 / 11 reviews。一位当前评论者称 JSON 导出对复盘长任务有帮助，但搜索会漏已知值，context meter 不可靠。
- [Judge.me](https://apps.shopify.com/judgeme/reviews?ratings%5B%5D=1)：5.0 / 46,456。9 月 4 日使用三年多的商家称两次提醒一个月未发送，测试链接和提醒间隔设置难找，前台星级也缺少明显评论入口。
- [Shopify Collective Supplier](https://apps.shopify.com/collective-supplier/reviews?page=1&sort_by=newest)：4.5 / 768。9 月 4 日使用两年多的供应商称自动广告塞满收件箱、需反复筛查零售商，并希望加强站点审核。

评论只代表作者，不能由个体评论外推故障率、损失规模或付费意愿。

## 5. 七个机会与评分

| 机会 | 需求 30 | 买家 20 | 共振 15 | 两周 15 | 分发 10 | 防御 10 | 总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 大目录 Marketplace 发布与库存影子对账 | 30 | 20 | 14 | 15 | 8 | 3 | 90 |
| 跨模型项目续接与可审计工作账本 | 25 | 19 | 14 | 15 | 8 | 5 | 86 |
| AI 短剧出海的逐镜头本地化验收包 | 21 | 19 | 15 | 14 | 8 | 6 | 83 |
| Slack Agent 的参与边界与人工接管记录 | 21 | 19 | 15 | 15 | 6 | 5 | 81 |
| 人类文档—Agent 入口的一致性契约 | 20 | 18 | 15 | 15 | 7 | 4 | 79 |
| Agent runtime 的 cost-per-pass 采购基准 | 17 | 18 | 15 | 15 | 5 | 5 | 75 |
| 评论请求的投递与前台落点证明 | 26 | 19 | 6 | 15 | 4 | 1 | 71 |

### 5.1 大目录 Marketplace 发布与库存影子对账 — 90

**买家**：SKU 超过 50,000、同时经营至少两个 Marketplace 的 Shopify 商家运营负责人，以及服务这类商家的电商代理商。

**窄 MVP**：只接 Shopify CSV 与 eBay listing 导出；每天比较 500 个高销量 SKU 和全部零库存 SKU，生成 SKU、库存、价格、类目、图片、授权差异和人工确认状态，不自动写回。

**证据**：[Marketplace Connect 评论](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 提供同为 9 月 3 日的两个样本：长期用户的库存同步失败与 10 万+ SKU 商家的加载/发布失败；页面一星数量较上一期增加。[Antifailure](https://news.ycombinator.com/item?id=49591260) 提供隔离生产副本的实现参考，但互动很低。

**防御性**：每个商家的 SKU 映射、真实延迟基线、已确认误报与渠道事故历史。

**主要风险**：评论可能来自同一次事故；导出也会延迟，抽样漏长尾，平台能内置健康报告。

**两周实验**：5 家 5 万+ SKU 商家提供 14 天双端导出；若不能复现至少 3 起真实差异，或少于 2 家愿为只读日报支付 500 美元/月，则停止。

### 5.2 跨模型项目续接与可审计工作账本 — 86

**买家**：同时使用至少三种 AI、按客户项目交付研究或软件成果的 10—100 人咨询、代理和产品团队 AI 运营负责人。

**窄 MVP**：只接用户主动导出的 Markdown/JSON，不抓取平台；选一个项目的 20 段聊天，人工确认 30 条决策、证据和未结项，输出 canonical ledger 与下一次 handoff diff。

**证据**：[AI Toolbox](https://www.producthunt.com/products/chatgpt-toolbox) 的发布、maker 经营自述和一条“JSON 有用、搜索漏值”的当前评论；[Supafork](https://news.ycombinator.com/item?id=49524608) 的跨 harness 分享；[YC Multiplayer AI](https://www.ycombinator.com/rfs) 对只读 transcript 和长任务接续的描述。

**防御性**：买方私有的决策—证据—owner—结果图，以及经过人确认的摘要纠错历史。

**主要风险**：平台会内置项目功能；敏感数据、摘要遗漏和导出格式变化都会增加责任。

**两周实验**：用 3 个已完结项目回放；若不能找出至少 10 个真实遗漏或冲突，或项目负责人核对时间未下降 30%，停止。

### 5.3 AI 短剧出海的逐镜头本地化验收包 — 83（资本与内容责任较重）

**买家**：每月向两个以上海外市场发行 20 集以上 AI 短剧的中国工作室、发行商和本地化服务商内容运营负责人。

**窄 MVP**：10 集、每集 2 分钟、一个英语市场；自动抽帧和台词对齐，双语编辑人工确认 50 个字幕、配音、称谓、连续性、文化禁忌和平台规则高风险镜头。不生成视频，不替代法律审核。

**证据**：[Gemini Agentic Video](https://www.producthunt.com/products/google) 和 [H3 Max](https://www.producthunt.com/products/fal-ai) 的当日发布显示视频生成/理解供给提速；[36氪](https://eu.36kr.com/zh/p/3972532338536711) 把本地化与合规列为出海门槛；[Fast Cut](https://news.ycombinator.com/item?id=49580689) 展示 Agent 视频工具形态。

**防御性**：按市场、平台和内容类型积累的镜头级错误库、人工裁决和复发规则。

**主要风险**：媒体样本可能夸大市场；文化判断难标准化，错误放行会造成版权、合规或品牌损失。

**两周实验**：让 2 家工作室各提供一部已人工本地化作品做盲测；若召回不了至少 80% 已知问题、误报高于 20%，或每集人工复核不低于旧流程，则停止。

### 5.4 Slack Agent 的参与边界与人工接管记录 — 81

**买家**：已在 Slack 部署一个以上内部 Agent、处理销售或支持信息的 50—500 人公司安全与内部平台负责人。

**窄 MVP**：只代理一个 Slack bot；默认仅响应 @ 提及、最多读取当前 thread、所有外部写操作禁用。每次输出参与理由、上下文范围、模型/工具和 handoff 时间。

**证据**：[Tadata](https://www.producthunt.com/products/tadata) 当前 #2，maker 明确以避免噪音解释显式触发；[YC Multiplayer AI](https://www.ycombinator.com/rfs) 要求共同观察、重定向和交接；[事故索引](https://news.ycombinator.com/item?id=49532083) 与 [apache/maka](https://github.com/apache/maka) 提供风险与记录侧信号。

**防御性**：公司私有的参与政策、审批链、误触发标签与人类接管结果。

**主要风险**：Slack 或 Agent 平台可内置；日志也是敏感数据，策略过严无用、过松危险。

**两周实验**：离线回放 200 个 thread；若无法识别至少 10 次越界上下文或误加入风险，或安全负责人不愿批准只读试点，则停止。

### 5.5 人类文档—Agent 入口的一致性契约 — 79

**买家**：每月发布两次以上、同时维护 API 文档和 MCP/Agent 接口的 B2B API 公司开发者体验负责人。

**窄 MVP**：只覆盖 20 个高调用端点和 30 个示例；从真实 staging 响应生成基线，对人类页面、OpenAPI 与一个 Agent 入口做三方 diff，不自动改文档。

**证据**：[DocsAlot](https://www.producthunt.com/products/docsalot-2) 同时面向人和 Agent；[YC Self-Maintaining APIs](https://www.ycombinator.com/rfs) 描述外部 API 变化造成的停机；[open-science](https://github.com/aipoch/open-science) 强调可复现 provenance。

**防御性**：供应商真实行为—文档—工具调用—客户事故之间的版本映射。

**主要风险**：文档平台能内置；权限/数据状态导致误报，自动示例可能掩盖破坏性变化。

**两周实验**：回放最近 10 次发布；若找不到 5 条真实漂移，或开发者支持核对时间未下降 30%，停止。

### 5.6 Agent runtime 的 cost-per-pass 采购基准 — 75

**买家**：每月 Agent 推理支出超过 10,000 美元、正在评估两个以上 coding/research runtime 的软件团队内部平台负责人。

**窄 MVP**：固定 30 个历史任务、三种 runtime、每组重复三次；交付 pass、美元/通过、人工干预分钟和工具权限 diff，不开发 runtime。

**证据**：[Kit](https://www.producthunt.com/products/speakeasydev)、[magnitude](https://github.com/magnitudedev/magnitude)、[FrontierHarness](https://news.ycombinator.com/item?id=49538490) 和 [Crunchbase](https://news.crunchbase.com/venture/biggest-funding-rounds-crusoe-fluidstack-multibillion-dollar-ai-infrastructure/) 共同说明 runtime 供给、性能差异与资本密度。

**防御性**：买方冻结任务、真实人工成本和版本化复跑基线。

**主要风险**：任务泄密和快速过期；三次重复样本小，报告可能停留在咨询而非软件。

**两周实验**：只有拿到一名真实买方和 30 个可脱敏任务才开始；若三个 runtime 的 cost-per-pass 差异低于 15%，或买方不愿为季度复测付费，则停止产品化。

### 5.7 评论请求的投递与前台落点证明 — 71

**买家**：每月发送 5,000 封以上评论请求、依赖 Shopify 评价应用的 DTC 品牌 CRM 或电商运营负责人。

**窄 MVP**：一个模板、两次提醒、10 个种子邮箱、三种设备；记录计划/实际时间、跳转 URL、退信和 storefront 点击路径，只报告不代发。

**证据**：[Judge.me 一星评论](https://apps.shopify.com/judgeme/reviews?ratings%5B%5D=1) 同时描述提醒未发、设置难找和前台落点不清；[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) 提醒我们“配置已保存”不等于外部行为发生。跨源证据弱，因此排名最低。

**防御性**：很弱；只可能积累品牌自身的投递基线、模板变更与真实转化路径。

**主要风险**：核心证据来自一位评论者，邮件问题也可能来自商家域名；平台可迅速加入 seed test。

**两周实验**：为 5 家品牌手工验收；若少于 3 家复现真实偏差，或无人愿付 100 美元/月，则停止。

## 6. 拒绝或暂缓的拥挤方向

- **通用跨平台聊天管理器**：[AI Toolbox](https://www.producthunt.com/products/chatgpt-toolbox) 已有明确产品和 maker 自述的经营进展。只保留“人工确认的项目决策账本”，不做文件夹、搜索或浏览器抓取复制品。
- **又一个 Slack AI employee**：[Tadata](https://www.producthunt.com/products/tadata) 相似产品区已经列出多种工作流和 Slack 助手。只做参与边界、权限与 handoff 证据。
- **通用视频模型或视频 API 聚合器**：[H3 Max](https://www.producthunt.com/products/fal-ai)、Gemini 与资本密集型平台已在竞争。小团队不训练模型，只验证单一出海工作流。
- **通用 Agent runtime/harness**：[Kit](https://www.producthunt.com/products/speakeasydev)、[ECC](https://github.com/affaan-m/ECC)、[magnitude](https://github.com/magnitudedev/magnitude) 和大量 skills 已说明供给拥挤。只做买方任务采购验收。
- **通用 AI 文档生成**：[DocsAlot](https://www.producthunt.com/products/docsalot-2)、Mintlify、GitBook 等供给成熟。只做多入口事实一致性。
- **域名抢注或拍卖自动化**：[Notify.domains](https://www.producthunt.com/products/notify-domains) 已覆盖监控和下一步提示；自动竞价还带资金、竞拍和平台条款风险，本期不进入。
- **AI 写作“去痕迹”服务**：[humanizer](https://github.com/blader/humanizer) 有 Star 热度，但可能被用于规避披露或检测，买家和正当结果不清晰。
- **通用本地语音/视频工具**：[VoiceStudio](https://github.com/debpalash/VoiceStudio)、[OpenWhispr](https://github.com/OpenWhispr/openwhispr) 和 VODForge 已显示高供给，且视频下载存在平台条款边界。
- **养老机器人、边缘硬件和基础算力**：Dealroom、Crunchbase、OpenTrail 与 needle 都有热度，但现场安全、量产、认证和资本需求超出普通软件小团队的两周验证范围。

## 7. 下一步实验与停止条件

1. **Marketplace 影子对账**：5 家 5 万+ SKU 商家、14 天双端导出、至少 3 起真实差异、2 家愿付 500 美元/月；任一门槛未达即停止。
2. **跨模型工作账本**：3 个已完结项目、20 段聊天/项目；少于 10 个真实遗漏或冲突，或核对时间未下降 30%，停止。
3. **AI 视频本地化验收**：2 家工作室盲测；已知问题召回低于 80%、误报高于 20%，或人工时间没有下降，停止。
4. **Slack 参与边界**：离线回放 200 个 thread；少于 10 个越界或误加入风险，或安全负责人拒绝只读试点，停止。
5. **文档一致性契约**：20 个端点、30 个示例、10 次发布；少于 5 条真实漂移或支持核对时间未下降 30%，停止。
6. **runtime 采购基准**：必须有真实买方和 30 个脱敏任务；cost-per-pass 差异低于 15%或买方不愿为季度复测付费，停止产品化。
7. **评论请求验收**：5 家品牌；少于 3 家复现偏差或无人愿付 100 美元/月，停止。
8. **统一边界**：所有 MVP 先只读、离线、人工签收；不抓取受限页面、不自动写生产、不自动发消息、不依据未经复测的 maker/媒体数字采购。

## 8. 本期应优先访谈的问题

1. 电商商家愿意为“提前发现差异”付费，还是只在事故发生后临时排查？谁拥有 Shopify 与 eBay 双端导出权限？
2. 多模型团队真正丢失的是聊天本身、项目决策、未结项，还是证据来源？哪些内容必须逐条人工确认？
3. AI 短剧出海的返工损失按镜头、集数还是下架事故计价？本地化供应商是否已经维护问题清单？
4. Slack 安全负责人能否接受保存参与元数据但不保存正文？最小审计保留期是多少？
5. API 公司是否同时有 docs、OpenAPI、MCP 和 skills 四套入口？过去三个月真实的漂移事故有几起？

## 9. 限制与访问记录

- **Product Hunt**：首页与所列产品页公开可读。points 在采集期间滚动；maker 的用户数、MRR、性能、安全与成本数字没有独立复测。评论样本很小。
- **Show HN**：公开 Algolia API 可读，七日匹配 834 条；精读相关度前 100 与最新 100，points/comments 为 01:20 UTC 快照。
- **GitHub Trending**：Any / Any 的 daily、weekly、monthly 公开可读并结构化解析；榜单和期间 Star 随时间变化。
- **YC**：RFS 与 AI Company Directory 公开可读。RFS 是投资偏好；911 是目录页面数量，公司内容多为自述。
- **Dealroom**：本次公开首页可读，但热点指标的定义、基期和更新时间未在相邻内容中解释，因此不把 +182% 或资金数当成可审计市场规模。
- **Crunchbase**：9 月 4 日周榜公开可读，覆盖 8 月 29 日至 9 月 4 日美国大额融资；文章明确提示可能存在报告滞后。
- **36氪**：融资索引、欧洲站 AI 剧文章公开可读；Gimlet、VAST 等部分 36kr.com 详情页触发安全检测，未绕过。只在有公开索引或另一来源交叉时采用。
- **工信部**：通知正文公开可读；具体目标数来自 36氪对附件的公开摘要，政策目标不等于执行结果。
- **IT桔子**：公开首页本次返回错误，未绕过，也未引用其事件数或项目数据。
- **Shopify App Store**：评分与评论公开可读；评论是个体商家陈述。总评的 4.2→4.1 与一星 302→303 是相对上一期快照的页面变化，不表示一天内新增评价的因果。
- **时间边界**：Product Hunt 将本批标为 9 月 6 日发布，而本报告是 9 月 7 日 01:18—01:22 UTC 快照。所有 points、comments、stars、评分和评论数都是瞬时值。

本报告只安排创业假设验证优先级，不构成投资建议。只有可复现交付、明确付款人和付费试点，才能把信号升级为需求证据。
