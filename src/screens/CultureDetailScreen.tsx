import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { useProgressStore } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import {
  GreetingSection, CommonPhrasesSection, FoodSection, FestivalSection,
  LandmarkSection, EtiquetteSection, FunFactsSection,
  QuickStatsSection, MusicArtSection, BiasSection,
} from '../components/culture/CultureSections'
import type { Culture } from '../types/culture'
import { useEffect, useState } from 'react'

// Pre-register all culture imports so Vite/Rolldown can tree-shake properly
const cultureModules = import.meta.glob<Record<string, Culture>>('../data/cultures/*.ts', { eager: false })

export function CultureDetailScreen() {
  const { cultureId } = useParams<{ cultureId: string }>()
  const { t, lang } = useI18n()
  const recordVisit = useProgressStore((s) => s.recordCultureVisit)
  const addXP = useProgressStore((s) => s.addXP)
  const unlock = useAchievementStore((s) => s.unlock)
  const culturesVisited = useProgressStore((s) => s.culturesVisited)
  const unlocked = useAchievementStore((s) => s.unlocked)

  const [culture, setCulture] = useState<Culture | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!cultureId) return
    setLoading(true)
    setError(false)

    // Find the matching glob key
    const key = Object.keys(cultureModules).find(k => k.includes(`/${cultureId}.ts`))
    if (!key) {
      setError(true)
      setLoading(false)
      return
    }

    cultureModules[key]().then((mod) => {
      const c = mod[cultureId] as Culture | undefined
      if (c) {
        setCulture(c)
        recordVisit(c.id)
        addXP(10)
        setTimeout(() => {
          if (culturesVisited.length >= 4 && !unlocked.includes('explorer')) unlock('explorer')
          if (culturesVisited.length >= 14 && !unlocked.includes('scholar')) unlock('scholar')
        }, 100)
      } else {
        setError(true)
      }
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [cultureId])

  if (loading || error || !culture) {
    return (
      <div className="py-6 animate-fade-in px-4">
        <Link to="/cultures" className="text-coral-500 text-sm">{t('backBtn')}</Link>
        <div className="text-center py-20">
          <span className="text-6xl">{loading ? '🌍' : '🔍'}</span>
          <h1 className="text-xl font-bold font-fredoka mt-4 text-gray-700 dark:text-gray-200">
            {loading ? t('loading') : t('errorGeneric')}
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="py-4 pb-24 space-y-4 animate-fade-in">
      {/* Header */}
      <div className="text-center py-4">
        <Link to="/cultures" className="text-coral-500 text-sm float-left">{t('backBtn')}</Link>
        <span className="text-6xl block">{culture.flag}</span>
        <h1 className="text-3xl font-bold font-fredoka mt-2 text-gray-800 dark:text-gray-100">
          {culture.names[lang] ?? culture.names.en}
        </h1>
      </div>

      <GreetingSection greetings={culture.greetings} langCode={culture.langCode} lang={lang} />
      {culture.commonPhrases?.length > 0 && (
        <CommonPhrasesSection phrases={culture.commonPhrases} langCode={culture.langCode} lang={lang} />
      )}
      <QuickStatsSection stats={culture.quickStats} lang={lang} />
      {culture.food?.length > 0 && <FoodSection food={culture.food} lang={lang} />}
      {culture.festivals?.length > 0 && <FestivalSection festivals={culture.festivals} lang={lang} />}
      {culture.landmarks?.length > 0 && <LandmarkSection landmarks={culture.landmarks} lang={lang} />}
      <MusicArtSection items={culture.musicOrArt} lang={lang} />
      {culture.etiquette?.length > 0 && <EtiquetteSection etiquette={culture.etiquette} lang={lang} />}
      {culture.funFacts?.length > 0 && <FunFactsSection funFacts={culture.funFacts} lang={lang} />}
      <BiasSection biases={culture.biases} lang={lang} />
    </div>
  )
}
