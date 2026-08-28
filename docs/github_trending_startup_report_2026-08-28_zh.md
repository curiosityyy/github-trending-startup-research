# GitHub Trending 创业灵感日报（2026-08-28）

> 快照时间：2026-08-28 约 07:00 UTC  
> 范围：GitHub Trending 仓库总榜，`Language: Any`、`Spoken Language: Any`；覆盖 [Daily](https://github.com/trending?since=daily)、[Weekly](https://github.com/trending?since=weekly)、[Monthly](https://github.com/trending?since=monthly)。  
> 对比基线：[2026-08-26 报告](github_trending_startup_report_2026-08-26_zh.md)。

## 1. 今日结论

今天三个榜单共有 **59 个榜位、51 个去重项目**：Daily 19 个、Weekly 18 个、Monthly 22 个。语言分布为 Python 19、TypeScript 9、JavaScript 8、Rust 5，其余 10 个分散在 Jupyter Notebook、Shell、PowerShell、Nim、Mojo、Go、Clojure、CSS 和 C++。

与 8 月 26 日相比：

- 榜位从 52 增至 59，去重项目从 41 增至 51。
- 约 **21 个项目首次出现在本系列报告**；其中 12 个创建于 2026 年。
- 原 41 个项目中约 30 个仍在今天任一窗口，说明仓库更替快，但主题延续性很强。
- 8 月 26 日同时进入三榜的是 `apache/maka` 和 `basecamp/omarchy`；今天唯一同时进入三榜的是 [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)。

今天最值得关注的两个新增信号：

1. **开放数据产品化**：不是再做一个信息列表，而是把公开但分散的数据融合为可交互、可追踪、带新鲜度和真假标记的“实时操作界面”。[God's Eye View](https://github.com/bilawalsidhu/gods-eye-view) 是最典型案例。
2. **Agent 产物可验证化**：Agent 生成图表、视频、科研工作流时，用户开始要求 typed intermediate representation、确定性验证、引用、成本记录和人类审批，而不只要求“生成得快”。[Archify](https://github.com/tt-a1i/archify)、[OpenMontage](https://github.com/calesthio/OpenMontage) 和 [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills) 都体现了这一点。

如果今天只能验证三个创业假设，我会选：

| 优先级 | 创业假设 | 首批客户 | 为什么值得试 |
|---|---|---|---|
| 1 | **行业实时情报操作台** | 物流、灾害响应、保险、能源、园区运营 | 公共数据很多，但清洗、时空对齐、来源/新鲜度标记和行动闭环仍稀缺 |
| 2 | **Agent 产物验证与审批层** | 软件架构、内容生产、科研和受监管文档团队 | 生成已商品化；可证明“来源是什么、检查过什么、谁批准、花了多少”更接近付费价值 |
| 3 | **垂直 Skill Registry + Eval** | 生物医药、工程、财税、法务团队 | Skill 数量暴涨带来版本、安全、权限、评测和责任追踪问题；纯 Skill 内容本身壁垒低 |

## 2. 今日变化意味着什么

### 2.1 仓库会换，问题不会换

8 月 26 日的 `ai-job-search` 今天退出榜单，但 [career-ops](https://github.com/santifer/career-ops) 进入周榜；`nodeterm`、`jcode` 等退出，但 [munder-difflin](https://github.com/chaitanyagiri/munder-difflin) 和 [swarm-forge](https://github.com/unclebob/swarm-forge) 进入；Agent memory 方向仍有 `claude-mem`、OpenViking、TencentDB Agent Memory 和 `ai-memory`。

这说明应该投资于持续出现的需求，而不是押注某个短期 Trending 仓库：

```text
重复出现的需求
├── Agent 记忆与上下文
├── 多 Agent 调度和人类监督
├── Skill/Plugin 的安装、复用与治理
├── 本地优先和自托管
├── 多模型/免费额度路由
└── 垂直端到端工作流
```

### 2.2 “Skill 数量”正在失去稀缺性

日榜同时出现 `archify`、`go-modern-guidelines`、`scientific-agent-skills`、`garden-skills`、`awesome-claude-skills`；周榜又出现 Claude/Cursor 插件目录。竞争点正在从“有没有 Skill”转向：

- 是否固定版本与来源；
- 是否声明网络、文件和命令权限；
- 是否有测试与基准；
- 是否能检测恶意或过时指令；
- 是否能证明输出引用了正确数据；
- 组织能否审核、分发、撤回和观察使用效果。

纯文本 Skill 很容易复制，治理和评测基础设施才更可能形成企业收入。

### 2.3 开源替代继续显示“主权软件”需求

今天出现了开源 CapCut 替代 [OpenCut](https://github.com/OpenCut-app/OpenCut)、自托管个人财务 [Securo](https://github.com/securo-finance/securo)、跨设备阅读平台 [BookOrbit](https://github.com/bookorbit/bookorbit)，周/月榜中仍有 OpenLogi、Omarchy。这类项目不一定以 AI 为核心，却共同满足数据所有权、跨平台、无强制账户、可迁移和自托管。

对创业者的启发是：不要泛泛做“开源替代”，应选择一个用户已经付费购买内容或硬件、但被糟糕软件锁住的品类，再通过托管、同步、企业策略、迁移和支持收费。

## 3. 今日最值得研究的 10 个项目

### 3.1 [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) — 公共信号的空间操作系统

**榜单表现**：Daily 第 1，今日新增 1,984 Star；项目创建于 2026-06-22。

**它是什么**：把航班、船舶、卫星、地震、交通、公共摄像头、火情和基础设施放进一个写实 3D 地球。项目明确区分 live、delayed、partial、simulated、reconstructed 和 unavailable，并展示来源与新鲜度。

**为什么新颖**：公共数据一直存在，产品价值来自跨源融合、时空对齐、可信状态和可操作界面。语音 Agent 可以查询当前场景和控制地图，但 AI 不是主体；主体是高密度、可解释的实时世界模型。

**创业切口**：不要做“全球万能情报台”，先选一个会付费的闭环：

- 港口和物流：船期、天气、拥堵、异常事件；
- 灾害与保险：火情、洪水、地震、资产位置、证据快照；
- 能源和基础设施：施工、航线、天气、现场影像；
- 园区运营：摄像头、车辆、告警、工单和人员审批。

**风险**：仓库元数据未识别出标准许可证，商业复用前必须先确认；公共不等于可任意再分发，还要逐一检查数据源条款。实时位置和摄像头聚合也有隐私、滥用和安全风险。

### 3.2 [tt-a1i/archify](https://github.com/tt-a1i/archify) — 可验证的 Agent 架构图

**榜单表现**：Daily 第 4，今日新增 4,239 Star；MIT。

**它是什么**：Agent 先生成 typed JSON IR，再确定性编译成 HTML/SVG；支持架构、工作流、时序、数据流和生命周期图，并在交付前验证 schema、布局、路线和标签冲突。还能比较 Before/Delta/After，生成机器可读 receipt。

**为什么新颖**：它没有让模型直接画一张“看起来合理”的图，而是把模型判断与确定性渲染/验证分开。这种结构可以迁移到更多 Agent 产物。

**创业切口**：做“Architecture Evidence”而不是画图工具：从代码、IaC、API schema 和运行遥测生成可追溯架构；每个节点能回到 commit/文件/行；PR 中显示变更、信任边界、PII 流向和负责人，并要求审批。

**风险**：通用图表生成很容易被 IDE 和模型平台内置。必须占据代码审查、合规留档或生产变更审批，而不只是美观导出。

### 3.3 [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) — 科研 Skill 供应链

**榜单表现**：Daily 第 7，今日新增 498 Star；MIT。

**它是什么**：覆盖生物、化学、药物发现、临床研究、统计和科学写作的大型 Skill 集合。其重要价值不只是数量，还包括脚本测试、版本固定、来源元数据、安全扫描，以及对临床场景的边界声明。

**为什么新颖**：它把大量碎片化数据库和 Python 工具变成 Agent 可发现的工作流，同时承认 Skill 可以执行代码、联网和修改文件，明确提醒用户不要一次安装全部内容。

**创业切口**：面向生物医药团队做经过验证的 Skill Registry：

- 每个 Skill 有输入/输出 schema、数据授权和版本；
- 在标准数据集上测准确率与可重复性；
- 固定依赖、容器和数据库快照；
- 记录每次运行的来源、参数、模型和 reviewer；
- 高风险结论必须由合格人员审批。

**风险**：医疗和科研结论属于高风险场景，不能把“有引用”当作正确。商业护城河应来自验证数据、工作流认证、连接器和审计，而不是复制开源说明文件。

### 3.4 [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) — Agentic 视频生产系统

**榜单表现**：Daily 第 9，今日新增 1,292 Star；AGPLv3。

**它是什么**：让 coding agent 完成研究、脚本、素材生成/检索、剪辑和合成；支持真实库存视频与开放档案，不只生成静态图动画。Backlot 看板展示阶段、provider 决策和成本，并在高成本生成前提供逐场景审批门。

**为什么新颖**：相比“一句话生成视频”，它更像生产操作系统：有流水线、资产、状态、预算、质量评分、人类 gate 和运行回放。

**创业切口**：为一个有重复模板和品牌约束的行业做 production control plane，例如电商 SKU、房产、培训或本地化广告。重点卖品牌一致性、素材授权、审批、成本上限和批量版本，而不是生成模型本身。

**风险**：内容版权、肖像、音乐授权和平台政策都是核心责任；AGPLv3 也限制闭源网络服务式改造。泛内容市场高度拥挤。

### 3.5 [securo-finance/securo](https://github.com/securo-finance/securo) — 自托管个人财务

**榜单表现**：Weekly 第 10，本周新增 432 Star；AGPLv3。

**它是什么**：自托管财务管理，支持文件导入、多账户、预算、资产、汇率、OIDC、2FA，以及巴西、欧洲和美国/国际银行同步。AI Agent 是默认关闭的可选功能。

**为什么值得关注**：它没有用 AI 掩盖核心产品，先解决高敏感数据的所有权和跨地区银行连接，再把 AI 作为本地可选分析层。

**创业切口**：面向小企业主、家庭办公室或独立顾问做“财务数据保险箱”：只读聚合、票据/合同关联、现金流预警、会计师协作、审计导出。收入来自托管、备份、银行连接、家庭/团队权限和专业支持。

**风险**：银行连接稳定性、数据安全、地区合规和用户信任是高门槛；AGPLv3 影响闭源 SaaS 复用。

### 3.6 [bookorbit/bookorbit](https://github.com/bookorbit/bookorbit) — 用户拥有的阅读状态层

**榜单表现**：Weekly 第 16，本周新增 803 Star；AGPLv3。

**它是什么**：自托管电子书、PDF、有声书和漫画平台，在 Web、Kobo 与 KOReader 之间双向同步进度和标注，并连接 Readwise、Hardcover、StoryGraph、Kindle 和 OPDS。

**新颖点**：价值不是另一个阅读器，而是跨内容格式、设备和服务的“阅读状态与标注主数据”。

**创业切口**：为专业学习、企业培训或研究团队做合规阅读层：授权内容分发、进度证明、标注协作、知识库沉淀和离职导出。

**风险**：消费级订阅付费空间有限；电子书 DRM、内容授权和第三方同步 API 会限制扩张。

### 3.7 [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) — “办公室化”的本地多 Agent

**榜单表现**：Weekly 第 12，本周新增 2,017 Star；仓库未被 API 识别出标准许可证。

**它是什么**：包装 Claude Code、Codex、Gemini、Kimi、Copilot 等真实终端 CLI，为 Agent 增加邮箱、长期记忆、任务账本和监督者，并用 2D 办公室角色可视化。

**判断**：2D 办公室很适合传播，但不是主要壁垒。值得关注的是跨供应商会话、订阅额度、任务路由、记忆和人类升级。

**创业切口**：做多 Agent 的预算与结果控制面：每个任务选择 provider、记录成本/时限、隔离工作区、定义审批点、失败自动换路，并用 outcome 而不是“角色在线时间”衡量效率。

**风险**：与 nodeterm、Buzz、Maka、Swarm Forge 和各模型厂商自身编排功能重叠。许可证未明确前不可假定可商业复用。

### 3.8 [santifer/career-ops](https://github.com/santifer/career-ops) — 求职工作流再次验证

**榜单表现**：Weekly 第 13，本周新增 2,611 Star；MIT。

**它是什么**：本地扫描职位、结构化评估、定制 CV、管理申请和准备面试，支持多个 coding-agent 客户端。

**今日意义**：8 月 26 日是 `ai-job-search` 上榜，今天换成 `career-ops`。这验证了求职者确实想把 Agent 用于完整流程，但也说明该方向已经快速同质化。

**创业切口**：不建议再做通用求职助手。可改做某个牌照职业、国家或高校就业中心的合规版本，拥有本地职位源、资格规则、成果数据和人工顾问工作台。

**风险**：平台反自动化、个人数据、虚假材料和未经确认的批量投递。Star 不能证明求职成功率。

### 3.9 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — Agent Memory 更拥挤了

**榜单表现**：Daily 第 12，今日新增 143 Star；Apache-2.0。

**它是什么**：捕获 Agent 会话、压缩并在未来会话注入相关上下文，支持多种 Agent。

**今日意义**：它与 OpenViking、TencentDB Agent Memory、`ai-memory` 和 claude-obsidian 同榜，进一步证明长期记忆需求强，也证明“通用记忆”供给已经很多。

**创业切口**：只做 memory retrieval 不够。更值得做的是错误记忆检测、来源/版本、PII 删除、ACL、TTL、跨 Agent 导出和记忆对任务成功率的 A/B 评测。

### 3.10 [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) — CapCut 的开源替代

**榜单表现**：Daily 第 18，今日新增 478 Star；MIT。

**它是什么**：开源视频编辑器，定位为 CapCut 替代。

**创业启发**：OpenCut 与 OpenMontage 同时上榜，说明市场一端需要“用户直接编辑”，另一端需要“Agent 流水线生产”。可做二者之间的协作层：Agent 产出可编辑 timeline，人工在熟悉界面中微调，所有资产、授权、成本和审批可回溯。

**风险**：桌面视频编辑器开发和跨平台性能成本很高；与成熟产品比功能数量不是好策略，应从 Agent-native project format 或垂直模板切入。

## 4. 其他新项目的快速判断

| 项目 | 今日判断 | 主要风险/机会 |
|---|---|---|
| [zedeus/nitter](https://github.com/zedeus/nitter) | 无广告、隐私友好的 X/Twitter 前端；今日上榜但仓库已 archived | 强平台依赖，接口变化可让产品瞬间失效；不建议作为独立创业方向 |
| [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | 帮 coding agent 写现代 Go 的规则 | 官方/权威规则分发有价值，但单一规则包难收费；可融入代码评审与升级服务 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 设计、知识检索和图片生成 Skills 集合 | 内容易复制，验证与维护更重要 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Claude Skills 目录 | 目录本身壁垒低；供应链评分、安装遥测和企业 allowlist 更有价值 |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | 聚合免费 LLM endpoint，并明确只用于个人实验 | 额度、条款、质量和持续性高度依赖第三方；不应承诺生产 SLA |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | 为多种 coding agent 聚合免费 token | 同样存在供应商条款、账号封禁和不可持续成本风险 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | 让 70B 模型在单张 4GB GPU 上分层推理 | 能运行不等于能满足交互延迟；适合离线批处理和边缘实验，需实测速度 |
| [unclebob/swarm-forge](https://github.com/unclebob/swarm-forge) | 简单的多 Agent 协调工具 | 需求已确认、市场拥挤；应聚焦 outcome、验证和故障恢复 |
| [google/googletest](https://github.com/google/googletest) | 成熟 C++ 测试框架 | 非新创业信号，更多是社区事件导致短期上榜 |
| [actions/checkout](https://github.com/actions/checkout) | GitHub Actions 基础动作 | 基础设施常青项目，非新产品机会 |

## 5. 可执行的创业实验

### 实验 A：物流/灾害情报台

两周内只接 3–5 个数据源，不追求全球覆盖。选一个客户角色，把地图上的异常直接转成工单或提醒。关键指标：误报率、从信号到确认的时间、每天被实际打开次数、是否进入值班流程。

### 实验 B：Agent 产物 receipt

先支持一种高价值产物，例如架构变更图或营销视频。每次生成同时产出：输入来源、版本、模型、工具、验证结果、成本、人工审批和最终文件 hash。关键指标：review 时间是否下降、返工是否减少、receipt 是否进入正式交付。

### 实验 C：受控 Skill Registry

选择 20 个真实使用的行业 Skill，而不是收集 2,000 个。要求每个 Skill 有权限清单、固定版本、测试集、安全扫描、维护人和撤回机制。关键指标：安装成功率、任务成功率、错误/越权次数、旧版本使用率和团队愿付价格。

## 6. 完整榜单快照

### 6.1 Daily（19 个）

| # | 项目 | 语言 | 总 Star | 今日新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | JavaScript | 9,130 | 1,984 | 融合实时公共信号的 3D 空间情报界面 |
| 2 | [nitter](https://github.com/zedeus/nitter) | Nim | 13,986 | 71 | 隐私友好的 Twitter/X 前端；已归档 |
| 3 | [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 23,562 | 2,096 | GPT-Image 2 提示词与模板库 |
| 4 | [archify](https://github.com/tt-a1i/archify) | JavaScript | 24,657 | 4,239 | 可验证、可交互的 Agent 架构图系统 |
| 5 | [go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Go | 2,299 | 300 | 现代 Go coding-agent 指南 |
| 6 | [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 34,779 | 292 | Anthropic 官方 Claude 插件目录 |
| 7 | [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 35,522 | 498 | 科研和生物医药 Agent Skills |
| 8 | [ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 114,457 | 1,613 | 让 Agent 少写不必要代码的规则/工具 |
| 9 | [OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 52,679 | 1,292 | Agentic 视频生产系统 |
| 10 | [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 50,336 | 552 | AI 工程学习与实作材料 |
| 11 | [garden-skills](https://github.com/ConardLi/garden-skills) | CSS | 11,427 | 415 | 设计、检索、图片生成 Skill 集合 |
| 12 | [claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 92,391 | 143 | 跨 Agent 会话持久记忆 |
| 13 | [googletest](https://github.com/google/googletest) | C++ | 39,084 | 9 | Google C++ 测试/Mock 框架 |
| 14 | [claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 14,161 | 634 | 带来源的本地 AI 第二大脑 |
| 15 | [marin](https://github.com/marin-community/marin) | Python | 2,744 | 255 | 基础模型研发框架 |
| 16 | [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Python | 73,711 | 130 | Claude Skills 资源目录 |
| 17 | [actions/checkout](https://github.com/actions/checkout) | TypeScript | 8,755 | 8 | GitHub Actions checkout 动作 |
| 18 | [OpenCut](https://github.com/OpenCut-app/OpenCut) | TypeScript | 87,582 | 478 | 开源 CapCut 替代 |
| 19 | [TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 101,396 | 229 | 多 Agent 金融交易框架 |

### 6.2 Weekly（18 个）

| # | 项目 | 语言 | 总 Star | 本周新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 2,461 | 2,069 | Claude 社区插件目录镜像 |
| 2 | [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 23,562 | 11,300 | GPT-Image 2 提示词与模板库 |
| 3 | [omarchy](https://github.com/basecamp/omarchy) | Shell | 32,782 | 5,593 | 强主张的现代 Linux 环境 |
| 4 | [OpenLogi](https://github.com/AprilNEA/OpenLogi) | Rust | 17,209 | 5,946 | Logitech Options+ 本地优先替代 |
| 5 | [openai/codex](https://github.com/openai/codex) | Rust | 119,335 | 12,358 | 终端 coding agent |
| 6 | [apache/maka](https://github.com/apache/maka) | TypeScript | 3,807 | 1,978 | 本地优先、事件留痕的 Agent 工作区 |
| 7 | [modular](https://github.com/modular/modular) | Mojo | 29,269 | 1,770 | MAX 与 Mojo 平台 |
| 8 | [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 117,619 | 4,951 | AI 自动生成短视频 |
| 9 | [freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | 21,188 | 2,014 | 免费 LLM endpoint 聚合与路由 |
| 10 | [securo](https://github.com/securo-finance/securo) | Python | 2,451 | 432 | 自托管、隐私优先的个人财务 |
| 11 | [OpenViking](https://github.com/volcengine/OpenViking) | Python | 33,987 | 3,078 | Agent 上下文数据库 |
| 12 | [munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | JavaScript | 5,094 | 2,017 | 本地多 Agent 办公室/编排器 |
| 13 | [career-ops](https://github.com/santifer/career-ops) | JavaScript | 68,977 | 2,611 | 本地 AI 求职工作流 |
| 14 | [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 5,770 | 1,732 | Cursor 插件规范与官方插件 |
| 15 | [posthog](https://github.com/PostHog/posthog) | Python | 39,372 | 1,511 | 产品分析、可观测与自动化平台 |
| 16 | [bookorbit](https://github.com/bookorbit/bookorbit) | TypeScript | 3,415 | 803 | 自托管跨设备阅读平台 |
| 17 | [openhuman](https://github.com/tinyhumansai/openhuman) | Rust | 38,616 | 2,178 | 本地记忆、Agent 编排与研究助手 |
| 18 | [free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 50,920 | 4,657 | 多 coding agent 免费额度聚合 |

### 6.3 Monthly（22 个）

| # | 项目 | 语言 | 总 Star | 本月新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [omarchy](https://github.com/basecamp/omarchy) | Shell | 32,782 | 8,499 | 强主张的现代 Linux 环境 |
| 2 | [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 24,929 | 15,653 | 团队级 Agent 记忆资产中心 |
| 3 | [reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 29,961 | 20,994 | 逆向/授权渗透 Skill 路由包 |
| 4 | [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 23,562 | 13,870 | GPT-Image 2 提示词与模板库 |
| 5 | [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 2,461 | 2,108 | Claude 社区插件目录镜像 |
| 6 | [needle](https://github.com/cactus-compute/needle) | Python | 9,482 | 6,142 | 14MB 端侧工具调用模型 |
| 7 | [buzz](https://github.com/block/buzz) | Rust | 31,178 | 17,102 | 人与 Agent 共用签名事件空间 |
| 8 | [OpenViking](https://github.com/volcengine/OpenViking) | Python | 33,987 | 6,530 | Agent 上下文数据库 |
| 9 | [AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 67,433 | 14,605 | 12 周 AI 入门课程 |
| 10 | [i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 25,126 | 13,950 | ADHD 友好的 coding-agent 输出 Skill |
| 11 | [apache/maka](https://github.com/apache/maka) | TypeScript | 3,807 | 2,851 | 本地优先、事件留痕的 Agent 工作区 |
| 12 | [book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | 26,384 | 15,876 | 把技术书 PDF 转成 Skill |
| 13 | [t3code](https://github.com/pingdotgg/t3code) | TypeScript | 20,801 | 5,660 | AI coding 工具 |
| 14 | [OpenLogi](https://github.com/AprilNEA/OpenLogi) | Rust | 17,209 | 9,437 | Logitech Options+ 本地优先替代 |
| 15 | [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | TypeScript | 57,125 | 25,459 | 多模型网关、额度回退与压缩 |
| 16 | [modular](https://github.com/modular/modular) | Mojo | 29,269 | 2,724 | MAX 与 Mojo 平台 |
| 17 | [holehe](https://github.com/megadose/holehe) | Python | 14,353 | 2,543 | 检查邮箱在不同站点的注册情况 |
| 18 | [ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 14,057 | 8,742 | 面向 Agent 的共享登录态浏览器 |
| 19 | [ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | 5,032 | 3,689 | coding agent 长期记忆与跨厂商交接 |
| 20 | [airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 32,847 | 8,654 | 单张 4GB GPU 运行 70B 模型 |
| 21 | [public-apis](https://github.com/public-apis/public-apis) | Python | 471,879 | 19,767 | 免费 API 目录 |
| 22 | [swarm-forge](https://github.com/unclebob/swarm-forge) | Clojure | 2,944 | 1,568 | 多 Agent 协调工具 |

## 7. 最终判断

今天最大的创业启发不是某个仓库涨了多少 Star，而是 Agent 生态开始从“生成内容”走向“生产系统”：输入有来源，过程有状态，输出可验证，成本可见，关键步骤有人审批，运行结束还能复盘。

短期最容易传播的是 3D 地球、办公室 Avatar 和漂亮架构图；长期更容易收费的是它们下面的硬能力：数据许可与融合、typed artifact、验证 receipt、权限、审计、版本和行业工作流。创业验证应优先测客户是否把这些产物用于真实决策，而不是是否愿意点 Star。

