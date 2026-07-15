import type { Culture } from '../../types/culture'

export const thailand: Culture = {
  id: 'thailand',
  flag: '🇹🇭',
  names: { en: 'Thailand', zh: '泰国', de: 'Thailand', fr: 'Thaïlande', es: 'Tailandia', tr: 'Tayland', ar: '', pt: '', ja: '' },
  region: 'southeastAsia',
  langCode: 'th-TH',
  greetings: [
    { native: 'สวัสดี', romanization: 'Sawasdee', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
    { native: 'ขอบคุณ', romanization: 'Khop Khun', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
  ],
  commonPhrases: [
    { native: 'สวัสดี', romanization: 'Sawasdee', meaning: { en: 'Hello', zh: '你好', de: 'Hallo' } },
    { native: 'ขอบคุณ', romanization: 'Khop Khun', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
    { native: 'ลาก่อน', romanization: 'Laa gòn', meaning: { en: 'Goodbye', zh: '再见', de: 'Auf Wiedersehen' } },
    { native: 'กรุณา', romanization: 'Gà-rú-naa', meaning: { en: 'Please', zh: '请', de: 'Bitte' } },
    { native: 'ขอโทษ', romanization: 'Kŏr tôht', meaning: { en: 'Excuse me / Sorry', zh: '对不起', de: 'Entschuldigung' } },
    { native: 'สบายดีไหม', romanization: 'Sà-baai dee măi?', meaning: { en: 'How are you?', zh: '你好吗？', de: 'Wie geht es Ihnen?' } },
  ],
  food: [
    { name: { en: 'Pad Thai', zh: '泰式炒河粉', de: 'Pad Thai' }, desc: { en: 'Stir-fried rice noodles', zh: '炒米粉', de: 'Gebratene Reisnudeln' }, emoji: '🍜', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pad_Thai.jpg/320px-Pad_Thai.jpg' },
    { name: { en: 'Tom Yum Goong', zh: '冬阴功汤', de: 'Tom Yum Goong' }, desc: { en: 'Spicy and sour shrimp soup', zh: '酸辣虾汤', de: 'Scharf-saure Garnelensuppe' }, emoji: '🍲', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tom_Yum_Goong.jpg/320px-Tom_Yum_Goong.jpg' },
    { name: { en: 'Mango Sticky Rice', zh: '芒果糯米饭', de: 'Mango-Klebreis' }, desc: { en: 'Sweet dessert with mango', zh: '芒果甜糯米', de: 'Süßes Dessert mit Mango' }, emoji: '🥭', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mango_sticky_rice.jpg/320px-Mango_sticky_rice.jpg' },
  ],
  festivals: [
    { name: { en: 'Songkran', zh: '宋干节（水节）', de: 'Songkran' }, desc: { en: 'Thai New Year water festival', zh: '泰国新年泼水节', de: 'Thailändisches Neujahrs-Wasserfest' }, emoji: '💦', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Songkran_Festival.jpg/320px-Songkran_Festival.jpg' },
    { name: { en: 'Loy Krathong', zh: '水灯节', de: 'Loy Krathong' }, desc: { en: 'Festival of floating offerings', zh: '放水灯的节日', de: 'Fest der schwimmenden Opfergaben' }, emoji: '🎊', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Loy_Krathong.jpg/320px-Loy_Krathong.jpg' },
  ],
  landmarks: [
    { name: { en: 'Grand Palace', zh: '大皇宫', de: 'Großer Palast' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Grand_Palace_Bangkok.jpg/320px-Grand_Palace_Bangkok.jpg' },
    { name: { en: 'Wat Arun', zh: '郑王庙', de: 'Wat Arun' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Wat_Arun_Bangkok.jpg/320px-Wat_Arun_Bangkok.jpg' },
  ],
  etiquette: [
    { emoji: '🙏', tip: { en: 'Wai greeting with palms together', zh: '合十礼问候', de: 'Wai-Gruß mit zusammengelegten Handflächen' } },
    { emoji: '👑', tip: { en: 'Never touch someone\'s head', zh: '不要碰别人的头', de: 'Berühre niemals den Kopf einer Person' } },
  ],
  funFacts: [
    { en: 'Thailand is the only Southeast Asian country never colonized', zh: '泰国是东南亚唯一未被殖民的国家', de: 'Thailand ist das einzige südostasiatische Land, das nie kolonisiert wurde' },
    { en: 'Thai people have a special day to honor mothers', zh: '泰国有专门纪念母亲的日子', de: 'In Thailand gibt es einen besonderen Tag zu Ehren der Mütter' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Thai people are Buddhist monks', zh: '所有泰国人都是和尚', de: 'Alle Thailänder sind buddhistische Mönche' }, explanation: { en: 'Only about 1% of Thai males become monks, usually temporarily', zh: '只有约1%的泰国男性出家，通常只是暂时的', de: 'Nur etwa 1% der thailändischen Männer werden Mönche, meist vorübergehend' } },
    { type: 'fact', statement: { en: 'Thailand is the only Southeast Asian country never colonized', zh: '泰国是东南亚唯一未被殖民的国家', de: 'Thailand ist das einzige südostasiatische Land, das nie kolonisiert wurde' }, explanation: { en: 'It maintained its independence through skilled diplomacy', zh: '通过高超的外交手段保持了独立', de: 'Es bewahrte seine Unabhängigkeit durch geschickte Diplomatie' } },
    { type: 'myth', statement: { en: 'All Thai people eat spicy food', zh: '所有泰国人都吃辣', de: 'Alle Thailänder essen scharfes Essen' }, explanation: { en: 'Thai cuisine has mild dishes too, like Pad Thai and cashew chicken', zh: '泰国菜也有不辣的，比如泰式炒河粉和腰果鸡', de: 'Die thailändische Küche hat auch milde Gerichte wie Pad Thai und Cashew-Hähnchen' } },
    { type: 'fact', statement: { en: 'Thai people have a special day to honor mothers', zh: '泰国有专门纪念母亲的日子', de: 'In Thailand gibt es einen besonderen Tag zu Ehren der Mütter' }, explanation: { en: 'Mother\'s Day is celebrated on August 12th, the Queen\'s birthday', zh: '母亲节在8月12日庆祝，是女王的生日', de: 'Der Muttertag wird am 12. August gefeiert, dem Geburtstag der Königin' } },
    { type: 'myth', statement: { en: 'Thailand is just about beaches and parties', zh: '泰国只有海滩和派对', de: 'Thailand besteht nur aus Stränden und Partys' }, explanation: { en: 'Thailand has rich culture, mountains, temples, and historical sites', zh: '泰国有丰富的文化、山脉、寺庙和历史遗迹', de: 'Thailand hat eine reiche Kultur, Berge, Tempel und historische Stätten' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口', de: 'Bevölkerung' }, value: '72 million', emoji: '👥' },
    { label: { en: 'Land Area', zh: '国土面积', de: 'Landfläche' }, value: '513,000 km²', emoji: '🗺️' },
    { label: { en: 'Tourist Visits (pre-COVID)', zh: '游客人数（疫情前）', de: 'Touristenbesuche (vor COVID)' }, value: '40 million/year', emoji: '✈️' },
  ],
  musicOrArt: [
    { name: { en: 'Thai Classical Dance', zh: '泰国古典舞', de: 'Thailändischer klassischer Tanz' }, desc: { en: 'Graceful dance-drama tradition with elaborate costumes and precise movements', zh: '以精美服饰和精准动作为特点的优雅舞蹈戏剧传统', de: 'Anmutige Tanz-Theater-Tradition mit aufwendigen Kostümen und präzisen Bewegungen' }, emoji: '💃' },
    { name: { en: 'Ranad', zh: '泰式木琴', de: 'Ranad' }, desc: { en: 'Traditional Thai percussion instrument made of bamboo or wooden bars', zh: '用竹或木条制成的传统泰国打击乐器', de: 'Traditionelles thailändisches Percussion-Instrument aus Bambus- oder Holzstäben' }, emoji: '🎵' },
  ],
}
