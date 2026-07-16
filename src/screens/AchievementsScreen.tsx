import { useI18n } from '../i18n/context'
import { useAchievementStore } from '../stores/achievement-store'
import { useProgressStore, getLevel } from '../stores/progress-store'
import { ACHIEVEMENT_DEFS } from '../data/achievements'
import { motion } from 'framer-motion'

export function AchievementsScreen() {
  const { t, lang } = useI18n()
  const unlocked = useAchievementStore((s) => s.unlocked)
  const unlockedAt = useAchievementStore((s) => s.unlockedAt)
  const xp = useProgressStore((s) => s.xp)
  const unlockedSet = new Set(unlocked)

  const count = unlocked.length
  const total = ACHIEVEMENT_DEFS.length
  const pct = Math.round((count / total) * 100)
  const level = getLevel(xp)

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      <h1 className="text-2xl font-bold font-fredoka">{t('achievementsTitle')}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm -mt-2">{t('achievementsDesc')}</p>

      {/* Progress card */}
      <div className="card p-5 bg-gradient-to-br from-coral-50 to-purple-50 dark:from-coral-500/10 dark:to-purple-500/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{t('progressLabel')}</span>
          <span className="text-lg font-bold gradient-text">{count}/{total}</span>
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-coral-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">{t('profileLevel')} {level} · {xp} {t('xpAbbreviation')}</p>
      </div>

      {/* Achievement grid */}
      <div className="grid grid-cols-2 gap-3">
        {ACHIEVEMENT_DEFS.map((a) => {
          const isUnlocked = unlockedSet.has(a.id)
          const unlockTime = unlockedAt[a.id]
          const dateStr = unlockTime ? new Date(unlockTime).toLocaleDateString() : null
          return (
            <motion.div
              key={a.id}
              className={`rounded-2xl p-4 transition-all duration-300 ${
                isUnlocked
                  ? 'bg-white dark:bg-cool-800 border-2 border-coral-200 dark:border-coral-500/30 shadow-md'
                  : 'bg-gray-50 dark:bg-cool-800/50 border-2 border-dashed border-gray-200 dark:border-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-3">
                <span className={`text-3xl ${isUnlocked ? '' : 'opacity-30'} shrink-0`}>
                  {isUnlocked ? a.icon : '🔒'}
                </span>
                <div className="min-w-0">
                  <p className={`text-sm font-bold font-fredoka ${isUnlocked ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400'}`}>
                    {a.name[lang] ?? a.name.en}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">
                    {a.hidden && !isUnlocked ? '???' : (a.desc[lang] ?? a.desc.en)}
                  </p>
                  {dateStr && (
                    <p className="text-[10px] text-coral-400 mt-1">
                      {t('unlockedDate').replace('{date}', dateStr)}
                    </p>
                  )}
                </div>
              </div>
              {isUnlocked && (
                <motion.div
                  className="mt-2 w-full h-1 rounded-full bg-gradient-to-r from-coral-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
