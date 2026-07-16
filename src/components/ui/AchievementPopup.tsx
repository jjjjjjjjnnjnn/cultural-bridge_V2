import { useAchievementStore } from '../../stores/achievement-store'
import { useEffect } from 'react'
import { ACHIEVEMENT_DEFS } from '../../data/achievements'
import { useI18n } from '../../i18n/context'

export function AchievementPopup() {
  const { t } = useI18n()
  const toastQueue = useAchievementStore((s) => s.toastQueue)
  const dismiss = useAchievementStore((s) => s.dismissToast)

  const current = toastQueue[0]

  useEffect(() => {
    if (current) {
      const timer = setTimeout(dismiss, 3500)
      return () => clearTimeout(timer)
    }
  }, [current, dismiss])

  if (!current) return null

  const def = ACHIEVEMENT_DEFS.find((a) => a.id === current)
  if (!def) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-coral-200">
        <span className="text-3xl">{def.icon}</span>
        <div>
          <p className="text-xs text-coral-500 font-semibold uppercase tracking-wide">{t('achievementUnlocked')}</p>
          <p className="text-sm font-bold">{def.name.en}</p>
        </div>
      </div>
    </div>
  )
}
