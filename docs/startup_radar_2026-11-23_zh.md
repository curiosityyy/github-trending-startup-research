# Startup Radar 创业机会日报｜2026-11-23

> UTC快照日：2026-11-23。公开证据整理截止：2026-11-23T01:20:13Z。
> GitHub三窗指标采于01:18:04Z；Show HN指标采于01:18:03Z。其他网页的snapshotAt表示本批次整理截止，不代表各站同时更新。
> 6款当前发布、6个七日内社区项目、10个Trending仓库、7条市场信号、8条反馈；7个跨源主题、5个未验证机会。

本期先验证**续订减量后的运费差异核对（68分）**，再看**代码网站中已批准文案的变更核对（65分）**。前者有具体商户主诉，但缺原始记录；后者有使用负担与明确交接场景，但没有付费证据。它们都是研究假设。[续订反馈](https://apps.shopify.com/shopify-subscriptions/reviews)、[内容交接讨论](https://www.producthunt.com/products/ulika)。

一个重要约束改变了MVP：Shopify原生订阅合同有应用归属边界，不能假设新应用可直接读取或修改。因此首项只设计商家提供记录的离线服务。另一个反证是原生文档已经说明扣款日及商品编辑，不能把相关差评当成当前功能缺失。[归属解释](https://community.shopify.dev/t/subscription-contacts/27694)、[当前合同管理能力](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。

## 1. 方法与时间口径

研究前读取[研究方法](startup_radar_method_zh.md)、当前[结构化数据](../src/data/radar.json)与[11-22日报](startup_radar_2026-11-22_zh.md)。按发布、技术、资本、需求四类信号交叉核对，优先一手产品页、README、官方机制和公司或投资方公告。

沿用100分权重：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数只排序研究任务，不表示成功率、收入或市场规模。买家、样本数、实验目标、MVP和停止条件全部是本期研究设计，尚未访谈、试用或联系任何人。

证据分别标记为具名主诉、使用负担自述、情景提问、厂商答复、官方能力、供应者实现、融资公告和研究推断。同一公司的产品页与README、融资公告与转载不算独立客户；不同供给也不能凑成需求。Stars、票数、融资与评价都不是需求或收入证明。

PH本次首页的Launching Today仍可能使用不同于UTC的发布日；Resurf徽章明确为11-22。这里只称11-23读取的当前批次，包含产品更新，不把六款统称11-23首发。[当前列表](https://www.producthunt.com/)、[日期示例](https://www.producthunt.com/products/resurf-2)。

## 2. 相比上一期的实质变化

- **发布6/6换选。** 从共享上下文、自有CI等转向本地资料、演示制作、网站销售动作、后台编码、内容交接和提词；每项均读产品页。[本次批次](https://www.producthunt.com/)。
- **技术项目6/6换选。** 本期精选投稿时间在11-22或11-23，全部晚于上期截止；关注人工响应、许可、规则执行、沙箱、代码结构和加工参考。投稿时间不等于软件首次发布。[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794791883%2Ccreated_at_i%3C%3D1795396683&hitsPerPage=100)。
- **GitHub精选9个换入、1个保留。** 保留agent-browser并重新采集窗口数字；精选变化不等于首次登榜。三窗记录数仍为16/13/17，去重后40个；未用相邻快照推导增长率。[日榜](https://github.com/trending?since=daily)、[周榜](https://github.com/trending?since=weekly)、[月榜](https://github.com/trending?since=monthly)。
- **市场换选6条、RFS复核1条。** 全球选Model ML及TrashLab，中国选基元与镁伽，YC选Plover与Tesser。TrashLab公告实际在10-29，不是11-20新融资；RFS最新可见仍是Winter 2027。[公司公告](https://trashlab.com/blog/trashlab-series-a)、[YC命题](https://www.ycombinator.com/rfs)。
- **反馈8/8换选，但不全部是新发生事件。** 五条商城反馈中三条在最近30日，另两条分别为10-16和09-12；三条PH讨论保留相对时间。当前原生功能对部分差评形成反证。
- **五项机会重新评分。** 搜索相关性、数字文件巡检、签名追溯、自托管CI中断、共享记忆及批量改库退出本期精选，未认定这些问题已解决。今天改看运费、文案、购买入口、命令批准和报价依据；不同假设的分数不能直接解释为同一市场升降。

## 3. 来源覆盖与访问情况

| 来源 | 覆盖 | 观察及边界 |
| --- | --- | --- |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 16 / weekly 13 / monthly 17 | 三窗均为Language Any / Spoken Language Any；46条窗口记录、40个去重仓库，精选10个。相较昨日精选新增9个、保留1个，不等于首次登榜。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 当前Launching Today批次全部换选；Resurf徽章为11-22，不能写成11-23 UTC首次发布。既有产品更新、早期开发与本次发布分开记录。 [日期口径示例](https://www.producthunt.com/products/resurf-2) |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794791883%2Ccreated_at_i%3C%3D1795396683&hitsPerPage=100) | 1,097匹配 / 最新100条 / 精选6 | 固定七日11-16T01:18:03Z至11-23T01:18:03Z；精选均为11-22或11-23投稿。只检视最新100条，非全周热度排名。 |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 分类目录 / 2家公司详读 | 总目录无可读正文；使用官方开发工具目录，换选Plover Labs与Tesser。批次和Active为目录字段，能力为公司自述。 [总目录](https://www.ycombinator.com/companies)、[Plover Labs](https://www.ycombinator.com/companies/plover-labs)、[Tesser](https://www.ycombinator.com/companies/tesser) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | 最新可见Winter 2027 / 复核 | 版本未见变化，本期转看隔离网络部署与自有模型的工作流评估；不把已有投资命题写成今日公告。 |
| [Crunchbase News / 一手公告](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 2篇回顾 / 2笔全球融资 | Model ML为11-17公告、11-20周榜；TrashLab为10-29公告、11-20月度回顾。都核对一手公告，未找到并声称11-23新融资。 [月度回顾](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/)、[投资方公告](https://www.generalatlantic.com/media-article/model-ml-raises-250-million-at-1-5-billion-valuation-18-months-after-launching-from-stealth/)、[公司公告](https://trashlab.com/blog/trashlab-series-a) |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2条中国融资 / 列表及正文 | 换选基元科技与镁伽科技。前者仅有11-20列表，后者读到11-19公开正文；不将周末回顾当成新一轮融资。 [基元详情（页面壳）](https://36kr.com/newsflashes/4077374734308485)、[镁伽正文](https://ad.36kr.com/p/4075322592187524) |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 无记录 | 首页返回412后停止，未登录或绕过；中国信号采用36氪的可读页面。 |
| [Shopify App Store](https://apps.shopify.com/shopify-subscriptions/reviews) | 8款默认页 / 6页可读 / 5条入选反馈 | 入选三款：Subscriptions 3.8/920评、Bundles 2.9/564评、Translate & Adapt 4.4/1,378评；三条评论在最近30日、两条较早。无可靠单条星级；两条最新排序查询未读到。 [Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews) |
| [PH讨论 / Shopify官方机制](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts) | 3条讨论 / 原生能力与访问边界 | 将真实使用负担、情景提问、厂商答复分开；原生已可编辑扣款日与商品，合同访问有归属限制，不能从差评直接推导缺功能。 [Ulika](https://www.producthunt.com/products/ulika)、[Omi CLI](https://www.producthunt.com/products/omi-cli)、[Webless](https://www.producthunt.com/products/webless)、[主题设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)、[合同API](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)、[归属解释](https://community.shopify.dev/t/subscription-contacts/27694) |

GitHub的Language与Spoken Language筛选均直接读到Any；16+13+17是窗口记录数，仓库跨窗重复，增量不能相加。榜单只说明本次可见热度。

Show HN查询固定为**2026-11-16T01:18:03Z至2026-11-23T01:18:03Z**，API返回1,097匹配。只检视最新100条标题及链接，详读六项的README或官网；没有分页扫描全部七日。样本偏向最新一天和开发工具，不是全周排名。[可复查查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794791883%2Ccreated_at_i%3C%3D1795396683&hitsPerPage=100)。

商城默认页尝试八款：[Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews)、[Forms](https://apps.shopify.com/shopify-forms/reviews)、[Stock Sync](https://apps.shopify.com/stock-sync/reviews)、[Matrixify（未读到）](https://apps.shopify.com/matrixify/reviews)、[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews)、[Inbox（未读到）](https://apps.shopify.com/shopify-inbox/reviews)。默认排序并非时间顺序，Bundles和Translate的最新排序查询未能读取，所以不声称已经找到全站最新差评。未采用Shopify Magic摘要或PH标注Likely AI的留言。

## 4. 来源快照

L、T、G、M、P编号对应结构化数据的顺序。以下产品能力都未安装或实测；“作者称”“商户称”保留其证据身份。精确快照指标只属于对应时间。

### 4.1 当前产品发布

| 编号 / 产品 | 发布口径 | 观察与证据类型 |
| --- | --- | --- |
| [L1 Resurf](https://www.producthunt.com/products/resurf-2) | 11-23读取Launching Today；徽章为11-22；第2次PH发布 | 保存资料并通过MCP或CLI提供上下文；本地存储与iCloud同步为产品自述，没有验证隐私和同步可靠性。 当前更新发布 / 厂商自述。 |
| [L2 Creavit Studio 4.0](https://www.producthunt.com/products/creavit-studio) | 11-23读取Launching Today；第2次PH发布 | 新增拍摄规划、手机画面接入和分阶段批准的编辑流程；未把自动化能力等同于客户减少返工。 当前更新发布 / 厂商自述。 |
| [L3 Webless Agents](https://www.producthunt.com/products/webless) | 11-23读取Launching Today；第2次PH发布 | 从内容构建可审阅的代理行为，覆盖询价和转交；作者已提供Coverage视图及补充价格资料，效果宣传未独立验证。 当前更新发布 / 厂商自述及答复。 |
| [L4 Omi CLI](https://www.producthunt.com/products/omi-cli) | 11-23读取Launching Today；作者称本批次发布0.5.0 | 提供差异审阅、独立工作区和后台任务；讨论确认命令许可可随同名脚本内容变化而继续生效，默认编辑审批与sandbox是现有缓解。 当前发布 / 厂商明确边界；未实测。 |
| [L5 Ulika](https://www.producthunt.com/products/ulika) | 11-23读取Launching Today；公开beta | 在现有代码网站上改文案与图片，作者说明变更进入仓库；普通提交仍可能被后续重写，应检验业务批准内容是否保留。 当前发布 / 厂商自述及用户讨论。 |
| [L6 Wispim](https://www.producthunt.com/products/wispim-online-teleprompter) | 11-23读取Launching Today；留言有更早开发记录 | 按说话进度移动脚本；作者称本批次已改善无麦克风提示与浏览器试用入口。未验证多语言、设备覆盖和跟随准确率。 当前发布批次 / 厂商自述；非今日才开始开发。 |

### 4.2 七日内技术社区

points/comments统一为**2026-11-23T01:18:03Z**快照，不代表最终互动量。没有采用作者演示或性能数字作为本期测量。

| 编号 / 项目 | 投稿UTC / points / comments | 原文与边界 |
| --- | --- | --- |
| [T1 Taskcue](https://news.ycombinator.com/item?id=50605978) | 2026-11-23T00:52:02Z / 1 / 0 | 聚合现有代理会话和待审批事项；README说明会调用用户现有模型解释回复，有额外用量，界面聚合不等于权限隔离。 [项目原文](https://github.com/taskcue/taskcue/blob/main/README.md) |
| [T2 aaf-gate](https://news.ycombinator.com/item?id=50604524) | 2026-11-22T22:17:07Z / 2 / 0 | 提供策略门、调用限额及审计；README明确非生产就绪、未完成目标设备验收，当前维护者不再主动维护。 [项目原文](https://github.com/buberlo/aaf-gate/blob/main/README.md) |
| [T3 Taskless](https://news.ycombinator.com/item?id=50603421) | 2026-11-22T20:11:12Z / 5 / 2 | 将团队规则编成带正反例的确定性检查；官网标有11-20版本更新。示例不是本期实测，也不能证明自然语言意图完整。 [项目原文](https://www.taskless.io/) |
| [T4 Cordium](https://news.ycombinator.com/item?id=50599359) | 2026-11-22T13:07:44Z / 1 / 0 | 在Kubernetes上提供工作区、网络策略及经代理访问服务的方式；上游凭证留在代理层，不表示系统不再需要凭证或运维。 [项目原文](https://github.com/octelium/cordium/blob/main/README.md) |
| [T5 codeint](https://news.ycombinator.com/item?id=50598813) | 2026-11-22T11:58:04Z / 1 / 0 | 分别衡量重复、复杂度等结构指标并对比基线；本期未验证指标与维护成本的因果关系，不采用作者速度数字。 [项目原文](https://github.com/avidianity/codeint/blob/main/README.md) |
| [T6 BreakingChips](https://news.ycombinator.com/item?id=50606176) | 2026-11-23T01:12:03Z / 1 / 0 | 提供有来源的加工计算与参考；首页明确结果只是起点，仍需结合刀具、机器及装夹核对，不能当成现场安全认证。 [项目原文](https://breakingchips.com/) |

### 4.3 GitHub Trending三窗

窗口指标统一采于**2026-11-23T01:18:04Z**。下表为窗口增量，非总Stars；滚动页面以后会变化。

| 编号 / 仓库 | 窗口增量与榜单 | 定位与解释边界 |
| --- | --- | --- |
| [G1 Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | daily +399 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位CI/CD可靠性代理；作为供给观察，未取得故障修复率或买家证据。 |
| [G2 toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | daily +542 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位开源知识工作空间；与本地资料产品形成竞争背景，未验证本期迁移和同步场景。 |
| [G3 zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | daily +641 stars；[daily榜](https://github.com/trending?since=daily) | 榜单描述自动剪辑、字幕与多平台内容处理；未核验产出质量或分发效果。 |
| [G4 backnotprop/plannotator](https://github.com/backnotprop/plannotator) | weekly +2,815 stars；monthly +4,793 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 榜单提供计划、标注和代码审阅方向；人工参与界面不证明业务批准事项被持续保留。 |
| [G5 ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | weekly +2,268 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位供编码代理使用的开发者工具；可作订阅入口排查的实现候选，未运行商店测试。 |
| [G6 alibaba/open-code-review](https://github.com/alibaba/open-code-review) | weekly +3,700 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单描述确定性流程与模型审阅结合；不采用其安全性及规模宣传作为本期实测。 |
| [G7 meta/astryx](https://github.com/meta/astryx) | weekly +3,626 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位可定制且适配代理的设计系统；提高界面供给，不能替代业务文案审批。 |
| [G8 kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill) | weekly +3,748 stars；monthly +7,477 stars；[weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) | 榜单描述以工具契约和MCP处理剪辑、字幕与导出；与当前录制产品说明供给拥挤。 |
| [G9 heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | monthly +18,847 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单描述从HTML到视频的编辑路径；可用性、授权素材和客户预算仍需另验。 |
| [G10 vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | monthly +9,083 stars；[monthly榜](https://github.com/trending?since=monthly) | 上一期保留项，本次刷新月窗；可作有限购买入口检查的实现候选，热度不构成需求。 |

### 4.4 投资及市场

没有将报道时间当作融资交割时间。全球两笔分别属于最近一周、最近30日；中国条目属于最近一周。本期没有核实11-23当日新融资。币种和轮次缺失时保留缺失。

| 编号 / 事件 | 日期与口径 | 观察及资本门槛 |
| --- | --- | --- |
| [M1 Model ML：金融与专业服务工作流](https://www.generalatlantic.com/media-article/model-ml-raises-250-million-at-1-5-billion-valuation-18-months-after-launching-from-stealth/) | 公告2026-11-17；$250M Series B；估值$1.5B | 投资方公告列General Atlantic与QED联合领投；部署与业务增长为相关方陈述，不能据此给小团队相邻服务推定预算。 资本门槛：企业交付门槛高。 [11-20周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) |
| [M2 TrashLab：清运调度与账单](https://trashlab.com/blog/trashlab-series-a) | 公司公告2026-10-29；$12M Series A；11-20月度回顾 | 公司公告称Ventana领投，用于产品及交付支持；媒体称growth funding，轮次采用公司口径。属于最近30日事件，非本周新融资。 资本门槛：软件可轻启动，完整行业平台交付较重。 [月度回顾](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/) |
| [M3 基元科技：二维半导体产线设备](https://pitchhub.36kr.com/financing-flash) | 列表2026-11-20；数千万元天使轮；币种未明示 | 公开列表称朝晖芯华基金领投，业务覆盖生长、转移及检测设备；详情未读到正文，不补写订单、交割日或币种。 资本门槛：高；设备与产线验证。 [详情（无可读正文）](https://36kr.com/newsflashes/4077374734308485) |
| [M4 镁伽科技：科学与工业智能设施](https://ad.36kr.com/p/4075322592187524) | 报道2026-11-19；新一轮近2亿美元；正文未明示轮次 | 报道涉及软件、实验设备与执行反馈的组合交付；不采用累计订单、客户量或效率宣传作独立验证。 资本门槛：高；实验室、硬件及现场交付。 [发现列表](https://pitchhub.36kr.com/financing-flash) |
| [M5 Plover Labs：确定性合并检查](https://www.ycombinator.com/companies/plover-labs) | 11-23复核；Fall 2026 / Active | 公司自述通过代码库改进和确定性检查提高代理可交付范围；不把目录中的合同和产出宣传当作已核验商业效果。 [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [M6 Tesser：云端开发工作区](https://www.ycombinator.com/companies/tesser) | 11-23复核；Winter 2027 / Active | 公司描述隔离云机器、共享预览及自带云部署；作为现成基础设施候选，不证明具备某一命令审批语义。 [发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| [M7 YC Winter 2027：隔离网络与自有模型](https://www.ycombinator.com/rfs) | 11-23复核；最新可见版本仍为Winter 2027 | 本期关注AI for the Air-Gapped Economy与Own Your Intelligence：部署、工作流评估及反馈有持续供给空间。这是投资观点，不是今日新增需求。 资本门槛：从软件服务到硬件部署不等，须分开评估。  |

TrashLab的媒体回顾使用growth funding表述，Series A取自公司10-29公告；不是将两条融资相加。镁伽本期采用正文“新一轮”的口径，不根据列表标签补出正文没有写明的轮次。[TrashLab公告](https://trashlab.com/blog/trashlab-series-a)、[月度报道](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/)、[镁伽正文](https://ad.36kr.com/p/4075322592187524)。

### 4.5 具体反馈及商城缺口

商城应用整体评级采自本批次可读页面：Subscriptions **3.8 / 920评**、Bundles **2.9 / 564评**、Translate & Adapt **4.4 / 1,378评**。这是应用整体快照，不是下表单条星级或故障率。[Subscriptions](https://apps.shopify.com/shopify-subscriptions/reviews)、[Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews)。

| 编号 / 反馈者 | 反馈时间及性质 | 主诉、回应和限制 |
| --- | --- | --- |
| [P1 Totem Eco：减量后续订仍沿用免运费](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-04；具名商户反馈；未复现或核实损失 | 商户称减量后仍免运费，导致持续承担运费；损失及支持沟通均为其陈述，本期没有合同、订单或账本。 [合同API边界](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)、[官方人员解释归属](https://community.shopify.dev/t/subscription-contacts/27694) |
| [P2 Creativity for Hope：首页商品块无法订阅](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-05；具名商户反馈；未复现或核实损失 | 商户称Archer Commerce的Featured Product块报selling plan错误，而商品详情页正常；仅定位到入口差异，未确定根因。 [原生主题设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup) |
| [P3 STORE STARTRC：组合商品与免邮件数口径不一致](https://apps.shopify.com/shopify-bundles/reviews) | 评论2026-10-16；超过30日的较早佐证；具名商户反馈；未复现或核实损失 | 商户称组合商品在免邮件数条件中按一件计算，配送却按组件处理；这是较早主诉，未复测当前行为。  |
| [P4 Lux Bossa by Soul：翻译取到原始邮件模板](https://apps.shopify.com/translate-and-adapt/reviews) | 评论2026-09-12；超过30日的较早佐证；具名商户反馈；未复现或核实损失 | 商户称翻译读取原始模板而非其定制版本，并被建议手工翻译；较早反馈，不能认定当前所有商店仍受影响。  |
| [P5 Biowine.dk：希望统一扣款日及更换月度内容](https://apps.shopify.com/shopify-subscriptions/reviews) | 评论2026-11-13；具名商户反馈；未复现或核实损失 | 商户提出排期与月度商品维护需求；当前官方文档已描述日期及商品编辑，故不能把该留言直接当成今日功能缺失。 [当前已有能力](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts) |
| [P6 JC：小文案改动仍要重新打开仓库](https://www.producthunt.com/products/ulika) | 留言8h ago；作者答复8h ago；使用负担自述 + 情景提问 + 厂商答复 | 用户描述反复改文案的负担，并询问后续重写是否覆盖；作者说明变更写入普通提交。覆盖是提问，非已证实Ulika故障。  |
| [P7 Bruno Bueno：批准npm test后脚本被改会怎样](https://www.producthunt.com/products/omi-cli) | 提问12h ago；作者答复11h ago；情景提问 + 厂商确认边界 | 作者确认许可绑定命令名；自动编辑下可运行更新后的脚本。默认编辑审批和sandbox已有缓解，未发现本期实际越权事件。  |
| [P8 JC：价格边界能否追到来源](https://www.producthunt.com/products/webless) | 提问1h ago；作者答复33m ago；具体提问 + 现有能力答复；非客户事故 | 用户询问如何发现网站未写明的规则；作者已有Coverage、补充价表和技能审阅答复。未证明逐条来源映射缺失或产生错误报价。  |

P1、P2、P5是最近30日的具名商城反馈，P3、P4是较早佐证。P6包含实际操作负担，但覆盖风险仍是提问；P7、P8是边界提问及答复，不计为客户事故。PH相对时间不倒推精确UTC；没有稳定的单条评论URL，以上产品或评论页配合姓名及时间定位。

## 5. 原生替代与反证

- **订阅排期和商品编辑已存在。** 当前帮助文档描述编辑账单日、商品及频率，P5不能直接支持“原生完全不能做”。该商户为何仍遇到困难尚未核对。[合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)。
- **合同访问不能按普通订单接口推断。** 官方API要求own_subscription_contracts权限，官方人员说明合同及webhook归创建应用；历史订单也不等于实时订阅状态。首项MVP因此采用商家提供并确认的记录。[API](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)、[归属解释](https://community.shopify.dev/t/subscription-contacts/27694)。
- **主题设置是入口问题的第一排查项。** 官方已提供小部件配置和兼容说明，P2不证明平台普遍故障。[设置文档](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)。
- **现成内容与规则工具已覆盖大量基础工作。** Ulika已有仓库提交，Taskless已有规则生成，Plover已有确定性检查方向；需证明剩余交接成本值得单独付费。[Ulika](https://www.producthunt.com/products/ulika)、[Taskless](https://www.taskless.io/)、[Plover](https://www.ycombinator.com/companies/plover-labs)。
- **命令许可与报价审阅已有缓解。** Omi默认编辑审批和sandbox、Webless的Coverage及补充价表都必须先比较；不能把用户问题自动解释为没有防护或没有来源能力。[Omi答复](https://www.producthunt.com/products/omi-cli)、[Webless答复](https://www.producthunt.com/products/webless)。
- **正面反馈降低替换理由。** Stock Sync同页有商家说明同步问题已由支持解决；这提醒我们先比较配置与服务成本。本期没有把已解决案例列为持续故障。[Stock Sync评论](https://apps.shopify.com/stock-sync/reviews)。

## 6. 跨源主题

| 主题 | 证据身份 / 来源 | 观察与研究推断 |
| --- | --- | --- |
| 价格规则需要核对生效对象与版本 | 近期主诉 + 官方边界 + 相邻产品提问；Shopify App Store、Shopify Developer、Product Hunt | 续订运费与报价依据分别出现具体反馈；它们属于不同流程，不能互相证明同一故障。 推断：先用商家确认记录核对一类变更。可见规则与合同实际状态应分开，跨源需求证据仍弱。 [续订主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[合同归属](https://community.shopify.dev/t/subscription-contacts/27694)、[报价提问](https://www.producthunt.com/products/webless) |
| 营销批准内容需要进入后续代码验收 | 使用负担 + 厂商机制 + 社区及YC供给；Product Hunt、Show HN、YC Company Directory、GitHub Trending | Ulika把内容交接接回仓库；Taskless与Plover提供规则检查方向，plannotator覆盖审阅交互。 推断：把少量已批准声明变成可追溯的验收项，先验证现有PR审阅是否足够；普通提交不是永久保留承诺。 [交接讨论](https://www.producthunt.com/products/ulika)、[检查供给](https://www.taskless.io/)、[竞争](https://www.ycombinator.com/companies/plover-labs)、[审阅界面](https://github.com/backnotprop/plannotator) |
| 同一商品需要按购买入口检查 | 近期商户主诉 + 官方配置 + 技术供给；Shopify App Store、Shopify Help Center、GitHub Trending | Featured Product与详情页的表现差异来自具名反馈；官方已有主题设置步骤，浏览器调试工具可帮助定位。 推断：只做入口到购物车的可重复案例；暂不能把错误归因于订阅服务、主题或某次版本升级。 [入口反馈](https://apps.shopify.com/shopify-subscriptions/reviews)、[原生设置](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)、[调试供给](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| 授权需要绑定实际执行内容 | 厂商确认边界 + 社区实现及成熟度限制；Product Hunt、Show HN、YC Company Directory | Omi讨论指出同名脚本变更与许可的关系；aaf-gate、Cordium和Tesser处在策略、身份和运行环境不同层。 推断：测试文件变化是否应使许可失效。沙箱可减少影响范围，但不自动定义批准语义；未证明发生越权事故。 [许可边界](https://www.producthunt.com/products/omi-cli)、[策略候选](https://github.com/buberlo/aaf-gate/blob/main/README.md)、[隔离候选](https://github.com/octelium/cordium/blob/main/README.md)、[云环境](https://www.ycombinator.com/companies/tesser) |
| 垂直软件从回答问题延伸到可验收动作 | 当前产品提问 + 公司及投资方公告；主要是供给；Product Hunt、General Atlantic、TrashLab、Crunchbase News | Webless讨论报价依据，Model ML与TrashLab公告展示不同垂直工作流的资本活动；无独立相邻服务采购证明。 推断：只试一张经负责人批准的价表和一类询价，不复制完整行业操作平台，也不将融资当作客户预算。 [报价讨论](https://www.producthunt.com/products/webless)、[专业服务供给](https://www.generalatlantic.com/media-article/model-ml-raises-250-million-at-1-5-billion-valuation-18-months-after-launching-from-stealth/)、[行业软件供给](https://trashlab.com/blog/trashlab-series-a)、[媒体回顾](https://news.crunchbase.com/venture/interesting-startup-deals-ai-solar-healthcare-space-tech/) |
| 视频工具供给已覆盖录制、修改与导出 | 当前发布 + 开源趋势；缺独立需求；Product Hunt、GitHub Trending | Creavit、Wispim与ffmpeg-skill、hyperframes覆盖相邻制作环节，本期没有取得具体付费迁移主诉。 推断：通用自动剪辑和提词暂不列入机会评分；如需验证，应先找出客户反复返工的单个交付格式。 [Creavit](https://www.producthunt.com/products/creavit-studio)、[Wispim](https://www.producthunt.com/products/wispim-online-teleprompter)、[本地处理](https://github.com/kajisho5/ffmpeg-skill)、[视频生成](https://github.com/heygen-com/hyperframes) |
| 实体行业机会须拆开资料服务与设备交付 | 技术社区供给 + 中国融资报道 + YC观点；Show HN、36氪、YC RFS | BreakingChips给出资料可核对的产品方向；基元与镁伽涉及现场设备，YC另强调模型与专业数据工作。 推断：参考资料整理可先小样本验证，生产设备及基础模型项目资本和验证门槛更高；本期没有相关买家主诉，暂不评分。 [参考项目](https://breakingchips.com/)、[产线设备](https://pitchhub.36kr.com/financing-flash)、[实验设施](https://ad.36kr.com/p/4075322592187524)、[投资命题](https://www.ycombinator.com/rfs) |

## 7. 五个机会与100分评分

全部是**未验证、低资本起步的有限服务假设**。最高需求分20/30，尚未核实损失账本、采购合同或持续付费。跨源分考虑机制与供给的互补，不能当作独立客户数量。

| 机会 | 需求/30 | 买家/20 | 跨源/15 | 两周/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 续订减量后的运费差异核对 | 20 | 18 | 8 | 12 | 6 | 4 | 68 |
| 02 代码网站中已批准文案的变更核对 | 17 | 17 | 10 | 12 | 6 | 3 | 65 |
| 03 订阅商品从首页到购物车的入口验收 | 17 | 17 | 9 | 12 | 6 | 2 | 63 |
| 04 脚本变更后旧命令许可的失效检查 | 12 | 17 | 11 | 11 | 5 | 4 | 60 |
| 05 网站销售代理的价表与询价核对包 | 11 | 16 | 9 | 12 | 5 | 4 | 57 |

### 01 续订减量后的运费差异核对 — 68分

在下一次续订前后，找出商家运费规则与已确认合同、订单记录之间的差异，先验证一项有明确触发点的人工服务。

**买家假设：** 使用者为订阅运营；批准和付款人为销售日用品补充装等实物订阅的独立商家负责人。该买家画像尚待访谈。

**窄MVP：** 一店、20份商家合法提供并脱敏的合同与对应订单记录、一个减量场景；输出规则版本、预期运费、记录运费、差异及待确认项。先离线交付，不依赖跨应用读取合同。

**证据判断：** P1提供具体续订运费主诉，尚无原始账本。P3只是组合商品计数的相邻问题，不能作为第二起同类事故。 官方说明合同读取和webhook受创建应用归属限制；新应用不能凭商家授权就假定可取得原生合同。M2只提供垂直运营软件的供给背景。 [商户主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[合同归属边界](https://community.shopify.dev/t/subscription-contacts/27694)、[API要求](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts)、[相邻行业供给](https://trashlab.com/blog/trashlab-series-a)。

**评分理由：** 有具体持续损失陈述及清晰买家，但只有一个未核验案例，访问限制降低可产品化程度，跨源分不因融资提高。

**主要风险：** 合同条款可能有意锁定优惠；当前规则不必适用于旧合同。数据获取或商家确认成本可能超过价值，外部工具也不能自动追回运费。

**两周实验：** 计划第一周访谈3名实物订阅商家，先核对1次减量及其原合同条款；第二周对20份授权记录做离线核对，计量人工分钟、可解释差异及实际付费意愿，争取1次付费交付。未执行。

**停止条件：** 若优惠本来就是约定保留、无重复差异、拿不到必要记录，或原生配置即可满足需求，则停止；不转向自动扣款。

**前20位潜客路径：** 拟从公开实物订阅商店及Shopify实施案例筛选前20家，优先确认是否发生过商品数量变化。

**可积累资产：** 沉淀经商家确认的条款版本和异常归因样本；初期壁垒有限，不能仅靠一张差异表。

**资本门槛：** 低；先做离线核对服务。

### 02 代码网站中已批准文案的变更核对 — 65分

让客户批准的价格声明、服务范围和关键文案在后续代码修改中仍能被看到，并在偏离时交给负责人确认。

**买家假设：** 使用者为建站服务商的交付工程师与客户营销人员；批准、付款人为维护多客户代码网站的小型服务商负责人。

**窄MVP：** 一个授权测试仓库、10段批准文案、两个模拟内容与代码变更；将文案、来源文件和批准版本对照到PR差异，交付需复核列表，暂不做完整CMS。

**证据判断：** P6有反复改文案的使用负担；Ulika已经把变更写回仓库，后续覆盖仍是用户提问，不应宣称发生了产品故障。 T3和M5提供确定性检查的现成竞争，G4提供审阅交互；价值须来自客户认可的业务验收项，不能仅重复通用diff。 [用户与作者讨论](https://www.producthunt.com/products/ulika)、[规则供给](https://www.taskless.io/)、[企业竞争](https://www.ycombinator.com/companies/plover-labs)、[审阅供给](https://github.com/backnotprop/plannotator)。

**评分理由：** 负担有用户表述，MVP可在既有工具上交付；没有丢失损失或付费证据，且原生仓库流程构成强替代。

**主要风险：** 文案有时应被有意改写；生硬字符串检查会制造误报。现有PR审阅、Ulika及Taskless配置可能已足够，不能承诺永不覆盖。

**两周实验：** 计划第一周访谈3家服务商，找出一次客户已批准内容与后续改版之间的交接；第二周在1个测试站点验证10段文案，比较人工审阅时间和误报，询问是否愿为下一次改版付费。未执行。

**停止条件：** 如果正常PR审阅无遗漏且成本低、没有明确批准人，或变化不能稳定对应文件，则停止产品化。

**前20位潜客路径：** 拟从公开展示React类客户网站交付案例的服务商寻找前20个对象，以持续维护合同为筛选条件。

**可积累资产：** 积累客户批准语句、更新责任与组件映射；只有随长期维护形成的验收历史可能有留存价值。

**资本门槛：** 低；在现有仓库流程上交付。

### 03 订阅商品从首页到购物车的入口验收 — 63分

对同一订阅商品的不同购买入口做有限检查，帮助服务商区分主题配置与购买计划传递问题。

**买家假设：** 使用者为Shopify主题工程师；批准和付款人为维护实物订阅商店的实施服务商或商家负责人。

**窄MVP：** 一店的授权测试主题、2个测试商品、首页Featured Product与详情页两种入口，在两种屏宽下核对计划选择、加购结果和错误信息；交付复现与原生配置建议。

**证据判断：** P2描述同一商品在首页块和详情页表现不同，但本期没有复现。P5的日期请求已被官方能力部分反驳，不能拿来增加本机会需求分。 官方已有订阅小部件和主题兼容步骤；G5、G10可作调试候选，工具供给不证明客户会购买持续测试。 [入口主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[原生设置与主题边界](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/setup)、[调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp)、[自动化候选](https://github.com/vercel-labs/agent-browser)。

**评分理由：** 具体入口和错误可界定，服务交付容易；仅一条近期主诉，无重复率或订单损失，防御性低。

**主要风险：** 可能只需一次配置调整；主题更新会改变选择器，缺失selling plan也可能有其他原因。测试必须使用商家批准的测试数据和环境。

**两周实验：** 计划第一周访谈3家订阅主题服务商，先依官方设置排除配置问题；第二周在测试主题执行入口矩阵，记录复现率与定位分钟，争取1次付费维护验收。未执行。

**停止条件：** 原生配置说明即可解决、无法复现，或客户没有重复改版和验收需求时停止；不先造跨主题测试平台。

**前20位潜客路径：** 拟从公开订阅商店改版案例寻找前20家服务商，以正在更换主题或增加首页购买入口为触发点。

**可积累资产：** 可沉淀经授权的主题版本与入口案例，初期主要是排查经验，容易被服务商自建。

**资本门槛：** 低；有限测试服务。

### 04 脚本变更后旧命令许可的失效检查 — 60分

为采用自动编辑的团队确认：被允许的命令内容变化后，旧批准是否仍然适用于实际动作。

**买家假设：** 使用者为开发工具负责人；批准、付款人为正在启用后台编码代理的小型SaaS技术负责人。

**窄MVP：** 一个合成仓库、一条测试命令、6种无外部副作用的脚本变更；记录批准时文件摘要、运行时版本、许可是否重新核对及沙箱结果，交付配置和反例报告。

**证据判断：** P7是情景提问，作者确认命令名与脚本内容的边界；默认编辑审批和sandbox已是可选缓解，不能把自动编辑模式写成默认行为。 T2明确仍未生产就绪，T4与M6提供隔离基础设施；这些项目不等于已经适配Omi或验证了批准失效机制。 [厂商答复](https://www.producthunt.com/products/omi-cli)、[策略工具及成熟度](https://github.com/buberlo/aaf-gate/blob/main/README.md)、[隔离实现](https://github.com/octelium/cordium/blob/main/README.md)、[现成运行环境](https://www.ycombinator.com/companies/tesser)。

**评分理由：** 能力边界明确且有相邻实现，但没有独立事故或预算；适配成本与检查范围尚不确定，先做演练服务。

**主要风险：** 脚本依赖可执行文件、环境和嵌套调用，只比较package.json不足以覆盖语义。更严格模式可能已满足用户，重新授权也会增加操作负担。

**两周实验：** 计划第一周访谈3个准备启用自动编辑的团队，核对当前批准策略；第二周在合成仓库演练6类变更，比较默认审批、沙箱与版本绑定方案的误报和操作成本。未执行。

**停止条件：** 现有默认审批已满足要求、无法观察真实执行版本，或客户不接受额外核对成本时停止。

**前20位潜客路径：** 拟从公开后台代理试用及内部开发平台案例筛选前20个团队，不把工具下载量当成潜客确认。

**可积累资产：** 积累不同运行框架和脚本路径的批准反例，价值来自范围明确的配置验收，不能包装成全面安全保证。

**资本门槛：** 低；合成演练起步。

### 05 网站销售代理的价表与询价核对包 — 57分

在网站代理向客户生成报价前，用负责人批准的价表和例外条件核对其输出及转人工行为。

**买家假设：** 使用者为销售运营；批准、付款人为准备上线网站询价代理的小型B2B软件公司营收负责人。

**窄MVP：** 一份获授权价表、20个历史脱敏或合成询价，覆盖数量阶梯、折扣例外和资料缺失；记录依据版本、预期结果、实际输出及unknown，先离线评估。

**证据判断：** P8询问报价来源，厂商已回应Coverage、补充价表和技能审阅；并没有承认缺少逐条引用，也未发现本期错报事故。 M1、M2仅说明垂直执行软件存在资本与竞争供给；T3提供规则检查的相邻思路，三者都不是报价验收的独立需求证据。 [提问与现有能力](https://www.producthunt.com/products/webless)、[专业服务资本背景](https://www.generalatlantic.com/media-article/model-ml-raises-250-million-at-1-5-billion-valuation-18-months-after-launching-from-stealth/)、[垂直运营供给](https://trashlab.com/blog/trashlab-series-a)、[相邻规则实现](https://www.taskless.io/)。

**评分理由：** 具体评估对象清楚，但只有提问和供给信号，需求分低；融资金额不影响需求得分。

**主要风险：** 企业内部规则本身可能冲突，找不到批准真值就无法判错。现成产品配置与一次内容整理可能足够，潜客也未必有独立预算。

**两周实验：** 计划第一周访谈3家正在上线询价代理的公司，先确定价表批准人；第二周离线检查20例，比较错误、正确转人工和人工审阅时间，争取1次付费验收。未执行。

**停止条件：** 没有稳定价表与批准人、没有近期上线计划，或原生审阅已完全覆盖时停止。

**前20位潜客路径：** 拟从公开网站销售代理实施案例寻找前20家公司或实施商，先确认正在处理的询价类型。

**可积累资产：** 积累客户批准的规则版本、例外与回归样本；不依靠通用提示词形成壁垒。

**资本门槛：** 低；离线内容与规则核对。

## 8. 拒绝、拥挤与资本密集方向

- **通用编码代理、审批面板或云开发平台。** Omi、Taskcue、Tesser、Cordium已有不同层次的供给。本期只研究脚本许可这个窄边界，不因工具集中发布就复制整个平台。[Omi](https://www.producthunt.com/products/omi-cli)、[Taskcue](https://github.com/taskcue/taskcue/blob/main/README.md)、[Tesser](https://www.ycombinator.com/companies/tesser)、[Cordium](https://github.com/octelium/cordium/blob/main/README.md)。
- **另一个CMS或通用网站销售机器人。** Ulika和Webless已覆盖基本工作流；本期评分针对业务批准内容和价表的有限验收，且仍可能被原生能力替代。[Ulika](https://www.producthunt.com/products/ulika)、[Webless](https://www.producthunt.com/products/webless)。
- **仅依据差评造扣款排期、月度商品编辑或通用翻译器。** 部分能力已有官方说明；模板反馈又较早。先核对问题是否仍存在及其配置，不能直接宣布功能空白。[合同管理](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/shopify-subscriptions/manage-subscriptions/manage-contracts)、[较早模板反馈](https://apps.shopify.com/translate-and-adapt/reviews)。
- **通用提词、自动剪辑、知识收藏工具。** 本期有多种发布和开源供给，没有取得足够的新付费迁移证据，暂不评分。[Wispim](https://www.producthunt.com/products/wispim-online-teleprompter)、[Creavit](https://www.producthunt.com/products/creavit-studio)、[Resurf](https://www.producthunt.com/products/resurf-2)、[ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)。
- **自建半导体设备、自动化实验室、隔离网络硬件或垂直基础模型。** 明确涉及高资本、专业数据或现场验收；融资和RFS兴趣不足以证明两周小团队交付可行。只保留资料核对等轻服务的研究线索，本期尚无买家支持。[基元列表](https://pitchhub.36kr.com/financing-flash)、[镁伽报道](https://ad.36kr.com/p/4075322592187524)、[YC命题](https://www.ycombinator.com/rfs)、[加工参考项目](https://breakingchips.com/)。

## 9. 下一步实验

1. 第一周优先验证前两项各3名买家；要求展示一次实际减量记录或内容交接，先确认批准人和原生替代。尚未联系任何人。
2. 第二周只对取得授权数据的方向交付一个小样本；记录人工分钟、可解释差异、误报、修订轮数及实际付款。样本数是实验设计，不是业务成绩。
3. 购买入口先用原生配置排除问题，再测试有限入口矩阵；没有可复现现象就停止，不把评论当成测试结果。
4. 命令许可只在合成仓库中验证；价表核对先离线运行。没有可观察执行版本或客户批准真值时保留unknown。
5. 若现成产品和一次培训已覆盖，结束产品化；如果只存在偶发交付价值，则保留有限服务，而不强行订阅化。

## 10. 限制

- GitHub网页工具返回restricted URL，连接器不支持Trending。沙箱匿名HTTPS先遇到DNS失败；经环境批准后普通匿名HTTPS读取三窗均为200。这是工具网络限制的替代读取，没有绕过站点登录、验证码、robots或限流。
- Show HN使用公开Algolia API；只读最新100条，未作全周普查。最初打开的shownew页面不用于精确数值，结构化points/comments均取固定窗口API响应。
- IT桔子返回412后停止；未访问私有数据。Crunchbase仅使用可读News与一手公告，没有登录数据平台。
- 36氪基元详情没有正文，使用可读列表；镁伽主站详情同样只有页面壳，搜索发现的36氪公开文章页可读。保留媒体证据标签，不把报道当作交割、订单或性能验证。
- YC总目录没有可读正文，使用官方开发工具目录与两家公司页；RFS未见版本变化。供给公司挑选不代表整个目录的结构或投资比例。
- Marketplace Connect、Forms、Stock Sync作为候选与反证读过；Matrixify、Inbox及两个最新排序URL未读出内容，没有继续尝试绕过。商城不按最新全量排序，单条星级缺失，旧评论当前是否仍成立未知。
- PH页面混有旧介绍、当前发布和相对时间留言；分别记录，不由Launching Today推断UTC首次发布日期。未使用Likely AI留言支撑需求，也未采用厂商倍速、准确率、使用量或收入宣传作实测。
- 技术项目只读公开说明，未安装、运行或评估安全性；aaf-gate的维护及非生产状态已经单列。没有用其本地测试数量推定生产可靠性。
- 所有机会都缺少本期独立客户访谈、根因复现和付款验证。公开页面可能变化，文档能力与个别客户环境也可能不同。

## 11. 本地验证

已执行：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

校验通过：`Radar validation passed: 5 opportunities, 7 themes, 37 dataset rows`。

另已核对五项机会的六维上限与加总、HN投稿的七日范围、GitHub三窗覆盖以及报告与结构化条目一致性。README移除新增顶部链接后与原文件逐字一致；修改范围为三个允许路径，`git diff --check`及新报告行尾空白检查通过。

结构校验通过也不代表商业需求成立、融资交割或第三方产品效果已验证。本次范围仅为本日报、`src/data/radar.json`及README顶部报告链接。
