import type { Culture } from '../../types/culture'

export const singapore: Culture = {
  id: 'singapore',
  flag: '🇸🇬',
  names: { en: 'Singapore', zh: '新加坡', de: 'Singapur', fr: 'Singapour', es: 'Singapur', tr: 'Singapur', ar: '', pt: '', ja: '' },
  region: 'southeastAsia',
  langCode: 'en-SG',
  greetings: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好' } },
  ],
  commonPhrases: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Thank you', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: 'Goodbye', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'Please', meaning: { en: 'Please', zh: '请' } },
    { native: 'Sorry', meaning: { en: 'Excuse me / Sorry', zh: '对不起' } },
    { native: 'How are you?', meaning: { en: 'How are you?', zh: '你好吗？' } },
  ],
  food: [
    { name: { en: 'Hainanese Chicken Rice', zh: '海南鸡饭' }, desc: { en: 'Poached chicken with rice', zh: '白切鸡配米饭' }, emoji: '🍗', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hainanese_Chicken_Rice.jpg/320px-Hainanese_Chicken_Rice.jpg' },
    { name: { en: 'Chili Crab', zh: '辣椒螃蟹' }, desc: { en: 'Singapore signature dish', zh: '新加坡招牌菜' }, emoji: '🦀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chili_crab.jpg/320px-Chili_crab.jpg' },
  ],
  festivals: [
    { name: { en: 'National Day', zh: '国庆节' }, desc: { en: 'Singapore independence day', zh: '新加坡独立日' }, emoji: '🇸🇬', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Singapore_National_Day.jpg/320px-Singapore_National_Day.jpg' },
  ],
  landmarks: [
    { name: { en: 'Marina Bay Sands', zh: '滨海湾金沙' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Marina_Bay_Sands.jpg/320px-Marina_Bay_Sands.jpg' },
    { name: { en: 'Merlion Park', zh: '鱼尾狮公园' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Merlion_Park.jpg/320px-Merlion_Park.jpg' },
  ],
  etiquette: [
    { emoji: '🚽', tip: { en: 'Flush toilet after use (common courtesy)', zh: '用完厕所要冲水' } },
  ],
  funFacts: [
    { en: 'Singapore is one of the world\'s smallest countries', zh: '新加坡是世界上最小的国家之一' },
    { en: 'Singapore has the world\'s busiest port', zh: '新加坡拥有世界上最繁忙的港口' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'Singapore is part of China', zh: '新加坡是中国的一部分' }, explanation: { en: 'Singapore is an independent country since 1965', zh: '新加坡自1965年起就是独立国家' } },
    { type: 'fact', statement: { en: 'Singapore has the world\'s busiest port', zh: '新加坡拥有世界上最繁忙的港口' }, explanation: { en: 'Singapore handles over 600 million tons of cargo annually', zh: '新加坡每年处理超过6亿吨货物' } },
    { type: 'myth', statement: { en: 'Singapore is just a small city with no nature', zh: '新加坡只是个小城市，没有自然' }, explanation: { en: 'Singapore has many parks, nature reserves, and green buildings', zh: '新加坡有很多公园、自然保护区和绿色建筑' } },
    { type: 'fact', statement: { en: 'Singapore has one of the highest GDP per capita in the world', zh: '新加坡拥有世界上最高的人均GDP之一' }, explanation: { en: 'Singapore\'s GDP per capita is over ,000 USD', zh: '新加坡人均GDP超过7万美元' } },
    { type: 'myth', statement: { en: 'Chewing gum is completely banned in Singapore', zh: '新加坡完全禁止嚼口香糖' }, explanation: { en: 'Chewing gum is not sold but can be brought in for personal use', zh: '口香糖不售卖但可以带入个人使用' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '5.7 million', emoji: '👥' },
    { label: { en: 'Land Area', zh: '国土面积' }, value: '733 km²', emoji: '🗺️' },
    { label: { en: 'GDP per Capita', zh: '人均GDP' }, value: 'Over ,000', emoji: '💰' },
  ],
  musicOrArt: [
    { name: { en: 'Peranakan Beadwork', zh: '土生华人珠绣' }, desc: { en: 'Intricate beadwork and embroidery art form of the Straits Chinese community', zh: '海峡华人社区的精美珠绣和刺绣艺术形式' }, emoji: '📿' },
    { name: { en: 'Singlish', zh: '新加坡式英语' }, desc: { en: 'Unique local English creole mixing English, Chinese, Malay, and Tamil influences', zh: '融合英语、中文、马来语和淡米尔语的独特地方英语克里奥尔语' }, emoji: '🗣️' },
  ],
}
