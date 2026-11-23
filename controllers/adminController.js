const Product =
  require("../models/products");

// ================= ADMIN INDEX =================

module.exports.index =
  async (req, res) => {

    const products =
      await Product.find({});

    res.render("admin/index", {

      products,

    });

  };

// ================= NEW PAGE =================

module.exports.newPage =
  (req, res) => {

    res.render("admin/new");

  };

// ================= CREATE =================

module.exports.create =
  async (req, res) => {

    await Product.create(
      req.body
    );

    res.redirect(
      "/admin/products"
    );

  };

// ================= EDIT =================

module.exports.edit =
  async (req, res) => {

    const product =
      await Product.findById(
        req.params.id
      );

    res.render("admin/edit", {

      product,

    });

  };

// ================= UPDATE =================

module.exports.update =
  async (req, res) => {

    await Product.findByIdAndUpdate(

      req.params.id,

      req.body

    );

    res.redirect(
      "/admin/products"
    );

  };

// ================= DELETE =================

module.exports.delete =
  async (req, res) => {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.redirect(
      "/admin/products"
    );

  };