import type { Culture } from '../../types/culture'

export const korea: Culture = {
  id: 'korea',
  flag: '🇰🇷',
  names: { en: 'South Korea', zh: '韩国', de: 'Südkorea', fr: 'Corée du Sud', es: 'Corea del Sur', tr: 'Güney Kore', ar: '', pt: '', ja: '' },
  region: 'eastAsia',
  langCode: 'ko-KR',
  greetings: [
    { native: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: { en: 'Hello', zh: '你好' } },
    { native: '감사합니다', romanization: 'Gamsahamnida', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: '안녕히 계세요', romanization: 'Annyeonghi gyeseyo', meaning: { en: 'Goodbye', zh: '再见' } },
  ],
  commonPhrases: [
    { native: '안녕하세요', romanization: 'Annyeonghaseyo', meaning: { en: 'Hello', zh: '你好' } },
    { native: '감사합니다', romanization: 'Gamsahamnida', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: '안녕히 계세요', romanization: 'Annyeonghi gyeseyo', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: '죄송합니다', romanization: 'Joesonghamnida', meaning: { en: 'Sorry / Excuse me', zh: '对不起' } },
    { native: '네', romanization: 'Ne', meaning: { en: 'Yes', zh: '是的' } },
    { native: '아니요', romanization: 'Aniyo', meaning: { en: 'No', zh: '不是' } },
  ],
  food: [
    { name: { en: 'Kimchi', zh: '泡菜' }, desc: { en: 'Fermented spicy vegetables, Korea’s national side dish', zh: '发酵的辣味蔬菜，韩国的国菜' }, emoji: '🥬', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kimchi.jpg/320px-Kimchi.jpg' },
    { name: { en: 'Bibimbap', zh: '石锅拌饭' }, desc: { en: 'Rice mixed with vegetables, meat, and a fried egg', zh: '米饭配蔬菜、肉和煎蛋' }, emoji: '🍚', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bibimbap.jpg/320px-Bibimbap.jpg' },
    { name: { en: 'Korean BBQ', zh: '韩式烤肉' }, desc: { en: 'Grilled meat cooked at the table, wrapped in lettuce', zh: '在桌上烤制的肉，用生菜包裹食用' }, emoji: '🥩', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Korean_BBQ.jpg/320px-Korean_BBQ.jpg' },
  ],
  festivals: [
    { name: { en: 'Chuseok', zh: '秋夕' }, desc: { en: 'Korean harvest festival, families honor ancestors', zh: '韩国丰收节，家人祭祖团聚' }, emoji: '🎑', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Chuseok.jpg/320px-Chuseok.jpg' },
    { name: { en: 'Seollal', zh: '春节' }, desc: { en: 'Korean Lunar New Year with family and traditional food', zh: '韩国农历新年，家人团聚享用传统美食' }, emoji: '🧧', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Seollal.jpg/320px-Seollal.jpg' },
  ],
  landmarks: [
    { name: { en: 'Gyeongbokgung Palace', zh: '景福宫' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gyeongbokgung_Palace.jpg/320px-Gyeongbokgung_Palace.jpg' },
    { name: { en: 'N Seoul Tower', zh: '首尔塔' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/N_Seoul_Tower.jpg/320px-N_Seoul_Tower.jpg' },
    { name: { en: 'Jeju Island', zh: '济州岛' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jeju_Island.jpg/320px-Jeju_Island.jpg' },
  ],
  etiquette: [
    { emoji: '🍴', tip: { en: 'Wait for the eldest to start eating before you begin', zh: '等长辈先开始吃' } },
    { emoji: '🍶', tip: { en: 'Use two hands when pouring or receiving drinks', zh: '倒酒或接酒时用双手' } },
    { emoji: '👟', tip: { en: 'Remove shoes before entering a Korean home', zh: '进韩国人家门前脱鞋' } },
  ],
  funFacts: [
    { en: 'South Korea has the fastest average internet speed in the world', zh: '韩国拥有世界上最快的平均网速' },
    { en: 'K-pop and K-dramas are global phenomena driven by the Korean Wave (Hallyu)', zh: 'K-pop和韩剧是韩流驱动的全球文化现象' },
    { en: 'Korea invented metal movable type before Gutenberg', zh: '韩国在古腾堡之前发明了金属活字印刷' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Koreans eat dog meat', zh: '所有韩国人都吃狗肉' }, explanation: { en: 'Dog meat consumption has greatly declined; very rare among young generations', zh: '狗肉消费已大幅减少，年轻一代中非常罕见' } },
    { type: 'fact', statement: { en: 'South Korea has the fastest internet in the world', zh: '韩国拥有世界上最快的互联网' }, explanation: { en: 'Average broadband speeds exceed 100 Mbps with highest 5G penetration', zh: '平均宽带速度超100 Mbps，5G普及率最高' } },
    { type: 'myth', statement: { en: 'All Korean men look like K-pop idols', zh: '所有韩国男人都像韩流偶像' }, explanation: { en: 'Media-driven stereotype; most Korean men have ordinary appearances', zh: '媒体刻板印象；大多数韩国男人外表普通' } },
    { type: 'fact', statement: { en: 'K-pop and K-dramas are global cultural exports', zh: 'K-pop和韩剧是全球文化输出' }, explanation: { en: 'Hallyu has influenced music, TV, fashion, and beauty worldwide since the 1990s', zh: '韩流自1990年代以来影响了全球音乐、电视、时尚和美容' } },
    { type: 'myth', statement: { en: 'Koreans only eat kimchi with every meal', zh: '韩国人每顿饭只吃泡菜' }, explanation: { en: 'Korean cuisine is diverse with hundreds of dishes; kimchi is a side dish', zh: '韩国料理多样，有数百种菜肴；泡菜只是配菜' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '51.7M', emoji: '👥' },
    { label: { en: 'Land Area', zh: '国土面积' }, value: '100,210 km²', emoji: '🗺️' },
    { label: { en: 'Capital', zh: '首都' }, value: 'Seoul (서울)', emoji: '🏙️' },
  ],
  musicOrArt: [
    { name: { en: 'K-pop', zh: 'K-pop' }, desc: { en: 'Globally influential genre blending pop, hip-hop, and EDM with choreography', zh: '融合流行、嘻哈和电子音乐的全球性音乐流派' }, emoji: '🎵' },
    { name: { en: 'Hanbok', zh: '韩服' }, desc: { en: 'Traditional Korean clothing with vibrant colors and elegant lines', zh: '以鲜艳色彩和优雅线条为特色的韩国传统服装' }, emoji: '👗' },
  ],
}
