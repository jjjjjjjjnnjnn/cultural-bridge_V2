/* ===== Cultural Bridge – Core Type Definitions ===== */

// ── Languages ──────────────────────────────────────────────
export type Lang = 'en' | 'zh' | 'de' | 'fr' | 'es' | 'tr' | 'ar' | 'pt' | 'ja'

export const SUPPORTED_LANGS: Lang[] = ['en', 'zh', 'de', 'fr', 'es', 'tr', 'ar', 'pt', 'ja']

export const LANG_FLAGS: Record<Lang, string> = {
  en: '🇬🇧', zh: '🇨🇳', de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸',
  tr: '🇹🇷', ar: '🇸🇦', pt: '🇧🇷', ja: '🇯🇵',
}

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English', zh: '中文', de: 'Deutsch', fr: 'Français',
  es: 'Español', tr: 'Türkçe', ar: 'العربية', pt: 'Português', ja: '日本語',
}

// ── Multilingual text ──────────────────────────────────────
/** Every user-facing text that varies by language uses this shape */
export type LocalizedText = Partial<Record<Lang, string>> & {
  en: string  // English is always the fallback
}

// ── Regions ────────────────────────────────────────────────
export type RegionId =
  | 'eastAsia'
  | 'southeastAsia'
  | 'southAsia'
  | 'middleEast'
  | 'europe'
  | 'africa'
  | 'northAmerica'
  | 'southAmerica'
  | 'oceania'

export interface Region {
  id: RegionId
  name: LocalizedText
  emoji: string
  color: string    // Tailwind shade name, e.g. 'coral'
}

// ── Culture data ───────────────────────────────────────────
export interface Greeting {
  native: string
  romanization?: string    // Pinyin / romaji / transliteration
  meaning: LocalizedText
  audioUrl?: string        // Future: pre-recorded MP3
}

export interface FoodItem {
  name: LocalizedText
  desc: LocalizedText
  emoji: string
  img: string              // Wikimedia Commons URL
}

export interface Festival {
  name: LocalizedText
  desc: LocalizedText
  emoji: string
  img: string
}

export interface Landmark {
  name: LocalizedText
  img: string
}

export interface EtiquetteTip {
  emoji: string
  tip: LocalizedText
}

export interface BiasItem {
  type: 'myth' | 'fact'
  statement: LocalizedText
  explanation: LocalizedText
}

export interface QuickStat {
  label: LocalizedText
  value: string
  emoji: string
}

export interface MusicArtItem {
  name: LocalizedText
  desc: LocalizedText
  emoji: string
}

export interface Culture {
  id: string                             // URL-safe slug: 'china'
  flag: string                           // Emoji flag
  names: LocalizedText                   // Culture name per language
  region: RegionId
  langCode: string                       // BCP-47: 'zh-CN', 'ja-JP', etc.
  greetings: Greeting[]
  commonPhrases: Greeting[]              // Expanded phrases (hello, thanks, bye, please…)
  food: FoodItem[]
  festivals: Festival[]
  landmarks: Landmark[]
  etiquette: EtiquetteTip[]
  funFacts: LocalizedText[]              // 3-5 surprising facts
  biases: BiasItem[]                     // Myths vs facts (anti-stereotype)
  quickStats: QuickStat[]                // 2-3 numeric facts
  musicOrArt: MusicArtItem[]             // Music, dance, visual arts
  // Quiz data (answer keys for games)
  quizQuestions?: CultureQuizQuestion[]
}

export interface CultureQuizQuestion {
  question: LocalizedText
  options: LocalizedText[]               // 4 options
  correctIndex: number                   // 0-3
  category: 'greeting' | 'food' | 'festival' | 'landmark' | 'etiquette' | 'funFact' | 'music'
  difficulty: 1 | 2 | 3                  // Easy / Medium / Hard
}

// ── Games ──────────────────────────────────────────────────
export type GameId =
  | 'greeting'
  | 'food-match'
  | 'bias'
  | 'festival'
  | 'culture-master'
  | 'flag-quiz'
  | 'landmark-match'
  | 'speed-round'

export interface GameDef {
  id: GameId
  name: LocalizedText
  desc: LocalizedText
  icon: string
  color: string
  playerCount: string                    // '1 Player' / '1-4 Players'
}
