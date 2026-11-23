// Centralized Frontend Cart Logic

document.addEventListener("click", async (event) => {
  const target = event.target;

  if (target.matches(".add-to-cart")) {
    const productId = target.dataset.id;
    const pack = target.dataset.pack;
    const price = target.dataset.price;

    await updateCart("/cart/add/" + productId, { pack, price });
  }

  if (target.matches(".increase-quantity")) {
    const productId = target.dataset.id;

    await updateCart("/cart/increase/" + productId);
  }

  if (target.matches(".decrease-quantity")) {
    const productId = target.dataset.id;

    await updateCart("/cart/decrease/" + productId);
  }

  if (target.matches(".remove-item")) {
    const productId = target.dataset.id;

    await updateCart("/cart/remove/" + productId);
  }
});

async function updateCart(url, body = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      location.reload();
    } else {
      console.error("Failed to update cart");
    }
  } catch (err) {
    console.error("Error updating cart:", err);
  }
}