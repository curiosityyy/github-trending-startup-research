import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  ChartBar,
  Code,
  Database,
  GithubLogo,
  MagnifyingGlass,
  RocketLaunch,
  Storefront,
  TrendUp,
  X,
} from '@phosphor-icons/react'

const datasetDefinitions = [
  { key: 'launches', label: '产品发布', shortLabel: '发布', icon: RocketLaunch },
  { key: 'technical', label: '技术社区', shortLabel: '技术', icon: Code },
  { key: 'github', label: 'GitHub 项目', shortLabel: '开源', icon: GithubLogo },
  { key: 'market', label: '市场与融资', shortLabel: '市场', icon: TrendUp },
  { key: 'pain', label: '用户痛点', shortLabel: '需求', icon: Storefront },
]

function DatasetRow({ item, index }) {
  return (
    <a
      className="data-row grid gap-3 border-b border-zinc-300 py-5 transition-colors hover:bg-white/50 md:grid-cols-[minmax(12rem,1fr)_10rem_13rem_minmax(18rem,1.4fr)_2rem] md:items-center md:px-4"
      href={item.url}
      rel="noreferrer"
      style={{ '--delay': `${index * 35}ms` }}
      target="_blank"
    >
      <div>
        <p className="font-medium tracking-tight text-zinc-900">{item.name}</p>
        <p className="mt-1 text-xs text-zinc-500 md:hidden">{item.source}</p>
      </div>
      <p className="hidden text-sm text-zinc-500 md:block">{item.source}</p>
      <div>
        <p className="font-mono text-xs text-zinc-700">{item.metric}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#327a5b]">{item.category}</p>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{item.signal}</p>
      <ArrowUpRight className="hidden text-zinc-400 md:block" size={16} />
    </a>
  )
}

function DataExplorer({ radar }) {
  const [activeDataset, setActiveDataset] = useState('all')
  const [query, setQuery] = useState('')

  const totalRows = datasetDefinitions.reduce((total, item) => total + radar.datasets[item.key].length, 0)
  const visibleDatasets = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return datasetDefinitions
      .filter((definition) => activeDataset === 'all' || definition.key === activeDataset)
      .map((definition) => ({
        ...definition,
        rows: radar.datasets[definition.key].filter((item) => {
          if (!normalized) return true
          return Object.values(item).join(' ').toLowerCase().includes(normalized)
        }),
      }))
      .filter((definition) => definition.rows.length)
  }, [activeDataset, query, radar.datasets])

  return (
    <main id="top">
      <section className="border-b border-zinc-300 bg-zinc-900 text-zinc-100">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="section-kicker text-emerald-300">DATA EXPLORER / {radar.meta.date}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">数据全景，不只看结论。</h1>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-zinc-400">
              展开查看每个创业判断背后的发布、讨论、开源、资本和用户痛点。所有数据保留来源和快照语境，方便继续追踪，而不是把一日热度误判成长期需求。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px border border-zinc-700 bg-zinc-700 md:col-span-5">
            <div className="bg-zinc-900 p-6">
              <p className="font-mono text-3xl font-semibold text-zinc-100">{totalRows}</p>
              <p className="mt-2 text-xs text-zinc-500">结构化观察</p>
            </div>
            <div className="bg-zinc-900 p-6">
              <p className="font-mono text-3xl font-semibold text-zinc-100">{radar.themes.length}</p>
              <p className="mt-2 text-xs text-zinc-500">交叉主题</p>
            </div>
            <div className="bg-zinc-900 p-6">
              <p className="font-mono text-3xl font-semibold text-zinc-100">{radar.signals.length}</p>
              <p className="mt-2 text-xs text-zinc-500">信号来源</p>
            </div>
            <div className="bg-zinc-900 p-6">
              <p className="font-mono text-3xl font-semibold text-zinc-100">{radar.opportunities.length}</p>
              <p className="mt-2 text-xs text-zinc-500">优先机会</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-kicker">THEME MAP / 01</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">跨来源主题</h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-zinc-600">主题只有在多个独立来源重复出现，或存在直接用户损失时才进入这里。</p>
          </div>
          <div className="divide-y divide-zinc-300 border-y border-zinc-300 md:col-span-8">
            {radar.themes.map((theme, index) => (
              <article className="grid gap-5 py-6 sm:grid-cols-[1fr_8rem]" key={theme.name}>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-[#327a5b]">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg font-medium">{theme.name}</h3>
                    <span className="rounded-full border border-zinc-300 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{theme.status}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{theme.summary}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-zinc-400">{theme.sources.join(' / ')}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-sm font-medium text-[#327a5b]">{theme.evidence}</p>
                  <p className="mt-1 text-xs text-zinc-500">证据覆盖</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-300 bg-[#e8ebe5]">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="section-kicker">SOURCE LEDGER / 02</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">原始观察账本</h2>
              <p className="mt-4 max-w-[60ch] leading-relaxed text-zinc-600">点击任意一行回到来源。指标仅代表报告快照时点，不自动推导市场规模、收入或留存。</p>
            </div>
            <div className="md:col-span-5">
              <label className="mb-2 block text-sm font-medium" htmlFor="data-search">搜索全部数据</label>
              <div className="relative">
                <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  className="w-full rounded-xl border border-zinc-400/70 bg-transparent py-3 pl-11 pr-11 outline-none transition focus:border-[#327a5b] focus:ring-2 focus:ring-[#327a5b]/15"
                  id="data-search"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="项目、赛道、问题或来源"
                  type="search"
                  value={query}
                />
                {query && (
                  <button aria-label="清空搜索" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 hover:bg-zinc-200" onClick={() => setQuery('')} type="button">
                    <X size={17} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-3" aria-label="数据分类">
            <button className={`filter-chip ${activeDataset === 'all' ? 'filter-chip-active' : ''}`} onClick={() => setActiveDataset('all')} type="button">
              全部 {totalRows}
            </button>
            {datasetDefinitions.map((definition) => {
              const Icon = definition.icon
              return (
                <button className={`filter-chip inline-flex items-center gap-2 ${activeDataset === definition.key ? 'filter-chip-active' : ''}`} key={definition.key} onClick={() => setActiveDataset(definition.key)} type="button">
                  <Icon size={15} /> {definition.shortLabel} {radar.datasets[definition.key].length}
                </button>
              )
            })}
          </div>

          {visibleDatasets.length ? (
            <div className="mt-5 space-y-12">
              {visibleDatasets.map((dataset) => {
                const Icon = dataset.icon
                return (
                  <section key={dataset.key}>
                    <div className="flex items-center justify-between border-b border-zinc-400 pb-4">
                      <div className="flex items-center gap-3">
                        <Icon className="text-[#327a5b]" size={20} />
                        <h3 className="text-xl font-semibold tracking-tight">{dataset.label}</h3>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">{dataset.rows.length} rows</span>
                    </div>
                    <div className="hidden grid-cols-[minmax(12rem,1fr)_10rem_13rem_minmax(18rem,1.4fr)_2rem] gap-3 border-b border-zinc-300 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500 md:grid">
                      <span>对象</span><span>来源</span><span>快照指标</span><span>观察</span><span />
                    </div>
                    {dataset.rows.map((item, index) => <DatasetRow index={index} item={item} key={`${dataset.key}-${item.name}`} />)}
                  </section>
                )
              })}
            </div>
          ) : (
            <div className="mt-8 grid min-h-64 place-items-center border-y border-zinc-300 text-center">
              <div>
                <Database className="mx-auto text-zinc-400" size={42} />
                <h3 className="mt-4 text-xl font-semibold">没有匹配的数据</h3>
                <p className="mt-2 text-sm text-zinc-500">换一个关键词，或重置数据分类。</p>
                <button className="secondary-action mt-5" onClick={() => { setQuery(''); setActiveDataset('all') }} type="button">重置筛选</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-kicker">COVERAGE / 03</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">来源覆盖与边界</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px border border-zinc-300 bg-zinc-300 sm:grid-cols-2">
              {radar.signals.map((signal) => (
                <div className="bg-[#f4f5f1] p-6" key={signal.source}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-medium">{signal.source}</p>
                    <p className="font-mono text-xl font-semibold">{signal.count}</p>
                  </div>
                  <p className="mt-5 text-sm text-zinc-500">{signal.note}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#327a5b]">{signal.type}信号</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3 border-l-2 border-[#327a5b] pl-5 text-sm leading-relaxed text-zinc-600">
              <ChartBar className="mt-0.5 shrink-0 text-[#327a5b]" size={19} />
              <p>发布量、Star、points、融资和评论数量使用不同口径，不能横向相加。数据页负责保留观察，Opportunity Board 才负责在明确评分规则下做判断。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DataExplorer
