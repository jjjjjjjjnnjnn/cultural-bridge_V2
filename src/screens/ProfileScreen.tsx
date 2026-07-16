import { useI18n } from '../i18n/context'
import { useProgressStore, getLevelProgress } from '../stores/progress-store'
import { useAchievementStore } from '../stores/achievement-store'
import { useSettingsStore } from '../stores/settings-store'
import { ACHIEVEMENT_DEFS } from '../data/achievements'
import { calcLevel, getBadgeForLevel, AVATARS } from '../data/levels'
import { useMemo } from 'react'
import type { Lang } from '../types/culture'

export function ProfileScreen() {
  const { t, lang } = useI18n()
  const xp = useProgressStore((s) => s.xp)
  const totalGamesPlayed = useProgressStore((s) => s.totalGamesPlayed)
  const culturesVisited = useProgressStore((s) => s.culturesVisited)
  const bestStreak = useProgressStore((s) => s.bestStreak)
  const totalBiasesViewed = useProgressStore((s) => s.totalBiasesViewed)
  const unlocked = useAchievementStore((s) => s.unlocked)
  const resetProgress = useProgressStore((s) => s.resetProgress)
  const resetAchievements = useAchievementStore((s) => s.reset)

  const selectedAvatar = useSettingsStore((s) => s.selectedAvatar)
  const unlockedAvatars = useSettingsStore((s) => s.unlockedAvatars)
  const buyAvatar = useSettingsStore((s) => s.buyAvatar)
  const selectAvatar = useSettingsStore((s) => s.selectAvatar)
  const expertMode = useSettingsStore((s) => s.expertMode)
  const toggleExpertMode = useSettingsStore((s) => s.toggleExpertMode)

  const level = calcLevel(xp)
  const badge = getBadgeForLevel(level)
  const nextBadge = getBadgeForLevel(level + 1)
  const levelXp = (level - 1) * 100
  const nextLevelXp = level * 100
  const pct = Math.round(((xp - levelXp) / (nextLevelXp - levelXp)) * 100)

  const buyableAvatars = useMemo(() => AVATARS.filter(a => !unlockedAvatars.includes(a.id)), [unlockedAvatars])

  const handleReset = () => {
    if (confirm(t('resetConfirm'))) {
      resetProgress()
      resetAchievements()
    }
  }

  return (
    <div className="py-5 space-y-4 animate-fade-in">
      {/* Level Badge Hero */}
      <div className="text-center py-6 px-4 rounded-2xl bg-gradient-to-br from-coral-50 via-purple-50 to-teal-50 dark:from-coral-500/10 dark:via-purple-500/10 dark:to-teal-500/10">
        <div className="relative inline-block">
          <span className="text-6xl block">{badge.icon}</span>
          <div className="absolute -top-1 -right-2 w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">{level}</span>
          </div>
        </div>
        <h1 className="text-lg font-bold font-fredoka mt-2 gradient-text">{badge.title[lang] ?? badge.title.en}</h1>
        <p className="text-xs text-gray-400 mt-1">{xp} XP</p>

        {/* XP bar */}
        <div className="mt-3 max-w-xs mx-auto">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>Level {level}</span>
            <span>{xp - levelXp}/{nextLevelXp - levelXp} XP to Level {level + 1}</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-coral-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { emoji: '🎮', label: t('profileGamesPlayed'), value: totalGamesPlayed },
          { emoji: '🌍', label: t('profileCulturesVisited'), value: culturesVisited.length },
          { emoji: '🏆', label: t('profileAchievements'), value: `${unlocked.length}/${ACHIEVEMENT_DEFS.length}` },
          { emoji: '🔥', label: t('profileBestStreak'), value: bestStreak },
          { emoji: '💡', label: t('profileBiasesLearned'), value: totalBiasesViewed },
          { emoji: '⭐', label: 'Next Badge', value: `${nextBadge.icon} ${nextBadge.title[lang] ?? nextBadge.title.en}` },
        ].map((s, i) => (
          <div key={i} className="card p-3 flex items-center gap-3">
            <span className="text-2xl">{s.emoji}</span>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{s.value}</p>
              <p className="text-[10px] text-gray-400 uppercase">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Avatar Shop */}
      <section className="card">
        <h2 className="text-base font-bold font-fredoka flex items-center gap-2 mb-3">
          🛍️ Avatar Shop
          <span className="text-xs font-normal text-gray-400">({xp} XP available)</span>
        </h2>
        <div className="flex items-center gap-3 mb-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10">
          <span className="text-3xl">{AVATARS.find(a => a.id === selectedAvatar)?.emoji ?? '🌍'}</span>
          <div>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-200">Current Avatar</p>
            <p className="text-xs text-gray-400">{AVATARS.find(a => a.id === selectedAvatar)?.name[lang] ?? AVATARS.find(a => a.id === selectedAvatar)?.name.en}</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {AVATARS.map((a) => {
            const owned = unlockedAvatars.includes(a.id)
            const canBuy = xp >= a.cost && !owned
            return (
              <button
                key={a.id}
                onClick={() => {
                  if (owned) selectAvatar(a.id)
                  else if (canBuy && confirm(`Buy "${a.name[lang] ?? a.name.en}" for ${a.cost} XP?`)) {
                    buyAvatar(a.id)
                    selectAvatar(a.id)
                  }
                }}
                disabled={!owned && !canBuy}
                className={`p-2 rounded-xl text-center transition-all ${
                  selectedAvatar === a.id
                    ? 'bg-coral-100 dark:bg-coral-500/20 ring-2 ring-coral-400 scale-110'
                    : owned
                      ? 'bg-gray-50 dark:bg-cool-800 hover:bg-coral-50'
                      : canBuy
                        ? 'bg-gray-50 dark:bg-cool-800 opacity-70'
                        : 'bg-gray-100 dark:bg-cool-900 opacity-30'
                }`}
                title={`${a.name[lang] ?? a.name.en}${!owned ? ` — ${a.cost} XP` : ''}`}
              >
                <span className="text-xl block">{a.emoji}</span>
                {!owned && <span className="text-[8px] text-coral-500 font-bold block">{a.cost}</span>}
                {owned && selectedAvatar !== a.id && <span className="text-[8px] text-green-500 block">✓</span>}
              </button>
            )
          })}
        </div>
      </section>

      {/* Expert Mode */}
      <section className="card flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold font-fredoka">⚡ Expert Mode</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {level >= 5
              ? 'Harder questions, 2x XP rewards'
              : `Unlocks at Level 5 (${500 - xp > 0 ? `${500 - xp} XP to go` : 'available now!'})`}
          </p>
        </div>
        <button
          onClick={level >= 5 ? toggleExpertMode : undefined}
          className={`w-14 h-7 rounded-full transition-colors relative ${level >= 5 ? (expertMode ? 'bg-purple-500' : 'bg-gray-300') : 'bg-gray-200 cursor-not-allowed'}`}
        >
          <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 shadow transition-transform ${expertMode ? 'translate-x-7' : 'translate-x-0.5'}`} />
        </button>
      </section>

      {/* Settings */}
      <section className="card space-y-3">
        <h2 className="text-base font-bold font-fredoka">{t('settingsTitle')}</h2>

        <div className="flex items-center justify-between">
          <span className="text-sm">{t('soundLabel')}</span>
          <button onClick={useSettingsStore.getState().toggleSound} className={`w-12 h-6 rounded-full transition-colors relative ${useSettingsStore.getState().soundEnabled ? 'bg-coral-500' : 'bg-gray-300'}`}>
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${useSettingsStore.getState().soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>
      </section>

      {/* Reset */}
      <button onClick={handleReset} className="w-full py-3 text-sm text-red-400 border border-red-200 dark:border-red-500/30 rounded-xl active:bg-red-50 transition-colors">
        {t('resetProgress')}
      </button>
    </div>
  )
}
