# Cultural Bridge — Image Generation Guide

请使用另一个能生成/识别图片的 AI，根据以下提示词生成文化相关图片，并放入对应路径。

---

## 📁 图片存放位置

所有图片放在 `public/images/` 目录下，例如：

```
public/images/china/dumplings.jpg
public/images/china/new-year.jpg
public/images/japan/sushi.jpg
```

---

## 🖼️ 需要生成的图片清单

### 东亚 (East Asia)

#### 🇨🇳 China
| 文件名 | 提示词 (中文) | 提示词 (English) |
|--------|--------------|------------------|
| `china/food-dumplings.jpg` | 一笼热气腾腾的中国饺子，木制蒸笼，白色陶瓷碟，暖色灯光，美食摄影风格 | Chinese dumplings in bamboo steamer, white ceramic plate, warm lighting, food photography |
| `china/food-fried-rice.jpg` | 一盘蛋炒饭，配青豆胡萝卜，中式炒锅背景 | Chinese fried rice with eggs, peas and carrots, wok in background |
| `china/food-peking-duck.jpg` | 片好的北京烤鸭，薄饼，甜面酱，黄瓜丝，精致摆盘 | Peking duck sliced thin with pancakes, hoisin sauce, cucumber, fine dining |
| `china/festival-new-year.jpg` | 中国春节，红灯笼，烟花，舞龙，热闹街景 | Chinese New Year celebration, red lanterns, fireworks, dragon dance |
| `china/festival-mid-autumn.jpg` | 中秋节月饼，圆月，灯笼，家庭团聚 | Mid-Autumn Festival mooncakes, full moon, lanterns, family reunion |
| `china/landmark-great-wall.jpg` | 长城蜿蜒在山脊上，秋天红叶，蓝天 | Great Wall winding on mountain ridge, autumn leaves, blue sky |

#### 🇯🇵 Japan
| 文件名 | 提示词 |
|--------|--------|
| `japan/food-sushi.jpg` | Assorted sushi platter on wooden board, fresh salmon and tuna, Japanese restaurant |
| `japan/food-ramen.jpg` | Bowl of tonkotsu ramen with chashu pork, soft egg, nori, steaming broth |
| `japan/festival-cherry-blossom.jpg` | Cherry blossom trees in full bloom, Japanese garden, pink petals |
| `japan/landmark-fuji.jpg` | Mount Fuji with snow cap, reflection in lake, clear blue sky |

#### 🇰🇷 South Korea
| 文件名 | 提示词 |
|--------|--------|
| `korea/food-kimchi.jpg` | Various kimchi varieties in ceramic bowls, Korean banchan spread |
| `korea/food-bibimbap.jpg` | Bibimbap in stone bowl with egg, vegetables, gochujang sauce |
| `korea/festival-chuseok.jpg` | Korean Chuseok harvest festival, family in hanbok, food spread |
| `korea/landmark-gyeongbokgung.jpg` | Gyeongbokgung Palace in Seoul, traditional Korean architecture |

---

### 东南亚 (Southeast Asia)

#### 🇹🇭 Thailand
| 文件名 | 提示词 |
|--------|--------|
| `thailand/food-pad-thai.jpg` | Pad Thai noodles with shrimp, peanuts, lime, Thai street food style |
| `thailand/landmark-wat-arun.jpg` | Wat Arun temple at dawn, Bangkok, golden reflection on river |

#### 🇻🇳 Vietnam
| 文件名 | 提示词 |
|--------|--------|
| `vietnam/food-pho.jpg` | Bowl of Pho with beef slices, herbs, lime, Vietnamese noodle soup |
| `vietnam/landmark-ha-long.jpg` | Ha Long Bay limestone islands, emerald water, junk boats |

#### 🇸🇬 Singapore
| 文件名 | 提示词 |
|--------|--------|
| `singapore/landmark-marina-bay.jpg` | Marina Bay Sands hotel and Supertree Grove at night, Singapore skyline |

---

### 南亚 (South Asia)

#### 🇮🇳 India
| 文件名 | 提示词 |
|--------|--------|
| `india/food-curry.jpg` | Indian butter chicken curry in bowl, naan bread, colorful spices |
| `india/landmark-taj-mahal.jpg` | Taj Mahal at sunrise, reflection pool, symmetrical view |

---

### 中东 (Middle East)

#### 🇹🇷 Turkey
| 文件名 | 提示词 |
|--------|--------|
| `turkey/food-kebab.jpg` | Turkish kebab skewers, grilled vegetables, rice, Anatolian style |
| `turkey/landmark-hagia-sophia.jpg` | Hagia Sophia in Istanbul, grand dome, historic architecture |

#### 🇦🇪 UAE
| 文件名 | 提示词 |
|--------|--------|
| `uae/landmark-burj-khalifa.jpg` | Burj Khalifa tower, Dubai skyline, golden sunset |

---

### 欧洲 (Europe)

#### 🇩🇪 Germany
| 文件名 | 提示词 |
|--------|--------|
| `germany/food-bratwurst.jpg` | German bratwurst with sauerkraut, mustard, pretzel, beer, Bavarian style |
| `germany/festival-oktoberfest.jpg` | Oktoberfest celebration, beer tents, people in dirndl and lederhosen |
| `germany/landmark-cologne-cathedral.jpg` | Cologne Cathedral Gothic architecture, detailed stone work |

#### 🇫🇷 France
| 文件名 | 提示词 |
|--------|--------|
| `france/food-croissant.jpg` | Flaky butter croissant on Parisian cafe table, coffee |
| `france/landmark-eiffel-tower.jpg` | Eiffel Tower, spring cherry blossoms, Paris |

#### 🇬🇧 UK
| 文件名 | 提示词 |
|--------|--------|
| `uk/food-fish-chips.jpg` | British fish and chips wrapped in newspaper, tartar sauce |
| `uk/landmark-big-ben.jpg` | Big Ben and Houses of Parliament, London, blue sky |

#### 🇮🇹 Italy
| 文件名 | 提示词 |
|--------|--------|
| `italy/food-pizza.jpg` | Authentic Neapolitan pizza margherita, wood-fired, melted mozzarella |
| `italy/landmark-colosseum.jpg` | Roman Colosseum at golden hour, ancient architecture |

#### 🇪🇸 Spain
| 文件名 | 提示词 |
|--------|--------|
| `spain/food-paella.jpg` | Spanish paella with seafood, saffron rice, in large pan |
| `spain/landmark-sagrada-familia.jpg` | Sagrada Familia basilica, Gaudi architecture, Barcelona |

#### 🇷🇺 Russia
| 文件名 | 提示词 |
|--------|--------|
| `russia/landmark-st-basils.jpg` | St. Basil's Cathedral, colorful onion domes, Red Square, Moscow |

---

### 非洲 (Africa)

#### 🇪🇬 Egypt
| 文件名 | 提示词 |
|--------|--------|
| `egypt/landmark-pyramids.jpg` | Great Pyramids of Giza at sunset, camels, golden desert |

#### 🇿🇦 South Africa
| 文件名 | 提示词 |
|--------|--------|
| `southafrica/landmark-table-mountain.jpg` | Table Mountain overlooking Cape Town, coastline, ocean view |

---

### 美洲 (Americas)

#### 🇺🇸 USA
| 文件名 | 提示词 |
|--------|--------|
| `usa/food-burger.jpg` | Classic American cheeseburger with fries, diner style |
| `usa/landmark-statue-liberty.jpg` | Statue of Liberty, New York harbor, blue sky |

#### 🇨🇦 Canada
| 文件名 | 提示词 |
|--------|--------|
| `canada/landmark-niagara.jpg` | Niagara Falls, rainbow, mist, Canadian side view |

#### 🇧🇷 Brazil
| 文件名 | 提示词 |
|--------|--------|
| `brazil/landmark-christ-redeemer.jpg` | Christ the Redeemer statue, Rio de Janeiro, sunset |

#### 🇲🇽 Mexico
| 文件名 | 提示词 |
|--------|--------|
| `mexico/food-tacos.jpg` | Mexican street tacos with salsa, lime, cilantro, colorful |
| `mexico/landmark-chichen-itza.jpg` | Chichen Itza pyramid, Mayan ruins, Yucatan, blue sky |

---

### 大洋洲 (Oceania)

#### 🇦🇺 Australia
| 文件名 | 提示词 |
|--------|--------|
| `australia/landmark-sydney-opera.jpg` | Sydney Opera House and Harbour Bridge, sunny day |

#### 🇳🇿 New Zealand
| 文件名 | 提示词 |
|--------|--------|
| `newzealand/landmark-milford-sound.jpg` | Milford Sound fiord, waterfalls, green mountains, mirror water |

---

## 🔧 如何在代码中引用图片

文化数据文件在 `src/data/cultures/[id].ts` 中，`img` 字段就是图片路径。

**修改前（Wikipedia URL）：**
```typescript
img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/...'
```

**修改后（本地图片）：**
```typescript
img: '/images/china/food-dumplings.jpg'
```

所有 `img` 字段都在这些文件中：
```
src/data/cultures/china.ts
src/data/cultures/japan.ts
src/data/cultures/korea.ts
... (总共 25 个文件)
```

---

## 📝 给另一个 AI 的具体指令模板

> "我为 Cultural Bridge 网站生成文化图片。请读取 `[文件名].ts` 中的所有 `img:` 字段，把 Wikipedia URL 换成本地图片路径 `/images/[id]/[filename].jpg`，并在 `public/images/[id]/` 目录下创建对应的 JPG 图片文件。图片风格统一：暖色调、美食摄影/旅行摄影风格、16:9 横版、适合移动端卡片展示。"
