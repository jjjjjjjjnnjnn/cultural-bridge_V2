import { useI18n } from '../i18n/context'
import { CULTURE_META } from '../data/cultures/index'
import { GAME_DEFS } from '../data/games'
import { Link } from 'react-router-dom'
import { CultureCard } from '../components/culture/CultureCard'
import type { RegionId } from '../types/culture'
import type { Lang } from '../types/culture'

export function HomeScreen() {
  const { t, lang } = useI18n()

  const featuredCultures = CULTURE_META.slice(0, 6)
  const featuredGames = GAME_DEFS.slice(0, 4)

  return (
    <div className="py-5 space-y-6 animate-fade-in pb-4">
      {/* Hero */}
      <div className="text-center py-6">
        <span className="text-6xl animate-float block">🌍</span>
        <h1 className="mt-4 text-3xl font-bold font-fredoka">
          <span className="gradient-text">{t('heroTitle1')}</span>
          <br />
          <span className="gradient-text">{t('heroTitle2')}</span>
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto">
          {t('heroDesc')}
        </p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <a
            href="#/cultures"
            className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-400 text-white font-semibold rounded-full shadow-lg active:scale-95 transition-transform text-sm"
          >
            {t('btnExplore')}
          </a>
          <a
            href="#/games"
            className="px-6 py-3 bg-white dark:bg-cool-800 text-coral-500 font-semibold rounded-full shadow-md active:scale-95 transition-transform border border-coral-200 dark:border-coral-500/30 text-sm"
          >
            {t('btnPlay')}
          </a>
        </div>
      </div>

      {/* Featured Cultures */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold font-fredoka">{t('sectionCultures')}</h2>
          <Link to="/cultures" className="text-sm text-coral-500 font-medium">{t('sectionSeeAll')}</Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {featuredCultures.map((c) => (
            <CultureCard
              key={c.id}
              culture={{
                id: c.id, flag: c.flag, names: c.name, region: c.region as RegionId,
                langCode: c.langCode, greetings: [], commonPhrases: [], food: [],
                festivals: [], landmarks: [], etiquette: [], funFacts: [], biases: [],
                quickStats: [], musicOrArt: [],
              }}
            />
          ))}
        </div>
      </section>

      {/* Daily Fact */}
      <div className="card p-4 bg-gradient-to-r from-teal-50 to-purple-50 dark:from-teal-500/10 dark:to-purple-500/10 border-l-4 border-l-teal-400">
        <p className="text-xs text-teal-500 font-semibold uppercase tracking-wide">{t('sectionDailyFact')}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Did you know? There are over 7,000 living languages in the world — but more than half have fewer than 10,000 speakers.
        </p>
      </div>

      {/* Featured Games */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold font-fredoka">{t('sectionGames')}</h2>
          <Link to="/games" className="text-sm text-coral-500 font-medium">{t('sectionSeeAll')}</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredGames.map((g) => (
            <Link
              key={g.id}
              to={`/game/${g.id}`}
              className="card flex flex-col items-center text-center p-4 active:scale-95 transition-transform no-underline gap-2"
              style={{ borderTop: `4px solid ${g.color}` }}
            >
              <span className="text-3xl">{g.icon}</span>
              <p className="text-sm font-semibold font-fredoka text-gray-800 dark:text-gray-100">
                {g.name[lang] ?? g.name.en}
              </p>
              <p className="text-xs text-gray-400 line-clamp-2">
                {g.desc[lang] ?? g.desc.en}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
