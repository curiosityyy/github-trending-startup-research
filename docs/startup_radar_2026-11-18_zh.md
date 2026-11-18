# Startup Radar 创业机会日报｜2026-11-18

> 本批次证据整理截止：2026-11-18T01:20:07Z。GitHub三窗读取：01:16:59–01:17:00Z；HN指标快照：01:17:11Z。
> 6款当前发布、6个近七日社区项目、10个Trending仓库、6条市场信号、8条具体反馈；7个跨源主题、6个待验证机会。

## 1. 本期判断与方法

优先验证**订阅减量后的续费运费核对（73分）**、**商品搜索改版的查询回归清单（70分）**和**订阅商品在特色区块的购买兼容性验收（68分）**。这些是小团队可以先人工交付的假设，尚无访谈、订单或付费验证。[订阅反馈](https://apps.shopify.com/shopify-subscriptions/reviews)、[搜索反馈](https://apps.shopify.com/search-and-discovery/reviews)。

研究前已读取[研究方法](startup_radar_method_zh.md)、现有结构化数据及最近的[11-17日报](startup_radar_2026-11-17_zh.md)。快照日期固定为 **2026-11-18 UTC**；事件日期、投稿时间、网页缓存和本次读取分别记录。网页逐页响应时刻未单独计时，统一用上述批次截止时间归档，不能解释为所有页面在同一秒更新。

沿用100分规则：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数是研究排序，不是成功率、TAM或收益预测。以下买家、样本量、验收门槛和实验均为本报告提出的计划。

证据分为平台快照、具名主诉、功能请求、作者自述、维护记录、官方机制和媒体报道。同一项目的HN投稿与README不算独立需求；同一平台上的多条评论也不是随机样本。Stars、票数、融资、评级和评论数均不证明收入或采购。平台标记Likely AI的评论、纯祝贺和自动评论摘要不纳入需求证据。

## 2. 相比11-17的实质变化

- **发布6/6换选**：转向Appxiom、superlog、seshka、Glass Page、Ballet和ROOTKey Platform，覆盖生产上下文、资源清理、版本审阅与可审阅流程。更新发布与首次上线分开；不采用票数排名。[本次发布列表](https://www.producthunt.com/)。
- **社区6/6换选**：本次精选均为11-17投稿，晚于上一期采集截止；项目可能早已存在。OpenRun官方发布文章为11-14，HN投稿日另列。[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794359818%2Ccreated_at_i%3C%3D1794964618&hitsPerPage=100)、[OpenRun文章](https://openrun.dev/blog/openrun-1.0/)。
- **GitHub新增5个、保留刷新5个**：新增[Tencent/LoopForge](https://github.com/Tencent/LoopForge)、[alibaba/open-code-review](https://github.com/alibaba/open-code-review)、[meta/astryx](https://github.com/meta/astryx)、[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)、[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)；保留[dream-num/univer](https://github.com/dream-num/univer)、[getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)、[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)、[backnotprop/plannotator](https://github.com/backnotprop/plannotator)、[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)。这里的新增指精选集合变化，不是新建仓库或首次登榜。[daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)。
- **市场换入新的融资与供给样本**：国际从上一期欧洲基金和拉美公司转向11-17的Genesis AI报道；中国换选博理科技及穗升科技；YC公司换读Tesser与Spacesheep。RFS版本仍为Winter 2027，只换读物理建设融资命题。[国际报道](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[Tesser](https://www.ycombinator.com/companies/tesser)、[Spacesheep](https://www.ycombinator.com/companies/spacesheep)、[RFS](https://www.ycombinator.com/rfs)。
- **8条反馈均换选**：五条商城反馈加三条PH讨论；商城含四条11月评论及一条10-17较旧对照，未称作今日新事故。[订阅评论](https://apps.shopify.com/shopify-subscriptions/reviews)、[搜索评论](https://apps.shopify.com/search-and-discovery/reviews)、[资源清理反馈](https://www.producthunt.com/products/seshka)、[版本差异反馈](https://www.producthunt.com/products/glass-page)。
- **机会重新评分并收窄**：上一期上架字段、客服事实、CRM交接、写入超时、表单投递和补丁策略退出本期精选；不意味着旧问题已解决。新发现的原生能力把“统一订阅扣款日/换品”降为配置排查，也限制了自动跨应用运费修正的设想。[原生合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[合同API权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)。

## 3. 来源覆盖与快照口径

| 来源 | 覆盖 | 观察与限制 |
| --- | --- | --- |

| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 首页当前发布批次换选六款；发布可为更新或开放注册，不认定为11-18 UTC首次上线，不使用动态票数。  |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794359818%2Ccreated_at_i%3C%3D1794964618&hitsPerPage=100) | 1,089匹配 / 检视100 / 精选6 | 固定七日11-11T01:16:58Z至11-18T01:16:58Z；检视最新100条标题与链接，详读六项作者原文；样本集中于11-17，非全量七日普查。  |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 15 / weekly 14 / monthly 14 | 三窗均为Language Any / Spoken Language Any；43条窗口记录、36个去重仓库，精选10个；重叠窗口Stars不相加。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 官方分类目录 / 2家公司详读 | 总目录无可读正文，读取开发工具分类与Tesser、Spacesheep；目录状态及公司自述不作为新融资或收入证明。 [Tesser](https://www.ycombinator.com/companies/tesser)、[Spacesheep](https://www.ycombinator.com/companies/spacesheep) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | Winter 2027复核 / 1项换读 | 最新可见版本仍为Winter 2027；本期换读物理AI建设的融资命题，标记资本密集，不称作新发布。  |
| [Crunchbase News](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/) | 1篇11-17国际融资报道 | Genesis AI本轮$500M、累计$605M、估值$3.5B分别记录；公司未披露收入及付费客户数，非全球融资普查。  |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2条中国融资 / 当前列表 | 新选博理科技与穗升科技；详情页只返回不可用正文，依据公开列表，保留相对日期及未明示币种，不确认交割。  |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 无可读数据 | 一次访问返回412后停止，以36氪公开列表提供中国信号；未登录或绕过限制。  |
| [Shopify App Store](https://apps.shopify.com/search-and-discovery/reviews) | 扫描6款 / 精选5条具名反馈 | Search & Discovery当日抓取整体2.6分/513评；Subscriptions页面标记昨日缓存。精选四条11月反馈及一条10-17对照；不把整体评分当单条星级。 [订阅评论（昨日缓存）](https://apps.shopify.com/shopify-subscriptions/reviews) |
| [PH讨论与官方文档](https://www.producthunt.com/products/seshka) | 3条具体反馈 / 原生能力反证 | 遗留浏览器、Windows需求及版本差异反馈分开；官方已支持改订阅日期和商品，合同API受own scopes限制。 [版本差异](https://www.producthunt.com/products/glass-page)、[合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[合同权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract) |

**GitHub。** 匿名公开HTTPS三窗均返回200，Language Any / Spoken Language Any确认无筛选；15/14/14共43条窗口记录，去重36个，精选10个。记录的是榜单对应窗口增量，不相加、不换算收入、不用重叠窗口推算环比。[daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)。

**Show HN。** 固定窗口为2026-11-11T01:16:58Z至2026-11-18T01:16:58Z。Algolia返回1,089匹配中的最新100条；检视100条标题和链接，详读精选六项的README、官方文章或作者评论。精选均集中11-17，未分页遍历全部七天。points/comments只保留01:17:11Z快照；后续原文读取不回写这些指标。[固定查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794359818%2Ccreated_at_i%3C%3D1794964618&hitsPerPage=100)。

**Product Hunt。** 首页明确列为当前发布；产品页与作者发言用于区分已提供、计划和更新功能。ROOTKey作者曾写11-17计划，Glass Page留言有“昨日”表述，因此“当前批次”不能等同11-18 UTC首发。[列表](https://www.producthunt.com/)、[ROOTKey](https://www.producthunt.com/products/rootkey-platform)、[Glass Page](https://www.producthunt.com/products/glass-page)。

**商城。** 扫描Matrixify、Google & YouTube、Translate & Adapt、Search & Discovery、Subscriptions及Bundles六款默认评论页，精选集中在后续需核对的订阅与搜索问题。Search & Discovery整体评级为2.6分/513评，网页工具标记当日抓取；Subscriptions页标记昨日缓存，不把其评级当作今日指标。默认排序不代表时间顺序完整样本，单条星级未可靠读取。[Matrixify](https://apps.shopify.com/excel-export-import/reviews)、[Google & YouTube](https://apps.shopify.com/google/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews)、[Search & Discovery](https://apps.shopify.com/search-and-discovery/reviews)、[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)、[Bundles](https://apps.shopify.com/shopify-bundles/reviews)。

**市场。** 国际融资来自公开Crunchbase News采访；中国融资来自36氪可读列表，详情未取得有效正文，未补猜币种或交割日。YC目录与RFS为供给和投资观点，分别列明；均不是今日融资事件。[Crunchbase News](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/)、[36氪](https://pitchhub.36kr.com/financing-flash)、[YC目录](https://www.ycombinator.com/companies/industry/developer-tools)、[RFS](https://www.ycombinator.com/rfs)。

## 4. 来源快照明细

### 4.1 当前产品发布

| 项目 / 来源 | 日期与指标 | 观察与证据边界 |
| --- | --- | --- |

| [Appxiom](https://www.producthunt.com/products/appxiom) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 作者将故障与未完成目标关联，供编码代理读取；React Native和Shopify仍列Coming soon，脱敏属于作者声明，未实测。 **当前发布 + 厂商自述；能力阶段分开。**  |
| [superlog](https://www.producthunt.com/products/superlog) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 第三次发布，定位于从已有日志与监控寻找未设告警的模式；作者说明可接收日志或经API读取，不采用其客户数和修复合并率作独立效果证据。 **当前更新发布 + 作者说明。**  |
| [seshka](https://www.producthunt.com/products/seshka) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 作者提供按会话整理遗留进程、内存与端口的本地Mac工具；Windows仅见后续计划，未证明浏览器窗口均能正确归属。 **当前发布 + 用户反馈 + 未兑现计划。**  |
| [Glass Page](https://www.producthunt.com/products/glass-page) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 评论可关联具体位置与版本；作者确认尚无并排diff。首页标当前发布，但作者留言有昨日等相对表述，因此不定UTC首发日。 **当前发布批次 + 作者确认的边界。**  |
| [Ballet](https://www.producthunt.com/products/ballet) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 本次从演示预约开放自助注册；作者描述规则步骤、人工审批及运行日志，未验证任意连接器或确定性效果。 **当前更新发布 + 厂商能力自述。**  |
| [ROOTKey Platform](https://www.producthunt.com/products/rootkey-platform) / Product Hunt | 11-18采集时位于当前Launching Today批次；非UTC首发日 | 第二次发布，展示内容级差异、版本校验和恢复；密码学记录不能单独证明源数据在业务上正确，合规报告也不是认证。 **当前更新发布 + 厂商自述；未做恢复演练。**  |

### 4.2 近七日技术社区

| 项目 / 来源 | 日期与指标 | 观察与证据边界 |
| --- | --- | --- |

| [KIZZ](https://news.ycombinator.com/item?id=50539797) / Show HN / Algolia | 投稿2026-11-17T23:38:24Z；3 points / 0 comments；指标快照2026-11-18T01:17:11Z | README描述Linux上跟踪构建命令接触的文件并记录依赖；已存在项目的新投稿，不推定跨平台支持或生产成熟度。 **七日内投稿 + 项目原文；未执行验证。** [项目原文](https://github.com/Sakura-Industries-LLC/kizz/blob/main/README.md) |
| [Parallel Search Eval Harness](https://news.ycombinator.com/item?id=50539257) / Show HN / Algolia | 投稿2026-11-17T22:35:39Z；2 points / 0 comments；指标快照2026-11-18T01:17:11Z | 提供检索与闭卷基线的分开运行、配置留存及失败计入分母；评测题需按原条款获取。本次未运行，不能直接代表店内商品搜索质量。 **七日内投稿 + 项目原文；未执行验证。** [项目原文](https://github.com/parallel-web/parallel-search-evals/blob/main/README.md) |
| [dead-tests](https://news.ycombinator.com/item?id=50539136) / Show HN / Algolia | 投稿2026-11-17T22:25:47Z；1 points / 0 comments；指标快照2026-11-18T01:17:11Z | 查找未被收集的测试及不可达断言，并明确要求人工核验误报；另核实Pydantic旧PR确已合并，合并不代表付费需求。 **七日内投稿 + 项目原文；未执行验证。** [项目原文](https://github.com/dylanpulver/dead-tests/blob/main/README.md)、[旧PR合并记录](https://github.com/pydantic/pydantic/pull/13921) |
| [R3](https://news.ycombinator.com/item?id=50539007) / Show HN / Algolia | 投稿2026-11-17T22:14:34Z；2 points / 1 comments；指标快照2026-11-18T01:17:11Z | HN作者描述在本地HTML上批注并把反馈传回代理，以减少复制文本；官网不可读，能力仅依据作者评论，未安装验证。 **七日内投稿 + 作者评论；官网不可读。** [项目原文](https://hn.algolia.com/api/v1/items/50539007) |
| [OpenRun v1.0](https://news.ycombinator.com/item?id=50535810) / Show HN / Algolia | 投稿2026-11-17T18:20:36Z；1 points / 1 comments；指标快照2026-11-18T01:17:11Z | 官方11-14文章介绍声明式Docker/Podman或Kubernetes部署及身份、权限、审计；HN投稿为11-17。作者明确单机与集群模式，不作为新市场空白。 **七日内投稿 + 项目原文；未执行验证。** [项目原文](https://openrun.dev/blog/openrun-1.0/) |
| [Wheelgap](https://news.ycombinator.com/item?id=50533837) / Show HN / Algolia | 投稿2026-11-17T16:29:19Z；1 points / 0 comments；指标快照2026-11-18T01:17:11Z | 根据锁文件与目标平台判断wheel、源码包、缺失或unknown；元数据预检不等于在目标机器上构建成功，未验证性能宣传。 **七日内投稿 + 项目原文；未执行验证。** [项目原文](https://github.com/wheelgap/wheelgap/blob/main/README.md) |

### 4.3 GitHub Trending三窗

| 项目 / 来源 | 日期与指标 | 观察与证据边界 |
| --- | --- | --- |

| [Tencent/LoopForge](https://github.com/Tencent/LoopForge) / GitHub Trending · Language Any / Spoken Language Any | daily +591 stars | 榜单描述自托管工作流与人工审批；存在交付编排供给，不证明审批后产物正确。 **当次榜单窗口增量与定位；非采用、留存或收入。** [daily榜](https://github.com/trending?since=daily) |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) / GitHub Trending · Language Any / Spoken Language Any | daily +763 stars / weekly +3,675 stars | 榜单描述确定性流水线结合LLM审查；通用审查已有供给，测试收集与断言有效性仍需单独核对。 **当次榜单窗口增量与定位；非采用、留存或收入。** [daily榜](https://github.com/trending?since=daily)、[weekly榜](https://github.com/trending?since=weekly) |
| [dream-num/univer](https://github.com/dream-num/univer) / GitHub Trending · Language Any / Spoken Language Any | daily +1,774 stars | 榜单定位编辑、计算和协作SDK；可以作为核对界面候选，未验证与具体订阅系统的集成。 **当次榜单窗口增量与定位；非采用、留存或收入。** [daily榜](https://github.com/trending?since=daily) |
| [getarcaneapp/arcane](https://github.com/getarcaneapp/arcane) / GitHub Trending · Language Any / Spoken Language Any | daily +618 stars | 榜单定位Docker管理；只代表现成基础工具，不能证明能归属或清理所有本地代理进程。 **当次榜单窗口增量与定位；非采用、留存或收入。** [daily榜](https://github.com/trending?since=daily) |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) / GitHub Trending · Language Any / Spoken Language Any | weekly +2,948 stars | 榜单定位供编码代理使用的DevTools；可作为获授权主题测试候选，未实测兼容性。 **当次榜单窗口增量与定位；非采用、留存或收入。** [weekly榜](https://github.com/trending?since=weekly) |
| [meta/astryx](https://github.com/meta/astryx) / GitHub Trending · Language Any / Spoken Language Any | weekly +8,700 stars | 榜单描述可定制、面向代理的开源设计系统；记录供给密度，不据Stars推荐再做通用组件库。 **当次榜单窗口增量与定位；非采用、留存或收入。** [weekly榜](https://github.com/trending?since=weekly) |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) / GitHub Trending · Language Any / Spoken Language Any | daily +691 stars / weekly +2,926 stars / monthly +3,475 stars | 三窗均可见；榜单覆盖批注与代码审阅，通用代理审查界面已有竞争。 **当次榜单窗口增量与定位；非采用、留存或收入。** [daily榜](https://github.com/trending?since=daily)、[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) / GitHub Trending · Language Any / Spoken Language Any | weekly +3,429 stars / monthly +8,282 stars | 周、月榜可见浏览器CLI；能执行动作与测试业务正确性是不同问题。 **当次榜单窗口增量与定位；非采用、留存或收入。** [weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) / GitHub Trending · Language Any / Spoken Language Any | monthly +44,314 stars | 榜单描述多阶段审计和机器可读发现；未运行或复核发现准确率，不能推导安全效果或采购。 **当次榜单窗口增量与定位；非采用、留存或收入。** [monthly榜](https://github.com/trending?since=monthly) |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) / GitHub Trending · Language Any / Spoken Language Any | monthly +6,565 stars | 榜单定位知识工作插件；相邻流程已有供给，不能把插件热度当企业付费需求。 **当次榜单窗口增量与定位；非采用、留存或收入。** [monthly榜](https://github.com/trending?since=monthly) |

### 4.4 投资与市场

| 项目 / 来源 | 日期与指标 | 观察与证据边界 |
| --- | --- | --- |

| [Genesis AI：机器人整机与软件](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/) / Crunchbase News | 报道2026-11-17；本轮$500M Series A；累计$605M；估值$3.5B | 报道资金计划用于算力、生产及招聘；公司未披露收入或付费客户数。整机与数据采集资本密集，融资不证明商业交付。 **数据库发布方采访报道；非独立验资。**  |
| [博理科技：3D打印工业应用](https://pitchhub.36kr.com/financing-flash) / 36氪融资快报 | 当次列表14小时前；连续完成超5亿元融资；标题未明示币种和各轮拆分 | 列表描述从鞋业批量制造拓展至机器人零部件；不把多轮合计写成单轮，不确认订单、利润或交割。资本密集。 **可读媒体列表；详情未取得正文。** [事件详情（正文不可用）](https://36kr.com/p/4072516740797318) |
| [穗升科技：AI Memory硬件](https://pitchhub.36kr.com/financing-flash) / 36氪融资快报 | 当次列表18小时前；数千万元Pre-A轮；币种未明示 | 列表称资金拟投长期记忆、主动Agent、量产和海外交付。资金用途为计划，不能据此确认量产或用户留存；硬件方向需资金。 **可读媒体列表；详情未取得正文。** [事件详情（正文不可用）](https://36kr.com/newsflashes/4073445119464322) |
| [Tesser：云端开发环境](https://www.ycombinator.com/companies/tesser) / YC Company Directory | 11-18复核；Winter 2027 / Active | 公司自述把构建、测试和服务移到隔离云机器，并处理网络与端口转发；是本地资源问题的相邻替代，不是今日融资或采用验证。 **官方目录 + 公司自述。** [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [Spacesheep：人和代理共同审阅产物](https://www.ycombinator.com/companies/spacesheep) / YC Company Directory | 11-18复核；Fall 2026 / Active | 公司描述位置批注、保留版本及团队协作；与Glass Page为不同供应者，仍都属于供给，不能当作两份采购证据。 **官方目录 + 公司自述。** [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [YC Winter 2027：Wall Street for the Physical Buildout](https://www.ycombinator.com/rfs) / YC Requests for Startups | 11-18复核；最新可见版本仍为Winter 2027 | YC提出设备、算力及基础设施相关融资和租赁方向；是投资观点，涉及资产与风险承担，不列作小团队两周软件MVP。 **既有RFS版本复核；非融资事件或需求验证。**  |

### 4.5 具体投诉、请求与反证

| 项目 / 来源 | 日期与指标 | 观察与证据边界 |
| --- | --- | --- |

| [Totem Eco：续订减量后仍免运费](https://apps.shopify.com/shopify-subscriptions/reviews) / Shopify App Store | 评论2026-11-04；页面为昨日缓存 | 商家称订阅减量跌破免邮门槛后仍沿用免邮，要求扣款前重算；未取得合同、订单或损失账本。API存在计算更新机制，但受所属应用权限限制。 **单店近期损失主诉 + 官方机制；未复现。** [合同计算及权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[销售计划与合同分离](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans) |
| [Biowine.dk：希望统一扣款日并换月度酒款](https://apps.shopify.com/shopify-subscriptions/reviews) / Shopify App Store | 评论2026-11-13；页面为昨日缓存 | 商家提出同日扣款和每月换品需求；当前官方说明已可调整合同日期及商品，因此记录为待排查配置或版本差异，不据此推荐新订阅平台。 **功能请求 + 当前官方文档反证。** [已有原生能力](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts) |
| [Creativity for Hope：特色商品区块无法加入订阅](https://apps.shopify.com/shopify-subscriptions/reviews) / Shopify App Store | 评论2026-11-05；页面为昨日缓存 | 商家称Archer Commerce主题的Featured Product区块要求selling plan，而独立商品页正常；是可定位的入口差异，根因与当前是否仍发生未知。 **具名近期故障自述；未复现。** [主题订阅接线](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[商品表单范围](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines) |
| [Moore's Furniture：要求恢复同义词能力](https://apps.shopify.com/search-and-discovery/reviews) / Shopify App Store | 评论2026-11-06；应用整体2.6分 / 513评 | 商家称缺少同义词后搜索不好用；官方当前提供语义匹配、预览和商品boost，不能假设重新加同义词开关即可恢复旧结果。 **具名近期主诉 + 当前官方机制。** [原生搜索预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search) |
| [Ruby Designs Clothing Ltd：搜索混入无关商品](https://apps.shopify.com/search-and-discovery/reviews) / Shopify App Store | 评论2026-10-17；应用整体2.6分 / 513评；较旧对照 | 商家自述搜索指定商品返回大量不相关商品；没有实际query和目标SKU，不能估算损失。该评论距快照约一个月，不称为今日故障。 **具名历史对照主诉；未复现。** [匹配与排序边界](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior) |
| [Chris Goodbaudy：代理浏览器窗口遗留](https://www.producthunt.com/products/seshka) / Product Hunt · seshka讨论 | 平台留言16h ago；未转换为精确事件时间 | 评论者称Playwright CLI打开的Chrome窗口持续遗留，希望能清理；未确认所有相关浏览器进程的会话归属或产品现有覆盖。 **具名使用问题；无独立复现。**  |
| [David：端口被旧开发服务占用，询问Windows版](https://www.producthunt.com/products/seshka) / Product Hunt · seshka讨论 | 主诉4h ago；作者答复2h ago | 评论者称每周遇到已结束会话留下服务占端口；作者承诺随后做Windows版，属于计划，现成产品快速补齐是主要竞争风险。 **使用问题 + 平台扩展请求；未兑现计划。**  |
| [JC：重生成文档后需要版本可视差异](https://www.producthunt.com/products/glass-page) / Product Hunt · Glass Page讨论 | 主诉3h ago；作者对相邻diff提问答复8h ago | 评论者希望避免重读整份文档；作者明确尚无并排diff，但已有版本绑定和过时线程标记。是具体功能请求，未获得付费承诺。 **具名请求 + 厂商确认的边界。** [相邻供给](https://www.ycombinator.com/companies/spacesheep) |

## 5. 改变判断的反证

1. **订阅日程和商品调整已有原生能力。** Biowine的功能请求与当前官方说明不一致；不知道是当时版本、入口还是配置差异，不据此推荐替换订阅系统。[官方合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。
2. **计算能力不等于第三方有权修改合同。** 官方合同更新要求own subscription scopes，流程也将计算与提交分开。新应用不应假设可取得Shopify原生应用的合同；本期MVP只处理商家合法提供的资料。已生成订单不会随合同新版本自动改变。[官方API范围](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)。
3. **搜索预览已经存在。** 先用原生预览与前台对照。官方同时说明无法直接控制匹配宽度或排序；不能把商家的同义词诉求简化成一个可恢复的开关，也不承诺商品boost消除全部错误。[预览与boost](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[匹配和排序](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior)。
4. **商品页成功不能证明区块成功。** 官方将订阅选择和变体状态绑定到商品表单；故障主诉足以提出复现任务，却不足以断言Archer Commerce存在普遍缺陷。Appxiom的Shopify能力还在计划中，不能用来充当已经落地的解决方案。[主题接线](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[商品表单范围](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines)、[发布能力阶段](https://www.producthunt.com/products/appxiom)。
5. **资源清理的免费替代会迅速演进。** seshka已有Mac能力并计划Windows版；用户要求清理Chrome并不能证明当前产品支持正确归属。Tesser提供另一条云端路径，先验证团队付费理由。[反馈及答复](https://www.producthunt.com/products/seshka)、[云端替代](https://www.ycombinator.com/companies/tesser)。
6. **合并测试修复不是发现生产损失。** Pydantic #13921于10-02合并，三项测试被收集后均通过；支持“存在收集缺口”，不支持“找到了三项生产bug”。另查的dnspython #1412是删除不可达冗余断言，未拿它冒充新增覆盖。[Pydantic记录](https://github.com/pydantic/pydantic/pull/13921)、[dnspython记录](https://github.com/rthalley/dnspython/pull/1412)。
7. **版本定位与版本差异已经被拆开实现。** Glass Page尚无并排diff，但已有版本绑定及过时提示；R3与Spacesheep也覆盖批注工作流。因此只保留小范围交付验收假设。[能力边界](https://www.producthunt.com/products/glass-page)、[R3作者说明](https://hn.algolia.com/api/v1/items/50539007)、[Spacesheep](https://www.ycombinator.com/companies/spacesheep)。

## 6. 跨源主题

| 主题 | 证据标签与来源 | 本期推断 |
| --- | --- | --- |

| 续订合同变化要核对下一次实际费用 | **单店损失主诉 + 官方机制 + 流程供给**；Shopify App Store、Shopify Developers、Product Hunt。[主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[合同权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[合同边界](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans)、[现成流程供给](https://www.producthunt.com/products/ballet) | 推断：先做商家提供材料的费用核对；新应用不能假设能读写原生订阅合同，更不能承诺自动追回费用。 |
| 店内搜索先有查询与目标商品真值 | **两店主诉（含较旧对照）+ 官方边界 + 评测方法类比**；Shopify App Store、Shopify Help Center、Show HN。[商家反馈](https://apps.shopify.com/search-and-discovery/reviews)、[原生预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[匹配边界](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior)、[方法类比](https://github.com/parallel-web/parallel-search-evals/blob/main/README.md) | 推断：验证一类商品的真实查询回归；Web问答评测不能直接套成电商指标，原生预览是优先替代。 |
| 同一订阅商品的不同购买入口需独立验收 | **具体区块故障 + 官方接线要求 + 调试供给**；Shopify App Store、Shopify Developers、GitHub Trending、Product Hunt。[故障主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[主题要求](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp)、[未上线范围](https://www.producthunt.com/products/appxiom) | 推断：先做一个主题和两个入口的复现包，避免把通用监控功能写成已经支持电商场景。 |
| 会话结束与资源释放要分别确认 | **两名使用者反馈 + 本地工具 + 云端替代供给**；Product Hunt、YC Company Directory、Show HN。[具体反馈](https://www.producthunt.com/products/seshka)、[云端替代](https://www.ycombinator.com/companies/tesser)、[自托管供给](https://openrun.dev/blog/openrun-1.0/) | 推断：先测会话归属和清理误伤风险；现成工具、迁到云端或团队约定都可能比新产品便宜。 |
| 绿色测试结果需要检查测试是否真正执行 | **作者工具 + 历史合并记录 + 审查供给**；Show HN、GitHub项目维护记录、GitHub Trending。[现成检查工具](https://github.com/dylanpulver/dead-tests/blob/main/README.md)、[历史合并证据](https://github.com/pydantic/pydantic/pull/13921)、[审查供给](https://github.com/alibaba/open-code-review) | 推断：针对一个测试栈验证收集清单和故意失败样例；旧修复不是本周新事故，也没有证明企业愿意付费。 |
| 文档改版后要说明反馈针对哪个版本 | **具体diff请求 + 作者答复 + 两类协作供给**；Product Hunt、Show HN、YC Company Directory。[请求与边界](https://www.producthunt.com/products/glass-page)、[本地作者说明](https://hn.algolia.com/api/v1/items/50539007)、[协作目录](https://www.ycombinator.com/companies/spacesheep) | 推断：只验证客户交付中的变更与反馈核对服务；通用评论面板已经拥挤，同类供应者不是独立采购者。 |
| 物理AI资金流向与轻量创业验证分开 | **国际融资报道 + 中国列表 + YC投资观点**；Crunchbase News、36氪、YC RFS。[国际融资](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/)、[中国融资](https://pitchhub.36kr.com/financing-flash)、[融资命题](https://www.ycombinator.com/rfs) | 推断：不从融资额推出终端需求；整机、量产及资产融资明确资本密集，本期小团队候选仍从软件验收服务起步。 |

## 7. 机会评分与详细分析

以下全部为**未验证假设**。前三项从既有平台上的服务交付起步，后三项的需求与预算证据更弱。评分按[100分方法](startup_radar_method_zh.md)逐维加总，所有候选先以低资本的软件核对或验收测试，不购置硬件或承担融资风险。

| 排名 / 机会 | 需求 /30 | 买家 /20 | 跨源 /15 | 两周 /15 | 分发 /10 | 防御 /10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |

| 01 订阅减量后的续费运费核对 | 21 | 18 | 11 | 12 | 7 | 4 | 73 |
| 02 商品搜索改版的查询回归清单 | 19 | 18 | 10 | 14 | 6 | 3 | 70 |
| 03 订阅商品在特色区块的购买兼容性验收 | 16 | 18 | 10 | 14 | 7 | 3 | 68 |
| 04 Windows开发会话的遗留资源归属核对 | 16 | 16 | 11 | 12 | 5 | 3 | 63 |
| 05 Python测试收集与故意失败样例审计 | 13 | 17 | 10 | 13 | 5 | 3 | 61 |
| 06 客户设计文档改版的差异与反馈验收 | 13 | 16 | 11 | 12 | 5 | 2 | 59 |

### 01 订阅减量后的续费运费核对 — 73分

在下一次续费前，把数量变化、合同运费和商家已向客户约定的规则列成可审阅差异。

**买家假设：**假设使用者为订阅运营，付款人为经营补充装或月度盒子的品牌负责人；先经订阅实施服务商接触。

**窄MVP：**一店、20份商家主动提供的脱敏合同及最近订单快照、一个免邮规则；人工核对并交付待确认清单，修正由商家通过原有订阅应用完成。

**证据及反证：**

- 近期单店报告减量后持续免邮，但没有账本和实际合同，损失规模仍未知。
- 官方已有合同更新计算，且要求own subscription scopes；MVP以获授权资料核对为前提，不承诺跨应用抓合同。

来源：[商家主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[合同与销售计划](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans)、[官方计算及权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[相邻工作流供给](https://www.producthunt.com/products/ballet)。

**评分理由：**有明确费用触发点和预算责任人；单店未核验账本限制需求分，合同权限压低两周可验证性，跨源主要是机制核查。

**主要风险：**合同价格可能体现既有承诺而非错误；新应用可能无读取权限，原服务商也可能已有功能，不能把理论差额当作可追收款。

**两周实验：**第1周拟访谈3家订阅品牌或实施商，取得1份可合法分享的合同样本及价格承诺；第2周核对20份记录，统计真差异、合理例外和人工分钟，争取1次有偿核对。未执行。

**停止条件：**取不到获授权材料，差异全部来自合理约定，或原生工具已无额外成本覆盖时停止；不以迁移合同作为强制前提。

**前20位潜客的寻找路径：**先从公开订阅实施案例筛选20家服务商或品牌，确认是否反复处理减量与运费变更。

**可积累资产：**客户确认的规则版本、例外分类与差异处理历史；尚未证明能复购。

### 02 商品搜索改版的查询回归清单 — 70分

先确认客户常用查询是否能找到预期商品，再决定调整商品资料、boost或提交平台工单。

**买家假设：**假设使用者为商品运营和搜索实施顾问，付款人为多SKU垂直零售品牌的电商负责人。

**窄MVP：**一店、一个类目、30个商家确认的查询及目标商品；比较原生预览与真实前台，记录找不到、错排和入口差异，不建设搜索引擎。

**证据及反证：**

- 两家商户分别描述同义词需求与无关结果，后者为10-17较旧对照；尚无实际查询样本。
- 官方已提供预览和商品boost，也说明匹配与排序边界；Parallel的留存配置方法仅作评测设计参考。

来源：[具名反馈](https://apps.shopify.com/search-and-discovery/reviews)、[当前机制](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior)、[已有预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[评测方法类比](https://github.com/parallel-web/parallel-search-evals/blob/main/README.md)。

**评分理由：**有重复相邻主诉和低成本验收方法；缺原始query和损失证据，原生预览压低防御性，未按Web检索热度加需求分。

**主要风险：**平台排序实验、商品资料及第三方搜索均可能改变结果；一次配置即可解决时，独立订阅工具的付费价值低。

**两周实验：**第1周拟访谈3家服务商，取得30个客户确认query及目标商品；第2周比较两种入口的结果和人工工时，交付可复测清单并争取1次付费。未执行。

**停止条件：**无法取得商品真值、问题不可重复，或客户使用原生预览已足够时停止产品化。

**前20位潜客的寻找路径：**从公开Shopify搜索及目录整理案例寻找前20家实施商；不把公开抱怨等同销售许可。

**可积累资产：**按类目积累由商家确认的查询、期望商品与变更记录；没有独占模型壁垒。

### 03 订阅商品在特色区块的购买兼容性验收 — 68分

把独立商品页可购买与首页区块可购买作为两项验收，定位变体和订阅计划是否正确传入购物车。

**买家假设：**假设使用者为Shopify主题开发者，付款人为承接订阅店铺改版的服务商项目负责人。

**窄MVP：**一个获授权开发店、一个主题、商品页与Featured Product两个入口、12个变体和购买方式组合；交付复现步骤、请求字段和购物车计划对应关系。

**证据及反证：**

- Creativity for Hope给出明确主题和入口差异，但本次没有其环境，不能确认根因。
- 官方要求selling_plan选择与表单同步，且UX覆盖特色商品区块；浏览器工具可用于验收，Appxiom尚未提供其计划中的Shopify支持。

来源：[具体主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[主题接线](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[入口与展示规范](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines)、[调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp)、[供给边界](https://www.producthunt.com/products/appxiom)。

**评分理由：**触发点窄且验收明确；单例限制需求分，专业服务商易定位但原生修复替代性强。

**主要风险：**可能是单主题配置或已修复版本，供应商应自行承担修复；仅做加购验收不证明续费或支付正确。

**两周实验：**第1周拟访谈3家主题服务商，确认一次真实返工及可用开发店；第2周跑12例，仅核对加购及购物车计划，评估能否成为一次有偿交付检查。未执行。

**停止条件：**主题升级或原生app block配置后不再有重复成本，或只能在真实支付订单上复现时停止该实验。

**前20位潜客的寻找路径：**从公开订阅主题迁移案例筛选前20家服务商，以交付验收切入。

**可积累资产：**具体主题版本、入口和变体的兼容性样例；不重建通用浏览器测试平台。

### 04 Windows开发会话的遗留资源归属核对 — 63分

先让团队看清已结束会话留下哪些服务、浏览器和端口，再决定哪些可以安全释放。

**买家假设：**假设使用者为并行使用编码代理的开发者，付款人为Windows开发团队的工程负责人。

**窄MVP：**三名愿意参与的开发者、一个代理及一种浏览器工具；先只读记录进程、会话、工作目录和端口关系，在专门测试进程上验收人工确认后的释放。

**证据及反证：**

- seshka讨论有浏览器遗留及每周端口残留自述，Windows支持只是作者计划。
- Tesser的云环境和OpenRun的生命周期管理提供替代路径；这些不是Windows清理能力验证，也不是付费买家。

来源：[两名反馈与计划](https://www.producthunt.com/products/seshka)、[云端替代](https://www.ycombinator.com/companies/tesser)、[自托管生命周期供给](https://openrun.dev/blog/openrun-1.0/)、[容器管理供给](https://github.com/getarcaneapp/arcane)。

**评分理由：**有重复具体主诉，但团队采购意愿未知；平台差异与误结束风险降低验证分，免费替代压低防御性。

**主要风险：**无法可靠归属的进程不能自动结束；免费seshka计划扩展Windows，现有系统工具或云环境可能覆盖全部需求。

**两周实验：**第1周拟观察3名授权开发者的只读资源清单；第2周在测试环境验证10次会话关闭后的归属与残留，记录unknown和人工分钟，询问团队是否愿意付费。未执行。

**停止条件：**无法把共享进程和会话进程可靠区分，或现有免费工具足够时停止；只保留unknown，不做猜测式清理。

**前20位潜客的寻找路径：**从公开Windows开发工作流案例寻找前20个团队；先验证团队场景而非个人下载量。

**可积累资产：**跨代理和浏览器版本的归属样例、误伤反例与团队策略；仍受平台原生功能威胁。

### 05 Python测试收集与故意失败样例审计 — 61分

在AI大量修改测试后，证明关键测试被收集且在故意引入错误时确实失败。

**买家假设：**假设使用者为测试维护者，付款人为维护Python业务仓库的小型B2B软件工程负责人。

**窄MVP：**一个授权仓库、一个pytest套件、10个关键行为；先用已有扫描器筛线索，再对照收集清单，在隔离副本加入最小错误验证断言。

**证据及反证：**

- dead-tests提供未收集与不可达规则，并要求人工复核；不把扫描命中全部当真实缺陷。
- Pydantic #13921已在10-02合并并恢复三项测试收集，属于历史维护证据；本次没有付费客户或新增事故。

来源：[现成工具与误报边界](https://github.com/dylanpulver/dead-tests/blob/main/README.md)、[历史维护接受记录](https://github.com/pydantic/pydantic/pull/13921)、[相邻审查供给](https://github.com/alibaba/open-code-review)、[依赖预检工具](https://github.com/wheelgap/wheelgap/blob/main/README.md)。

**评分理由：**技术问题有维护记录支撑，不能折算成企业损失或采购；验证可局限于隔离副本，免费工具使防御性较低。

**主要风险：**被跳过测试可能是故意停用，旧断言也可能过时；扫描器免费且容易集成，审计可能只能卖一次。

**两周实验：**第1周拟访谈3个Python团队，确认最近一次测试大改；第2周针对10个关键行为保留收集证据、故意失败及修复后通过的结果，争取1次付费审计。未执行。

**停止条件：**免费扫描和既有CI已经覆盖问题、客户不愿提供关键行为真值，或只有无业务影响的清理项时停止。

**前20位潜客的寻找路径：**从公开Python迁移与测试维护服务案例筛选前20家团队；不向开源维护者推定采购需求。

**可积累资产：**客户关键行为与可执行反例库；不能靠规则数量构成长期壁垒。

### 06 客户设计文档改版的差异与反馈验收 — 59分

在代理重写文档后，把客户意见对应到版本、修改位置与待确认状态，减少整份重读。

**买家假设：**假设使用者为技术顾问和客户审阅人，付款人为定期交付架构或实施设计文档的小型咨询团队负责人。

**窄MVP：**一份客户授权Markdown文档、相邻两个版本、10条意见；输出逐段差异、意见处理状态和需人工复核的删除项，使用已有协作渠道交付。

**证据及反证：**

- Glass Page用户要求可视diff，作者承认无并排diff但已有版本绑定与过时标记，缺口小于全新协作平台。
- R3和Spacesheep说明本地及云端审阅已有供给；作者痛点和同类产品不等于咨询买家愿意付款。

来源：[请求与原生边界](https://www.producthunt.com/products/glass-page)、[R3作者说明](https://hn.algolia.com/api/v1/items/50539007)、[团队协作供给](https://www.ycombinator.com/companies/spacesheep)、[现成审阅工作区](https://github.com/backnotprop/plannotator)。

**评分理由：**有明确功能请求但主要来自开发者，目标咨询买家未经验证；供给密集、替代简单，因此排在最后。

**主要风险：**现成Git或文档diff可能足够；重写后自动意见映射会误判，供应商也能快速补齐功能。

**两周实验：**第1周拟访谈3家咨询团队并取得一对脱敏版本；第2周人工核对10条意见，记录重读时间、错误映射和客户验收意愿，争取一次付费交付附加项。未执行。

**停止条件：**已有文档工具无成本满足要求、客户没有反复改版，或意见无法可靠绑定版本时停止。

**前20位潜客的寻找路径：**从公开技术咨询与系统实施案例筛选前20家小团队，先问最近一次改版返工。

**可积累资产：**客户签认的意见与版本验收历史；当前防御性很弱，不先建通用协作平台。

## 8. 拒绝、拥挤与资本密集方向

- **另造通用订阅平台或扣款日工具**：现有文档已支持日期与商品变更；Biowine的请求先做配置核对。运费问题也不能靠拿不到权限的跨应用自动写入解决。[合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[API范围](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)。
- **另造通用搜索引擎或“AI SEO助手”**：本期证据来自具体商品查询；原生搜索预览与boost是起点，Web检索评测不证明电商转化价值。[原生预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[评测工具](https://github.com/parallel-web/parallel-search-evals/blob/main/README.md)。
- **通用AI修bug、代码审查或工作流助手**：Appxiom、superlog、Ballet和open-code-review已有清楚供给；本期只考虑有客户真值的单项验收。日志上下文、生成PR或审批完成都不能代替业务结果。[Appxiom](https://www.producthunt.com/products/appxiom)、[superlog](https://www.producthunt.com/products/superlog)、[Ballet](https://www.producthunt.com/products/ballet)、[open-code-review](https://github.com/alibaba/open-code-review)。
- **单凭“结束所有进程”做商业清理工具**：遗留进程可能承载仍在工作的服务，必须先确定归属；免费工具及云端替代压低收费空间。[seshka](https://www.producthunt.com/products/seshka)、[Tesser](https://www.ycombinator.com/companies/tesser)。
- **通用评论面板、文档平台或数据恢复平台**：现有供给已经覆盖大量相邻能力，diff和恢复记录也不能替代业务真值；不从单条请求推出整体平台机会。[Glass Page](https://www.producthunt.com/products/glass-page)、[Spacesheep](https://www.ycombinator.com/companies/spacesheep)、[ROOTKey](https://www.producthunt.com/products/rootkey-platform)。
- **机器人整机、工业3D打印量产、AI记忆硬件及资产融资**：明确为**资本密集方向**。本期资金流动提供研究背景，不构成小团队两周可售软件的证明；未提供轻量化包装后的整机、放贷或租赁建议。[Genesis AI](https://news.crunchbase.com/venture/robot-factory-workers-genesis-ai-fundraise/)、[博理与穗升列表](https://pitchhub.36kr.com/financing-flash)、[YC融资命题](https://www.ycombinator.com/rfs)。

## 9. 下一轮实验与验收

1. 先访谈前三项各3名潜在买家，要求展示最近一次具体问题、原有处理方式及验收标准。没有授权材料或明确责任人就不开发。
2. 第1周取得规则与真值，第2周完成一次有限交付。运费核对保留合理例外；搜索保留query、目标商品及入口；订阅区块保留变体、计划和购物车证据。
3. 后三项先确认预算：遗留资源不明归属记unknown；测试审计必须有故意失败的反例；文档反馈无法绑定版本时交由人工，不自动标记解决。
4. 两周后以真实付款、重复工作频率、误报、遗漏和人工工时决定去留。报告中的数量是实验计划，不是已完成客户样本或统计显著性承诺。

本次未联系评论者、未进行客户访谈、未安装研究产品、未执行第三方项目代码、未运行客户系统或支付测试。上述实验均未执行。

## 10. 访问限制与不确定性

- GitHub Trending网页工具返回restricted URL；可用GitHub连接器没有Trending端点。沙箱DNS也无法解析后，使用获准的匿名只读HTTPS读取三窗及公共Algolia API，得到200；没有绕过站点验证码、登录、签名或限流。项目README和公开PR用GitHub连接器只读取得。
- [IT桔子](https://www.itjuzi.com/)返回HTTP 412后停止，没有绕过限制。[博理详情](https://36kr.com/p/4072516740797318)和[穗升详情](https://36kr.com/newsflashes/4073445119464322)没有有效正文，融资事实仅依据已读[36氪列表](https://pitchhub.36kr.com/financing-flash)，未进入付费数据库。
- [YC总目录](https://www.ycombinator.com/companies)无可读正文，以官方分类及两个公司页补足。当前目录状态不等于当天获投或当天成立。
- [R3官网](https://r3.hyperlogue.tech/)与其HN网页不可读；R3只采用[Algolia公开作者评论](https://hn.algolia.com/api/v1/items/50539007)。PG Import Check与Temper官网未取得可读内容，没有列入精选；不从标题补写功能。
- Shopify带newest的筛选URL不可读，采用可读默认页；未声称按时间完整扫描。Subscriptions是昨日缓存，具体评论日期另列；同一页也有正面反馈，不能把精选投诉外推成总体故障率。
- seshka产品页首次读取到正文和讨论，随后重读工具报不可访问；本期保留首次成功读取内容，不据后一次错误断言产品下线。PH平台相对时间保持原样。
- 本次没有独立复现商家事故、确认根因、验资或测试供应者性能。Pydantic历史PR只验证合并记录，未执行其测试。资金融入、产品计划、批注状态和开源热度各有不同证据强度。
- 样本偏电商交付及开发工具，HN偏最新一天，国际资本只详读一篇报道；中国融资缺少IT桔子交叉复核。未验证客户预算、实际损失、留存和市场规模。

## 11. 本地校验

按要求运行：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

校验通过：`Radar validation passed: 6 opportunities, 7 themes, 36 dataset rows`。另核对六维评分及加总、HN七日范围、GitHub三窗覆盖、148个结构化URL和报告条目一致性；`git diff --check`及新报告行尾空白检查通过。结构校验仅验证数据形式和数量，不证明商业需求。

修改仅涉及三个允许文件，README只新增顶部报告链接并保留历史。未提交、推送、部署或启动服务。
