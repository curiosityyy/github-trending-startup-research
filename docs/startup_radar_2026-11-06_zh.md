# Startup Radar 创业机会日报｜2026-11-06

> UTC证据整理快照：2026-11-06T01:21:37Z。Show HN指标快照：2026-11-06T01:18:35Z；GitHub三窗：2026-11-06T01:18:50Z。
> 6款当前发布、5个七日内技术项目、10个Trending仓库、6条市场信号、6条或组反馈；7个跨源主题、6个待验证机会。

## 1. 方法与本期判断

研究前读取[研究方法](startup_radar_method_zh.md)、原有结构化数据及最近的[11-04日报](startup_radar_2026-11-04_zh.md)。仓库没有11-05日报，因此变化基线是11-04，不补写缺失历史。

采用原有100分规则：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数是研究优先级，不是成功概率。买家、MVP、报价、客户数量及验收目标均为本报告提出的实验假设，尚未外联、收款或在客户系统执行。

本期优先验证**优惠码展示权限核对（72）**和**商品目录差异证据包（70）**。前者有重复商家主诉，但原生设置可能已经足够；后者必须区分正常同步时延、市场差异与真实故障。第三位是**单次代理运行成本回执核对（63）**，需求目前只有询问和厂商回应，不能写成已验证的采购需求。

证据标签区分平台观察、项目/厂商自述、具名商家主诉、功能询问、官方机制和本报告推断。发布页与同作者README不算独立客户；跨源供给主要帮助判断实现与竞争，不自动提高需求分。Stars、票数、融资、评论数不代表需求、收入或留存。

## 2. 相比11-04的实质变化

- **发布重新采样**：6款均不同于上期5款，转向Glasshand、Pushary for Teams、Clocknext、Tao Browser、Okapi和backlane。它们在本次PH首页当前批次出现；其中有既有产品的版本发布和较早预热贴，不把“today”翻译成11-06 UTC首次上线。
- **技术5/5换选**：LLMBrake、Bisimia、KeepPlain、Detail Keeper和calsdk均有七日内Show HN原帖。新帖不一定代表项目或模型版本刚创建。
- **GitHub 7个新选、3个刷新保留**：保留worktrunk、claude-mem、security-audit-skill，全部重取窗口指标；新增语义图、桌面/浏览器操作、语音、PR审查和视频工具。三窗15/16/12行，共43条、37库去重，精选10库；不与上期总数直接推导增长。
- **市场替换**：全球采用11-05建筑机器人融资分析；中国换选Sand.ai与睿芯行；YC目录换选Plover Labs与RouterPlus。RFS仍是Winter 2027，本期重选垂直基础模型主题，未发现新版本。
- **需求6条或组换选**：4组商城主诉涉及优惠码、旧说明、售罄展示、价格库存；另2项是扫码测试和运行成本的PH询问。商城证据日期较早，不能称为今日新增事故。
- **机会重排且范围收窄**：从上期同意状态、通知译文等验收转向促销配置、目录取证、成本回执和特定回归。上期未入选方向并未被证明已解决；本期没有对它们作新的完成或修复判断。

项目事实与原始链接见下列各数据表；上期比较仅针对仓库中的精选集，不代表全站新增或消失。

## 3. 来源覆盖、采样与时间口径

| 来源 | 覆盖 | 口径与限制 |
| --- | --- | --- |
| [Product Hunt](https://www.producthunt.com/) | 6款当前批次 / 6个产品页 | 首页与产品页交叉核对；6款均不同于11-04精选；作者预热贴可早于当前批次，不使用动态票数。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) | 1,030匹配 / 返回100 / 检视45 / 精选5 | 固定七日窗口2026-10-30T01:17:14Z至11-06T01:17:14Z；目的性采样，未穷尽全部帖子及评论。 |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 15 / weekly 16 / monthly 12 | Language Any / Spoken Language Any已确认；43条窗口记录、37个去重仓库，精选10个；窗口star增量不相加。 |
| [YC Company Directory / RFS](https://www.ycombinator.com/companies/industry/developer-tools) | 2家公司新选 / Winter 2027复核 | 公开开发工具分类页可读；根目录及所选公司单页没有正文。RFS版本未变，重选垂直基础模型命题。 |
| [Crunchbase News](https://news.crunchbase.com/venture/sector-snapshot-2026-construction-robotics-funding-soars-bedrock/) | 11-05建筑机器人融资分析 | 公开News可读；统计截至10-29，融资集中度与轮次数分开观察，不进入付费数据库。 |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2项中国新选融资 / 列表可读 | Sand.ai及睿芯行；详情无可用正文，Sand.ai证券时报原文超时。相对发布时间不等于交割日，未补写未披露字段。 |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 未读取 | 首页返回412后停止；没有绕过访问限制，也没有将未读取当作零融资。 |
| [Shopify App Store / Product Hunt评论](https://apps.shopify.com/facebook/reviews) | 3款商城评级 / 6条或组反馈 | 4组商城主诉与2项PH询问；商城评论跨度09-09至10-30，整体评级是本次页面快照，旧投诉未确认仍存在。 |
| [Shopify官方文档 / 项目README / 模型卡](https://help.shopify.com/en/manual/discounts/sales-channel-discounts) | 机制与能力边界交叉核对 | 确认展示与兑换区别、渠道同步时序、预算故障放行、现有SDK测试及语音模型选择偏差；未运行产品。 |

**GitHub：**[daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)的页面均确认Language Any / Spoken Language Any。窗口增量使用原页面数值，不与总stars混用、不跨窗相加；读取时间不是榜单内部刷新时间。

**HN：**[固定七日Algolia查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100)覆盖2026-10-30T01:17:14Z至2026-11-06T01:17:14Z。返回匹配总数1,030，实际取得最新100条，检视前45条标题与可用作者正文后精选5条，并读相关README/模型卡。不是完整七日普查，未完整阅读所有评论串；points/comments仅为2026-11-06T01:18:35Z快照。

**PH：**[首页当前批次](https://www.producthunt.com/)与6个产品页交叉核对。平台时区、预热贴与UTC存在口径差异；例如Okapi作者帖显示21d ago，仍列于本次当前批次，因此不赋予精确首发日期。未保存动态票数；标为Likely AI的评论不用于需求评分。

**商城：**使用第一方商城具名评论，整体评级与评论日期分别记录。默认排序混有较早评论，本期不是七日新增差评统计。Facebook页面标注昨日缓存，Google与Marketplace Connect为当日抓取缓存；snapshotAt是研究整理时间，不声称实时交易状态。Shopify Magic摘要不作为独立用户证言。另查看Bundles页面，但较早反馈未增加到精选；Flow评论工具不可读。

**市场：**Crunchbase采用公开News及其统计口径；36氪采用可读快讯列表，详情缺失和原文超时单列。YC分类目录可读，公司根页/单页不可读不等于公司不存在。目录状态是本次返回的公司自述，RFS是投资者命题。

## 4. 来源快照明细

以下除HN和GitHub有独立读取时间外，snapshotAt使用2026-11-06T01:21:37Z作为整理时点。事件、评论及模型版本日期均按原文保留；能力描述未运行实测。


### 4.1 当前产品发布

| 项目 / 来源 | 日期或指标 | 观察与证据边界 |
| --- | --- | --- |
| [Glasshand](https://www.producthunt.com/products/glasshand) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 厂商提供远程iPhone/Mac；扫码应用开发者问如何向机架内相机呈现二维码，作者明确此功能尚在开发。设备清除流程仅为自述。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |
| [Pushary for Teams](https://www.producthunt.com/products/pushary) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 当前团队版把审批人、请求和规则放在共享记录中；作者承认个人使用已有原生免费方案。未验证是否覆盖所有写入入口。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |
| [Clocknext](https://www.producthunt.com/products/clocknext) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 将调用用量转成credits、outcomes等计费单位；评论追问异常成本能否定位到某次agent run。厂商保证利润的表述未经验证。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |
| [Tao Browser](https://www.producthunt.com/products/tao-browser) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 作者描述按客户隔离cookies和登录、发信前错账户提示；Mac仍为beta、扩展范围有限。用户证言未验证，未采用Likely AI评论作需求证据。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |
| [Okapi](https://www.producthunt.com/products/okapi-2) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 根据已公告的API变化生成供团队审阅的PR；作者承认无法预知未公告的变化，并说明不运行客户代码。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |
| [backlane](https://www.producthunt.com/products/backlane-2) / Product Hunt | 本次首页Top Products Launching Today及产品页；不记录动态票数 | 当前支持Mirakl、OTTO和Kaufland，允许关闭写入并查看写操作日志；Walmart、Target、Amazon为coming soon，不能写成现有支持。 **当前平台发布批次 + 厂商自述；不等于11-06 UTC首次上线。** [本次首页](https://www.producthunt.com/) |

### 4.2 七日内技术社区

| 项目 / 来源 | 日期或指标 | 观察与证据边界 |
| --- | --- | --- |
| [LLMBrake](https://news.ycombinator.com/item?id=50386174) / Show HN / Algolia | 2026-11-05T23:40:38Z；2 points / 0 comments；指标快照2026-11-06T01:18:35Z | README为早期版本：默认内存计数、故障默认放行；HostedStore已描述预留/结算。请求失败释放为0是其实现口径，不证明供应商实际未计费。 **七日内原帖 + 作者/项目原文；产品能力未实测。** [项目原文](https://github.com/llmbrake/llmbrake/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) |
| [Bisimia](https://news.ycombinator.com/item?id=50385004) / Show HN / Algolia | 2026-11-05T21:54:16Z；2 points / 0 comments；指标快照2026-11-06T01:18:35Z | HN作者介绍浏览器内、本地优先的TLA+/TLC环境。官网工具不可读，性能倍数未独立测试，不纳入比较指标。 **七日内原帖 + 作者/项目原文；产品能力未实测。** [项目原文](https://news.ycombinator.com/item?id=50385004)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) |
| [KeepPlain](https://news.ycombinator.com/item?id=50384568) / Show HN / Algolia | 2026-11-05T21:16:49Z；1 points / 0 comments；指标快照2026-11-06T01:18:35Z | README可把代码行关联到会话并跨代理交接；会话在确认或开启自动模式后发送至服务端，模式脱敏可能漏检。不是完全离线的会话仓库。 **七日内原帖 + 作者/项目原文；产品能力未实测。** [项目原文](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) |
| [Detail Keeper / Own-names adapter](https://news.ycombinator.com/item?id=50383785) / Show HN / Algolia | 2026-11-05T20:06:33Z；3 points / 0 comments；指标快照2026-11-06T01:18:35Z | 作者针对同音人名和虚构名称；模型卡披露候选选择复用了有声书样本，新版没有新的留出会话结果。发布帖成绩不能当独立泛化证明。 **七日内原帖 + 作者/项目原文；产品能力未实测。** [项目原文](https://huggingface.co/virgil-coach/own-names-qwen3-asr)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) |
| [calsdk](https://news.ycombinator.com/item?id=50383335) / Show HN / Algolia | 2026-11-05T19:31:56Z；2 points / 0 comments；指标快照2026-11-06T01:18:35Z | README统一事件、重复规则和增量同步，已声明真实API录制回放与一致性测试；不处理OAuth，应用仍需提供令牌。尚未运行验证。 **七日内原帖 + 作者/项目原文；产品能力未实测。** [项目原文](https://github.com/vkpdeveloper/calsdk/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793323034%2Ccreated_at_i%3C%3D1793927834&hitsPerPage=100) |

### 4.3 GitHub三窗精选

| 项目 / 来源 | 日期或指标 | 观察与证据边界 |
| --- | --- | --- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) / GitHub Trending · Language Any / Spoken Language Any | daily +2,679 stars | 榜单描述以语义图支持确定性查询和可解释推理；仅是工程供给，未验证企业数据准确性。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) / GitHub Trending · Language Any / Spoken Language Any | daily +2,173 stars | 榜单定位代理计算机操作CLI；桌面可操控不等于覆盖真机相机、传感器和现场光照。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) / GitHub Trending · Language Any / Spoken Language Any | daily +150 stars | 榜单定位浏览器自动化CLI；可作为获授权流程复验线索，不代表业务状态正确。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) / GitHub Trending · Language Any / Spoken Language Any | daily +223 stars | 榜单标注开源语音AI；没有核对专名准确率、中文适用性或商用边界。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) / GitHub Trending · Language Any / Spoken Language Any | daily +546 stars / weekly +1,802 stars | 榜单提供Git worktree管理；代码目录隔离不代表凭据、数据库或审批记录隔离。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily)、[weekly榜](https://github.com/trending?since=weekly) |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) / GitHub Trending · Language Any / Spoken Language Any | weekly +1,355 stars | 榜单定位开源PR审阅器；代码审查不替代外部API的实际契约复验。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [weekly榜](https://github.com/trending?since=weekly) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) / GitHub Trending · Language Any / Spoken Language Any | weekly +9,318 stars / monthly +17,621 stars | 榜单强调捕获、压缩和恢复上下文；与KeepPlain形成相邻供给，不能由stars推断留存。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) / GitHub Trending · Language Any / Spoken Language Any | monthly +35,956 stars | 榜单描述多阶段审计及机器可读发现；项目宣传不是独立安全认证。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [monthly榜](https://github.com/trending?since=monthly) |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) / GitHub Trending · Language Any / Spoken Language Any | monthly +22,694 stars | 榜单描述从HTML渲染视频；开发者采用热度不证明制作公司的付款意愿。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [monthly榜](https://github.com/trending?since=monthly) |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) / GitHub Trending · Language Any / Spoken Language Any | monthly +48,803 stars | 榜单描述本地配音、转写和声音工具；未采用其语种数量宣传作为质量证明。 **榜单窗口增量；关注信号，不是需求、收入或持续采用。** [monthly榜](https://github.com/trending?since=monthly) |

### 4.4 投资与市场

| 项目 / 来源 | 日期或指标 | 观察与证据边界 |
| --- | --- | --- |
| [建筑机器人融资集中于少数公司](https://news.crunchbase.com/venture/sector-snapshot-2026-construction-robotics-funding-soars-bedrock/) / Crunchbase News | 报道2026-11-05；统计截至10-29约16亿美元 / 30轮 | 报道统计前三家公司约占83%；金额上涨主要来自大额轮次，不能推出小团队融资普遍改善。整机研发及自营施工属于资本密集方向。 **公开数据提供方分析；不是逐笔交割核验。**  |
| [Sand.ai：视频大模型A+轮](https://pitchhub.36kr.com/financing-flash) / 36氪公开融资快报 | 读取列表显示22小时前；2亿美元A+轮 | 快讯载基石资本、网宿科技联合领投。大模型融资表明供给扩张，不证明付费留存或生成质量；训练基础模型属于资本密集方向。 **可读媒体快讯列表；详情无正文、证券时报原文超时。** [快讯入口（正文不可用）](https://36kr.com/newsflashes/4056271755989892)、[原文入口（读取超时）](https://www.egsea.com/news/detail/2360219.html) |
| [睿芯行：新一轮融资](https://pitchhub.36kr.com/financing-flash) / 36氪公开融资快报 | 读取列表显示23小时前；数千万元，币种及轮次未标 | 列表称投资方包括创新工场、中力股份和今天国际；未补写币种、轮次、资金用途或交割日，需公司/投资方原文继续确认。 **媒体列表；未核验交割与公司经营指标。** [快讯入口（正文不可用）](https://36kr.com/newsflashes/4056171658531720) |
| [Plover Labs：确定性合并门禁](https://www.ycombinator.com/companies/industry/developer-tools) / YC Company Directory | 2026-11-06读取；F2026 / Active | 目录描述从代码库惯例和历史错误建立确定性验证门禁；收入和效率为公司自述，本期不采纳其数值。表明通用代理审查已拥挤。 **当前目录公司自述；不是当日融资。** [公司入口（无可读正文）](https://www.ycombinator.com/companies/plover-labs) |
| [RouterPlus：推理模型与供应商选择](https://www.ycombinator.com/companies/industry/developer-tools) / YC Company Directory | 2026-11-06读取；F2026 / Active | 目录描述用客户流量选模型、供应商竞价及峰值/备用供应商检查；未核验成本节省与实际负载。计费核对必须记录模型和供应商，不能只看统一入口。 **当前目录公司自述；不是独立需求或收入证明。** [公司入口（无可读正文）](https://www.ycombinator.com/companies/routerplus) |
| [YC Winter 2027：垂直基础模型](https://www.ycombinator.com/rfs) / YC Requests for Startups | 2026-11-06复核；最新页签Winter 2027，版本未变 | Vertical Foundation Models强调行业数据权利、可验证奖励以及准确率/算力优势。小团队可先卖行业验收样本，训练基础模型则属资本密集方向；这是本报告推断。 **既有版本今日重选主题；投资观点不是采购承诺。**  |

### 4.5 具体主诉、询问与缺口

| 项目 / 来源 | 日期或指标 | 观察与证据边界 |
| --- | --- | --- |
| [Viridian Dice / Aphago：非预期优惠码进入广告](https://apps.shopify.com/facebook/reviews) / Shopify App Store | 评论2026-10-30 / 09-22；Facebook & Instagram整体3.9分 / 5,833评 | 两商家主诉旧亲友码或创作者优惠码被用于推广；损失未核实。官方把渠道展示权限与兑换资格分开，不能承诺关闭展示就阻止兑换。 **重复具名主诉 + 当前官方机制；根因未复现。** [官方渠道设置](https://help.shopify.com/en/manual/discounts/sales-channel-discounts) |
| [GRINFACTORY Ver.2：旧商品说明仍影响审核](https://apps.shopify.com/facebook/reviews) / Shopify App Store | 评论2026-10-05；Facebook & Instagram整体3.9分 / 5,833评 | 商家称当前店铺已更新，但Meta保留旧说明并按医疗器材拒绝普通袜子；要求看到审核所用数据及同步时间。未取得实际目录版本或审核日志。 **具名商家主诉；不证明平台错误归因。** [外部渠道时序](https://help.shopify.com/en/manual/markets/rollouts/reach-and-external-channels) |
| [Cryptic Nine：店铺库存与售罄展示冲突](https://apps.shopify.com/google/reviews) / Shopify App Store | 评论2026-10-10；Google & YouTube整体4.5分 / 5,600评 | 商家称库存有货而网站持续显示售罄，把原因归于应用；实际库存、市场配置和脚本未核验，不能断言Google应用改写库存。 **单一具名主诉；根因未知。** [官方产品状态与可用性](https://help.shopify.com/en/manual/products/product-status) |
| [Eddy’s Emporium / Alternate Worlds Magic：价格库存同步异常](https://apps.shopify.com/marketplace-connect/reviews) / Shopify App Store | 评论2026-09-18 / 09-09；Marketplace Connect整体4.1分 / 2,133评 | 前者称刊登后被移除并出现零价格；后者称价格和库存同步出错。均为较早投诉，不能当11月仍未修复；本期仅用于安排复访。 **较早重复主诉；当前复现与损失均未知。**  |
| [Vipul Kumar：机架真机如何测试扫码](https://www.producthunt.com/products/glasshand) / Product Hunt · Glasshand评论 | 本次页面显示13h ago；作者回复7h ago | 评论者提到自己的签到应用需要扫码；作者明确尚不支持向相机呈现图像/视频，正在开发。属于具体用例及已承认边界，尚无付款证据。 **具体功能询问 + 作者确认缺口。**  |
| [Oleksii Sekundant：异常成本需要定位到一次运行](https://www.producthunt.com/products/clocknext) / Product Hunt · Clocknext评论 | 本次页面显示16h ago；不换算为精确发帖时间 | 评论要求把异常成本定位到某次agent run；厂商称已记录子代理信号。属于询问，不能写成Clocknext缺少功能或已经造成损失。 **功能询问 + 厂商回应；无独立使用日志。** [预算库及边界](https://github.com/llmbrake/llmbrake/blob/main/README.md) |

### 4.6 改变判断的反证

- **优惠展示不是兑换开关**：[官方说明](https://help.shopify.com/en/manual/discounts/sales-channel-discounts)已有渠道展示设置，同时明确折扣码的跨渠道兑换限制。因此不推荐“关闭展示即阻止兑换”的工具；商家主诉的具体配置与根因仍未知。
- **目录差异可能是预期行为**：[官方rollout说明](https://help.shopify.com/en/manual/markets/rollouts/reach-and-external-channels)指出部分范围变更只作用于店铺，外部系统也各自同步。投诉本身不足以证明同步器有bug，需附带市场、版本与时间。
- **预算与供应商账单不是同一份事实**：[LLMBrake README](https://github.com/llmbrake/llmbrake/blob/main/README.md)已经提供HostedStore预留结算，不能声称它没有并发控制；默认故障放行以及失败调用释放为0的处理，不能证明供应商没有收费。本期不把异常尝试记为零成本。
- **代码修复不等于运行正确**：[Okapi作者答复](https://www.producthunt.com/products/okapi-2)明确不能预知未公告变化；[calsdk](https://github.com/vkpdeveloper/calsdk/blob/main/README.md)已有真实API录制回放和一致性测试。独立机会必须先找现有覆盖以外的业务场景。
- **真机不等于物理输入齐全**：[Glasshand作者答复](https://www.producthunt.com/products/glasshand)确认相机图像/视频呈现仍在开发；不推断已有扫码测试自动化，也不推断整个平台不可用。
- **评测集选择偏差已被作者披露**：[Own-names模型卡](https://huggingface.co/virgil-coach/own-names-qwen3-asr)列v0.7.0日期为2026-10-20，说明有声书样本被用于选择候选、结果偏乐观，新版未重跑新的留出会话评测。[11-05 Show HN](https://news.ycombinator.com/item?id=50383785)因此只作为新的讨论入口；不采用其中准确率比较作独立优势证明。

## 5. 跨源主题


### 优惠码展示权限应与兑换资格分开核对

**证据标签：**重复商家主诉 + 官方机制 + 相邻操作供给。来源：Shopify App Store、Shopify Help Center、Product Hunt。

**观察：**两家商家描述优惠码被意外推广；官方已有渠道展示控制，但兑换范围另有规则。

推断：从促销前的配置核对服务切入；backlane说明商家操作自动化在增加，但并不直接支持或验证Meta优惠码场景。

来源：[主诉](https://apps.shopify.com/facebook/reviews)、[官方边界](https://help.shopify.com/en/manual/discounts/sales-channel-discounts)、[相邻供给](https://www.producthunt.com/products/backlane-2)。

### 跨渠道商品状态需要附带版本和时间

**证据标签：**多个应用的主诉 + 官方时序说明 + 相邻供给。来源：Shopify App Store、Shopify Help Center、Product Hunt、GitHub Trending。

**观察：**商家描述旧说明、售罄展示和价格库存差异；官方说明外部渠道各自同步且灰度变更可能只到店铺。

推断：一店一渠道的差异证据包优先于全平台连接器；无法读取的目标状态必须标未知。

来源：[Meta主诉](https://apps.shopify.com/facebook/reviews)、[Google主诉](https://apps.shopify.com/google/reviews)、[官方时序](https://help.shopify.com/en/manual/markets/rollouts/reach-and-external-channels)、[商家操作供给](https://www.producthunt.com/products/backlane-2)、[浏览器工具](https://github.com/vercel-labs/agent-browser)。

### 单次运行的成本回执比总余额更有解释力

**证据标签：**功能询问 + 代码库边界 + 目录供给。来源：Product Hunt、Show HN、GitHub项目原文、YC Company Directory。

**观察：**Clocknext用户问运行级成本；LLMBrake区分本地计数和预留结算；RouterPlus描述多模型、多供应商选择。

推断：先核对一次运行内的尝试、用量、供应商账单和客户收费；失败请求无回执时成本未知，不能填零或保证利润。

来源：[询问与回应](https://www.producthunt.com/products/clocknext)、[预算实现](https://github.com/llmbrake/llmbrake/blob/main/README.md)、[供应商路由供给](https://www.ycombinator.com/companies/industry/developer-tools)。

### API公告修复与运行契约检查是两项交付

**证据标签：**作者明确边界 + SDK已有测试 + 目录竞争。来源：Product Hunt、Show HN、YC Company Directory。

**观察：**Okapi承认不能预知未公告变更；calsdk已有录制回放和一致性测试；Plover强调确定性门禁。

推断：只补客户特有日历流程的缺失测试；不能把现有SDK描述成没有测试，也不能把生成PR当通过验收。

来源：[公告边界](https://www.producthunt.com/products/okapi-2)、[SDK现有测试](https://github.com/vkpdeveloper/calsdk/blob/main/README.md)、[目录供给](https://www.ycombinator.com/companies/industry/developer-tools)。

### 真机可远程操作仍缺物理输入验收

**证据标签：**具体功能询问 + 作者确认缺口 + 相邻桌面工具。来源：Product Hunt、GitHub Trending。

**观察：**Glasshand扫码用例暴露相机图像输入尚未支持；agent-desktop属于桌面操作工具。

推断：用客户现有设备做小规模二维码场景测试；桌面操作工具不是iPhone相机测试的替代证据。

来源：[用例与作者答复](https://www.producthunt.com/products/glasshand)、[相邻工具](https://github.com/vercel-labs/agent-desktop)。

### 专名正确率要连同误插入和留出样本验收

**证据标签：**作者用例 + 同作者模型卡反证 + 开源供给 + 投资命题。来源：Show HN、Hugging Face模型卡、GitHub Trending、YC RFS。

**观察：**Detail Keeper关注人名及自定义词；模型卡披露选择样本复用，语音开源工具热度与YC垂直模型命题同时存在。

推断：先做客户授权语料的专名回归评测；同作者HN帖和模型卡不是两份独立需求，热度不补足付款证据。

来源：[作者用例](https://news.ycombinator.com/item?id=50383785)、[选择偏差披露](https://huggingface.co/virgil-coach/own-names-qwen3-asr)、[语音供给](https://github.com/microsoft/VibeVoice)、[投资命题](https://www.ycombinator.com/rfs)。

### 审批记录、代码会话和执行结果仍需关联

**证据标签：**产品供给共振；独立买家证据不足。来源：Product Hunt、Show HN、GitHub Trending。

**观察：**Pushary记录谁批准；KeepPlain关联代码与会话；worktrunk隔离开发目录。

推断：这些能力回答不同问题；今天暂不把它包装成新的通用审批平台，需先找到无法关联的真实事件。

来源：[审批供给](https://www.producthunt.com/products/pushary)、[会话供给](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)、[目录隔离](https://github.com/max-sixty/worktrunk)。

## 6. 机会排序与两周验证

以下全部是小团队可先做服务或有限实验的假设；报价不是已成交价格，客户数量不是已有客户。跨源分看互补性，不按链接数量计分。

| 排名 | 机会 | 需求/30 | 买家/20 | 跨源/15 | 验证/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 01 | 促销前的优惠码展示权限核对 | 21 | 18 | 10 | 13 | 6 | 4 | 72 |
| 02 | 单一商品目录的版本与差异证据包 | 20 | 18 | 10 | 12 | 6 | 4 | 70 |
| 03 | 一次代理运行的成本回执核对 | 14 | 18 | 10 | 12 | 5 | 4 | 63 |
| 04 | 客户特有的日历API契约回归包 | 13 | 17 | 9 | 12 | 5 | 4 | 60 |
| 05 | 签到应用的二维码真机回归服务 | 13 | 17 | 8 | 12 | 5 | 3 | 58 |
| 06 | 英文专名转写的独立回归与校对包 | 12 | 16 | 8 | 12 | 5 | 3 | 56 |


### 01 促销前的优惠码展示权限核对 — 72分

把可推广优惠码、客户资格和实际兑换规则列成可签认清单，先服务一次促销交接。

**买家假设：**使用者为电商运营和投放人员；假设维护多店促销的小型Shopify代理商负责人批准并付款。

**窄MVP：**一店、一个Meta广告账户、10个客户指定优惠码；只读核对渠道展示设置、有效期、资格与客户提供的广告预览，由商家执行配置修改。

**支持证据：**两家商家的非预期推广主诉支持复访，但未获得后台配置、订单或损失凭证。 官方已经有展示权限设置；backlane是相邻商家操作供给，不能证明Meta场景需要另一个连接器。

来源：[具名主诉](https://apps.shopify.com/facebook/reviews)、[官方展示与兑换规则](https://help.shopify.com/en/manual/discounts/sales-channel-discounts)、[相邻操作供给](https://www.producthunt.com/products/backlane-2)。

**评分理由：**重复、具体主诉支持需求21；根因未复现和已有原生控制限制评分，分发来自明确的电商服务商人群。

**主要风险：**一次原生设置培训可能足够；关闭展示不等于限制兑换，无法承诺彻底防止外泄、补回损失或提高广告收益。

**两周实验（未执行）：**第1周访谈3家代理商并获取一份脱敏促销清单；第2周对10个测试优惠码做人工核对，拟200美元一次试单。记录配置差异、归因未知、检查分钟及下一次促销是否愿复购。

**停止条件：**一次设置说明即可消除问题，或客户拿不出预期推广范围与实际预览，就停止产品化。

**分发路径：**从公开Shopify促销实施与投放案例筛选前20家代理商；本次未外联。

**可积累资产：**客户签认的促销规则、配置变更和交接基线；不保存真实优惠码到公共报告。

### 02 单一商品目录的版本与差异证据包 — 70分

把店铺、目标目录和落地页的不同状态固定到同一SKU及采集时间，缩短支持工单定位。

**买家假设：**使用者为目录运营；假设同时维护Shopify与Meta目录的电商实施商项目负责人付款。

**窄MVP：**一店、一个Meta目录、20个SKU；使用客户授权导出和页面样本核对说明、价格、可用性及时间，输出差异、正常时延、无法判定三类证据，不自动重写库存。

**支持证据：**Meta旧说明与Google售罄展示主诉具有具体对象；Marketplace Connect较早反馈只能用于复访。 官方说明灰度范围和独立同步时序；backlane已有导入报告与库存查询，通用连接器并非空白市场。

来源：[旧说明主诉](https://apps.shopify.com/facebook/reviews)、[售罄主诉](https://apps.shopify.com/google/reviews)、[较早价格反馈](https://apps.shopify.com/marketplace-connect/reviews)、[官方时序与分流](https://help.shopify.com/en/manual/markets/rollouts/reach-and-external-channels)、[已有操作供给](https://www.producthunt.com/products/backlane-2)。

**评分理由：**多商家主诉提高需求分，但来源集中于商城且故障未复现；小范围导出可验收，平台原生诊断限制防御性。

**主要风险：**正常市场差异、实验分流和同步延迟会产生误报；目录API可能不暴露审核时使用的历史版本，不能保证恢复刊登。

**两周实验（未执行）：**第1周访谈3家服务商，选一张未解决工单；第2周对20个SKU在客户约定的两个时间点取样，拟250美元证据包。测量可定位差异、误报和支持往返次数；未观察到的状态不填一致。

**停止条件：**原生诊断已给出足够证据，差异全由正常同步解释，或客户无法合法提供目标目录数据，就停止。

**分发路径：**从公开商品feed迁移、目录恢复和跨渠道实施案例寻找前20位交付负责人。

**可积累资产：**经客户确认的SKU映射、版本时序与故障最小复现。

### 03 一次代理运行的成本回执核对 — 63分

把业务结果、调用尝试和供应商回执关联起来，先说明钱花在哪，再讨论预算控制。

**买家假设：**使用者为后端工程师与运营；假设按结果收费的小型AI SaaS技术负责人批准试点并付款。

**窄MVP：**一个供应商、一个工作流、100次客户授权脱敏运行；按run ID归集重试、可见usage、价格版本和客户收费，单列缺失回执与待账单确认项。

**支持证据：**Clocknext评论提出运行级追溯，厂商已回应能记录子代理信号，因此不是已证明的功能缺失。 LLMBrake已有计数和预留结算，但默认故障放行；RouterPlus说明模型/供应商选择的相邻供给，不能代替客户成本账。

来源：[具体询问及现有供给](https://www.producthunt.com/products/clocknext)、[实现与故障边界](https://github.com/llmbrake/llmbrake/blob/main/README.md)、[路由供给](https://www.ycombinator.com/companies/industry/developer-tools)、[状态验证工具](https://news.ycombinator.com/item?id=50385004)。

**评分理由：**需求仅为询问，给14；实现边界和清晰收费对象支持测试，不能因融资或工具热度提高需求分。

**主要风险：**客户可能已用现成账单工具解决；无usage或账单记录的失败尝试无法定价，预留估算和并发也使绝对硬上限承诺不可靠。

**两周实验（未执行）：**第1周访谈3个按结果收费的团队并获取脱敏事件样本；第2周拟300美元人工核对100次运行，另用合成数据覆盖缺失usage、重试和并发。报告已确认成本、估算与未知比例，不做真实扣费。

**停止条件：**已有导出即可准确关联，客户不愿提供run ID，或主要问题是没有使用频率而非成本核对，就停止。

**分发路径：**从公开按次、按结果收费的垂直AI产品寻找前20位创始人或工程负责人。

**可积累资产：**客户认可的结果定义、重试映射和可重放异常案例；不复制全套计费平台。

### 04 客户特有的日历API契约回归包 — 60分

在已有SDK测试之上，只补一个客户真实预约流程的可验收契约。

**买家假设：**使用者为集成工程师；假设维护预约SaaS或客户排期应用的软件服务商技术负责人付款。

**窄MVP：**Google Calendar与Outlook之间一个重复会议流程；用隔离测试日历覆盖单次例外、时区变化、删除和过期同步游标，交付8个客户签认样例。

**支持证据：**Okapi作者明确无法预知未公告变化，且修复PR不运行代码；这只证明能力边界，不证明所有客户遭遇事故。 calsdk已提供录制回放和一致性测试，Plover也在做确定性门禁；需要先找现成测试未覆盖的业务语义。

来源：[公告驱动的边界](https://www.producthunt.com/products/okapi-2)、[SDK与现有测试](https://github.com/vkpdeveloper/calsdk/blob/main/README.md)、[门禁供给](https://www.ycombinator.com/companies/industry/developer-tools)。

**评分理由：**需求证据主要是开发者询问和实现边界，给13；原生测试构成明显反证，范围严格收窄。

**主要风险：**SDK和现有CI可能足够；测试账号配置与生产不同，发现差异不能自动归因于供应商变更，令牌权限也可能造成假故障。

**两周实验（未执行）：**第1周访谈3家集成团队，先检查现有测试；仅找到独有缺口后提出200美元试单。第2周在测试日历执行8个样例，记录期望/实际/未知、误报和修复工时。

**停止条件：**找不到SDK测试之外的客户特有语义，或客户只需要一次升级支持，就不开发独立产品。

**分发路径：**从公开日历集成、预约系统及排班软件案例寻找前20位维护负责人。

**可积累资产：**客户批准的时间与重复事件语义、脱敏回放和版本差异。

### 05 签到应用的二维码真机回归服务 — 58分

验证相机实际输入到签到结果的链路，先使用客户已有设备完成小样本交付。

**买家假设：**使用者为移动端开发者和QA；假设维护活动签到或门店核销应用的小型软件团队负责人付款。

**窄MVP：**一个客户应用、一部客户授权iPhone、20个合成二维码场景；固定距离和光照档位，核对权限拒绝、重复扫码与预期结果，保留录像及失败样例。

**支持证据：**Glasshand评论者明确提到签到扫码用例，作者确认机架相机呈现能力尚未支持。 agent-desktop提供相邻桌面控制供给；它不解决手机相机输入，不能据此把整个测试链路称为自动化完成。

来源：[用例和作者承认的边界](https://www.producthunt.com/products/glasshand)、[相邻桌面工具](https://github.com/vercel-labs/agent-desktop)。

**评分理由：**具体但单一询问给需求13；可由小团队人工交付，硬件一致性与平台补齐风险压低防御分。

**主要风险：**只有一个用例询问，没有重复采购证据；硬件摆位难复现，平台可能很快补齐，扩大为自营设备农场将变成资本密集业务。

**两周实验（未执行）：**第1周访谈3家签到/核销应用团队，确认近期相机回归和可验收真值；第2周拟200美元执行20例，不接真实门禁或真实消费核销。记录漏扫、误识别、重复处理和复测分钟。

**停止条件：**客户现有人工检查已足够，无法提供测试应用，或设备租赁平台已经覆盖全部用例，就停止。

**分发路径：**从公开活动签到、票务核销和门店应用案例寻找前20家开发商。

**可积累资产：**客户授权的相机失败样例、环境记录和回归夹具；先服务，不购置设备集群。

### 06 英文专名转写的独立回归与校对包 — 56分

为固定节目或有声内容验证专名拼写，同时测量错误替换普通词和不存在名称的代价。

**买家假设：**使用者为转写校对人员；假设制作英文播客或有声内容的小型工作室负责人批准并付款。

**窄MVP：**一个英文节目、20个授权专名和100段新采集且未用于选模型的音频；对比原转写、词表方案与候选方案，并保留无专名的负样本。

**支持证据：**Detail Keeper作者描述陌生人名和不同拼写的用例，但不是独立付费客户。 模型卡披露有声书评估被用于选版本且新版缺少新留出会话结果；VibeVoice等是供给，YC垂直模型命题只是投资观点。

来源：[作者用例](https://news.ycombinator.com/item?id=50383785)、[模型卡的评估限制](https://huggingface.co/virgil-coach/own-names-qwen3-asr)、[开源语音供给](https://github.com/microsoft/VibeVoice)、[投资命题](https://www.ycombinator.com/rfs)。

**评分理由：**只有作者用例，需求12；数据验收容易限定，尚无工作室付费证据，供应热度不抬分。

**主要风险：**客户现有词表加人工校对可能更便宜；只提高专名命中可能增加误插入，结果不能外推到中文、医疗或其他高风险场景。

**两周实验（未执行）：**第1周访谈3家工作室，先让编辑签认词表和音频使用权；第2周拟150美元评测100段新音频，由盲审记录专名正确、未教名称被替换、无名称误插入及每段校对分钟。

**停止条件：**现有词表方案已足够，校对工时无改善，或无法取得未参与调参的授权样本，就停止。

**分发路径：**从公开英文播客后期、有声书和游戏叙事制作案例寻找前20家工作室。

**可积累资产：**授权领域词表、独立留出样本与编辑判定标准；不先训练基础模型。

## 7. 拒绝、拥挤与资本密集方向

- **再造通用审批与代理记忆平台**：[Pushary](https://www.producthunt.com/products/pushary)、[KeepPlain](https://github.com/keepplain/keepplain-plugin/blob/master/README.md)以及[claude-mem](https://github.com/thedotmack/claude-mem)已覆盖相邻能力。审批记录、会话和实际执行结果不是同一件事，但本期没有足够独立买家证据证明值得另造平台。
- **全平台商品连接器**：[backlane](https://www.producthunt.com/products/backlane-2)与[Marketplace Connect](https://apps.shopify.com/marketplace-connect/reviews)已有供给。前者列出的未来连接器不能算现有能力，后者的较早投诉也不证明整个产品不可用。仅保留一个渠道的取证交付。
- **通用计费平台或“保证每次调用盈利”**：[Clocknext](https://www.producthunt.com/products/clocknext)与[LLMBrake](https://github.com/llmbrake/llmbrake/blob/main/README.md)已有计费、成本或预算能力。利润保证没有独立证明；今天只研究回执关联与未知成本，不先接管真实扣费。
- **自动PR等于API故障已修复**：[Okapi](https://www.producthunt.com/products/okapi-2)和[YC中的Plover](https://www.ycombinator.com/companies/industry/developer-tools)显示公告修复与门禁供给。机会04先检查[calsdk原有测试](https://github.com/vkpdeveloper/calsdk/blob/main/README.md)，没有客户特有缺口就停止。
- **新的通用语音转写器**：[VibeVoice](https://github.com/microsoft/VibeVoice)、[VoiceStudio](https://github.com/debpalash/VoiceStudio)和[Detail Keeper模型卡](https://huggingface.co/virgil-coach/own-names-qwen3-asr)说明供给丰富。先验证英文专名的校对工时，不推断多语言通用优势。
- **自建手机设备农场、建筑机器人整机、视频或垂直基础模型训练**：[Glasshand](https://www.producthunt.com/products/glasshand)、[建筑机器人融资](https://news.crunchbase.com/venture/sector-snapshot-2026-construction-robotics-funding-soars-bedrock/)、[Sand.ai快讯列表](https://pitchhub.36kr.com/financing-flash)与[YC RFS](https://www.ycombinator.com/rfs)涉及硬件、运维或模型投入，**属于资本密集方向**。小团队优先利用客户现有设备和授权样本；没有资本、数据权利及交付能力就不进入。
- **依赖绕过平台访问控制的数据服务**：本次IT桔子412和其他访问失败均保留为限制；不会以绕过验证、登录或限流作为候选商业模式。

## 8. 下一轮实验安排

本次未发送外部消息、未联系评论者、未收款、未运行客户系统。以下为拟议顺序：

1. 先做机会01和02的人工样例：向潜在买家索取其自主导出的配置、目录数据和可验收预期。优先用官方现有功能解决；只有重复发生、仍耗时且愿付费时才开发工具。
2. 成本方向先定义业务结果、run ID和尝试记录，再匹配供应商回执；确认金额、估算、未知分列。缺回执不是免费调用，重试次数也不是成功结果数。
3. 日历方向先找现有SDK测试遗漏；真机方向用合成二维码与客户测试设备。两者都先排除现成工具已经解决的可能。
4. 专名方向先签认数据使用权和词表，再固定未用于选模型的新样本；同时统计正确、误替换、误插入与人工校对分钟。
5. 两周后按是否付款、人工时间改善、可重复性和复购意愿重排。实验未执行的指标保持“未执行”，无法观察的值保持“未知”，不以0代填。

## 9. 访问记录与研究限制

GitHub Trending网页工具报告restricted URL；Algolia网页工具不可读。普通沙箱HTTP首先遇到DNS解析不可用，随后执行环境允许联网，以普通匿名HTTPS读取GitHub三窗和公开Algolia API，均返回200。没有处理验证码、登录、签名或代理轮换，也没有绕过站点限流或robots控制。仓库README使用GitHub连接器读取，没有执行原文中的安装命令。

IT桔子首页返回HTTP 412后停止，改用可读36氪列表与Crunchbase News。36氪两篇快讯详情只有无可用正文的短页；Sand.ai链接到证券时报的原文超时。本期融资金额仅归于媒体报道，不补造交割日、用途、币种或经营数据。

YC根目录和Plover Labs、RouterPlus单页无可读正文，改用官方开发工具分类目录；分类页的月份标签不等于每家公司刚更新。RFS仍为既有Winter 2027版本。Detail Keeper、Bisimia官网和Opposable研究页工具不可读；前两者使用HN作者正文及可读模型卡，Opposable未纳入精选。Shopify Google带newest参数的链接和Flow评论链接不可读；改读可读Google默认页，并明确旧评论日期。

样本偏向电商、代理基础设施与开发工具，不是全球普查。PH询问、作者经验和公司目录宣传没有独立客户验证；商城投诉可能已修复、配置有误或归因不准确。无后台日志、付款凭证、融资到账凭证、产品留存或独立性能测试。评级受页面缓存影响，不能据与历史的差值计算实时新增评价。

只修改当前JSON、2026-11-06日报与README报告索引；不更改应用、依赖、脚本、部署或历史报告。结构校验验证日期、字段、数量和排序，不能证明商业需求或客户实验成立。

## 10. 本地校验

指定命令 `RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs` 已通过：6个机会、7个主题、33条数据。

另核对六维权重上限及加总、HN固定七日窗口、GitHub窗口指标与采集记录、JSON与报告对应、README历史完整保留，以及仅三个允许路径发生变更；`git diff --check` 通过。上述结果仅为本地数据与文档验证；未提交、推送、部署或启动服务，也未执行客户实验。
