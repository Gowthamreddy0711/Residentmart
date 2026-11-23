const express =
  require("express");

const router =
  express.Router();

const cartController =
  require(
    "../controllers/cartController"
  );

// ================= CART =================

router.get(
  "/cart",
  cartController.cart
);

// ================= ADD =================

router.post(
  "/cart/add/:id",
  cartController.add
);

// ================= INCREASE =================

router.post(
  "/cart/increase/:id",
  cartController.increase
);

// ================= DECREASE =================

router.post(
  "/cart/decrease/:id",
  cartController.decrease
);

// ================= REMOVE =================

router.post(
  "/cart/remove/:id",
  cartController.remove
);

module.exports = router;