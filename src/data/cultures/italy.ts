import type { Culture } from '../../types/culture'

export const italy: Culture = {
  id: 'italy',
  flag: '🇮🇹',
  names: { en: 'Italy', zh: '意大利', de: 'Italien', fr: 'Italie', es: 'Italia', tr: 'İtalya', ar: '', pt: '', ja: '' },
  region: 'europe',
  langCode: 'it-IT',
  greetings: [
    { native: 'Ciao', meaning: { en: 'Hello/Goodbye', zh: '你好/再见' } },
    { native: 'Grazie', meaning: { en: 'Thank you', zh: '谢谢' } },
  ],
  commonPhrases: [
    { native: 'Ciao', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Grazie', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: 'Arrivederci', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'Per favore', meaning: { en: 'Please', zh: '请' } },
    { native: 'Mi scusi', meaning: { en: 'Excuse me', zh: '打扰一下' } },
    { native: 'Come stai?', meaning: { en: 'How are you?', zh: '你好吗？' } },
  ],
  food: [
    { name: { en: 'Pizza', zh: '披萨' }, desc: { en: 'Oven-baked flat bread with toppings', zh: '烤制的配料扁面包' }, emoji: '🍕', img: '/images/italy/food-pizza.jpg' },
    { name: { en: 'Pasta', zh: '意大利面' }, desc: { en: 'Italian noodles in various shapes', zh: '各种形状的意大利面' }, emoji: '🍝', img: '/images/italy/food-pasta.jpg' },
    { name: { en: 'Gelato', zh: '意式冰淇淋' }, desc: { en: 'Italian ice cream', zh: '意大利冰淇淋' }, emoji: '🍦', img: '/images/italy/food-gelato.jpg' },
  ],
  festivals: [
    { name: { en: 'Carnival of Venice', zh: '威尼斯狂欢节' }, desc: { en: 'Famous costume carnival', zh: '著名的变装狂欢节' }, emoji: '🎭', img: '/images/italy/festival-carnival-of-venice.jpg' },
    { name: { en: 'Scoppio del Carro', zh: '复活节烟花车' }, desc: { en: 'Easter fireworks tradition', zh: '复活节烟花传统' }, emoji: '🎆', img: '' },
  ],
  landmarks: [
    { name: { en: 'Colosseum', zh: '罗马斗兽场' }, img: '/images/italy/landmark-colosseum.jpg' },
    { name: { en: 'Leaning Tower of Pisa', zh: '比萨斜塔' }, img: '/images/italy/landmark-leaning-tower-of-pisa.jpg' },
    { name: { en: 'Venice Canals', zh: '威尼斯运河' }, img: '/images/italy/landmark-venice-canals.jpg' },
  ],
  etiquette: [
    { emoji: '🍝', tip: { en: 'Don’t eat spaghetti with a spoon', zh: '不要用勺子吃意大利面' } },
    { emoji: '☕', tip: { en: 'Cappuccino only in the morning', zh: '卡布奇诺只在早上喝' } },
  ],
  funFacts: [
    { en: 'Italy has the most UNESCO World Heritage Sites', zh: '意大利拥有最多的联合国教科文组织世界遗产' },
    { en: 'Italians invented the piano and thermometer', zh: '意大利人发明了钢琴和温度计' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Italians are mobsters', zh: '所有意大利人都是黑手党' }, explanation: { en: 'Organized crime exists in some regions, but most Italians are law-abiding', zh: '有组织犯罪只存在于某些地区，但大多数意大利人守法' } },
    { type: 'fact', statement: { en: 'Italy has the most UNESCO World Heritage Sites', zh: '意大利拥有最多的联合国教科文组织世界遗产' }, explanation: { en: 'Italy has 58 UNESCO sites as of 2023', zh: '截至2023年，意大利有58个联合国教科文组织遗址' } },
    { type: 'myth', statement: { en: 'All Italians eat pasta with a spoon', zh: '所有意大利人用勺子吃意面' }, explanation: { en: 'Italians only use a fork to eat pasta', zh: '意大利人只用叉子吃意面' } },
    { type: 'fact', statement: { en: 'Italians invented the piano and thermometer', zh: '意大利人发明了钢琴和温度计' }, explanation: { en: 'Bartolomeo Cristofori invented the piano in 1709', zh: '巴托罗密欧·克里斯托福里在1709年发明了钢琴' } },
    { type: 'myth', statement: { en: 'Pizza was invented in the US', zh: '披萨是美国发明的' }, explanation: { en: 'Pizza originated in Naples, Italy; Americans adapted it', zh: '披萨起源于意大利那不勒斯；美国人是改良它' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '59M+', emoji: '👥' },
    { label: { en: 'UNESCO Sites', zh: '世界遗产' }, value: '58', emoji: '🏛️' },
    { label: { en: 'Wine Production (World)', zh: '葡萄酒产量（世界）' }, value: '#1', emoji: '🍷' },
  ],
  musicOrArt: [
    { name: { en: 'Opera', zh: '歌剧' }, desc: { en: 'Italy is the birthplace of opera with composers like Verdi and Puccini', zh: '意大利是歌剧的发源地，拥有威尔第和普契尼等作曲家' }, emoji: '🎵' },
  ],
}
