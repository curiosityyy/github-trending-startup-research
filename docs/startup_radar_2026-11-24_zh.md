# Startup Radar 创业机会日报｜2026-11-24

> UTC快照日：2026-11-24。公开证据整理截止：2026-11-24T01:24:06Z。
> GitHub三窗采于2026-11-24T01:21:13Z；Show HN互动指标采于2026-11-24T01:21:47Z。其他snapshotAt表示本批次整理截止，不代表各站同时更新。
> 6款当前发布、6个七日内社区项目、10个Trending仓库、7条市场信号、7条具体反馈；共36条样本、7个跨源主题、5个未验证机会。

本期优先验证**Walmart新类目商品的字段映射预检（74分）**，其次是**移动输入流程的模拟器与真机复现包（68分）**。前者有两家商户的近期相近主诉，但根因未知；后者有复现负担和独立项目的输入案例，但尚无付款证据。[商户反馈](https://apps.shopify.com/marketplace-connect/reviews)、[移动测试讨论](https://www.producthunt.com/products/mobile-agent-testers)、[输入案例](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md)。

本期最影响MVP的反证是：Walmart已有字段schema，Shopify已有映射和Flow测试，移动开源工具也已有复现及版本比较。创业假设因此聚焦客户资料整理、业务案例与有限人工验收；仍需证明原生工具之外的付费价值。[Walmart schema](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements)、[Shopify映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements)、[Flow测试](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow)、[移动工具README](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)。

## 1. 方法与时间口径

研究前读取[研究方法](startup_radar_method_zh.md)、现有[结构化数据](../src/data/radar.json)与[上一期11-23日报](startup_radar_2026-11-23_zh.md)。按发布、技术、资本、需求四类信号核对；一手文档和产品说明优先，新闻与用户留言保留各自证据身份。

沿用100分权重：**需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10**。分数用于安排研究顺序，不代表成功率、TAM或投资回报。所有买家画像、样本量、MVP、付款目标和停止条件都是研究设计；本期没有客户访谈、产品运行或付款验证。

分别标注：具名主诉、使用负担自述、情景提问、作者答复、官方能力、项目自述、融资报道、模型估计和研究推断。同一产品的PH页与README不算独立买家；两个不同供给不等于两个需求样本。Stars、票数、评论、融资和评级都是信号，不能替代采购或收入。

“当前发布”指11-24 UTC读取的PH Launching Today批次，可能对应平台另一时区的日期，也包含已有产品更新。Polylane与Plango明确是再次发布；naturefunding作者留言早于本批次，六款不统称11-24 UTC首次上线。[当前列表](https://www.producthunt.com/)、[更新记录](https://www.producthunt.com/products/polylane)、[目录留言](https://www.producthunt.com/products/naturefunding-org)。

## 2. 相比上一期的实质变化

- **发布6/6换选。** 从本地知识、视频制作和网站编辑转到站内分析、客户反馈、事故调查、代理活动、资助资料及移动验收；六个产品页均有本期读取依据。[当前批次](https://www.producthunt.com/)。
- **社区6/6换选。** 六项投稿均晚于上一期截止；新样本覆盖内容接口、模型校准、数学输入、浏览器脱敏、依赖扫描与本地运行时。投稿日期不等于项目首次发布日期。[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794878473%2Ccreated_at_i%3C%3D1795483273&hitsPerPage=100)。
- **Trending精选换入9个、保留opensre。** 三窗本次可见16/13/18条，去重41个；上一期记录16/13/17、去重40个。只比较采样覆盖，不据此声称某仓库首次登榜或计算增长率。[日榜](https://github.com/trending?since=daily)、[周榜](https://github.com/trending?since=weekly)、[月榜](https://github.com/trending?since=monthly)。
- **市场换选6条、RFS复核1条。** 新增11-23的Crunchbase估值模型分析；中国改看杉数与越凡，全球融资改看Noeri，YC公司改看Xulux与Vorflux。Noeri报道在11-16，RFS版本未变，不能一并记作今天新融资。[新市场分析](https://news.crunchbase.com/venture/unicorn-startup-current-valuations-thinking-machines-sierra-crunchbase/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[Noeri日期](https://news.bloomberglaw.com/tech-and-telecom-law/nvidia-backs-genius-grant-winners-push-for-cost-efficient-ai)、[RFS](https://www.ycombinator.com/rfs)。
- **反馈7/7换选。** 五条商城反馈都在最近30日；两条PH负担自述来自同一位JC，不能当作两个独立买家。日期与证据身份在P表逐项列出。
- **五项机会重新构建。** 上期运费、文案保留、订阅购买入口、脚本许可、报价依据退出本期精选，但没有证据表明它们已解决。新排序由本次样本决定，不把不同假设的分差解释为同一市场涨跌。

## 3. 来源覆盖与访问情况

| 来源 | 覆盖 | 观察及边界 |
| --- | --- | --- |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 16 / weekly 13 / monthly 18 | 三窗均为Language Any / Spoken Language Any；47条窗口记录、41个去重仓库，精选10个；相较上一期精选换入9个、保留opensre。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 六款均在当前Launching Today；Polylane为第11次发布、Plango为第2次。相对时间留言可能早于当前批次，不据此推算UTC首发时间。 [Polylane更新](https://www.producthunt.com/products/polylane)、[Plango更新](https://www.producthunt.com/products/plango) |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794878473%2Ccreated_at_i%3C%3D1795483273&hitsPerPage=100) | 1,107匹配 / 最新100条 / 精选6 | 固定七日11-17T01:21:13Z至11-24T01:21:13Z；精选投稿均在11-23或11-24。只浏览最新100条，非全周热度榜；指标采于01:21:47Z。  |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 分类目录 / 2家公司详读 | 总目录无可读正文；官方开发工具目录与Xulux、Vorflux公司页可读。批次和Active是目录字段，能力与转化效果属于公司自述。 [总目录](https://www.ycombinator.com/companies)、[Xulux](https://www.ycombinator.com/companies/xulux)、[Vorflux](https://www.ycombinator.com/companies/vorflux) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | 最新可见Winter 2027 / 复核 | 版本未见变化；转看自有模型、垂直模型与业务评估。属于投资方命题，不是今天新增的客户订单。  |
| [Crunchbase News / Noeri](https://news.crunchbase.com/venture/unicorn-startup-current-valuations-thinking-machines-sierra-crunchbase/) | 1篇新市场分析 / 1笔融资复核 | 11-23估值文章是模型估计；Noeri官网确认$110M，11-16媒体报道、11-20周榜可读。没有把模型估值或周榜日期写成新融资交割。 [周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[Noeri官网](https://noeri.ai/)、[11-16报道](https://news.bloomberglaw.com/tech-and-telecom-law/nvidia-backs-genius-grant-winners-push-for-cost-efficient-ai) |
| [36氪 / 瑞财经](https://pitchhub.36kr.com/financing-flash) | 2条中国新样本 | 36氪列表显示杉数14小时前、越凡16小时前；详情仅页面壳。越凡另核对11-23瑞财经正文；杉数官网只用于业务定位，未找到本轮一手融资公告。 [杉数详情](https://36kr.com/newsflashes/4082182799250307)、[越凡详情](https://36kr.com/p/4082087493112704)、[越凡公开正文](https://www.lejucaijing.com/news-7530548137208509785.html)、[杉数官网](https://www.shanshu.ai/) |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 无可用记录 | 首页返回412后停止；不登录、不绕过验证，中国融资采用其他可读公开来源。  |
| [Shopify App Store](https://apps.shopify.com/marketplace-connect/reviews) | 4款可读 / 5条商城主诉入选 | 入选Marketplace Connect、Flow、Hextom三款的五条近30日反馈；另读Digital Products作复核，Order Printer两个候选URL未读到。没有可靠单条星级，不称全量最新差评。 [Flow](https://apps.shopify.com/flow/reviews)、[Hextom](https://apps.shopify.com/bulk-product-edit/reviews)、[Digital Products](https://apps.shopify.com/digital-downloads/reviews) |
| [官方机制 / PH讨论](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements) | Walmart schema / Flow测试 / 2条使用负担 | 官方已有字段映射和无写入测试；Mobile Agent Testers当前采用模拟器。两条PH使用负担来自同一留言者JC，不计为两个独立买家。 [原生映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements)、[原生测试](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow)、[移动测试](https://www.producthunt.com/products/mobile-agent-testers)、[反馈跟进](https://www.producthunt.com/products/modem) |

GitHub三个页面均直接读到Language Any / Spoken Language Any；窗口记录有重复，增量不能跨窗相加。精选是研究采样，不是将前十名当作商业排行。

Show HN固定范围为**2026-11-17T01:21:13Z至2026-11-24T01:21:13Z**，返回1,107匹配；检视最新100条标题与链接、详读六项原文，没有分页普查整周。最早入选项也在11-23，故样本明显偏向最新一天。指标取01:21:47Z的精简重读响应，之后的points/comments可能变化。[查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794878473%2Ccreated_at_i%3C%3D1795483273&hitsPerPage=100)。

商城读取默认评论页，未声称最新排序或全量低分筛选。四款可读应用为[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews)、[Flow](https://apps.shopify.com/flow/reviews)、[Hextom](https://apps.shopify.com/bulk-product-edit/reviews)、[Digital Products](https://apps.shopify.com/digital-downloads/reviews)；单条星级未可靠提取。只使用具名原始评论，不使用商店自动摘要；PH标为Likely AI的留言未纳入需求。

## 4. 来源快照

L、T、G、M、P编号对应结构化数据顺序。产品功能、项目效果和评论中的故障均未经本期实际运行或复现。

### 4.1 当前产品发布

| 编号 / 产品 | 发布口径 | 观察与证据身份 |
| --- | --- | --- |
| [L1 Letter Visitors](https://www.producthunt.com/products/visitors) | 11-24 UTC读取Launching Today；首次UTC发布时间未核验 | 产品称在站内显示访客与公司信息、识别AI访问并回放会话；身份识别准确性和合规性未独立验证，不采用厂商合规答复作法律结论。 当前发布 / 厂商自述。  |
| [L2 Modem](https://www.producthunt.com/products/modem) | 11-24 UTC读取Launching Today | 聚合客户渠道、建立工单或交给编码工具，并在修复后跟进；作者说明分流规则可配置。现成能力构成竞争，App Store评论接入仍是页面提问。 当前发布 / 厂商自述与答复。  |
| [L3 Polylane Swarms](https://www.producthunt.com/products/polylane) | 11-24 UTC读取Launching Today；第11次PH发布 | 作者称并行排查候选原因、共享证据并由其他代理复核；是付费计划中的更新，不把多代理复核当成独立人工审计或可靠性实测。 当前更新发布 / 厂商自述。  |
| [L4 Plango](https://www.producthunt.com/products/plango) | 11-24 UTC读取Launching Today；第2次PH发布 | 产品称监测编码代理、敏感文件与网络活动；本地运行和保护范围未测试，不把无人值守宣传解释成安全保证。 当前更新发布 / 厂商自述。  |
| [L5 naturefunding.org](https://www.producthunt.com/products/naturefunding-org) | 11-24 UTC读取Launching Today；作者留言显示5d ago | 目录将资格、期限连接到资助方原文；作者称未明示期限保留not stated，变更经审阅。开放申请过滤已存在，不能据提问推导缺功能。 当前发布批次 / 厂商自述；非今日才开始开发。  |
| [L6 Mobile Agent Testers](https://www.producthunt.com/products/mobile-agent-testers) | 11-24 UTC读取Launching Today；开源发布 | 当前用Android emulator与iOS Simulator探索用户流程并产出截图；README已有复现和版本比较。物理Android设备列在贡献方向，未验证真机或TestFlight支持。 当前发布 / 一手README与讨论；未运行。 [项目原文](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md) |

### 4.2 七日内技术社区

points/comments均为**2026-11-24T01:21:47Z**快照；下列数值是社区互动，不表示活跃用户或付费客户。

| 编号 / 项目 | 投稿UTC / points / comments | 原文与限制 |
| --- | --- | --- |
| [T1 microfeed](https://news.ycombinator.com/item?id=50622072) | 2026-11-24T01:03:42Z / 2 / 0 | 官方文档描述运行在用户Cloudflare账户的CMS，通过界面、CLI和MCP管理内容并提供多种发布出口；自托管与功能说明不是运营成本或可靠性实测。 [项目原文](https://docs.microfeed.org/) |
| [T2 judge-audit](https://news.ycombinator.com/item?id=50620311) | 2026-11-23T22:28:32Z / 1 / 0 | README描述按人工标签回放判断、校准与留出检查；强调公开翻译样本、近似界限和模型版本限制，且研究计划未经外部人工审阅。未复跑或转用其性能数字。 [项目原文](https://github.com/kunko-ai-labs/judge-audit/blob/main/README.md) |
| [T3 react-native-math-keypad](https://news.ycombinator.com/item?id=50621077) | 2026-11-23T23:32:13Z / 1 / 0 | 作者提供React Native数学输入组件，并记录快速输入、焦点与硬件键盘的已修复问题；硬件模块仅iOS，Android尚未运行，历史缺陷不是当前未修复故障。 [项目原文](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md) |
| [T4 Offthread](https://news.ycombinator.com/item?id=50619720) | 2026-11-23T21:36:57Z / 2 / 0 | 官网描述发送前在浏览器替换个人字段，并明确可能漏检；本地替换不等于所有处理离线或零保留。仅核对公开说明。 [项目原文](https://offthread.chat/) |
| [T5 slop-deps](https://news.ycombinator.com/item?id=50612030) | 2026-11-23T14:23:09Z / 3 / 1 | README描述静态扫描与注册表探测，区分发现不存在的包和UNKNOWN；包存在不代表安全，作者测试、速度及审计宣传未独立核验。 [项目原文](https://github.com/viditx/slop-deps/blob/main/README.md) |
| [T6 GAL](https://news.ycombinator.com/item?id=50621748) | 2026-11-24T00:31:31Z / 3 / 0 | 官网当前描述沙箱、工具执行门和审计记录；HN标题提到逐次权限及回滚，不能仅凭标题认定当前逐调用批准或完整回滚语义。 [项目原文](https://agent-home.ai/index.html) |

judge-audit的公开研究结果不进入本期评分或模型优劣排名。它自己说明样本、模型版本、近似界限和外部人工审阅限制；本期只将它视为可进一步检查的评估实现。数学键盘的已修复案例用于理解测试边界，不能冒充当前未修复缺陷。[评估项目](https://github.com/kunko-ai-labs/judge-audit/blob/main/README.md)、[键盘项目](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md)。

### 4.3 GitHub Trending三窗

所有窗口数字采于**2026-11-24T01:21:13Z**，为榜单显示的区间新增Stars，非仓库总Stars。以下均未安装运行。

| 编号 / 仓库 | 窗口增量 / 榜单 | 定位与解释边界 |
| --- | --- | --- |
| [G1 mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | daily +761 stars；[daily榜](https://github.com/trending?since=daily) | 榜单描述应用商店提交检查与隐私资料清单；不能据此确认最新法律要求或应用一定获批。 |
| [G2 cursor/plugins](https://github.com/cursor/plugins) | daily +397 stars；[daily榜](https://github.com/trending?since=daily) | 官方插件规范与插件库；仅作为扩展供给信号，没有企业安装量或采购证据。 |
| [G3 openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | daily +184 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位推理优化与部署工具；属于成熟工具的当前热度，未证明新模型在客户设备上达标。 |
| [G4 Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | daily +436 stars；[daily榜](https://github.com/trending?since=daily) | 上一期保留并刷新日窗；榜单定位CI/CD可靠性代理，未核验修复到实际发布的跟踪能力。 |
| [G5 GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | weekly +2,694 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单描述为编码代理提供网页实践知识；资料供给不能替代特定浏览器或设备验收。 |
| [G6 ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | weekly +2,966 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位代理与前端交互协议；可作可见操作流程的实现背景，未验证具体产品集成。 |
| [G7 dream-num/univer](https://github.com/dream-num/univer) | weekly +4,324 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单描述编辑、计算、协作与文件处理SDK；可作商家字段核对界面候选，非已适配Walmart。 |
| [G8 google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | daily +422 stars；weekly +2,572 stars；monthly +3,630 stars；[daily榜](https://github.com/trending?since=daily)、[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 同时出现在日、周、月窗；榜单描述与Stitch MCP配合的技能库，跨窗增量不能相加。 |
| [G9 cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | monthly +36,869 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单描述分阶段安全审查及结构化结果；独立核对能力为项目定位，不是本期安全验证。 |
| [G10 yetone/magpie](https://github.com/yetone/magpie) | monthly +20,747 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单描述菜单栏管理不同代理的模型接入；供应者切换不证明任务质量、权限或成本不变。 |

### 4.4 投资与市场

本期不声称发现11-24 UTC当日已交割的新融资。报道日期、相对发布时间、融资阶段与模型估计分开保存；缺失币种、轮次或交割日不补写。

| 编号 / 信号 | 日期与口径 | 观察 / 资本门槛 |
| --- | --- | --- |
| [M1 Crunchbase：独角兽估值模型与最近融资价](https://news.crunchbase.com/venture/unicorn-startup-current-valuations-thinking-machines-sierra-crunchbase/) | 报道2026-11-23；最近披露估值合计约$9T，模型估计约$11T | 文章比较最近融资估值与Current Valuation Model；这是模型估计的差额，不是新增融资、成交价格或创业公司收入。 数据提供方分析 / 模型估计。 资本门槛：市场背景；不直接评分。  |
| [M2 Noeri：企业自有、持续改进的AI](https://noeri.ai/) | 官网确认$110M；媒体2026-11-16报道，11-20周榜；轮次及估值不补写 | 公开报道列Menlo Ventures领投；官网确认融资金额。属于最近30日事件，企业工作流改进是产品方向，未核验收入、交割和客户效果。 公司官网金额 + 公开媒体报道。 资本门槛：高；模型研究与企业交付。 [11-16公开报道](https://news.bloomberglaw.com/tech-and-telecom-law/nvidia-backs-genius-grant-winners-push-for-cost-efficient-ai)、[11-20周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) |
| [M3 杉数科技：决策式AI融资](https://pitchhub.36kr.com/financing-flash) | 列表显示14小时前；数亿元人民币D轮 | 列表称国家绿色发展基金、上海集成电路产业投资基金、普陀资本等参与；官网可核对决策软件定位。详情页无正文，不把项目卡C++标签当成本次轮次。 媒体列表；官网仅复核业务。 资本门槛：专业求解与行业交付门槛高。 [本次详情（页面壳）](https://36kr.com/newsflashes/4082182799250307)、[业务官网](https://www.shanshu.ai/) |
| [M4 越凡创新：社区配送机器人融资](https://www.lejucaijing.com/news-7530548137208509785.html) | 36氪列表16小时前；瑞财经2026-11-23；新一轮数亿元，币种及轮次未明示 | 瑞财经称策源资本领投，资金用于技术、人才交付和城市机器人服务设施；现场运维与设施改造不能按普通软件MVP估算，不采用其业务规模宣传作实测。 公开媒体正文 + 36氪列表；未核验交割。 资本门槛：高；硬件、现场交付及运维。 [36氪列表](https://pitchhub.36kr.com/financing-flash)、[36氪详情（页面壳）](https://36kr.com/p/4082087493112704) |
| [M5 Xulux：开发工具的代理适配评估](https://www.ycombinator.com/companies/xulux) | 11-24复核；Winter 2027 / Active | 公司自述跨模型与运行框架生成评估、定位代理放弃工具的原因；是开发工具领域的供给，不能证明客服分流已有同样采购需求。 目录字段 + 公司自述。 [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [M6 Vorflux：从工单到测试PR](https://www.ycombinator.com/companies/vorflux) | 11-24复核；Fall 2026 / Active | 公司自述覆盖计划、实现、审阅和浏览器测试录像；测试PR不等于终端用户已获得修复，未测其交付能力。 目录字段 + 公司自述。 [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [M7 YC Winter 2027：自有模型与垂直反馈](https://www.ycombinator.com/rfs) | 11-24复核；最新可见仍为Winter 2027 | Own Your Intelligence强调工作流评估及持续反馈，Vertical Foundation Models强调领域数据与可核验奖励；轻量评估服务与基础模型研发资本门槛不同。 投资观点；非今日公告或订单。 资本门槛：评估服务可轻起步；自建模型及硬件较重。  |

杉数列表正文写D轮，但旁边公司卡显示C++；采用事件正文，不用公司卡标签覆盖。本轮融资尚无本期取得的一手公告。越凡的融资只保留可读媒体原文的“新一轮数亿元”，没有替其补充币种或轮次。Noeri官网确认金额，日期与领投方来自公开报道。[杉数列表](https://pitchhub.36kr.com/financing-flash)、[越凡正文](https://www.lejucaijing.com/news-7530548137208509785.html)、[Noeri官网](https://noeri.ai/)、[Noeri报道](https://news.bloomberglaw.com/tech-and-telecom-law/nvidia-backs-genius-grant-winners-push-for-cost-efficient-ai)。

### 4.5 具体客户反馈与商城缺口

应用整体评级采用本批次后一次可读页面：**Marketplace Connect 4.2 / 2,155评；Flow 4.7 / 15,785评；Hextom 4.9 / 1,216评**。数值可能随页面更新变化，不是下表单条评分，更不是故障率。[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews)、[Flow](https://apps.shopify.com/flow/reviews)、[Hextom](https://apps.shopify.com/bulk-product-edit/reviews)。

| 编号 / 反馈者 | 日期 / 证据身份 | 主诉与边界 |
| --- | --- | --- |
| [P1 shopnathans.com：Walmart缺字段导致上架失败](https://apps.shopify.com/marketplace-connect/reviews) | 评论2026-11-07；应用整体4.2 / 2,155评；近期具名主诉；未复现 | 商户称Walmart要求的数据没有可填写入口，担心需要去Walmart重建商品；本期未取得报错原文，不认定所有类目均缺字段。 [官方字段要求](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements)、[已有映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements) |
| [P2 Layerform Collective：metafield绕路也未完成同步](https://apps.shopify.com/marketplace-connect/reviews) | 评论2026-11-04；应用整体4.2 / 2,155评；近期具名主诉；支持进度亦为商户转述 | 商户称必需JSON字段缺失，Shopify元字段未被拾取，支持称进入待办；与P1是两家商户的相近主诉，根因及当前修复状态未知。 [官方上架流程](https://www.shopifymarketplaceconnecthelp.com/hc/en-us/articles/7234153202575-Listing-on-Walmart-US-Only) |
| [P3 1stMobile.UK：反复添加促销滥用者很繁琐](https://apps.shopify.com/flow/reviews) | 评论2026-11-12；应用整体4.7 / 15,785评；近期具名使用负担；未复现 | 商户用Flow处理重复领取免费优惠的订单，称经常需要逐个添加客户；尚不清楚现有规则为何如此配置，也没有核实误取消或损失。 [原生生成与模板](https://help.shopify.com/en/manual/shopify-flow/create/create-workflow)、[原生测试](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow) |
| [P4 Spieltraum Shop：工作流多后难以看清](https://apps.shopify.com/flow/reviews) | 评论2026-10-28；最近30日；应用整体4.7 / 15,785评；近期具名管理主诉；非低分断言 | 商户总体肯定工具，但称Flow数量多后可读性下降；未量化维护时间，也没有声称原生不能测试或没有组织功能。 [原生测试](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow) |
| [P5 Club Zoomie：批量价格更新有些慢](https://apps.shopify.com/bulk-product-edit/reviews) | 评论2026-11-20；应用整体4.9 / 1,216评；近期具名抱怨 + 已解决反证 | 商户称价格更新可用但较慢，未给商品量、等待时间或损失；同页另有已被厂商修复的履约地点问题，因此不据此推荐重造编辑器。  |
| [P6 JC：移动问题复现仍需真机步骤](https://www.producthunt.com/products/mobile-agent-testers) | 留言7h ago；相对时间不换算UTC；使用负担自述 + 能力提问 | 独立开发者自述键盘、权限及点击问题常需反复复现，并询问TestFlight；厂商当前说明为模拟器，不能把提问当成真机支持或购买承诺。 [项目当前范围](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)、[独立输入案例](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md) |
| [P7 JC：修好问题后忘记回复反馈者](https://www.producthunt.com/products/modem) | 留言5h ago；作者答复4h ago；使用负担自述；非Modem故障 | 开发者称同一问题的不同表达被拆成多项，修复后容易漏回访；Modem已提供聚合和跟进，剩余缺口需对照原生功能验证。  |

P1与P2是两家商户的相近问题，但没有类目、payload和根因记录；P3与P4属于不同维护负担，不能合并成同一故障重复率。P6与P7来自同一留言者、不同产品讨论，不增加独立客户数量。没有稳定单条评论链接时，以评论页、姓名、日期或相对时间定位。

## 5. 原生替代与反证

- **上架字段并非无规范可查。** Walmart提供按产品类型和版本取得schema的方式，也说明部分响应；Marketplace Connect已有字段映射。先排除配置、标识及版本差异，再研究残余缺口。[规范](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements)、[映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements)。
- **Flow已有原生测试。** 可保存或生成事件并检查条件；到首个修改动作停止，外部服务动作不能模拟实际返回。它不能证明完整执行链已验收，也无需另造一个基础测试界面。[官方测试边界](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow)。
- **工作流生成和模板也已存在。** 官方提醒业务逻辑仍需核对，部分订单字段异步补齐；服务假设定位为客户自己的规则与案例整理。[创建与Sidekick](https://help.shopify.com/en/manual/shopify-flow/create/create-workflow)。
- **移动工具已覆盖探索、复现和版本比较。** 真机方向不能只靠将“phone”译成物理设备；当前主要用模拟器，贡献列表中的物理Android支持不能当成已交付。[README](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)。
- **反馈跟进已有直接竞争。** Modem已提供问题聚合及跟进；关于App Store接入的提问不证明缺失，也不证明已经支持。需先试现成流程。[产品与讨论](https://www.producthunt.com/products/modem)。
- **慢不等于值得替换。** P5只说有些慢，没有耗时或损失；Hextom同页10-28的Hardcore Catholics称履约地点问题已由更新解决，11-23的The Haunted Game Cafe给出积极反馈。没有把这些已解决或正面案例计作持续故障。[原始评论](https://apps.shopify.com/bulk-product-edit/reviews)。

## 6. 跨源主题

| 主题 | 证据身份 / 来源 | 观察与推断 |
| --- | --- | --- |
| 上架前先核对类目字段与实际映射 | 两家近期主诉 + 两方官方机制；Shopify App Store、Walmart Developer、Shopify Help Center | 商户描述上架阻塞，Walmart提供版本化字段规则，Shopify已有映射流程。 推断：先交付一类商品的缺值与映射差异表；不把两条评论直接定性为全平台缺陷。 [商户反馈](https://apps.shopify.com/marketplace-connect/reviews)、[schema](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements)、[已有映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements) |
| 移动验收要保存设备、输入方式与复现路径 | 使用负担 + 项目历史案例 + 当前测试供给；Product Hunt、Show HN、GitHub项目原文 | Mobile Agent Testers使用模拟器；数学键盘项目记录触摸、焦点和硬件输入差异。 推断：给一个客户流程补上有限真机复现与可重跑步骤。已修复历史案例不能作为当前故障率。 [讨论](https://www.producthunt.com/products/mobile-agent-testers)、[测试范围](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)、[输入案例](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md) |
| 修复提交到客户可用之间仍需核对 | 一人负担自述 + 成熟供给竞争；Product Hunt、YC Company Directory、GitHub Trending | Modem已承诺跟进，Vorflux覆盖测试PR，opensre聚焦CI/CD；公开证据没有证明某产品漏掉发布状态。 推断：先离线核对反馈、版本和回复草稿之间的对应关系，验证剩余人工负担。 [反馈与已有能力](https://www.producthunt.com/products/modem)、[交付供给](https://www.ycombinator.com/companies/vorflux)、[CI/CD供给](https://github.com/Tracer-Cloud/opensre) |
| 业务规则维护需要可理解的案例集 | 商城使用负担 + 原生能力；跨源需求偏弱；Shopify App Store、Shopify Help Center、Product Hunt | Flow评论涉及频繁维护和数量增多后的可读性；原生测试与Sidekick已覆盖基础能力。 推断：面向服务商整理业务意图、责任人与回归案例，先验证服务价值；不复制测试引擎。 [使用负担](https://apps.shopify.com/flow/reviews)、[原生测试](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow)、[相邻可配置分流供给](https://www.producthunt.com/products/modem) |
| 自动分流阈值要按自己的标签校准 | 社区工具 + 厂商机制 + YC观点；缺采购证据；Show HN、Product Hunt、YC Requests for Startups | judge-audit测声明置信度与人工标签，Modem作者描述判断模型驱动分流；YC关注业务评估。 推断：从一个低风险客服队列做离线评估，拒绝把公开数据集结果直接当成客户上线阈值。 [工具及限制](https://github.com/kunko-ai-labs/judge-audit/blob/main/README.md)、[分流机制](https://www.producthunt.com/products/modem)、[投资命题](https://www.ycombinator.com/rfs) |
| 本地执行、脱敏与依赖检查解决不同边界 | 发布与技术供给；缺独立需求；Product Hunt、Show HN、GitHub Trending | Plango、GAL、Offthread和slop-deps分别涉及监测、执行、数据发送和依赖存在性。 推断：不要将任一层包装成端到端安全保证；本期暂不为通用安全代理单独评分。 [本机监测](https://www.producthunt.com/products/plango)、[运行时](https://agent-home.ai/index.html)、[脱敏](https://offthread.chat/)、[依赖检查](https://github.com/viditx/slop-deps/blob/main/README.md)、[审阅供给](https://github.com/cloudflare/security-audit-skill) |
| 资本与资料型产品都需要保留证据出处 | 新市场估计 + 中国融资媒体 + 发布供给；Crunchbase News、36氪、瑞财经、Product Hunt | Crunchbase区分模型估值与融资价；naturefunding公开原文和核对时间；中国机器人融资涉及现场交付。 推断：带出处的业务核对可轻起步，但不能由目录供给和融资反推付费需求；硬件和模型研发另按高资本评估。 [估值口径](https://news.crunchbase.com/venture/unicorn-startup-current-valuations-thinking-machines-sierra-crunchbase/)、[资助目录](https://www.producthunt.com/products/naturefunding-org)、[中国融资列表](https://pitchhub.36kr.com/financing-flash)、[机器人报道](https://www.lejucaijing.com/news-7530548137208509785.html) |

## 7. 五个机会与100分评分

全部是**未验证假设**。最高需求得分22/30；本期没有核验客户损失账本、付费采购或长期留存。跨源分评价机制互补，不把同一公司的多个页面当作独立验证。

| 机会 | 需求/30 | 买家/20 | 跨源/15 | 两周/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 Walmart新类目商品的字段映射预检 | 22 | 18 | 10 | 13 | 7 | 4 | 74 |
| 02 移动输入流程的模拟器与真机复现包 | 18 | 17 | 11 | 12 | 6 | 4 | 68 |
| 03 客户反馈与实际发布版本的回访核对 | 17 | 17 | 9 | 13 | 6 | 3 | 65 |
| 04 Shopify Flow规则维护与回归案例交接 | 17 | 17 | 8 | 12 | 6 | 3 | 63 |
| 05 客服分流模型换版前的标签与阈值复核 | 10 | 16 | 11 | 11 | 5 | 5 | 58 |

### 01 Walmart新类目商品的字段映射预检 — 74分

在商家反复提交前，用指定类目和版本的官方字段规则定位缺值、错误值与未映射字段，先交付一份可操作的差异清单。

**买家假设：** 使用者为目录运营；批准和付款人为通过Shopify进入Walmart美国站的小型品牌运营负责人或代运营商。买家画像尚待访谈。

**窄MVP：** 一店、一个类目、20个获授权SKU；商家提供商品导出和失败返回，匹配固定版本schema，输出字段来源、缺值、映射建议和unknown。先离线，不接管发布。

**证据判断：** P1、P2是两家商户在11月的相近上架主诉，形成重复需求线索；仍缺失败payload、商品类目与当前修复状态。 Walmart官方已有schema与条件字段，Marketplace Connect也有映射及逐步补数说明；机会只在商家数据到规则之间的整理交付，不声称平台没有校验器。 [两家商户主诉](https://apps.shopify.com/marketplace-connect/reviews)、[官方schema与版本](https://developer.walmart.com/us-marketplace/docs/get-item-setup-requirements)、[原生映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements)、[已有上架路径](https://www.shopifymarketplaceconnecthelp.com/hc/en-us/articles/7234153202575-Listing-on-Walmart-US-Only)。

**评分理由：** 两家近期主诉与官方机制相互补充，买家和交付对象清楚；没有核验损失、支付或所有类目通用性，需求分未给满。

**主要风险：** 字段可能已由新版本支持，或只是配置、产品标识问题；拿不到真实失败样本就无法分辨。schema版本不匹配和部分响应也会制造误报。

**两周实验：** 计划第一周访谈3家商家或代运营，先复核原生映射；第二周人工处理20个SKU，将一次提交需补字段的轮数、排查分钟和付费意愿作为验收，争取1次付费交付。未执行。

**停止条件：** 若原生配置即可解决、找不到可重复的映射差异，或客户拒绝提供必要字段和错误记录，则停止；不造通用多平台ERP。

**前20位潜客路径：** 拟从公开Walmart实施案例与Shopify服务商目录筛出前20家，优先找正在新增类目的团队。

**可积累资产：** 积累经客户确认的类目字段映射、版本变化和失败原因样本；界面和通用schema解析本身壁垒低。

**资本门槛：** 低；离线数据整理服务

### 02 移动输入流程的模拟器与真机复现包 — 68分

围绕一次键盘、字号或语言变更，交付有限设备上的可复现步骤和修复前后证据，先验证开发者是否愿为缩短复现过程付款。

**买家假设：** 使用者为移动工程师；批准和付款人为维护React Native或原生移动产品的小型工作室负责人。

**窄MVP：** 一个获授权测试构建、一条输入到提交流程、两组语言或字号设置；先在模拟器定位，再用客户已有的一台手机核对触摸、键盘与权限步骤，逐项记录通过、失败或unknown。

**证据判断：** P6是开发者的复现负担自述；T3独立项目记录输入速度和焦点问题，但那些案例已有修复，不能当成今天的新事故。 L6及README已有探索、复现和版本对照，当前主要在模拟器执行，物理Android设备仍列为贡献方向；本假设补充有限真机交付，不假设已有TestFlight驱动。 [用户负担](https://www.producthunt.com/products/mobile-agent-testers)、[现成工具范围与路线](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)、[独立输入案例及限制](https://github.com/rabbithole-school/react-native-math-keypad/blob/main/README.md)。

**评分理由：** 有具体工作负担和独立实现案例，交付范围可压缩；没有客户付费或真实机型覆盖结果，设备环节降低两周可验证性。

**主要风险：** 现成测试工具加一次人工检查可能足够；设备、签名与构建权限会增加交付成本。探索式代理报告需要人工复核，小矩阵不能代表全部机型。

**两周实验：** 计划访谈3个近期修改输入界面的团队；取得授权后对同一流程制作修复前后复现包，记录复现成功率、返工轮次和工程师节省时间，争取1次付费验收。未执行。

**停止条件：** 拿不到可安装测试构建或客户现有设备，模拟器已覆盖全部问题，或交付只产生重复且不可复现的报告时停止。

**前20位潜客路径：** 拟从公开移动应用更新记录和React Native服务商案例筛选前20家，优先最近增加语言、字号或键盘交互的团队。

**可积累资产：** 沉淀客户批准的设备配置、输入路径和回归步骤；不以模型自行报告的bug数量形成壁垒。

**资本门槛：** 低；使用已有设备。自建大规模真机云属高资本方向，本期不做。

### 03 客户反馈与实际发布版本的回访核对 — 65分

把一组重复反馈连到负责人确认的修复版本，生成可审阅的回访草稿，先核实修复后跟进是否仍有持续人工成本。

**买家假设：** 使用者为支持或产品负责人；批准和付款人为已有付费用户、支持由开发者兼任的小型软件公司创始人。

**窄MVP：** 一个产品、30条获授权反馈和最近一次发布记录；人工确认同义问题、实际可用版本及未解决项，输出匹配表和回复草稿，由客户自行决定发送。

**证据判断：** P7提供漏回访和重复归类的使用负担，但只有一名留言者，没有量化流失；与P6来自同一人，不重复计算独立买家。 Modem原生已提供归类和修复后跟进；Vorflux与opensre仅补充交付供给背景。公开页面没有证明这些产品缺少版本核对，本机会需用实际试用寻找剩余工作。 [负担及原生能力](https://www.producthunt.com/products/modem)、[测试PR供给](https://www.ycombinator.com/companies/vorflux)、[CI/CD供给](https://github.com/Tracer-Cloud/opensre)。

**评分理由：** 手工交付容易、使用者清晰，但独立需求样本少且现成竞争很强；不能仅靠添加一个连接器产品化。

**主要风险：** Modem或现有工单系统可能完全覆盖；评论者可能无法联系，修复也可能只对部分版本生效。错误归类会让客户收到不实的已修复通知。

**两周实验：** 计划先访谈3家小型软件团队并演示现成方案；仅对仍有缺口的一家核对30条反馈，衡量误归类、遗漏、人工分钟与实际付款。所有草稿由客户审阅，未执行发送。

**停止条件：** 原生产品已经准确覆盖、无法确认用户可用版本，或回访频率低到无需持续交付时停止订阅化。

**前20位潜客路径：** 拟从公开发布日志和支持案例寻找前20家小型软件团队；本期没有主动联系评论者。

**可积累资产：** 积累经人工确认的反馈簇、发布版本与回复历史；早期只是服务，通用语义聚类不构成壁垒。

**资本门槛：** 低；离线核对与草稿服务

### 04 Shopify Flow规则维护与回归案例交接 — 63分

把频繁修改的业务规则整理为负责人可读的意图和案例，利用原生测试验收条件变化，先服务正在交接或扩充Flow的团队。

**买家假设：** 使用者为店铺运营与实施工程师；批准和付款人为维护多条Flow的Shopify服务商负责人或商家运营负责人。

**窄MVP：** 一店、5条现有Flow、10个经商家确认的正反案例；整理触发条件、负责人、例外与变更记录，在原生测试模式核对首个写入动作前的分支，交付维护手册。

**证据判断：** P3、P4分别反映逐客户维护和工作流增多后的可读性；它们不是两起同类故障，也没有证明误取消订单。 官方已有测试事件、Sidekick生成与模板；测试在首个会修改数据的动作处停止，外部请求只显示预览。因此不能把该MVP描述为完整端到端回归平台。 [商城反馈](https://apps.shopify.com/flow/reviews)、[原生测试及边界](https://help.shopify.com/en/manual/shopify-flow/manage/test-workflow)、[生成、模板及异步字段](https://help.shopify.com/en/manual/shopify-flow/create/create-workflow)、[相邻分流自动化供给](https://www.producthunt.com/products/modem)。

**评分理由：** 有两种具体维护负担，但跨源主要是官方机制与相邻供给；原生替代强，先验证一次交接服务而非新应用。

**主要风险：** 现有标签、备注和培训可能足够。业务人员对促销规则的理解不一致，测试样本也可能遗漏真实事件的异步字段或外部返回。

**两周实验：** 计划访谈3家服务商，取得一店现有规则与批准样本；对一次变更前后做条件路径核对，记录解释时间、漏例和交接后再询问次数，争取1次付费交付。未执行。

**停止条件：** 一次原生培训便能消除负担、没有重复改动需求，或关键逻辑依赖无法模拟的外部动作时缩小范围或停止。

**前20位潜客路径：** 拟从公开Flow实施案例筛选前20家服务商，以交接、促销变更和多工作流维护为入口。

**可积累资产：** 经商家确认的业务案例、责任人和规则历史可积累；不要将手册包装成新风控模型。

**资本门槛：** 低；原生工具上的有限实施服务

### 05 客服分流模型换版前的标签与阈值复核 — 58分

在变更模型、提示词或语言覆盖前，检查判断与人工批准标签是否仍一致，并明确应转人工的范围；先交付离线评估。

**买家假设：** 使用者为支持运营和应用工程师；批准和付款人为已使用模型分配客服队列的小型B2B软件技术负责人。

**窄MVP：** 一个低风险队列、200条获授权且脱敏的历史记录；固定模型版本，划分校准与留出样本，按语言或问题类型展示错误、拒判与覆盖，输出标签争议和配置建议。

**证据判断：** T2提供校准实现及限制，L2作者确认判断模型用于分流；这证明机制存在，不证明Modem发生错误或客户愿付费。 M5显示相邻开发工具评估供给，M7强调工作流评估；两者不能代替客服采购证据。公开数据结果不外推到本队列，也不跨模型版本比较。 [校准工具与研究限制](https://github.com/kunko-ai-labs/judge-audit/blob/main/README.md)、[真实产品机制](https://www.producthunt.com/products/modem)、[相邻竞争](https://www.ycombinator.com/companies/xulux)、[投资命题](https://www.ycombinator.com/rfs)。

**评分理由：** 跨源机制较强但缺独立事故、损失或采购主诉，故需求仅10分；标注和样本有效性是主要验证成本。

**主要风险：** 人工标签可能不一致，样本少、类别稀疏或语言分布变化会使阈值不稳定。200条仅用于验证流程，不足以证明稀有错误的上线安全边界。

**两周实验：** 计划访谈3家已部署分流模型的团队；只在找到稳定标签负责人后做一次离线换版比较，记录分歧、留出误差和人工复核时间。若样本不足则报告unknown，未执行。

**停止条件：** 客户没有已运行的决策流程、没有标签责任人，或无模型变更计划及独立评估预算时停止，不转成泛化AI助手。

**前20位潜客路径：** 拟从公开客服自动化实施案例与技术复盘筛选前20家，要求已经处理真实队列而非只有Demo。

**可积累资产：** 可积累客户批准的标签版本、争议裁定和跨版本回归样本；不是靠一次公开benchmark排名。

**资本门槛：** 低至中；标签整理和离线模型调用。自建基础模型属高资本方向。

## 8. 拒绝、拥挤与资本密集方向

- **通用编码、事故排查或客户支持代理。** 当前已有Modem、Polylane、Vorflux与opensre。团队应先证明一项未被覆盖的交付负担，而不是把工具集中出现解释为新助手的需求。[Modem](https://www.producthunt.com/products/modem)、[Polylane](https://www.producthunt.com/products/polylane)、[Vorflux](https://www.ycombinator.com/companies/vorflux)、[opensre](https://github.com/Tracer-Cloud/opensre)。
- **又一个批量编辑器或泛化Flow生成器。** Hextom有可读正面及已解决反馈，Flow有原生生成与测试；暂不由一条慢任务评论推出替代产品。[评论](https://apps.shopify.com/bulk-product-edit/reviews)、[Flow能力](https://help.shopify.com/en/manual/shopify-flow/create/create-workflow)。
- **零成本移动真机云或自动通过审核承诺。** 当前移动工具主要运行模拟器，真机规模化还涉及设备和运维；GitHub上的提交检查清单也不能保证审核通过。只验证客户已有设备上的小范围复现。[移动工具范围](https://github.com/pierridotite/mobile-agent-testers/blob/main/README.md)、[提交清单供给](https://github.com/mjmirza/app-store-compliance)。
- **通用安全代理、绝不泄漏或零保留宣传。** 当前工具位于不同处理层；Offthread明示脱敏可能漏检，依赖包存在也不意味着安全。缺少独立采购证据，本期不评分。[Plango](https://www.producthunt.com/products/plango)、[Offthread](https://offthread.chat/)、[slop-deps](https://github.com/viditx/slop-deps/blob/main/README.md)。
- **访客反匿名工具及资助目录的直接复制。** Letter有现成识别供给，但合规答复只来自厂商；naturefunding已有来源链接与开放申请筛选。没有取得新的替换和付费主诉。[Letter](https://www.producthunt.com/products/visitors)、[naturefunding](https://www.producthunt.com/products/naturefunding-org)。
- **自建机器人网络、基础模型或完整求解平台。** 越凡、Noeri和杉数属于不同产业，不能相互推导需求；硬件交付、研究和行业验证门槛都显著高于本期离线服务。融资金额不进入机会需求分。[越凡](https://www.lejucaijing.com/news-7530548137208509785.html)、[Noeri](https://noeri.ai/)、[杉数](https://pitchhub.36kr.com/financing-flash)、[YC命题](https://www.ycombinator.com/rfs)。

## 9. 下一步实验

1. 第一周优先访谈前两项各3名潜在买家，要求展示一次真实上架报错或移动复现过程；先试官方配置与现成工具，再决定是否交付样本。
2. 第二周只为取得授权资料的方向做一次有限交付：记录人工分钟、返工轮次、误报和实际付款。样本数量是计划，不是已完成成果。
3. 客户回访核对只产出草稿；“代码已合并”“发布已完成”“用户已获得该版本”分开记录，无法确认时保留unknown。本期没有联系任何评论者。
4. Flow先用原生测试检查条件；第一个写入动作之后和外部返回另列未覆盖。原生培训足够时就结束产品化。
5. 模型校准仅在有标签责任人后开展。小样本主要验证流程；不能因一个看似低的错误率就给自动执行背书，也不使用开源项目的公开结果代替客户样本。

## 10. 限制

- GitHub网页工具对Trending返回restricted URL；GitHub连接器的公开资源接口不覆盖榜单。沙箱匿名HTTPS先遇DNS失败，经环境批准后普通匿名HTTPS读取三窗均为200。这是工具网络路径的替代读取，没有绕过站点验证码、登录、限流或robots控制。
- IT桔子返回HTTP 412后停止。YC总目录无可读正文，采用官方分类目录与公司页；不声称扫描整个YC库。
- 36氪两个详情仅返回页面壳；杉数采用公开列表，越凡另有瑞财经公开正文。未取得本轮融资一手公告，未验证交割、客户数或订单成绩。搜索发现的自动生成融资聚合页未作为证据。
- Crunchbase只使用公开News；模型估值是估计。Noeri采用官网金额和可读的媒体段落，没有跨过媒体付费墙取得其余内容。其日期为11-16，不能写成本周或今日新融资。
- 商城默认页不保证按时间排列，单条星级未提取。Order Printer首个候选路径返回404，另一评论路径工具不可读；未继续尝试规避。Digital Products只作复核，未复用为本期机会。
- MCPwatch与Rokan候选网站未能读取，未纳入精选技术项目或需求证据。PH的相对时间不倒推精确UTC；推广项、产品历史与本次发布分别识别。
- 技术项目只读公开原文，未安装、复跑或开展安全测试。GAL标题与当前官网术语不完全一致，因此不据标题补出权限和回滚保证。
- 机会02和03的PH使用负担来自同一人；产品作者与其README也不能算独立需求。各条主诉的现状、根因、复发频率、经济损失及购买意愿仍待核实。
- 评分是研究者判断。没有因融资、Star数量、正面评论或演示成功而认定市场成立；高资本方向已单独标记。

## 11. 本地验证

已执行指定命令：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

实际结果：`Radar validation passed: 5 opportunities, 7 themes, 36 dataset rows`。

另已核对六维分数上限与加总、Show HN七日范围及快照时间、GitHub三窗覆盖、报告与数据条目名称及来源链接、README顶部链接和历史逐字保留。仅三个授权路径发生变化；`git diff --check`和新增报告行尾空白检查通过。

结构校验通过不代表客户需求、融资交割或第三方产品效果成立。本期只更新本报告、`src/data/radar.json`和README报告入口；提交、推送、部署与服务操作由外层流程处理。
