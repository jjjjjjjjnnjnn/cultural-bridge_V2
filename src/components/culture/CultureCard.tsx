import { Link } from 'react-router-dom'
import type { Culture } from '../../types/culture'
import { useI18n } from '../../i18n/context'
import type { Lang } from '../../types/culture'
import { getRegionById } from '../../data/regions'

function local(text: Record<string, string>, lang: Lang): string {
  return text[lang] ?? text.en ?? ''
}

export function CultureCard({ culture }: { culture: Culture }) {
  const { lang } = useI18n()
  const region = getRegionById(culture.region)

  return (
    <Link
      to={`/culture/${culture.id}`}
      className="card flex items-center gap-3 active:scale-[0.97] transition-transform no-underline min-w-[140px]"
    >
      <span className="text-3xl">{culture.flag}</span>
      <div className="min-w-0">
        <p className="font-semibold text-sm truncate text-gray-800 dark:text-gray-100">
          {local(culture.names, lang)}
        </p>
        {region && (
          <p className="text-xs text-gray-400">{region.emoji} {local(region.name, lang)}</p>
        )}
      </div>
    </Link>
  )
}

export function CultureGrid({ cultures }: { cultures: Culture[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {cultures.map((c) => (
        <CultureCard key={c.id} culture={c} />
      ))}
    </div>
  )
}
