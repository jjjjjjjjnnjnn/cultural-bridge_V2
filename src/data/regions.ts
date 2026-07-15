import type { Region } from '../types/culture'

export const REGIONS: Region[] = [
  {
    id: 'eastAsia',
    name: { en: 'East Asia', zh: '东亚', de: 'Ostasien' },
    emoji: '🏯',
    color: 'coral',
  },
  {
    id: 'southeastAsia',
    name: { en: 'Southeast Asia', zh: '东南亚', de: 'Südostasien' },
    emoji: '🏝️',
    color: 'teal',
  },
  {
    id: 'southAsia',
    name: { en: 'South Asia', zh: '南亚', de: 'Südasien' },
    emoji: '🕌',
    color: 'purple',
  },
  {
    id: 'middleEast',
    name: { en: 'Middle East', zh: '中东', de: 'Naher Osten' },
    emoji: '🐪',
    color: 'gold',
  },
  {
    id: 'europe',
    name: { en: 'Europe', zh: '欧洲', de: 'Europa' },
    emoji: '🏰',
    color: 'coral',
  },
  {
    id: 'africa',
    name: { en: 'Africa', zh: '非洲', de: 'Afrika' },
    emoji: '🦁',
    color: 'teal',
  },
  {
    id: 'northAmerica',
    name: { en: 'North America', zh: '北美', de: 'Nordamerika' },
    emoji: '🗽',
    color: 'purple',
  },
  {
    id: 'southAmerica',
    name: { en: 'South America', zh: '南美', de: 'Südamerika' },
    emoji: '💃',
    color: 'gold',
  },
  {
    id: 'oceania',
    name: { en: 'Oceania', zh: '大洋洲', de: 'Ozeanien' },
    emoji: '🦘',
    color: 'teal',
  },
]

export function getRegionById(id: string): Region | undefined {
  return REGIONS.find((r) => r.id === id)
}
