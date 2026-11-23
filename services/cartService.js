// Centralized Cart Service

function addToCart(session, productId, quantity) {
  if (!session.cart) {
    session.cart = [];
  }

  const existing = session.cart.find(
    (item) => item.productId === productId
  );

  if (existing) {
    existing.cartQuantity += quantity;
  } else {
    session.cart.push({
      productId,
      quantity,
      cartQuantity: quantity,
    });
  }
}

function increaseQuantity(session, productId) {
  const item = session.cart?.find(
    (item) => item.productId === productId
  );

  if (item) {
    item.cartQuantity += 1;
  }
}

function decreaseQuantity(session, productId) {
  const item = session.cart?.find(
    (item) => item.productId === productId
  );

  if (item && item.cartQuantity > 1) {
    item.cartQuantity -= 1;
  } else if (item) {
    removeFromCart(session, productId);
  }
}

function removeFromCart(session, productId) {
  if (session.cart) {
    session.cart = session.cart.filter(
      (item) => item.productId !== productId
    );
  }
}

function getCartTotal(session) {
  return session.cart?.reduce(
    (total, item) => total + item.cartQuantity * item.quantity,
    0
  ) || 0;
}

module.exports = {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  getCartTotal,
};