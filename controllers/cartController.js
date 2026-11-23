const Product =
  require("../models/products");

// ================= HELPER =================

function getCartCount(cart) {

  let total = 0;

  cart.forEach((item) => {

    total += item.cartQuantity;

  });

  return total;

}

// ================= ADD =================

module.exports.add =
(req, res) => {

  const productId =
    req.params.id;

  const {
    pack,
    price
  } = req.body;

  if(!req.session.cart) {

    req.session.cart = [];

  }

  const existing =
    req.session.cart.find(

      (i) =>

        i.productId ===
          productId &&

        i.pack ===
          pack

    );

  if(existing) {

    existing.cartQuantity += 1;

  }

  else {

    req.session.cart.push({

      productId,

      pack,

      price:
        Number(price),

      cartQuantity: 1

    });

  }

  res.json({

    success: true,

    cartCount:
      getCartCount(
        req.session.cart
      )

  });

};

// ================= INCREASE =================

module.exports.increase =
(req, res) => {

  const productId =
    req.params.id;

  const { pack } =
    req.body;

  const item =
    req.session.cart.find(

      (i) =>

        i.productId ===
          productId &&

        i.pack ===
          pack

    );

  if(item) {

    item.cartQuantity += 1;

  }

  res.json({

    success: true,

    quantity:
      item.cartQuantity,

    cartCount:
      getCartCount(
        req.session.cart
      )

  });

};

// ================= DECREASE =================

module.exports.decrease =
(req, res) => {

  const productId =
    req.params.id;

  const { pack } =
    req.body;

  const index =
    req.session.cart.findIndex(

      (i) =>

        i.productId ===
          productId &&

        i.pack ===
          pack

    );

  let quantity = 0;

  if(index !== -1) {

    if(

      req.session.cart[index]
        .cartQuantity > 1

    ) {

      req.session.cart[index]
        .cartQuantity -= 1;

      quantity =
        req.session.cart[index]
          .cartQuantity;

    }

    else {

      req.session.cart.splice(
        index,
        1
      );

    }

  }

  res.json({

    success: true,

    quantity,

    cartCount:
      getCartCount(
        req.session.cart
      )

  });

};

// ================= CART PAGE =================

module.exports.cart =
async (req, res) => {

  const cart =
    req.session.cart || [];

  const ids =
    cart.map(
      (i) => i.productId
    );

  const products =
    await Product.find({

      _id: {
        $in: ids
      }

    });

  const cartItems =
    cart.map((item) => {

      const product =
        products.find(

          (p) =>

            p._id.toString() ===
            item.productId

        );

      return {

        product,

        pack:
          item.pack,

        price:
          item.price,

        cartQuantity:
          item.cartQuantity,

        subtotal:
          item.price *
          item.cartQuantity

      };

    });

  let grandTotal = 0;

  cartItems.forEach((item) => {

    grandTotal +=
      item.subtotal;

  });

  res.render(
    "user/cart",
    {

      cartItems,

      grandTotal

    }
  );

};

// ================= REMOVE =================

module.exports.remove =
(req, res) => {

  const productId =
    req.params.id;

  const { pack } =
    req.body;

  req.session.cart =
    req.session.cart.filter(

      (i) =>

        !(

          i.productId ===
            productId &&

          i.pack ===
            pack

        )

    );

  res.json({

    success: true,

    cartCount:
      getCartCount(
        req.session.cart
      )

  });

};