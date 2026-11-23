const express =
  require("express");

const router =
  express.Router();

const adminController =
  require(
    "../controllers/adminController"
  );

// ================= ADMIN =================

router.get(
  "/admin/products",
  adminController.index
);

router.get(
  "/admin/products/new",
  adminController.newPage
);

router.post(
  "/admin/products",
  adminController.create
);

router.get(
  "/admin/products/:id/edit",
  adminController.edit
);

router.put(
  "/admin/products/:id",
  adminController.update
);

router.delete(
  "/admin/products/:id",
  adminController.delete
);

module.exports = router;