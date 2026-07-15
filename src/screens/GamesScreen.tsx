import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { GAME_DEFS } from '../data/games'
import { useProgressStore } from '../stores/progress-store'

export function GamesScreen() {
  const { t, lang } = useI18n()
  const totalGamesPlayed = useProgressStore((s) => s.totalGamesPlayed)

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold font-fredoka">{t('gamesTitle')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm -mt-2">
        {t('gamesDesc')}{' '}
        <span className="text-coral-500 font-semibold">{totalGamesPlayed} played</span>
      </p>

      {/* Duolingo-style path */}
      <div className="relative mt-6">
        {/* Path line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-coral-500 via-purple-400 to-teal-400 rounded-full" />

        <div className="space-y-6">
          {GAME_DEFS.map((g, idx) => (
            <Link
              key={g.id}
              to={`/game/${g.id}`}
              className="relative flex items-center gap-4 pl-20 group"
            >
              {/* Node on path */}
              <div
                className="absolute left-5 w-7 h-7 rounded-full border-4 border-white dark:border-cool-900 shadow-md z-10 transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: g.color }}
              />

              {/* Card */}
              <div
                className="card flex-1 flex items-center gap-4 p-4 group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300"
                style={{ borderLeft: `4px solid ${g.color}` }}
              >
                <span className="text-3xl shrink-0">{g.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold font-fredoka text-gray-800 dark:text-gray-100">
                    {g.name[lang] ?? g.name.en}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {g.desc[lang] ?? g.desc.en}
                  </p>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-lg text-gray-300 dark:text-gray-600 group-hover:text-coral-500 transition-colors">→</span>
                  {idx === 0 && <span className="text-[10px] text-coral-500 font-semibold">START</span>}
                  {idx === GAME_DEFS.length - 1 && <span className="text-[10px] text-purple-500 font-semibold">BOSS</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* End node */}
        <div className="absolute left-5 bottom-0 w-7 h-7 rounded-full bg-purple-400 border-4 border-white dark:border-cool-900 shadow-md z-10" />
      </div>
    </div>
  )
}
