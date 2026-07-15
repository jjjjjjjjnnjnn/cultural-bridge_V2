import { Link, Outlet } from 'react-router-dom'
import { useI18n } from '../../i18n/context'
import { useSettingsStore } from '../../stores/settings-store'
import { SUPPORTED_LANGS, LANG_FLAGS, type Lang } from '../../types/culture'
import { ChevronDown } from 'lucide-react'

export function AppShell() {
  const { t, lang, setLang: setI18nLang } = useI18n()
  const theme = useSettingsStore((s) => s.theme)
  const setTheme = useSettingsStore((s) => s.setTheme)

  const handleLangChange = (newLang: Lang) => {
    setI18nLang(newLang)
  }

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto">
      {/* Header — Apple-style clean bar */}
      <header className="sticky top-0 z-40 px-5 py-4 flex items-center justify-between
        bg-white/80 dark:bg-cool-900/80 backdrop-blur-xl backdrop-saturate-150
        border-b border-black/5 dark:border-white/5">

        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🌍</span>
          <span className="font-fredoka font-bold text-lg text-gray-900 dark:text-white">
            Cultural Bridge
          </span>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language selector — hot switch */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm
              bg-gray-50 dark:bg-cool-800 hover:bg-gray-100 dark:hover:bg-cool-700
              transition-colors font-medium text-gray-600 dark:text-gray-300">
              <span>{LANG_FLAGS[lang]}</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-40 rounded-xl
              bg-white dark:bg-cool-800 shadow-xl border border-black/5 dark:border-white/10
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200 py-1 z-50">
              {SUPPORTED_LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left
                    hover:bg-gray-50 dark:hover:bg-cool-700 transition-colors
                    ${l === lang ? 'text-coral-500 font-semibold' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  <span>{LANG_FLAGS[l]}</span>
                  <span>{t(`lang${l.charAt(0).toUpperCase() + l.slice(1)}` as any)}</span>
                  {l === lang && <span className="ml-auto text-coral-500">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : 'system')}
            className="w-9 h-9 rounded-full flex items-center justify-center
              bg-gray-50 dark:bg-cool-800 hover:bg-gray-100 dark:hover:bg-cool-700 transition-colors text-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-5 pb-24 safe-bottom">
        <Outlet />
      </main>

      {/* Bottom nav — ultra minimal */}
      <nav className="fixed bottom-0 left-0 right-0 z-40
        bg-white/80 dark:bg-cool-900/80 backdrop-blur-xl backdrop-saturate-150
        border-t border-black/5 dark:border-white/5 safe-bottom">
        <div className="flex items-center justify-around h-16 max-w-4xl mx-auto px-4">
          {[
            { to: '/', icon: '🌍', label: t('navHome') },
            { to: '/cultures', icon: '🏛️', label: t('navCultures') },
            { to: '/games', icon: '🎮', label: t('navGames') },
            { to: '/profile', icon: '👤', label: t('navProfile') },
          ].map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-0.5 px-3 py-1 min-w-0
                text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-[10px] font-medium truncate">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
