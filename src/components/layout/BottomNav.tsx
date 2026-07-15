import { NavLink } from 'react-router-dom'
import { useI18n } from '../../i18n/context'

const NAV_ITEMS = [
  { to: '/', icon: '🏠', key: 'navHome' as const },
  { to: '/cultures', icon: '🌍', key: 'navCultures' as const },
  { to: '/games', icon: '🎮', key: 'navGames' as const },
  { to: '/achievements', icon: '🏆', key: 'navAchievements' as const },
  { to: '/profile', icon: '👤', key: 'navProfile' as const },
]

export function BottomNav() {
  const { t } = useI18n()

  return (
    <nav className="bottom-nav glass border-t border-gray-200/50 dark:border-white/10">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto">
        {NAV_ITEMS.map(({ to, icon, key }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors min-w-0 ${
                isActive
                  ? 'text-coral-500'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="text-[10px] font-medium truncate">{t(key)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
