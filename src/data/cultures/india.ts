import type { Culture } from '../../types/culture'

export const india: Culture = {
  id: 'india',
  flag: '🇮🇳',
  names: { en: 'India', zh: '印度', de: 'Indien', fr: 'Inde', es: 'India', tr: 'Hindistan', ar: '', pt: '', ja: '' },
  region: 'southAsia',
  langCode: 'hi-IN',
  greetings: [
    { native: 'नमस्ते', romanization: 'Namaste', meaning: { en: 'Hello (with hands pressed)', zh: '你好（合手礼）' } },
    { native: 'धन्यवाद', romanization: 'Dhanyavad', meaning: { en: 'Thank you', zh: '谢谢' } },
  ],
  commonPhrases: [
    { native: 'नमस्ते', romanization: 'Namaste', meaning: { en: 'Hello', zh: '你好' } },
    { native: 'धन्यवाद', romanization: 'Dhanyavad', meaning: { en: 'Thank you', zh: '谢谢' } },
    { native: 'अलविदा', romanization: 'Alvida', meaning: { en: 'Goodbye', zh: '再见' } },
    { native: 'कृपया', romanization: 'Kripya', meaning: { en: 'Please', zh: '请' } },
    { native: 'माफ़ कीजिए', romanization: 'Maaf Kijiye', meaning: { en: 'Excuse me / Sorry', zh: '对不起' } },
    { native: 'आप कैसे हैं?', romanization: 'Aap kaise hain?', meaning: { en: 'How are you?', zh: '你好吗？' } },
  ],
  food: [
    { name: { en: 'Curry', zh: '咖喱' }, desc: { en: 'Spiced sauce with meat/vegetables', zh: '配香料酱汁的肉/蔬菜' }, emoji: '🍛', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_curry.jpg/320px-Chicken_curry.jpg' },
    { name: { en: 'Naan', zh: '馕' }, desc: { en: 'Indian flatbread', zh: '印度扁面包' }, emoji: '🫓', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Naan.jpg/320px-Naan.jpg' },
    { name: { en: 'Biryani', zh: '印度香饭' }, desc: { en: 'Spiced rice with meat', zh: '配香料的肉饭' }, emoji: '🍚', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Biryani.jpg/320px-Biryani.jpg' },
  ],
  festivals: [
    { name: { en: 'Diwali', zh: '排灯节' }, desc: { en: 'Festival of lights', zh: '光之节' }, emoji: '🪔', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Diwali.jpg/320px-Diwali.jpg' },
    { name: { en: 'Holi', zh: '洒红节' }, desc: { en: 'Festival of colors', zh: '色彩节' }, emoji: '🎨', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Holi_festival.jpg/320px-Holi_festival.jpg' },
  ],
  landmarks: [
    { name: { en: 'Taj Mahal', zh: '泰姬陵' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal.jpg/320px-Taj_Mahal.jpg' },
    { name: { en: 'Red Fort', zh: '红堡' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Red_Fort_Delhi.jpg/320px-Red_Fort_Delhi.jpg' },
    { name: { en: 'Gateway of India', zh: '印度门' }, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gateway_of_India.jpg/320px-Gateway_of_India.jpg' },
  ],
  etiquette: [
    { emoji: '🍽️', tip: { en: 'Eat with right hand (left is considered unclean)', zh: '用右手吃饭（左手被认为不洁净）' } },
    { emoji: '👠', tip: { en: 'Remove shoes before entering homes/temples', zh: '进屋/寺庙前要脱鞋' } },
  ],
  funFacts: [
    { en: 'India is the worlds largest democracy', zh: '印度是世界上最大的民主国家' },
    { en: 'India invented zero and chess', zh: '印度发明了零和象棋' },
  ],
  biases: [
    { type: 'myth', statement: { en: 'All Indians are vegetarians', zh: '所有印度人都是素食主义者' }, explanation: { en: 'Many Indians eat meat, though some are vegetarian (about 30%)', zh: '很多印度人吃肉，虽然有些是素食者（约30%）' } },
    { type: 'fact', statement: { en: 'India is the worlds largest democracy', zh: '印度是世界上最大的民主国家' }, explanation: { en: 'With over 1.4 billion people, India has the largest electorate', zh: '超过14亿人口，印度拥有最大的选民群体' } },
    { type: 'myth', statement: { en: 'All Indians speak Hindi', zh: '所有印度人都讲印地语' }, explanation: { en: 'India has 22 official languages; Hindi is not spoken in all regions', zh: '印度有22种官方语言；印地语并非所有地区都讲' } },
    { type: 'fact', statement: { en: 'India invented zero and chess', zh: '印度发明了零和象棋' }, explanation: { en: 'The concept of zero was documented in India around 458 AD', zh: '零的概念约在公元458年在印度被记录' } },
    { type: 'myth', statement: { en: 'All Indians are IT engineers', zh: '所有印度人都是IT工程师' }, explanation: { en: 'While India has a large IT sector, most Indians work in agriculture, manufacturing, etc.', zh: '虽然印度有大型IT行业，但大多数印度人从事农业、制造业等' } },
  ],
  quickStats: [
    { label: { en: 'Population', zh: '人口' }, value: '1.4B+', emoji: '👥' },
    { label: { en: 'Official Languages', zh: '官方语言' }, value: '22', emoji: '🗣️' },
    { label: { en: 'UNESCO Sites', zh: '世界遗产' }, value: '40', emoji: '🏛️' },
  ],
  musicOrArt: [
    { name: { en: 'Bollywood Music', zh: '宝莱坞音乐' }, desc: { en: 'Vibrant film music blending traditional Indian and modern pop', zh: '融合传统印度和现代流行的充满活力的电影音乐' }, emoji: '🎵' },
  ],
}
