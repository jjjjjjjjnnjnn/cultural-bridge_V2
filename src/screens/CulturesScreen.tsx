import { useState, useMemo } from 'react'
import { useI18n } from '../i18n/context'
import { CULTURE_META, CULTURES_BY_REGION } from '../data/cultures/index'
import { REGIONS } from '../data/regions'
import { CultureCard } from '../components/culture/CultureCard'
import type { RegionId } from '../types/culture'

export function CulturesScreen() {
  const { t, lang } = useI18n()
  const [search, setSearch] = useState('')
  const [regionFilter, setRegionFilter] = useState<RegionId | 'all'>('all')

  const filtered = useMemo(() => {
    let list = CULTURE_META
    if (regionFilter !== 'all') {
      const ids = CULTURES_BY_REGION[regionFilter] ?? []
      list = list.filter((c) => ids.includes(c.id))
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((c) =>
        Object.values(c.name).some((n: string) => n.toLowerCase().includes(q)) ||
        c.id.toLowerCase().includes(q)
      )
    }
    return list
  }, [search, regionFilter])

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold font-fredoka">{t('culturesTitle')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm -mt-2">{t('culturesDesc')}</p>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t('searchPlaceholder')}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-cool-800 text-sm focus:outline-none focus:border-coral-400"
      />

      {/* Region filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setRegionFilter('all')}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            regionFilter === 'all'
              ? 'bg-coral-500 text-white'
              : 'bg-gray-100 dark:bg-cool-800 text-gray-500'
          }`}
        >
          {t('filterAll')}
        </button>
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegionFilter(r.id)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              regionFilter === r.id
                ? 'bg-coral-500 text-white'
                : 'bg-gray-100 dark:bg-cool-800 text-gray-500'
            }`}
          >
            {r.emoji} {r.name[lang] ?? r.name.en}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((c) => (
          <CultureCard
            key={c.id}
            culture={{
              id: c.id,
              flag: c.flag,
              names: c.name as unknown as { en: string } & Record<string, string>,
              region: c.region as RegionId,
              langCode: c.langCode,
              greetings: [], commonPhrases: [], food: [], festivals: [],
              landmarks: [], etiquette: [], funFacts: [], biases: [],
              quickStats: [], musicOrArt: [],
            }}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-8">{t('errorGeneric')}</p>
      )}
    </div>
  )
}
