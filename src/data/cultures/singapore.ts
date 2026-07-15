import type { Culture } from '../../types/culture'

export const singapore: Culture = {
  id: 'singapore',
  flag: '🇸🇬',
  names: { en: 'Singapore', zh: '新加坡', de: 'Singapur', fr: 'Singapour', es: 'Singapur', tr: 'Singapur', ar: '', pt: '', ja: '' },
  region: 'southeastAsia',
  langCode: 'en-SG',
  greetings: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
  ],
  commonPhrases: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
    { native: 'Thank you', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
    { native: 'Goodbye', meaning: { en: 'Goodbye', zh: '再见', de: 'Auf Wiedersehen' } },
    { native: 'Please', meaning: { en: 'Please', zh: '请', de: 'Bitte' } },
    { native: 'Sorry', meaning: { en: 'Excuse me / Sorry', zh: '对不起', de: 'Entschuldigung' } },
    { native: 'How are you?', meaning: { en: 'How are you?', zh: '你好吗？', de: 'Wie geht es Ihnen?' } },
  ],
  food: [
    { name: { en: 'Hainanese Chicken Rice', zh: '海南鸡饭', de: 'Hainan-Chicken-Rice' }, desc: { en: 'Poached chicken with rice', zh: '白切鸡配米饭', de: 'Poeliertes Hähnchen mit Reis' }, emoji: '🍗', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hainanese_Chicken_Rice.jpg/320px-Hainanese_Chicken_Rice.jpg' },
    { name: { en: 'Chili Crab', zh: '辣椒螃蟹', de: 'Chili-Krabbe' }, desc: { en: 'Singapore signature dish', zh: '新加坡招牌菜', de: 'Singapurs Signature-Gericht' }, emoji: '🦀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chili_crab.jpg/320px-Chili_crab.jpg' },
  ],
  festivals: [
    { name: { en: 'National Day', zh: '国庆节', de: 'Nationalfeiertag' }, desc: { en: 'Singapore independence day', zh: '新加坡独立日', de: 'Singapurs Unabhängigkeitstag' }, emoji: '🇸🇬', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Singapore_National_Day.jpg/320px-Singapore_National_Day.jpg' },
  ],
  landmarks: [
    { name: { en: 'Marina Bay Sands', zh: '滨海湾金沙', de: 'Marina Bay Sands' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Marina_Bay_Sands.jpg/320px-Marina_Bay_Sands.jpg' },
    { name: { en: 'Merlion Park', zh: '鱼尾狮公园', de: 'Merlion-Park' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Merlion_Park.jpg/320px-Merlion_Park.jpg' },
  ],
  etiquette: [
    { emoji: '🚽', tip: { en: 'Flush toilet after use (common courtesy)', zh: '用完厕所要冲水', de: 'Toilette nach Benutzung spülen (allgemeine Höflichkeit)' } },
  ],
  funFacts: [
    { en: 'Singapore is one of the world\'s smallest countries', zh: '新加坡是世界上最小的国家之一', de: 'Singapur ist eines der kleinsten Länder der Welt' },
    { en: 'Singapore has the world\'s busiest port', zh: '新加坡拥有世界上最繁忙的港口', de: 'Singapur hat den verkehrsreichsten Hafen der Welt' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'Singapore is part of China', zh: '新加坡是中国的一部分', de: 'Singapur ist ein Teil Chinas' }, explanation: { en: 'Singapore is an independent country since 1965', zh: '新加坡自1965年起就是独立国家', de: 'Singapur ist seit 1965 ein unabhängiges Land' } },
    { type: 'fact', statement: { en: 'Singapore has the world\'s busiest port', zh: '新加坡拥有世界上最繁忙的港口', de: 'Singapur hat den verkehrsreichsten Hafen der Welt' }, explanation: { en: 'Singapore handles over 600 million tons of cargo annually', zh: '新加坡每年处理超过6亿吨货物', de: 'Singapur wickelt jährlich über 600 Millionen Tonnen Fracht ab' } },
    { type: 'myth', statement: { en: 'Singapore is just a small city with no nature', zh: '新加坡只是个小城市，没有自然', de: 'Singapur ist nur eine kleine Stadt ohne Natur' }, explanation: { en: 'Singapore has many parks, nature reserves, and green buildings', zh: '新加坡有很多公园、自然保护区和绿色建筑', de: 'Singapur hat viele Parks, Naturschutzgebiete und grüne Gebäude' } },
    { type: 'fact', statement: { en: 'Singapore has one of the highest GDP per capita in the world', zh: '新加坡拥有世界上最高的人均GDP之一', de: 'Singapur hat eines der höchsten Pro-Kopf-BIP der Welt' }, explanation: { en: 'Singapore\'s GDP per capita is over $70,000 USD', zh: '新加坡人均GDP超过7万美元', de: 'Singapurs Pro-Kopf-BIP liegt bei über 70.000 USD' } },
    { type: 'myth', statement: { en: 'Chewing gum is completely banned in Singapore', zh: '新加坡完全禁止嚼口香糖', de: 'Kaugummi ist in Singapur komplett verboten' }, explanation: { en: 'Chewing gum is not sold but can be brought in for personal use', zh: '口香糖不售卖但可以带入个人使用', de: 'Kaugummi wird nicht verkauft, kann aber für den persönlichen Gebrauch eingeführt werden' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口', de: 'Bevölkerung' }, value: '5.7 million', emoji: '👥' },
    { label: { en: 'Land Area', zh: '国土面积', de: 'Landfläche' }, value: '733 km²', emoji: '🗺️' },
    { label: { en: 'GDP per Capita', zh: '人均GDP', de: 'BIP pro Kopf' }, value: 'Over $70,000', emoji: '💰' },
  ],
  musicOrArt: [
    { name: { en: 'Peranakan Beadwork', zh: '土生华人珠绣', de: 'Peranakan-Perlenstickerei' }, desc: { en: 'Intricate beadwork and embroidery art form of the Straits Chinese community', zh: '海峡华人社区的精美珠绣和刺绣艺术形式', de: 'Aufwändige Perlenstickerei der chinesischen Gemeinschaft der Straits Settlements' }, emoji: '📿' },
    { name: { en: 'Singlish', zh: '新加坡式英语', de: 'Singlish' }, desc: { en: 'Unique local English creole mixing English, Chinese, Malay, and Tamil influences', zh: '融合英语、中文、马来语和淡米尔语的独特地方英语克里奥尔语', de: 'Einzigartiger lokaler englischer Kreol, der Englisch, Chinesisch, Malaysisch und Tamil vermischt' }, emoji: '🗣️' },
  ],
}
