import { type Culture } from '../../types/culture'
import { useI18n } from '../../i18n/context'
import type { Lang } from '../../types/culture'

function local(text: Record<string, string>, lang: Lang, fallback = ''): string {
  return text[lang] ?? text.en ?? fallback
}

function imgPath(src: string): string {
  if (src.startsWith('http') || src.startsWith('.')) return src
  const base = import.meta.env.BASE_URL ?? './'
  return src.startsWith('/') ? `${base}${src.slice(1)}` : `${base}${src}`
}

// ── Image with emoji fallback ───────────────────────────────
function ImageWithFallback({ src, emoji, alt, className }: { src: string; emoji: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-100 dark:bg-cool-800 ${className ?? ''}`}>
      <img
        src={imgPath(src)}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            const fallback = document.createElement('span')
            fallback.className = 'absolute inset-0 flex items-center justify-center text-4xl'
            fallback.textContent = emoji
            parent.appendChild(fallback)
          }
        }}
      />
    </div>
  )
}

// ── Audio button ────────────────────────────────────────────
function AudioButton({ text, langCode }: { text: string; langCode: string }) {
  const { t } = useI18n()
  const handlePlay = () => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = langCode
    u.rate = 0.8
    window.speechSynthesis.speak(u)
  }
  return (
    <button
      onClick={handlePlay}
      className="ml-2 text-sm px-2 py-1 rounded-lg bg-coral-50 dark:bg-coral-500/20 text-coral-500 hover:bg-coral-100 transition-colors"
      title={t('listenPronunciation')}
    >
      🔊
    </button>
  )
}

// ── Section wrapper ─────────────────────────────────────────
function Section({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <section className="card">
      <h2 className="text-lg font-bold font-fredoka flex items-center gap-2 mb-3">
        <span>{emoji}</span> {title}
      </h2>
      {children}
    </section>
  )
}

// ── Greetings Section ───────────────────────────────────────
export function GreetingSection({ greetings, langCode, lang }: { greetings: Culture['greetings']; langCode: string; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="🗣️" title={t('greetingTitle')}>
      <div className="space-y-3">
        {greetings.map((g, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-coral-50 dark:bg-coral-500/10">
            <div>
              <p className="text-lg font-semibold text-coral-600 dark:text-coral-300">{g.native}</p>
              {g.romanization && <p className="text-xs text-gray-400">{g.romanization}</p>}
              <p className="text-sm text-gray-500 dark:text-gray-400">{local(g.meaning, lang)}</p>
            </div>
            <AudioButton text={g.native} langCode={langCode} />
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Common Phrases Section ──────────────────────────────────
export function CommonPhrasesSection({ phrases, langCode, lang }: { phrases: Culture['commonPhrases']; langCode: string; lang: Lang }) {
  const { t } = useI18n()
  // If no dedicated commonPhrases, reuse greetings
  const items = phrases.length > 0 ? phrases : []

  if (items.length === 0) return null

  return (
    <Section emoji="💬" title={t('phrasesTitle')}>
      <div className="grid grid-cols-1 gap-2">
        {items.map((g, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-teal-50 dark:bg-teal-500/10">
            <div>
              <p className="font-medium text-teal-700 dark:text-teal-300">{g.native}</p>
              {g.romanization && <p className="text-xs text-gray-400">{g.romanization}</p>}
              <p className="text-xs text-gray-500">{local(g.meaning, lang)}</p>
            </div>
            <AudioButton text={g.native} langCode={langCode} />
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Food Section ────────────────────────────────────────────
export function FoodSection({ food, lang }: { food: Culture['food']; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="🍜" title={t('foodTitle')}>
      <div className="grid grid-cols-1 gap-3">
        {food.map((f, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10">
            <ImageWithFallback src={f.img} emoji={f.emoji} alt={local(f.name, lang)} className="w-20 h-20 shrink-0" />
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-300">{local(f.name, lang)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{local(f.desc, lang)}</p>
              <span className="text-xl">{f.emoji}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Festivals Section ───────────────────────────────────────
export function FestivalSection({ festivals, lang }: { festivals: Culture['festivals']; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="🎭" title={t('festivalTitle')}>
      <div className="grid grid-cols-1 gap-3">
        {festivals.map((f, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-gold-50 dark:bg-gold-500/10">
            <ImageWithFallback src={f.img} emoji={f.emoji} alt={local(f.name, lang)} className="w-20 h-20 shrink-0" />
            <div>
              <p className="font-semibold text-gold-700 dark:text-gold-300">{local(f.name, lang)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{local(f.desc, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Landmarks Section ───────────────────────────────────────
export function LandmarkSection({ landmarks, lang }: { landmarks: Culture['landmarks']; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="🏞️" title={t('landmarkTitle')}>
      <div className="grid grid-cols-1 gap-3">
        {landmarks.map((l, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <ImageWithFallback src={l.img} emoji="🏛️" alt={local(l.name, lang)} className="w-full h-40" />
            <p className="mt-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300">{local(l.name, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Etiquette Section ───────────────────────────────────────
export function EtiquetteSection({ etiquette, lang }: { etiquette: Culture['etiquette']; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="🙏" title={t('etiquetteTitle')}>
      <div className="space-y-2">
        {etiquette.map((e, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-teal-50 dark:bg-teal-500/10">
            <span className="text-2xl">{e.emoji}</span>
            <p className="text-sm text-gray-600 dark:text-gray-300">{local(e.tip, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Fun Facts Section ───────────────────────────────────────
export function FunFactsSection({ funFacts, lang }: { funFacts: Culture['funFacts']; lang: Lang }) {
  const { t } = useI18n()
  return (
    <Section emoji="💡" title={t('funFactsTitle')}>
      <ul className="space-y-2">
        {funFacts.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="text-coral-500 mt-1">•</span>
            <span>{local(f, lang)}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── Quick Stats Section ─────────────────────────────────────
export function QuickStatsSection({ stats, lang }: { stats: Culture['quickStats']; lang: Lang }) {
  const { t } = useI18n()
  if (!stats || stats.length === 0) return null
  return (
    <Section emoji="📊" title={t('quickStatsTitle')}>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-3 rounded-xl bg-coral-50 dark:bg-coral-500/10">
            <span className="text-2xl">{s.emoji}</span>
            <p className="text-xl font-bold text-coral-500">{s.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{local(s.label, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Music & Art Section ─────────────────────────────────────
export function MusicArtSection({ items, lang }: { items: Culture['musicOrArt']; lang: Lang }) {
  const { t } = useI18n()
  if (!items || items.length === 0) return null
  return (
    <Section emoji="🎨" title={t('musicArtTitle')}>
      <div className="grid grid-cols-1 gap-2">
        {items.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10">
            <span className="text-2xl shrink-0">{m.emoji}</span>
            <div>
              <p className="font-medium text-purple-700 dark:text-purple-300">{local(m.name, lang)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{local(m.desc, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Bias Section ────────────────────────────────────────────
export function BiasSection({ biases, lang }: { biases: Culture['biases']; lang: Lang }) {
  const { t } = useI18n()
  if (!biases || biases.length === 0) return null
  return (
    <Section emoji="🚫" title={t('biasTitle')}>
      <div className="space-y-3">
        {biases.map((b, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl border-l-4 ${
              b.type === 'myth'
                ? 'border-l-red-400 bg-red-50 dark:bg-red-500/10'
                : 'border-l-green-400 bg-green-50 dark:bg-green-500/10'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full text-white ${
                b.type === 'myth' ? 'bg-red-400' : 'bg-green-400'
              }`}>
                {b.type === 'myth' ? t('biasMyth') : t('biasFact')}
              </span>
            </div>
            <p className="font-medium text-sm">{local(b.statement, lang)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{local(b.explanation, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
