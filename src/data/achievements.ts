import type { AchievementDef } from '../types/achievement'

export const ACHIEVEMENT_DEFS: AchievementDef[] = [
  {
    id: 'first_steps',
    name: { en: 'First Steps', zh: '初来乍到', de: 'Erste Schritte' },
    desc: { en: 'Visit your first culture', zh: '首次浏览一个文化', de: 'Besuche deine erste Kultur' },
    icon: '👶', color: '#FF6B6B',
  },
  {
    id: 'explorer',
    name: { en: 'Explorer', zh: '探索者', de: 'Entdecker' },
    desc: { en: 'Visit 5 different cultures', zh: '浏览 5 个不同的文化', de: 'Besuche 5 verschiedene Kulturen' },
    icon: '🔍', color: '#4ECDC4',
  },
  {
    id: 'globetrotter',
    name: { en: 'Globetrotter', zh: '环球旅行家', de: 'Weltenbummler' },
    desc: { en: 'Visit all cultures in one region', zh: '浏览某一地区的所有文化', de: 'Besuche alle Kulturen einer Region' },
    icon: '🌏', color: '#A78BFA',
  },
  {
    id: 'gamer',
    name: { en: 'Game On', zh: '游戏开始', de: 'Spielstart' },
    desc: { en: 'Complete any game', zh: '完成任意一个游戏', de: 'Schließe ein Spiel ab' },
    icon: '🎮', color: '#FFE66D',
  },
  {
    id: 'quiz_master',
    name: { en: 'Quiz Master', zh: '问答大师', de: 'Quiz-Meister' },
    desc: { en: 'Perfect score on Culture Master', zh: '在文化大师中获得满分', de: 'Perfekte Punktzahl bei Kultur-Meister' },
    icon: '🏆', color: '#F59E0B',
  },
  {
    id: 'polyglot',
    name: { en: 'Polyglot', zh: '多语言者', de: 'Polyglott' },
    desc: { en: 'Switch languages 3+ times', zh: '切换语言 3 次以上', de: 'Wechsle die Sprache 3+ Mal' },
    icon: '🗣️', color: '#8B5CF6',
  },
  {
    id: 'bias_buster',
    name: { en: 'Bias Buster', zh: '偏见粉碎机', de: 'Vorurteils-Knacker' },
    desc: { en: 'Answer 10 bias questions in a row', zh: '连续答对 10 道偏见判断题', de: '10 Vorurteilsfragen in Folge richtig' },
    icon: '💥', color: '#E03131',
  },
  {
    id: 'foodie',
    name: { en: 'Foodie', zh: '美食家', de: 'Feinschmecker' },
    desc: { en: 'Discover all food items', zh: '发现所有文化的美食', de: 'Entdecke alle Gerichte' },
    icon: '🍜', color: '#FF8787',
  },
  {
    id: 'streak_7',
    name: { en: 'Week Warrior', zh: '周战士', de: 'Wochen-Krieger' },
    desc: { en: 'Maintain a 7-day streak', zh: '连续 7 天使用', de: 'Halte eine 7-Tage-Serie' },
    icon: '🔥', color: '#FF6B6B',
  },
  {
    id: 'scholar',
    name: { en: 'Scholar', zh: '学者', de: 'Gelehrter' },
    desc: { en: 'Visit 15 different cultures', zh: '浏览 15 个不同的文化', de: 'Besuche 15 verschiedene Kulturen' },
    icon: '📚', color: '#4ECDC4',
  },
  {
    id: 'speed_demon',
    name: { en: 'Speed Demon', zh: '速度之星', de: 'Tempoteufel' },
    desc: { en: 'Score 80%+ on Speed Round', zh: '极速挑战正确率超过 80%', de: '80%+ in der Speed-Runde' },
    icon: '⚡', color: '#F59E0B',
  },
  {
    id: 'cultural_bridge',
    name: { en: 'Cultural Bridge', zh: '文化桥梁', de: 'Kulturbrücke' },
    desc: { en: 'Complete all games', zh: '完成所有游戏', de: 'Schließe alle Spiele ab' },
    icon: '🌈', color: '#A78BFA',
  },
]
