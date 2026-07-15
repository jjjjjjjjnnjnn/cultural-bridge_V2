

// All cultures are lazy-loaded in CultureDetailScreen.
// This barrel file re-exports individual culture files for bulk imports.
// Import a single culture: import { china } from '@/data/cultures/china'
// We use dynamic imports for the detail page to keep bundle small.

// List of all culture IDs for iteration
export const ALL_CULTURE_IDS: string[] = [
  // East Asia
  'china', 'japan', 'korea',
  // Southeast Asia
  'thailand', 'vietnam', 'singapore', 'indonesia', 'philippines',
  // South Asia
  'india',
  // Middle East
  'turkey', 'uae',
  // Europe
  'germany', 'france', 'uk', 'italy', 'spain', 'russia',
  // Africa
  'egypt', 'southafrica',
  // Americas
  'usa', 'canada', 'brazil', 'mexico',
  // Oceania
  'australia', 'newzealand',
  // NEW (to be added)
  // 'mongolia', 'malaysia', 'pakistan', 'iran', 'poland', 'sweden', 'nigeria', 'argentina',
]

// Region → culture IDs mapping
export const CULTURES_BY_REGION: Record<string, string[]> = {
  eastAsia: ['china', 'japan', 'korea'],
  southeastAsia: ['thailand', 'vietnam', 'singapore', 'indonesia', 'philippines'],
  southAsia: ['india'],
  middleEast: ['turkey', 'uae'],
  europe: ['germany', 'france', 'uk', 'italy', 'spain', 'russia'],
  africa: ['egypt', 'southafrica'],
  northAmerica: ['usa', 'canada'],
  southAmerica: ['brazil', 'mexico'],
  oceania: ['australia', 'newzealand'],
}

// Pre-load culture metadata (lightweight, no heavy data)
// Used for list views — just id, flag, name, region
export interface CultureMeta {
  id: string
  flag: string
  name: Record<string, string>
  region: string
  langCode: string
}

// Hardcoded metadata for fast culture list rendering
// Full data loaded on demand when visiting detail page
export const CULTURE_META: CultureMeta[] = [
  { id: 'china', flag: '🇨🇳', name: { en:'China', zh:'中国', de:'China' }, region:'eastAsia', langCode:'zh-CN' },
  { id: 'japan', flag: '🇯🇵', name: { en:'Japan', zh:'日本', de:'Japan' }, region:'eastAsia', langCode:'ja-JP' },
  { id: 'korea', flag: '🇰🇷', name: { en:'South Korea', zh:'韩国', de:'Südkorea' }, region:'eastAsia', langCode:'ko-KR' },
  { id: 'thailand', flag: '🇹🇭', name: { en:'Thailand', zh:'泰国', de:'Thailand' }, region:'southeastAsia', langCode:'th-TH' },
  { id: 'vietnam', flag: '🇻🇳', name: { en:'Vietnam', zh:'越南', de:'Vietnam' }, region:'southeastAsia', langCode:'vi-VN' },
  { id: 'singapore', flag: '🇸🇬', name: { en:'Singapore', zh:'新加坡', de:'Singapur' }, region:'southeastAsia', langCode:'en-SG' },
  { id: 'indonesia', flag: '🇮🇩', name: { en:'Indonesia', zh:'印度尼西亚', de:'Indonesien' }, region:'southeastAsia', langCode:'id-ID' },
  { id: 'philippines', flag: '🇵🇭', name: { en:'Philippines', zh:'菲律宾', de:'Philippinen' }, region:'southeastAsia', langCode:'tl-PH' },
  { id: 'india', flag: '🇮🇳', name: { en:'India', zh:'印度', de:'Indien' }, region:'southAsia', langCode:'hi-IN' },
  { id: 'turkey', flag: '🇹🇷', name: { en:'Turkey', zh:'土耳其', de:'Türkei' }, region:'middleEast', langCode:'tr-TR' },
  { id: 'uae', flag: '🇦🇪', name: { en:'UAE', zh:'阿联酋', de:'VAE' }, region:'middleEast', langCode:'ar-AE' },
  { id: 'germany', flag: '🇩🇪', name: { en:'Germany', zh:'德国', de:'Deutschland' }, region:'europe', langCode:'de-DE' },
  { id: 'france', flag: '🇫🇷', name: { en:'France', zh:'法国', de:'Frankreich' }, region:'europe', langCode:'fr-FR' },
  { id: 'uk', flag: '🇬🇧', name: { en:'United Kingdom', zh:'英国', de:'Großbritannien' }, region:'europe', langCode:'en-GB' },
  { id: 'italy', flag: '🇮🇹', name: { en:'Italy', zh:'意大利', de:'Italien' }, region:'europe', langCode:'it-IT' },
  { id: 'spain', flag: '🇪🇸', name: { en:'Spain', zh:'西班牙', de:'Spanien' }, region:'europe', langCode:'es-ES' },
  { id: 'russia', flag: '🇷🇺', name: { en:'Russia', zh:'俄罗斯', de:'Russland' }, region:'europe', langCode:'ru-RU' },
  { id: 'egypt', flag: '🇪🇬', name: { en:'Egypt', zh:'埃及', de:'Ägypten' }, region:'africa', langCode:'ar-EG' },
  { id: 'southafrica', flag: '🇿🇦', name: { en:'South Africa', zh:'南非', de:'Südafrika' }, region:'africa', langCode:'zu-ZA' },
  { id: 'usa', flag: '🇺🇸', name: { en:'United States', zh:'美国', de:'USA' }, region:'northAmerica', langCode:'en-US' },
  { id: 'canada', flag: '🇨🇦', name: { en:'Canada', zh:'加拿大', de:'Kanada' }, region:'northAmerica', langCode:'en-CA' },
  { id: 'brazil', flag: '🇧🇷', name: { en:'Brazil', zh:'巴西', de:'Brasilien' }, region:'southAmerica', langCode:'pt-BR' },
  { id: 'mexico', flag: '🇲🇽', name: { en:'Mexico', zh:'墨西哥', de:'Mexiko' }, region:'southAmerica', langCode:'es-MX' },
  { id: 'australia', flag: '🇦🇺', name: { en:'Australia', zh:'澳大利亚', de:'Australien' }, region:'oceania', langCode:'en-AU' },
  { id: 'newzealand', flag: '🇳🇿', name: { en:'New Zealand', zh:'新西兰', de:'Neuseeland' }, region:'oceania', langCode:'en-NZ' },
]
