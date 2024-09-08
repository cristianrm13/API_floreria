require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const catalogRoutes = require("./routes/catalogoRoutes");
const orderRoutes = require("./routes/pedidosRoutes");
const connectDB = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Conectar a MongoDB
connectDB();

app.use("/api", catalogRoutes);
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
