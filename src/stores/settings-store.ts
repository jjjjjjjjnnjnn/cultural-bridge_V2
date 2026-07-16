import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Lang } from '../types/culture'

type ThemeMode = 'light' | 'dark' | 'system'

interface SettingsState {
  lang: Lang
  theme: ThemeMode
  soundEnabled: boolean
  hasVisited: boolean
  selectedAvatar: string
  unlockedAvatars: string[]
  expertMode: boolean

  setLang: (lang: Lang) => void
  setTheme: (theme: ThemeMode) => void
  toggleSound: () => void
  markVisited: () => void
  buyAvatar: (id: string) => void
  selectAvatar: (id: string) => void
  toggleExpertMode: () => void
  reset: () => void
}

const initialSettings = {
  lang: 'en' as Lang,
  theme: 'system' as ThemeMode,
  soundEnabled: true,
  hasVisited: false,
  selectedAvatar: 'default',
  unlockedAvatars: ['default'],
  expertMode: false,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...initialSettings,

      setLang: (lang) => {
        set({ lang, hasVisited: true })
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
      },

      setTheme: (theme) => {
        set({ theme })
        applyTheme(theme)
      },

      toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),

      markVisited: () => set({ hasVisited: true }),

      buyAvatar: (id) =>
        set((s) => {
          if (s.unlockedAvatars.includes(id)) return s
          return { unlockedAvatars: [...s.unlockedAvatars, id] }
        }),

      selectAvatar: (id) => set({ selectedAvatar: id }),

      toggleExpertMode: () => set((s) => ({ expertMode: !s.expertMode })),

      reset: () => set({ ...initialSettings }),
    }),
    {
      name: 'cb-settings',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.lang = state.lang
          document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr'
          applyTheme(state.theme)
        }
      },
    },
  ),
)

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else if (theme === 'light') {
    root.classList.remove('dark')
  } else {
    // system
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    root.classList.toggle('dark', prefersDark)
  }
}
