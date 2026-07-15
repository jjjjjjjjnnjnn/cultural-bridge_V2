import type { Culture } from '../../types/culture'

export const philippines: Culture = {
  id: 'philippines',
  flag: '🇵🇭',
  names: { en: 'Philippines', zh: '菲律宾', de: 'Philippinen', fr: 'Philippines', es: 'Filipinas', tr: 'Filipinler', ar: '', pt: '', ja: '' },
  region: 'southeastAsia',
  langCode: 'en-PH',
  greetings: [
    { native: 'Kumusta', meaning: { en: 'How are you?', zh: '你好吗?', de: 'Wie geht es Ihnen?' } },
    { native: 'Salamat', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
  ],
  commonPhrases: [
    { native: 'Kumusta', meaning: { en: 'Hello / How are you?', zh: '你好', de: 'Hallo / Wie geht es Ihnen?' } },
    { native: 'Salamat', meaning: { en: 'Thank you', zh: '谢谢', de: 'Danke' } },
    { native: 'Paalam', meaning: { en: 'Goodbye', zh: '再见', de: 'Auf Wiedersehen' } },
    { native: 'Paki-', meaning: { en: 'Please', zh: '请', de: 'Bitte' } },
    { native: 'Pasensya na', meaning: { en: 'Excuse me / Sorry', zh: '对不起', de: 'Entschuldigung' } },
    { native: 'Kamusta ka?', meaning: { en: 'How are you? (detailed)', zh: '你好吗？（详细）', de: 'Wie geht es Ihnen? (ausführlich)' } },
  ],
  food: [
    { name: { en: 'Adobo', zh: '阿多波', de: 'Adobo' }, desc: { en: 'Meat stewed in vinegar and soy', zh: '醋和酱油炖肉', de: 'In Essig und Sojasoße geschmortes Fleisch' }, emoji: '🍖', img: '/images/philippines/food-adobo.jpg' },
    { name: { en: 'Lechon', zh: '烤乳猪', de: 'Lechon' }, desc: { en: 'Roasted whole pig', zh: '烤全猪', de: 'Ganzes Spanferkel am Spieß' }, emoji: '🐷', img: '/images/philippines/food-lechon.jpg' },
  ],
  festivals: [
    { name: { en: 'Sinulog Festival', zh: '辛努洛节', de: 'Sinulog-Fest' }, desc: { en: 'Cultural dance festival', zh: '文化舞蹈节', de: 'Kulturelles Tanzfestival' }, emoji: '💃', img: '' },
  ],
  landmarks: [
    { name: { en: 'Chocolate Hills', zh: '巧克力山', de: 'Schokoladenhügel' }, img: '/images/philippines/landmark-chocolate-hills.jpg' },
    { name: { en: 'Banaue Rice Terraces', zh: '巴纳韦梯田', de: 'Banaue-Reisterrassen' }, img: '/images/philippines/landmark-banaue-rice-terraces.jpg' },
  ],
  etiquette: [
    { emoji: '😊', tip: { en: 'Filipinos are very hospitable', zh: '菲律宾人非常好客', de: 'Filipinos sind sehr gastfreundlich' } },
  ],
  funFacts: [
    { en: 'The Philippines has the world\'s longest Christmas season', zh: '菲律宾有世界上最长的圣诞季节', de: 'Die Philippinen haben die längste Weihnachtszeit der Welt' },
    { en: 'The Philippines is made up of over 7,600 islands', zh: '菲律宾由7,600多个岛屿组成', de: 'Die Philippinen bestehen aus über 7.600 Inseln' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Filipinos work abroad', zh: '所有菲律宾人都在国外工作', de: 'Alle Filipinos arbeiten im Ausland' }, explanation: { en: 'About 10% work abroad, but most live in the Philippines', zh: '约10%在国外工作，但大多数住在菲律宾', de: 'Etwa 10% arbeiten im Ausland, aber die meisten leben auf den Philippinen' } },
    { type: 'fact', statement: { en: 'The Philippines has the world\'s longest Christmas season', zh: '菲律宾有世界上最长的圣诞季节', de: 'Die Philippinen haben die längste Weihnachtszeit der Welt' }, explanation: { en: 'Christmas decorations go up in September and last until January', zh: '圣诞装饰从9月开始，一直持续到1月', de: 'Weihnachtsdekorationen werden im September aufgehängt und bleiben bis Januar' } },
    { type: 'myth', statement: { en: 'All Filipinos are maids or nurses abroad', zh: '所有菲律宾人在国外都做女佣或护士', de: 'Alle Filipinos im Ausland arbeiten als Dienstmädchen oder Krankenschwestern' }, explanation: { en: 'Filipinos work in diverse fields: engineering, IT, healthcare, etc.', zh: '菲律宾人在不同领域工作：工程、IT、医疗等', de: 'Filipinos arbeiten in verschiedenen Bereichen: Ingenieurwesen, IT, Gesundheitswesen usw.' } },
    { type: 'fact', statement: { en: 'The Philippines was a US colony for 48 years', zh: '菲律宾曾是美国殖民地48年', de: 'Die Philippinen waren 48 Jahre lang eine US-Kolonie' }, explanation: { en: 'From 1898 to 1946, which influenced Filipino English and culture', zh: '从1898年到1946年，这影响了菲律宾英语和文化', de: 'Von 1898 bis 1946, was das philippinische Englisch und die Kultur beeinflusste' } },
    { type: 'myth', statement: { en: 'All Filipinos speak perfect English', zh: '所有菲律宾人英语都讲得很好', de: 'Alle Filipinos sprechen perfekt Englisch' }, explanation: { en: 'While English is taught, not everyone speaks it fluently', zh: '虽然教英语，但不是每个人都讲得流利', de: 'Obwohl Englisch unterrichtet wird, sprechen nicht alle es fließend' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口', de: 'Bevölkerung' }, value: '115 million', emoji: '👥' },
    { label: { en: 'Total Islands', zh: '岛屿总数', de: 'Inseln insgesamt' }, value: '7,640+', emoji: '🏝️' },
    { label: { en: 'Languages', zh: '语言', de: 'Sprachen' }, value: '180+ regional languages', emoji: '🗣️' },
  ],
  musicOrArt: [
    { name: { en: 'Tinikling', zh: '竹竿舞', de: 'Tinikling' }, desc: { en: 'Traditional Filipino folk dance with bamboo poles rhythmically tapped together', zh: '传统菲律宾民间舞蹈，竹竿有节奏地敲击在一起', de: 'Traditioneller philippinischer Volkstanz mit rhythmisch zusammengeschlagenen Bambusstangen' }, emoji: '💃' },
    { name: { en: 'Kundiman', zh: '昆迪曼', de: 'Kundiman' }, desc: { en: 'Traditional Filipino love song genre with heartfelt lyrics and gentle melody', zh: '传统菲律宾情歌类型，歌词深情，旋律柔和', de: 'Traditionelles philippinisches Liebeslied-Genre mit herzlichen Texten und sanfter Melodie' }, emoji: '🎵' },
  ],
}
