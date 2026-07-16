// Level badges earned per 100 XP
export interface LevelBadge {
  level: number
  icon: string      // emoji badge
  title: Record<string, string>
  xpRequired: number
}

export const LEVEL_BADGES: LevelBadge[] = [
  { level: 1,  icon: '🌱', title: { en: 'Seedling', zh: '幼苗', de: 'Setzling' }, xpRequired: 0 },
  { level: 2,  icon: '🌿', title: { en: 'Sprout', zh: '嫩芽', de: 'Spross' }, xpRequired: 100 },
  { level: 3,  icon: '🌳', title: { en: 'Sapling', zh: '小树', de: 'Bäumchen' }, xpRequired: 200 },
  { level: 4,  icon: '🌸', title: { en: 'Blossom', zh: '花开', de: 'Blüte' }, xpRequired: 300 },
  { level: 5,  icon: '🌺', title: { en: 'Flower', zh: '花朵', de: 'Blume' }, xpRequired: 400 },
  { level: 6,  icon: '🍃', title: { en: 'Leaf', zh: '绿叶', de: 'Blatt' }, xpRequired: 500 },
  { level: 7,  icon: '🍀', title: { en: 'Clover', zh: '四叶草', de: 'Kleeblatt' }, xpRequired: 600 },
  { level: 8,  icon: '🌻', title: { en: 'Sunflower', zh: '向日葵', de: 'Sonnenblume' }, xpRequired: 700 },
  { level: 9,  icon: '🌹', title: { en: 'Rose', zh: '玫瑰', de: 'Rose' }, xpRequired: 800 },
  { level: 10, icon: '💐', title: { en: 'Bouquet', zh: '花束', de: 'Strauß' }, xpRequired: 900 },
  { level: 11, icon: '🐦', title: { en: 'Bird', zh: '小鸟', de: 'Vogel' }, xpRequired: 1000 },
  { level: 12, icon: '🦋', title: { en: 'Butterfly', zh: '蝴蝶', de: 'Schmetterling' }, xpRequired: 1200 },
  { level: 13, icon: '🐝', title: { en: 'Bee', zh: '蜜蜂', de: 'Biene' }, xpRequired: 1400 },
  { level: 14, icon: '🦊', title: { en: 'Fox', zh: '狐狸', de: 'Fuchs' }, xpRequired: 1600 },
  { level: 15, icon: '🐉', title: { en: 'Dragon', zh: '龙', de: 'Drache' }, xpRequired: 1800 },
  { level: 16, icon: '🌟', title: { en: 'Star', zh: '星星', de: 'Stern' }, xpRequired: 2100 },
  { level: 17, icon: '🌙', title: { en: 'Moon', zh: '月亮', de: 'Mond' }, xpRequired: 2400 },
  { level: 18, icon: '☀️', title: { en: 'Sun', zh: '太阳', de: 'Sonne' }, xpRequired: 2700 },
  { level: 19, icon: '🌈', title: { en: 'Rainbow', zh: '彩虹', de: 'Regenbogen' }, xpRequired: 3000 },
  { level: 20, icon: '👑', title: { en: 'Crown', zh: '皇冠', de: 'Krone' }, xpRequired: 3500 },
  { level: 21, icon: '🦅', title: { en: 'Eagle', zh: '雄鹰', de: 'Adler' }, xpRequired: 4000 },
  { level: 22, icon: '🐺', title: { en: 'Wolf', zh: '狼', de: 'Wolf' }, xpRequired: 4500 },
  { level: 23, icon: '🦁', title: { en: 'Lion', zh: '狮子', de: 'Löwe' }, xpRequired: 5000 },
  { level: 24, icon: '🐯', title: { en: 'Tiger', zh: '老虎', de: 'Tiger' }, xpRequired: 6000 },
  { level: 25, icon: '🐘', title: { en: 'Elephant', zh: '大象', de: 'Elefant' }, xpRequired: 7000 },
  { level: 26, icon: '🐋', title: { en: 'Whale', zh: '鲸鱼', de: 'Wal' }, xpRequired: 8000 },
  { level: 27, icon: '🦄', title: { en: 'Unicorn', zh: '独角兽', de: 'Einhorn' }, xpRequired: 9000 },
  { level: 28, icon: '🎭', title: { en: 'Theatre', zh: '戏剧', de: 'Theater' }, xpRequired: 10000 },
  { level: 29, icon: '🎨', title: { en: 'Artist', zh: '艺术家', de: 'Künstler' }, xpRequired: 12000 },
  { level: 30, icon: '🏆', title: { en: 'Champion', zh: '冠军', de: 'Champion' }, xpRequired: 15000 },
]

export function getBadgeForLevel(level: number): LevelBadge {
  return LEVEL_BADGES[Math.min(level - 1, LEVEL_BADGES.length - 1)] ?? LEVEL_BADGES[0]
}

// XP → level (100 XP per level)
export function calcLevel(xp: number): number {
  return Math.min(Math.floor(xp / 100) + 1, LEVEL_BADGES.length)
}

// Avatars purchasable with XP
export interface Avatar {
  id: string
  emoji: string
  name: Record<string, string>
  cost: number
  locked: boolean
}

export const AVATARS: Avatar[] = [
  { id: 'default', emoji: '🌍', name: { en: 'Earth', zh: '地球', de: 'Erde' }, cost: 0, locked: false },
  { id: 'traveler', emoji: '🧳', name: { en: 'Traveler', zh: '旅行者', de: 'Reisender' }, cost: 100, locked: true },
  { id: 'explorer', emoji: '🔍', name: { en: 'Explorer', zh: '探险家', de: 'Entdecker' }, cost: 200, locked: true },
  { id: 'scholar', emoji: '📚', name: { en: 'Scholar', zh: '学者', de: 'Gelehrter' }, cost: 300, locked: true },
  { id: 'chef', emoji: '👨‍🍳', name: { en: 'Chef', zh: '厨师', de: 'Koch' }, cost: 400, locked: true },
  { id: 'artist', emoji: '🎨', name: { en: 'Artist', zh: '艺术家', de: 'Künstler' }, cost: 500, locked: true },
  { id: 'musician', emoji: '🎵', name: { en: 'Musician', zh: '音乐家', de: 'Musiker' }, cost: 600, locked: true },
  { id: 'captain', emoji: '🧭', name: { en: 'Captain', zh: '船长', de: 'Kapitän' }, cost: 800, locked: true },
  { id: 'pilot', emoji: '✈️', name: { en: 'Pilot', zh: '飞行员', de: 'Pilot' }, cost: 1000, locked: true },
  { id: 'king', emoji: '👑', name: { en: 'King', zh: '国王', de: 'König' }, cost: 1500, locked: true },
  { id: 'astronaut', emoji: '🧑‍🚀', name: { en: 'Astronaut', zh: '宇航员', de: 'Astronaut' }, cost: 2000, locked: true },
  { id: 'ninja', emoji: '🥷', name: { en: 'Ninja', zh: '忍者', de: 'Ninja' }, cost: 3000, locked: true },
]
