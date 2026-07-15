import type { Culture } from '../../types/culture'

export const australia: Culture = {
  id: 'australia',
  flag: '🇦🇺',
  names: { en: 'Australia', zh: '澳大利亚', de: 'Australien', fr: 'Australie', es: 'Australia', tr: 'Avustralya' },
  region: 'oceania',
  langCode: 'en-AU',
  greetings: [
    { native: "G’day", meaning: { en: 'Good day (very Australian)', zh: '你好 (很澳大利亚)' } },
    { native: 'How ya going?', meaning: { en: 'How are you?', zh: '你好吗？' } },
  ],
  commonPhrases: [
    { native: "G’day", meaning: { en: 'Hello (Australian greeting)', zh: '你好 (澳大利亚问候语)' } },
    { native: 'How ya going?', meaning: { en: 'How are you?', zh: '你好吗？' } },
    { native: "Not bad, mate", meaning: { en: "I’m fine, mate", zh: '还不错，伙计' } },
    { native: 'See ya later', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'No worries', meaning: { en: 'No problem / You are welcome', zh: '没问题 / 不客气' } },
    { native: 'Cheers', meaning: { en: 'Thanks / Goodbye', zh: '谢谢 / 再见' } },
  ],
  food: [
    { name: { en: 'Vegemite on Toast', zh: '酵母酱吐司' }, desc: { en: 'Australian yeast spread on buttered toast', de: 'Australischer Hefeaufstrich auf Buttertoast', zh: '涂在黄油吐司上的澳大利亚酵母酱' }, emoji: '🍞', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vegemite.jpg/320px-Vegemite.jpg' },
    { name: { en: 'Meat Pie', zh: '肉派' }, desc: { en: 'Australian classic savory pastry with minced meat', de: 'Australische klassische herzhafte Pastete mit Hackfleisch', zh: '澳大利亚经典咸味肉馅酥皮派' }, emoji: '🥧', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Meat_pie_Australia.jpg/320px-Meat_pie_Australia.jpg' },
    { name: { en: 'Lamington', zh: '拉明顿蛋糕' }, desc: { en: 'Sponge cake coated in chocolate and coconut', de: 'Biskuitkuchen mit Schokoladen- und Kokosuberzug', zh: '裹巧克力和椰蓉的海绵蛋糕' }, emoji: '🍰', img: '' },
  ],
  festivals: [
    { name: { en: 'Australia Day', zh: '澳大利亚国庆日' }, desc: { en: 'January 26th celebration of Australian national day', de: 'Feier des australischen Nationalfeiertags am 26. Januar', zh: '一月二十六日庆祝澳大利亚国庆日' }, emoji: '🇦🇺', img: '' },
    { name: { en: 'NAIDOC Week', zh: 'NAIDOC周' }, desc: { en: 'Celebrating Aboriginal and Torres Strait Islander culture', de: 'Feier der Kultur der Aborigines und Torres-Strait-Insulaner', zh: '庆祝原住民和托雷斯海峡岛民文化' }, emoji: '🖤', img: '' },
  ],
  landmarks: [
    { name: { en: 'Sydney Opera House', zh: '悉尼歌剧院' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sydney_Opera_House.jpg/320px-Sydney_Opera_House.jpg' },
    { name: { en: 'Uluru (Ayers Rock)', zh: '乌鲁鲁（艾尔斯岩）' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Uluru.jpg/320px-Uluru.jpg' },
    { name: { en: 'Great Barrier Reef', zh: '大堡礁' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Great_Barrier_Reef.jpg/320px-Great_Barrier_Reef.jpg' },
  ],
  etiquette: [
    { emoji: '🦘', tip: { en: 'Australians are very laid-back and casual in conversation', zh: '澳大利亚人非常随和，交谈很随意' } },
    { emoji: '🤝', tip: { en: 'Firm handshake is common; friends may just say gday', zh: '通常用力握手；朋友之间可能只说gday' } },
  ],
  funFacts: [
    { en: 'Australia is the only country that is also a continent', de: 'Australien ist das einzige Land, das auch ein Kontinent ist', zh: '澳大利亚是唯一一个同时也是大陆的国家' },
    { en: 'Australia has more kangaroos than people — about 50 million vs 26 million', zh: '澳大利亚的袋鼠比人还多——约5,000万只 vs 2,600万人' },
    { en: 'The Great Barrier Reef is the largest living structure on Earth, visible from space', de: 'Das Great Barrier Reef ist die grosste lebende Struktur der Erde', zh: '大堡礁是地球上最大的生物结构，从太空中可见' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Australians are descendants of convicts', de: 'Alle Australier sind Nachkommen von Straflingen', zh: '所有澳大利亚人都是罪犯的后代' }, explanation: { en: 'Modern Australia is diverse; convicts were only a small part of early settlement', de: 'Das moderne Australien ist vielfaltig; Straflinge waren nur ein kleiner Teil der fruhen Besiedlung', zh: '现代澳大利亚多元化；罪犯只是早期定居的一小部分' } },
    { type: 'fact', statement: { en: 'Australia is the only country that is also a continent', zh: '澳大利亚是唯一一个同时也是大陆的国家' }, explanation: { en: 'Australia is both a country and the worlds smallest continent', zh: '澳大利亚既是国家也是世界上最小的大陆' } },
    { type: 'myth', statement: { en: 'All Australians surf every day', de: 'Alle Australier surfen jeden Tag', zh: '所有澳大利亚人每天都冲浪' }, explanation: { en: 'Many Australians have never surfed; it is a specific sport near coasts', de: 'Viele Australier haben noch nie gesurft; es ist ein spezifischer Sport an Kusten', zh: '很多澳大利亚人从未冲浪过；这是一项沿海地区的运动' } },
    { type: 'fact', statement: { en: 'Australia has more kangaroos than people', de: 'Australien hat mehr Kangurus als Menschen', zh: '澳大利亚的袋鼠比人还多' }, explanation: { en: 'Estimated 50 million kangaroos across Australia vs 26 million people', zh: '澳大利亚估计有5,000万只袋鼠 vs 2,600万人' } },
    { type: 'myth', statement: { en: 'All dangerous animals are everywhere in Australia', de: 'In Australien gibt es uberall gefahrliche Tiere', zh: '澳大利亚到处都有危险动物' }, explanation: { en: 'Most dangerous animals live in remote areas; cities are as safe as anywhere', de: 'Die meisten gefahrlichen Tiere leben in abgelegenen Gebieten; Stadte sind so sicher wie uberall', zh: '大多数危险动物生活在偏远地区；城市和其他地方一样安全' } },
  ],
  quickStats: [
    { label: { en: 'Population', de: 'Bevolkerung', zh: '人口' }, value: '~26 million', emoji: '👥' },
    { label: { en: 'Area', zh: '面积' }, value: '7,692,024 km²', emoji: '🗺️' },
    { label: { en: 'Capital', de: 'Hauptstadt', zh: '首都' }, value: 'Canberra', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Aboriginal Art', zh: '原住民艺术' }, desc: { en: 'Ancient dot painting tradition telling Dreamtime stories', de: 'Alte Punktmalerei-Tradition, die Traumzeit-Geschichten erzahlt', zh: '讲述梦幻时光故事的古老点画传统' }, emoji: '🎨' },
    { name: { en: 'Didgeridoo', zh: '迪吉里杜管' }, desc: { en: 'Traditional Aboriginal wind instrument made from hollowed tree trunks', de: 'Traditionelles Aborigine-Blasinstrument aus ausgehohlten Baumstammen', zh: '用空心树干制作的传统原住民管乐器' }, emoji: '🪈' },
  ],
}
