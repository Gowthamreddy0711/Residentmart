const Product =
  require("../models/products");

// ================= ALL PRODUCTS =================

module.exports.index =
  async (req, res) => {

    const products =
      await Product.find({});

    const grouped = {};

    products.forEach((p) => {

      if(!grouped[p.category]) {

        grouped[p.category] = [];

      }

      grouped[p.category].push(p);

    });

    res.render("user/products", {

      grouped,
      searchQuery: "",
      cart:
        req.session.cart || []

    });

  };

// ================= CATEGORY =================

module.exports.category =
  async (req, res) => {

    const category =
      req.params.category;

    const products =
      await Product.find({
        category,
      });

    const grouped = {

      [category]: products,

    };

    res.render("user/products", {

      grouped,
      selectedCategory:
        category,

      searchQuery: "",

      cart:
        req.session.cart || []

    });

  };

// ================= SEARCH =================

module.exports.search =
  async (req, res) => {

    const query =
      req.query.q;

    if(
      !query ||
      query.trim() === ""
    ) {

      return res.redirect(
        "/products"
      );

    }

    const products =
      await Product.find({

        name: {

          $regex: query,
          $options: "i",

        },

      });

    const grouped = {};

    products.forEach((p) => {

      if(!grouped[p.category]) {

        grouped[p.category] = [];

      }

      grouped[p.category].push(p);

    });

    res.render("user/products", {

      grouped,
      searchQuery: query,

      cart:
        req.session.cart || []

    });

  };

// ================= SHOW =================

module.exports.show =
  async (req, res) => {

    const product =
      await Product.findById(
        req.params.id
      );

    const cart =
      req.session.cart || [];

    const cartItem =
      cart.find(

        (item) =>

          item.productId ===
          product._id.toString()

      );

    res.render("user/show", {

      product,
      cartItem,

    });

  };