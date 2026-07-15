import { useI18n } from '../../i18n/context'

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const { t } = useI18n()
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-coral-500 to-purple-500 animate-fade-in">
      <span className="text-7xl animate-float">🌍</span>
      <h1 className="mt-6 text-5xl font-bold text-white font-fredoka">{t('splashTitle')}</h1>
      <p className="mt-3 text-lg text-white/80">{t('splashMotto')}</p>
      <button
        onClick={onDone}
        className="mt-10 px-8 py-3 bg-white text-coral-500 font-semibold rounded-full shadow-lg active:scale-95 transition-transform"
      >
        {t('btnExplore')}
      </button>
    </div>
  )
}
