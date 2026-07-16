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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-coral-600/90 to-purple-700/90 animate-fade-in">
      <div className="w-[90vw] max-w-sm animate-scale-in
        bg-white dark:bg-cool-800 rounded-3xl p-7 shadow-2xl border border-white/20">
        {/* Top accent */}
        <div className="w-12 h-1.5 bg-gradient-to-r from-coral-500 to-purple-500 rounded-full mx-auto mb-5" />

        <h2 className="text-xl font-bold text-center font-fredoka text-gray-800 dark:text-gray-100">
          🌍 {t('langSelectTitle')}
        </h2>
        <p className="text-center text-sm mt-1 mb-6 text-gray-500 dark:text-gray-400">
          {t('langSelectSubtitle')}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {SUPPORTED_LANGS.map((l) => (
            <button
              key={l}
              onClick={() => handleSelect(l)}
              className="flex flex-col items-center gap-1.5 p-3.5 rounded-2xl
                bg-gray-50 dark:bg-cool-700
                hover:bg-coral-50 dark:hover:bg-coral-500/20
                hover:border-coral-300 dark:hover:border-coral-500
                border-2 border-transparent
                active:scale-90 transition-all duration-200 shadow-sm"
            >
              <span className="text-2xl">{LANG_FLAGS[l]}</span>
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200 text-center leading-tight">
                {LANG_NAMES[l]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
