# GitHub Trending 创业灵感报告（2026-08-26）

> 快照时间：2026-08-26 05:59 UTC  
> 范围：GitHub Trending 仓库总榜，`Language: Any`、`Spoken Language: Any`，覆盖 [Daily](https://github.com/trending?since=daily)、[Weekly](https://github.com/trending?since=weekly)、[Monthly](https://github.com/trending?since=monthly)。  
> 用途：从开发者热度中寻找创业假设，不把 Star 数直接视为市场规模、付费意愿或产品质量。

## 1. 一页结论

本次快照共有 **52 个榜位、41 个去重项目**：Daily 16 个、Weekly 15 个、Monthly 21 个。41 个项目中，约 **37 个（90%）直接属于 AI/Agent、服务 AI 基础设施，或提供关键 Agent 接口**；**26 个（63%）创建于 2026 年**。语言分布以 Python（19 个）为主，其次是 Rust（6 个）和 TypeScript（6 个）。

最值得创业者注意的，不是“再做一个通用聊天 Agent”，而是 Agent 普及后新出现的七类刚需：

1. **可审计、可恢复的 Agent 执行层**：模型消息、工具调用、权限决定、成本和结果都成为可追溯事件。
2. **团队记忆治理**：不只是向量检索，而是来源、版本、ACL、过期、纠错和分发。
3. **端侧小模型动作层**：小到能放进穿戴设备、家电和机器人，专门负责工具调用和结构化提取。
4. **多 Agent 任务驾驶舱**：持久会话、状态提醒、人类审批、分支/工作树和移动端接管。
5. **私有个人搜索与知识资产**：完整索引用户看过的网页和本地文件，并向 Agent 提供带来源的检索。
6. **AI 时代的权限与安全测试**：Skill、MCP、浏览器登录态和 Agent 基础设施都成为新的攻击面。
7. **被厂商忽略的本地优先工具**：用更轻、更透明、跨平台的软件替代臃肿的硬件配套软件。

如果现在要选三个方向做客户访谈，我建议优先验证：

| 优先级 | 创业假设 | 为什么现在 | 首批客户 | 收费方式 |
|---|---|---|---|---|
| 1 | **垂直行业 Agent 审计与审批层** | Agent 已开始真正写文件、执行命令和操作业务系统，但企业缺少统一证据链 | 财税、法务、客服运营、软件外包、受监管团队 | 按席位 + 执行量；私有部署和合规包另收费 |
| 2 | **Agent Memory Governance** | “记住一切”已不稀缺，“记对、可删、可解释、按权限共享”才稀缺 | 10–200 人研发/咨询团队 | 团队订阅；存储/索引量；企业连接器与审计增值 |
| 3 | **端侧 Tool-Calling Runtime** | 14MB 级模型说明动作理解可以脱离云端；隐私、时延和离线是硬价值 | IoT、家电、可穿戴、机器人厂商 | SDK 授权、每设备 royalty、定制微调和认证服务 |

## 2. 方法与边界

- “所有编程语言”在本报告中指 **不设置编程语言过滤器的 Trending 总榜**，不是逐一请求 GitHub 下拉菜单中的数百种语言；后者会产生数千个重复榜位，也不适合作为一份可读的创业报告。
- GitHub 当前页面实际返回 16/15/21 个项目，不保证固定为 25 个；本报告完整覆盖本次页面返回的所有项目。
- 榜单数据抓自 HTML；创建时间、最近推送、许可证和总 Star 通过 GitHub 仓库元数据交叉核验。页面与 API 查询相隔数分钟，总 Star 可能相差个位数。
- Daily/Weekly/Monthly 是 **GitHub 的滚动热度窗口**，不是项目创建时间。只有 `apache/maka` 与 `basecamp/omarchy` 同时进入三个窗口；三个窗口的并集为 41 个项目。
- “创业潜力”采用定性框架：真实痛点与付费意愿 30%、差异化/壁垒 25%、分发机会 20%、可落地性 15%、合规和平台风险 10%。这是机会筛选，不是投资建议或市场规模调查。
- Star 暴涨可能来自产品发布、社区传播、榜单反馈循环或其他因素。本报告不在没有证据的情况下推断刷榜，也不会把短期 Star 增量当成收入证据。

## 3. 榜单结构透露了什么

### 3.1 Agent 正从“模型能力”转向“工作系统”

榜单里同时出现 [Apache Maka](https://github.com/apache/maka)、[Buzz](https://github.com/block/buzz)、[nodeterm](https://github.com/eneskirca/nodeterm)、[TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)、[OpenViking](https://github.com/volcengine/OpenViking) 和 [AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)。它们分别解决执行记录、人与 Agent 协作、会话编排、团队记忆、上下文数据库和安全测试。

这说明竞争焦点正在从“谁能调用最强模型”转向：

```text
模型/Agent
   ↓
身份与权限 → 执行与审批 → 状态与协作 → 记忆与检索 → 评测与审计
```

创业机会更可能出现在这条链上的窄环节，而不是重新包装一个通用聊天界面。

### 3.2 Local-first 已从口号变成产品卖点

[Maka](https://github.com/apache/maka) 把会话和执行事实保存在本机；[OpenLogi](https://github.com/AprilNEA/OpenLogi) 强调无账户、无遥测；[Hister](https://github.com/asciimoo/hister) 索引用户访问过的网页和本地文件；[claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) 保留普通 Markdown 和来源证据；[Needle](https://github.com/cactus-compute/needle) 则让工具调用模型直接离线运行。

但“本地”本身不是商业模式。可收费的是本地带来的结果：隐私、离线、低时延、可迁移、可审计，以及避免把敏感数据送入第三方云。

### 3.3 Skill/提示词包热度很高，但壁垒很低

月榜里有 `reverse-skill`、`i-have-adhd`、`book-to-skill`、`mattpocock/skills`；日榜还有 `andrej-karpathy-skills` 和两个 Claude 插件目录。它们证明用户需要可复用工作方法，但纯文本 Skill 极易复制，单独售卖很难形成长期壁垒。

更好的创业切口不是“卖 Skill 文件”，而是围绕 Skill 做：供应链扫描、权限声明、版本兼容、运行评测、组织分发、使用分析、自动更新和责任追踪。

### 3.4 热门项目的新鲜度很高，成熟度却不一定高

41 个去重项目中 26 个创建于 2026 年。高新鲜度适合找方向，不适合直接选依赖。典型例子是 Maka 明确处于 Apache Incubator 且尚无正式 Apache release；OpenLogi 也明确标注仍在快速开发。创业者应把 Trending 当作“需求雷达”，再用真实用户访谈、留存、工作流频率和付费实验验证。

## 4. 最值得研究的 12 个新颖项目

### 4.1 [cactus-compute/needle](https://github.com/cactus-compute/needle) — 端侧动作模型

**它是什么**：45M 参数、单个 14MB 二进制、约 28MB RAM 的工具调用与结构化提取模型；支持 JSON 约束、置信度门控、工具检索和 LoRA 微调，推理不需要联网。

**新颖点**：它没有追求“端侧通用聊天”，而是把范围收窄到设备最需要的动作层：理解一句指令、选择工具、填参数、输出结构化结果。置信度低时升级到云端或人类，是可部署系统需要的边界。

**创业启发**：做“设备动作 SDK”，提供行业工具 schema、数据生成、微调、端侧运行时、置信度策略、硬件基准和 OTA 模型管理。可先从隐私敏感且动作集合有限的场景切入，例如工业巡检、家庭中控、医疗设备 UI、车载离线控制。

**风险**：README 的基准仍需独立复现；设备碎片化、模型认证、误动作责任和硬件适配都会增加交付成本。

### 4.2 [apache/maka](https://github.com/apache/maka) — Agent 的可恢复执行账本

**它是什么**：本地优先 Agent 工作区，将模型消息、工具调用、工具结果、权限决定和终止状态记录为持久事件；桌面端、CLI/TUI 和 Eval 共用 Runtime Host，并支持崩溃恢复、分支和实验结果。

**新颖点**：大多数 Agent UI 把聊天记录当主数据；Maka 把追加式事件记录当主数据，UI 和下一次模型调用只是该记录的投影。这更接近数据库和工作流引擎，而不是聊天应用。

**创业启发**：不必与 Codex/Claude Code 正面竞争，可以做跨 Agent 的“证据层”：统一采集执行事实、脱敏、审批、成本归因、回放、签名导出和合规留档。对财税、法务、外包交付和生产运维更有付费价值。

**风险**：Maka 本身仍是早期公开版本；其 macOS 支持优先，数据格式可能变化。创业产品应做跨客户端协议层，而不是绑定单一运行时。

### 4.3 [block/buzz](https://github.com/block/buzz) — 人和 Agent 使用同一种身份与事件协议

**它是什么**：可自托管协作空间，人与 Agent 在同一房间里工作；消息、反应、工作流、审批和 Git 事件都变成签名事件。Agent 拥有自己的密钥、频道成员资格和审计轨迹，而不是一个共享机器人账号。

**新颖点**：它不是把 Agent 塞进 Slack，而是把“人、Agent、工作流、代码仓库”统一到一个事件模型里。分支可以成为房间，CI、补丁、审查和合并原因留在同一记录中。

**创业启发**：可切入“高信任项目空间”，例如安全响应、外包交付、研究协作。卖点不是聊天，而是角色隔离、签名审批、证据检索和客户可验收的项目时间线。

**风险**：替换 Slack/GitHub/Jira 的迁移成本极高。早期应只占据一个强场景，例如“Agent 参与的代码审查房间”，而不是一开始做全套协作平台。

### 4.4 [OpenViking](https://github.com/volcengine/OpenViking) 与 [TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) — 上下文数据库与团队记忆治理

**OpenViking** 把 memory、resource、skill 放进 `viking://` 虚拟文件系统，提供 L0 摘要、L1 概览、L2 详情的分层加载，并保留检索路径。它的差异化是“像浏览文件一样浏览上下文”，让检索过程可观察。

**TencentDB Agent Memory** 把对话、Skill、Wiki 和 CodeGraph 统一成可授权、可版本化的资产，区分 private/team/restricted/agent，并支持把不同资产装配给不同 Agent。它的差异化是组织治理，而不只是召回。

**创业启发**：机会不在再做一个向量库，而在“记忆控制面”：

- 记忆来源和引用证据；
- PII/商业秘密检测与自动脱敏；
- TTL、遗忘请求、冲突和过期检测；
- Agent/用户/项目级 ACL；
- 记忆版本、评测、回滚和成本收益；
- 从一种 Agent 导出到另一种 Agent 的可移植格式。

**风险**：这是大厂和开源项目密集竞争区。没有垂直数据、治理工作流或分发渠道时，“通用 Memory API”会快速商品化。OpenViking 主项目采用 AGPLv3，商业集成前需认真评估许可证边界。

### 4.5 [AprilNEA/OpenLogi](https://github.com/AprilNEA/OpenLogi) — 硬件配套软件的反向创新

**它是什么**：Logitech Options+ 的本地优先替代，使用 Rust，支持 macOS/Linux/Windows、按钮映射、DPI、SmartShift、摄像头 UVC 控制、纯文本配置和 CLI。

**新颖点**：它没有依赖 AI 热点，却在周榜获得 7,648 Star。用户真正买单的叙事非常清楚：更轻、Linux 一等支持、无账户、无遥测、可脚本化。

**创业启发**：寻找“硬件很好、官方软件很差”的品类，做跨品牌控制层。先开源积累设备兼容，再靠企业设备策略、批量配置、远程管理、签名驱动、优先支持和硬件厂商白标收费。

**风险**：设备协议逆向、驱动签名、系统权限和兼容矩阵会形成高维护成本；同时也正是潜在壁垒。不要从支持所有硬件开始，应先选一个用户痛点强、SKU 可控的品类。

### 4.6 [eneskirca/nodeterm](https://github.com/eneskirca/nodeterm) — 多 Agent 空间化驾驶舱

**它是什么**：把真实 tmux 终端、Agent、便签、编辑器、Diff 和网页放在无限画布上；持久会话同时映射为看板卡片，并通过 hook 显示 RUNNING/NEEDS YOU，支持远程主机、浏览器版和手机接管。

**新颖点**：它解决的不是“Agent 能不能写代码”，而是人如何同时监督多个长时间运行的 Agent。空间布局、持久状态、明确的人类介入点和移动通知，都是新型管理问题。

**创业启发**：做面向团队的 Agent Mission Control：任务队列、预算、权限审批、工作树隔离、状态 SLA、失败分类、手机审批和结果验收。可与现有 IDE/CLI 共存，不必自己做模型或 coding agent。

**风险**：开发者工具付费意愿有限，且平台方会逐步补齐多 Agent UI。壁垒应来自团队治理、跨运行时兼容和运行数据，而不是无限画布本身。该项目采用 BUSL 1.1，禁止直接提供竞争性产品/服务，借鉴前需看清许可证。

### 4.7 [asciimoo/hister](https://github.com/asciimoo/hister) — 用户自己的全文搜索引擎

**它是什么**：索引用户访问过的网页和本地文件全文，通过 Web、终端和 MCP 提供搜索；默认无遥测、无强制云服务，可选语义搜索，多用户数据隔离。

**新颖点**：相比只保存浏览器标题和 URL，它保存页面内容；相比把所有资料上传到 SaaS，它允许用户控制服务器；相比单纯个人搜索，它直接成为 Agent 的检索入口。

**创业启发**：面向研究、咨询、销售、投研或法务做“可引用的工作记忆”，将网页快照、版本变化、来源可信度、团队权限和交付物引用连起来。收费点是团队同步、连接器、保留策略、证据导出和私有部署。

**风险**：网页版权、敏感信息、公司数据保留政策和索引安全需要产品级处理。主项目为 AGPLv3。

### 4.8 [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) — 带 provenance 的个人知识库

**它是什么**：把来源资料转成互相链接、带引用的 Obsidian Markdown；保留内容寻址的原始来源，维护 claim/source ledger，并用单一协调者提交可恢复事务，避免并行 Agent 互相覆盖。

**新颖点**：很多“AI 第二大脑”只自动摘要；该项目把来源、冲突、置信度、新鲜度和审核状态也变成一等数据，并确保没有 Agent 时文件仍然可用。

**创业启发**：面向高价值知识工作做“证据优先知识生产”，如尽调、科研综述、政策研究和医疗文献跟踪。卖点应是引用完整性、更新监控和审阅工作流，而不是笔记生成数量。

**风险**：Obsidian/Notion/模型厂商都可能覆盖通用功能；必须选择对来源质量和审阅链真正敏感的垂直行业。

### 4.9 [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) — 人与 Agent 共享浏览器，但各自工作

**它是什么**：Agent 在隔离 Space 中并行操作页面，能使用迁移来的登录态、Cookie、扩展和书签，同时不打乱用户当前标签；通过 JavaScript 工具一次组合多步浏览器操作。

**新颖点**：浏览器自动化的真实瓶颈往往不是点击，而是登录态、并发冲突、人类接管和 token 成本。它把这些作为浏览器自身能力，而不是外部自动化框架的补丁。

**创业启发**：更安全的方向是“已登录浏览器的权限代理”：按网站/动作授予权限，高风险操作二次确认，敏感字段屏蔽，完整回放，短期凭证和任务结束即撤权。企业会为安全、审计和稳定性付费。

**风险**：共享真实 Cookie 是高风险能力。Prompt injection、误提交、账户封禁、隐私泄漏和恶意 Skill 都可能造成直接损失；如果没有强权限边界，不应自动执行付款、发布或删除。

### 4.10 [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) — 垂直工作流胜过通用助手

**它是什么**：从个人档案、职位抓取、匹配评分、定制 CV/求职信、第二 Agent 审阅、PDF/ATS 检查，一直到面试、结果跟踪和技能差距分析的完整本地工作流。

**新颖点**：它不只是生成一封求职信，而是保存申请状态和历史材料，明确禁止编造经历，并在最终 PDF 和 ATS 文本层做验证。作者公开了 69 次申请、20 次初面和 1 个签约的个人结果，但这仍是单个案例，不是普遍转化率证据。

**创业启发**：把模式迁移到高摩擦、材料密集、结果可追踪的流程，例如政府补贴申请、供应商投标、认证申报、保险理赔或移民材料准备。护城河来自本地规则、模板、验证器和结果反馈，而不是文本生成。

**风险**：求职市场竞争激烈且平台反自动化；个人数据高度敏感。产品应辅助决策和起草，不应未经确认批量投递。

### 4.11 [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) — Agent 供应链安全

**它是什么**：覆盖 Agent、Skill、MCP、AI 基础设施和 LLM 越狱评估的红队平台。

**新颖点**：传统 AppSec 工具主要检查依赖和代码；Agent 时代还要检查 Skill 指令、工具权限、MCP 服务、模型行为、间接 Prompt injection 和跨工具数据泄漏。

**创业启发**：优先做 CI 中的“Agent manifest + 最小权限 + 动态沙箱测试”，再扩展到组织内 Skill/MCP 注册表、签名、SBOM、策略和运行时阻断。安全预算通常比个人效率工具更稳定。

**风险**：安全产品必须靠可复现检测率、低误报和更新速度建立信任；仅包装公开提示词攻击样例难以形成壁垒。

### 4.12 [jundot/omlx](https://github.com/jundot/omlx) — Apple Silicon 上的本地模型服务层

**它是什么**：面向 Apple Silicon 的 LLM 推理服务器，主打 continuous batching、SSD caching，并通过 macOS 菜单栏管理。

**新颖点**：它瞄准的不是单次本地聊天，而是让一台 Mac 成为多个本地应用/Agent 可共享的模型服务节点，强调批处理、缓存和运维体验。

**创业启发**：面向小团队提供“办公室内 AI appliance”：自动选模、缓存、配额、审计、离线知识库和设备健康管理。也可服务设计工作室、律所等希望数据不离开办公室的团队。

**风险**：硬件上限、模型更新速度和云 API 降价会挤压空间。价值必须落在一键运维、隐私和团队治理，而不只是推理速度。

## 5. 从项目到可验证创业题目

下面是根据榜单组合出的机会，不是现有项目功能的简单复制。

| 机会 | 灵感来源 | 最小可售产品 | 90 天验证指标 | 综合判断 |
|---|---|---|---|---|
| 垂直 Agent 审计与审批层 | Maka + Buzz + AI-Infra-Guard | 接入 2 个主流 coding/office Agent；记录工具调用、权限、结果、成本；可回放和导出 | 5 家设计伙伴；每周至少 100 次真实执行；审计记录被实际用于验收/复盘 | **A：最值得验证** |
| 团队 Memory Governance | OpenViking + TencentDB Memory + claude-obsidian | 记忆来源、ACL、TTL、冲突、删除、评测；支持 2 种 Agent | 跨会话重复解释下降 30%；错误记忆可定位；3 个团队愿付费 | **A：需求强，竞争也强** |
| 端侧 Tool-Calling SDK | Needle | 选一个硬件平台和 20–50 个动作；离线、置信度升级、微调工具链 | 3 个硬件 POC；目标任务准确率/延迟/RAM 达标；至少 1 个付费定制 | **A：技术壁垒高** |
| Agent Mission Control | nodeterm + Buzz | 跨 CLI 状态、预算、工作树、移动审批和失败告警 | 用户同时运行 ≥3 Agent；周留存 >40%；每周至少 5 次移动审批 | **B+：分发快，平台挤压明显** |
| 私有工作记忆 | Hister + claude-obsidian | 浏览器/文件索引、来源快照、引用导出、团队权限 | 每用户周检索 ≥20 次；引用进入正式交付物；资料找回时间下降 50% | **B+：应垂直化** |
| 登录态浏览器权限代理 | ego-lite + AI-Infra-Guard | 网站/动作级授权、敏感字段遮蔽、审批、回放 | 1,000 次任务无越权；高风险动作确认率；完成率显著高于无登录自动化 | **B+：价值高，安全责任大** |
| 跨品牌设备控制平台 | OpenLogi | 只支持一个痛点品类；GUI + CLI + 企业配置策略 | 1,000 台活跃设备；支持工单可控；至少 2 家企业批量部署 | **B：非 AI，但更可能形成耐久壁垒** |
| 地域/行业申请工作流 | ai-job-search | 一个国家/行业的材料生成、规则校验、状态追踪 | 50 个完整案例；材料错误率下降；按成功节点或订阅付费 | **B：执行导向，需避开平台违规** |

## 6. 不建议直接追逐的热门方向

### 6.1 通用 Agent 外壳

`openai/codex`、`earendil-works/pi`、`t3code`、`jcode`、Maka 等已形成密集竞争。没有专属分发、垂直数据或独特运行时能力时，再做一个“更好看的通用 coding agent”很难建立长期优势。

### 6.2 通用模型网关

[OmniRoute](https://github.com/diegosouzapw/OmniRoute) 展示了多供应商、额度感知回退和 token 压缩的强需求，但模型网关容易陷入价格战，并承受供应商条款、密钥安全、稳定性和模型路由质量责任。更好的切口是为一个高价值工作流提供可验证路由策略，而不是只卖统一 endpoint。

### 6.3 Skill/Prompt 内容包

`mattpocock/skills` 月增 49,777 Star，`reverse-skill`、`i-have-adhd`、`book-to-skill` 也高速增长，但内容文件复制成本接近零。`book-to-skill` 还带来图书版权、派生内容和内部资料泄露风险。除非有评测、更新、签名、组织治理或独家内容，否则不应把它当独立 SaaS。

### 6.4 一键 AI 短视频与“流量机器”

[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 证明自动视频生产需求强，但生成内容供给已高度同质化，平台政策和获客成本才是瓶颈。若进入，应聚焦有私有素材和业务结果的垂直场景，例如房产、工业培训或电商 SKU，而不是批量泛内容。

### 6.5 自动交易 Agent

[TradingAgents](https://github.com/TauricResearch/TradingAgents) 热度极高，但真实交易涉及数据泄漏、回测偏差、执行滑点、牌照和投资者损失责任。没有金融合规、风险系统和可验证实盘记录，不适合作为轻量创业切口。

### 6.6 依赖隐私敏感或平台灰区的增长工具

[holehe](https://github.com/megadose/holehe) 根据“忘记密码”流程判断邮箱是否在多个站点注册，容易触及隐私、滥用和站点反自动化边界。类似能力如果产品化，应优先限定为用户本人数据检查或企业授权安全审计。

## 7. 建议的下一步验证计划

### 第 1 周：只选一个“高频且有责任”的工作流

从现有资源最熟悉的行业里选一个，例如软件外包验收、财税资料处理、客户支持操作或研发 Agent 管理。不要先决定技术栈，先访谈 10–15 个目标用户，确认：

- Agent 现在实际执行了什么动作；
- 哪一步必须由人批准；
- 出错后谁负责、如何找到证据；
- 哪些上下文每次都要重复；
- 现在为错误、等待或重复工作付出了多少钱。

### 第 2–4 周：做“薄控制层”，不要造模型

接入现成 Agent，完成一个可演示闭环：任务进入 → 工具权限 → 运行事件 → 人类审批 → 结果验收 → 记忆沉淀。所有记录都能导出，且敏感字段默认不进入第三方模型。

### 第 5–8 周：用真实任务测量，而不是测点赞

至少跟踪：任务成功率、人工介入次数、平均等待时间、重复解释减少量、错误记忆率、每次任务模型成本和审计记录使用次数。只有这些指标改善，才说明产品不是一个漂亮 Demo。

### 第 9–12 周：提前收费

向设计伙伴收取部署费或月费，即使金额不高。对企业方向，优先出售私有部署、权限模板、审计导出和支持；对端侧方向，优先出售 POC、硬件适配和模型定制。没有付费信号时，继续缩窄场景，不要用新增 Star 替代商业验证。

## 8. 完整榜单快照

### 8.1 Daily（16 个）

| # | 项目 | 语言 | 总 Star | 今日新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 19,084 | 1,698 | GPT-Image 2 提示词工程与模板库 |
| 2 | [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 1,879 | 351 | Claude 社区插件目录镜像 |
| 3 | [ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | 35,578 | 1,265 | 本地 AI 求职全流程 |
| 4 | [apache/maka](https://github.com/apache/maka) | TypeScript | 3,447 | 543 | 本地优先、事件留痕的 Agent 工作区 |
| 5 | [TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 100,435 | 218 | 多 Agent 金融交易框架 |
| 6 | [claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 12,906 | 813 | 带来源的本地 AI 第二大脑 |
| 7 | [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 49,211 | 569 | AI 工程学习与实作材料 |
| 8 | [openhuman](https://github.com/tinyhumansai/openhuman) | Rust | 37,887 | 542 | 本地记忆、Agent 编排与研究助手 |
| 9 | [omarchy](https://github.com/basecamp/omarchy) | Shell | 31,473 | 1,083 | 强主张的现代 Linux 环境 |
| 10 | [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 134,357 | 161 | Agent、Skill、RAG 示例合集 |
| 11 | [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | 未标注 | 207,350 | 830 | 单文件 coding-agent 行为规则 |
| 12 | [openai/codex](https://github.com/openai/codex) | Rust | 118,349 | 1,181 | 终端 coding agent |
| 13 | [marin](https://github.com/marin-community/marin) | Python | 2,228 | 231 | 基础模型研发框架 |
| 14 | [ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 111,374 | 982 | 让 Agent 少写不必要代码的规则/工具 |
| 15 | [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 34,154 | 55 | Anthropic 官方 Claude 插件目录 |
| 16 | [hister](https://github.com/asciimoo/hister) | Go | 2,889 | 98 | 私有网页与文件全文搜索 |

### 8.2 Weekly（15 个）

| # | 项目 | 语言 | 总 Star | 本周新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [modular](https://github.com/modular/modular) | Mojo | 29,174 | 2,354 | MAX 与 Mojo 平台 |
| 2 | [OpenLogi](https://github.com/AprilNEA/OpenLogi) | Rust | 16,549 | 7,648 | Logitech Options+ 本地优先替代 |
| 3 | [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 116,582 | 9,019 | AI 自动生成短视频 |
| 4 | [omarchy](https://github.com/basecamp/omarchy) | Shell | 31,473 | 4,601 | 强主张的现代 Linux 环境 |
| 5 | [claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 1,879 | 1,199 | Claude 社区插件目录镜像 |
| 6 | [apache/maka](https://github.com/apache/maka) | TypeScript | 3,447 | 1,769 | 本地优先、事件留痕的 Agent 工作区 |
| 7 | [OpenViking](https://github.com/volcengine/OpenViking) | Python | 33,364 | 4,211 | Agent 上下文数据库 |
| 8 | [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 19,084 | 5,329 | GPT-Image 2 提示词与模板库 |
| 9 | [openai/codex](https://github.com/openai/codex) | Rust | 118,349 | 11,424 | 终端 coding agent |
| 10 | [ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | 4,693 | 2,073 | coding agent 长期记忆与跨厂商交接 |
| 11 | [omlx](https://github.com/jundot/omlx) | Python | 20,682 | 1,432 | Apple Silicon 本地 LLM 推理服务 |
| 12 | [public-apis](https://github.com/public-apis/public-apis) | Python | 470,575 | 6,747 | 免费 API 目录 |
| 13 | [AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | 5,928 | 1,247 | Agent/Skill/MCP/LLM 红队平台 |
| 14 | [posthog](https://github.com/PostHog/posthog) | Python | 39,184 | 1,426 | 产品分析、可观测与自动化平台 |
| 15 | [nodeterm](https://github.com/eneskirca/nodeterm) | TypeScript | 1,290 | 375 | 多 Agent 空间化终端与任务画布 |

### 8.3 Monthly（21 个）

| # | 项目 | 语言 | 总 Star | 本月新增 | 简述 |
|---:|---|---|---:|---:|---|
| 1 | [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 24,495 | 15,253 | 团队级 Agent 记忆资产中心 |
| 2 | [omarchy](https://github.com/basecamp/omarchy) | Shell | 31,473 | 6,841 | 强主张的现代 Linux 环境 |
| 3 | [buzz](https://github.com/block/buzz) | Rust | 30,725 | 19,846 | 人与 Agent 共用签名事件空间 |
| 4 | [reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 29,362 | 20,443 | 逆向/授权渗透 Skill 路由包 |
| 5 | [i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | 24,357 | 14,431 | 让 coding agent 输出更直接的 Skill |
| 6 | [book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | 25,600 | 15,982 | 把技术书 PDF 转为 Claude Code Skill |
| 7 | [AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 67,001 | 14,291 | 12 周 AI 入门课程 |
| 8 | [t3code](https://github.com/pingdotgg/t3code) | TypeScript | 20,519 | 5,821 | AI coding 工具 |
| 9 | [needle](https://github.com/cactus-compute/needle) | Python | 9,205 | 5,861 | 14MB 端侧工具调用模型 |
| 10 | [OpenViking](https://github.com/volcengine/OpenViking) | Python | 33,364 | 6,107 | Agent 上下文数据库 |
| 11 | [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | TypeScript | 55,432 | 25,758 | 多模型网关、额度回退与压缩 |
| 12 | [ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 13,563 | 10,370 | 面向 Agent 的共享登录态浏览器 |
| 13 | [ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 42,286 | 22,917 | AI Agent 原理与工程开源书 |
| 14 | [modular](https://github.com/modular/modular) | Mojo | 29,174 | 2,617 | MAX 与 Mojo 平台 |
| 15 | [pi](https://github.com/earendil-works/pi) | TypeScript | 97,393 | 20,131 | 统一 LLM API、Agent loop、TUI 与 CLI |
| 16 | [holehe](https://github.com/megadose/holehe) | Python | 14,232 | 2,448 | 检查邮箱在不同站点的注册情况 |
| 17 | [apache/maka](https://github.com/apache/maka) | TypeScript | 3,447 | 2,267 | 本地优先、事件留痕的 Agent 工作区 |
| 18 | [jcode](https://github.com/1jehuang/jcode) | Rust | 18,583 | 7,363 | 低内存 coding-agent harness |
| 19 | [ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | 4,693 | 3,321 | coding agent 长期记忆与跨厂商交接 |
| 20 | [OpenLogi](https://github.com/AprilNEA/OpenLogi) | Rust | 16,549 | 8,866 | Logitech Options+ 本地优先替代 |
| 21 | [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 236,999 | 49,777 | 工程师 Agent Skills 集合 |

## 9. 最终判断

这期 GitHub Trending 的核心信号可以概括为一句话：**Agent 已经不缺“聪明”，开始缺可靠的工作环境、长期记忆、权限边界、可审计协作和真实世界接口。**

对创业者而言，最危险的选择是追逐最显眼的表层热度——通用 Agent、提示词包、模型网关和批量内容；更有机会的选择是围绕一个高价值工作流，解决责任、状态、证据、权限、数据和交付。先让五个真实客户每周离不开，再谈平台化。
