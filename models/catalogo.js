const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },  // Verifica que los nombres sean correctos
    stock: { type: Number, required: true },
    descripcion: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
