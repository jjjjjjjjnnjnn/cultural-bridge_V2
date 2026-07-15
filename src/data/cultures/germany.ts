import type { Culture } from '../../types/culture'

export const germany: Culture = {
  id: 'germany',
  flag: '🇩🇪',
  names: { en: 'Germany', zh: '德国', de: 'Deutschland', fr: 'Allemagne', es: 'Alemania', tr: 'Almanya', ar: '', pt: '', ja: '' },
  region: 'europe',
  langCode: 'de-DE',
  greetings: [
    { native: 'Hallo', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Guten Tag', meaning: { en: 'Good day', zh: '日安' } },
    { native: 'Danke', meaning: { en: 'Thank you', zh: '谢谢' } },
  ],
  commonPhrases: [
    { native: 'Hallo', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Danke', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: 'Tschüss', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'Bitte', meaning: { en: 'Please', zh: '请' } },
    { native: 'Entschuldigung', meaning: { en: 'Excuse me', zh: '打扰一下' } },
    { native: 'Wie geht es Ihnen?', meaning: { en: 'How are you?', zh: '你好吗？' } },
  ],
  food: [
    { name: { en: 'Bratwurst', zh: '德国香肠' }, desc: { en: 'Grilled sausage', zh: '烤香肠' }, emoji: '🌭', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bratwurst.jpg/320px-Bratwurst.jpg' },
    { name: { en: 'Pretzel', zh: '椒盐卷饼' }, desc: { en: 'Twisted baked bread', zh: '扭结状烤面包' }, emoji: '🥨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pretzel.jpg/320px-Pretzel.jpg' },
    { name: { en: 'Sauerkraut', zh: '酸菜' }, desc: { en: 'Fermented cabbage', zh: '发酵卷心菜' }, emoji: '🥬', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sauerkraut.jpg/320px-Sauerkraut.jpg' },
  ],
  festivals: [
    { name: { en: 'Oktoberfest', zh: '慕尼黑啤酒节' }, desc: { en: 'Famous beer festival in Munich', zh: '慕尼黑著名的啤酒节' }, emoji: '🍺', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Oktoberfest_Munich.jpg/320px-Oktoberfest_Munich.jpg' },
    { name: { en: 'Christmas Market', zh: '圣诞市场' }, desc: { en: 'Traditional Christmas market', zh: '传统圣诞市场' }, emoji: '🎄', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Christmas_market_Germany.jpg/320px-Christmas_market_Germany.jpg' },
  ],
  landmarks: [
    { name: { en: 'Brandenburg Gate', zh: '勃兰登堡门' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Brandenburger_Tor_abends.jpg/320px-Brandenburger_Tor_abends.jpg' },
    { name: { en: 'Neuschwanstein Castle', zh: '新天鹅堡' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Neuschwanstein_Castle.jpg/320px-Neuschwanstein_Castle.jpg' },
    { name: { en: 'Cologne Cathedral', zh: '科隆大教堂' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cologne_Cathedral.jpg/320px-Cologne_Cathedral.jpg' },
  ],
  etiquette: [
    { emoji: '🤝', tip: { en: 'Handshakes are firm and once', zh: '握手要用力且只握一次' } },
    { emoji: '⏰', tip: { en: 'Being on time is very important', zh: '准时非常重要' } },
  ],
  funFacts: [
    { en: 'Germany has over 1,500 types of sausage', zh: '德国有超过1500种香肠' },
    { en: 'Germany is Europes largest economy', zh: '德国是欧洲最大的经济体' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Germans love beer', zh: '所有德国人都爱喝啤酒' }, explanation: { en: 'Many Germans don’t drink alcohol or prefer wine', zh: '很多德国人不喝酒或更喜欢葡萄酒' } },
    { type: 'fact', statement: { en: 'Germany has over 1,500 types of sausage', zh: '德国有超过1500种香肠' }, explanation: { en: 'Each region has its own specialty sausages', zh: '每个地区都有自己的特色香肠' } },
    { type: 'myth', statement: { en: 'All Germans are punctual', zh: '所有德国人都有准时' }, explanation: { en: 'While punctuality is valued, not every German is always on time', zh: '虽然重视准时，但不是每个德国人都总是准时' } },
    { type: 'fact', statement: { en: 'Germany is Europes largest economy', zh: '德国是欧洲最大的经济体' }, explanation: { en: 'Germany’s GDP is over €4 trillion', zh: '德国GDP超过4万亿欧元' } },
    { type: 'myth', statement: { en: 'German food is only sausages and potatoes', zh: '德国食物只有香肠和土豆' }, explanation: { en: 'German cuisine is diverse with many regional specialties', zh: '德国菜系很多样，有很多地区特色菜' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '83M+', emoji: '👥' },
    { label: { en: 'GDP (Europe Rank)', zh: '欧盟GDP排名' }, value: '#1', emoji: '💰' },
    { label: { en: 'UNESCO Sites', zh: '世界遗产' }, value: '51', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Classical Music', zh: '古典音乐' }, desc: { en: 'Home to legendary composers like Bach, Beethoven, and Mozart', zh: '巴赫、贝多芬、莫扎特等传奇作曲家的故乡' }, emoji: '🎵' },
  ],
}
