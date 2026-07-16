# Images that need to be generated or verified

The culture `.ts` files reference images at `/images/[culture]/[name].jpg`. These are Wikimedia Commons URLs that were downloaded earlier. **Please verify that ALL these files exist in `public/images/`** and generate any that are missing.

## Currently in `public/images/`: 149 files across 25 cultures

Run this command to list what's missing:
```
for f in src/data/cultures/*.ts; do
  name=$(basename $f .ts)
  [ "$name" = "index" ] && continue
  grep -oP "img: '/images/[^']+'" "$f" | while read line; do
    path=$(echo "$line" | grep -oP "/images/[^']+")
    if [ ! -f "public$path" ]; then
      echo "MISSING: public$path"
    fi
  done
done
```

## NEW images needed for games

The game screens need images too. Currently using emoji as fallback.

### For Food Match Game (`src/screens/GamePlayScreen.tsx`)
Generate these and save to `public/images/games/food/`:
| File | Prompt |
|------|--------|
| food-dumplings.jpg | Chinese dumplings in bamboo steamer, white ceramic plate, warm lighting |
| food-sushi.jpg | Fresh sushi platter on wooden board, salmon tuna rolls, soy sauce |
| food-pretzel.jpg | German pretzel with salt crystals, golden brown, isolated |
| food-croissant.jpg | Flaky French butter croissant, golden layers, side view |
| food-pizza.jpg | Neapolitan pizza margherita, wood-fired, melted mozzarella |
| food-paella.jpg | Spanish seafood paella in large pan, saffron rice, shrimp |
| food-curry.jpg | Indian butter chicken curry bowl, naan bread, vibrant colors |
| food-tacos.jpg | Mexican street tacos with salsa, lime wedge, fresh cilantro |
| food-barbecue.jpg | American BBQ ribs, smoky glaze, coleslaw |
| food-pho.jpg | Vietnamese pho noodle soup, beef slices, fresh herbs |
| food-satay.jpg | Indonesian chicken satay skewers, peanut sauce |
| food-manti.jpg | Turkish manti dumplings with yogurt sauce, mint |

### For Landmark Match Game
Save to `public/images/games/landmarks/`:
| File | Prompt |
|------|--------|
| landmark-colosseum.jpg | Roman Colosseum at golden hour, ancient Roman architecture |
| landmark-eiffel.jpg | Eiffel Tower in Paris, spring cherry blossoms, blue sky |
| landmark-taj-mahal.jpg | Taj Mahal sunrise reflection pool, Agra India |
| landmark-great-wall.jpg | Great Wall of China winding on mountain ridge |
| landmark-machu-picchu.jpg | Machu Picchu citadel, Andes mountains, misty morning |
| landmark-christ.jpg | Christ the Redeemer statue Rio de Janeiro, sunset |
| landmark-alhambra.jpg | Alhambra palace Granada Spain, Moorish architecture |
| landmark-pyramids.jpg | Great Pyramids of Giza Egypt, camels, golden desert |

## How to integrate game images

After generating, update `GamePlayScreen.tsx`:
- Replace `'🥟 Dumplings'` in `FOOD_QA` with `<img>` tags or add an `img` field to each QA item
- Replace `'🏛️ Colosseum'` in `LANDMARK_QA` with image-backed cards

This requires adding an `img` field to each question item's type interface.
