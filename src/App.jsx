import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Binoculars,
  Check,
  Clock,
  Copy,
  GithubLogo,
  MagnifyingGlass,
  Pulse,
  TrendUp,
  WarningCircle,
  X,
} from '@phosphor-icons/react'

const opportunities = [
  {
    rank: '01',
    score: 86,
    category: 'Agent 基础设施',
    title: 'Agent 产物验收与证据层',
    thesis: '让每次 Agent 交付都带来源、验证、成本、审批记录与可重放的 receipt。',
    buyer: '工程、法务、投研和内容生产团队',
    wedge: '从 PR 的运行时行为差异，或专业文档的逐行引用开始。',
    proof: ['GitHub Archify', 'Product Hunt PageIndex / Revalvo', 'Show HN RealDiff / Restoredrill'],
    risk: '通用评测容易被模型平台内置，必须进入正式审批或合规流程。',
    sources: [
      ['PageIndex', 'https://www.producthunt.com/products/pageindexai'],
      ['RealDiff', 'https://news.ycombinator.com/item?id=49464459'],
      ['Archify', 'https://github.com/tt-a1i/archify'],
    ],
  },
  {
    rank: '02',
    score: 83,
    category: 'AI FinOps',
    title: '模型额度与任务收益账本',
    thesis: '回答“额度花到哪里、哪些 Agent 真正完成了任务、什么时候该换模型”。',
    buyer: '同时使用 Claude、Codex、Gemini 的研发团队',
    wedge: '先读取本地会话日志，做零上传的 token 归因和异常诊断。',
    proof: ['Show HN Tare：76 points / 55 comments', 'Product Hunt Revalvo', 'GitHub 多模型路由持续上榜'],
    risk: '只展示 token 图表不够，需要连接结果质量、任务完成率和预算策略。',
    sources: [
      ['Tare', 'https://news.ycombinator.com/item?id=49467551'],
      ['Revalvo', 'https://www.producthunt.com/products/revalvo'],
    ],
  },
  {
    rank: '03',
    score: 83,
    category: 'Commerce',
    title: '电商目录质量与搜索守门员',
    thesis: '持续检查搜索相关性、缺货过滤、SKU 命中和多语言同义词，避免改版直接损伤转化。',
    buyer: 'SKU 较多的 Shopify 品牌和代理商',
    wedge: '每天跑真实买家查询，发现回归后给出可直接发布的规则修复。',
    proof: ['Shopify 官方搜索应用 2.7 分', '458 条评论中 19% 为一星', '近期评论直接报告无关结果和过滤限制'],
    risk: '平台依赖强；应把测试资产和诊断能力扩展到多个电商系统。',
    sources: [
      ['Shopify Search & Discovery', 'https://apps.shopify.com/search-and-discovery'],
    ],
  },
  {
    rank: '04',
    score: 80,
    category: 'Internal Tools',
    title: '企业“小软件云”',
    thesis: '让 Agent 临时做出的内部工具具备一键分享、权限、审计、数据库和生命周期管理。',
    buyer: '使用飞书或企业微信的 50—500 人团队',
    wedge: '先解决一个入口：表格加审批生成受控内部应用。',
    proof: ['YC Fall 2026 明确提出 A Cloud for Small Software', 'Product Hunt 持续出现 vibe automation', 'GitHub 本地优先 Agent 工作区上榜'],
    risk: '产品面很宽，第一版只能服务一种数据源、一种权限模型和一种部署方式。',
    sources: [
      ['YC RFS', 'https://www.ycombinator.com/rfs'],
      ['Product Hunt', 'https://www.producthunt.com/'],
    ],
  },
  {
    rank: '05',
    score: 80,
    category: 'Reliability',
    title: '持续恢复证明',
    thesis: '备份成功不等于可恢复；自动恢复到隔离环境、做完整性检查并留下审计证据。',
    buyer: '没有专职 SRE 的 SaaS、小型金融和医疗软件团队',
    wedge: 'Postgres 单数据库、对象存储备份、每周验证、失败告警。',
    proof: ['Show HN Restoredrill：44 points / 21 comments', '问题直接关联停机与合规风险', 'MVP 集成边界清晰'],
    risk: '不是新概念，胜负取决于安装成本、可信隔离和审计报告。',
    sources: [
      ['Restoredrill', 'https://news.ycombinator.com/item?id=49465291'],
    ],
  },
  {
    rank: '06',
    score: 76,
    category: 'Physical AI',
    title: '机器人部署与数据质量工具链',
    thesis: '不造整机，帮助机器人团队做传感器校准、现场回放、数据质量和异常定位。',
    buyer: '具身智能、工业机器人和特种作业团队',
    wedge: '选择一种传感器和一个现场工序，交付可重复的验收报告。',
    proof: ['YC 将 AI 进入物理世界列为最新主题', 'Dealroom 显示机器人和双用途方向升温', '国内机器人融资高度密集'],
    risk: '销售周期长且需要现场能力；不适合纯软件流量打法。',
    sources: [
      ['YC RFS', 'https://www.ycombinator.com/rfs'],
      ['Dealroom', 'https://dealroom.co/'],
      ['36氪机器人融资观察', 'https://www.36kr.com/p/3936247953898882'],
    ],
  },
]

const signals = [
  { source: 'Product Hunt', count: '18', note: '今日发布样本', type: '发布' },
  { source: 'Show HN', count: '100', note: '近七日项目样本', type: '技术' },
  { source: 'GitHub Trending', count: '51', note: '今日去重仓库', type: '开源' },
  { source: 'YC RFS', count: '03', note: '高相关最新命题', type: '投资' },
  { source: 'Shopify Reviews', count: '1,171', note: '两个问题应用评论', type: '需求' },
  { source: '36氪 / IT桔子', count: '06', note: '近期产业样本', type: '国内' },
]

const filters = ['全部', 'Agent 基础设施', 'AI FinOps', 'Commerce', 'Internal Tools', 'Reliability', 'Physical AI']

function ScoreRing({ score }) {
  return (
    <div className="relative grid size-20 shrink-0 place-items-center rounded-full border border-zinc-300 bg-[#f4f5f1]">
      <div
        className="absolute inset-1 rounded-full"
        style={{ background: `conic-gradient(#327a5b ${score * 3.6}deg, #d9ddd7 0deg)` }}
      />
      <div className="absolute inset-[7px] rounded-full bg-[#f4f5f1]" />
      <span className="relative font-mono text-xl font-semibold tracking-tight text-zinc-900">{score}</span>
    </div>
  )
}

function LoadingRows() {
  return (
    <div aria-label="正在整理信号" className="divide-y divide-zinc-200 border-y border-zinc-200">
      {[0, 1, 2].map((item) => (
        <div key={item} className="grid gap-6 py-8 md:grid-cols-[6rem_1fr_12rem]">
          <div className="skeleton h-20 w-20 rounded-full" />
          <div className="space-y-3">
            <div className="skeleton h-3 w-28 rounded" />
            <div className="skeleton h-8 max-w-md rounded" />
            <div className="skeleton h-4 max-w-xl rounded" />
          </div>
          <div className="skeleton h-10 w-full rounded" />
        </div>
      ))}
    </div>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('全部')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [copyState, setCopyState] = useState('idle')

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 460)
    return () => window.clearTimeout(timer)
  }, [])

  const visibleOpportunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return opportunities.filter((item) => {
      const matchesFilter = activeFilter === '全部' || item.category === activeFilter
      const haystack = `${item.title} ${item.thesis} ${item.buyer} ${item.category}`.toLowerCase()
      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery))
    })
  }, [activeFilter, query])

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 1800)
    } catch {
      setCopyState('error')
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#f4f5f1] text-zinc-900">
      <header className="border-b border-zinc-300/80">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="signal-mark" aria-hidden="true"><i /><i /><i /></span>
            STARTUP RADAR
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a className="nav-link hidden sm:inline-flex" href="#method">方法</a>
            <a className="nav-link hidden sm:inline-flex" href="#opportunities">机会</a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-[#f4f5f1] transition-transform active:scale-[0.98]"
              href="https://github.com/curiosityyy/github-trending-startup-research"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={17} weight="regular" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-14 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-7">
            <div className="reveal flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#327a5b]">
              <span className="live-dot" />
              Snapshot 2026.08.28 / 08:06 UTC
            </div>
            <h1 className="reveal mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              从热闹的新产品里，<br />找出值得验证的生意。
            </h1>
            <p className="reveal mt-7 max-w-[62ch] text-base leading-relaxed text-zinc-600 md:text-lg">
              不把点赞、Star 或融资当成需求。Startup Radar 交叉检查发布、技术讨论、资本主题和真实用户差评，只保留有明确买家与验证路径的机会。
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <a className="primary-action" href="#opportunities">
                查看今日机会 <ArrowDown size={17} weight="regular" />
              </a>
              <button className="secondary-action" onClick={copyAddress} type="button">
                {copyState === 'copied' ? <Check size={17} /> : <Copy size={17} />}
                {copyState === 'copied' ? '地址已复制' : '复制网站地址'}
              </button>
            </div>
            {copyState === 'error' && (
              <p className="mt-3 flex items-center gap-2 text-sm text-rose-700" role="alert">
                <WarningCircle size={17} /> 浏览器未允许复制，请直接复制地址栏。
              </p>
            )}
          </div>

          <aside className="reveal md:col-span-5 md:pt-4">
            <div className="border-l border-zinc-300 pl-6 md:ml-8 md:pl-8">
              <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">Signal intake</span>
                <Pulse className="text-[#327a5b]" size={19} weight="regular" />
              </div>
              <div className="divide-y divide-zinc-300/80">
                {signals.map((signal, index) => (
                  <div className="signal-row grid grid-cols-[1fr_auto] items-center gap-4 py-4" key={signal.source} style={{ '--delay': `${index * 70}ms` }}>
                    <div>
                      <p className="font-medium">{signal.source}</p>
                      <p className="mt-1 text-sm text-zinc-500">{signal.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xl font-semibold">{signal.count}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#327a5b]">{signal.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="border-y border-zinc-300 bg-zinc-900 text-zinc-100" id="method">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-12 md:px-8 md:py-16">
            <div className="md:col-span-4">
              <p className="section-kicker text-emerald-300">RADAR METHOD / 01</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">四层信号，逐层去伪。</h2>
            </div>
            <div className="grid gap-px border border-zinc-700 bg-zinc-700 md:col-span-8 md:grid-cols-2">
              {[
                ['01', '发布', 'Product Hunt、Show HN', '发现新概念和新的产品表达。'],
                ['02', '技术', 'GitHub Trending', '确认开发者是否正在主动采用。'],
                ['03', '资本', 'YC、Dealroom、36氪', '判断为什么是现在，以及供给是否拥挤。'],
                ['04', '需求', '应用商店评分与差评', '确认买家、损失和现有付费行为。'],
              ].map(([number, label, source, description]) => (
                <div className="bg-zinc-900 p-6 md:p-8" key={number}>
                  <span className="font-mono text-xs text-emerald-300">{number}</span>
                  <h3 className="mt-8 text-xl font-medium">{label}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500">{source}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-24" id="opportunities">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="section-kicker">OPPORTUNITY BOARD / 02</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">今天值得测试的六个方向</h2>
              <p className="mt-5 max-w-[60ch] leading-relaxed text-zinc-600">评分由需求证据、买家清晰度、跨源共振、两周可验证性、分发路径和防御性组成。它是研究优先级，不是市场规模预测。</p>
            </div>
            <div className="md:col-span-5">
              <label className="mb-2 block text-sm font-medium" htmlFor="opportunity-search">搜索机会</label>
              <div className="relative">
                <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  className="w-full rounded-xl border border-zinc-300 bg-transparent py-3 pl-11 pr-11 outline-none transition focus:border-[#327a5b] focus:ring-2 focus:ring-[#327a5b]/15"
                  id="opportunity-search"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="例如：电商、审计、Agent"
                  type="search"
                  value={query}
                />
                {query && (
                  <button aria-label="清空搜索" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 hover:bg-zinc-200" onClick={() => setQuery('')} type="button">
                    <X size={17} />
                  </button>
                )}
              </div>
              <p className="mt-2 text-xs text-zinc-500">搜索标题、买家、方向和问题描述。</p>
            </div>
          </div>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-3" aria-label="机会分类">
            {filters.map((filter) => (
              <button
                className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-5">
            {loading ? (
              <LoadingRows />
            ) : visibleOpportunities.length ? (
              <div className="divide-y divide-zinc-300 border-y border-zinc-300">
                {visibleOpportunities.map((item, index) => (
                  <article className="opportunity-row grid gap-7 py-9 md:grid-cols-[6rem_minmax(0,1.2fr)_minmax(18rem,.8fr)] md:py-12" key={item.rank} style={{ '--delay': `${index * 70}ms` }}>
                    <div>
                      <ScoreRing score={item.score} />
                      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Radar score</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#327a5b]">{item.rank}</span>
                        <span className="rounded-full border border-zinc-300 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">{item.category}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{item.title}</h3>
                      <p className="mt-4 max-w-[65ch] leading-relaxed text-zinc-600">{item.thesis}</p>
                      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">首批买家</dt>
                          <dd className="mt-2 leading-relaxed">{item.buyer}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">MVP 切口</dt>
                          <dd className="mt-2 leading-relaxed">{item.wedge}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="border-l border-zinc-300 pl-5">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#327a5b]">Evidence stack</p>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                        {item.proof.map((proof) => <li className="flex gap-2" key={proof}><span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-[#327a5b]" />{proof}</li>)}
                      </ul>
                      <p className="mt-6 border-t border-zinc-300 pt-4 text-sm leading-relaxed text-zinc-500"><strong className="font-medium text-zinc-700">主要风险：</strong>{item.risk}</p>
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {item.sources.map(([label, url]) => (
                          <a className="source-link" href={url} key={url} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={13} /></a>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="grid min-h-72 place-items-center border-y border-zinc-300 text-center">
                <div>
                  <Binoculars className="mx-auto text-zinc-400" size={42} weight="regular" />
                  <h3 className="mt-4 text-xl font-semibold">没有匹配的机会</h3>
                  <p className="mt-2 text-sm text-zinc-500">换一个关键词，或者清除分类筛选。</p>
                  <button className="secondary-action mt-5" onClick={() => { setQuery(''); setActiveFilter('全部') }} type="button">重置筛选</button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-zinc-300 bg-[#e8ebe5]">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-14 md:grid-cols-12 md:px-8 md:py-20">
            <div className="md:col-span-4">
              <p className="section-kicker">NEXT TEST / 03</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">先验证，不急着写代码。</h2>
            </div>
            <ol className="divide-y divide-zinc-400/50 border-y border-zinc-400/50 md:col-span-8">
              {[
                ['01', '访谈 10 位买家', '只问最近一次真实事故、现用流程、损失和预算，不展示宏大愿景。'],
                ['02', '手工交付一次', '用现成工具做出 receipt、搜索诊断或恢复证明，记录交付耗时。'],
                ['03', '收取试点费用', '目标不是注册数，而是至少两家愿意为连续使用付费。'],
              ].map(([number, title, text]) => (
                <li className="grid gap-4 py-6 sm:grid-cols-[3rem_12rem_1fr] sm:items-baseline" key={number}>
                  <span className="font-mono text-xs text-[#327a5b]">{number}</span>
                  <strong className="font-medium">{title}</strong>
                  <span className="text-sm leading-relaxed text-zinc-600">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3"><Clock size={17} /> 每日快照会变化，所有数字均保留日期。</div>
          <div className="flex flex-wrap gap-5">
            <a className="footer-link" href="https://github.com/curiosityyy/github-trending-startup-research/blob/main/docs/startup_radar_2026-08-28_zh.md" target="_blank" rel="noreferrer">完整报告</a>
            <a className="footer-link" href="https://github.com/curiosityyy/github-trending-startup-research/blob/main/docs/startup_radar_method_zh.md" target="_blank" rel="noreferrer">研究方法</a>
            <a className="footer-link" href="https://github.com/curiosityyy/github-trending-startup-research" target="_blank" rel="noreferrer">数据与历史</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
