# Startup Radar 创业机会日报｜2026-11-08

> UTC证据整理快照：2026-11-08T01:19:09Z。Show HN指标：01:17:07Z；GitHub三窗：01:17:08Z。
> 6款当前发布、5个七日内技术项目、10个Trending仓库、6条市场信号、8条或组反馈；7个跨源主题、6个待验证机会。

## 1. 方法与本期判断

研究前读取[研究方法](startup_radar_method_zh.md)、当前结构化数据和最近的[11-06报告](startup_radar_2026-11-06_zh.md)。仓库没有11-07报告，变化基线因此是11-06，不补写缺失历史。

采用100分规则：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数仅用于安排研究顺序，不是成功率、市场规模或投资回报。买家、报价、样本数量及验收目标都是本报告提出的实验设计，尚未访谈、外联、收费或运行客户系统。

优先验证**订阅续费运费核对（71）**与**订阅商品跨入口回归（70）**；前者的数据权限是第一道可行性检查，后者先确认是否只是一次主题修复。知识来源与邮件迁移紧随其后；网页监测与PR批准评估的需求证据更弱，不能因工具热度抬高排名。

证据标签区分平台观察、具名商家主诉、功能询问、作者个人经验、厂商自述、官方机制和本报告推断。同作者的HN帖与README不算独立客户；多个供给来源也不是多个付费买家。Stars、票数、融资、评论数量和整体评分都不证明需求、留存或收入。

## 2. 相比11-06的实质变化

- **发布6/6换选**：Exa Monitors v2、LiveReview、Sendoff、Trace、Capnot与Rex取代上期精选。Exa官方公告为10-29，本次PH展示属于当前推广批次，不能改写成11-08首次发布。[官方日期](https://exa.ai/blog/monitors-v2)、[当前批次](https://www.producthunt.com/)。
- **技术5/5换选**：重选11-07的Sentient、Sibyl、Jacq、Digdeep及Coldframe。发布帖、实现文档与测试边界分开，特别保留Sentient内核采集叙述的差异，见4.2。
- **GitHub 6个新选、4个刷新保留**：保留agent-browser、security-audit-skill、pr-agent与hyperframes；新增运行监测、本地设备、GPU管理、静态检查、规格和设计审查。三窗重取，不用上期数字补空缺。
- **市场5项换选，RFS重选命题**：全球来源改用11-06美国融资周报，中国改选陀普科技及阿法纳生物；YC目录改选Armorer Labs与Composal。RFS仍为Winter 2027，未发现新版本，见4.4。
- **反馈8条或组均重新选取**：从促销、目录和成本询问转到订阅、知识资料、邮件迁移与风险评估；商城有11-04/05新反馈，也有10月较早主诉。保留Abysm Internal的正面更新，不能只摘取不满部分。
- **6项机会重新定义与排序**：全部为有限服务或影子评估。上期未入选方向并未被证明消失或解决；本期没有复核它们的客户状态。

以上比较仅针对仓库精选集，不代表全平台新增、退出或总体趋势。

## 3. 来源覆盖与采样口径

| 来源 | 本期覆盖 | 口径与限制 |
| --- | --- | --- |
| [Product Hunt](https://www.producthunt.com/) | 6款当前发布 / 6个产品页 | 首页当前批次与产品页交叉核对；全部不同于11-06精选。Exa官方公告为10-29，PH展示不等于今日首发；未采动态票数。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) | 1,023匹配 / 返回100 / 检视55 / 精选5 | 固定七日窗口11-01T01:17:07Z至11-08T01:17:07Z；目的性采样，未穷尽七日全部帖子或评论。 |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 15 / weekly 19 / monthly 10 | 三窗均Language Any / Spoken Language Any；44条窗口记录、35个去重仓库，精选10个。增量不跨窗相加。 |
| [YC Company Directory / RFS](https://www.ycombinator.com/companies/industry/developer-tools) | 2家公司新选 / Winter 2027复核 | 官方开发工具分类目录可读；公司单页无可读正文。最新RFS版本未变，本期重选实体建设融资主题。 |
| [Crunchbase News](https://news.crunchbase.com/venture/biggest-startup-rounds-ai-defense-space-tech-shield-zipline/) | 11-06美国大额融资周报 | 公共报道覆盖10-31至11-06公告，精选Sentra；仅覆盖美国公司，不能外推为完整全球融资走势。 |
| [36氪](https://pitchhub.36kr.com/financing-flash) | 2项中国新选融资 | 11-06陀普科技与阿法纳生物快讯可读；详情为安全检测页，停止访问。A轮总规模与首关到账分开表述。 |
| [IT桔子](https://www.itjuzi.com/) | HTTP 412 / 未读取 | 首页412后停止，改用可读36氪列表与Crunchbase News；访问失败不代表没有融资。 |
| [Shopify App Store / PH评论](https://apps.shopify.com/shopify-subscriptions/reviews) | 4款商城评级 / 8条或组反馈 | 6条商城反馈与2组PH讨论；日期10-16至11-05，含正面更新与功能请求，并非全为低分投诉。默认页非七日差评普查。 |
| [官方文档 / 项目README](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract) | 机制与实现边界复核 | 核对合同应用权限、主题selling plan、自动退信抑制、知识来源、监测去重与Sentient文档差异；未运行任何产品。 |

**GitHub：**[daily](https://github.com/trending?since=daily)、[weekly](https://github.com/trending?since=weekly)、[monthly](https://github.com/trending?since=monthly)均以Language Any / Spoken Language Any读取，实际取得15、19、10行，共44条窗口记录、35个去重仓库。精选10库；只记录窗口star增量，不把它与总stars混用，也不跨窗相加。页面采集时间不是GitHub内部榜单刷新时间。

**HN：**[固定七日Algolia查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100)覆盖2026-11-01T01:17:07Z至2026-11-08T01:17:07Z。API返回匹配数1,023，本次只取最新100条，检视其中55条标题、链接及可用作者正文后精选5条；不是七日普查，未完整阅读评论串。points/comments仅为01:17:07Z快照；未返回或未读的内容不记作零。

**PH：**首页和6个产品页均核对。平台“Launching today”、UTC日期、作者预热帖及官方公告可能不同；例如Exa展示的日榜日期为11-07，官方公告更早。只认定其属于当前PH发布批次，不赋予所有产品相同首发日期。未采动态票数，未把AI生成的评论摘要当用户证言。[首页](https://www.producthunt.com/)、[Exa产品页](https://www.producthunt.com/products/exa-ai)。

**商城：**精选Subscriptions、Bundles、Messaging和Inbox四款的整体评级与具名反馈，评论日期10-16至11-05。默认排序混有旧评，单条星级未被解析时不猜测；整体评级不是每条投诉的评分。Subscriptions工具标注昨日缓存，其余精选页面当日可读。Messaging两次读取返回4,814与4,816评，本期采用后一次4,816；不由差值推断真实新增用户。[Messaging](https://apps.shopify.com/shopify-messaging/reviews)。

**时间：**除HN、GitHub各有采样时间外，JSON的snapshotAt使用01:19:09Z证据整理时点；不是保证所有页面在同一秒刷新。市场公告、评论编辑日期及产品阶段另列。

## 4. 来源快照明细

### 4.1 当前产品发布

| 项目 / 来源 | 日期或指标 | 观察与边界 |
| --- | --- | --- |
| [Exa Monitors v2](https://www.producthunt.com/products/exa-ai) / Product Hunt / Exa官方博客 | 本次PH当前批次；官方博客日期2026-10-29 | 按计划搜索并向webhook发送新增信息；官方已有去重、来源与时间筛选。今天是PH展示快照，不是首次发布日；相关性改善为厂商自测。 **当前发布批次 + 厂商原文；未实测。** [当前批次](https://www.producthunt.com/)、[官方发布](https://exa.ai/blog/monitors-v2)、[接口与调度边界](https://exa.ai/docs/monitors/quickstart) |
| [LiveReview](https://www.producthunt.com/products/livereview) / Product Hunt | 当前批次；不记录动态票数 | 提供风险评分与自动批准；作者明确无生产反馈时ML学习部分不参与评分。引用其他系统的事故改善不能视为本产品已取得同样效果。 **当前发布批次 + 作者答复；无独立效果验证。** [当前批次](https://www.producthunt.com/) |
| [Sendoff](https://www.producthunt.com/products/sendoff-2) / Product Hunt / 厂商官网 | 当前批次；不记录动态票数 | 自有Cloudflare与AWS账户、Amazon SES发送；官网已有发送前检查、退订及退信/投诉处理。客户原平台的历史抑制记录能否完整迁入仍需逐项核对。 **当前发布批次 + 厂商自述；不是新增功能空白。** [当前批次](https://www.producthunt.com/)、[现有能力](https://sendoff.dev/?ref=producthunt) |
| [Trace by Context.dev](https://www.producthunt.com/products/context-dev) / Product Hunt | 当前批次；厂商称每周五更新样本 | 公开页面级结果，比较访问、延迟、质量、成本和失败原因；发布者自己的API也参评，属于厂商主导评测，不能当独立采购结论。 **当前发布批次 + 厂商方法自述。** [当前批次](https://www.producthunt.com/) |
| [Capnot](https://www.producthunt.com/products/capnot) / Product Hunt | 当前批次；不记录动态票数 | 面向Mac屏幕演示的字幕、指针、绘图和遮挡工具；这些是页面功能说明，未验证字幕准确率或敏感信息遮挡完整性。 **当前发布批次 + 产品页面；未实测。** [当前批次](https://www.producthunt.com/) |
| [Rex (Beta)](https://www.producthunt.com/products/superlogical) / Product Hunt | 当前批次；明确标Beta | 页面描述原生与网页访问、多人终端复用；仅作为工作会话协作供给，不推断权限隔离、审计或生产稳定性。 **当前发布批次 + 厂商自述；测试阶段。** [当前批次](https://www.producthunt.com/) |

### 4.2 七日内技术社区

| 项目 / 来源 | 日期或指标 | 观察与边界 |
| --- | --- | --- |
| [Sentient](https://news.ycombinator.com/item?id=50409020) / Show HN / Algolia | 2026-11-07T23:26:26Z；1 points / 0 comments；指标快照2026-11-08T01:17:07Z | 作者描述本地只读监控；但README安装段仍把Tetragon内核采集写为placeholder。发布叙述与文档边界不一致，本期不认定内核追踪或拦截已验证。 **七日内原帖 + 作者/项目原文；未运行验证。** [项目原文](https://github.com/nosaka4i/sentient/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) |
| [Sibyl](https://news.ycombinator.com/item?id=50409129) / Show HN / Algolia | 2026-11-07T23:44:33Z；1 points / 0 comments；指标快照2026-11-08T01:17:07Z | README明确pre-alpha：AMD有硬件测试，NVIDIA与Intel仅构建、未硬件测试；HN称暂无商业模式，README又列商业许可，商业化状态仍需确认。 **七日内原帖 + 作者/项目原文；未运行验证。** [项目原文](https://github.com/diffsec/sibyl/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) |
| [Jacq](https://news.ycombinator.com/item?id=50406532) / Show HN / Algolia | 2026-11-07T17:58:49Z；3 points / 1 comments；指标快照2026-11-08T01:17:07Z | 把模型或内核描述生成CUDA；生成代码可不依赖GPU，实际推理另需硬件及权重。README列有限验证样例，不能外推为全模型兼容。 **七日内原帖 + 作者/项目原文；未运行验证。** [项目原文](https://github.com/ImpossibleComputing/jacq/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) |
| [Digdeep.fyi](https://news.ycombinator.com/item?id=50406439) / Show HN / Algolia | 2026-11-07T17:45:37Z；2 points / 0 comments；指标快照2026-11-08T01:17:07Z | 作者称使用DoH在客户端检查DNSSEC及邮件相关记录；官网工具不可读，未验证功能覆盖。DNS配置正确本身不证明订阅同意或投递成功。 **七日内原帖 + 作者/项目原文；未运行验证。** [项目原文](https://news.ycombinator.com/item?id=50406439)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) |
| [Coldframe](https://news.ycombinator.com/item?id=50406292) / Show HN / Algolia | 2026-11-07T17:27:30Z；191 points / 39 comments；指标快照2026-11-08T01:17:07Z | 模拟冷柜控制器并记录交互；HN作者称当时只看到通用扫描器与Shodan爬虫。诱捕器没有真实冷柜，不能把这些记录算成客户设备受攻击或损失。 **七日内原帖 + 作者/项目原文；未运行验证。** [项目原文](https://github.com/hedgerow-dev/coldframe/blob/main/README.md)、[固定七日查询](https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&numericFilters=created_at_i%3E%3D1793495827%2Ccreated_at_i%3C%3D1794100627&hitsPerPage=100) |

### 4.3 GitHub Trending三窗

| 项目 / 来源 | 日期或指标 | 观察与边界 |
| --- | --- | --- |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) / GitHub Trending · Language Any / Spoken Language Any | daily +190 stars / weekly +1,476 stars | 榜单描述浏览器自动化CLI；可作为客户授权测试的工具线索，不证明业务规则或页面状态正确。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily)、[weekly榜](https://github.com/trending?since=weekly) |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) / GitHub Trending · Language Any / Spoken Language Any | daily +2,085 stars / monthly +39,571 stars | 榜单描述多阶段安全审计与机器可读发现；安全审查产物不等于运行行为被完整捕获。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily)、[monthly榜](https://github.com/trending?since=monthly) |
| [prometheus/prometheus](https://github.com/prometheus/prometheus) / GitHub Trending · Language Any / Spoken Language Any | daily +322 stars | 榜单列监控系统与时序数据库；成熟观测工具构成现有供给，部署本身不证明告警有效。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [mbillow/localthings](https://github.com/mbillow/localthings) / GitHub Trending · Language Any / Spoken Language Any | daily +186 stars | 榜单描述经本地网络连接Samsung家电与Home Assistant；家电适配不能外推到工业冷柜安全。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) / GitHub Trending · Language Any / Spoken Language Any | daily +123 stars | 榜单描述裸机GPU Kubernetes管理平面；这是工程供给，不是小团队购买GPU集群的理由。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [astral-sh/ruff](https://github.com/astral-sh/ruff) / GitHub Trending · Language Any / Spoken Language Any | daily +350 stars | 榜单定位Python linter及formatter；静态规则与客户业务验收属于不同层面。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [daily榜](https://github.com/trending?since=daily) |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) / GitHub Trending · Language Any / Spoken Language Any | weekly +1,576 stars | 榜单定位开源PR审查器；与LiveReview形成供给对照，不能由stars证明自动批准安全。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [weekly榜](https://github.com/trending?since=weekly) |
| [github/spec-kit](https://github.com/github/spec-kit) / GitHub Trending · Language Any / Spoken Language Any | weekly +4,280 stars | 榜单描述规格驱动开发工具包；可辅助固定验收预期，不代表项目已经满足规格。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [weekly榜](https://github.com/trending?since=weekly) |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) / GitHub Trending · Language Any / Spoken Language Any | weekly +7,623 stars / monthly +27,680 stars | 榜单描述代理界面设计与审查工具；视觉改进不能替代购买路径状态测试。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [weekly榜](https://github.com/trending?since=weekly)、[monthly榜](https://github.com/trending?since=monthly) |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) / GitHub Trending · Language Any / Spoken Language Any | monthly +22,531 stars | 榜单描述由HTML渲染视频；与Capnot形成演示制作的相邻供给，未证明新的付费缺口。 **榜单窗口增量；关注信号，不等于需求、收入或持续采用。** [monthly榜](https://github.com/trending?since=monthly) |

### 4.4 投资与市场

| 项目 / 来源 | 日期或指标 | 观察与边界 |
| --- | --- | --- |
| [Sentra：数据安全战略投资](https://news.crunchbase.com/venture/biggest-startup-rounds-ai-defense-space-tech-shield-zipline/) / Crunchbase News | 报道2026-11-06；1.5亿美元战略投资 | 公开周报称Capital One Ventures领投；该周报覆盖10-31至11-06美国公司公告。说明企业数据安全有资本供给，不代表小团队客户预算。 **数据提供方公开报道；未核验资金到账。**  |
| [陀普科技：富锂锰电池A轮](https://pitchhub.36kr.com/financing-flash) / 36氪公开融资快报 | 2026-11-06快讯；数千万元，列表未明确币种 | 快讯称资金用于淮北生产基地扩建；投产时间是计划，不能写成产能已兑现。电池工厂为资本密集方向。 **可读媒体列表；详情触发安全检测后停止。** [详情入口（安全检测）](https://36kr.com/newsflashes/4057593166271360) |
| [阿法纳生物：A轮首关](https://pitchhub.36kr.com/financing-flash) / 36氪公开融资快报 | 2026-11-06快讯；A轮总规模5000万美元，完成首关 | 快讯称推进in vivo CAR-T、肿瘤疫苗及相关平台。首关实际到账金额未列，不能把总规模写成已全部到账；临床研发属资本密集方向。 **媒体列表中的融资首关；非全轮交割核验。** [详情入口（安全检测）](https://36kr.com/newsflashes/4057569522815873) |
| [Armorer Labs：代理持续安全验证](https://www.ycombinator.com/companies/industry/developer-tools) / YC Company Directory | 2026-11-08目录复核；F2026 / Active | 目录自述评估、攻击模拟、待批准修复以及运行时动作控制；未采用其准确率或速度宣传作独立效果证据。通用代理安全已有直接竞争。 **当前目录公司自述；不是当日融资或独立客户证言。** [公司入口（正文不可读）](https://www.ycombinator.com/companies/armorer-labs) |
| [Composal：功能流程测试](https://www.ycombinator.com/companies/industry/developer-tools) / YC Company Directory | 2026-11-08目录复核；F2026 / Active | 目录描述让代理像用户一样检查真实流程与边界；没有客户特有规则和付费验证时，不应再造通用测试代理。 **当前目录公司自述；无独立留存或收入核验。** [公司入口（正文不可读）](https://www.ycombinator.com/companies/composal) |
| [YC Winter 2027：实体AI建设的融资工具](https://www.ycombinator.com/rfs) / YC Requests for Startups | 2026-11-08复核；最新页签仍为Winter 2027 | Wall Street for the Physical Buildout关注机器人、GPU和数据中心的融资与租赁。属于投资者命题；自营放贷、持有设备或承担容量风险不适合当作轻资产MVP。 **既有版本今日重选主题；投资观点不是采购承诺。**  |

### 4.5 客户反馈与具体缺口

| 项目 / 来源 | 日期或指标 | 观察与边界 |
| --- | --- | --- |
| [Totem Eco：订阅降量后仍沿用免运费](https://apps.shopify.com/shopify-subscriptions/reviews) / Shopify App Store | 评论2026-11-04；Subscriptions整体3.8分 / 895评 | 商家称订单降到免运门槛以下后，续费合同仍保留免运费，发现时已扣款。损失、配置和支持答复均未独立核验。 **近期具名主诉；单店根因未复现。** [合同计算与应用权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[首单与续期机制](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations) |
| [Creativity for Hope：推荐模块缺少购买计划](https://apps.shopify.com/shopify-subscriptions/reviews) / Shopify App Store | 评论2026-11-05；Subscriptions整体3.8分 / 895评 | 商家称Archer Commerce主题的Featured Product模块报selling plan错误，同一商品详情页正常；可能涉及主题集成，不能归因于整个订阅平台。 **近期具名Bug报告；未运行复现。** [主题集成规范](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme) |
| [STORE STARTRC：套装数量与免运条件不一致](https://apps.shopify.com/shopify-bundles/reviews) / Shopify App Store | 评论2026-10-16；Bundles整体2.9分 / 571评 | 商家称含多个组件的套装在数量免运条件中只计一件，但运费和履约按组件处理。支持称按设计运行是商家转述；不认定为已确认缺陷。 **较早具名主诉；当前状态待复访。**  |
| [Harry's Army Surplus：迁移时看不到退信抑制明细](https://apps.shopify.com/shopify-messaging/reviews) / Shopify App Store | 评论2026-10-21；Messaging整体4.8分 / 4,816评 | 商家担心迁移平台时不知道哪些地址应排除。官方已有自动抑制；待验证缺口是历史状态的可携带性，不是平台没有退信保护。 **具名迁移担忧 + 官方反证；未核对可导出字段。** [自动抑制机制](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/subscriber-list-management)、[迁移与历史数据](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/volume-consistency) |
| [Signastyle Home：错误商品回答后关闭AI](https://apps.shopify.com/inbox/reviews) / Shopify App Store | 编辑于2026-10-28；Inbox整体4.5分 / 5,820评 | 商家称错误商品回答造成订单问题，关闭AI但继续用普通消息功能。未取得对话、来源或损失记录；不能代表全体商家表现。 **具名商家主诉；损失与责任未核实。** [官方信息来源与反馈边界](https://help.shopify.com/en/manual/inbox/conversations) |
| [Abysm Internal：知识库仍需手工维护与备份](https://apps.shopify.com/inbox/reviews) / Shopify App Store | 编辑于2026-11-05；Inbox整体4.5分 / 5,820评 | 更新评价肯定产品修复，同时希望主题内容录入更省力并支持CSV导入导出。保留正面反证；仅将其作为具体工作流请求。 **近期更新的正面评价中的功能请求。** [官方现有知识来源](https://help.shopify.com/en/manual/inbox) |
| [Exa评论：监测噪声与变化定位](https://www.producthunt.com/products/exa-ai) / Product Hunt · Exa评论 | 本次页面JC显示7h ago；Agshin显示16h ago | JC称过往监测很快变吵；Agshin询问能否显示页面具体变化。不是Exa故障报告；Exa已有去重，尚未证明仍需要独立产品。 **既往使用经验 + 功能询问；无付款证据。** [现有去重能力](https://exa.ai/blog/monitors-v2)、[运行状态与调度](https://exa.ai/docs/monitors/quickstart) |
| [LiveReview评论：自动批准的冷启动依据](https://www.producthunt.com/products/livereview) / Product Hunt · LiveReview评论 | 本次页面相关询问显示11h / 14h ago | Mohsin与Bruno追问无事故历史时的评分依据；作者回应没有反馈数据时ML不参与，但仍有图、语义和复杂度等信号。不能写成系统随机批准或没有冷启动方案。 **具体询问 + 作者回应；未发现独立事故证据。**  |

## 5. 会改变创业判断的反证

1. **运费计算能力已经存在，但权限有限。** [官方合同指南](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)提供计算与提交流程，要求应用自己的合同权限；发现配送选项的计算不能直接提交。由此不能推断新应用能读写Shopify原生合同。机会01先用客户合法提供的资料，既有合同优惠与当前商店运费规则也不能混为一谈。
2. **主题集成规范已经存在。** [官方selling plan指南](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)覆盖产品表单、变体和购买选项；机会02验收客户特有入口，不再造通用主题系统。商家的错误归因尚未复现。
3. **邮箱抑制与发信前检查不是空白。** [Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/subscriber-list-management)已有自动抑制，[Sendoff](https://sendoff.dev/?ref=producthunt)已有退信、投诉和发送前检查；值得先验证的是客户能否带走历史状态。[迁移指引](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/volume-consistency)也强调旧平台导出能力的限制。无法取得的数据继续标未知。
4. **现有客服有知识来源与反馈机制。** [Inbox来源说明](https://help.shopify.com/en/manual/inbox)与[会话管理](https://help.shopify.com/en/manual/inbox/conversations)已给出管理路径；编辑或评价回答不会直接改源信息。机会03先用现有机制纠正资料，不把CSV请求扩大成“没有知识库”。
5. **网页监测已有去重及运行状态。** [Exa文档](https://exa.ai/docs/monitors/quickstart)列出failed/cancelled等状态和调度延迟，不能把无通知一律当成没有变化。只补客户所需证据；[Trace](https://www.producthunt.com/products/context-dev)由参评厂商发布，不能称为独立排行榜。
6. **安全产品的文档与宣称需要分开。** [Sentient作者帖](https://news.ycombinator.com/item?id=50409020)谈内核追踪，而[README](https://github.com/nosaka4i/sentient/blob/main/README.md)仍留placeholder，本期无法判定完整实现状态。[LiveReview答复](https://www.producthunt.com/products/livereview)已有冷启动解释，不能宣传其“没有风险判断”，也不能把所引其他系统效果移植为它的效果。
7. **设备支持和研究热度不等于现场验证。** [Sibyl](https://github.com/diffsec/sibyl/blob/main/README.md)列有未硬件测试的构建；[Jacq](https://github.com/ImpossibleComputing/jacq/blob/main/README.md)区分生成代码与实际推理；[Coldframe作者帖](https://news.ycombinator.com/item?id=50406292)描述的是诱捕环境，不是客户真实设备损失。

## 6. 跨源主题

### 续费运费应按合同状态与规则分别取证

**证据标签：**近期单店主诉 + 官方机制 + 相邻技术供给。来源：Shopify App Store、Shopify开发者文档、GitHub Trending。

观察：Totem Eco报告续费运费问题；官方已有合同计算流程，且访问限于应用自己的合同。

推断：先做客户提供资料的异常核对，勿承诺任意第三方应用可自动重算Shopify原生合同。

来源：[主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[机制与权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[授权测试工具](https://github.com/vercel-labs/agent-browser)。

### 购买路径的业务语义要独立于代码风险评分

**证据标签：**主题Bug主诉 + 官方集成规范 + 测试供给。来源：Shopify App Store、Shopify开发者文档、YC Company Directory、Product Hunt。

观察：同一商品在详情页与推荐模块表现不同；Composal定位真实流程测试，LiveReview则提供PR风险评分。

推断：只售一个主题、一类订阅的跨入口验收；代码审查通过不能代替购物车计划状态正确。

来源：[主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[规范](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[流程测试供给](https://www.ycombinator.com/companies/industry/developer-tools)、[代码审查供给](https://www.producthunt.com/products/livereview)。

### 知识库维护与回答验收可以围绕现有客服代理交付

**证据标签：**具名主诉 + 正面更新中的请求 + 官方机制 + 相邻测试供给。来源：Shopify App Store、Shopify Help Center、YC Company Directory。

观察：Signastyle Home称因错误回答关闭AI；Abysm Internal更新评价肯定修复但要求更方便的知识维护。官方已有多类知识来源。

推断：核对商品事实、来源和回答，并交付可恢复的资料清单；不先做另一个客服助手。

来源：[两类反馈](https://apps.shopify.com/inbox/reviews)、[来源机制](https://help.shopify.com/en/manual/inbox)、[反馈不改源信息](https://help.shopify.com/en/manual/inbox/conversations)、[测试供给](https://www.ycombinator.com/companies/industry/developer-tools)。

### 邮件迁移应携带发送资格而非只有联系人

**证据标签：**具体迁移担忧 + 官方自动抑制 + 新发送工具。来源：Shopify App Store、Shopify Help Center、Product Hunt、Show HN。

观察：Harry's Army Surplus担心导出后遗漏退信排除状态；Shopify与Sendoff均已有退信处理。

推断：需求可能在跨系统状态映射与未知项隔离；DNS检查不能替代同意、退订及历史抑制证据。

来源：[迁移主诉](https://apps.shopify.com/shopify-messaging/reviews)、[已有抑制](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/subscriber-list-management)、[新发送供给](https://sendoff.dev/?ref=producthunt)、[DNS诊断作者帖](https://news.ycombinator.com/item?id=50406439)。

### 网页监测需要可定位的变化与完整运行状态

**证据标签：**使用经验 + 功能询问 + 厂商API与评测供给。来源：Product Hunt、Exa官方文档、GitHub Trending。

观察：Exa已有去重，用户仍询问具体变化；Trace强调页面级数据，但由参评厂商发布。

推断：只补一个买家关心的变更证据包；失败、取消和无变化要分列，访问受限保持未知。

来源：[用户讨论](https://www.producthunt.com/products/exa-ai)、[运行状态](https://exa.ai/docs/monitors/quickstart)、[厂商评测](https://www.producthunt.com/products/context-dev)、[页面复验供给](https://github.com/vercel-labs/agent-browser)。

### 代理风险分流需要客户历史回放与实际行为证据

**证据标签：**功能询问 + 作者经验 + 文档反证 + 资本与竞争供给。来源：Product Hunt、Show HN、GitHub项目原文、YC Company Directory、Crunchbase News。

观察：LiveReview解释无事故历史时的评分来源；Sentient的内核采集文档尚有placeholder；Armorer与Sentra体现安全供给。

推断：先做一个仓库的人工签认与影子回放，不能以未核验工具或融资给自动批准背书。

来源：[冷启动讨论](https://www.producthunt.com/products/livereview)、[实现边界](https://github.com/nosaka4i/sentient/blob/main/README.md)、[目录供给](https://www.ycombinator.com/companies/industry/developer-tools)、[融资报道](https://news.crunchbase.com/venture/biggest-startup-rounds-ai-defense-space-tech-shield-zipline/)。

### 实体与推理基础设施的热度不降低资本门槛

**证据标签：**投资命题 + 中国融资报道 + 早期技术供给；无直接需求验证。来源：YC RFS、36氪、Show HN、GitHub Trending。

观察：YC讨论实体建设融资；陀普科技扩产与阿法纳生物研发有资本需求；Sibyl明确部分硬件尚未测试。

推断：小团队可先做授权样本或兼容性验收；持有设备、建厂、临床研发和自营融资需单独资本论证。

来源：[投资命题](https://www.ycombinator.com/rfs)、[中国融资](https://pitchhub.36kr.com/financing-flash)、[硬件测试边界](https://github.com/diffsec/sibyl/blob/main/README.md)、[GPU管理供给](https://github.com/dsx-ai-factory/nvke)。

## 7. 机会排序与详细验证方案

以下是待验证的商业假设。跨源分看互补性，不按链接数量计分；报价不是市场价格或已成交收入。

| 排名 | 机会 | 需求/30 | 买家/20 | 跨源/15 | 验证/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 01 | 订阅续费前的运费异常核对 | 20 | 18 | 10 | 13 | 6 | 4 | 71 |
| 02 | 订阅商品跨入口购买回归包 | 19 | 18 | 10 | 13 | 6 | 4 | 70 |
| 03 | 现有店铺客服的知识来源验收包 | 18 | 18 | 10 | 12 | 6 | 4 | 68 |
| 04 | 邮件平台迁移的发送资格对账 | 17 | 18 | 10 | 12 | 6 | 4 | 67 |
| 05 | 供应商网页变化的证据包 | 13 | 16 | 10 | 13 | 5 | 3 | 60 |
| 06 | 自动PR批准上线前的历史回放评估 | 12 | 17 | 10 | 10 | 5 | 4 | 58 |

### 01 订阅续费前的运费异常核对 — 71分

把下一次续费合同中的运费与商家签认的规则并列，优先发现需要人工复核的例外。

**买家假设：**使用者为订阅电商运营；假设经营实体商品订阅的小型商家负责人或其实施代理商付款。

**窄MVP：**一店、30份客户合法提供的脱敏合同与订单样本；核对数量、折后金额、运费和下一账期，交付例外清单。先人工服务，不假设能读取其他应用拥有的合同。

**支持证据及反证：**需求：Totem Eco在11-04提出具体续费主诉；Bundles的数量投诉是不同场景的相邻线索，不能合并当同一故障的重复证据。 反证与实现：官方已有合同计算和提交机制，并要求read_own/write_own权限；浏览器工具只说明可辅助授权检查。

来源：[续费主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[相邻套装主诉](https://apps.shopify.com/shopify-bundles/reviews)、[合同能力与权限](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)、[续期规则](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations)、[授权检查供给](https://github.com/vercel-labs/agent-browser)。

**评分理由：**需求20来自近期具体主诉，尚无独立订单或重复客户验证；买家与小样本交付清晰，原生能力及权限限制防御性。

**主要风险：**合同优惠、首单和续期规则可能本来不同；应用所有权会限制数据访问。即使发现差额，也不能认定商家有权追收或自动修改客户合同。

**两周实验（未执行）：**第1周访谈3家订阅商家，先确认规则和资料可得性；第2周拟250美元人工核对30份样本，记录异常、正常例外、未知及每单核对分钟。任何规则调整由商家另行审核，本次未执行。

**停止条件：**拿不到合法合同资料、全部差异能由既有优惠解释，或原生报表已足够时，停止产品化。

**分发路径：**从公开Shopify订阅实施案例筛选前20家服务商与实体订阅品牌；本次未外联。

**可积累资产：**客户签认的续费规则、合同版本与例外处置记录；不先建设扣款或订阅引擎。

### 02 订阅商品跨入口购买回归包 — 70分

围绕主题发布前的真实购买路径，验收商品变体与订阅计划是否按用户选择进入购物车。

**买家假设：**使用者为主题开发者与QA；假设维护订阅店铺的Shopify实施商技术负责人付款。

**窄MVP：**一个主题版本、一个订阅商品、详情页与Featured Product两个入口；在测试店覆盖变体切换、一次性/订阅选择和返回购物车，共12个商家签认场景。

**支持证据及反证：**需求：Creativity for Hope于11-05报告推荐模块失败而商品页正常；这给出明确触发点，但只是单店报告。 规范与竞争：Shopify文档明确产品表单、变体与selling plan的联动；Composal已有流程测试，LiveReview已有审查，因此需卖客户特有语义验收。

来源：[具名主诉](https://apps.shopify.com/shopify-subscriptions/reviews)、[主题规范](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)、[浏览器工具](https://github.com/vercel-labs/agent-browser)、[流程测试竞争](https://www.ycombinator.com/companies/industry/developer-tools)、[审查供给](https://www.producthunt.com/products/livereview)。

**评分理由：**需求19为近期但单一Bug报告；可在测试店低成本复验，复购频率和原生工具替代风险尚未确认。

**主要风险：**可能只需修复一次主题集成；测试主题和生产版本不一致会漏检。不能把自动化动作成功或PR通过当作交易结果正确。

**两周实验（未执行）：**第1周访谈3家主题实施商并取得一个授权测试店；第2周拟200美元交付12例期望/实际/未知和录像，记录误报、定位分钟及下次发布是否愿复购。只用测试订单，本次未执行。

**停止条件：**现有主题测试全部覆盖、问题只是一次配置错误，或客户不愿为下一次回归付费时停止。

**分发路径：**从公开订阅主题定制和商店升级案例寻找前20位交付负责人。

**可积累资产：**经客户确认的购买状态真值、主题版本与回归样例；不积累真实支付信息。

### 03 现有店铺客服的知识来源验收包 — 68分

为已启用的客服代理建立商品事实清单、来源索引和回归问题，帮助商家验收其现有工具。

**买家假设：**使用者为客服与商品运营；假设销售规格较复杂商品的小型电商品牌运营负责人付款。

**窄MVP：**一个店铺、30条授权商品/退货事实、50个合成顾客问题；关联事实来源与更新时间，人工检查答案、冲突和无来源项，交付可备份的客户资料清单。

**支持证据及反证：**需求：Signastyle Home反映错误回答；Abysm Internal在11-05更新的正面评价中仍提出知识录入与CSV请求。两者是不同问题，不证明普遍失效。 反证与供给：Shopify已有产品、政策、Knowledge Base及页面来源，编辑回答不会直接更新源信息；Composal提供相邻流程测试。

来源：[主诉与正面更新](https://apps.shopify.com/inbox/reviews)、[已有知识来源](https://help.shopify.com/en/manual/inbox)、[源信息和回答反馈](https://help.shopify.com/en/manual/inbox/conversations)、[测试供给](https://www.ycombinator.com/companies/industry/developer-tools)。

**评分理由：**需求18兼顾具体主诉与正面反证；双周可交付，但知识真值维护责任及重复付费尚未知。

**主要风险：**原生来源管理可能已足够；客户不一定能导出所有资料或对话。人工真值过期、测试问题与真实咨询不同也会误导，不保证消除所有错误。

**两周实验（未执行）：**第1周访谈3家商家，先用官方来源设置解决明显问题；第2周拟250美元制作30条事实与50问，由客服盲审事实正确、来源一致、该转人工与未知项，记录维护分钟。本次未执行。

**停止条件：**简单原生设置即可解决、客户不能提供可验收真值，或资料不允许备份时，不建设独立产品。

**分发路径：**从公开复杂规格商品的Shopify实施与客服外包案例筛选前20家。

**可积累资产：**客户授权的事实版本、问题集与处置准则；不建立通用聊天机器人。

### 04 邮件平台迁移的发送资格对账 — 67分

在更换发送工具前，检查联系人、同意、退订、退信和投诉状态能否一致迁移。

**买家假设：**使用者为CRM与邮件运营；假设负责电商品牌邮件平台迁移的服务商项目负责人付款。

**窄MVP：**一个来源、一个目标、最多1000条客户授权脱敏记录；仅用官方导出及可用事件明细做映射，交付可迁入、应排除、证据不足三类清单，不发信。

**支持证据及反证：**需求：Harry's Army Surplus于10-21担心看不到抑制明细导致迁移遗漏；是具体担忧，尚无实际迁移失败凭证。 反证与供给：Shopify自动抑制退信，Sendoff也自述已有退信/投诉处理；机会只在历史状态交接。Digdeep的DNS检查验证的是另一层，不能补足发送资格证据。

来源：[迁移担忧](https://apps.shopify.com/shopify-messaging/reviews)、[自动抑制](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/subscriber-list-management)、[官方迁移指引](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/volume-consistency)、[新发送工具已有保护](https://sendoff.dev/?ref=producthunt)、[DNS诊断边界](https://news.ycombinator.com/item?id=50406439)。

**评分理由：**需求17因投诉较早且只表达担忧；买家与交付边界清楚，数据可得性是最先验证的条件。

**主要风险：**来源平台可能不提供逐地址历史；缺失不能当成允许发送，无法恢复的状态可能使整个迁移服务不可交付。现有服务商也可能已完成相同检查。

**两周实验（未执行）：**第1周访谈3家迁移服务商并查看一份合法导出字段清单；第2周拟200美元对账1000条脱敏记录，注入合成退订、退信与重复记录验证排除规则。未知项不进入发送清单，本次未执行。

**停止条件：**无法取得历史状态、官方导出已能无损迁移且无人工成本，或买家只需要一次教程时停止。

**分发路径：**从公开邮件平台迁移和电商CRM实施案例寻找前20家服务商。

**可积累资产：**来源/目标字段映射、证据缺口与可复验迁移记录；不替代发送平台或收集联系人。

### 05 供应商网页变化的证据包 — 60分

把一次变更告警落实到具体页面、前后状态和运行结果，让集成团队能判断是否要行动。

**买家假设：**使用者为集成工程师与产品运营；假设维护多个SaaS集成的小型软件服务商负责人付款。

**窄MVP：**20个允许监测的供应商公开变更日志或定价页；先人工建立基线，输出相关段落差异、来源时间及读取状态，受限页面留为未知。

**支持证据及反证：**需求：Exa评论包含过往监测噪声经验和具体变化定位询问；不能据此认定Exa现有输出不够用。 反证与供给：Exa已有去重、引用和运行状态，Trace已有页面级评测；只有买家特有的事件定义与证据缺口才值得交付。

来源：[用户讨论](https://www.producthunt.com/products/exa-ai)、[官方现有能力](https://exa.ai/blog/monitors-v2)、[调度与状态](https://exa.ai/docs/monitors/quickstart)、[厂商评测](https://www.producthunt.com/products/context-dev)、[授权页面工具](https://github.com/vercel-labs/agent-browser)。

**评分理由：**需求13以询问和单人经验为主；人工验证容易，现有竞品及网页不可控性压低买家与防御分。

**主要风险：**现成监测器可能已经满足；页面个性化、缓存或HTML变化会造成误报，采集不完整则无法衡量真实漏报，不应承诺全面覆盖。

**两周实验（未执行）：**第1周访谈3家集成团队，确定5类值得行动的变化；第2周拟150美元运行20页人工试单，另用自有合成页面制造已知变化，统计误报、采集失败、取消和未知，比较现成工具即可解决的比例。本次未执行。

**停止条件：**现成工具直接给足证据、买家不能定义可行动事件，或主要页面不允许访问时停止。

**分发路径：**从公开多SaaS集成实施案例寻找前20家维护团队，不以绕过网站控制作为分发或产品能力。

**可积累资产：**客户签认的事件定义、时间线和差异基线；不先造通用爬虫。

### 06 自动PR批准上线前的历史回放评估 — 58分

在真实自动批准前，用一个仓库的历史变更与人工判定检查误放行边界。

**买家假设：**使用者为工程负责人和发布维护者；假设已有AI审查、准备启用自动批准的小型B2B SaaS技术负责人付款。

**窄MVP：**一个授权仓库、50个历史PR；按当时可见信息重放风险分流，对定价、权限和配置变更保留人工签认，交付漏检样例与数据不足清单，不改变合并权限。

**支持证据及反证：**需求：LiveReview评论者追问冷启动依据，作者已给出方案；这是验收询问，不是已证实的产品事故。 实现与竞争：Sentient作者提出盲目批准的个人经验，但README内核采集仍写placeholder；PR Agent、Armorer及Sentra说明审查/安全供给充分，不补足买家付款证据。

来源：[冷启动问答](https://www.producthunt.com/products/livereview)、[作者原始用例](https://news.ycombinator.com/item?id=50409020)、[文档边界](https://github.com/nosaka4i/sentient/blob/main/README.md)、[审查供给](https://github.com/The-PR-Agent/pr-agent)、[目录竞争](https://www.ycombinator.com/companies/industry/developer-tools)、[资本供给](https://news.crunchbase.com/venture/biggest-startup-rounds-ai-defense-space-tech-shield-zipline/)。

**评分理由：**需求12主要是询问与作者经验；真实事故标签稀疏，验证分10。融资和stars只反映供给，不提高需求分。

**主要风险：**事故少、标签偏差和事后信息泄漏会让回放显得过好；50个样本不足以证明罕见风险安全，客户可能已有内部流程，不保证自动批准比例。

**两周实验（未执行）：**第1周访谈3个拟启用自动批准的团队，检查历史标签与权限；第2周拟300美元回放50个PR，由维护者盲审应人工复核项，分别记录误放行、过度拦截与无法判断。只做影子评估，本次未执行。

**停止条件：**没有足够标签、拿不到授权样本，或现有规则已覆盖客户关心的变更时停止；不为凑样本把无事故当安全。

**分发路径：**从公开采用AI代码审查的B2B SaaS工程案例寻找前20位负责人。

**可积累资产：**客户认可的风险场景、标签版本与回放方法；不建设新的通用审批平台。

## 8. 拒绝、拥挤与资本密集方向

- **通用客服助手、通用代码审查与测试代理**：已有[Inbox](https://help.shopify.com/en/manual/inbox)、[LiveReview](https://www.producthunt.com/products/livereview)、[PR Agent](https://github.com/The-PR-Agent/pr-agent)和[YC目录供给](https://www.ycombinator.com/companies/industry/developer-tools)。本期仅保留客户签认的事实或风险样例，不将模型界面当作差异化。
- **另做通用网页监测器或宣称全面抓取**：[Exa](https://exa.ai/blog/monitors-v2)与[Trace](https://www.producthunt.com/products/context-dev)已有能力与方法。访问受限不应通过换IP、验证码处理或非授权接口规避；运行失败也不能包装成无变化。
- **新的邮件发送平台**：[Sendoff](https://sendoff.dev/?ref=producthunt)与[Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/subscriber-list-management)已有发送及抑制能力。机会04只检查迁移，不以更低单封成本推断整体便宜，也不发送客户清单。
- **自动重算、扣款或追收订阅费用**：[合同权限与更新机制](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract)构成实施边界。先验证合同和商家期望，缺访问权或客户同意时不得把“建议差额”当可直接执行指令。
- **新的视频演示编辑器**：[Capnot](https://www.producthunt.com/products/capnot)与[hyperframes](https://github.com/heygen-com/hyperframes)是相邻供给，今天缺少足够独立投诉证明还需要另一整套产品。
- **自建GPU集群、机器人资产租赁、建电池厂或生物临床研发**：[YC RFS](https://www.ycombinator.com/rfs)、[中国融资快报](https://pitchhub.36kr.com/financing-flash)及[GPU管理工具](https://github.com/dsx-ai-factory/nvke)只能解释供给与资本方向。**这些是资本密集业务**，不列入小团队两周MVP；设备或融资风险不能藏在“软件平台”标签下。
- **按Coldframe热度销售真实冷柜攻击检测**：[作者观察](https://news.ycombinator.com/item?id=50406292)没有给出真实客户攻击或采购证据。本次不扫描公网设备、不测试真实控制器，也不把诱捕器流量当事故统计。

## 9. 下一轮实验与淘汰顺序

本次仅完成研究。没有联系评论者、发外部消息、执行客户系统或购买服务。

1. **先验证可取得的证据。** 运费取合同样本与签认规则；邮件迁移先看导出字段。拿不到资料就停止对应方向，不先开发连接器。
2. **先做前两项小样本交付。** 续费异常明确“实际合同、期望规则、无法判定”；购买路径明确“用户选择、购物车状态、测试版本”。记录人工工时及下一轮付费意愿。
3. **知识与邮件以历史状态为核心。** 客服样例由商家确认真值；迁移中的未知状态不算允许发送。先排除原生功能已经能解决的情况。
4. **监测与PR仅作影子实验。** 前者将采集失败和未知单列，后者固定当时可见证据，避免用事后事故训练又在同一批数据验收。
5. **两周后按实际付款、节约工时、复验与复购重排。** 未执行保持未执行，无法观测保持未知；不以stars、拟报价或融资替代这些结果。

## 10. 访问限制与研究边界

GitHub Trending网页工具报告restricted URL；普通沙箱HTTP出现DNS不可用。执行环境允许只读网络后，以匿名HTTPS读取GitHub三窗及公开Algolia API，均返回200。GitHub连接器不支持Trending榜单，项目README则使用其只读能力读取。没有登录、处理验证码、代理轮换或绕过站点访问控制，也没有执行项目原文的安装与部署命令。

IT桔子首页返回412后停止。36氪所选快讯详情以及成都具身智能文章显示安全检测页，未继续处理；仅采用已经公开可读的融资列表。中国金额来源是媒体快讯，未取得公司或投资方交割凭证。阿法纳生物的5000万美元是A轮总规模，首关实际金额未知。[36氪列表](https://pitchhub.36kr.com/financing-flash)。

YC所选两家公司单页没有可读正文，采用官方开发工具分类目录；目录的月份和Active状态不是当日成立或融资证明。KeyContain、Digdeep和Sentient官网在网页工具中不可读；KeyContain未纳入，Digdeep使用HN作者原文，Sentient另核对可读仓库。Capnot初次产品页可读，后续评论定位失败，因此只采用已取得的功能说明。

商城Flow评论工具不可读；旧shopify-email路径404后通过官方商城搜索找到shopify-messaging公开页。还查看Translate & Adapt，但未选入本期数据。没有由访问失败推断产品不存在。商城与PH默认页不是全量用户样本，投诉可能已修复、存在配置差异或错误归因，正面评价也不证明所有场景有效。

本期偏向电商与开发工具。Crunchbase周报的美国样本不代表全球；YC公司自述、PH厂商回复和作者README不是独立买家。没有收入、留存、损失、模型效果或融资到账的独立核验。机会与报价均为推断，结构校验也不能证明商业需求。

## 11. 本地校验

指定命令已通过：

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

实际输出：`Radar validation passed: 6 opportunities, 7 themes, 35 dataset rows`。

补充核对通过：六维权重上限及分数加总、HN固定七日窗口、GitHub三窗覆盖、JSON与报告项目及来源对应、README历史完整保留、仅三个允许路径变化；`git diff --check`通过。校验只证明本地数据结构与文档一致性，不证明客户需求、运行效果或融资到账。

仅修改`src/data/radar.json`、本日报与`README.md`。未提交、推送、部署或启动服务，后续发布由外部自动化处理。
