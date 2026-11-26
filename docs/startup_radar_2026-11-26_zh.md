# Startup Radar 创业机会日报｜2026-11-26

> UTC快照日：2026-11-26。公开证据整理截止：2026-11-26T01:20:39Z。
> GitHub三窗与Show HN指标来自2026-11-26T01:18:09Z启动的采集批次；其他snapshotAt表示整理截止，不表示各站同一秒更新。
> 5款当前发布、5个七日内社区项目、10个Trending仓库、5条市场信号、6条具体反馈；共31条样本、6个跨源主题、5个未验证机会。

本期优先验证**Shopify查询相关性验收（72分）**，其次是**macOS CI切换runner前的环境验收（65分）**。前者来自近期商户主诉，后者来自一名开发者的成本负担和官方环境边界；均没有付款、损失账本或本期复现证据。[搜索反馈](https://apps.shopify.com/search-and-discovery/reviews)、[CI讨论](https://www.producthunt.com/products/relayrunner)、[macOS指南](https://relayrunner.dev/docs/guides/mac-builds)。

最重要的反证是：**订阅固定扣款日和换品已有原生支持，CI回退与重跑也已有供给**。机会因此收窄为客户自己的异常核对与验收，不推荐重造这些功能。硬件方向只考虑有限资料核对，整机研发另列高资本。[订阅计划](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同操作](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[已有CI功能](https://relayrunner.dev/)、[硬件供给](https://www.ycombinator.com/companies/spita-labs)。

## 1. 方法与时间口径

研究前读取[研究方法](startup_radar_method_zh.md)、现有[结构化数据](../src/data/radar.json)和[上一期11-24报告](startup_radar_2026-11-24_zh.md)。按发布、技术、资本、需求四层扫描，再用官方能力反查缺口。只使用公开授权页面；访问受阻后记录限制，未绕过验证码、登录、限流或其他控制。

沿用100分权重：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数仅用于研究排序，不代表成功概率或市场规模。所有买家画像、MVP、样本数、付款目标及停止条件都是待执行设计。

证据身份逐条区分为：用户主诉、使用负担自述、能力提问、厂商自述、官方机制、模拟夹具、融资报道和研究推断。同一产品的PH页、官网和README不算三个独立客户；融资、Stars、票数、评论和评级都不能替代需求或收入。

“当前发布”指本次读取的PH **Launching Today** 批次，包含更新发布，不等于11-26 UTC首次上线。PartGenie和RelayRunner作者留言早于本批次；不把相对时间倒推成精确首发日。[当前列表](https://www.producthunt.com/)、[PartGenie](https://www.producthunt.com/products/partgenie)、[RelayRunner](https://www.producthunt.com/products/relayrunner)。

市场采用最近30日事件及当天复核的在营供给/投资命题。TrashLab公告是10-29，11-20仅被盘点；RFS仍是Winter 2027。二者是本次复核背景，不是今天新融资或新版本。[公告](https://trashlab.com/blog/trashlab-series-a)、[盘点](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/)、[RFS](https://www.ycombinator.com/rfs)。

## 2. 相比11-24的实质变化

- **发布全部换选。** 本期5款均不在上期6款中，转向CI路由、商品匹配、决策记忆、硬件交接与运行验收。[本期列表](https://www.producthunt.com/)。
- **社区全部换选。** 五项均晚于上期整理截止，覆盖支付模拟、模型迁移、性质测试、数据库审计和串口工具。五项在本批次均只有1 point，不能称为高热度或采用已成规模。[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1795051089%2Ccreated_at_i%3C%3D1795655889&hitsPerPage=100)。
- **Trending精选换入9个、保留Tracer-Cloud/opensre。** 当前窗口可见16/14/19条、去重43个；上期记录16/13/18、去重41个。只比较采样，不声称新仓库首次上榜，也不计算商业增长率。[日榜](https://github.com/trending?since=daily)、[周榜](https://github.com/trending?since=weekly)、[月榜](https://github.com/trending?since=monthly)。
- **市场换入4条、复核RFS。** 中国转看迅合与原子芯光，全球改看TrashLab，YC公司改看SPITA；“换入”指本期选样，不能解释为今天发生融资。[中国列表](https://pitchhub.36kr.com/financing-flash)、[迅合正文](https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizvuze8942707.shtml)、[TrashLab日期](https://trashlab.com/blog/trashlab-series-a)、[SPITA](https://www.ycombinator.com/companies/spita-labs)。
- **反馈6条重新选取。** 四条商城反馈都在11月，两条PH分别来自JC和Mikael Zobkov。JC与上期显示名相同，不据此增加“新独立买家”数量；没有联系或验证任何留言者身份。
- **五项机会重新评分。** 上期Walmart映射、移动真机、修复回访及Flow交接退出精选，不代表问题已解决。模型主题由分流阈值校准改成换版回放；订阅机会因官方反证降至57分。各项分数不能作市场涨跌比较。

## 3. 来源覆盖与访问情况

| 来源 | 覆盖 | 本期观察与边界 |
| --- | --- | --- |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 16 / weekly 14 / monthly 19 | 三窗均为Language Any / Spoken Language Any；49条窗口记录、43个去重仓库，精选10个。匿名HTTPS均返回200；网页工具restricted URL属于工具路径限制。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [Product Hunt](https://www.producthunt.com/) | 5款当前发布 / 5个产品页 | 从Launching Today选择5款，排除Promoted。PartGenie 2.0与CodeRabbit Verify为已有产品更新；作者留言可能早于榜单批次。OpenEight未取得正文，不入选。 [RelayRunner](https://www.producthunt.com/products/relayrunner)、[PartGenie](https://www.producthunt.com/products/partgenie)、[CodeRabbit Verify](https://www.producthunt.com/products/coderabbit) |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1795051089%2Ccreated_at_i%3C%3D1795655889&hitsPerPage=100) | 1,073匹配 / 最新100条 / 精选5 | 固定七日2026-11-19T01:18:09Z至11-26T01:18:09Z；仅扫描最新100条，非全周热榜。五项均在11-25或11-26投稿，互动指标只代表采集批次。  |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 分类目录 / 1家公司详读 | 总目录无可读正文；开发工具分类目录及SPITA Labs公司页可读。Winter 2027与Active是目录字段，设计能力属公司自述。 [总目录](https://www.ycombinator.com/companies)、[SPITA Labs](https://www.ycombinator.com/companies/spita-labs) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | 最新可见Winter 2027 / 复核 | 版本与上一期相同；关注实体基础设施、数据中心供应链和业务评估。是投资方命题，不是新增订单；其法规和规模数字未用作独立结论。  |
| [Crunchbase News / TrashLab](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/) | 11-20报道 / 10-29公告复核 | 公开News用于发现，TrashLab官网与公司新闻稿确认金额和用途。官网称Series A，新闻稿称growth round；10-29事件仍在30日内，不标为今天新融资。 [公司公告](https://trashlab.com/blog/trashlab-series-a)、[公司新闻稿](https://www.businesswire.com/news/home/20261029417588/en/TrashLab-Raises-%2412M-to-Scale-the-AI-Native-Operating-System-for-Waste-Haulers) |
| [36氪 / 新浪科技](https://pitchhub.36kr.com/financing-flash) | 2条中国融资样本 | 迅合由11-24新浪科技正文补充；原子芯光采用当前36氪列表正文。迅合及振海的36氪详情仅页面壳，未取得本轮一手融资公告或交割证明。 [迅合公开报道](https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizvuze8942707.shtml)、[迅合详情（页面壳）](https://36kr.com/p/4084926224755333)、[振海详情（页面壳）](https://36kr.com/p/4084508820875909) |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 无可用记录 | 首页返回412后停止，未登录或绕过验证；中国融资采用其他可读公开来源。  |
| [Shopify App Store](https://apps.shopify.com/search-and-discovery/reviews) | 4款可读 / 4条商城反馈 | 选取Search & Discovery与Subscriptions的4条11月反馈；另读Bundles、Translate & Adapt作筛选。整体评级与单条星级分开；默认页不代表全量最新差评。 [Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)、[Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews) |
| [官方文档 / PH讨论](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search) | 2条使用负担 / 3组能力复核 | PH的CI成本与封装查找是使用负担自述，未验证付费。官方已支持订阅固定扣款日、换品和CI回退；搜索已有预览，不能把这些功能写成待开发缺口。 [订阅合同](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[订阅计划](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[CI原生范围](https://relayrunner.dev/docs/guides/mac-builds)、[CI讨论](https://www.producthunt.com/products/relayrunner)、[硬件讨论](https://www.producthunt.com/products/partgenie) |

GitHub三窗均直接读到Language Any / Spoken Language Any，区间Stars不能跨窗相加。网页工具不支持Trending、GitHub连接器公开资源接口不覆盖榜单；沙箱DNS失败后，经环境批准使用普通匿名HTTPS，三页返回200。没有更改身份、认证或绕过站点控制。

Show HN固定范围为**2026-11-19T01:18:09Z至2026-11-26T01:18:09Z**。查询返回1,073匹配，本期只检视最新100条标题与链接，并读取五项一手README；非七日全量扫描，也非热度抽样。投稿日期不等于项目首次发布日期。[查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1795051089%2Ccreated_at_i%3C%3D1795655889&hitsPerPage=100)。

商城默认评论页不保证最新排序；只选具名原始留言，不使用自动摘要作为需求证据。Search & Discovery先读到工具标记两天前的2.5/518，后一次页面标记today、显示**2.6/519**，采用后者；Subscriptions本批次为**3.8/927**。都是应用整体评级，未可靠提取单条星级，不据前后两次读取推断评价趋势或故障率。[Search & Discovery](https://apps.shopify.com/search-and-discovery/reviews)、[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)。

## 4. 来源快照

下表L/T/G/M/P编号与JSON一致。产品功能和故障描述均未通过本期安装、运行或客户数据核验。

### 4.1 当前产品发布

| 编号 / 产品 | 时间口径 | 观察 / 证据身份 |
| --- | --- | --- |
| [L1 RelayRunner](https://www.producthunt.com/products/relayrunner) | 11-26 UTC读取Launching Today；作者留言6d ago | 在既有runner之间按顺序选择可用执行机；官方已描述离线回退、可选中断重跑和macOS模式。切换配置不等于各环境构建结果一致，未运行。 当前发布批次 / 厂商自述及文档。 [官方范围](https://relayrunner.dev/)、[macOS边界](https://relayrunner.dev/docs/guides/mac-builds) |
| [L2 Snag by Parallel](https://www.producthunt.com/products/snag) | 11-26 UTC读取Launching Today | 把对话中的购物意向转成清单，并比较对应商品报价；API返回商品页及价格、可用性等字段。未实测匹配准确性或结账时价格，不把页面提问算成故障。 当前发布 / 厂商自述。 [Shopping API](https://docs.parallel.ai/shopping-search/shopping-search-quickstart) |
| [L3 MemoryWorks](https://www.producthunt.com/products/memoryworks) | 11-26 UTC读取Launching Today；作者留言1d ago | 聚合团队决策并关联出处，通过MCP供人和代理读取；作者称新决策替代旧结论而保留历史。版本与权限行为未测试，已有供给强于已验证需求。 当前发布 / 厂商自述与答复。  |
| [L4 PartGenie 2.0](https://www.producthunt.com/products/partgenie) | 11-26 UTC读取Launching Today；第2次发布；作者留言13d ago | 把器件资料、BOM、设计文件和制造准备放进同一项目；厂商称提供datasheet依据与ECAD模型。未验证覆盖范围、替代料兼容性或制造质量。 当前更新发布 / 厂商自述。  |
| [L5 CodeRabbit Verify](https://www.producthunt.com/products/coderabbit) | 11-26 UTC读取Launching Today；第4次产品发布；public beta | 产品称在沙箱运行应用，从PR及预期行为生成场景并保存截图和日志；既有测试供给已覆盖修复验证。本期未试用，不采用其准确性宣传作实测。 当前更新发布 / 厂商自述。  |

没有引用PH票数来做机会评分；促销条目未计为自然发布。CodeRabbit Verify是产品的第4次发布，PartGenie 2.0是第2次，不能把公司历史能力全部写成本次新增。[CodeRabbit页面](https://www.producthunt.com/products/coderabbit)、[PartGenie页面](https://www.producthunt.com/products/partgenie)。

### 4.2 七日内技术社区

points/comments仅为**2026-11-26T01:18:09Z采集批次**的快照。

| 编号 / 项目 | 投稿UTC / points / comments | 原文观察与边界 |
| --- | --- | --- |
| [T1 Gaatru](https://news.ycombinator.com/item?id=50649784) | 2026-11-26T00:33:52Z / 1 / 0 | README提供重复扣款与退款资金来源的模拟夹具，结合浏览器读数与账本核对。案例是故意构造的沙箱，不是客户真实损失或本期测试结果。 [项目原文](https://github.com/Michaelmary3/gaatru/blob/main/README.md) |
| [T2 Modelpin](https://news.ycombinator.com/item?id=50644468) | 2026-11-25T16:51:11Z / 1 / 1 | 回放请求并比较工具调用、拒答和输出变化；明确行为改变不等于模型变差，无法测量须单列。退役登记随版本发布刷新，不是实时订阅厂商公告。 [项目原文](https://github.com/samarthputhraya/Modelpin/blob/main/README.md) |
| [T3 Ephyra](https://news.ycombinator.com/item?id=50643333) | 2026-11-25T15:30:53Z / 1 / 0 | 项目以性质约束和覆盖率反馈优化生成器，保存失败种子供回放；明确实验性质。未复跑，也未把作者报告的漏洞数量列为独立验证。 [项目原文](https://github.com/datadog-labs/ephyra/blob/main/README.md) |
| [T4 Auditstream](https://news.ycombinator.com/item?id=50642373) | 2026-11-25T13:58:18Z / 1 / 0 | 以适配器附加执行者、触发器记录变更并导出历史；当前聚焦PostgreSQL，触发器被禁用等情况可漏记。审计记录不自动证明授权正确或完整不可篡改。 [项目原文](https://github.com/auditstream/auditstream/blob/main/README.md) |
| [T5 UART Terminal](https://news.ycombinator.com/item?id=50645769) | 2026-11-25T18:37:55Z / 1 / 0 | README描述Web Serial串口连接、多种数据格式与日志保存；面向支持该接口的Chromium浏览器。投稿新不等于仓库新，未连接设备或验证日志精度。 [项目原文](https://github.com/baturyilmaz/uartterminal.com/blob/main/README.md) |

Gaatru使用模拟支付，不能把夹具中的金额或修复结果当真实客户收入损失。Modelpin记录的是行为变化，可能是改进；其自带退役表不实时轮询厂商。Auditstream也明示触发器存在漏捕获边界。上述都只作为实现与验收方法，不是采购证据。[模拟性质](https://github.com/Michaelmary3/gaatru/blob/main/README.md)、[迁移工具限制](https://github.com/samarthputhraya/Modelpin/blob/main/README.md)、[审计限制](https://github.com/auditstream/auditstream/blob/main/README.md)。

### 4.3 GitHub Trending三窗

下列数字均是**采集批次2026-11-26T01:18:09Z**页面显示的窗口新增Stars，非总Stars。仅核对榜单描述，没有运行项目或采用其性能宣传。

| 编号 / 仓库 | 窗口增量 | 定位与解释边界 |
| --- | --- | --- |
| [G1 HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | daily +1106 stars；[daily榜](https://github.com/trending?since=daily) | 榜单自述将软件包装为代理可用的CLI；仅为工具供给信号，未核验具体软件覆盖或稳定性。 |
| [G2 Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | daily +348 stars；[daily榜](https://github.com/trending?since=daily) | 保留上一期样本并更新日窗；项目定位CI/CD可靠性代理，未测自动修复能力。 |
| [G3 toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | daily +574 stars；[daily榜](https://github.com/trending?since=daily) | 榜单描述整合知识、规划与创作；成熟协作供给构成竞争，不代表本期新增企业采购。 |
| [G4 alibaba/open-code-review](https://github.com/alibaba/open-code-review) | weekly +2259 stars；[weekly榜](https://github.com/trending?since=weekly) | 项目描述确定性检查与模型审阅结合；未验证其漏报、误报或语言覆盖。 |
| [G5 ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | weekly +1203 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位为编码代理提供DevTools；可作复现工具候选，不能直接推断业务验收完整。 |
| [G6 backnotprop/plannotator](https://github.com/backnotprop/plannotator) | weekly +1764 stars；monthly +5475 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 周月双窗出现；项目描述批注、审阅及团队反馈。多窗口热度不等于留存，增量不能相加。 |
| [G7 n8n-io/nod](https://github.com/n8n-io/nod) | weekly +1008 stars；[weekly榜](https://github.com/trending?since=weekly) | 项目自述在用户机器操作网站并在行动前询问；未测试权限边界，不推荐复制通用助手。 |
| [G8 thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | monthly +17424 stars；[monthly榜](https://github.com/trending?since=monthly) | 项目自述捕获并压缩会话上下文；记忆保存不等于当前结论正确、权限隔离或采购需求。 |
| [G9 kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | weekly +3048 stars；monthly +8284 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 项目描述本地FFmpeg操作与MCP接口；当前技术热度不证明客户需要另一个视频平台。 |
| [G10 vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | monthly +9541 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单定位浏览器自动化CLI；可辅助有授权页面的回放，未测其与特定商城主题的兼容性。 |

### 4.4 投资与市场

| 编号 / 信号 | 日期及金额口径 | 观察 / 资本门槛 |
| --- | --- | --- |
| [M1 TrashLab：废弃物清运运营软件融资](https://trashlab.com/blog/trashlab-series-a) | 公告2026-10-29；$12M；11-20月度盘点再次报道 | 公司称Ventana领投，资金支持实施团队和运营自动化。官网称Series A、新闻稿称growth round，保留口径差异；属于30日内背景，未核验交割或客户效果。 证据：公司公告 + 媒体复核；非今日新增。资本门槛：软件可分步切入；完整运营平台及迁移交付较重。 [发现报道](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/)、[公司新闻稿](https://www.businesswire.com/news/home/20261029417588/en/TrashLab-Raises-%2412M-to-Scale-the-AI-Native-Operating-System-for-Waste-Haulers) |
| [M2 迅合科技：AIBOSS与企业实施融资](https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizvuze8942707.shtml) | 新浪科技2026-11-24；数千万元人民币种子轮 | 报道称产业方出资，用于产品、企业知识库与行业落地。实施模式来自创始人访谈；不采用项目数、退款率或回报宣传作为已核验经营数据。 证据：公开媒体正文；缺一手融资公告。资本门槛：中；非标准化实施可能大量消耗人力。 [36氪列表](https://pitchhub.36kr.com/financing-flash)、[36氪详情（页面壳）](https://36kr.com/p/4084926224755333) |
| [M3 原子芯光：量子硬件与互联融资](https://pitchhub.36kr.com/financing-flash) | 读取时列表22小时前；超亿元天使轮；币种未明示 | 列表称联想之星和上海未来产业基金联合领投，资金用于QPU、QLink及产品化。只能确认媒体报道；确切公告日、交割和商业订单未核验。 证据：当前可读媒体列表；非公司一手公告。资本门槛：高；硬件研发、实验设施与产品化，不适合两周造整机。  |
| [M4 SPITA Labs：可配置电源与数据背板](https://www.ycombinator.com/companies/spita-labs) | 11-26复核；Winter 2027 / Active | 公司描述以插卡与软件配置替代部分重布线、重制PCB工作，并导出生产原理图。是供给定位，未验证硬件成熟度或返工节省。 证据：目录字段 + 公司自述。资本门槛：高于文档核对服务；背板和硬件需要实际验证。 [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [M5 YC Winter 2027：实体基础设施与业务评估](https://www.ycombinator.com/rfs) | 11-26复核；最新可见仍为Winter 2027 | 关注机器人供应链、数据中心配套及企业自有模型的评估流程。观点可提示研究方向，不能替代买家预算、法规核验或实际订单。 证据：投资观点；非今日新版本。资本门槛：两周评估服务可轻起步；整机、基础模型和设施建设属高资本。  |

TrashLab的官网与公司新闻稿都支持金额，但轮次措辞不同，因此不强行统一为“新一轮A轮”。原子芯光仅采用36氪当前列表，保留“超亿元”原口径，未补写币种、交割日或客户订单。中国融资没有取得本轮公司一手公告。[公司博客](https://trashlab.com/blog/trashlab-series-a)、[公司新闻稿](https://www.businesswire.com/news/home/20261029417588/en/TrashLab-Raises-%2412M-to-Scale-the-AI-Native-Operating-System-for-Waste-Haulers)、[36氪列表](https://pitchhub.36kr.com/financing-flash)。

### 4.5 具体客户反馈与商城缺口

| 编号 / 反馈者 | 日期 / 指标 | 主诉与反证 |
| --- | --- | --- |
| [P1 Van Der Schueren - Bouwen & Wonen：搜索出现无关商品](https://apps.shopify.com/search-and-discovery/reviews) | 评论2026-11-21；应用整体2.6 / 519评 | 商户称过去可用、现在出现大量无关结果。未取得查询样本、主题配置或成交损失，不能确定是语义检索、商品数据还是第三方主题造成。 近期具名主诉；未复现。 [原生行为](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior)、[已有预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search) |
| [P2 Moore's Furniture：希望恢复同义词控制](https://apps.shopify.com/search-and-discovery/reviews) | 评论2026-11-06；应用整体2.6 / 519评 | 商户表示失去同义词功能后搜索不好用。官方当前帮助列语义理解、预览与boost；营销页仍提同义词，口径有差异，未据评论确定全平台移除时间。 近期具名主诉 + 文档口径差异。 [当前帮助](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[营销页](https://www.shopify.com/search-and-discovery) |
| [P3 Biowine.dk：月度酒盒排期与换品负担](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-13；应用整体3.8 / 927评 | 商户希望统一月度日期并每月更换酒款。当前官方文档已支持指定扣款日和合同换品；主诉可作为理解与交接负担，不能写成今日缺功能。 近期具名主诉；被当前原生能力部分反驳。 [合同操作](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[计划固定日期](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans) |
| [P4 Golden Tallow：订阅客户页面定制不足](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-19；应用整体3.8 / 927评 | 商户希望修改客户看到的订阅页面，认为现有自由度不足；其其他Shopify功能抱怨未逐项核验。没有具体页面需求或付费承诺，暂不推导新门户产品。 近期具名功能诉求；非已确认平台故障。  |
| [P5 JC：macOS CI成本与runner标签迁移](https://www.producthunt.com/products/relayrunner) | 留言7h ago；相对时间不倒推UTC | 独立开发者自述Mac构建昂贵、替代provider标签增加迁移负担，并询问离线回退。官方现已说明回退及macOS模式；不把询问当成功能缺失或失败事件。 使用负担自述 + 能力提问；未核验账单。 [官方macOS模式](https://relayrunner.dev/docs/guides/mac-builds)、[路由原理](https://relayrunner.dev/docs/get-started/overview) |
| [P6 Mikael Zobkov：器件与KiCad封装分散查找](https://www.producthunt.com/products/partgenie) | 留言3h ago；相对时间不倒推UTC | 留言者自述首个KiCad原型中，选器件与找封装发生在不同地方，并询问覆盖情况。是一次原型经历，不证明持续返工或企业购买意愿。 使用负担自述 + 兼容性提问。 [相邻硬件供给](https://www.ycombinator.com/companies/spita-labs) |

P1、P2是两家商户的不同检索负担，不合并为同一事故频率。P3的功能诉求被当前官方能力部分反驳；P4未给出页面定制清单，因此不单独推荐重造订阅门户。P5、P6的提问只表达关注点，没有故障复现或购买承诺。

## 5. 原生替代、反证与口径冲突

- **搜索已有预览与调整工具。** 官方区分预览与实际店面，主题或第三方搜索可能改变结果。机会只在商家的查询意图、目标商品与复测资料。[预览与主题边界](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)。
- **不要把同义词移除的确切日期写成已核验事实。** P2提出恢复诉求，当前帮助文档重点是语义理解，营销页仍写同义词。保留冲突，不采用社区自动摘要断言全平台原因。[原始评论](https://apps.shopify.com/search-and-discovery/reviews)、[当前帮助](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[营销页](https://www.shopify.com/search-and-discovery)。
- **订阅已支持固定扣款日和换品。** 官方计划与合同文档直接反驳“原生完全做不到”；变更日期还涉及原先单独改期、跳过及通知的处理。仅在客户仍有交接负担时试验。[计划](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同边界](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。
- **CI已有回退、可选自动重跑与原生Mac执行。** Mac默认Linux VM模式与显式macOS模式应区分；后者直接使用本机工具链和状态。不能声称工具只支持Linux，也不能把新runner等同干净的Mac系统。[功能](https://relayrunner.dev/)、[macOS细节](https://relayrunner.dev/docs/guides/mac-builds)。
- **硬件核对已有直接竞争。** PartGenie宣称覆盖BOM与ECAD模型，不能因一句KiCad兼容性提问就认定它缺失；须让现成工具先处理样本。[产品与讨论](https://www.producthunt.com/products/partgenie)。
- **测试与记忆基础能力供给强。** CodeRabbit、Modelpin和MemoryWorks已有相邻功能。本期没有证据支持再造通用测试平台、公司助手或基础模型。[运行验收](https://www.producthunt.com/products/coderabbit)、[模型比较](https://github.com/samarthputhraya/Modelpin/blob/main/README.md)、[公司记忆](https://www.producthunt.com/products/memoryworks)。

## 6. 跨源主题

| 主题 | 证据身份 / 来源 | 观察与推断 |
| --- | --- | --- |
| 商品匹配要用商家自己的查询样本验收 | 近期商户主诉 + 官方机制 + 相邻发布供给；Shopify App Store、Shopify Help Center、Product Hunt / Parallel | P1、P2反映搜索相关性与词汇控制负担；Snag强调匹配具体商品，Shopify已有预览及boost。 推断：先建立查询到目标SKU的验收表，核对预览与实际店面。购物比价供给不构成第二份商家采购证据。 [主诉](https://apps.shopify.com/search-and-discovery/reviews)、[已有预览](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[匹配供给](https://www.producthunt.com/products/snag) |
| CI路由解决调度，环境一致性仍需客户验收 | 单人负担自述 + 官方边界 + 开源供给；Product Hunt、RelayRunner Docs、GitHub Trending | RelayRunner已有回退与macOS模式，文档提醒Xcode、签名及持久缓存；opensre关注CI/CD可靠性。 推断：只验证客户自己的构建在两台runner上是否等价，不重建调度器，也不把环境差异假设当成已发生事故。 [用户与供给](https://www.producthunt.com/products/relayrunner)、[官方边界](https://relayrunner.dev/docs/guides/mac-builds)、[相邻供给](https://github.com/Tracer-Cloud/opensre) |
| 硬件原型需要器件、封装和版本的可查出处 | 一次原型负担 + 两类供给；需求较弱；Product Hunt、YC Company Directory、Show HN | P6描述选料与找封装分散，PartGenie已有模型与BOM工具；SPITA尝试减少重布线，UART Terminal提供调试日志供给。 推断：窄切口是少量料号与封装版本的人工核对。原型爱好者不自动等于企业买家，日志工具也不证明需要购买核对服务。 [原型讨论](https://www.producthunt.com/products/partgenie)、[硬件供给](https://www.ycombinator.com/companies/spita-labs)、[调试项目](https://github.com/baturyilmaz/uartterminal.com/blob/main/README.md) |
| 业务操作的验收应覆盖状态及副作用 | 商户诉求 + 原生反证 + 模拟测试供给；Shopify App Store、Shopify Help Center、Show HN、Product Hunt | 订阅排期和换品已有官方操作；Gaatru展示模拟支付的账本核对，CodeRabbit Verify提供运行时测试。 推断：只在变更影响跳过订单、通知或配货交接时验证残余人工负担。模拟重复扣款不算真实商家损失，测试工具不能代替业务负责人定义预期。 [原始诉求](https://apps.shopify.com/shopify-subscriptions/reviews)、[原生合同](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[模拟案例](https://github.com/Michaelmary3/gaatru/blob/main/README.md)、[测试供给](https://www.producthunt.com/products/coderabbit) |
| 模型与应用更新需要保存可重放的预期行为 | 跨源技术供给与投资命题；缺独立采购；Show HN、Product Hunt、YC Requests for Startups | Modelpin比较模型行为，Ephyra保存失败回放，CodeRabbit Verify绑定测试证据，YC关注工作流评估。 推断：围绕一个已部署的低风险流程整理客户批准的预期，先交付换版差异报告；不将行为变化直接等同质量下降。 [迁移比较](https://github.com/samarthputhraya/Modelpin/blob/main/README.md)、[性质回放](https://github.com/datadog-labs/ephyra/blob/main/README.md)、[运行验收](https://www.producthunt.com/products/coderabbit)、[投资命题](https://www.ycombinator.com/rfs) |
| 组织记忆和行业实施已有密集供给 | 发布、技术与融资相互呼应；无新增需求结论；Product Hunt、GitHub Trending、新浪科技 / 36氪 | MemoryWorks关联决策出处，claude-mem处理跨会话上下文，迅合融资报道强调知识库与行业实施。 推断：先检验资料更新责任、权限和可验收交付，不推荐再造通用公司助手；融资与开源热度只提高竞争关注度。 [团队记忆](https://www.producthunt.com/products/memoryworks)、[会话上下文](https://github.com/thedotmack/claude-mem)、[中国实施供给](https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizvuze8942707.shtml) |

跨源共振只表示机制互补，不表示需求已被多方重复验证。硬件与模型迁移两项尤以供给证据为主，已在需求分中降权。

## 7. 五个机会与100分评分

全部为**未验证假设**；最高需求分20/30。没有访谈、客户授权数据、真实付款或长期留存。

| 机会 | 需求/30 | 买家/20 | 跨源/15 | 两周/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 Shopify高价值查询的相关性验收与修复清单 | 20 | 18 | 10 | 13 | 7 | 4 | 72 |
| 02 macOS CI切换runner前的环境与重跑验收包 | 17 | 17 | 11 | 12 | 5 | 3 | 65 |
| 03 小批量PCB的BOM料号与KiCad封装出处核对 | 13 | 16 | 10 | 10 | 6 | 5 | 60 |
| 04 月度订阅盒换品与排期变更的异常核对 | 12 | 17 | 7 | 12 | 6 | 3 | 57 |
| 05 低风险客服工具流程换模型前的回放验收 | 9 | 15 | 10 | 12 | 4 | 4 | 54 |

### 01 Shopify高价值查询的相关性验收与修复清单 — 72分

先帮一个商品类目验证用户查询是否找到该找的SKU，识别商品字段、主题与配置差异，再决定是否需要更换搜索工具。

**买家假设：** 使用者为商品运营和实施工程师；拟付款人为目录较复杂的Shopify品牌电商负责人或服务商。尚未访谈。

**窄MVP：** 一店、一个类目、30条客户授权查询；由商家标出期望商品与明显错误项，比较原生预览和实际店面，交付前10结果的人工相关性表、配置建议及复测记录。

**证据判断：** P1、P2提供两家商户的具体问题，但不是同一故障的两次复现；没有查询日志或销售损失账本。 官方已有预览与boost，并说明主题可能造成结果差异。Snag只补充商品匹配的产品趋势；不能当作本服务的需求证明。 [近期商户主诉](https://apps.shopify.com/search-and-discovery/reviews)、[原生预览与调整](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[搜索行为边界](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior)、[相邻匹配供给](https://www.producthunt.com/products/snag)。

**评分理由：** 有近期主诉、明确交付对象和可人工验收样本；根因、损失及支付仍未知，所以需求只给20/30。

**主要风险：** 原生配置或商品数据整理可能一次解决；平台排序实验、主题覆盖和不同语言会影响可比性。不能承诺恢复已移除功能或保证收入提升。

**两周实验：** 计划第一周访谈3家服务商，取得一店的查询样本；第二周人工复测30条，记录无关结果、漏召回和整理分钟，争取一次付费诊断。所有数字是实验设计，未执行。

**停止条件：** 客户没有真实查询样本、已有原生工具完全解决且无后续维护，或修复只改善人为构造查询时停止。

**前20位潜客路径：** 拟从公开Shopify搜索改版案例和服务商目录筛选前20家，不从评论者名单自动发送消息。

**可积累资产：** 经商家批准的查询意图、目标SKU与历史回归样本可积累；基础搜索界面和通用向量检索不是壁垒。

**资本门槛：** 低；先人工核对，使用现有搜索能力。

### 02 macOS CI切换runner前的环境与重跑验收包 — 65分

在采用现成runner路由前，确认同一构建能在客户本机和托管Mac上重现，并清楚列出缓存、工具链及重跑差异。

**买家假设：** 使用者为移动或桌面工程师；拟付款人为已有macOS构建支出的小型软件工作室技术负责人。

**窄MVP：** 一个私有测试仓库、一个不发布产物的构建任务、客户已有Mac与一个托管runner；先固定工具链，再核对冷暖缓存、离线回退及中断重跑的结果和日志，不触碰正式发布证书。

**证据判断：** P5是独立开发者对成本和标签迁移的自述，未提供账单；RelayRunner本身已提供路由和回退，不能卖同一功能。 官方macOS指南明确本机Xcode、可见钥匙串与持久缓存边界；opensre是相邻可靠性供给，未证明这些差异已导致客户事故。 [用户负担及竞争](https://www.producthunt.com/products/relayrunner)、[macOS环境说明](https://relayrunner.dev/docs/guides/mac-builds)、[已有回退与重跑](https://relayrunner.dev/)、[相邻CI供给](https://github.com/Tracer-Cloud/opensre)。

**评分理由：** 触发点清楚且可用现成工具交付，但只有一人需求自述、缺实际节省数据，持续订阅价值偏弱。

**主要风险：** 现成文档或供应商支持可能足够；ARM与其他环境、缓存和本机状态会影响结果。重复执行带副作用的任务可能造成损失，因此初始实验只覆盖无发布动作的构建。

**两周实验：** 计划访谈3家已有Mac CI账单的团队；对一家完成固定版本、冷暖缓存和回退案例核对，记录任务成功率、等待与人工维护时间。取得付款后才扩大，未运行或启用任何runner。

**停止条件：** 没有已有Mac或明确CI支出，现成配置已完全满足，或差异只能靠重建复杂发布基础设施解决时停止。

**前20位潜客路径：** 拟从公开macOS/iOS CI迁移文章与小型应用工作室案例筛选前20家，以即将迁移runner的团队为入口。

**可积累资产：** 客户批准的工具链清单、回退案例和失败分类可复用；免费路由器本身不构成自有壁垒。

**资本门槛：** 低至中；使用客户设备。自建Mac机群和托管云属高资本方向。

### 03 小批量PCB的BOM料号与KiCad封装出处核对 — 60分

在一次送板前把选料依据、具体封装及文件版本核对清楚，先验证资料交接是否真能减少返工。

**买家假设：** 使用者为电子工程师；拟付款人为承接小批量原型的设计工作室负责人。公开留言来自首个原型作者，企业买家身份是待验证假设。

**窄MVP：** 一块客户授权原型板、10个关键器件；核对确切料号、厂商datasheet版本、封装文件来源和引脚对应，输出证据链接、冲突及unknown，由客户工程师签字验收。

**证据判断：** P6是器件与封装分散查找的一次经历；不能据此声称已有多家企业返工或批量报废。 PartGenie已有BOM与ECAD供给，SPITA尝试减少硬件迭代负担；UART日志工具仅为相邻调试背景。没有证明现成产品缺少封装核对。 [原型负担与直接竞争](https://www.producthunt.com/products/partgenie)、[相邻硬件供给](https://www.ycombinator.com/companies/spita-labs)、[调试项目范围](https://github.com/baturyilmaz/uartterminal.com/blob/main/README.md)。

**评分理由：** 证据可追溯且切口具体，但需求只是一名原型作者；硬件专业性降低两周验证分，不以融资热度抬高需求分。

**主要风险：** 现成ECAD库或PartGenie可能已足够；误判封装会导致实物返工，服务需要硬件专家复核，不能用模型自述代替电气与制造验证。

**两周实验：** 计划访谈3家设计工作室，先让现成库处理同一组器件；仅对仍有来源冲突的一板交付10项核对，衡量查找分钟、需工程师裁决数及真实付款。未设计、下单或制造。

**停止条件：** 只找到一次性爱好者需求、无法取得准确料号与封装，或现有库能无歧义完成全部核对时停止。

**前20位潜客路径：** 拟从公开KiCad设计服务与小批量硬件外包案例寻找前20家，优先已有送板交接流程的工作室。

**可积累资产：** 经专业人员批准的料号、封装版本和变更依据可沉淀；通用datasheet聊天没有持久优势。

**资本门槛：** 低至中；专家资料核对。自研背板、机器人、量子整机属高资本方向。

### 04 月度订阅盒换品与排期变更的异常核对 — 57分

利用现有订阅功能，先核对月度换品与改日期后哪些合同、跳过订单和通知需要人工处理，验证有限交接服务。

**买家假设：** 使用者为订阅运营与配货负责人；拟付款人为每月更换盒内商品的Shopify小型品牌负责人。

**窄MVP：** 一店、一个订阅计划、20份脱敏合同样本；客户确认本月商品与目标日期，制作合同状态、原生操作、跳过订单和通知影响的差异表，先离线交付。

**证据判断：** P3反映月度酒盒的两项诉求，但当前官方已支持计划固定扣款日与合同换品，基础功能缺口假设被反驳。 官方同时描述日期改动对单独改期、跳过订单和通知的影响。Gaatru只是模拟验收方法的相邻例子，不能证明这些客户发生重复扣款。 [原始商户诉求](https://apps.shopify.com/shopify-subscriptions/reviews)、[原生固定日期](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[合同及副作用说明](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[模拟验收方法](https://github.com/Michaelmary3/gaatru/blob/main/README.md)。

**评分理由：** 买家和交接对象清楚，但官方反证强、仅一家相关商户；降级为有条件的服务实验。

**主要风险：** 一次原生功能培训可能解决全部问题；客户月度业务规则可能与合同约定不同。未验证残余负担前不做新订阅引擎，也不自动改合同或扣款。

**两周实验：** 计划先给3家月度盒商户演示原生固定日期和换品；只有仍需反复核对的一家进入20份样本实验，记录异常遗漏、交接分钟和支付意愿。未改合同或发送通知。

**停止条件：** 原生培训已消除负担，或没有实际每月换品与变更交接时停止；不以差评存在为由继续产品化。

**前20位潜客路径：** 拟从公开月度订阅盒品牌和Shopify订阅实施案例筛选前20家，不泛投所有订阅商家。

**可积累资产：** 可积累客户批准的月度配货与合同状态规则；单纯导出表格可替代性高。

**资本门槛：** 低；原生工具上的运营核对服务。

### 05 低风险客服工具流程换模型前的回放验收 — 54分

为已经上线、准备换模型的团队整理业务预期与工具调用夹具，交付可重放的差异报告，而非另建评估平台。

**买家假设：** 使用者为应用工程师与支持运营；拟付款人为已有模型应用和明确换版计划的小型B2B软件技术负责人。

**窄MVP：** 一个只读客服查询流程、30条授权且脱敏的历史请求、两个明确模型版本；业务负责人标注预期，多次回放并记录输出、工具调用、拒答、无法测量与成本。

**证据判断：** T2已有模型行为比较工具，T3提供性质回放思路；本服务的可能价值是客户场景整理，未获得换版采购或事故记录。 L5与YC命题说明验收供给和投资关注存在；它们不是独立买家。Modelpin的变化判定不等于新模型更差，退役登记也不是实时官方时间表。 [现成迁移工具与限制](https://github.com/samarthputhraya/Modelpin/blob/main/README.md)、[性质测试](https://github.com/datadog-labs/ephyra/blob/main/README.md)、[运行验收供给](https://www.producthunt.com/products/coderabbit)、[投资命题](https://www.ycombinator.com/rfs)。

**评分理由：** 供给与可实现性较强，缺独立需求与预算，需求仅9/30；排在访谈队列末位。

**主要风险：** 客户可能没有稳定预期或足够样本；模型随机性、工具返回差异与统计假设会制造误报。30条仅验证服务流程，不证明稀有故障率或上线安全。

**两周实验：** 计划访谈3家确有模型迁移安排的团队，要求先给出版本、任务和预期负责人；仅在有预算后完成一次30条回放，区分setup失败、不可测量、行为变化与业务错误。未调用模型或访问客户数据。

**停止条件：** 没有上线流程、换版触发点或预期负责人，或现成工具已经零负担满足需求时停止。

**前20位潜客路径：** 拟从公开模型迁移复盘和客服查询产品技术文章筛选前20家，不把模型使用者都当成采购者。

**可积累资产：** 客户批准的场景、预期裁定和历史差异可形成持续回归资料；基础模型封装和通用跑分不能防御。

**资本门槛：** 低至中；人工标注与有限调用。训练基础模型属高资本方向。

## 8. 拒绝、拥挤与资本密集方向

- **泛化公司助手或跨会话记忆层。** MemoryWorks、claude-mem与迅合已形成不同层的供给，当前没有新的替换需求证据。[MemoryWorks](https://www.producthunt.com/products/memoryworks)、[claude-mem](https://github.com/thedotmack/claude-mem)、[迅合](https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizvuze8942707.shtml)。
- **免费CI路由器的复制品。** 路由和回退本身已存在，只验证有实际迁移触发点的环境验收；没有重复交付价值就停止。[RelayRunner](https://relayrunner.dev/)。
- **新订阅引擎、固定日期插件或无需求清单的门户。** 当前官方支持主要排期功能，P4诉求尚不具体；先解释和使用现成产品。[计划能力](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/add-edit-plans)、[门户反馈](https://apps.shopify.com/shopify-subscriptions/reviews)。
- **通用购物比价与通用测试代理。** Snag、CodeRabbit Verify和社区工具已有供给，本期无付费替换证据。[Snag](https://www.producthunt.com/products/snag)、[Verify](https://www.producthunt.com/products/coderabbit)、[Modelpin](https://github.com/samarthputhraya/Modelpin/blob/main/README.md)。
- **自动判定封装、电气兼容并代下单。** 一条资料查找负担不足以支持自动制造决策；初始服务只产出证据和待裁决项。[硬件讨论](https://www.producthunt.com/products/partgenie)。
- **量子整机、机器人背板、基础模型和大型托管Mac机群。** 硬件、设施及研究成本与有限验收服务不同，标为高资本；融资不能证明小团队能在两周做出整机或买家愿意采购。[中国硬件融资](https://pitchhub.36kr.com/financing-flash)、[SPITA](https://www.ycombinator.com/companies/spita-labs)、[RFS](https://www.ycombinator.com/rfs)。
- **用演示中的重复扣款制造紧迫感。** Gaatru是模拟案例，未发现对应客户事故，不据此开辟支付风控产品。[README](https://github.com/Michaelmary3/gaatru/blob/main/README.md)。

## 9. 下一步实验

1. 第一周优先对机会01、02各访谈3名符合触发条件的买家，要求展示一次真实查询或构建迁移过程；先使用官方工具，保留不需要新服务的结果。
2. 第二周只为有授权样本的方向完成有限交付，记录人工时间、错误项、返工与付款。指标阈值由客户确认，不把研究者设计的样本数量当已发生需求。
3. 硬件方向先确定有资质的工程复核负责人。没有企业重复需求或现成工具之外的冲突，则不送板、不扩大。
4. 订阅先演示原生能力；仍有残余负担时只生成异常表。本期没有改合同、扣款或向商户发送消息。
5. 模型迁移排在最后，要求已上线流程、明确换版计划与预期负责人；无法测量保留unknown，行为变化须人工判断好坏。

## 10. 限制

- IT桔子412后停止。YC总目录无正文，使用官方分类页和公司页，不声称扫描整个数据库。
- 36氪部分详情只有页面壳，原子芯光采用可读列表；迅合使用新浪科技正文。振海候选的部分媒体页只获检索摘录或工具不可达，未作为本期精选融资依据。
- Crunchbase仅使用公开News；没有访问付费数据库。TrashLab公告接近30日窗口末端，本期未发现并确认11-26 UTC当日的新全球融资，未用盘点日期伪装新事件。
- PH页面相对时间和UTC日界不一致；MemoryWorks首次能读到正文，后续重读工具不可达，保留首次证据。OpenEight、Openfal未取得可用正文，未纳入精选。
- GitHub和HN为匿名公开读取批次；其他页面可能来自检索缓存。商城评级采用本批次后一次可读值，不能声称实时；单条星级未知。
- 当前帮助、营销页与评论可能反映不同更新时间或功能状态；没有登录商家后台核验。特别是同义词能力差异与订阅主诉，未直接当作今日平台缺陷。
- 没有安装、运行技术项目或验证厂商性能；没有联系客户、读取私人数据、采购、付费或做生产实验。
- 每个机会的买家、经济损失、复发频率、价格、分发成本及防御性仍需验证。评分不是投资结论。

## 11. 本地验证

已执行指定命令：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

实际结果：`Radar validation passed: 5 opportunities, 6 themes, 31 dataset rows`。

另已核对六维评分上限与加总、Show HN七日范围、GitHub三窗覆盖、快照时间、报告条目与来源链接。README仅在报告列表顶部新增当日链接，历史逐字保留；`git diff --check`和新增报告行尾空白检查通过。

仅更新`src/data/radar.json`、本报告和`README.md`。未提交、推送、部署或启动服务。结构通过不代表客户需求、融资交割或第三方功能成立。
