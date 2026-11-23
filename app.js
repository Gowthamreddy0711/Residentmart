const express =
  require("express");

const mongoose =
  require("mongoose");

const ejsMate =
  require("ejs-mate");

const session =
  require("express-session");

const path =
  require("path");

const methodOverride =
  require("method-override");

const bcrypt =
  require("bcrypt");

// ================= APP =================

const app = express();

// ================= MODELS =================

const Admin =
  require("./models/admin");

const Order =
  require("./models/order");

// ================= ROUTES =================

const productRoutes =
  require("./routes/productRoutes");

const cartRoutes =
  require("./routes/cartRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

// ================= DATABASE =================

mongoose
.connect(
  "mongodb://127.0.0.1:27017/residentmart"
)

.then(() => {

  console.log(
    "✅ DB Connected"
  );

})

.catch((err) => {

  console.log(err);

});

// ================= VIEW ENGINE =================

app.engine(
  "ejs",
  ejsMate
);

app.set(
  "view engine",
  "ejs"
);

app.set(
  "views",
  path.join(
    __dirname,
    "views"
  )
);

// ================= MIDDLEWARE =================

app.use(express.urlencoded({

  extended: true

}));

app.use(express.json());

app.use(methodOverride(
  "_method"
));

app.use(express.static(

  path.join(
    __dirname,
    "public"
  )

));

// ================= SESSION =================

app.use(session({

  secret: "residentmart",

  resave: false,

  saveUninitialized: true,

}));

// ================= GLOBAL VARIABLES =================

app.use((req, res, next) => {

  // CART COUNT

  let cartCount = 0;

  if(req.session.cart) {

    req.session.cart.forEach((item) => {

      cartCount +=
        item.cartQuantity;

    });

  }

  // GLOBALS

  res.locals.cartCount =
    cartCount;

  res.locals.isAdmin =
    req.session.isAdmin || false;

  next();

});

// ================= AUTH MIDDLEWARE =================

function isAdmin(
  req,
  res,
  next
) {

  if(req.session.isAdmin) {

    return next();

  }

  res.redirect("/login");

}

// ================= HOME =================

app.get("/", (req, res) => {

  res.redirect("/products");

});

// ================= LOGIN =================

app.get(
  "/login",

  (req, res) => {

    res.render(
      "user/login"
    );

  }

);

// ================= LOGIN POST =================

app.post(
  "/login",

  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;

      const admin =
        await Admin.findOne({
          email
        });

      if(!admin) {

        return res.send(
          "Invalid Email"
        );

      }

      const match =
        await bcrypt.compare(
          password,
          admin.password
        );

      if(!match) {

        return res.send(
          "Wrong Password"
        );

      }

      req.session.isAdmin =
        true;

      res.redirect(
        "/admin/products"
      );

    }

    catch(err) {

      console.log(err);

      res.send(
        "Login Error"
      );

    }

  }

);

// ================= LOGOUT =================

app.get(
  "/logout",

  (req, res) => {

    req.session.destroy(() => {

      res.redirect(
        "/products"
      );

    });

  }

);

// ================= ROUTES =================

app.use(
  productRoutes
);

app.use(
  cartRoutes
);

app.use(
  adminRoutes
);

// ================= ORDER =================

app.post(
  "/order",

  async (req, res) => {

    req.session.cart = [];

    res.send(`

      <html>

        <head>

          <title>
            Order Placed
          </title>

          <link
            href="
            https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
            "
            rel="stylesheet"
          >

        </head>

        <body
          class="
            d-flex
            justify-content-center
            align-items-center
            vh-100
            bg-light
          "
        >

          <div
            class="
              bg-white
              p-5
              rounded-4
              shadow
              text-center
            "
            style="
              max-width:500px;
            "
          >

            <div
              style="
                font-size:70px;
              "
            >

              ✅

            </div>

            <h1
              class="
                text-success
                fw-bold
                mt-3
              "
            >

              Order Placed Successfully!

            </h1>

            <p
              class="
                text-muted
                mt-3
              "
            >

              Your groceries
              will arrive soon 🚀

            </p>

            <a
              href="/products"
              class="
                btn
                btn-success
                mt-4
                px-4
              "
            >

              Continue Shopping

            </a>

          </div>

        </body>

      </html>

    `);

  }

);

// ================= ADMIN ORDERS =================

app.get(

  "/admin/orders",

  isAdmin,

  async (req, res) => {

    try {

      const orders =
        await Order.find({})
        .populate(
          "items.product"
        );

      res.render(

        "admin/orders",

        {
          orders
        }

      );

    }

    catch(err) {

      console.log(err);

      res.send(
        "Error loading orders"
      );

    }

  }

);

// ================= SERVER =================

app.listen(

  5000,

  () => {

    console.log(
      "🚀 Server Running on Port 5000"
    );

  }

);