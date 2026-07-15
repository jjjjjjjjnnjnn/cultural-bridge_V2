import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { GAME_DEFS } from '../data/games'

export function GamesScreen() {
  const { t, lang } = useI18n()

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold font-fredoka">{t('gamesTitle')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm -mt-2">{t('gamesDesc')}</p>

      <div className="grid grid-cols-1 gap-3">
        {GAME_DEFS.map((g) => (
          <Link
            key={g.id}
            to={`/game/${g.id}`}
            className="card flex items-center gap-4 p-5 active:scale-[0.98] transition-transform no-underline"
            style={{ borderTop: `4px solid ${g.color}` }}
          >
            <span className="text-4xl shrink-0">{g.icon}</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold font-fredoka text-gray-800 dark:text-gray-100">
                {g.name[lang] ?? g.name.en}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {g.desc[lang] ?? g.desc.en}
              </p>
              <p className="text-xs text-gray-400 mt-1">{g.playerCount}</p>
            </div>
            <span className="text-gray-300 dark:text-gray-600 text-lg">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
