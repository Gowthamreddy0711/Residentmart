const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(

  {

    // ================= NAME =================

    name: {

      type: String,

      required: true,

      trim: true,

    },

    // ================= DESCRIPTION =================

    description: {

      type: String,

      trim: true,

      default: "",

    },

    // ================= IMAGE =================

    image: {

      type: String,

      default:
        "https://via.placeholder.com/300?text=No+Image",

      set: (v) =>

        v === ""

          ? "https://via.placeholder.com/300?text=No+Image"

          : v,

      match: /^https?:\/\/.+/,

    },

    // ================= CATEGORY =================

    category: {

      type: String,

      required: true,

      enum: [

        "Fruits & Vegetables",

        "Dairy & Eggs",

        "Grains & Staples",

        "Beverages",

        "Snacks & Packaged Foods",

        "Personal Care",

        "Household & Cleaning",

        "Oils & Spices",

        "Frozen Foods",

        "Bakery & Breads",

      ],

    },

    // ================= BRAND =================

    brand: {

      type: String,

      default: "ResidentMart",

    },

    // ================= STOCK =================

    stock: {

      type: Number,

      required: true,

      default: 100,

      min: 0,

    },

    // ================= DISCOUNT =================

    discount: {

      type: Number,

      default: 0,

      min: 0,

      max: 100,

    },

    // ================= PRODUCT VARIATIONS =================

    quantities: [

      {

        label: {

          type: String,

          required: true,

          trim: true,

        },

        price: {

          type: Number,

          required: true,

          min: 0,

        },

      },

    ],

  },

  {

    timestamps: true,

  }

);

// ================= FINAL PRICE =================

productSchema.virtual("finalPrice").get(function () {

  if (

    this.quantities &&

    this.quantities.length > 0

  ) {

    const firstPrice =

      this.quantities[0].price;

    return (

      firstPrice -

      (firstPrice * this.discount) / 100

    );

  }

  return 0;

});

// ================= SEARCH INDEX =================

productSchema.index({

  name: "text",

  brand: "text",

  category: "text",

});

// ================= EXPORT =================

module.exports = mongoose.model(

  "Product",

  productSchema

);