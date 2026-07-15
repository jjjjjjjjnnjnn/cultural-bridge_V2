import { useI18n } from '../i18n/context'

export function AboutScreen() {
  const { t } = useI18n()
  return (
    <div className="py-6 animate-fade-in space-y-6">
      <h1 className="text-2xl font-bold font-fredoka">{t('aboutTitle')}</h1>
      <p className="text-gray-600 dark:text-gray-300">{t('aboutDesc1')}</p>
      <p className="text-gray-600 dark:text-gray-300">{t('aboutDesc2')}</p>

      <div className="card p-5 border-l-4 border-l-coral-500">
        <h2 className="text-lg font-bold font-fredoka mb-3">{t('aboutPledge')}</h2>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li>✅ {t('pledge1')}</li>
          <li>✅ {t('pledge2')}</li>
          <li>✅ {t('pledge3')}</li>
          <li>✅ {t('pledge4')}</li>
          <li>✅ {t('pledge5')}</li>
        </ul>
      </div>

      <p className="text-xs text-gray-400 text-center">
        {t('aboutCredits')}<br />
        {t('aboutVersion')}
      </p>
    </div>
  )
}
