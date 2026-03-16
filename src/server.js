require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexió amb MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connectat"))
  .catch((err) => console.error("Error de connexió Mongo:", err));

// Rutes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionant a http://localhost:${PORT}`));
