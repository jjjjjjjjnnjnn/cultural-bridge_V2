import { useI18n } from '../../i18n/context'
import { useSettingsStore } from '../../stores/settings-store'
import { SUPPORTED_LANGS, LANG_FLAGS, LANG_NAMES, type Lang } from '../../types/culture'

export function LanguageSelector({ onDone }: { onDone: () => void }) {
  const { t } = useI18n()
  const setLang = useSettingsStore((s) => s.setLang)

  const handleSelect = (lang: Lang) => {
    setLang(lang)
    onDone()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="card p-6 w-[90vw] max-w-sm animate-scale-in">
        <h2 className="text-xl font-bold text-center font-fredoka">{t('langSelectTitle')}</h2>
        <p className="text-center text-gray-500 text-sm mt-1 mb-4">{t('langSelectSubtitle')}</p>
        <div className="grid grid-cols-2 gap-2">
          {SUPPORTED_LANGS.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-coral-50 active:scale-95 transition-all"
            >
              <span className="text-xl">{LANG_FLAGS[lang]}</span>
              <span className="text-sm font-medium">{LANG_NAMES[lang]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
