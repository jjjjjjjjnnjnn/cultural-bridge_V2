import type { Culture } from '../../types/culture'

export const mexico: Culture = {
  id: 'mexico',
  flag: '🇲🇽',
  names: { en: 'Mexico', zh: '墨西哥', de: 'Mexiko', fr: 'Mexique', es: 'México', tr: 'Meksika' },
  region: 'southAmerica',
  langCode: 'es-MX',
  greetings: [
    { native: 'Hola', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Gracias', meaning: { en: 'Thank you', zh: '谢谢' } },
  ],
  commonPhrases: [
    { native: 'Hola', meaning: { en: 'Hello', zh: '你好' } },
    { native: '¿Cómo estás?', meaning: { en: 'How are you?', zh: '你好吗？' } },
    { native: 'Bien, gracias', meaning: { en: 'Good, thanks', zh: '很好，谢谢' } },
    { native: 'Adiós', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'Por favor', meaning: { en: 'Please', zh: '请' } },
    { native: 'Perdón', meaning: { en: 'Excuse me / Sorry', zh: '打扰一下 / 对不起' } },
  ],
  food: [
    { name: { en: 'Tacos', zh: '塔可' }, desc: { en: 'Corn tortilla with various fillings like meat and salsa', de: 'Maistortilla mit verschiedenen Fullungen wie Fleisch und Salsa', zh: '玉米卷配各种馅料，如肉和莎莎酱' }, emoji: '🌮', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tacos.jpg/320px-Tacos.jpg' },
    { name: { en: 'Guacamole', zh: '鳄梨酱' }, desc: { en: 'Avocado dip with lime, onion, and cilantro', de: 'Avocado-Dip mit Limette, Zwiebel und Koriander', zh: '牛油果配青柠、洋葱和香菜制成的蘸酱' }, emoji: '🥑', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Guacamole.jpg/320px-Guacamole.jpg' },
    { name: { en: 'Mole', zh: '莫莱酱' }, desc: { en: 'Complex sauce made with chili and chocolate', de: 'Komplexe Sosse aus Chili und Schokolade', zh: '用辣椒和巧克力制作的复杂酱料' }, emoji: '🍫', img: '' },
  ],
  festivals: [
    { name: { en: 'Day of the Dead', zh: '亡灵节' }, desc: { en: 'Celebration honoring deceased loved ones with altars and marigolds', de: 'Feier zu Ehren verstorbener Angehoriger mit Altaren und Ringelblumen', zh: '用祭坛和万寿菊纪念已故亲人的庆祝活动' }, emoji: '💀', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Day_of_the_Dead.jpg/320px-Day_of_the_Dead.jpg' },
    { name: { en: 'Cinco de Mayo', zh: '五月五日节' }, desc: { en: 'Commemorating the Mexican victory at the Battle of Puebla', de: 'Gedenken an den mexikanischen Sieg in der Schlacht von Puebla', zh: '纪念墨西哥在普埃布拉战役中的胜利' }, emoji: '🎉', img: '' },
  ],
  landmarks: [
    { name: { en: 'Chichen Itza', zh: '奇琴伊察' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chichen_Itza.jpg/320px-Chichen_Itza.jpg' },
    { name: { en: 'Teotihuacan', zh: '特奥蒂瓦坎' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Teotihuacan.jpg/320px-Teotihuacan.jpg' },
    { name: { en: 'Frida Kahlo Museum', zh: '弗里达·卡罗博物馆' }, img: '' },
  ],
  etiquette: [
    { emoji: '👋', tip: { en: 'Greet with a handshake or hug depending on familiarity', zh: '根据熟悉程度握手或拥抱问候' } },
    { emoji: '⏰', tip: { en: 'Arriving 15-30 minutes late to social events is considered normal', zh: '社交活动迟到15-30分钟被认为是正常的' } },
  ],
  funFacts: [
    { en: 'Mexico introduced chocolate, vanilla, and corn to the world', de: 'Mexiko fuhrte der Welt Schokolade, Vanille und Mais ein', zh: '墨西哥向世界介绍了巧克力、香草和玉米' },
    { en: 'Mexico has 35 UNESCO World Heritage Sites', de: 'Mexiko hat 35 UNESCO-Weltkulturerbestatten', zh: '墨西哥有35个联合国教科文组织世界遗产' },
    { en: 'Mexico City has the most museums of any city in the world', de: 'Mexiko-Stadt hat die meisten Museen aller Stadte der Welt', zh: '墨西哥城的博物馆数量居世界城市之首' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Mexicans wear sombreros', de: 'Alle Mexikaner tragen Sombreros', zh: '所有墨西哥人都戴宽边帽' }, explanation: { en: 'Sombreros are traditional attire but rarely worn in daily life', de: 'Sombreros sind traditionelle Kleidung, werden aber im Alltag selten getragen', zh: '宽边帽是传统服饰但很少日常穿戴' } },
    { type: 'fact', statement: { en: 'Mexico introduced chocolate to the world', zh: '墨西哥向世界介绍了巧克力' }, explanation: { en: 'Cacao originated in Mesoamerica, and Mexicans made the first chocolate drink', de: 'Kakao stammt aus Mesoamerika, und Mexikaner machten das erste Schokoladengetrank', zh: '可可原产于中美洲，墨西哥人制作了第一种巧克力饮料' } },
    { type: 'myth', statement: { en: 'All Mexicans are illegal immigrants in the US', de: 'Alle Mexikaner sind illegale Einwanderer in den USA', zh: '所有墨西哥人都是美国的非法移民' }, explanation: { en: 'Most Mexicans live in Mexico; many are skilled professionals', de: 'Die meisten Mexikaner leben in Mexiko; viele sind qualifizierte Fachkrafte', zh: '大多数墨西哥人住在墨西哥；很多是专业人才' } },
    { type: 'fact', statement: { en: 'Mexico has 35 UNESCO World Heritage Sites', zh: '墨西哥有35个联合国教科文组织世界遗产' }, explanation: { en: 'Including ancient ruins, colonial cities, and natural sites', de: 'Einschliesslich antiker Ruinen, Kolonialstadte und Naturstatten', zh: '包括古代遗迹、殖民城市和自然遗址' } },
    { type: 'myth', statement: { en: 'All Mexicans eat super spicy food', de: 'Alle Mexikaner essen extrem scharfes Essen', zh: '所有墨西哥人都吃超辣的食物' }, explanation: { en: 'Mexican cuisine varies by region; not all dishes are spicy', de: 'Die mexikanische Kuchne variiert je nach Region; nicht alle Gerichte sind scharf', zh: '墨西哥菜系因地区而异；不是所有菜都辣' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '~129 million', emoji: '👥' },
    { label: { en: 'Area', zh: '面积' }, value: '1,964,375 km²', emoji: '🗺️' },
    { label: { en: 'Capital', zh: '首都' }, value: 'Mexico City', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Mariachi', zh: '马里亚奇' }, desc: { en: 'Traditional Mexican folk music with trumpets, violins, and guitars', de: 'Traditionelle mexikanische Volksmusik mit Trompeten, Violinen und Gitarren', zh: '传统墨西哥民间音乐，使用小号、小提琴和吉他' }, emoji: '🎺' },
    { name: { en: 'Frida Kahlo Art', zh: '弗里达·卡罗艺术' }, desc: { en: 'Iconic Mexican painter known for self-portraits and vibrant colors', de: 'Ikonische mexikanische Malerin, bekannt fur Selbstportrats und lebendige Farben', zh: '以自画像和鲜艳色彩闻名的标志性墨西哥画家' }, emoji: '🎨' },
  ],
}
