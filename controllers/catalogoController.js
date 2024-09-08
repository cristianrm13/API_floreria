const Product = require("../models/catalogo");

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ stock: { $gt: 0 } });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener productos", error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener el producto", error: err.message });
    }
};
