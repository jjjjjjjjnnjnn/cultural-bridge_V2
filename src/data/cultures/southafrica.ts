import type { Culture } from '../../types/culture'

export const southafrica: Culture = {
  id: 'southafrica',
  flag: '🇿🇦',
  names: { en: 'South Africa', zh: '南非', de: 'Südafrika', fr: 'Afrique du Sud', es: 'Sudáfrica', tr: 'Güney Afrika' },
  region: 'africa',
  langCode: 'en-ZA',
  greetings: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Howzit', meaning: { en: 'How is it going? (informal)', zh: '怎么样? (非正式)' } },
  ],
  commonPhrases: [
    { native: 'Hello', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Howzit?', meaning: { en: 'How are you?', zh: '你好吗？' } },
    { native: "I’m fine, thanks", meaning: { en: "I’m fine, thanks", zh: '我很好，谢谢' } },
    { native: 'Cheers', meaning: { en: 'Thanks / Goodbye', zh: '谢谢 / 再见' } },
    { native: 'Please', meaning: { en: 'Please', zh: '请' } },
    { native: 'Yes, no', meaning: { en: 'Sure / OK (South African idiom)', zh: '当然 / 好的 (南非用语)' } },
  ],
  food: [
    { name: { en: 'Bobotie', de: 'Bobotie', zh: '南非肉馅饼' }, desc: { en: 'Spiced minced meat bake with egg topping', zh: '香料肉末烤饼配蛋液顶层' }, emoji: '🥧', img: '' },
    { name: { en: 'Biltong', de: 'Biltong', zh: '南非牛肉干' }, desc: { en: 'Dried cured meat snack', zh: '风干腌肉零食' }, emoji: '🥩', img: '' },
    { name: { en: 'Braai', zh: '南非烧烤' }, desc: { en: 'South African barbecue, a national tradition', zh: '南非烧烤，一项国家传统' }, emoji: '🔥', img: '' },
  ],
  festivals: [
    { name: { en: 'Heritage Day', de: 'Kulturerbetag', zh: '遗产日' }, desc: { en: 'Celebrating South African culture and diversity', zh: '庆祝南非文化和多样性' }, emoji: '🎭', img: '' },
    { name: { en: 'Freedom Day', de: 'Freiheitstag', zh: '自由日' }, desc: { en: 'Commemorating the first democratic elections in 1994', zh: '纪念1994年首次民主选举' }, emoji: '🕊️', img: '' },
  ],
  landmarks: [
    { name: { en: 'Table Mountain', zh: '桌山' }, img: '/images/southafrica/landmark-table-mountain.jpg' },
    { name: { en: 'Robben Island', zh: '罗本岛' }, img: '/images/southafrica/landmark-robben-island.jpg' },
    { name: { en: 'Kruger National Park', zh: '克鲁格国家公园' }, img: '' },
  ],
  etiquette: [
    { emoji: '🤝', tip: { en: 'Handshakes are common when greeting', zh: '打招呼时握手很常见' } },
    { emoji: '🌍', tip: { en: 'Be respectful of the 11 official languages and diverse cultures', zh: '尊重11种官方语言和多元文化' } },
  ],
  funFacts: [
    { en: 'South Africa has 11 official languages, including Zulu, Xhosa, and Afrikaans', de: 'Sudafrika hat 11 Amtssprachen, darunter Zulu, Xhosa und Afrikaans', zh: '南非有11种官方语言，包括祖鲁语、科萨语和南非荷兰语' },
    { en: 'South Africa is the only country where you can see wild penguins', de: 'Sudafrika ist das einzige Land, in dem man wilde Pinguine sehen kann', zh: '南非是唯一可以看到野生企鹅的国家' },
    { en: 'South Africa has three capital cities: Pretoria, Cape Town, and Bloemfontein', de: 'Sudafrika hat drei Hauptstadte: Pretoria, Kapstadt und Bloemfontein', zh: '南非有三个首都：比勒陀利亚、开普敦和布隆方丹' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All South Africans have lions in their backyards', de: 'Alle Sudafrikaner haben Lowen in ihrem Hinterhof', zh: '所有南非人家后院都有狮子' }, explanation: { en: 'Lions live in wildlife reserves, not residential areas', de: 'Lowen leben in Wildreservaten, nicht in Wohngebieten', zh: '狮子生活在野生动物保护区，不是居民区' } },
    { type: 'fact', statement: { en: 'South Africa has 11 official languages', zh: '南非有11种官方语言' }, explanation: { en: 'Including Zulu, Xhosa, Afrikaans, English, and more', de: 'Darunter Zulu, Xhosa, Afrikaans, Englisch und mehr', zh: '包括祖鲁语、科萨语、南非荷兰语、英语等' } },
    { type: 'myth', statement: { en: 'All South Africans speak Afrikaans', de: 'Alle Sudafrikaner sprechen Afrikaans', zh: '所有南非人都讲南非荷兰语' }, explanation: { en: 'Only about 13.5% speak Afrikaans as their first language', de: 'Nur etwa 13,5% sprechen Afrikaans als Muttersprache', zh: '只有约13.5%的人以南非荷兰语为第一语言' } },
    { type: 'fact', statement: { en: 'South Africa has one of the most beautiful coastlines in the world', de: 'Sudafrika hat eine der schonsten Kusten der Welt', zh: '南非拥有世界上最美丽的海岸线之一' }, explanation: { en: 'With over 2,500 km of coastline along two oceans', de: 'Mit uber 2.500 km Kuste entlang zweier Ozeane', zh: '拥有超过2,500公里的海岸线，濒临两大洋' } },
    { type: 'myth', statement: { en: 'All South Africans love rugby', de: 'Alle Sudafrikaner lieben Rugby', zh: '所有南非人都喜欢橄榄球' }, explanation: { en: 'While rugby is popular, many prefer soccer or cricket', de: 'Obwohl Rugby beliebt ist, bevorzugen viele Fussball oder Cricket', zh: '虽然橄榄球很受欢迎，但很多人更喜欢足球或板球' } },
  ],
  quickStats: [
    { label: { en: 'Population', de: 'Bevolkerung', zh: '人口' }, value: '~60 million', emoji: '👥' },
    { label: { en: 'Area', zh: '面积' }, value: '1,221,037 km²', emoji: '🗺️' },
    { label: { en: 'Capital', de: 'Hauptstadt', zh: '首都' }, value: 'Pretoria / Cape Town / Bloemfontein', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Mbube / Isicathamiya', zh: '姆布贝/伊西卡塔米亚' }, desc: { en: 'Vocal harmony style made famous by Ladysmith Black Mambazo', de: 'Vokalharmonie-Stil, beruhmt geworden durch Ladysmith Black Mambazo', zh: '由Ladysmith Black Mambazo演唱的和声风格' }, emoji: '🎤' },
    { name: { en: 'Gumboot Dance', zh: '雨靴舞' }, desc: { en: 'Traditional dance originated from gold miners wearing rubber boots', de: 'Traditioneller Tanz, der von Goldminenarbeitern mit Gummistiefeln stammt', zh: '源自金矿工人穿着雨靴的传统舞蹈' }, emoji: '👢' },
  ],
}
