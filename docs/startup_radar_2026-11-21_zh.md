# Startup Radar 创业机会日报｜2026-11-21

> UTC快照日：2026-11-21。证据整理截止：2026-11-21T01:21:23Z。
> GitHub三窗指标：2026-11-21T01:19:12Z；Show HN指标：2026-11-21T01:18:16Z。网页来源的时间为本批次整理截止，不表示各站同步更新。
> 6款当前发布、6个近期社区投稿、10个Trending仓库、7条市场信号、8条具名反馈；7个主题、6个未验证机会。

本期先验证**Walmart单类目属性映射验收（70分）**与**订阅商品跨入口回归（66分）**。研究重点是一次上架或改版能否少返工，并非已发现可规模化生意。首项有两名商户的相近主诉，第二项只有单店入口差异；都缺少根因复现和付费证据。[上架主诉](https://apps.shopify.com/marketplace-connect/reviews)、[订阅反馈](https://apps.shopify.com/shopify-subscriptions/reviews)。

本期最有用的反证是：原生功能已覆盖不少用户请求。Marketplace Connect已有属性映射；Subscriptions已有固定账单日和合同商品编辑。相关机会因此收窄为配置与变更核查服务，不能宣称这些能力不存在。[映射文档](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)、[固定日](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同编辑](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。

## 1. 方法与证据口径

研究前读取了[研究方法](startup_radar_method_zh.md)、现有[结构化数据](../src/data/radar.json)和最近一期[2026-11-20日报](startup_radar_2026-11-20_zh.md)。本期严格使用2026-11-21 UTC；采集日、投稿日、PH发布批次、报道日期和融资交割分别处理。

沿用100分规则：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数是研究优先级，不是成功率、收入预测或投资建议。所有买家、样本量、试售目标、停止条件都是拟议实验，本期未做访谈或商业交付。

证据分为平台观察、具名主诉、功能提问、厂商自述、官方机制、媒体融资报道及研究推断。相同产品的PH与README不构成两个独立买家；多个供应者也不等于多份需求。Stars、票数、评分、评论与融资只作信号。评论中的正面评价、现成解决办法和厂商回应都参与降分；不采用平台AI评论摘要或标为Likely AI的留言作需求证据。

## 2. 相比11-20的实质变化

- **发布6/6换选。** 今天读取的PH批次转向代理隔离、CI证据、模型可视化、票据复核、BIM交付与写操作恢复；Docker徽章显示11-20，不能称作11-21 UTC首发。[本次发布列表](https://www.producthunt.com/)。
- **社区6/6换选。** 六项均为11-20投稿，晚于上期截止；涉及数据含义、数字来源、虚拟时间、有状态模拟、工具权限及缓存诊断。七日过滤内仍只检视最新100条，不称完整周榜。[本次固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794619095%2Ccreated_at_i%3C%3D1795223895&hitsPerPage=100)。
- **GitHub精选新增9项，刷新保留1项。** 保留[opensre](https://github.com/Tracer-Cloud/opensre)；其余九项只表示本期精选集合变化，不表示首次登榜。三窗共46条记录、40个去重仓库；全部精选指标重新读取。
- **市场换选6项并复核RFS。** 换入两笔全球融资、两条中国融资及两家YC公司；RFS仍是Winter 2027，本次转看垂直模型的验证目标。不是七笔今日融资。
- **反馈8/8换选。** 五条商城反馈为11-04至11-19，另三条为当前PH讨论；加入同源的第二名Walmart投诉者，同时保留订阅原生功能和回滚机制的反证。
- **六个机会重新定义并评分。** 上期邮件交付、优惠规则、知识库、MCP客户端兼容、并行数据隔离和日志脱敏退出当期精选，不表示问题已经解决。本期CI建议聚焦任务终态和收尾证据，区别于上期并行测试数据污染。

## 3. 来源覆盖

| 来源 | 覆盖 | 观察及边界 |
| --- | --- | --- |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 16 / weekly 13 / monthly 17 | 三窗均为Language Any / Spoken Language Any；46条窗口记录、40个去重仓库，精选10个。记录窗口增量，不相加，不解释为采购。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 换选本次Top Products Launching Today中的六项；Docker徽章为11-20，批次不等于11-21 UTC首发。包括既有产品更新；不使用票数排名。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794619095%2Ccreated_at_i%3C%3D1795223895&hitsPerPage=100) | 1,080匹配 / 检视最新100 / 精选6 | 固定七日11-14T01:18:15Z至11-21T01:18:15Z；精选均为11-20投稿。只扫描最新100条，未分页普查；投稿日不等于项目创建日。 |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 官方分类目录 / 2家公司详读 | 总目录没有可读正文；改读开发工具目录及Plover Labs、Tesser公司页。批次、Active和公司自述不是今日融资或独立收入验证。 [总目录](https://www.ycombinator.com/companies)、[Plover Labs](https://www.ycombinator.com/companies/plover-labs)、[Tesser](https://www.ycombinator.com/companies/tesser) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | Winter 2027复核 / 垂直模型命题 | 最新可见版本未变；本期聚焦领域数据、可验证奖励与算力优势。硬件、数据中心供应链与离线部署另标资本和交付约束。 |
| [Crunchbase News](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 2篇11-20报道 / 精选2笔融资 | 详读周度大额融资及月度特色交易报道；精选Model ML与Science，均来自周榜。报道日期不是两笔融资的交割日，也不代表全球全量。 [月度交易扫描](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/) |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2条中国融资 / 公开列表字段 | 换选基元科技和医槌定因；详情仅返回页面壳。只采用列表明示的轮次、金额及相对日期，不补猜币种、金额或交割日。 [基元详情（无有效正文）](https://36kr.com/newsflashes/4077374734308485)、[医槌详情（无有效正文）](https://36kr.com/p/4077404305707912) |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 未取得记录 | 本次公开首页返回412后停止；使用36氪公开列表补充中国信号。未登录、未绕过限制。 |
| [Shopify App Store](https://apps.shopify.com/marketplace-connect/reviews) | 尝试10款 / 9页可读 / 精选5条 | 精选Marketplace Connect与Subscriptions，评论日期11-04至11-19；本批次页面整体评级4.2/2,155评与3.8/918评。评级不是投诉者星级或故障率。 [Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews) |
| [PH讨论与Shopify官方文档](https://www.producthunt.com/products/currents-4) | 3条当前讨论 / 原生能力反证 | CI超时、不可逆动作与依赖回滚分别记录为经历、提问和厂商答复。官方已有属性映射、固定账单日及合同换品；不把已有能力包装成缺口。 [UndoGuard讨论](https://www.producthunt.com/products/undoguard)、[属性映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)、[合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[订阅设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup) |

GitHub通过匿名公开HTTPS读取三窗，确认**Language Any / Spoken Language Any**。表内Stars均为榜单显示的窗口增量，不是总Stars；同一仓库跨窗增量不相加，滚动窗口也不作为环比增速。[daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)。

HN的固定窗口是**2026-11-14T01:18:15Z—2026-11-21T01:18:15Z**，返回1,080条匹配中的最新100条。逐项检视标题和项目链接，再详读六个入选原文；样本集中最近一天，存在明显时间和技术主题偏差。points/comments固定在01:18:16Z，之后读取项目原文不回写这些指标。[可复查查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794619095%2Ccreated_at_i%3C%3D1795223895&hitsPerPage=100)。

商城尝试了十款：[Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Google & YouTube](https://apps.shopify.com/google/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews)、[Stocky](https://apps.shopify.com/stocky/reviews)、[Search & Discovery](https://apps.shopify.com/search-and-discovery/reviews)、[Forms](https://apps.shopify.com/shopify-forms/reviews)、[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)、[POS](https://apps.shopify.com/shopify-pos/reviews)、[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews)、[Order Printer（不可读）](https://apps.shopify.com/order-printer/reviews)。九页可读，默认排序并非按时间全量扫描；Google与Stocky显示昨日缓存，未精选。具体选取以当前页面中具名、可定位的反馈为准，未可靠读取单条星级。

## 4. 来源快照

L、T、G、M、P编号对应下面各表及机会证据。所有工具功能均以原文自述为限，本期没有安装、运行或测试第三方产品。

### 4.1 当前发布

| 编号 / 产品 | 发布口径 | 观察与限制 |
| --- | --- | --- |
| L1 [Docker：代理隔离与治理更新](https://www.producthunt.com/products/docker) | 11-21读取当前Launching Today；徽章日期11-20；第2次PH发布 | 此次定位结合供应链、Sandboxes和AI Governance；为厂商发布信息，未测试隔离或治理效果。 当前更新发布 / 厂商自述。 |
| L2 [Currents：CI记录接入代理](https://www.producthunt.com/products/currents-4) | 11-21读取当前Launching Today | 把Playwright运行历史、轨迹和错误提供给代理；作者说明已有修复约束与人工决定环节，不是无人审批即可合并。 当前集成发布 / 厂商机制说明。 |
| L3 [tensorViz](https://www.producthunt.com/products/tensorviz) | 11-21读取当前Launching Today | 作者称通过一次前向运行展示模块及张量形状供代理读取；单次路径不覆盖所有输入或模型质量。 当前发布 / 开源供给；未运行。 |
| L4 [Veryfi Thinking Mode](https://www.producthunt.com/products/veryfi) | 11-21读取当前Launching Today；第2次PH发布 | 为收据与发票抽取增加复核环节；light/deep为请求级选项。未独立验证纠错率，不等于业务口径一致。 当前功能发布 / 厂商自述。 |
| L5 [Bimdrop](https://www.producthunt.com/products/bimdrop) | 11-21读取当前Launching Today | 在浏览器中查看、分享多类BIM/CAD文件；本次只确认定位，未验证格式保真、版本权限或项目交付效果。 当前发布 / 厂商自述。 |
| L6 [UndoGuard](https://www.producthunt.com/products/undoguard) | 11-21读取当前Launching Today | 提供状态快照与回滚代理；作者答复区分不可逆外发、延迟发送及依赖冲突。方案自述不构成通用回滚保证。 当前发布 / 能力边界已有答复。 |

### 4.2 最近七日内的技术社区项目

所有热度数据均为**2026-11-21T01:18:16Z快照**。投稿新不代表项目或全部功能新；不采用作者基准测试数字作本报告验证结果。

| 编号 / 项目 | 投稿UTC / points / comments | 原文与边界 |
| --- | --- | --- |
| T1 [SaturnSQL Context](https://news.ycombinator.com/item?id=50583881) | 2026-11-20T23:31:55Z / 3 / 1 | 为字段单位、业务定义和旧表选择提供上下文；官方明确它不是指标引擎，也不保证每次返回相同数字。 [项目原文](https://saturnsql.com/context-layer) |
| T2 [Tally](https://news.ycombinator.com/item?id=50582528) | 2026-11-20T21:35:04Z / 2 / 0 | 将数值历史与出处关联，并显示部分来源不可读的状态；只研究产品形态，不采用其展示的融资或估值数字。 [项目原文](https://tallycatalog.com/) |
| T3 [ChronoStack](https://news.ycombinator.com/item?id=50575235) | 2026-11-20T14:38:10Z / 1 / 0 | 在Compose副本中推进虚拟时间并核验任务；Alpha阶段，需声明部分调度触发器，不支持Go等静态二进制。 [项目原文](https://github.com/Asmodeus14/ChronoStack/blob/main/README.md) |
| T4 [Stripe World](https://news.ycombinator.com/item?id=50574834) | 2026-11-20T14:05:46Z / 1 / 0 | 提供独立状态和变更日志供测试；非Stripe官方项目，不投递webhook，模拟结果不能证明真实支付完成。 [项目原文](https://github.com/Kiln-AI/stripe_world/blob/main/README.md) |
| T5 [Shielda Agent Guard](https://news.ycombinator.com/item?id=50575068) | 2026-11-20T14:25:35Z / 2 / 0 | 按任务资源限制工具并绑定具体动作审批；仅覆盖经过guard的调用，不能替代宿主权限与隔离。 [项目原文](https://github.com/ShieldaAI/agent-guard/blob/main/README.md) |
| T6 [Prefixwise 0.12投稿](https://news.ycombinator.com/item?id=50581015) | 2026-11-20T19:58:55Z / 2 / 0 | 提供缓存原因分析与回归检查；作者限定验证流量形态，部分上游诊断不可用。未复测节省率。 [项目原文](https://github.com/tejachavali/prefixwise/blob/main/README.md) |

### 4.3 GitHub Trending三窗

指标时间统一为**2026-11-21T01:19:12Z**。仓库链接用于定位项目，窗口链接用于标明指标来源；这些滚动页面日后会变化。

| 编号 / 仓库 | 窗口增量 | 定位及推断边界 |
| --- | --- | --- |
| G1 [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | daily +773 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位软件的代理可调用入口；可调用不意味着具备业务授权。 |
| G2 [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | daily +869 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位提交前规则检查；条目数和热度不构成法律意见或商店审核通过保证。 |
| G3 [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | daily +466 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位CI/CD代理；与Currents形成相邻供给，具体故障归因仍需日志和业务预期。 |
| G4 [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | daily +676 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位文档与协作知识库；是通用替代供给，未验证本期客户迁移需求。 |
| G5 [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | weekly +3,555 stars / monthly +4,344 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 周榜及月榜均出现；提供计划和审阅交互，不据此推定执行权限控制。 |
| G6 [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | weekly +4,457 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单描述确定性流程结合模型审阅；未核验准确率、客户采用或本期应用适配。 |
| G7 [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | weekly +3,306 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单提供开发工具接入方向；可作页面排查候选，不代表商业流程已通过。 |
| G8 [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | weekly +3,268 stars / monthly +6,641 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 周榜及月榜可见的本地视频工具供给；没有本期视频工作流的独立付费需求。 |
| G9 [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | monthly +19,612 stars；[monthly榜](https://github.com/trending?since=monthly) | 月榜描述可编辑视频生成工具；供应者扩展不证明另一个通用剪辑产品存在空位。 |
| G10 [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | monthly +8,855 stars；[monthly榜](https://github.com/trending?since=monthly) | 月榜定位浏览器自动化CLI；适合作为验收实现候选，未实测本期主题。 |

### 4.4 市场、融资与投资命题

| 编号 / 信号 | 日期及指标 | 证据边界 |
| --- | --- | --- |
| M1 [Model ML：金融与专业服务AI融资](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 报道2026-11-20；$250M Series B；估值$1.5B | 报道列出General Atlantic与QED领投；资本显示该类别已有强供给，不能推导本期窄数据核查服务的预算。 媒体融资报道；未独立核验交割。 |
| M2 [Science：脑机接口融资](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 报道2026-11-20；$400M Series D | 周榜列出脑机接口及神经工程融资；明确资本密集、研发交付周期长，不列作两周小团队MVP。 媒体融资报道；非产品效果证据。 |
| M3 [基元科技：二维半导体产线设备](https://pitchhub.36kr.com/financing-flash) | 本次列表标昨天；数千万元天使轮；币种未明示 | 列表称朝晖芯华基金领投，定位生长、转移、检测设备；不采用未核实的唯一性和订单宣传，属于资本密集方向。 媒体列表；详情无有效正文。[详情（无有效正文）](https://36kr.com/newsflashes/4077374734308485) |
| M4 [医槌定因：涉医法务AI](https://pitchhub.36kr.com/financing-flash) | 本次列表标21小时前；种子轮；列表未显示金额 | 仅确认列表所述融资轮次与涉医法务定位；条目署名为公司，不是独立采购、专业结论或交割验证。 公开列表中的公司投稿；信息有限。[详情（无有效正文）](https://36kr.com/p/4077404305707912) |
| M5 [Plover Labs：代理代码的验证门槛](https://www.ycombinator.com/companies/plover-labs) | 11-21复核；Fall 2026 / Active | 公司自述持续学习代码库并加入确定性验证门槛；未独立核验其客户、收入与效率宣传。 官方目录 + 公司自述。[发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| M6 [Tesser：并行云开发环境](https://www.ycombinator.com/companies/tesser) | 11-21复核；Winter 2027 / Active | 公司自述把构建与测试移至独立云环境，并支持客户自有云；不等于解决所有应用数据共享或CI收尾问题。 官方目录 + 公司自述。[发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| M7 [YC Winter 2027：垂直模型的可验证目标](https://www.ycombinator.com/rfs) | 11-21复核；最新可见版本仍为Winter 2027 | YC强调领域数据权利、可验证奖励与计算效率；本期将其当验证设计背景，模型训练与硬件整包另列长周期。 既有投资观点复核；非新融资或客户需求。 |

M1、M2是同一篇周榜中的两笔融资，不是两份独立行业统计。M3、M4是公开列表：金额、轮次和相对日期不补全，医槌定因条目为公司署名。M5、M6是当前供给目录；M7是既有投资观点。融资、Active状态和公司宣传均不构成本期客户预算证据。

### 4.5 具体投诉、请求与当前回应

本批次读取的整体评分：[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews) **4.2 / 2,155评**；[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews) **3.8 / 918评**。这是应用整体评分，不能分配给某条投诉，也不是故障发生率。

| 编号 / 反馈 | 日期或相对时间 | 观察及标签 |
| --- | --- | --- |
| P1 [shopnathans.com：Walmart上架缺字段](https://apps.shopify.com/marketplace-connect/reviews) | 评论2026-11-07 | 商户称所需字段无法在表单填写，导致上架失败；未提供类目及错误样本，根因未复现。 **近期具名主诉；不是全平台缺字段证明**。 |
| P2 [Layerform Collective：映射绕行仍无法同步](https://apps.shopify.com/marketplace-connect/reviews) | 评论2026-11-04 | 商户称必填JSON字段及自定义元字段绕行均未解决同步；官方有映射功能，具体字段支持仍待核对。 **第二名商户的相近主诉；未验证同一根因**。 |
| P3 [Biowine.dk：月度日期及箱内商品调整](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-13 | 请求统一月度日期并更换每月酒款；当前官方文档已有固定日和合同商品编辑，不能记为缺失能力。 **近期功能请求 + 原生能力反证**。 |
| P4 [Creativity for Hope：推荐商品区块订阅报错](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-05 | 商户称Archer Commerce的Featured Product区块报selling plan错误，但商品详情页正常；未独立复现。 **具体入口差异主诉；不能断言主题通用缺陷**。 |
| P5 [Golden Tallow：订阅管理页定制受限](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-19 | 商户希望更多订阅管理页定制；官方已有管理页区块与入口设置，不应把定制限制表述为无自助管理。 **近期体验反馈 + 已有能力对照**。 |
| P6 [Anthony Fontana：测试通过但CI任务超时如何判断](https://www.producthunt.com/products/currents-4) | 留言6h ago；保留平台相对时间 | 用户称本月main分支失败阻碍部署，并询问测试全过但job超时的呈现；问题不证明Currents漏报。 **具名经历 + 边界提问；非已复现产品缺陷**。 |
| P7 [Andrei Breaz：已经外发的动作能否撤回](https://www.producthunt.com/products/undoguard) | 提问14h ago；作者答复12h ago | 用户以已发邮件追问回滚范围；作者称将用延迟窗口、不可逆标记和补偿。已有回应，未独立验证实现。 **具体提问 + 厂商能力边界答复**。 |
| P8 [JC：回滚中途动作后的依赖怎么办](https://www.producthunt.com/products/undoguard) | 提问7h ago；作者答复4h ago | 用户询问后续依赖；作者称同资源冲突会拒绝单步回滚，并提供逆序恢复。未证明跨资源因果完整性。 **具体提问 + 已有机制；非采购证据**。 |

P1、P2是两名商户，但未取得类目、版本与失败响应，不能认定同一根因。P3、P5包含现成能力或部分解决路径。P6的超时场景是提问；P7、P8已有厂商答复。以上均不等于付款承诺。

## 5. 影响推荐的反证

1. **属性映射本身已经存在。** 官方文档允许以元字段补充并映射目录属性。首轮应区分未填、填错、映射错误与连接器不支持；商户记录不足时保留未知，不因两条差评就另造全渠道同步平台。[原生属性映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)。
2. **订阅日期与换品不需要先写新应用。** 官方提供固定日和合同商品编辑，并说明改日期会重置个别改期、已扣款周期存在编辑限制。这让“配置是否可核对”比“有没有日期按钮”更值得访谈。[订阅计划](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同规则](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。
3. **自助管理入口不等于任意定制。** 官方已有订阅管理页及相关区块；不能由Golden Tallow的体验反馈推出平台完全没有自助页面。主题widget配置也需先核对，才能讨论入口缺陷。[订阅设置与主题说明](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)。
4. **CI证据接入与修复约束已有供给。** Currents对改测试及重试问题给出机制说明；本期只保留测试报告之外的任务终态归因，不假设需要新建轨迹平台。Plover的商业宣传没有独立验证。[产品与答复](https://www.producthunt.com/products/currents-4)、[目录供给](https://www.ycombinator.com/companies/plover-labs)。
5. **通用撤销的承诺过大。** UndoGuard答复已区分外发与状态恢复；guard原文明示只约束经过其路径的调用。执行超时后缺少可观察结果时，应记录unknown；不能由回滚日志推定所有外部系统已恢复。[回滚答复](https://www.producthunt.com/products/undoguard)、[权限边界](https://github.com/ShieldaAI/agent-guard/blob/main/README.md)。
6. **模拟不代表真实系统等价。** Stripe World是非官方模拟且不投递webhook；ChronoStack是Alpha，推进时间不自动触发所有调度器，也不能控制Shopify托管服务。两者仅提供方法参考。[模拟边界](https://github.com/Kiln-AI/stripe_world/blob/main/README.md)、[时间边界](https://github.com/Asmodeus14/ChronoStack/blob/main/README.md)。
7. **语义提示不等于确定性指标。** SaturnSQL明确上下文不保证一致数字；Veryfi的抽取复核也不能替客户决定业务定义。指标机会因此仅54分，需先取得真实口径分歧与负责人。[上下文边界](https://saturnsql.com/context-layer)、[相邻抽取供给](https://www.producthunt.com/products/veryfi)。

## 6. 跨源主题

“跨源”包括供给、机制及方法类比，标签已明确；不将它们累计成独立客户数量。

| 主题 | 证据标签 / 来源 | 观察与推断 |
| --- | --- | --- |
| 跨市场商品交付需要字段级验收 | 两名商户主诉 + 原生能力 + 技术方法类比；Shopify App Store、Shopify Help Center、Show HN | Walmart字段反馈与现成映射能力并存；SaturnSQL提供含义说明的相邻方法。 推断：验证特定类目的字段映射与失败证据；数据库上下文工具没有证明Walmart集成可行。 [主诉](https://apps.shopify.com/marketplace-connect/reviews)、[已有映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)、[方法类比](https://saturnsql.com/context-layer) |
| 订阅商品要按页面入口验收 | 单店故障主诉 + 官方设置 + 浏览器证据供给；Shopify App Store、Shopify Help Center、Product Hunt、GitHub Trending | 推荐区块与商品页行为不同；Currents和Chrome DevTools MCP为记录候选。 推断：先交付一个主题的入口矩阵；没有漏单金额或通用主题缺陷证据。 [主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)、[轨迹供给](https://www.producthunt.com/products/currents-4)、[调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| CI测试结果与任务终态需要分别保留 | 用户经历及提问 + 厂商答复 + 商业供给；Product Hunt、YC Company Directory、GitHub Trending | Currents讨论触及job超时；Plover与opensre显示验证工具竞争已密集。 推断：核对测试、收尾与CI任务状态，先验证现有日志是否足够；不再造通用自动修复代理。 [讨论](https://www.producthunt.com/products/currents-4)、[验证供给](https://www.ycombinator.com/companies/plover-labs)、[CI供给](https://github.com/Tracer-Cloud/opensre) |
| 月度订阅的剩余工作在变更核对 | 功能请求 + 已有原生能力 + 时间测试供给；Shopify App Store、Shopify Help Center、Show HN | 固定账单日和商品编辑已存在；ChronoStack与Stripe World提示周期和状态可单独验证。 推断：只试做商家变更清单；两款开发工具都不能直接控制Shopify托管账单周期。 [请求](https://apps.shopify.com/shopify-subscriptions/reviews)、[合同规则](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[虚拟时间](https://github.com/Asmodeus14/ChronoStack/blob/main/README.md)、[模拟状态](https://github.com/Kiln-AI/stripe_world/blob/main/README.md) |
| 回滚、权限与运行隔离各有边界 | 具体提问 + 厂商答复 + 开源限制声明；Product Hunt、Show HN、GitHub Trending | UndoGuard回应不可逆与依赖问题；Agent Guard仅管经过它的调用，Docker提供相邻隔离供给。 推断：验证一个业务接口的动作分类和失败处理；状态副本不能证明外部副作用已撤销。 [恢复边界](https://www.producthunt.com/products/undoguard)、[权限边界](https://github.com/ShieldaAI/agent-guard/blob/main/README.md)、[隔离供给](https://www.producthunt.com/products/docker)、[人工审阅供给](https://github.com/backnotprop/plannotator) |
| 数字正确性需要业务定义与来源 | 供应者自述 + 能力限制 + 投资命题；缺独立需求；Show HN、Product Hunt、YC RFS | SaturnSQL区分上下文和指标引擎；Tally保留出处，Veryfi增加票据复核。 推断：先验证少数指标的金标准样本。三个供给点不等于三个客户，抽取正确也不代表业务口径正确。 [上下文边界](https://saturnsql.com/context-layer)、[出处供给](https://tallycatalog.com/)、[抽取复核](https://www.producthunt.com/products/veryfi)、[垂直目标命题](https://www.ycombinator.com/rfs) |
| 资本热点需要单列交付门槛 | 全球及中国融资报道 + YC投资观点；Crunchbase News、36氪、YC RFS | 企业AI、神经工程、半导体设备及涉医法务均有本期可见融资条目。 推断：软件验证服务可小范围试售；设备、临床研发、离线整包与自训基础模型明确资本或专业交付密集。 [全球周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[投资命题](https://www.ycombinator.com/rfs) |

## 7. 六个机会及100分评分

全部为**未验证、先做有限服务交付的低资本假设**。最高需求分20/30；本期没有核实损失账本、签约或收入。比较对象是现有工具加一次配置的成本，而不是假设客户一定需要新软件。

| 机会 | 需求/30 | 买家/20 | 跨源/15 | 两周/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 Walmart单类目必填属性映射验收包 | 20 | 18 | 9 | 13 | 7 | 3 | 70 |
| 02 Shopify订阅商品的跨入口回归包 | 17 | 18 | 9 | 13 | 6 | 3 | 66 |
| 03 Playwright测试通过但CI任务失败的归因包 | 16 | 17 | 11 | 11 | 5 | 4 | 64 |
| 04 月度订阅箱的日期与换品变更核对 | 14 | 18 | 8 | 13 | 6 | 3 | 62 |
| 05 代理写接口的不可逆动作与恢复验收 | 12 | 17 | 11 | 11 | 5 | 4 | 60 |
| 06 AI报表核心指标的定义回归包 | 8 | 16 | 10 | 12 | 4 | 4 | 54 |

### 01 Walmart单类目必填属性映射验收包 — 70分

在一次批量上架前，把商品字段、映射配置和平台拒绝原因对齐，验证能否减少往返修订。

**买家假设：** 假设使用者为商品运营，批准和付款人为替品牌维护Shopify与Walmart目录的小型服务商负责人。

**窄MVP：** 一个类目、20个获授权SKU；以商户提供的导出及错误记录制作字段对照、缺失项和最小复现包，先复用原生映射，由商户确认结果。

**证据判断：** P1、P2为两名近期商户的相近失败主诉，尚无同类目、同版本或相同根因证据。 官方已有元字段和属性映射；T1仅为含义记录的方法类比。必须先查配置及具体字段支持，不能宣称连接器普遍缺能力。 [两条主诉](https://apps.shopify.com/marketplace-connect/reviews)、[原生映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)、[官方上架要求](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/requirements)、[方法类比](https://saturnsql.com/context-layer)。

**评分理由：** 两条近期具体主诉提高需求分；没有损失账本，且原生替代明确，跨源与防御性保持低分。

**主要风险：** 若目标字段无法通过官方入口映射，验收只能形成支持工单；原生配置或供应商修复可能消除独立付费空间。

**两周实验：** 计划第1周访谈3家跨市场服务商，取得1个类目的20个授权样本；第2周由客户逐项确认字段来源与错误复现，记录修订次数和人工分钟，争取1次付费交付。未执行。

**停止条件：** 原生映射一次配置即可解决全部样本、拿不到具体错误，或必须绕过平台限制才能完成时停止产品化。

**前20位潜客路径：** 拟从公开Walmart/Shopify实施案例筛选前20家服务商，先问最近一次失败上架；不把差评者自动当销售线索。

**可积累资产：** 可积累类目、字段版本和平台错误的经确认映射样本；初期主要是实施经验。

### 02 Shopify订阅商品的跨入口回归包 — 66分

在主题改版或促销前，验收同一订阅商品从不同页面进入购物车时的计划选择与错误行为。

**买家假设：** 假设使用者为主题开发者，批准和付款人为维护订阅商店的Shopify小型实施团队负责人。

**窄MVP：** 一个授权测试店、一个主题、一个订阅商品；检查详情页、推荐区块及快速加购三个入口，保存计划选择、请求及页面证据，不触发真实扣款。

**证据判断：** P4提供具体入口差异，但仅一店且未复现；不能推定整个主题或所有订阅应用有同一缺陷。 官方有主题与widget配置说明；L2、G7、G10只提供浏览器记录或自动化候选，不证明已有Shopify集成。 [入口主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[官方设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)、[CI证据产品](https://www.producthunt.com/products/currents-4)、[调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp)、[自动化候选](https://github.com/vercel-labs/agent-browser)。

**评分理由：** 触发点与交付对象明确、测试范围小；单店样本和强原生替代限制需求与防御分。

**主要风险：** 问题可能只需正确配置或主题供应商补丁；小改版服务未必有持续预算，浏览器通过也不能证明续订扣款成功。

**两周实验：** 计划第1周访谈3家主题服务商并取得1个授权副本；第2周按3入口及购买方式完成6组对照，记录复现率和修复前后证据，争取1次付费验收。未执行。

**停止条件：** 无法复现差异、现成主题检查已覆盖，或商户只愿接受免费支持时停止；不把未测试的账单流程判为通过。

**前20位潜客路径：** 拟从公开订阅店改版案例寻找前20家主题服务商，按即将交付的改版项目筛选。

**可积累资产：** 可积累主题版本、入口和selling plan状态组合的回归样本；不依赖重新生成测试代码形成壁垒。

### 03 Playwright测试通过但CI任务失败的归因包 — 64分

将测试结果、CI任务结束状态和收尾步骤分开核对，为一次阻塞发布的失败交付可复现归因。

**买家假设：** 假设使用者为QA或平台工程师，批准和付款人为已有Playwright CI的小型B2B SaaS工程负责人。

**窄MVP：** 一个仓库、10次客户授权的历史失败运行；对照测试报告、job退出原因、超时与清理日志，输出已证实原因、缺证据项和单一修复建议。

**证据判断：** P6包含本月失败阻塞经历及全测试通过后job超时的提问；不是Currents漏报的证明。 L2已有轨迹读取和修复约束，M5、G3为竞争供给。服务价值须来自客户日志中的具体缺口，而非再接一次MCP。 [经历与提问](https://www.producthunt.com/products/currents-4)、[CI竞争供给](https://github.com/Tracer-Cloud/opensre)、[验证竞争供给](https://www.ycombinator.com/companies/plover-labs)、[环境供给](https://www.ycombinator.com/companies/tesser)。

**评分理由：** 有近期工作阻塞描述且竞争具体；问题尚未复现，历史证据可得性压低两周验证分。

**主要风险：** 缺少runner收尾日志时无法分辨测试外错误；CI原生视图或现有产品可能已经足够。不能把重跑成功当修复。

**两周实验：** 计划第1周访谈3个团队并收集10次失败运行；第2周挑1个可复现问题在测试环境验证，分别记录测试结果与job状态，争取1次付费排查。未执行。

**停止条件：** 现有工具直接解释全部失败、取不到关键日志，或只能靠增加重试掩盖失败时停止；证据不全记unknown。

**前20位潜客路径：** 拟从公开Playwright实施和CI迁移案例筛选前20个团队，优先有近期发布阻塞者。

**可积累资产：** 可积累应用特定的退出、清理及超时反例与验收规则；通用日志聊天没有独立壁垒。

### 04 月度订阅箱的日期与换品变更核对 — 62分

复用原生合同管理，为一次月度换品与日期调整交付变更前后清单，验证遗漏核对是否值得单独付费。

**买家假设：** 假设使用者为订阅箱运营，批准和付款人为每月轮换商品的小品牌运营负责人或其实施服务商。

**窄MVP：** 一店、10份脱敏合同、一次拟议月度变更；记录商品、固定日、改期及跳过状态，由商户核对未来两个周期。先在文档或测试副本演练。

**证据判断：** P3是近期请求；官方已支持固定账单日与合同商品编辑，所以不推荐开发新的日期选择器或基础换品功能。 官方描述调整日期会影响个别改期，且已扣款周期存在限制；T3/T4仅是时间和状态测试方法，不是Shopify托管账单的控制工具。 [用户请求](https://apps.shopify.com/shopify-subscriptions/reviews)、[已有固定日](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同规则](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[方法类比](https://github.com/Asmodeus14/ChronoStack/blob/main/README.md)、[模拟边界](https://github.com/Kiln-AI/stripe_world/blob/main/README.md)。

**评分理由：** 需求主体清楚但请求已有原生回应，需求与跨源分下调；小范围核对仍可快速验证。

**主要风险：** 一次操作培训可能已足够；合同变化还会影响提醒与订单节奏。未经客户确认不能从计划表推定真实扣款或履约结果。

**两周实验：** 计划第1周访谈3名订阅箱运营并按10份授权样本列出目标状态；第2周核对2个未来周期，记录遗漏、手工分钟和培训是否足够，争取1次付费实施。未执行。

**停止条件：** 原生操作说明已满足需求、没有反复换品或核对工作，或需要直接改真实扣款才能做首轮验证时停止。

**前20位潜客路径：** 拟从公开订阅箱实施案例筛选前20家品牌或服务商，优先确认实际月度变更流程。

**可积累资产：** 可积累经商家批准的周期例外与变更验收记录；没有证据支持先建完整订阅平台。

### 05 代理写接口的不可逆动作与恢复验收 — 60分

为准备开放写权限的一条CRM集成，明确哪些动作可恢复、哪些只能补偿，以及不确定结果如何交由人处理。

**买家假设：** 假设使用者为集成工程师，批准和付款人为向客户交付代理工作流的小型B2B SaaS技术负责人。

**窄MVP：** 一个授权测试接口、记录更新/通知/外部webhook三类动作、12个合成案例；测试重复调用、并发更新、超时与恢复，输出动作分类和证据清单。

**证据判断：** P7、P8均有厂商答复，不能当作未解决缺陷；同资源冲突检查也没有证明覆盖跨资源因果依赖。 T5明确只约束经过guard的调用；L1为相邻运行隔离供给。权限、隔离和业务恢复分别验收，不承诺万能撤销。 [恢复边界答复](https://www.producthunt.com/products/undoguard)、[权限限制原文](https://github.com/ShieldaAI/agent-guard/blob/main/README.md)、[隔离供给](https://www.producthunt.com/products/docker)、[状态测试方法](https://github.com/Kiln-AI/stripe_world/blob/main/README.md)。

**评分理由：** 具体问题与实现候选充分，但仍以提问和供应者自述为主，尚无付款或损失证据。

**主要风险：** 绕过受控调用路径、并发变更或外部系统不可观察都会破坏恢复假设；补偿通知可能产生新的副作用。

**两周实验：** 计划第1周访谈3个已准备写接口的团队并确认动作清单；第2周用12个合成案例核验外发、冲突与unknown处理，争取1次付费验收。未执行。

**停止条件：** 现有产品配置已满足验收、无法识别外部副作用，或客户要求保证所有动作可撤销时停止该承诺。

**前20位潜客路径：** 拟从公开CRM自动化交付案例筛选前20家小型集成商，先确认客户对写权限的实际验收要求。

**可积累资产：** 可积累接口版本、幂等边界、并发冲突和补偿规则的客户确认案例；初期是专门化服务。

### 06 AI报表核心指标的定义回归包 — 54分

给已使用AI查数的小型SaaS建立少量经业务负责人确认的指标样本，验证上下文改变是否使答案偏离既定口径。

**买家假设：** 假设使用者为分析师，批准人为业务指标负责人，付款人为有AI报表交付责任的小型SaaS数据负责人。

**窄MVP：** 一个客户授权的测试数据库、3个指标、10个金标准问题；固定单位、时间边界和有效记录规则，用既有SQL作参照比较两个客户端，交付差异及unknown清单。

**证据判断：** T1明确上下文不保证数字一致；T2展示来源记录方式，均是供应者证据，未取得独立买家主诉。 L4处理票据抽取，M7提出领域验证命题；二者不证明报表采购或需要再建语义层。 [上下文限制](https://saturnsql.com/context-layer)、[来源记录供给](https://tallycatalog.com/)、[相邻抽取供给](https://www.producthunt.com/products/veryfi)、[投资观点](https://www.ycombinator.com/rfs)。

**评分理由：** 缺乏独立需求，需求分仅8/30；买家和有限交付可描述，保留为低优先级访谈假设。

**主要风险：** 没有业务真值就只能比较模型彼此一致；现有语义层与数据库测试可能已足够，定义维护责任也可能不明确。

**两周实验：** 计划第1周访谈3个已有AI报表的团队，要求展示一次口径分歧；仅在负责人确认3项定义后，第2周运行10问对照并询问付费意愿。未执行。

**停止条件：** 找不到真实口径分歧、无人负责批准指标，或现有语义层已完全解决时停止；不把所有模型答案一致当业务正确。

**前20位潜客路径：** 拟从公开AI报表和自助分析实施案例筛选前20家小团队；不以融资报道代替潜客名单。

**可积累资产：** 可积累获授权的定义、边界样例及版本变更记录；不是通用自然语言查数界面。

## 8. 拒绝、拥挤与资本密集方向

- **另一个通用代理、CI自动修复器或云开发环境。** Currents、opensre、Plover及Tesser已展示不同层次的供给。若没有具体失败样本和预算，只增加一个聊天入口不足以立项。[Currents](https://www.producthunt.com/products/currents-4)、[opensre](https://github.com/Tracer-Cloud/opensre)、[Plover](https://www.ycombinator.com/companies/plover-labs)、[Tesser](https://www.ycombinator.com/companies/tesser)。
- **新的基础订阅日期选择器或元字段编辑器。** 官方能力已存在；先测试流程交付有没有剩余工作，不把用户不了解功能当成长期市场。[固定账单日](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[属性映射](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/marketplace-connect/products/customize)。
- **“任意API一键撤销”。** 先前状态副本不代表外发、并发和跨资源依赖可完全恢复。已有供应商也承认边界，不能作小团队的无条件承诺。[UndoGuard讨论](https://www.producthunt.com/products/undoguard)。
- **通用AI票据抽取、查数界面、BIM查看器与视频剪辑包装。** 本期已有Veryfi、SaturnSQL、Bimdrop以及两类视频开源工具供给，但没有相应工作流的独立采购样本。暂不为这些泛化方向给高需求分。[票据复核](https://www.producthunt.com/products/veryfi)、[数据含义](https://saturnsql.com/context-layer)、[BIM分享](https://www.producthunt.com/products/bimdrop)、[视频工程](https://github.com/heygen-com/hyperframes)、[本地视频工具](https://github.com/kajisho5/ffmpeg-skill)。
- **脑机接口、二维半导体产线、自训基础模型、硬件整包及数据中心供应链。** 明确资本密集或研发交付周期长，融资新闻不使其变成两周MVP。涉医法务也需领域专业判断，本期缺少足以推荐自动决策的需求与效果证据。[全球融资](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[YC命题](https://www.ycombinator.com/rfs)。

## 9. 下一步实验

1. 第一周优先验证前两项各3名买家。要求具体失败记录、已用的原生操作与最近一次返工，先判断需求是否已被配置或平台修复覆盖。
2. 第二周仅给取得授权样本的候选做一次有限交付，记录人工分钟、修订次数、遗漏与客户是否实际付款。一次付款只是继续研究的依据，不是规模化证明。
3. CI、订阅变更及写接口机会先确认日志、合同状态或副作用是否可观察。缺证据记unknown；不靠真实收费、对外发送或盲目重试完成首轮验证。
4. 指标机会最后推进：先找一次真实分歧和负责批准定义的人，再建立参照SQL。没有独立需求时保持低优先级。
5. 上述均为计划。本次没有联系评论者、发送消息、安装产品、运行第三方代码、改变账户或发起任何客户环境操作。

## 10. 访问限制与不确定性

- GitHub Trending在网页工具中返回restricted URL，GitHub连接器没有Trending端点；沙箱DNS解析失败。经环境批准后，普通匿名HTTPS取得三窗200响应。Algolia网页工具不可读，公共API的匿名HTTPS读取成功。未绕过来源站点的验证码、登录或限流。
- GitHub连接器的README API简写路径被工具参数校验拒绝，随后使用其支持的公开blob文件路径读取。没有访问私有仓库或执行README中的命令。
- [IT桔子](https://www.itjuzi.com/)返回HTTP 412后停止。[36氪列表](https://pitchhub.36kr.com/financing-flash)可读，两条详情只有页面壳；没有资金交割材料。相对时间不换算成交易日期，币种或金额未明示就不补全。
- [YC总目录](https://www.ycombinator.com/companies)无可读正文，以官方分类目录和公司页补足；仅声称最新**可见**RFS为Winter 2027，未把公司收入宣传作独立验证。
- Shopify Order Printer评论页及Daybranch原文不可读，均未入选。Google、Stocky为昨日缓存；其余页面仍可能有缓存延迟。商城默认排序、低样本量和访谈缺失限制外推。
- PH的Launching Today和徽章日期不同，保留原样；相对留言时间不倒推精确UTC。Veryfi页中标为Likely AI的提问未纳入需求；不采纳AI生成评论摘要。
- 所有第三方性能、安全、商业效果均未实测；全球融资取有限报道，中国融资取公开列表，不是完整市场普查。评分依赖研究判断，所有机会都保留停止条件。

## 11. 本地验证

已执行：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

校验通过：`Radar validation passed: 6 opportunities, 7 themes, 37 dataset rows`。

另已通过六维权重与加总、总分排序、HN七日范围、GitHub三窗指标、151处结构化URL格式、报告与JSON条目一致性检查。README仅增加顶部一个日报链接，移除该新增行后与原文件逐字一致；修改范围恰为三个允许路径。`git diff --check`及新报告行尾空白检查通过。

结构校验不证明事实独立成立、商业需求、融资交割或工具效果。

本次修改范围为本日报、`src/data/radar.json`和README顶部报告链接；历史报告及列表保留。未提交、推送、部署或启动服务。
