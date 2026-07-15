import { useI18n } from '../i18n/context'
import { useProgressStore, getLevel, getLevelProgress, RANK_NAMES } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import { ACHIEVEMENT_DEFS } from '../data/achievements'
import { useSettingsStore } from '../stores/settings-store'


export function ProfileScreen() {
  const { t } = useI18n()
  const xp = useProgressStore((s) => s.xp)
  const totalGamesPlayed = useProgressStore((s) => s.totalGamesPlayed)
  const culturesVisited = useProgressStore((s) => s.culturesVisited)
  const bestStreak = useProgressStore((s) => s.bestStreak)
  const totalBiasesViewed = useProgressStore((s) => s.totalBiasesViewed)
  const unlocked = useAchievementStore((s) => s.unlocked)
  const resetProgress = useProgressStore((s) => s.resetProgress)
  const resetAchievements = useAchievementStore((s) => s.reset)
  const theme = useSettingsStore((s) => s.theme)
  const setTheme = useSettingsStore((s) => s.setTheme)
  const soundEnabled = useSettingsStore((s) => s.soundEnabled)
  const toggleSound = useSettingsStore((s) => s.toggleSound)

  const level = getLevel(xp)
  const { pct } = getLevelProgress(xp)
  const rankKey = RANK_NAMES[Math.min(level, 9)] ?? 'levelTraveler'

  const handleReset = () => {
    if (confirm(t('resetConfirm'))) {
      resetProgress()
      resetAchievements()
    }
  }

  return (
    <div className="py-5 space-y-4 animate-fade-in pb-24">
      <h1 className="text-2xl font-bold font-fredoka">{t('profileTitle')}</h1>

      {/* Level Card */}
      <div className="card p-5 text-center bg-gradient-to-br from-coral-50 to-purple-50 dark:from-coral-500/10 dark:to-purple-500/10">
        <div className="relative w-24 h-24 mx-auto">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-200 dark:text-gray-700" />
            <circle
              cx="50" cy="50" r="42" fill="none" stroke="url(#grad)" strokeWidth="6"
              strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
              className="transition-all duration-700"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold font-fredoka gradient-text">{level}</span>
            <span className="text-[10px] text-gray-400">LVL</span>
          </div>
        </div>
        <p className="mt-2 font-semibold text-gray-700 dark:text-gray-200">{(t as any)(rankKey)}</p>
        <p className="text-xs text-gray-400">{xp} XP</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard emoji="🎮" label={t('profileGamesPlayed')} value={totalGamesPlayed} />
        <StatCard emoji="🌍" label={t('profileCulturesVisited')} value={culturesVisited.length} />
        <StatCard emoji="🏆" label={t('profileAchievements')} value={`${unlocked.length}/${ACHIEVEMENT_DEFS.length}`} />
        <StatCard emoji="🔥" label={t('profileBestStreak')} value={bestStreak} />
        <StatCard emoji="💡" label={t('profileBiasesLearned')} value={totalBiasesViewed} />
      </div>

      {/* Settings */}
      <section className="card space-y-3">
        <h2 className="text-lg font-bold font-fredoka">{t('settingsTitle')}</h2>

        {/* Theme */}
        <div className="flex items-center justify-between">
          <span className="text-sm">{t('darkModeLabel')}</span>
          <div className="flex gap-1 bg-gray-100 dark:bg-cool-900 rounded-full p-0.5">
            {(['light', 'dark', 'system'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setTheme(mode)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  theme === mode ? 'bg-white dark:bg-cool-700 shadow-sm text-coral-500 font-semibold' : 'text-gray-500'
                }`}
              >
                {mode === 'light' ? '☀️' : mode === 'dark' ? '🌙' : '💻'}
              </button>
            ))}
          </div>
        </div>

        {/* Sound */}
        <div className="flex items-center justify-between">
          <span className="text-sm">{t('soundLabel')}</span>
          <button
            onClick={toggleSound}
            className={`w-12 h-6 rounded-full transition-colors relative ${
              soundEnabled ? 'bg-coral-500' : 'bg-gray-300'
            }`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
              soundEnabled ? 'translate-x-6' : 'translate-x-0.5'
            }`} />
          </button>
        </div>
      </section>

      {/* Reset */}
      <button
        onClick={handleReset}
        className="w-full py-3 text-sm text-red-400 border border-red-200 dark:border-red-500/30 rounded-xl active:bg-red-50 transition-colors"
      >
        {t('resetProgress')}
      </button>
    </div>
  )
}

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: string | number }) {
  return (
    <div className="card p-3 flex items-center gap-3">
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{value}</p>
        <p className="text-[10px] text-gray-400 uppercase">{label}</p>
      </div>
    </div>
  )
}
