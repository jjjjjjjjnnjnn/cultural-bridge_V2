import type { Culture } from '../../types/culture'

export const brazil: Culture = {
  id: 'brazil',
  flag: '🇧🇷',
  names: { en: 'Brazil', zh: '巴西', de: 'Brasilien', fr: 'Brésil', es: 'Brasil', tr: 'Brezilya' },
  region: 'southAmerica',
  langCode: 'pt-BR',
  greetings: [
    { native: 'Olá', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Obrigado', meaning: { en: 'Thank you (male speaker)', zh: '谢谢（男性）' } },
  ],
  commonPhrases: [
    { native: 'Olá', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'Como vai?', meaning: { en: 'How are you?', zh: '你好吗？' } },
    { native: 'Bem, obrigado', meaning: { en: 'Fine, thanks', zh: '很好，谢谢' } },
    { native: 'Tchau', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'Por favor', meaning: { en: 'Please', zh: '请' } },
    { native: 'Desculpe', meaning: { en: 'Excuse me / Sorry', zh: '打扰一下 / 对不起' } },
  ],
  food: [
    { name: { en: 'Feijoada', zh: '黑豆炖肉' }, desc: { en: 'Black bean stew with pork, Brazils national dish', de: 'Bohneneintopf mit Schweinefleisch, Brasiliens Nationalgericht', zh: '黑豆炖猪肉，巴西国菜' }, emoji: '🍲', img: '/images/brazil/food-feijoada.jpg' },
    { name: { en: 'Açaí Bowl', zh: '阿萨伊果碗' }, desc: { en: 'Frozen açaí berry pulp blended and served as a bowl', zh: '冷冻阿萨伊浆果打成泥装碗食用' }, emoji: '🍇', img: '/images/brazil/food-acai-bowl.jpg' },
    { name: { en: 'Pão de Queijo', zh: '巴西奶酪面包' }, desc: { en: 'Cheese bread rolls made from cassava flour', de: 'Kasebrottchen aus Maniokmehl', zh: '用木薯粉制作的奶酪面包球' }, emoji: '🧀', img: '' },
  ],
  festivals: [
    { name: { en: 'Carnival', zh: '狂欢节' }, desc: { en: 'Worlds biggest carnival with samba parades in Rio', de: 'Der grosste Karneval der Welt mit Samba-Paraden in Rio', zh: '世界上最大的狂欢节，里约热内卢的桑巴游行' }, emoji: '🎭', img: '/images/brazil/festival-carnival.jpg' },
    { name: { en: 'Festa Junina', zh: '六月节' }, desc: { en: 'Traditional June festival with music and dancing', de: 'Traditionelles Juni-Fest mit Musik und Tanz', zh: '传统六月节，有音乐和舞蹈' }, emoji: '🎪', img: '' },
  ],
  landmarks: [
    { name: { en: 'Christ the Redeemer', zh: '基督像' }, img: '/images/brazil/landmark-christ-the-redeemer.jpg' },
    { name: { en: 'Iguazu Falls', zh: '伊瓜苏大瀑布' }, img: '/images/brazil/landmark-iguazu-falls.jpg' },
    { name: { en: 'Amazon Rainforest', zh: '亚马逊雨林' }, img: '' },
  ],
  etiquette: [
    { emoji: '😘', tip: { en: 'Cheek kiss when greeting, usually one or two kisses', zh: '打招呼时亲吻脸颊，通常一到两次' } },
    { emoji: '🍽️', tip: { en: 'Wait for the host to say "bom apetite" before eating', zh: '等主人说"好胃口"后再开始吃' } },
  ],
  funFacts: [
    { en: 'Brazil is the worlds largest coffee producer, producing about 1/3 of global coffee', de: 'Brasilien ist der grosste Kaffeeproduzent der Welt, etwa ein Drittel des weltweiten Kaffees', zh: '巴西是世界上最大的咖啡生产国，生产约世界1/3的咖啡' },
    { en: 'Brazil has over 130 primate species, the most of any country', de: 'Brasilien hat uber 130 Primatenarten, die meisten aller Lander', zh: '巴西有超过130种灵长类动物，是世界上最多的' },
    { en: 'Brazil is the fifth-largest country by both area and population', de: 'Brasilien ist das funftgrosste Land nach Flache und Bevolkerung', zh: '巴西在面积和人口上都是世界第五大国' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Brazilians play soccer', de: 'Alle Brasilianer spielen Fussball', zh: '所有巴西人都踢足球' }, explanation: { en: 'Many Brazilians do not play soccer; they prefer watching or other sports', de: 'Viele Brasilianer spielen nicht Fussball; sie sehen lieber zu oder treiben andere Sportarten', zh: '很多巴西人不踢足球；他们更喜欢看球或其他运动' } },
    { type: 'fact', statement: { en: 'Brazil is the worlds largest coffee producer', zh: '巴西是世界上最大的咖啡生产国' }, explanation: { en: 'Brazil produces about 1/3 of worlds coffee supply', de: 'Brasilien produziert etwa ein Drittel der weltweiten Kaffeemenge', zh: '巴西生产约世界1/3的咖啡供应' } },
    { type: 'myth', statement: { en: 'All Brazilians are happy and dance samba all the time', de: 'Alle Brasilianer sind glucklich und tanzen standig Samba', zh: '所有巴西人都很快乐而且总是跳桑巴' }, explanation: { en: 'Brazilians are diverse; not everyone dances or is always happy', de: 'Brasilianer sind vielfaltig; nicht jeder tanzt oder ist immer glucklich', zh: '巴西人非常多样化；不是每个人都跳舞或总是快乐' } },
    { type: 'fact', statement: { en: 'Brazil has the most species of primates', zh: '巴西拥有最多的灵长类动物物种' }, explanation: { en: 'Over 130 primate species live in Brazils Amazon rainforest', de: 'Uber 130 Primatenarten leben im brasilianischen Amazonas-Regenwald', zh: '超过130种灵长类动物生活在巴西亚马逊雨林' } },
    { type: 'myth', statement: { en: 'All Brazilians live in favelas', de: 'Alle Brasilianer leben in Favelas', zh: '所有巴西人都住在贫民窟' }, explanation: { en: 'Most Brazilians live in normal housing; favelas house about 11% of the population', de: 'Die meisten Brasilianer leben in normalen Wohnungen; Favelas beherbergen etwa 11% der Bevolkerung', zh: '大多数巴西人住在正常住房；贫民窟约住11%的人口' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '~214 million', emoji: '👥' },
    { label: { en: 'Area', zh: '面积' }, value: '8,515,767 km²', emoji: '🗺️' },
    { label: { en: 'Capital', zh: '首都' }, value: 'Brasília', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Samba', zh: '桑巴' }, desc: { en: 'Energetic Brazilian music and dance style central to Carnival', de: 'Lebendiger brasilianischer Musik- und Tanzstil, zentral fur den Karneval', zh: '充满活力的巴西音乐和舞蹈风格，是狂欢节的核心' }, emoji: '🥁' },
    { name: { en: 'Bossa Nova', zh: '波萨诺瓦' }, desc: { en: 'Laid-back Brazilian music style by Tom Jobim and João Gilberto', zh: '由Tom Jobim和João Gilberto推广的悠闲巴西音乐风格' }, emoji: '🎸' },
  ],
}
