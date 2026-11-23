const express =
  require("express");

const router =
  express.Router();

const productController =
  require(
    "../controllers/productController"
  );

// ================= PRODUCTS =================

router.get(
  "/products",
  productController.index
);

// ================= CATEGORY =================

router.get(
  "/products/category/:category",
  productController.category
);

// ================= SEARCH =================

router.get(
  "/search",
  productController.search
);

// ================= SHOW =================

router.get(
  "/products/:id",
  productController.show
);

module.exports = router;