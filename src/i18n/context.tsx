import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Lang } from '../types/culture'
import type { TranslationKeys } from './types'
import en from './translations/en'
import zh from './translations/zh'
import de from './translations/de'
import fr from './translations/fr'
import es from './translations/es'
import tr from './translations/tr'

const translations: Partial<Record<Lang, TranslationKeys>> = { en, zh, de, fr, es, tr }

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: keyof TranslationKeys, replacements?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLang(): Lang {
  // 1. Saved preference
  const saved = localStorage.getItem('cb-lang') as Lang | null
  if (saved && translations[saved]) return saved
  // 2. Browser language
  const browser = navigator.language.split('-')[0]
  const match = (Object.keys(translations) as Lang[]).find(l => l === browser)
  if (match) return match
  // 3. Fallback
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('cb-lang', newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }, [])

  const t = useCallback(
    (key: keyof TranslationKeys, replacements?: Record<string, string | number>): string => {
      const trans = translations[lang]
      let text = trans?.[key] ?? translations.en?.[key] ?? key
      if (replacements) {
        Object.entries(replacements).forEach(([k, v]) => {
          text = text.replace(`{{${k}}}`, String(v))
        })
      }
      return text
    },
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

// Utility: get localized text from a LocalizedText object
export function getLocalized<T>(
  obj: Partial<Record<string, T>> & { en: T },
  lang: Lang,
): T {
  return (obj[lang] ?? obj.en) as T
}
