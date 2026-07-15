import type { GameDef } from '../types/culture'

export const GAME_DEFS: GameDef[] = [
  {
    id: 'greeting',
    name: { en: 'Greeting Challenge', zh: '问候语挑战', de: 'Begrüßungs-Challenge' },
    desc: { en: 'Guess which culture a greeting belongs to', zh: '猜猜这个问候语来自哪个文化', de: 'Rate, zu welcher Kultur eine Begrüßung gehört' },
    icon: '👋', color: '#FF6B6B', playerCount: '1 Player',
  },
  {
    id: 'food-match',
    name: { en: 'Food Match', zh: '美食配对', de: 'Essen-Match' },
    desc: { en: 'Match dishes with their cultures', zh: '将美食与它的文化配对', de: 'Ordne Gerichte ihren Kulturen zu' },
    icon: '🍜', color: '#4ECDC4', playerCount: '1 Player',
  },
  {
    id: 'bias',
    name: { en: 'Myth or Fact', zh: '偏见还是事实', de: 'Mythos oder Fakt' },
    desc: { en: 'Can you tell stereotype from truth?', zh: '你能分辨刻板印象和真相吗？', de: 'Kannst du Stereotyp von Wahrheit unterscheiden?' },
    icon: '💭', color: '#A78BFA', playerCount: '1 Player',
  },
  {
    id: 'festival',
    name: { en: 'Festival Quiz', zh: '节日竞猜', de: 'Fest-Quiz' },
    desc: { en: 'Guess the festival from its description', zh: '根据描述猜节日', de: 'Errate das Fest anhand der Beschreibung' },
    icon: '🎭', color: '#FFE66D', playerCount: '1 Player',
  },
  {
    id: 'culture-master',
    name: { en: 'Culture Master', zh: '文化大师', de: 'Kultur-Meister' },
    desc: { en: 'The ultimate culture knowledge test', zh: '终极文化知识测试', de: 'Der ultimative Kultur-Wissenstest' },
    icon: '🏆', color: '#F59E0B', playerCount: '1 Player',
  },
  {
    id: 'flag-quiz',
    name: { en: 'Flag Quiz', zh: '国旗竞猜', de: 'Flaggen-Quiz' },
    desc: { en: 'Match flags to their countries', zh: '将国旗与对应的国家配对', de: 'Ordne Flaggen ihren Ländern zu' },
    icon: '🎌', color: '#8B5CF6', playerCount: '1 Player',
  },
  {
    id: 'landmark-match',
    name: { en: 'Landmark Match', zh: '地标配对', de: 'Wahrzeichen-Match' },
    desc: { en: 'Match famous landmarks to cultures', zh: '将著名地标与对应文化配对', de: 'Ordne berühmte Wahrzeichen den Kulturen zu' },
    icon: '🏛️', color: '#45B7AA', playerCount: '1 Player',
  },
  {
    id: 'speed-round',
    name: { en: 'Speed Round', zh: '极速挑战', de: 'Speed-Runde' },
    desc: { en: '30 seconds. 10 questions. Go!', zh: '30 秒内回答 10 道题！', de: '30 Sekunden. 10 Fragen. Los!' },
    icon: '⚡', color: '#E03131', playerCount: '1 Player',
  },
]
