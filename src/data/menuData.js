export const MENU_CATEGORIES = [
  { id: 'specials', name: 'Pulao & Specials', count: 4, subtitle: 'Clay-oven starters, fragrant leaf-plate pulaos, and refreshing coolers' },
  { id: 'chicken-starters', name: 'Chicken Starters', count: 24, subtitle: 'Crispy Andhra-spiced, wok-tossed and slow-roasted chicken appetisers' },
  { id: 'prawns-fish', name: 'Prawns & Fish', count: 13, subtitle: 'Fresh catch tossed in Andhra bar-style masala and spicy Schezwan glazes' },
  { id: 'egg-starters', name: 'Egg Starters', count: 6, subtitle: 'Homestyle fluffy omelettes, spiced bhurji, and pan-seared egg roasts' },
  { id: 'fried-rice', name: 'Fried Rice', count: 20, subtitle: 'Wok-charred basmati rice in Veg, Egg, Chicken, and Seafood varieties' },
  { id: 'noodles', name: 'Wok Noodles', count: 20, subtitle: 'Hakka wheat noodles tossed on live flames with crisp seasonal greens' },
];

export const MENU_ITEMS = [
  // Gokulam Specials & Pulaos (from photo and receipt)
  {
    id: 'sp-1',
    name: 'Special Chicken Pulav',
    price: 170,
    category: 'specials',
    diet: 'non-veg',
    isSignature: true,
    image: '/assets/gokulam/biryani.webp',
    description: 'Fragrant spiced basmati rice tossed with tender chicken cuts, roasted whole spices, and caramelized onions, served traditionally on eco patravali leaf.'
  },
  {
    id: 'sp-2',
    name: 'Gokulam Egg Pulao',
    price: 139,
    category: 'specials',
    diet: 'egg',
    isSignature: true,
    image: '/assets/gokulam/pulao.webp',
    description: 'Spiced homestyle rice tossed with roasted hard-boiled eggs, caramelized onions, and fresh mint herbs.'
  },
  {
    id: 'sp-3',
    name: 'Crispy Corn',
    price: 119,
    category: 'specials',
    diet: 'veg',
    isSignature: true,
    image: '/assets/gokulam/corn.webp',
    description: 'Golden sweet corn kernels tossed with fresh herbs, cracked pepper, lemon zest, and sliced shallots.'
  },
  {
    id: 'sp-4',
    name: 'Chilled Courtyard Mojitos',
    price: 89,
    category: 'specials',
    diet: 'veg',
    isSignature: false,
    image: '/assets/gokulam/mojitos.webp',
    description: 'Refreshing cool beverages: Electric Blue Curacao, Strawberry Punch, or Fresh Mint Lime.'
  },

  // Chicken Starters
  {
    id: 'cs-tikka',
    name: 'Chicken Tikka',
    price: 200,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: true,
    image: '/assets/gokulam/dish1.webp',
    description: 'Succulent boneless chicken chunks marinated in spiced tandoori yogurt, char-grilled and served with green chutney & onion rings.'
  },
  {
    id: 'cs-1',
    name: 'Chicken Popcorn',
    price: 89,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Bite-sized crispy fried chicken nuggets seasoned with house blend spices.'
  },
  {
    id: 'cs-2',
    name: 'Chicken Nuggets',
    price: 119,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Golden-fried breaded chicken nuggets served piping hot.'
  },
  {
    id: 'cs-3',
    name: 'Chicken Brest Strips',
    price: 129,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Tender seasoned chicken breast strips fried to a delicate crisp.'
  },
  {
    id: 'cs-4',
    name: 'Pepper Chicken',
    price: 139,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Wok-tossed chicken pieces coated in crushed black peppercorns and curry leaf tempering.'
  },
  {
    id: 'cs-5',
    name: 'Chicken Lollipop',
    price: 149,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: true,
    description: 'Frenched chicken wings shaped into lollipops, crisp-fried and tossed in fiery schezwan sauce.'
  },
  {
    id: 'cs-6',
    name: 'Chilli Chicken',
    price: 149,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: true,
    image: '/assets/gokulam/food_2.webp',
    description: 'Classic Indo-Chinese diced chicken sautéed with green chillies, capsicum, soy sauce, and spring greens.'
  },
  {
    id: 'cs-7',
    name: 'Garlic Chicken',
    price: 149,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Pan-tossed chicken cooked with generous roasted garlic slivers and savoury glaze.'
  },
  {
    id: 'cs-8',
    name: 'Chicken Manchuria',
    price: 149,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    image: '/assets/gokulam/manchuria.webp',
    description: 'Fried chicken meatballs tossed in dark garlic, ginger, and coriander Indo-Chinese sauce.'
  },
  {
    id: 'cs-9',
    name: 'Chicken Schezwan',
    price: 149,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Tossed in bold, spicy house-made red chilli Schezwan sauce with crunch.'
  },
  {
    id: 'cs-10',
    name: 'Chicken Roast',
    price: 159,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Traditional slow dry-roasted chicken with aromatic caramelized spices.'
  },
  {
    id: 'cs-11',
    name: 'Chicken 65',
    price: 159,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: true,
    description: 'Iconic South Indian tempered fried chicken with spicy red masala, curry leaves, and green chillies.'
  },
  {
    id: 'cs-12',
    name: 'Dragon Chicken',
    price: 189,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Crispy fried strips tossed with cashews, fiery red chilli paste, and subtle sweetness.'
  },
  {
    id: 'cs-13',
    name: 'Chicken Drum Sticks',
    price: 169,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Juicy whole chicken drumsticks seasoned and roasted to golden perfection.'
  },
  {
    id: 'cs-14',
    name: 'Chicken Majestics',
    price: 169,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: true,
    description: 'Hyderabad legendary dry starter: thinly sliced tender chicken simmered with curd, mint, and spices.'
  },
  {
    id: 'cs-15',
    name: 'Chicken 555',
    price: 169,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Crispy chicken strips tossed in creamy, spicy, and tangy curd-chilli sauce.'
  },
  {
    id: 'cs-16',
    name: 'Chicken Cashew Nut',
    price: 169,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Tender chicken tossed with whole toasted cashew nuts and mild peppers.'
  },
  {
    id: 'cs-17',
    name: 'Ginger Chicken',
    price: 159,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Savoury chicken morsels tossed in fragrant minced ginger and spring onions.'
  },
  {
    id: 'cs-18',
    name: 'Honey Chilli Chicken',
    price: 179,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Crispy chicken coated in a balanced sweet wild honey and hot chilli glaze with sesame.'
  },
  {
    id: 'cs-19',
    name: 'Lemon Basil Chicken',
    price: 179,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Zesty pan-sautéed chicken infused with fresh fragrant basil leaves and lemon squeeze.'
  },
  {
    id: 'cs-20',
    name: 'Pudina Chicken',
    price: 189,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Marinated and cooked with refreshing fresh garden mint paste and whole spices.'
  },
  {
    id: 'cs-21',
    name: 'Chicken Pakodi',
    price: 179,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Crispy spiced besan-coated chicken fritters with crunchy curry leaves.'
  },
  {
    id: 'cs-22',
    name: 'Chinese Fried Chicken',
    price: 199,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Wok-charred battered chicken with classic Chinese five-spice and soy glaze.'
  },
  {
    id: 'cs-23',
    name: 'Malai Chicken',
    price: 299,
    category: 'chicken-starters',
    diet: 'non-veg',
    isSignature: false,
    description: 'Rich and velvety boneless chicken simmered in creamy cashew and cardamom sauce.'
  },

  // Egg Starters
  {
    id: 'es-1',
    name: 'Egg Omlette',
    price: 59,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Fluffy fresh double egg omelette prepared with green chillies, onions, and coriander.'
  },
  {
    id: 'es-2',
    name: 'Egg Bhurji',
    price: 59,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Homestyle spiced scrambled eggs tossed with diced onions and ground spices.'
  },
  {
    id: 'es-3',
    name: 'Boiled Egg Fry',
    price: 99,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Pan-seared boiled eggs dusted with roasted red chilli powder and turmeric.'
  },
  {
    id: 'es-4',
    name: 'Egg Chilli',
    price: 119,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Batter-crisped boiled egg chunks tossed with bell peppers and chilli soya reduction.'
  },
  {
    id: 'es-5',
    name: 'Egg 65',
    price: 119,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Crispy egg bites tossed in Andhra 65 spice tempering with crispy curry leaves.'
  },
  {
    id: 'es-6',
    name: 'Pepper Egg Fry',
    price: 119,
    category: 'egg-starters',
    diet: 'egg',
    isSignature: false,
    description: 'Slow pan-roasted eggs seasoned heavily with coarse black pepper and garlic.'
  },

  // Prawns Starters
  {
    id: 'ps-1',
    name: 'Prawns Manchuria',
    price: 229,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Fresh prawns tossed in dark Indo-Chinese manchurian sauce with scallions.'
  },
  {
    id: 'ps-2',
    name: 'Loose Prawns',
    price: 229,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: true,
    description: 'Golden fried crispy battered prawns seasoned with dry spices and fried herbs.'
  },
  {
    id: 'ps-3',
    name: 'Prawns Schezwan',
    price: 239,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Prawns wok-tossed in robust fiery Schezwan pepper sauce.'
  },
  {
    id: 'ps-4',
    name: 'Prawns Garlic',
    price: 239,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Succulent prawns cooked in fragrant roasted garlic and butter reduction.'
  },
  {
    id: 'ps-5',
    name: 'Prawns Ginger',
    price: 239,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Tossed with fine ginger juliennes, scallions, and light seasoning.'
  },
  {
    id: 'ps-6',
    name: 'Prawns Chilli',
    price: 249,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Spicy pan-seared prawns with sliced capsicums, onions, and dark chilli glaze.'
  },

  // Fish Starters
  {
    id: 'fs-1',
    name: 'Fish Manchuria',
    price: 229,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Boneless tender fish cubes tossed in tangy and savoury Manchurian sauce.'
  },
  {
    id: 'fs-2',
    name: 'Fish Schezwan',
    price: 229,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Crisp fish fillets coated in spicy Schezwan sauce and toasted garlic.'
  },
  {
    id: 'fs-3',
    name: 'Fish Ginger',
    price: 239,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Pan-seared fish slices seasoned with freshly pounded ginger root.'
  },
  {
    id: 'fs-4',
    name: 'Apollo Fish',
    price: 249,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: true,
    description: 'Legendary Andhra bar-style boneless fish strips cooked in spiced curd, curry leaves, and green chillies.'
  },
  {
    id: 'fs-5',
    name: 'Fish 65',
    price: 249,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Crispy marinated fish pieces seasoned with red chilli paste and lemon.'
  },
  {
    id: 'fs-6',
    name: 'Fish Chilli',
    price: 279,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Boneless fish fillets tossed with green chillies, bell peppers, and savoury soy.'
  },
  {
    id: 'fs-7',
    name: 'Brillar Fish Cutlet',
    price: 299,
    category: 'prawns-fish',
    diet: 'seafood',
    isSignature: false,
    description: 'Crisp breadcrumb-crusted fish cutlets seasoned with herb mash.'
  },

  // Fried Rice (Veg & Non-Veg)
  {
    id: 'fr-1',
    name: 'Veg Soft Fried Rice',
    price: 99,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Wok-tossed basmati rice with finely chopped carrots, beans, and cabbage.'
  },
  {
    id: 'fr-2',
    name: 'Veg Schezwan Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Spicy wok-tossed rice with red Schezwan chili paste and crisp vegetables.'
  },
  {
    id: 'fr-3',
    name: 'Singapore Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Aromatic fried rice flavoured with subtle curry powder and vegetables.'
  },
  {
    id: 'fr-4',
    name: 'Butter Garlic Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Rich wok-charred rice tossed with aromatic browned butter and toasted garlic.'
  },
  {
    id: 'fr-5',
    name: 'Chilli Garlic Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Spicy fragrant rice sautéed with fiery red chillies and roasted garlic.'
  },
  {
    id: 'fr-6',
    name: 'Mushroom Tomato Fried Rice',
    price: 119,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Tender button mushrooms and tangy tomato reduction tossed with rice.'
  },
  {
    id: 'fr-7',
    name: 'Geera Fried Rice',
    price: 119,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Aromatic cumin-tempered basmati rice with golden ghee.'
  },
  {
    id: 'fr-8',
    name: 'Paneer Fried Rice',
    price: 119,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Soft cottage cheese cubes tossed with vegetable fried rice.'
  },
  {
    id: 'fr-9',
    name: 'Paneer Mushroom Fried Rice',
    price: 139,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Hearty combination of fresh paneer cubes and sliced mushrooms in seasoned rice.'
  },
  {
    id: 'fr-10',
    name: 'Manchuria Fried Rice',
    price: 149,
    category: 'fried-rice',
    diet: 'veg',
    isSignature: false,
    description: 'Fried rice topped with savory vegetable manchurian balls and rich gravy.'
  },
  {
    id: 'fr-11',
    name: 'Egg Soft Fried Rice',
    price: 99,
    category: 'fried-rice',
    diet: 'egg',
    isSignature: false,
    description: 'Wok-scrambled fluffy eggs tossed with seasoned rice and scallions.'
  },
  {
    id: 'fr-12',
    name: 'Egg Schezwan Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'egg',
    isSignature: false,
    description: 'Egg fried rice tossed in fiery home-blend Schezwan paste.'
  },
  {
    id: 'fr-13',
    name: 'Egg Garlic Fried Rice',
    price: 109,
    category: 'fried-rice',
    diet: 'egg',
    isSignature: false,
    description: 'Savory egg fried rice infused with plenty of fragrant crispy garlic.'
  },
  {
    id: 'fr-14',
    name: 'Chicken Soft Fried Rice',
    price: 119,
    category: 'fried-rice',
    diet: 'non-veg',
    isSignature: true,
    image: '/assets/gokulam/fried_rice.webp',
    description: 'Tender seasoned chicken shreds and scrambled eggs tossed with fragrant basmati rice, served with mirchi ka salan and raita.'
  },
  {
    id: 'fr-15',
    name: 'Chicken Schezwan Fried Rice',
    price: 129,
    category: 'fried-rice',
    diet: 'non-veg',
    isSignature: false,
    description: 'Chicken and egg fried rice tossed with hot Schezwan chilli pepper.'
  },
  {
    id: 'fr-16',
    name: 'Chicken Paneer Soft Fried Rice',
    price: 149,
    category: 'fried-rice',
    diet: 'non-veg',
    isSignature: false,
    description: 'Rich fusion of succulent chicken chunks and soft paneer cubes in wok rice.'
  },
  {
    id: 'fr-17',
    name: 'Mixed Soft Fried Rice',
    price: 159,
    category: 'fried-rice',
    diet: 'non-veg',
    isSignature: false,
    description: 'Loaded wok rice with chicken, eggs, and garden vegetables.'
  },
  {
    id: 'fr-18',
    name: 'Mixed Schezwan Fried Rice',
    price: 169,
    category: 'fried-rice',
    diet: 'non-veg',
    isSignature: false,
    description: 'Spicy mixed rice loaded with chicken, eggs, and bold Schezwan spices.'
  },
  {
    id: 'fr-19',
    name: 'Prawns Fried Rice',
    price: 179,
    category: 'fried-rice',
    diet: 'seafood',
    isSignature: false,
    description: 'Succulent fresh prawns wok-tossed with egg, vegetables, and seasoned rice.'
  },
  {
    id: 'fr-20',
    name: 'Fish Fried Rice',
    price: 199,
    category: 'fried-rice',
    diet: 'seafood',
    isSignature: false,
    description: 'Boneless fish fillets stir-fried with fragrant rice and spring onion.'
  },

  // Noodles (Veg & Non-Veg)
  {
    id: 'nd-1',
    name: 'Veg Soft Noodles',
    price: 99,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Wok-tossed noodles with shredded cabbage, carrots, bell peppers, and mild soy.'
  },
  {
    id: 'nd-2',
    name: 'Veg Schezwan Noodles',
    price: 109,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Noodles tossed in spicy red Schezwan chili paste and crunchy vegetables.'
  },
  {
    id: 'nd-3',
    name: 'Singapore Noodles',
    price: 109,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Mild yellow-curry spiced noodles tossed with julienne vegetables.'
  },
  {
    id: 'nd-4',
    name: 'Butter Garlic Noodles',
    price: 109,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Silky noodles tossed with rich golden butter and fragrant roasted garlic.'
  },
  {
    id: 'nd-5',
    name: 'Chilli Garlic Noodles',
    price: 109,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Spicy noodles with crushed red chilies, roasted garlic, and scallions.'
  },
  {
    id: 'nd-6',
    name: 'Mushroom Tomato Noodles',
    price: 119,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Sliced button mushrooms and tangy tomato sauce tossed with wheat noodles.'
  },
  {
    id: 'nd-7',
    name: 'Geera Noodles',
    price: 119,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Cumin-tempered noodles with aromatic house spices.'
  },
  {
    id: 'nd-8',
    name: 'Paneer Noodles',
    price: 119,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Soft cottage cheese cubes stir-fried with vegetables and noodles.'
  },
  {
    id: 'nd-9',
    name: 'Paneer Mushroom Noodles',
    price: 139,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Comforting stir-fried noodles loaded with both fresh paneer and mushrooms.'
  },
  {
    id: 'nd-10',
    name: 'Manchuria Noodles',
    price: 149,
    category: 'noodles',
    diet: 'veg',
    isSignature: false,
    description: 'Tossed noodles served with savory vegetable manchurian gravy.'
  },
  {
    id: 'nd-11',
    name: 'Egg Soft Noodles',
    price: 99,
    category: 'noodles',
    diet: 'egg',
    isSignature: false,
    description: 'Wok-tossed noodles with scrambled eggs and garden vegetables.'
  },
  {
    id: 'nd-12',
    name: 'Egg Schezwan Noodles',
    price: 109,
    category: 'noodles',
    diet: 'egg',
    isSignature: false,
    description: 'Egg noodles wok-tossed in robust spicy Schezwan sauce.'
  },
  {
    id: 'nd-13',
    name: 'Egg Garlic Noodles',
    price: 109,
    category: 'noodles',
    diet: 'egg',
    isSignature: false,
    description: 'Flavorful egg noodles accented with crispy roasted garlic flakes.'
  },
  {
    id: 'nd-14',
    name: 'Chicken Soft Noodles',
    price: 119,
    category: 'noodles',
    diet: 'non-veg',
    isSignature: true,
    image: '/assets/gokulam/dish2.webp',
    description: 'Wok-tossed noodles with shredded chicken, scrambled eggs, carrots, and spring greens, served with lemon wedge and purple onion.'
  },
  {
    id: 'nd-15',
    name: 'Chicken Schezwan Noodles',
    price: 129,
    category: 'noodles',
    diet: 'non-veg',
    isSignature: false,
    description: 'Chicken and egg noodles tossed in spicy, smoky Schezwan chili paste.'
  },
  {
    id: 'nd-16',
    name: 'Chicken Paneer Soft Noodles',
    price: 149,
    category: 'noodles',
    diet: 'non-veg',
    isSignature: false,
    description: 'Noodles tossed with hearty portions of both chicken and soft paneer.'
  },
  {
    id: 'nd-17',
    name: 'Mixed Soft Noodles',
    price: 159,
    category: 'noodles',
    diet: 'non-veg',
    isSignature: false,
    description: 'Special combination noodles loaded with chicken, eggs, and vegetables.'
  },
  {
    id: 'nd-18',
    name: 'Mixed Schezwan Noodles',
    price: 169,
    category: 'noodles',
    diet: 'non-veg',
    isSignature: false,
    description: 'Spicy mixed noodles with generous chicken and eggs in red Schezwan chili.'
  },
  {
    id: 'nd-19',
    name: 'Prawns Noodles',
    price: 179,
    category: 'noodles',
    diet: 'seafood',
    isSignature: false,
    description: 'Juicy tender prawns wok-tossed with egg and vegetables in springy noodles.'
  },
  {
    id: 'nd-20',
    name: 'Fish Noodles',
    price: 199,
    category: 'noodles',
    diet: 'seafood',
    isSignature: false,
    description: 'Boneless fish fillets wok-fried with savoury noodles and fresh herbs.'
  },
];
