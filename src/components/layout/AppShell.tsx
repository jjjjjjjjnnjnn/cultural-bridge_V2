import { Link, Outlet } from 'react-router-dom'
import { useI18n } from '../../i18n/context'
import { useSettingsStore } from '../../stores/settings-store'
import { useProgressStore } from '../../stores/progress-store'
import { SUPPORTED_LANGS, LANG_FLAGS, type Lang } from '../../types/culture'
import { useState } from 'react'

export function AppShell() {
  const { t, lang, setLang: setI18nLang } = useI18n()
  const xp = useProgressStore((s) => s.xp)
  const streaks = useProgressStore((s) => s.streaks)
  const theme = useSettingsStore((s) => s.theme)
  const setTheme = useSettingsStore((s) => s.setTheme)
  const [showLang, setShowLang] = useState(false)

  const handleLangChange = (newLang: Lang) => {
    setI18nLang(newLang)
    setShowLang(false)
  }

  // Calculate consecutive streak
  const sorted = [...streaks].sort().reverse()
  let consecutive = 0
  const today = new Date().toISOString().split('T')[0]
  for (const d of sorted) {
    const expected = new Date(new Date(today).getTime() - consecutive * 86400000).toISOString().split('T')[0]
    if (d === expected) consecutive++
    else if (d < expected) break
  }

  const [activeTab, setActiveTab] = useState(window.location.hash.replace('#', '') || '/')

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto bg-[#FAFAFA] dark:bg-cool-900">
      {/* Duolingo-style Header Bar */}
      <header className="sticky top-0 z-40 bg-white dark:bg-cool-800 border-b-2 border-[#E5E5E5] dark:border-gray-700 shadow-sm">
        <div className="flex items-center justify-between px-4 h-[52px] max-w-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline" onClick={() => setActiveTab('/')}>
            <span className="text-2xl font-fredoka font-bold text-[#FF6B6B]">CB</span>
          </Link>

          {/* Right: Streak + XP + Lang + Theme */}
          <div className="flex items-center gap-3">
            {/* Streak */}
            <div className="flex items-center gap-1 text-sm font-bold text-[#FF9600]">
              <span>🔥</span>
              <span>{consecutive}</span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1 text-sm font-bold text-[#58CC02]">
              <span>⭐</span>
              <span>{xp}</span>
            </div>

            {/* Language toggle */}
            <div className="relative">
              <button
                onClick={() => setShowLang(!showLang)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold
                  bg-gray-100 dark:bg-cool-700 hover:bg-gray-200 dark:hover:bg-cool-600 transition-colors"
              >
                <span className="text-base">{LANG_FLAGS[lang]}</span>
              </button>

              {showLang && (
                <div className="absolute right-0 top-full mt-1 w-44 rounded-2xl
                  bg-white dark:bg-cool-800 shadow-xl border-2 border-[#E5E5E5] dark:border-gray-600
                  py-2 z-50 animate-fade-in"
                >
                  {SUPPORTED_LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLangChange(l)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                        ${l === lang ? 'bg-[#FFF3ED] dark:bg-coral-500/20 text-[#FF6B6B] font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-cool-700'}`}
                    >
                      <span className="text-lg">{LANG_FLAGS[l]}</span>
                      <span>{t(`lang${l.charAt(0).toUpperCase() + l.slice(1)}` as any)}</span>
                      {l === lang && <span className="ml-auto">✅</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-lg w-7 h-7 flex items-center justify-center"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      {/* Duolingo-style Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40
        bg-white dark:bg-cool-800 border-t-2 border-[#E5E5E5] dark:border-gray-700
        safe-bottom shadow-lg">
        <div className="flex items-center justify-around h-[64px] max-w-2xl mx-auto">
          {[
            { to: '/', icon: '🏠', label: t('navHome'), color: '#FF6B6B' },
            { to: '/cultures', icon: '🌍', label: t('navCultures'), color: '#58CC02' },
            { to: '/games', icon: '🎮', label: t('navGames'), color: '#FF9600' },
            { to: '/profile', icon: '👤', label: t('navProfile'), color: '#CE82FF' },
          ].map(({ to, icon, label, color }) => {
            const isActive = activeTab === to || window.location.hash === `#${to}`
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setActiveTab(to)}
                className="flex flex-col items-center gap-0.5 px-4 py-1 no-underline relative"
              >
                {isActive && (
                  <div className="absolute -top-0.5 left-2 right-2 h-[3px] rounded-full" style={{ backgroundColor: color }} />
                )}
                <span className={`text-2xl ${isActive ? '' : 'opacity-50'}`}>{icon}</span>
                <span
                  className={`text-[10px] font-bold ${isActive ? '' : 'text-gray-400'}`}
                  style={isActive ? { color } : {}}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
