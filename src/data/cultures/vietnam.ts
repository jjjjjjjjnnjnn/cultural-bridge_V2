import type { Culture } from '../../types/culture'

export const vietnam: Culture = {
  id: 'vietnam',
  flag: '🇻🇳',
  names: { en: 'Vietnam', zh: '越南', de: 'Vietnam', fr: 'Vietnam', es: 'Vietnam', tr: 'Vietnam', ar: '', pt: '', ja: '' },
  region: 'southeastAsia',
  langCode: 'vi-VN',
  greetings: [
    { native: 'Xin chào', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
    { native: 'Cảm ơn', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
  ],
  commonPhrases: [
    { native: 'Xin chào', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
    { native: 'Cảm ơn', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
    { native: 'Tạm biệt', meaning: { en: 'Goodbye', zh: '再见', de: 'Auf Wiedersehen' } },
    { native: 'Làm ơn', meaning: { en: 'Please', zh: '请', de: 'Bitte' } },
    { native: 'Xin lỗi', meaning: { en: 'Excuse me / Sorry', zh: '对不起', de: 'Entschuldigung' } },
    { native: 'Bạn khỏe không?', meaning: { en: 'How are you?', zh: '你好吗？', de: 'Wie geht es Ihnen?' } },
  ],
  food: [
    { name: { en: 'Pho', zh: '越南粉', de: 'Pho' }, desc: { en: 'Vietnamese noodle soup', zh: '越南牛肉汤粉', de: 'Vietnamesische Nudelsuppe' }, emoji: '🍜', img: '/images/vietnam/food-pho.jpg' },
    { name: { en: 'Banh Mi', zh: '越南三明治', de: 'Banh Mi' }, desc: { en: 'Vietnamese sandwich', zh: '越南法式三明治', de: 'Vietnamesisches Sandwich' }, emoji: '🥖', img: '/images/vietnam/food-banh-mi.jpg' },
  ],
  festivals: [
    { name: { en: 'Tet Festival', zh: '春节', de: 'Tet-Fest' }, desc: { en: 'Vietnamese Lunar New Year', zh: '越南农历新年', de: 'Vietnamesisches Neujahrsfest' }, emoji: '🎊', img: '/images/vietnam/festival-tet-festival.jpg' },
  ],
  landmarks: [
    { name: { en: 'Ha Long Bay', zh: '下龙湾', de: 'Ha-Long-Bucht' }, img: '/images/vietnam/landmark-ha-long-bay.jpg' },
    { name: { en: 'Hoi An Ancient Town', zh: '会安古镇', de: 'Altstadt von Hoi An' }, img: '/images/vietnam/landmark-hoi-an-ancient-town.jpg' },
  ],
  etiquette: [
    { emoji: '🍽️', tip: { en: 'Use chopsticks properly', zh: '正确使用筷子', de: 'Essstäbchen richtig benutzen' } },
  ],
  funFacts: [
    { en: 'Vietnam is the world\'s second-largest coffee exporter', zh: '越南是世界第二大咖啡出口国', de: 'Vietnam ist der zweitgrößte Kaffeeexporteur der Welt' },
    { en: 'Vietnam has over 3,000 km of coastline', zh: '越南有超过3,000公里的海岸线', de: 'Vietnam hat über 3.000 km Küste' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Vietnamese people eat pho every day', zh: '所有越南人每天都吃粉', de: 'Alle Vietnamesen essen jeden Tag Pho' }, explanation: { en: 'Pho is popular but not eaten daily by everyone', zh: '粉很受欢迎但不是每天都吃', de: 'Pho ist beliebt, wird aber nicht von allen täglich gegessen' } },
    { type: 'fact', statement: { en: 'Vietnam is the world\'s second-largest coffee exporter', zh: '越南是世界第二大咖啡出口国', de: 'Vietnam ist der zweitgrößte Kaffeeexporteur der Welt' }, explanation: { en: 'Vietnam produces mostly Robusta coffee', zh: '越南主要生产罗布斯塔咖啡', de: 'Vietnam produziert hauptsächlich Robusta-Kaffee' } },
    { type: 'myth', statement: { en: 'All Vietnamese people are poor', zh: '所有越南人都很穷', de: 'Alle Vietnamesen sind arm' }, explanation: { en: 'Vietnam\'s economy is growing rapidly, with a rising middle class', zh: '越南经济快速增长，中产阶级正在崛起', de: 'Vietnams Wirtschaft wächst schnell, mit einer wachsenden Mittelschicht' } },
    { type: 'fact', statement: { en: 'Vietnam has over 3,000 km of coastline', zh: '越南有超过3,000公里的海岸线', de: 'Vietnam hat über 3.000 km Küste' }, explanation: { en: 'This gives Vietnam rich seafood resources', zh: '这给越南带来了丰富的海鲜资源', de: 'Dies gibt Vietnam reichhaltige Meeresfrüchte-Ressourcen' } },
    { type: 'myth', statement: { en: 'All Vietnamese people ride motorcycles', zh: '所有越南人都骑摩托车', de: 'Alle Vietnamesen fahren Motorrad' }, explanation: { en: 'While motorcycles are common, cars and buses are also used', zh: '虽然摩托车很常见，但汽车和公交车也在使用', de: 'Motorräder sind zwar üblich, aber Autos und Busse werden auch genutzt' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口', de: 'Bevölkerung' }, value: '100 million', emoji: '👥' },
    { label: { en: 'Land Area', zh: '国土面积', de: 'Landfläche' }, value: '331,000 km²', emoji: '🗺️' },
    { label: { en: 'Coffee Export Rank', zh: '咖啡出口排名', de: 'Kaffee-Export-Rang' }, value: '#2 in the world', emoji: '☕' },
  ],
  musicOrArt: [
    { name: { en: 'Water Puppetry', zh: '水上木偶戏', de: 'Wasserpuppentheater' }, desc: { en: 'Unique Vietnamese performance art with puppets on water accompanied by live music', zh: '独特的越南表演艺术，木偶在水面上表演并配有现场音乐', de: 'Einzigartige vietnamesische Aufführungskunst mit Puppen auf dem Wasser, begleitet von Live-Musik' }, emoji: '🎭' },
    { name: { en: 'Dan Bau', zh: '独弦琴', de: 'Dan Bau' }, desc: { en: 'One-stringed Vietnamese zither with a distinctive melodic sound', zh: '音色独特的单弦越南古筝', de: 'Einsaitige vietnamesische Zither mit einem unverwechselbaren melodischen Klang' }, emoji: '🎵' },
  ],
}
