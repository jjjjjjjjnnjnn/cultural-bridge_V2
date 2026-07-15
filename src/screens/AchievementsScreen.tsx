import { useI18n } from '../i18n/context'
import { useAchievementStore } from '../stores/achievement-store'
import { ACHIEVEMENT_DEFS } from '../data/achievements'
import type { Lang } from '../types/culture'

export function AchievementsScreen() {
  const { t, lang } = useI18n()
  const unlocked = useAchievementStore((s) => s.unlocked)
  const unlockedSet = new Set(unlocked)

  const count = unlocked.length
  const total = ACHIEVEMENT_DEFS.length
  const pct = Math.round((count / total) * 100)

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold font-fredoka">{t('achievementsTitle')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm -mt-2">{t('achievementsDesc')}</p>

      {/* Progress bar */}
      <div className="card p-4 flex items-center gap-3">
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold">{t('progressLabel')}</span>
            <span className="text-coral-500 font-bold">{count}/{total} ({pct}%)</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-cool-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-coral-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Achievement grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ACHIEVEMENT_DEFS.map((a) => {
          const isUnlocked = unlockedSet.has(a.id)
          return (
            <div
              key={a.id}
              className={`card p-4 text-center transition-all ${
                isUnlocked ? 'border border-coral-200 dark:border-coral-500/30' : 'opacity-50'
              }`}
            >
              <span className="text-4xl block">{isUnlocked ? a.icon : '🔒'}</span>
              <p className="mt-2 text-sm font-semibold font-fredoka text-gray-800 dark:text-gray-100">
                {a.name[lang] ?? a.name.en}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {a.hidden && !isUnlocked ? '???' : (a.desc[lang] ?? a.desc.en)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
