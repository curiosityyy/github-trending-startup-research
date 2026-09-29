# Startup Radar 创业机会日报｜2026-09-29

> UTC汇总：2026-09-29T01:23:35Z；汇总时刻；网页约01:18—01:23 UTC分批读取，可能缓存；HN、PH feed及Trending固定为01:20:41Z快照。
> 本期：5款当前发布、5个七日内技术项目、10个Trending仓库、6条市场信号、7项投诉或缺口，形成6个待验证假设。未访谈客户、未安装产品、未验证付款。

## 1. 方法与证据口径

研究前读取[研究方法](startup_radar_method_zh.md)、现有结构化数据及[09-28日报](startup_radar_2026-09-28_zh.md)。仅使用公开页面和公共API；遇站点访问限制停止，不使用登录态、签名、验证码或代理绕限。

沿用100分细则：需求证据30、买家清晰度20、跨源共振15、两周可验证性15、分发路径10、防御性10。分数用于排研究顺序，不是市场规模或成功概率。买家、报价、实验样本数和停止条件均为设计假设。Stars、票评、融资、目录案例都不等于需求、留存或收入。

将三类时间分开：采集时间、页面发布时间、事件发生时间。PH当前平台日与UTC日期不同，feed published保留原值；融资相对时间不改写为交割日；旧投诉不称今日新事故。同一产品的官网、仓库和HN帖子不是三组独立需求证据。低分评论是目的性样本，无法估计故障率；厂商回复不能当独立复现。

## 2. 相比09-28的实质变化

1. **五项发布全部更换。** 今日覆盖Databox连接器、Statable、SaleSmartly、VibeDefend和vantage.ai；首页将昨日Humalike、Cuey等移至Yesterday区域。feed updated由09-27推进到09-28（-07:00）。[当前首页](https://www.producthunt.com/) / [feed](https://www.producthunt.com/feed)。
2. **五项技术项目全部为相对上一期新覆盖。** PaperMono、OpenAPPA和DASP为09-28新帖，另两项来自同一七日窗。查询匹配867条，昨日875条；滑动窗口与检索变化不能解释成发帖减少8条。[本期固定窗口](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1790040041%2Ccreated_at_i%3C%3D1790644841&hitsPerPage=100)。
3. **Trending窗口行数由9/18/18变为8/18/19。** 精选10库中新增WeKnora、cua、archify、timesfm；其余6库更新本次stars。不声称首次上榜，窗口增长不作为需求加分。来源见3.3。
4. **市场更新到更近的采访和中国列表。** 换入09-28 Axiom采访、09-25 Cyera报道及途见、地瓜机器人；不再沿用昨日酒店、游戏、朗矽与息壤案例。YC观察由Unthread转向Agnost AI和Netter。来源见3.4。
5. **需求样本扩展到客服与退出交接。** 新增三个应用的评论页。Marketplace Connect整体仍为4.1，本次总评论2,115，昨日记录2,116；差异可能来自缓存或平台治理，不据此解释用户流失。[评论快照](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)。
6. **重排验证任务。** 库存79分保持；昨日IT工单升级回放67分改成电商客服状态验收74分，买家和证据已变，不能当同口径涨7分。新增营销退出72、权限回归71、指标口径68、长任务恢复65。恢复签收、迁移预检、重复逻辑和NPC回归退出本期前六，仅表示研究优先级改变。

## 3. 来源覆盖与快照

| 来源 | 本期覆盖 | 口径与限制 |
| --- | --- | --- |
| [Product Hunt](https://www.producthunt.com/) | 当前发布 / 5款精选 | 首页与产品页均为当前发布；五项相对昨日全部替换。feed updated 2026-09-28T00:01:00-07:00，平台日与UTC不同，published不是本轮发布日。 |
| [Show HN / Algolia](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1790040041%2Ccreated_at_i%3C%3D1790644841&hitsPerPage=100) | 867条匹配 / 返回100条 / 审阅前45条 / 精选5项 | 固定七日窗09-22 01:20:41至09-29 01:20:41 UTC；三项09-28新帖。所有票评固定于查询快照，不用后续阅读覆盖。 |
| [GitHub Trending](https://github.com/trending?since=daily) | daily 8 / weekly 18 / monthly 19 | Language Any、Spoken Language Any；45个未去重跨窗行，精选10库，其中4库相对昨日新覆盖；窗口stars不可相加。 |
| [YC RFS / Company Directory](https://www.ycombinator.com/companies/industry/analytics) | Fall 2026 / Analytics / 2个公司档案 | 主目录无可读正文，分析分类及Agnost AI、Netter档案可读；RFS版本未变，均为命题或竞争供给，不是采购证明。 |
| [Crunchbase News](https://news.crunchbase.com/venture/early-groq-ai-investor-qa-venkatachalam-axiom/) | 2条全球市场信号 | 新增覆盖09-28 Axiom原创采访和09-25 Cyera融资周报；基金规模不称当日新募资。 |
| [36氪 / IT桔子](https://pitchhub.36kr.com/financing-flash) | 2条中国融资 / IT桔子412 | 新覆盖途见与地瓜机器人；以公开列表为据，详情安全检测后停止。IT桔子412无数据，不推断中国融资缺席。 |
| [Shopify App Store / Show HN](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1) | 4个一星页面 / 7项投诉或缺口 | 新增Tidio、Klaviyo、Google & YouTube覆盖，复查Marketplace Connect；保留旧日期、厂商回复和重复文案限制。 |

### 3.1 当前产品发布

五款均在本期PH首页当前发布区及产品页定位；产品页标记Launching Today。Databox与VibeDefend页面的榜单图注明09-28，说明这是当前平台日的发布，不将其强写为UTC 09-29首发。feed于01:20:41Z读取，顶层updated为2026-09-28T00:01:00-07:00。不采用可能异步变化的投票数。

| 产品 / 直接来源 | feed条目published | 观察与边界 |
| --- | --- | --- |
| [MCP Connectors by Databox](https://www.producthunt.com/products/databox) | 2026-09-18T05:24:41-07:00 | 厂商描述将CRM与客服上下文接入AI Analyst，并允许采取动作；连接器数量和分析效果未实测。 |
| [Statable Analytics](https://www.producthunt.com/products/statable-analytics) | 2026-09-15T13:12:55-07:00 | 厂商描述通过MCP读取报表及配置目标、漏斗；无cookie与合规表述是厂商主张，本期不作法律判断。 |
| [SaleSmartly](https://www.producthunt.com/products/salesmartly) | 2026-09-12T03:35:05-07:00 | 厂商描述统一消息、CRM、翻译及跟进；接入多个渠道不证明交接可靠或产生增量销售。 |
| [VibeDefend by CybeDefend](https://www.producthunt.com/products/cybedefend) | 2026-09-17T06:41:42-07:00 | 厂商描述在编码过程中扫描diff并限制高风险命令；未测试拦截覆盖率，不能称安全认证。 |
| [vantage.ai](https://www.producthunt.com/products/vantage-ai-2) | 2026-09-26T03:22:26-07:00 | 发布页定位开源成本、用量、护栏及会话日志工具；已有免费供给压低通用监控面板的差异空间。 |

以上条目时间直接来自[公开feed](https://www.producthunt.com/feed)，不是本轮发布日或公司成立日。

### 3.2 Show HN最近七日

固定窗为**2026-09-22T01:20:41Z—2026-09-29T01:20:41Z**。[公共Algolia查询](https://hn.algolia.com/api/v1/search?tags=show_hn&numericFilters=created_at_i%3E%3D1790040041%2Ccreated_at_i%3C%3D1790644841&hitsPerPage=100)匹配867条、返回100条；审阅相关性排序前45条元数据，目的性选5项并阅读第一方项目说明。并非七日全量普查，亦非发布时间排序。以下points/comments全部固定在**2026-09-29T01:20:41Z**，后续评论读取不覆盖。

| 项目 / 原帖 / 第一方资料 | 发帖UTC | points / comments | 观察与边界 |
| --- | --- | --- | --- |
| [PaperMono Shopping List](https://news.ycombinator.com/item?id=49875801) / [项目](https://github.com/seamusc/papermono-shopping-list) | 2026-09-28T10:14:41Z | 130 / 54 | 电子纸购物清单与手机网页同步，README明确是家用个人项目、服务端无认证且仅测试一款硬件；不当成可直接上线的商品。 |
| [OpenAPPA](https://news.ycombinator.com/item?id=49877515) / [项目](https://www.openappa.com/) | 2026-09-28T13:20:44Z | 23 / 11 | 作者以数据流标签控制工具调用；官网绝对安全和基准结果是作者主张，本期未复现。讨论出现读取网页后越权创建issue的单个用户陈述。 |
| [DASP](https://news.ycombinator.com/item?id=49877270) / [项目](https://dasp-protocol.github.io/dasp/) | 2026-09-28T13:00:13Z | 16 / 7 | 草案区分命令接收、最终结果与uncertain，支持断线后读取历史；官网明确尚无生产binding或host，不能写成成熟协议。 |
| [Reladraw](https://news.ycombinator.com/item?id=49858513) / [项目](https://github.com/reladraw/reladraw) | 2026-09-26T17:10:40Z | 403 / 119 | README用相对位置表达图形并输出SVG；当前文档称语法尚不稳定，供给信号不等于架构文档预算。 |
| [Drop](https://news.ycombinator.com/item?id=49801329) / [项目](https://droprun.sh/) | 2026-09-22T13:52:47Z | 193 / 63 | 官方描述无需root的Linux隔离与可选gVisor；它处理运行环境边界，与业务权限规则不是同一层，未运行验证。 |

补充原帖评论来源：[OpenAPPA公共原帖](https://hn.algolia.com/api/v1/items/49877515)、[DASP公共原帖](https://hn.algolia.com/api/v1/items/49877270)。DASP讨论询问事件订阅及uncertain如何映射到其他协议，是设计反馈，不能称企业采购。PaperMono README明确家用项目与服务端认证边界；消费硬件热度没有进入机会评分。

### 3.3 GitHub Trending三窗

**Language Any / Spoken Language Any**：请求URL不含语言路径或spoken_language_code。普通公开HTTP在01:20:41Z采集：[daily](https://github.com/trending?since=daily)8行、[weekly](https://github.com/trending?since=weekly)18行、[monthly](https://github.com/trending?since=monthly)19行，共45个未去重跨窗行，精选10个不同仓库。下表为**窗口stars，不是总stars**，重叠窗口不能相加。描述取自榜单；未运行仓库代码。

| 仓库 | 窗口stars / 榜单直接来源 | 观察与边界 |
| --- | --- | --- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | [+3,197 stars / daily](https://github.com/trending?since=daily) | 榜单定位工作Agent管理应用；热度不证明采购。 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | [+4,561 stars / daily](https://github.com/trending?since=daily) | 榜单定位可学习的Agent记忆；不能由stars推导记忆正确性。 |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | [+734 stars / daily](https://github.com/trending?since=daily) | 榜单描述多种编码Agent协同；更适合作为协调与验收需求的供给背景。 |
| [dream-num/univer](https://github.com/dream-num/univer) | [+1,099 stars / daily](https://github.com/trending?since=daily) | 榜单描述表格等办公运行时；可作为差异审阅界面，字段定义仍需业务确认。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | [+3,962 stars / weekly](https://github.com/trending?since=weekly) | 项目定位多阶段安全审阅和机器可读发现；未运行，不表示独立认证。 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | [+2,509 stars / weekly](https://github.com/trending?since=weekly) | 榜单描述文档检索、推理Agent及Wiki；缺少本期真实买家故障样本。 |
| [trycua/cua](https://github.com/trycua/cua) | [+1,293 stars / weekly](https://github.com/trending?since=weekly) | 榜单描述跨系统驱动、运行集群及评测；不证明具体客户工作流成功率。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | [+20,955 stars / monthly](https://github.com/trending?since=monthly) | 榜单描述规则流水线与模型审阅结合；属于已有替代供给。 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | [+48,030 stars / monthly](https://github.com/trending?since=monthly) | 榜单定位架构、流程等可导出图形技能；与Reladraw形成供给共振，未发现付费缺口。 |
| [google-research/timesfm](https://github.com/google-research/timesfm) | [+5,752 stars / monthly](https://github.com/trending?since=monthly) | 榜单描述预训练时序模型；本期仅作技术供给，不据此预测经营收益。 |

### 3.4 全球与中国市场信号

| 信号 / 直接来源 | 日期与口径 | 观察与证据标签 |
| --- | --- | --- |
| [Axiom Partners：按工作结果投资](https://news.crunchbase.com/venture/early-groq-ai-investor-qa-venkatachalam-axiom/) | 2026-09-28采访；基金规模5,200万美元 | 原创采访讨论建筑、工业和保险中的AI交付；基金规模不是09-28新增融资，买家来自劳动力预算的说法属于投资人观察。 **原创采访；非审计需求。** |
| [Cyera：企业数据安全资本](https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-ai-health-island-cyera/) | 2026-09-25周报；4亿美元G轮扩展融资 | 周报称Evolution Equity Partners领投，方向覆盖人及AI Agent的数据治理；是资本信号，不能外推小团队安全服务预算。 **融资报道；未核验到账。** |
| [途见科技：数据采集与终端供应链](https://pitchhub.36kr.com/financing-flash) | 09-29读取时列表标记36分钟前；亿元级Pre-A++ | 公开列表称两只北京市产业基金联合领投，用于核心技术、自动化产线与工艺等。详情安全检测，未核实完成日；不把相对发布时间当成交日。 **公开列表摘要；详情受限。** |
| [地瓜机器人：机器人芯片资本](https://pitchhub.36kr.com/financing-flash) | 09-29读取时列表标记21小时前；4亿美元C轮 | 列表称完成C轮，署名线性资本；本期只采用列表可见融资信息，详情受安全检测限制，不外推订单或利润。 **投资方署名摘要；详情受限。** |
| [YC RFS：共享Agent与自维护API](https://www.ycombinator.com/rfs) | Fall 2026；09-29复查，版本未变 | 当前命题涉及多人Agent会话、小软件部署、API变更传递；为供给与研究方向，不代表采购承诺。 **投资方命题；非新事件。** |
| [Agnost AI：从会话失败到专用模型](https://www.ycombinator.com/companies/agnost-ai) | Summer 2026 / Active；09-29读取 | 公司档案描述从Agent会话识别失败并训练任务模型；厂商案例未独立验证，显示客服评测已有竞争，不能只做日志汇总。 **公司目录及创始人自述。** |

中国两项仅使用公开列表可见字段：[途见详情](https://36kr.com/newsflashes/4003742897279109)与[地瓜详情](https://36kr.com/p/4002505270695808)均显示安全检测，未继续。列表“36分钟前”“21小时前”是读取时的相对标记，可能受缓存影响，不换算精确事件时刻。未核验到账。它们涉及产线、芯片或实体供应链，属于**资本密集方向**，不列为小团队两周完整产品。

YC主目录无可读正文，转读公开[Analytics分类](https://www.ycombinator.com/companies/industry/analytics)、[Agnost AI](https://www.ycombinator.com/companies/agnost-ai)和[Netter](https://www.ycombinator.com/companies/netter)。后者为Spring 2026 / Active，定位中型企业数据整合；公司自述案例只用于竞争背景。RFS仍为Fall 2026，复查不等于新版发布。

36氪列表中DeepSeek标题与正文仍分别表达“完成”及“推进/计划”，本期继续排除该轮金额、估值与收入，避免把计划写成已完成。[列表](https://pitchhub.36kr.com/financing-flash)。IT桔子412不是“中国没有融资”的证据。

### 3.5 客户投诉与具体缺口

四个Shopify页面为一星筛选页；整体评分及总评论数是本期读取值，不是一星样本平均分。未取得稳定单评永久链接，以商家名、日期和筛选页定位。所有未验证故障均保留为陈述；旧评论、厂商联系协助和近似重复文案不能抹掉。

| 问题 / 直接来源 | 时间与评分 | 陈述及证据边界 |
| --- | --- | --- |
| [Marketplace Connect：库存价格同步失配](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1) | 整体4.1 / 2,115条；09-09及09-12评论 | TFTOYS.CA、Alternate Worlds Magic、PSYNE CO. SHOP报告eBay连接或库存价格问题；为旧事件复查，可能同一故障，没有当前修复或损失日志。 **商家陈述；旧案例复查。** |
| [Tidio：回复后仍被自动关单](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1) | 整体4.8 / 1,345条；Pom D’Azur 2026-05-26 | 商家称处理账单争议时，回复后仍收到未回复及关单通知；未取得工单轨迹，不能归因于某个模型或证明问题持续。 **旧商家个案；本期新增覆盖。** |
| [Tidio：历史问答导出缺口](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1) | TopJob 2026-07-13；厂商07-14回复 | 商家要求导出客户问答，厂商当时确认应用内没有该功能并提出邮件协助；不等于今天没有其他授权导出方式。 **商家要求及厂商当时确认。** |
| [Klaviyo：退出后的流程重建与卸载验收](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1) | 整体4.7 / 3,331条；09-19、09-17评论 | Thrift Goblin称账户终止后重建流程模板；Dr Gus Nutrition称卸载后代码受损。厂商09-21及09-18表示已联系协助；未独立确认责任、因果或解决状态。 **近期商家陈述及厂商回复。** |
| [Google & YouTube：拒绝理由不可操作](https://apps.shopify.com/google/reviews?ratings%5B%5D=1) | 整体4.5 / 5,501条；08-27、08-16评论 | Stories of Wonder、Journey Must Haves称无法据misrepresentation提示定位整改项；商家自述合法不构成政策合规证明，不能承诺恢复账户。 **旧商家陈述；未审查实际商店。** |
| [Google & YouTube：结账扩展与账号层级疑问](https://apps.shopify.com/google/reviews?ratings%5B%5D=1) | Shop South Africa 2026-07-01；同页有近似重复评论 | 商家描述问卷opt-in组件、父子账号与旧脚本指导不匹配；只算一类问题，不将近似文案当多个独立买家，当前技术状态未复现。 **旧集成投诉；重复文案降权。** |
| [OpenAPPA讨论：网页内容触发额外写入](https://news.ycombinator.com/item?id=49877515) | ildari于09-28帖子下陈述；09-29读取 | 讨论者称Agent读到网页要求后开始创建GitHub issue并带入上下文；缺日志、权限配置及复现，只是单个开发者事件陈述。 **未复现开发者陈述。** |

这些例子没有证明当前故障仍存在。Google账号拒绝与结账组件问题本轮只作为研究缺口，未转为“解封服务”；同页近似文案按一类反馈处理。Tidio导出限制是当时回复，开始任何迁移实验前须重新确认官方授权出口。

## 4. 六个跨源主题

### 4.1 渠道同步仍需要业务签认

**证据标签：**旧投诉 + 邻近开源工具；无新增需求验证。来源：Shopify App Store、GitHub Trending。

Marketplace Connect旧案例复查，univer日榜更新。 推断先卖只读差异清单，保留79分；热度和评论数变化不加分。

直接来源：[评论](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)、[univer](https://github.com/dream-num/univer)。

### 4.2 客服自动化要验收接手状态

**证据标签：**旧商家陈述 + 当前发布 + 竞争目录。来源：Shopify App Store、Product Hunt、YC Company Directory。

Tidio个案称回复后误关单，SaleSmartly聚合多渠道，Agnost AI分析会话失败。 推断以一套已签认工单状态进入；不能从旧投诉推导当前全行业故障率。

直接来源：[Tidio](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1)、[SaleSmartly](https://www.producthunt.com/products/salesmartly)、[Agnost AI](https://www.ycombinator.com/companies/agnost-ai)。

### 4.3 退出准备是交付任务

**证据标签：**近期商家陈述 + 旧功能边界 + 图形供给。来源：Shopify App Store、Show HN。

Klaviyo有退出重建陈述，Tidio历史导出诉求获当时回复；Reladraw提供流程表达。 推断先盘点授权资产与页面依赖，不把绕过平台限制当产品。

直接来源：[Klaviyo](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1)、[Tidio](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1)、[Reladraw](https://github.com/reladraw/reladraw)。

### 4.4 护栏供给增多，验收要同时测可用性

**证据标签：**单个开发者陈述 + 安全产品发布 + 隔离工具。来源：Show HN、Product Hunt、GitHub Trending。

OpenAPPA讨论具体越界，VibeDefend与vantage.ai发布，Drop及Cloudflare技能提供不同层次工具。 推断用客户任务衡量错误放行、误拦与完成率，作者基准不作独立证明。

直接来源：[原帖](https://news.ycombinator.com/item?id=49877515)、[VibeDefend](https://www.producthunt.com/products/cybedefend)、[Drop](https://droprun.sh/)、[安全技能](https://github.com/cloudflare/security-audit-skill)。

### 4.5 业务分析连接器需要可追踪口径

**证据标签：**发布及公司供给；需求弱。来源：Product Hunt、YC Company Directory。

Databox与Statable让Agent接入分析，Netter定位中型企业数据整合。 推断验证单指标复算；尚无本期独立客户口径事故，需求分严格限制。

直接来源：[Databox](https://www.producthunt.com/products/databox)、[Statable](https://www.producthunt.com/products/statable-analytics)、[Netter](https://www.ycombinator.com/companies/netter)。

### 4.6 长任务恢复要保留未知结果

**证据标签：**协议草案 + 投资命题 + 编排供给。来源：Show HN、YC RFS、GitHub Trending。

DASP区分命令接收和结果，YC讨论共享Agent，openrig日榜呈现协作供给。 推断先测已有任务的断线与重试，不要求买家迁移到草案协议。

直接来源：[DASP](https://dasp-protocol.github.io/dasp/)、[YC RFS](https://www.ycombinator.com/rfs)、[openrig](https://github.com/mvschwarz/openrig)。

## 5. 六个两周验证假设

| 排序 | 机会 | 需求/30 | 买家/20 | 跨源/15 | 验证/15 | 分发/10 | 防御/10 | 总分 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | 单渠道库存与订单差异签收包 | 24 | 19 | 8 | 14 | 8 | 6 | 79 |
| 02 | 客服回复到人工接手的状态验收 | 20 | 19 | 11 | 13 | 6 | 5 | 74 |
| 03 | 营销平台退出前的资产与依赖验收 | 21 | 18 | 8 | 13 | 7 | 5 | 72 |
| 04 | 编码Agent写入权限的回归验收包 | 18 | 18 | 11 | 13 | 6 | 5 | 71 |
| 05 | Agent分析前的指标口径验收 | 14 | 18 | 10 | 14 | 7 | 5 | 68 |
| 06 | 长任务断线与重试结果验收 | 12 | 17 | 11 | 13 | 6 | 6 | 65 |

前三项有商家工作流陈述，仍无独立复现与付款。权限回归只有单个开发者事件；指标口径与持久任务主要是供给和设计动机，因此需求分分别为18、14、12。跨源评分已对相邻但非相同买家场景折扣；不同网站重复同一产品的主张不增加需求证据。美元报价均为实验假设。

### 5.1 单渠道库存与订单差异签收包 — 79分

用授权导出解释一个渠道的库存与订单差异，给运营一张可处理清单。

**买家与付款人：**假设多渠道Shopify商家运营负责人使用，店主批准并付款。

**窄MVP：**一个店、一个渠道、最多1万SKU；先约定延迟窗口、映射与正常例外，只读交付。

**证据与评分依据：**Marketplace Connect旧投诉复查支持需求24分；本期无新事故和付款证据，保持昨日79分。 univer只是实施工具，跨源8分不提高；买家19、验证14来自可限定交付，分发8、防御6取决于代理入口和签认映射。

直接来源：[商家评论](https://apps.shopify.com/marketplace-connect/reviews?ratings%5B%5D=1)、[univer](https://github.com/dream-num/univer)。

**主要风险：**正常延迟易造成误报；已迁移或原厂已修复的商家可能不需要额外服务。

**两周实验：**两周访谈5家近期做过对账的商家，盲审20项差异并测人工耗时；报价假设每包500美元。

**停止条件：**不足3家有重复成本，或不足2家愿意付费则停止。

**前20位客户路径：**从渠道实施代理和ERP顾问寻找前20位运营负责人。

**可积累资产：**经签认的映射、延迟基线与处置记录；CSV比较本身不构成壁垒。

### 5.2 客服回复到人工接手的状态验收 — 74分

检查已回复、待人工、已关闭之间的错误转换，明确谁负责接手。

**买家与付款人：**假设电商品牌客服主管使用并签认，运营负责人批准客服预算。

**窄MVP：**一个客服系统、30条经授权脱敏工单，离线回放回复和关闭事件，列出待人工队列；不接触真实退款操作。

**证据与评分依据：**Tidio账单工单个案与Klaviyo客服绕圈陈述提供直接但偏旧的商家证据，需求20分；没有工单日志或损失量化。 SaleSmartly当前发布与Agnost AI档案显示多渠道自动化及失败分析已有供给，跨源11分；买家19、验证13依赖可签认状态，分发6、防御5受原厂功能限制。

直接来源：[Tidio商家陈述](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1)、[Klaviyo评论及回复](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1)、[SaleSmartly](https://www.producthunt.com/products/salesmartly)、[Agnost AI](https://www.ycombinator.com/companies/agnost-ai)。

**主要风险：**回放缺少渠道投递事件会误判；厂商可能已修复，现有客服规则也可能足够。

**两周实验：**两周让3位客服主管各提供10条历史工单，先签认关闭规则，再比较漏接和误报；报价假设每次400美元。

**停止条件：**拿不到合法完整轨迹、没有发现既有报表遗漏的问题，或不足2位愿付费则停止。

**前20位客户路径：**从电商客服实施代理寻找前20位正在更换或上线自动化的主管。

**可积累资产：**客户签认的交接状态与异常回归集；单纯摘要或自动标签易复制。

### 5.3 营销平台退出前的资产与依赖验收 — 72分

在仍有授权访问时确认流程、模板、同意记录和页面依赖能否交接，减少临时重建。

**买家与付款人：**假设电商营销代理执行，品牌增长负责人签收，代理项目负责人或店主付款。

**窄MVP：**一个营销账号、5条关键流程、一个授权测试店；清点官方可导出的资产与不可导出项，对卸载前后页面做人工验收。

**证据与评分依据：**Klaviyo近期退出与卸载投诉支持需求21分，但厂商已回应；不把用户报告当已证实的代码缺陷。 Tidio当时的导出限制提示跨工具交接成本，Reladraw只提供流程表达供给，跨源8分；买家18、验证13明确，分发7依赖代理，防御5偏弱。

直接来源：[Klaviyo](https://apps.shopify.com/klaviyo-email-marketing/reviews?ratings%5B%5D=1)、[Tidio导出诉求](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1)、[Reladraw](https://github.com/reladraw/reladraw)。

**主要风险：**账户已关闭后可能无法取得资料；条款、同意记录和素材权利限制迁移，不能规避平台处罚或保证账号恢复。

**两周实验：**两周与3家代理使用合法历史导出或测试账号，人工重建各5条流程并记录缺失项；报价假设每次350美元。

**停止条件：**原厂导出已经完整、无法节省交付时间，或不足2家愿将验收列入项目预算则停止。

**前20位客户路径：**从营销迁移与维护代理寻找前20位交付负责人。

**可积累资产：**授权资产目录、依赖图和签认步骤；不积累客户营销内容作为公共训练数据。

### 5.4 编码Agent写入权限的回归验收包 — 71分

验证一个编码工作流在读取外部内容后，是否仍遵守客户批准的写入边界。

**买家与付款人：**假设小型SaaS平台工程负责人使用，CTO批准安全或工程预算。

**窄MVP：**一个测试仓库、20个合成网页与工具轨迹；只用虚拟敏感字段和模拟外部写入，记录错误放行、错误阻断与完成率。

**证据与评分依据：**OpenAPPA讨论有具体越界陈述，缺日志与复现，需求18分；作者基准和绝对安全宣传不作为结论。 VibeDefend、vantage.ai、Drop及Cloudflare技能显示护栏、隔离与审阅已有多层供给；跨源11分，买家18、验证13，分发6、防御5。

直接来源：[具体开发者陈述](https://news.ycombinator.com/item?id=49877515)、[OpenAPPA设计](https://www.openappa.com/)、[VibeDefend](https://www.producthunt.com/products/cybedefend)、[vantage.ai](https://www.producthunt.com/products/vantage-ai-2)、[Drop](https://droprun.sh/)、[Cloudflare技能](https://github.com/cloudflare/security-audit-skill)。

**主要风险：**测试覆盖不代表完整安全保证；不同工具的权限层不同，必须同时测误拦与任务完成，避免只优化拦截数。

**两周实验：**两周找3家已使用编码Agent的团队冻结一个任务，签认允许动作后对比现有两种配置；报价假设每包500美元。

**停止条件：**现有测试已覆盖、测试发现无法复现或没人愿为维护回归集付费则停止。

**前20位客户路径：**从已有编码Agent试点与代码审查预算的小型SaaS团队寻找前20位CTO。

**可积累资产：**按工具版本维护的客户授权边界和误阻断反例；不提供通用安全认证。

### 5.5 Agent分析前的指标口径验收 — 68分

先把一个经营指标的来源、时间窗与计算规则固定，再验收Agent生成的报表。

**买家与付款人：**假设小型电商品牌数据运营使用，增长负责人确认定义，运营预算付款。

**窄MVP：**两个客户授权CSV、一个指标、10道固定问题；交付原始行到结果的可追踪计算，暂不允许Agent修改埋点或执行营销动作。

**证据与评分依据：**Databox与Statable当前发布显示指标读取和配置进入Agent工具链；未发现本期指标口径错误的独立买家样本，需求仅14分。 Netter目录体现数据集成竞争，univer是可用界面供给，跨源10分；买家18、验证14是可执行假设，分发7、防御5仍待证明。

直接来源：[Databox](https://www.producthunt.com/products/databox)、[Statable](https://www.producthunt.com/products/statable-analytics)、[Netter](https://www.ycombinator.com/companies/netter)、[univer](https://github.com/dream-num/univer)。

**主要风险：**客户可能已在既有BI中定义好指标；正确计算也不证明营销归因或因果，不能将数据连接数视为价值。

**两周实验：**两周访谈5位有周期报表任务的运营，找3份历史报表复算同一指标，记录口径争议与解决分钟数；报价假设每包300美元。

**停止条件：**不足2家存在反复口径争议，或既有BI能在同等时间完成则停止，不先建设连接器平台。

**前20位客户路径：**从已有电商数据服务合同的代理寻找前20位报表负责人。

**可积累资产：**经业务签认的口径、例外和复算用例；新增聊天界面没有壁垒。

### 5.6 长任务断线与重试结果验收 — 65分

对断线、超时和重复提交明确已接收、已完成与结果未知，帮助工程负责人签认恢复行为。

**买家与付款人：**假设有长任务Agent工作流的小型SaaS工程负责人使用，CTO批准工程预算。

**窄MVP：**一个模拟外部工具、20个断线和重试用例；对任务ID、保存结果与用户可见状态做离线验收，未知结果先对账。

**证据与评分依据：**DASP公开草案提出持久会话和uncertain；作者动机与几条讨论尚非客户事故，需求12分。 YC多人AI命题与openrig、paperclip的长流程供给构成邻近共振，跨源11分；买家17、验证13，分发6、防御6来自可复用故障用例假设。

直接来源：[DASP](https://dasp-protocol.github.io/dasp/)、[DASP原帖](https://news.ycombinator.com/item?id=49877270)、[YC RFS](https://www.ycombinator.com/rfs)、[openrig](https://github.com/mvschwarz/openrig)、[paperclip](https://github.com/paperclipai/paperclip)。

**主要风险：**DASP没有生产host，不能作为成熟依赖；既有任务队列可能已解决问题，外部副作用无法仅靠协议保证一次执行。

**两周实验：**两周访谈3个已有长任务的团队，使用现有实现注入20种断线与重复提交，比较状态错误；报价假设每包400美元。

**停止条件：**没有真实失败轨迹、现有队列已经覆盖全部需求，或不足2家愿意付费则停止。

**前20位客户路径：**从实际运行长任务而非只演示聊天的团队寻找前20位工程负责人。

**可积累资产：**与业务副作用对应的故障注入、对账及人工裁定集；不先创造新协议或云平台。

## 6. 拥挤或暂不进入的方向

- **通用Agent监控、连接器和客服平台：**[vantage.ai](https://www.producthunt.com/products/vantage-ai-2)、[Databox](https://www.producthunt.com/products/databox)、[SaleSmartly](https://www.producthunt.com/products/salesmartly)已有供给。小团队优先用交付包测一个状态或指标，不先造完整平台。
- **把厂商基准当绝对安全承诺：**[OpenAPPA](https://www.openappa.com/)提出较强宣传；本期未复现。[Drop](https://droprun.sh/)隔离与[VibeDefend](https://www.producthunt.com/products/cybedefend)命令约束作用层不同，组合也不能直接宣称零泄露。
- **从零造新持久协议或编排云：**[DASP](https://dasp-protocol.github.io/dasp/)仍是草案，[paperclip](https://github.com/paperclipai/paperclip)、[openrig](https://github.com/mvschwarz/openrig)已有供给；先验证现有实现的故障行为。
- **泛化图表生成器：**[Reladraw](https://github.com/reladraw/reladraw)与[archify](https://github.com/tt-a1i/archify)形成工具供给，本期没有采购证据。图形表达可作为交付格式，但不单列创业机会。
- **电子纸硬件消费品牌、机器人芯片与自建产线：**[PaperMono](https://github.com/seamusc/papermono-shopping-list)是个人项目；[中国融资列表](https://pitchhub.36kr.com/financing-flash)显示资本流向。硬件库存、渠道、认证和售后需要单独验证，后两类明确资本密集。
- **解封承诺或绕过导出限制：**[Google评论](https://apps.shopify.com/google/reviews?ratings%5B%5D=1)和[Tidio回复](https://apps.shopify.com/tidio-chat/reviews?ratings%5B%5D=1)只能支持问题调查；不推荐规避政策、抓取受限数据或保证恢复账号。

## 7. 下一步实验与验收

以下全部为计划，本期未联系任何潜在客户、未执行客户系统操作。

1. 第1—3天先找库存和客服代理，确认最近一次问题、责任人和预算，索取经授权的脱敏历史材料；没有可签认结果就暂停。
2. 第4—7天在只读数据或测试环境人工交付；记录原流程耗时、有效发现、误报和客户驳回理由，与既有工具比较。
3. 第8—14天提出上述假设报价并取得明确接受或拒绝。口头好评不记订单，离线测试不记生产成效；按各机会停止条件决定是否开发。
4. 技术侧最多选权限或断线验收之一，冻结一套客户任务和规则后比较两种配置；避免同时铺开平台建设。
5. 下一期优先刷新近期低分评论、厂商后续回复，以及本期新发布是否出现独立买家的复用任务；旧投诉再次可见不自动涨分。

## 8. 访问限制与验证边界

- 浏览工具对Trending返回restricted URL内部错误，沙箱普通请求无法解析DNS；正常公开HTTP取得三窗200，无登录、验证码、签名或站点绕限。DASP浏览读取内部错误，普通HTTP得到公开草案。
- PH feed在浏览工具中因Atom类型不支持而失败，普通HTTP可读；PH时区与报告UTC不同。网页可能缓存，不能把汇总时刻当每个指标同时刷新。
- IT桔子普通请求返回412后停止；36氪详情显示安全检测后停止，列表两条已标低粒度。途见列表指向的微信原文也未读到正文，不冒充读过原始公告。
- YC主目录无正文，公开分类及公司页补足。Crunchbase使用公开原创采访和周报，未进入付费公司库。资本样本是全球来源中的精选，不是全球融资普查。
- 一星评论存在选择偏差、旧事件及重复文案；没有客户日志、因果验证、支付或留存证据。项目页面为第一方主张，未安装或执行代码。尤其不采信“绝对安全”、预测准确率或模型降本数字作为本报告实测。
- 校验只检查日期、结构、最低行数、排序和URL格式，不能自动确认网页事实或商业需求。仅修改本期报告、radar.json及README报告链接。

校验命令：`RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs`。结果：`Radar validation passed: 6 opportunities, 6 themes, 33 dataset rows`。另核对六维分数上限与加总、HN七日时间窗、10个不同仓库及三窗覆盖；检查修改范围仅含指定的三个文件。
