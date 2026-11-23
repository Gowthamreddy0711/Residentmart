const sampleProducts = [

  // ================= FRUITS & VEGETABLES =================

  {

    name: "Tomato",

    description: "Fresh farm tomatoes",

    category: "Fruits & Vegetables",

    brand: "Fresh Farm",

    stock: 100,

    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",

    quantities: [

      { label: "250g", price: 15 },

      { label: "500g", price: 30 },

      { label: "1kg", price: 60 },

    ],

  },

  {

    name: "Potato",

    description: "Organic potatoes",

    category: "Fruits & Vegetables",

    brand: "Fresh Farm",

    stock: 120,

    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655",

    quantities: [

      { label: "250g", price: 20 },

      { label: "500g", price: 40 },

      { label: "1kg", price: 80 },

    ],

  },

  {

    name: "Onion",

    description: "Fresh onions",

    category: "Fruits & Vegetables",

    brand: "Fresh Farm",

    stock: 150,

    image:
      "https://images.unsplash.com/photo-1587049352378-854697a0e93d",

    quantities: [

      { label: "250g", price: 25 },

      { label: "500g", price: 50 },

      { label: "1kg", price: 100 },

    ],

  },

  // ================= DAIRY =================

  {

    name: "Milk",

    description: "Pure dairy milk",

    category: "Dairy & Eggs",

    brand: "Amul",

    stock: 80,

    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",

    quantities: [

      { label: "500ml", price: 50 },

      { label: "1L", price: 100 },

      { label: "2L", price: 190 },

    ],

  },

  {

    name: "Cheese",

    description: "Fresh cheese cubes",

    category: "Dairy & Eggs",

    brand: "Britannia",

    stock: 60,

    image:
      "https://images.unsplash.com/photo-1589985643862-8633ae630c2d",

    quantities: [

      { label: "200g", price: 120 },

      { label: "400g", price: 220 },

      { label: "1kg", price: 500 },

    ],

  },

  // ================= GRAINS =================

  {

    name: "Rice",

    description: "Premium basmati rice",

    category: "Grains & Staples",

    brand: "India Gate",

    stock: 200,

    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",

    quantities: [

      { label: "250g", price: 40 },

      { label: "500g", price: 80 },

      { label: "1kg", price: 160 },

    ],

  },

  {

    name: "Wheat Flour",

    description: "Whole wheat flour",

    category: "Grains & Staples",

    brand: "Aashirvaad",

    stock: 110,

    image:
      "https://images.unsplash.com/photo-1574080532539-f39a1a6cb788",

    quantities: [

      { label: "250g", price: 35 },

      { label: "500g", price: 70 },

      { label: "1kg", price: 140 },

    ],

  },

  // ================= BEVERAGES =================

  {

    name: "Orange Juice",

    description: "Fresh orange juice",

    category: "Beverages",

    brand: "Real",

    stock: 70,

    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba",

    quantities: [

      { label: "250ml", price: 45 },

      { label: "500ml", price: 90 },

      { label: "1L", price: 180 },

    ],

  },

  {

    name: "Coca Cola",

    description: "Cold soft drink",

    category: "Beverages",

    brand: "Coca Cola",

    stock: 95,

    image:
      "https://images.unsplash.com/photo-1554866585-c1b9f6cdd599",

    quantities: [

      { label: "250ml", price: 50 },

      { label: "500ml", price: 100 },

      { label: "1L", price: 200 },

      { label: "2L", price: 380 },

    ],

  },

  // ================= SNACKS =================

  {

    name: "Chips Pack",

    description: "Crunchy potato chips",

    category: "Snacks & Packaged Foods",

    brand: "Lays",

    stock: 120,

    image:
      "https://images.unsplash.com/photo-1599599810694-b5ac4dd5b32a",

    quantities: [

      { label: "Small (30g)", price: 20 },

      { label: "Medium (50g)", price: 40 },

      { label: "Large (100g)", price: 80 },

    ],

  },

  {

    name: "Biscuits",

    description: "Cream biscuits",

    category: "Snacks & Packaged Foods",

    brand: "Oreo",

    stock: 140,

    image:
      "https://images.unsplash.com/photo-1589307004390-ecad1d99d9f6",

    quantities: [

      { label: "200g", price: 80 },

      { label: "400g", price: 150 },

      { label: "600g", price: 220 },

    ],

  },

  // ================= OILS =================

  {

    name: "Cooking Oil",

    description: "Refined sunflower oil",

    category: "Oils & Spices",

    brand: "Fortune",

    stock: 90,

    image:
      "https://images.unsplash.com/photo-1604908176997-431bb2f42d5e",

    quantities: [

      { label: "500ml", price: 225 },

      { label: "1L", price: 450 },

      { label: "5L", price: 2100 },

    ],

  },

  {

    name: "Spice Mix",

    description: "Premium masala mix",

    category: "Oils & Spices",

    brand: "Everest",

    stock: 80,

    image:
      "https://images.unsplash.com/photo-1596040708093-25a36d0f2f59",

    quantities: [

      { label: "50g", price: 50 },

      { label: "100g", price: 90 },

      { label: "200g", price: 160 },

    ],

  },

  // ================= PERSONAL CARE =================

  {

    name: "Soap Bar",

    description: "Refreshing bathing soap",

    category: "Personal Care",

    brand: "Dove",

    stock: 150,

    image:
      "https://images.unsplash.com/photo-1607006483225-3b1f3f0d7f64",

    quantities: [

      { label: "1 Piece", price: 70 },

      { label: "4 Pack", price: 240 },

      { label: "8 Pack", price: 440 },

    ],

  },

  // ================= FROZEN =================

  {

    name: "Frozen Vegetables Mix",

    description: "Mixed frozen vegetables",

    category: "Frozen Foods",

    brand: "Safal",

    stock: 60,

    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",

    quantities: [

      { label: "250g", price: 45 },

      { label: "500g", price: 90 },

      { label: "1kg", price: 180 },

    ],

  },

];

module.exports = {

  data: sampleProducts,

};