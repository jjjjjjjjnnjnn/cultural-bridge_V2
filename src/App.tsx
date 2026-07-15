import { HashRouter, Routes, Route } from 'react-router-dom'
import { useSettingsStore } from './stores/settings-store'
import { useProgressStore } from './stores/progress-store'
import { SplashScreen } from './components/ui/SplashScreen'
import { LanguageSelector } from './components/ui/LanguageSelector'
import { AppShell } from './components/layout/AppShell'
import { HomeScreen } from './screens/HomeScreen'
import { CulturesScreen } from './screens/CulturesScreen'
import { CultureDetailScreen } from './screens/CultureDetailScreen'
import { GamesScreen } from './screens/GamesScreen'
import { GamePlayScreen } from './screens/GamePlayScreen'
import { AchievementsScreen } from './screens/AchievementsScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { AboutScreen } from './screens/AboutScreen'
import { AchievementPopup } from './components/ui/AchievementPopup'
import { useEffect, useState } from 'react'

export default function App() {
  const hasVisited = useSettingsStore((s) => s.hasVisited)
  const theme = useSettingsStore((s) => s.theme)
  const checkDailyStreak = useProgressStore((s) => s.checkDailyStreak)

  const [showSplash, setShowSplash] = useState(true)
  const [showLangSelect, setShowLangSelect] = useState(false)

  useEffect(() => {
    checkDailyStreak()
  }, [checkDailyStreak])

  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const applyDark = (e: MediaQueryListEvent | MediaQueryList) =>
      root.classList.toggle('dark', theme === 'dark' || (theme === 'system' && e.matches))

    if (theme === 'system') {
      root.classList.toggle('dark', mq.matches)
      mq.addEventListener('change', applyDark)
      return () => mq.removeEventListener('change', applyDark)
    }
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleSplashDone = () => {
    setShowSplash(false)
    if (!hasVisited) setShowLangSelect(true)
  }

  const handleLangSelected = () => setShowLangSelect(false)

  return (
    <HashRouter>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      {showLangSelect && <LanguageSelector onDone={handleLangSelected} />}

      {!showSplash && !showLangSelect && (
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cultures" element={<CulturesScreen />} />
            <Route path="/culture/:cultureId" element={<CultureDetailScreen />} />
            <Route path="/games" element={<GamesScreen />} />
            <Route path="/game/:gameId" element={<GamePlayScreen />} />
            <Route path="/achievements" element={<AchievementsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Route>
        </Routes>
      )}

      <AchievementPopup />
    </HashRouter>
  )
}
