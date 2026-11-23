const mongoose = require("mongoose");

const initData = require("./data.js");

const Product = require("../models/products.js");

// ================= MONGO URL =================

const MONGO_URL =
  "mongodb://127.0.0.1:27017/residentmart";

// ================= CONNECT DATABASE =================

async function connectDB() {

  try {

    await mongoose.connect(MONGO_URL);

    console.log(
      "✅ Connected to ResidentMart DB"
    );

  } catch (err) {

    console.log(
      "❌ MongoDB Connection Error:"
    );

    console.log(err);

    process.exit(1);

  }

}

// ================= INIT DATABASE =================

async function initDB() {

  try {

    // DELETE OLD PRODUCTS

    const deletedProducts =
      await Product.deleteMany({});

    console.log(
      `🗑 Deleted ${deletedProducts.deletedCount} old products`
    );

    // INSERT NEW PRODUCTS

    const insertedProducts =
      await Product.insertMany(
        initData.data
      );

    console.log(
      `📦 Inserted ${insertedProducts.length} sample products`
    );

  } catch (err) {

    console.log(
      "❌ Database Initialization Error:"
    );

    console.log(err);

  }

}

// ================= MAIN =================

async function main() {

  await connectDB();

  await initDB();

  // CLOSE CONNECTION

  await mongoose.connection.close();

  console.log(
    "🔌 DB connection closed"
  );

}

// ================= RUN =================

main();