# 缺失的游戏图片提示词 — 需要生成

## 现有图片（无需生成）
`public/images/games/` 目录已有 20 张图片：
- food/ 12 张：dumplings, sushi, pretzel, croissant, paella, curry, tacos, barbecue, pho, satay, manti
- landmarks/ 8 张：colosseum, eiffel, taj-mahal, great-wall, machu-picchu, christ, alhambra, pyramids

## 需要新增的 21 张图片

### 美食匹配游戏 — 13 张新图片
保存到 `public/images/games/food/`

| 文件名 | 提示词（英文，供 AI 使用） |
|--------|---------------------------|
| `food-spaghetti.jpg` | Spaghetti carbonara on a white plate, Italian pasta dish, creamy sauce, fresh parsley garnish, warm restaurant lighting, food photography |
| `food-pierogi.jpg` | Polish pierogi dumplings on a ceramic plate, golden brown, sour cream on top, melted butter, rustic wooden table, comfort food |
| `food-injera.jpg` | Ethiopian injera flatbread on a large platter, spongy texture, various colorful stew toppings, traditional Ethiopian cuisine |
| `food-shawarma.jpg` | Lebanese chicken shawarma wrap cut in half, garlic sauce dripping, pickles visible, toasted wrap, street food style |
| `food-kimchi.jpg` | Korean kimchi in an earthenware pot, fermented napa cabbage, red gochugaru chili flakes, vibrant red colors |
| `food-feijoada.jpg` | Brazilian feijoada black bean stew in a clay pot, pork pieces visible, served with rice and orange slices |
| `food-empanada.jpg` | Argentinian baked empanadas golden brown, crimped edges, on a wooden board, chimichurri sauce on the side |
| `food-bunny-chow.jpg` | South African bunny chow, hollowed-out bread loaf filled with curry, street food style, Durban cuisine |
| `food-baguette.jpg` | Fresh French baguette on a wooden cutting board, golden crust, scoring marks, rustic bakery style |
| `food-borscht.jpg` | Ukrainian borscht beet soup in a bowl, deep red color, dollop of sour cream, fresh dill garnish |
| `food-hainanese-rice.jpg` | Hainan chicken rice, poached chicken on fragrant rice, ginger scallion oil, dark soy sauce, Singaporean cuisine |
| `food-couscous.jpg` | Moroccan couscous in a traditional tagine, fluffy semolina, colorful vegetables, chickpeas, dried fruits |
| `food-pavlova.jpg` | New Zealand pavlova dessert, crisp meringue shell, soft center, whipped cream, fresh berries and kiwi |

### 地标匹配游戏 — 8 张新图片
保存到 `public/images/games/landmarks/`

| 文件名 | 提示词（英文） |
|--------|---------------|
| `landmark-parthenon.jpg` | Parthenon temple on the Acropolis in Athens Greece, ancient marble columns, blue sky, golden hour lighting |
| `landmark-angkor-wat.jpg` | Angkor Wat temple complex in Cambodia, five towers reflected in the water pool, sunrise, dramatic sky |
| `landmark-forbidden-city.jpg` | Forbidden City in Beijing China, red walls and golden roof tiles, grand palace architecture, clear day |
| `landmark-petra.jpg` | Petra Treasury Al-Khazneh in Jordan, carved into rose-red rock face, dramatic canyon setting |
| `landmark-neuschwanstein.jpg` | Neuschwanstein Castle in Bavaria Germany, fairy tale castle on a mountain, autumn foliage, misty valley |
| `landmark-hagia-sophia.jpg` | Hagia Sophia in Istanbul Turkey, grand dome, minarets, Byzantine architecture, sunset lighting |
| `landmark-moai.jpg` | Moai statues on Easter Island Chile, monolithic stone heads, green grassy hills, Pacific Ocean background |
| `landmark-stonehenge.jpg` | Stonehenge in England, ancient standing stones, golden sunset, Salisbury Plain landscape |

## 使用方式

1. 将以上提示词发给 AI 图片生成工具（Midjourney / DALL-E / Stable Diffusion 等）
2. 将生成的图片保存到 `public/images/games/food/` 和 `public/images/games/landmarks/`
3. 保存后运行：`npm run dev` 即可在游戏中查看

## 游戏图片的文件命名规范

- 食物: `food-{英文名称}.jpg`（全小写，连字符连接）
- 地标: `landmark-{英文名称}.jpg`（全小写，连字符连接）
- 格式: JPG，建议宽 400-600px，小于 100KB
