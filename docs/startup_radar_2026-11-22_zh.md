# Startup Radar 创业机会日报｜2026-11-22

> UTC快照日：2026-11-22。公开证据整理截止：2026-11-22T01:18:37Z。
> GitHub三窗指标分别采于01:16:41—42Z；Show HN指标采于01:16:41Z。其余网页记录本批次截止时间，不代表站点同时更新。
> 6款当前发布、6个七日内社区投稿、10个Trending仓库、7条市场信号、9条反馈；7个主题、6个未验证机会。

本期优先验证**Shopify高意图搜索回归（71分）**和**数字商品文件与旧链接巡检（67分）**。前者有一条11-21的新主诉及较早相近反馈；后者有具体维护负担，但文件异常提示不能当成已证实丢失。两项都缺少损失账本和付费证据。[搜索反馈](https://apps.shopify.com/search-and-discovery/reviews)、[数字商品反馈](https://apps.shopify.com/digital-downloads/reviews)。

官方已提供搜索预览、文件替换与更新通知。因此本期假设聚焦客户批准的验收清单及剩余操作负担。若原生操作加一次培训就能解决，应停止产品化。[搜索能力](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[数字商品能力](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)。

## 1. 方法与时间口径

研究前读取了[研究方法](startup_radar_method_zh.md)、现有[结构化数据](../src/data/radar.json)和最近一期[2026-11-21日报](startup_radar_2026-11-21_zh.md)。只使用公开授权页面和公共API；没有登录、安装产品、运行第三方代码或联系评论者。

沿用100分评分：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数表示研究顺序；不是成功率、TAM或收入预测。买家、实验数量、付费目标和停止条件均为本期提出的假设，尚未执行。

证据分为平台观察、具名主诉、情景提问、厂商自述、官方机制、媒体融资报道及研究推断。同一产品的发布页与README不构成两份独立需求；多种工具供给也不能代替买家访谈。Stars、votes、融资、评分和评论均只作信号。

采集日、PH批次、HN投稿日、公告日期、媒体发布日期和融资交割分别保留。PH的“Launching Today”仍包含11-21徽章，未将这些产品写成11-22 UTC首次发布。[当前发布批次](https://www.producthunt.com/)、[更新发布示例](https://www.producthunt.com/products/ai-context-flow)。

## 2. 相比11-21的实质变化

- **发布6/6换选。** 新精选涵盖共享上下文、自有机器CI、本地邮件、带来源的数据集、服务初始化和路径权限。均重新读取产品页；既有产品更新与首次发布不混写。[PH当前列表](https://www.producthunt.com/)。
- **技术社区6/6换选。** 全部入选投稿来自11-21且晚于上一期截止；包括实时聚合、规则核查、会话来源、轨迹评估、数据库效果验证与依赖漏洞适用性。投稿日期不等于软件首次发布。[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794705400%2Ccreated_at_i%3C%3D1795310200&hitsPerPage=100)。
- **GitHub精选新增9个、保留1个。** 保留并刷新[agent-browser](https://github.com/vercel-labs/agent-browser)；其余为精选集合变化，不表示首次登榜。三窗仍有46条窗口记录、40个去重仓库；所有入选增量重新采集。[日榜](https://github.com/trending?since=daily)、[周榜](https://github.com/trending?since=weekly)、[月榜](https://github.com/trending?since=monthly)。
- **市场换选6条、复核1条。** 换入两笔全球融资、两条中国融资和两家YC公司；RFS最新可见版本仍为Winter 2027。全球及中国融资为本周已公告/已报道事件，未找到并宣称新的11-22融资。[全球周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[RFS](https://www.ycombinator.com/rfs)。
- **反馈9/9换选。** 六条商城反馈中四条在最近30天，另两条是10-17、09-23的较早佐证；三条PH讨论分别聚焦签名、CI中断和错误记忆传播。提问与故障主诉分别标注。
- **机会重新收窄。** Walmart字段映射和订阅入口/周期退出当期精选，未认定这些问题已解决。CI从“测试过但任务超时”转到自托管中断后的执行语义；数据库机会从通用写接口恢复缩到单个批量改库动作。新增搜索、数字资产、贡献者追溯和共享事实验证。

## 3. 来源覆盖

| 来源 | 本次覆盖 | 观察及边界 |
| --- | --- | --- |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 16 / weekly 13 / monthly 17 | 三窗均为Language Any / Spoken Language Any；46条窗口记录、40个去重仓库，精选10个。窗口增量不相加；较昨日精选新增9个、保留1个，非首次登榜判断。 [weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly) |
| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 精选来自本次Top Products Launching Today；AI Context Flow及Exa徽章显示11-21，不能称作11-22 UTC首发。包括更新发布；未采用票数或性能宣传作需求。 [AI Context Flow](https://www.producthunt.com/products/ai-context-flow)、[Exa Websets V2](https://www.producthunt.com/products/exa-ai) |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794705400%2Ccreated_at_i%3C%3D1795310200&hitsPerPage=100) | 1,092匹配 / 检视最新100 / 精选6 | 固定七日11-15T01:16:40Z至11-22T01:16:40Z；精选均为11-21投稿。只检视最新100条，不是全周普查；热度固定为01:16:41Z快照。 |
| [YC Company Directory](https://www.ycombinator.com/companies/industry/developer-tools) | 分类目录 / 2家公司详读 | 总目录无可读正文；从官方开发工具目录换选Xulux与FlashDrive。批次和Active为目录字段，产品能力为公司自述，未核验商业效果。 [总目录](https://www.ycombinator.com/companies)、[Xulux](https://www.ycombinator.com/companies/xulux)、[FlashDrive](https://www.ycombinator.com/companies/flashdrive) |
| [YC Requests for Startups](https://www.ycombinator.com/rfs) | 最新可见Winter 2027 / 复核 | 版本未见变化；本期转看太空计算、实体AI建设融资与数据中心供应链。仅为资本与交付门槛背景，不是今日融资或客户需求。 |
| [Crunchbase News / 公司公告](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 2笔本周全球融资 | 从11-20周榜换选Ramon.Space与BrightAI；Ramon另核对11-17公司公告。BrightAI公告转载返回429后停止，金额采用可读Crunchbase报道；未验证交割。 [Ramon.Space公告](https://ramon.space/press/ramon-space-raises-124-million-series-b-leading-the-next-era-of-computing-in-orbit/) |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2条中国融资 / 公开列表 | 换选原子矩阵与钠远新材，列表分别标11-20、11-19；详情只有页面壳。只保留列表明示轮次、金额及用途，未补猜未明示币种或交割日。 [原子矩阵详情（页面壳）](https://36kr.com/newsflashes/4077373828780928)、[钠远详情（页面壳）](https://36kr.com/newsflashes/4076024540877961) |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 未取得记录 | 公开首页返回412后停止；以36氪公开列表补充中国信号。未登录或绕过访问限制。 |
| [Shopify App Store](https://apps.shopify.com/search-and-discovery/reviews) | 7款尝试 / 5页可读 / 精选6条反馈 | 精选Search & Discovery与Digital Products；整体评级分别为2.5/518评、4.8/1,501评。四条评论在最近30天，另两条较早反馈单列；没有可靠单条星级，不估计故障率。 [Digital Products](https://apps.shopify.com/digital-downloads/reviews) |
| [PH讨论 / 官方机制](https://www.producthunt.com/products/gitroots) | 3条具体提问 + 官方文档 | 签名保留、CI中断和记忆污染均保留厂商答复；Shopify已有搜索预览、文件替换及通知，GitHub已有签名与runner机制。提问不等于已发生故障。 [CI讨论](https://www.producthunt.com/products/codemany)、[记忆讨论](https://www.producthunt.com/products/ai-context-flow)、[搜索文档](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[文件文档](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)、[签名机制](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)、[runner机制](https://docs.github.com/en/actions/reference/runners/self-hosted-runners) |

GitHub三窗的筛选项均再次确认为 **Language Any / Spoken Language Any**（01:18:36Z）；该复核只检查筛选项，指标保持01:16:41—42Z记录。Stars为各榜单显示的窗口增量，既非总Stars，也不能跨窗相加或用相邻快照推导增长率。

Show HN固定窗口为 **2026-11-15T01:16:40Z—2026-11-22T01:16:40Z**。Algolia返回1,092条匹配，本期只检视最新100条的标题与项目链接并详读六项README，没有分页普查。这种选择偏向最近一天及开发工具，不能称为七日热度排行。[可复查查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1794705400%2Ccreated_at_i%3C%3D1795310200&hitsPerPage=100)。

商城尝试七款：[Bundles](https://apps.shopify.com/shopify-bundles/reviews)、[Flow（未读到）](https://apps.shopify.com/shopify-flow/reviews)、[Translate & Adapt](https://apps.shopify.com/translate-and-adapt/reviews)、[Search & Discovery](https://apps.shopify.com/search-and-discovery/reviews)、[Inbox（未读到）](https://apps.shopify.com/shopify-inbox/reviews)、[Forms](https://apps.shopify.com/shopify-forms/reviews)、[Digital Products](https://apps.shopify.com/digital-downloads/reviews)。五个默认评论页可读；三个“按最新排序”查询未被网页工具读出，因此不声称按时间全量扫描。未采用Shopify Magic评论摘要或标为Likely AI的PH留言。

## 4. 来源快照

L、T、G、M、P编号对应本节表格及机会分析。产品能力均以来源自述为限，本期没有安装或性能测试。表内链接直接指向支持该条观察的页面；商城和PH讨论没有取得稳定的单条评论链接，使用商户/用户名及日期或相对时间定位。

### 4.1 当前发布

| 编号 / 产品 | 发布口径 | 观察与证据类型 |
| --- | --- | --- |
| L1 [AI Context Flow MCP](https://www.producthunt.com/products/ai-context-flow) | 11-22读取Launching Today；徽章11-21；第2次PH发布 | 按项目分桶、配置访问和记录版本；讨论中作者称冲突提示界面仍在开发。共享与回滚已有供给，未证明事实冲突能被自动阻止。 当前更新发布 / 厂商自述。 |
| L2 [Codemany](https://www.producthunt.com/products/codemany) | 11-22读取Launching Today | 为自有Mac/Linux机器编排runner；作者称默认隔离、清理及中断重试已有实现。未复测速度、节省金额或故障转移。 当前发布 / 机制自述，非独立基准。 |
| L3 [Glassmail](https://www.producthunt.com/products/glassmail) | 11-22读取Launching Today | 定位在Mac本地运行邮件AI，并采用一次购买方式；隐私架构与商业效果为厂商自述，未检查网络行为。 当前发布 / 厂商自述。 |
| L4 [Exa Websets V2](https://www.producthunt.com/products/exa-ai) | 11-22读取Launching Today；徽章11-21；第4次PH发布 | 以自然语言生成带来源及匹配理由的数据行；本期不采用其倍速、覆盖提升或降价比例作实测结果。 当前更新发布 / 厂商自述。 |
| L5 [Shipyard](https://www.producthunt.com/products/shipyard) | 11-22读取Launching Today | 本地CLI/MCP覆盖域名、DNS、托管、数据库等集成；密钥留本地及交付速度未经验证，服务创建成功仍需业务验收。 当前发布 / 厂商自述。 |
| L6 [gitroots](https://www.producthunt.com/products/gitroots) | 11-22读取Launching Today | 定位路径范围访问、审批和审计；作者确认同步提交不保留原贡献者的Verified签名标记，身份与审批记录留在产品内。 当前发布 / 厂商明确能力边界。 |

### 4.2 七日内技术社区投稿

以下points/comments全部固定为 **2026-11-22T01:16:41Z**。作者README中的性能、检测率或示例结果没有作为本报告实测值。

| 编号 / 项目 | 投稿UTC / points / comments | 原文与限制 |
| --- | --- | --- |
| T1 [Straum](https://news.ycombinator.com/item?id=50594053) | 2026-11-21T21:58:12Z / 1 / 0 | 跟随复制流维护聚合；README标明尚不稳定、启动会重新加载、仅覆盖声明的查询，不采用作者性能倍数。 [项目原文](https://github.com/janbjorge/straum/blob/main/README.md) |
| T2 [trace2rules](https://news.ycombinator.com/item?id=50592998) | 2026-11-21T19:55:58Z / 2 / 1 | 从代理轨迹提出并审计长期规则；输出是待审提案，不自动改规则，且明确不挖掘历史记忆。 [项目原文](https://github.com/rkkautsar/trace2rules/blob/master/README.md) |
| T3 [KeepPlain](https://news.ycombinator.com/item?id=50588072) | 2026-11-21T11:16:58Z / 4 / 2 | 提供会话检索、规则建议和代码行来源；上传需用户动作或开启自动模式，README承认模式脱敏可能漏检。 [项目原文](https://github.com/keepplain/keepplain-plugin/blob/master/README.md) |
| T4 [agentest](https://news.ycombinator.com/item?id=50588359) | 2026-11-21T12:07:01Z / 1 / 0 | 用确定性规则检查工具调用和结果声明；只评估记录到的证据，作者明确通过检查不构成认证。 [项目原文](https://github.com/srpadmanabhuni/agentest/blob/main/README.md) |
| T5 [Deedglass](https://news.ycombinator.com/item?id=50588595) | 2026-11-21T12:35:28Z / 1 / 0 | 对照代理声明与实际变更并保留记录；README标明Pre-1.0。演示中的变更行数是项目样例，不是本期客户事故。 [项目原文](https://github.com/deedglass/deedglass/blob/main/README.md) |
| T6 [Shielda Security Watch](https://news.ycombinator.com/item?id=50594649) | 2026-11-21T23:24:14Z / 2 / 0 | 将依赖清单与公告匹配并保留不确定项；项目明确不是完整历史审计，无自动修补，本期未部署或测准确率。 [项目原文](https://github.com/ShieldaAI/security-watch/blob/main/README.md) |

### 4.3 GitHub Trending三窗

日榜、月榜指标采于 **01:16:42Z**，周榜采于 **01:16:41Z**，日期均为2026-11-22 UTC。滚动页面日后会变化，不能把今天的记录当作固定历史页面。

| 编号 / 仓库 | 窗口增量 | 定位及推断边界 |
| --- | --- | --- |
| G1 [cursor/plugins](https://github.com/cursor/plugins) | daily +260 stars；[daily榜](https://github.com/trending?since=daily) | 榜单描述官方插件与规范；接入规范不等于插件已获授权或行为已验收。 |
| G2 [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | daily +200 stars；[daily榜](https://github.com/trending?since=daily) | 榜单定位推理优化与部署工具；与本地邮件产品构成相邻供给，未验证其硬件成本或准确率。 |
| G3 [nginx/nginx](https://github.com/nginx/nginx) | daily +189 stars；[daily榜](https://github.com/trending?since=daily) | 榜单列出官方开源仓库；成熟基础设施热度仅作技术背景，不作为新采购需求。 |
| G4 [dream-num/univer](https://github.com/dream-num/univer) | weekly +7,240 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位编辑、计算、协作和文件处理SDK；可作清单交付界面候选，未核验本期电商集成。 |
| G5 [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) | weekly +4,400 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单定位面向代理的网页实践指导；说明规则供给充足，不保证特定商城搜索正确。 |
| G6 [ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui) | weekly +3,792 stars；[weekly榜](https://github.com/trending?since=weekly) | 榜单提供代理与前端交互协议方向；协议接入不能证明审批或业务副作用受控。 |
| G7 [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | monthly +41,810 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单定位多阶段审计与可机器读取的发现；本期仅记录项目定位，未测试覆盖率。 |
| G8 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | monthly +17,400 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单定位会话记录、压缩及上下文注入；通用记忆供给强，事实正确性仍需独立验证。 |
| G9 [anthropics/skills](https://github.com/anthropics/skills) | monthly +16,259 stars；[monthly榜](https://github.com/trending?since=monthly) | 榜单列出公开Agent Skills仓库；技能存在不等于适合具体业务或已形成客户需求。 |
| G10 [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | monthly +8,977 stars；[monthly榜](https://github.com/trending?since=monthly) | 月榜继续出现；可作为搜索结果与交付入口检查的实现候选，未运行本期场景。 |

### 4.4 市场、融资与投资观点

| 编号 / 信号 | 日期及指标 | 证据边界 |
| --- | --- | --- |
| M1 [Ramon.Space：轨道计算基础设施](https://ramon.space/press/ramon-space-raises-124-million-series-b-leading-the-next-era-of-computing-in-orbit/) | 公告2026-11-17；周榜2026-11-20；$124M Series B | 公司公告与周榜均列出PSG领投；资金用于扩大计算系统交付。资本与硬件验证密集，不能当作两周软件MVP。 公司融资公告 + 媒体复核；未验证交割。[Crunchbase周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) |
| M2 [BrightAI：基础设施持续监测](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/) | 报道2026-11-20；$97M融资；该文未明示轮次 | 周榜列出Smith Point Capital领投，定位传感器、无人机和机器人驱动的基础设施观测；现场交付成本与营收效果未核实。 媒体融资报道；未验证交割。 |
| M3 [原子矩阵：中性原子量子计算](https://pitchhub.36kr.com/financing-flash) | 列表2026-11-20；数亿元人民币B轮 | 列表明确融资轮次与人民币口径，称用于区域合作及量超融合试点；详情无有效正文，不引用累计融资宣传作市场规模。 公开媒体列表；详情页面壳。[详情（无有效正文）](https://36kr.com/newsflashes/4077373828780928) |
| M4 [钠远新材：钠电正极材料](https://pitchhub.36kr.com/financing-flash) | 列表2026-11-19；数千万元A轮；币种未明示 | 列表称金投致源战略投资，资金用于基地建设、无负极电池开发及海外拓展；未核验产能、订单或技术效果。 公开媒体列表；详情页面壳。[详情（无有效正文）](https://36kr.com/newsflashes/4076024540877961) |
| M5 [Xulux：开发工具的代理适配评估](https://www.ycombinator.com/companies/xulux) | 11-22复核；Winter 2027 / Active | 公司称跨模型和运行框架生成评估，寻找代理采用工具时的失败点；未取得独立客户转化或付费证据。 官方目录 + 公司自述。[发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| M6 [FlashDrive：团队与代理共享文件](https://www.ycombinator.com/companies/flashdrive) | 11-22复核；Fall 2026 / Active | 公司描述通过MCP或挂载共享文件，并处理并发修改；合并数据不等于判断哪份业务事实正确，未运行验证。 官方目录 + 公司自述。[发现目录](https://www.ycombinator.com/companies/industry/developer-tools) |
| M7 [YC Winter 2027：实体建设与融资门槛](https://www.ycombinator.com/rfs) | 11-22复核；最新可见版本仍为Winter 2027 | 本期关注太空、实体AI融资与数据中心供应链条目；据此把设备、融资资产负债表和产线项目标为资本密集，不推导小团队软件预算。 既有投资观点复核；非新融资或需求。 |

Ramon.Space采用公司公告的11-17日期，Crunchbase周榜为11-20；BrightAI只保留可读周榜明确的金额，不补写该文未明示的轮次。中国两项采用36氪列表日期，详情无有效正文。上述不是四笔今日融资，也不是完整全球/中国市场统计。

### 4.5 用户反馈及市场缺口

**评级快照：** Search & Discovery为 **2.5 / 518评**；Digital Products为 **4.8 / 1,501评**，均为本批次页面显示的整体评级与累计评论量，不是下列评论者星级或故障发生率。[搜索评论页](https://apps.shopify.com/search-and-discovery/reviews)、[数字商品评论页](https://apps.shopify.com/digital-downloads/reviews)。

| 编号 / 主体 | 时间口径 | 具体反馈及限制 |
| --- | --- | --- |
| P1 [Van Der Schueren - Bouwen & Wonen：搜索结果失去相关性](https://apps.shopify.com/search-and-discovery/reviews) | 评论2026-11-21 | 商户称此前正常、现在返回大量无关商品；没有提供查询样本或归因证据，不能断言由某次模型更新导致。 具名商户主诉；未复现根因或核实损失。 |
| P2 [Ruby Designs Clothing Ltd：单品查询混入无关结果](https://apps.shopify.com/search-and-discovery/reviews) | 评论2026-10-17；较早反馈，非今日新增 | 同页另一商户提出相近结果问题；比最新主诉早，不视作今日事件，也未证明两店同一根因。 具名商户主诉；未复现根因或核实损失。 |
| P3 [Moore's Furniture：请求恢复同义词配置](https://apps.shopify.com/search-and-discovery/reviews) | 评论2026-11-06 | 商户希望恢复同义词功能；当前官方文档描述语义理解、预览和商品提升。请求表明配置习惯受影响，不能据此承诺可还原旧行为。 具名商户主诉；未复现根因或核实损失。 |
| P4 [compositorjoserafael：文件异常通知难以核对](https://apps.shopify.com/digital-downloads/reviews) | 评论2026-11-09 | 商户看到可能误删文件的提示，要求更清楚的核对和恢复信息；其总体评价仍正面，不能写成已证实文件丢失。 具名商户主诉；未复现根因或核实损失。 |
| P5 [Foxes and Ravens：同一文件重复上传](https://apps.shopify.com/digital-downloads/reviews) | 评论2026-10-29 | 商户认可混合商品交付与更新通知，但抱怨多个变体或商品要重复上传同一文件；剩余工作在批量核对，不是缺少基础数字交付。 具名商户主诉；未复现根因或核实损失。 |
| P6 [Rope Access Maintenance Inc.：逐变体更新PDF](https://apps.shopify.com/digital-downloads/reviews) | 评论2026-09-23；较早反馈，非今日新增 | 商户称逐个删除和上传容易出错并请求批量操作；仅作较早佐证，本期未确认该商户如今仍受影响。 具名商户主诉；未复现根因或核实损失。 |
| P7 [Bruno Bueno：同步后原签名是否保留](https://www.producthunt.com/products/gitroots) | 提问9h ago / 作者答复8h ago；保留相对时间 | 作者答复目前不保留原Verified标记，同步提交显示为gitroots ops；内部另保留贡献者与审批历史。是明确能力边界，不是伪造事件。 具体提问 + 厂商承认边界。 |
| P8 [Igor Martynyuk：CI执行中休眠或断网怎么办](https://www.producthunt.com/products/codemany) | 提问16h ago / 作者答复10h ago | 用户询问断电和网络中断；作者称有防休眠、重新分派与重试。属于有答复的情景问题，本期没有实际重复发布或损失证据。 边界提问 + 厂商机制自述。 |
| P9 [Vipul Kumar：错误记忆会不会传播到所有工具](https://www.producthunt.com/products/ai-context-flow) | 提问及答复均13h ago | 作者回应已有回滚及修改者追溯，冲突提醒界面仍在开发；这是待验证缺口，未证明发生客户事故。 具体提问 + 已有能力与开发计划。 |

P2、P6是较早佐证，应在访谈中重新确认是否仍未解决。P4只报告看到了异常通知，不能计入已证实丢失事故。P7—P9均有厂商答复，不计为已复现产品故障。

## 5. 反证与现成替代

- **搜索已有预览。** 官方说明预览可比较商品结果，第三方搜索或自定义主题可能与预览不同。本期只验证商家相关性基线及差异来源，不先造搜索引擎。[官方说明](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)。
- **数字交付已有替换与通知。** 当前文档说明旧链接的行为以及外部目标URL不被监测。可研究的是版本与入口核对，不能宣称平台没有数字商品更新能力。开发店的结账下载入口也有限制，实验必须按可用环境设计。[官方说明](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)。
- **同步审计已有贡献者记录。** gitroots作者说原Verified标记不保留，但产品内已有来源与审批历史；首先检查现成记录是否足够。GitHub的密码学签名与身份字段分别验收。[产品回应](https://www.producthunt.com/products/gitroots)、[签名定义](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)。
- **自托管CI已有保护措施。** Codemany作者回应了隔离、重派和重试；GitHub提供临时runner及外部日志保留建议。本期没有证据证明这些机制失效，剩余价值要靠客户工作流的具体副作用验证。[产品回应](https://www.producthunt.com/products/codemany)、[官方机制](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)。
- **记忆共享与评估供给已多。** 版本回滚、共享文件、会话来源及代理评估已有产品。本期既不把这些供给当成付费需求，也不把“同步完成”当成业务事实正确。[AI Context Flow](https://www.producthunt.com/products/ai-context-flow)、[FlashDrive](https://www.ycombinator.com/companies/flashdrive)、[KeepPlain](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)、[Xulux](https://www.ycombinator.com/companies/xulux)。

## 6. 跨来源主题

| 主题 | 证据标签 / 来源 | 观察与推断 |
| --- | --- | --- |
| 搜索结果要有商家确认的相关性基线 | 近期及较早主诉 + 官方机制 + 技术供给；Shopify App Store、Shopify Help Center、GitHub Trending | Search & Discovery出现无关结果与同义词请求；官方已有预览，浏览器自动化可提供采样方式。 推断：先交付一组高意图查询的验收清单，比较预览与实际店面；不能承诺关闭或替换平台语义搜索。 [商户反馈](https://apps.shopify.com/search-and-discovery/reviews)、[官方机制](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[实现候选](https://github.com/vercel-labs/agent-browser) |
| 数字商品更新需要核对版本与旧链接 | 具名主诉 + 官方能力及边界 + 界面供给；Shopify App Store、Shopify Help Center、GitHub Trending | 文件通知与重复上传有具体反馈；原生已能替换文件和发更新，旧链接行为又与文件名及目标URL有关。 推断：验证有限目录的变体—文件—交付入口对照；Univer仅是清单界面候选，不证明已经支持Shopify资产接口。 [商户反馈](https://apps.shopify.com/digital-downloads/reviews)、[旧链接规则](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)、[表格供给](https://github.com/dream-num/univer) |
| 代码权限缩小后仍需保留贡献来源 | 当前产品边界答复 + 官方签名机制 + 社区来源工具；Product Hunt、GitHub Docs、Show HN | gitroots承认原Verified标记不随同步保留；KeepPlain提供代码行会话来源，GitHub定义签名验证含义。 推断：将原提交、审批与目标提交分别核对；身份字段、会话出处和密码学签名不能互相替代。 [同步边界](https://www.producthunt.com/products/gitroots)、[签名机制](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)、[会话来源](https://github.com/keepplain/keepplain-plugin/blob/master/README.md) |
| 自有机器CI的成本宣传需要故障路径补充 | 用户情景提问 + 厂商答复 + 官方机制 + 测试供给；Product Hunt、GitHub Docs、Show HN | Codemany回应休眠与断网；GitHub说明临时runner和日志保留；agentest提供轨迹核查的相邻方法。 推断：只验证一次中断后实际执行了哪些步骤；重试能力不自动证明发布副作用只发生一次。 [讨论](https://www.producthunt.com/products/codemany)、[runner机制](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)、[轨迹方法](https://github.com/srpadmanabhuni/agentest/blob/main/README.md) |
| 共享记忆的同步不等于事实正确 | 具体提问 + 产品回应 + YC及开源供给；Product Hunt、YC Company Directory、GitHub Trending、Show HN | AI Context Flow已有版本回滚，冲突提示仍在开发；FlashDrive和claude-mem分别处理共享文件及跨会话上下文。 推断：针对客户批准的少量事实做冲突测试；不同供给层不能合并成已经解决业务真值的证据。 [提问与回应](https://www.producthunt.com/products/ai-context-flow)、[共享文件](https://www.ycombinator.com/companies/flashdrive)、[上下文供给](https://github.com/thedotmack/claude-mem)、[会话供给](https://github.com/keepplain/keepplain-plugin/blob/master/README.md) |
| 代理结果声明需要可观察的业务效果 | 社区实现 + 发布供给 + YC竞争；缺独立需求；Show HN、Product Hunt、YC Company Directory | Deedglass与agentest分别核对数据变化及执行轨迹；Shipyard扩大服务初始化入口，Xulux已提供适配评估。 推断：先为一个数据库写动作定义验收；演示、工具成功返回和融资热度都不能代替客户故障样本。 [数据效果](https://github.com/deedglass/deedglass/blob/main/README.md)、[轨迹检查](https://github.com/srpadmanabhuni/agentest/blob/main/README.md)、[初始化供给](https://www.producthunt.com/products/shipyard)、[竞争供给](https://www.ycombinator.com/companies/xulux) |
| 实体AI与太空热点须单列资本门槛 | 公司公告 + 融资报道 + YC投资观点；Ramon.Space、Crunchbase News、36氪、YC RFS | 轨道计算、现场监测、量子计算和电池材料均有本周可见融资；RFS继续关注实体建设。 推断：硬件、产线及融资资产负债表不适合直接列为两周小团队MVP；软件服务预算仍需客户验证。 [公司公告](https://ramon.space/press/ramon-space-raises-124-million-series-b-leading-the-next-era-of-computing-in-orbit/)、[全球周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[投资观点](https://www.ycombinator.com/rfs) |

## 7. 六个机会及100分评分

全部为**未验证、先做有限服务交付的低资本假设**。最高需求分21/30；尚未核实任何本期候选的损失账本、合同或收入。跨源分反映证据与实现边界的互补程度，不代表获得了多个独立客户。

| 机会 | 需求/30 | 买家/20 | 跨源/15 | 两周/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 Shopify高意图搜索的结果回归清单 | 21 | 18 | 10 | 13 | 6 | 3 | 71 |
| 02 数字商品多变体的文件与旧链接巡检 | 19 | 18 | 9 | 12 | 6 | 3 | 67 |
| 03 外包代码同步的贡献者与签名追溯验收 | 14 | 17 | 10 | 12 | 6 | 4 | 63 |
| 04 自托管CI中断后的重复副作用验收 | 12 | 17 | 10 | 12 | 6 | 4 | 61 |
| 05 多客户共享记忆的事实冲突回归包 | 11 | 16 | 10 | 12 | 5 | 4 | 58 |
| 06 客服批量改库动作的实际影响核对 | 8 | 16 | 9 | 11 | 4 | 4 | 52 |

### 01 Shopify高意图搜索的结果回归清单 — 71分

给搜索行为变化后的商店建立业务相关性基线，区分配置、商品资料与店面展示造成的偏差。

**买家假设：** 使用者为商品运营，批准人为电商负责人；假设付款人为维护细分品类商店的Shopify实施服务商或商家。

**窄MVP：** 一个获授权商店、20个商家确认的查询；记录预期商品、原生预览与店面前10项，交付错配清单和可在原生设置内验证的修改建议。

**证据判断：** P1是11-21的新主诉，P2是较早相近反馈，P3是配置请求；未取得真实查询、损失或同一根因证明。 官方已有Search preview且提醒第三方主题结果可能不同；G10仅提供采样实现候选，价值须来自商家标注和修订验收。 [新旧商户主诉](https://apps.shopify.com/search-and-discovery/reviews)、[官方预览与边界](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[浏览器实现候选](https://github.com/vercel-labs/agent-browser)。

**评分理由：** 具名反馈有重复性且最新一条来自昨日，买家和交付清楚；无损失账本，原生能力强，防御分低。

**主要风险：** 平台排序不可完全控制；原生预览加一次配置可能已足够，相关性改善也未必转化为订单。

**两周实验：** 计划第1周访谈3家服务商，取得1店20个授权查询及商家相关性标注；第2周比较原生配置前后结果与人工排查时间，争取1次付费验收。未执行。

**停止条件：** 没有可重现错配、无法确认预期商品，或原生预览已让商家无需外部协助时停止产品化。

**前20位潜客路径：** 拟从公开的细分品类Shopify实施案例筛选前20家服务商；以最近一次搜索投诉或上新为访谈触发点。

**可积累资产：** 积累经商家确认的查询—商品判断、品类词汇与主题差异；初期是服务经验。


### 02 数字商品多变体的文件与旧链接巡检 — 67分

在说明书、模板或音频更新前后核对变体关联和实际交付版本，减少遗漏与不明确的异常处理。

**买家假设：** 使用者为内容运营，批准和付款人为维护多变体数字商品的商家负责人或其Shopify服务商。

**窄MVP：** 一店、20个授权变体、一次文件版本更新；先从商家提供的清单及测试购买样本核对文件名、校验值、旧链接目标与通知选择，输出差异表；不先做完整资产平台。

**证据判断：** P4反映异常通知难核对但没有证实丢失；P5抱怨重复上传，P6是较早的逐变体更新佐证，不算三起同类故障。 官方已有文件替换与更新通知，并说明旧链接及外部目标不监测的边界；G4仅提供表格界面供给，尚未验证资产接口可用性。 [商户反馈](https://apps.shopify.com/digital-downloads/reviews)、[官方文件与链接规则](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)、[清单界面候选](https://github.com/dream-num/univer)。

**评分理由：** 操作负担与主体明确，但没有漏交付损失数据；原生已有大部分交付能力，先验证一次巡检是否值得付费。

**主要风险：** 可能没有足够的官方批量接口；新旧链接规则复杂，检查还可能消耗访问次数。若必须无授权抓取或修改真实订单才可交付，应停止。

**两周实验：** 计划第1周访谈3名数字内容商家并取得20个授权样本；第2周在约定的测试链接或离线记录上核对一次更新，记录遗漏、操作分钟和旧链接差异，争取1次付费服务。未执行。

**停止条件：** 原生文件筛选和一次操作培训已覆盖、无重复更新工作，或缺少合法可用的资产清单时停止。

**前20位潜客路径：** 拟从公开销售多版本说明书、课程附件或模板的Shopify案例寻找前20家商家或服务商；先确认更新频率。

**可积累资产：** 积累变体与文件版本的验收样本和更新清单；校验值本身不构成壁垒。


### 03 外包代码同步的贡献者与签名追溯验收 — 63分

为按路径分工的交付链核对原提交、批准记录和目标提交，明确能证明什么、哪些证据未保留。

**买家假设：** 使用者为代码审阅者，批准和付款人为使用外包开发的Odoo或同类模块实施团队负责人。

**窄MVP：** 一个客户授权的测试仓库、10次合成同步；对照原SHA、原签名验证结果、审批人和目标SHA，交付完整映射及缺失项，不承诺给改写后的提交恢复原签名。

**证据判断：** P7有厂商明确答复：原Verified标记不保留，但产品内已有贡献者及审批历史；应先检验其现有导出能否满足买家。 GitHub官方区分签名验证与身份；T3的代码行会话来源仅为相邻证据方式，不能作为密码学验证替代。 [当前同步边界](https://www.producthunt.com/products/gitroots)、[官方签名定义](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)、[会话来源方式](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)。

**评分理由：** 边界被厂商确认，验收对象可界定；仍只有提问，没有实际采购或审计拒绝记录，需求分保持克制。

**主要风险：** 现有审计导出可能已经足够；同步与合并策略会改变对象，客户可能要求原签名而非映射报告，产品无法用补充字段满足这一要求。

**两周实验：** 计划第1周访谈3家有外包协作的实施商，确认他们真正需要的证据；第2周对10次测试同步核对来源、审批与目标，争取1次付费交付。未执行。

**停止条件：** 客户只需现有审计导出、无法授权读取原提交，或只接受保留原始签名而同步方式做不到时停止。

**前20位潜客路径：** 拟从公开Odoo模块交付与外包案例筛选前20家实施商，询问最近一次交接或客户审计。

**可积累资产：** 积累不同同步、合并和审批路径下的可验证映射规则；不依赖重新实现路径权限。


### 04 自托管CI中断后的重复副作用验收 — 61分

在迁移至自有机器之前，确认网络中断或任务重派后哪些步骤会重跑，以及发布动作有没有明确的去重证据。

**买家假设：** 使用者为维护GitHub Actions的工程师，批准和付款人为考虑迁移runner的小型SaaS工程负责人。

**窄MVP：** 一个授权测试工作流、缓存构建和模拟发布两个阶段、6个合成中断案例；分别记录job、步骤、产物及模拟发布编号，不操作生产发布。

**证据判断：** P8是情景提问；L2作者已有防休眠、重派和重试答复，没有本期真实重复发布事故，不能写成产品缺陷。 GitHub已有临时runner及日志保留机制；T4是轨迹核验方法类比，须保留runner日志和实际副作用记录才能下结论。 [提问与答复](https://www.producthunt.com/products/codemany)、[官方runner机制](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)、[轨迹核验方法](https://github.com/srpadmanabhuni/agentest/blob/main/README.md)。

**评分理由：** 迁移触发点、买家及测试范围清楚；证据主要是问题和供给，尚无独立事故或预算，所以不推荐先造runner平台。

**主要风险：** 第三方重试语义未实测，外部发布目标可能没有可查询的执行标识；原生工作流配置可能足够，硬件维护成本也可能抵消节省。

**两周实验：** 计划第1周访谈3个正在评估自托管CI的团队并确认1条工作流；第2周在测试环境演练6种中断，记录重复执行与unknown，争取1次付费迁移验收。未执行。

**停止条件：** 现有配置能直接说明并满足全部语义、客户没有迁移计划，或无法观察实际副作用时停止。

**前20位潜客路径：** 拟从公开自托管GitHub Actions迁移案例寻找前20个团队，以即将迁移或增加并发为筛选条件。

**可积累资产：** 积累特定工作流的重试、缓存与发布去重反例；不靠通用日志总结形成壁垒。


### 05 多客户共享记忆的事实冲突回归包 — 58分

在多个工具共享客户资料之前，验证过期事实、相互矛盾的版本与跨客户读取会怎样传播。

**买家假设：** 使用者为代理工作流实施者，批准和付款人为同时服务多个客户的咨询或营销服务商负责人。

**窄MVP：** 两个合成客户桶、两个已授权客户端、10条负责人批准的事实；注入日期冲突、旧版本与误归属，记录各客户端读取结果和回滚后状态。

**证据判断：** P9有具体错误传播提问，作者说明回滚与修改者记录已有，冲突提醒仍在开发；没有实测错误率或客户损失。 M6、G8、T3分别是共享文件、上下文和会话来源供给；它们加剧竞争，也不能共同证明语义冲突已解决。 [问题与开发计划](https://www.producthunt.com/products/ai-context-flow)、[共享文件供给](https://www.ycombinator.com/companies/flashdrive)、[上下文竞争](https://github.com/thedotmack/claude-mem)、[会话来源供给](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)。

**评分理由：** 当前讨论指向明确边界，但证据仍主要来自供给侧；只值得做有真值的小样本访谈和演练。

**主要风险：** 找不到可作为真值的批准版本就无法验收；平台本身可能很快补齐提醒，客户也可能只需要一次使用培训。

**两周实验：** 计划第1周访谈3家使用多个代理工具的服务商，确认10条可验收事实；第2周在合成数据上运行冲突、隔离和回滚案例，争取1次付费验收。未执行。

**停止条件：** 没人负责批准事实版本、没有实际多工具协作，或已有产品配置与通知完全覆盖时停止。

**前20位潜客路径：** 拟从公开AI工作流实施案例筛选前20家咨询或营销服务商，不把产品点赞者视作已确认潜客。

**可积累资产：** 积累客户批准的事实版本、访问边界与迁移回归样本；避免另造通用记忆数据库。


### 06 客服批量改库动作的实际影响核对 — 52分

给一个准备接入代理的后台更新动作建立预期影响范围，核对工具返回与已提交数据的差异。

**买家假设：** 使用者为后端与客服工具工程师，批准和付款人为开放代理写数据库能力的小型B2B SaaS技术负责人。

**窄MVP：** 一个授权Postgres测试副本、一个批量修改标签动作、10个合成案例；对照预期记录、实际提交与触发器影响，保留无法核对的unknown。

**证据判断：** T5提供声明与数据效果对照，T4检查轨迹；两者均为供应者证据，演示不能当作客户事故。 L5显示服务初始化供给，M5显示适配评估已有竞争；它们只是相邻信号，尚未证明该批量更新动作有独立预算。 [效果验证供给](https://github.com/deedglass/deedglass/blob/main/README.md)、[轨迹检查供给](https://github.com/srpadmanabhuni/agentest/blob/main/README.md)、[相邻初始化供给](https://www.producthunt.com/products/shipyard)、[评估竞争](https://www.ycombinator.com/companies/xulux)。

**评分理由：** 没有独立买家主诉，需求仅8/30；保留为低优先级实施假设，不能凭多个工具发布提高需求分。

**主要风险：** 变更捕获、并发和触发器范围可能让归因不完整；现有数据库测试或Deedglass配置可能已经足够，商业嵌入还须核对其分层许可。

**两周实验：** 计划第1周访谈3个已有后台代理原型的团队，仅在取得真实动作与验收负责人后，第2周在测试副本做10例对照；询问是否愿为一次验收付款。未执行。

**停止条件：** 找不到真实操作与批准人、变更不可观察，或既有测试已经覆盖时停止；不进入真实客户数据库试错。

**前20位潜客路径：** 拟从公开客服后台自动化案例筛选前20家小型SaaS，优先确认即将开放的具体写动作。

**可积累资产：** 积累操作范围、并发与触发器的客户确认反例；初期价值是配置与验收。

## 8. 拒绝、拥挤与资本密集方向

- **通用搜索引擎或基础数字交付替代品。** 官方已有搜索预览、商品提升、文件替换和更新通知；先证明窄验收工作有付费价值。[搜索能力](https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-modify-search)、[数字交付能力](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads)。
- **另一个通用AI记忆层、聊天助手或代理评估平台。** AI Context Flow、claude-mem、KeepPlain、FlashDrive和Xulux已经覆盖不同层次。缺少实际失败样本与买家时，不凭供给热度立项。[共享上下文](https://www.producthunt.com/products/ai-context-flow)、[开源上下文](https://github.com/thedotmack/claude-mem)、[会话工具](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)、[共享文件](https://www.ycombinator.com/companies/flashdrive)、[评估供给](https://www.ycombinator.com/companies/xulux)。
- **把签名来源、自动回滚或数据库安全包装成无条件保证。** 当前产品承认明确边界；一次演示或规则通过不能验证所有并发、权限与外部副作用。[同步边界](https://www.producthunt.com/products/gitroots)、[效果验证项目](https://github.com/deedglass/deedglass/blob/main/README.md)、[轨迹项目](https://github.com/srpadmanabhuni/agentest/blob/main/README.md)。
- **泛化本地邮件AI、网页数据集包装或一键初始化工具。** 本期有Glassmail、Exa和Shipyard发布，但没有为这些泛化方向取得独立采购样本；保留为供给观察。[Glassmail](https://www.producthunt.com/products/glassmail)、[Exa](https://www.producthunt.com/products/exa-ai)、[Shipyard](https://www.producthunt.com/products/shipyard)。
- **自建轨道计算设备、量子计算硬件、电池材料产线、机器人监测网络或实体AI融资平台。** 明确资本密集或现场交付周期长，不纳入两周小团队软件MVP。现有融资只说明资本活动，不能证明边缘软件服务已有预算。[Ramon.Space公告](https://ramon.space/press/ramon-space-raises-124-million-series-b-leading-the-next-era-of-computing-in-orbit/)、[全球周榜](https://news.crunchbase.com/venture/biggest-startup-rounds-science-neurotech-model-ml-galvanize-therapeutics/)、[中国列表](https://pitchhub.36kr.com/financing-flash)、[YC投资观点](https://www.ycombinator.com/rfs)。

## 9. 下一步实验

1. 第一周先验证前两项各3名买家，要求展示真实查询或最近一次资产更新；先检查现有原生能力是否足够。尚未联系任何人。
2. 仅给取得授权样本的候选做一次有限交付，记录人工分钟、漏项、修订轮数与是否实际付款。样本量和目标是实验设计，不能写成已验证业务指标。
3. 贡献者追溯与CI机会先确认原提交、审批、runner日志和副作用记录是否可得；信息不足保留unknown。首轮使用合成同步或模拟发布。
4. 共享记忆先让客户指定事实批准人；没有真值或版本责任人，不把模型间一致视为正确。
5. 数据库机会保持最后顺位。只用授权测试副本，先比较既有测试与现成工具配置的成本，再决定是否值得继续。

## 10. 访问限制与不确定性

- GitHub Trending在网页工具中返回restricted URL，GitHub连接器不提供Trending端点；沙箱内DNS无法解析。经环境批准后，普通匿名HTTPS取得三窗200响应。没有绕过GitHub站点验证码、登录、robots或限流。
- Show HN使用公开Algolia API的匿名HTTPS读取。没有私有HN数据；只采样最新100条，低points/comments不代表没有需求，高热度也不代表采购。
- [IT桔子](https://www.itjuzi.com/)返回412后停止；[BrightAI公告转载](https://finance.yahoo.com/technology/ai/articles/brightai-announces-97-million-investment-150000194.html)返回429后停止。后者仅采用已经可读的Crunchbase报道，不把搜索摘要补成已读公告。
- [36氪公开列表](https://pitchhub.36kr.com/financing-flash)可读，但两条详情只有页面壳；未核实交割、订单和产能。钠远条目未明示币种，保留“数千万元”而不补写人民币。
- [YC总目录](https://www.ycombinator.com/companies)无可读正文，以官方开发工具目录和两家公司页补足；最新可见RFS仍为Winter 2027，没有把它写成今日新命题。
- 商城默认评论页不按日期单调排序；最新排序查询、Flow及Inbox评论页未被网页工具读出。只保留能定位的具名反馈，未取得可靠单条星级，未采用AI生成评论摘要。
- PH仍使用相对留言时间，未倒推精确UTC；部分发布徽章为11-21。没有把厂商自报速度、费用、使用规模或安全性当成独立验证。
- 六项技术项目只读README，没有运行。trace2rules、KeepPlain使用实际默认分支master；最初尝试main返回404，未把访问失败写成项目不存在。
- 评分依赖研究判断；没有访谈、故障复现、客户损失、融资交割或工具准确率的独立验证。所有机会均保留原生替代与停止条件。

## 11. 本地验证

已执行：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

校验通过：`Radar validation passed: 6 opportunities, 7 themes, 38 dataset rows`。

另已核对六维权重与加总、HN七日范围、GitHub三窗覆盖、148处结构化URL格式及报告条目一致性。精选HN与GitHub数值逐项匹配本次采集响应；README移除新增的顶部日报链接后与原文件逐字一致，修改范围恰为三个允许路径。`git diff --check`及新报告行尾空白检查通过。

结构校验与来源数值匹配不证明商业需求、融资交割或第三方产品效果。

本次仅更新本日报、`src/data/radar.json`及README顶部报告链接；历史报告与列表保留。提交、推送、部署和服务操作由外部自动化处理。
