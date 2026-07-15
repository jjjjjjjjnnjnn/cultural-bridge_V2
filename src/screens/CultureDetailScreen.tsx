import { useParams, Link } from 'react-router-dom'
import { useI18n, getLocalized } from '../i18n/context'
import { useProgressStore } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import {
  GreetingSection, CommonPhrasesSection, FoodSection, FestivalSection,
  LandmarkSection, EtiquetteSection, FunFactsSection,
  QuickStatsSection, MusicArtSection, BiasSection,
} from '../components/culture/CultureSections'
import type { Culture } from '../types/culture'
import { useEffect, useState } from 'react'

// Dynamic culture loader
async function loadCulture(id: string): Promise<Culture | null> {
  try {
    const mod = await import(`../data/cultures/${id}.ts`)
    return mod[id] as Culture
  } catch {
    return null
  }
}

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

  useEffect(() => {
    if (!cultureId) return
    loadCulture(cultureId).then((c) => {
      if (c) {
        setCulture(c)
        recordVisit(c.id)
        addXP(10)
        if (culturesVisited.length >= 4 && !unlocked.includes('explorer')) unlock('explorer')
        if (culturesVisited.length >= 14 && !unlocked.includes('scholar')) unlock('scholar')
      } else {
        setError(true)
      }
    })
  }, [cultureId])

  if (error || !culture) {
    return (
      <div className="py-6 animate-fade-in">
        <Link to="/cultures" className="text-coral-500 text-sm">{t('backBtn')}</Link>
        <div className="text-center py-12">
          <span className="text-6xl">🔍</span>
          <h1 className="text-xl font-bold mt-4">{error ? t('errorGeneric') : t('loading')}</h1>
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
        <h1 className="text-3xl font-bold font-fredoka mt-2">
          {getLocalized(culture.names, lang)}
        </h1>
        <p className="text-gray-400 text-sm">{culture.region}</p>
      </div>

      {/* Greetings */}
      <GreetingSection greetings={culture.greetings} langCode={culture.langCode} lang={lang} />

      {/* Common Phrases */}
      {culture.commonPhrases?.length > 0 && (
        <CommonPhrasesSection phrases={culture.commonPhrases} langCode={culture.langCode} lang={lang} />
      )}

      {/* Quick Stats */}
      <QuickStatsSection stats={culture.quickStats} lang={lang} />

      {/* Food */}
      {culture.food?.length > 0 && <FoodSection food={culture.food} lang={lang} />}

      {/* Festivals */}
      {culture.festivals?.length > 0 && <FestivalSection festivals={culture.festivals} lang={lang} />}

      {/* Landmarks */}
      {culture.landmarks?.length > 0 && <LandmarkSection landmarks={culture.landmarks} lang={lang} />}

      {/* Music & Art */}
      <MusicArtSection items={culture.musicOrArt} lang={lang} />

      {/* Etiquette */}
      {culture.etiquette?.length > 0 && <EtiquetteSection etiquette={culture.etiquette} lang={lang} />}

      {/* Fun Facts */}
      {culture.funFacts?.length > 0 && <FunFactsSection funFacts={culture.funFacts} lang={lang} />}

      {/* Bias */}
      <BiasSection biases={culture.biases} lang={lang} />
    </div>
  )
}
