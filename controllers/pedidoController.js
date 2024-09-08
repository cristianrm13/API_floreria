const Order = require('../models/pedidos');
const Product = require('../models/catalogo');

exports.createOrder = async (req, res) => {
    const { customerName, customerEmail, products } = req.body;

    try {
        const orderProducts = await Promise.all(
            products.map(async (p) => {
                const product = await Product.findById(p.productId);
                if (!product || product.stock < p.quantity) {
                    throw new Error(`Producto ${product ? product.nombre : 'no disponible'} agotado`);
                }
                
                // Validar que `precio` y `quantity` sean números y que `precio` > 0
                if (isNaN(product.precio) || isNaN(p.quantity) || product.precio <= 0 || p.quantity <= 0) {
                    throw new Error(`Precio o cantidad inválida para el producto ${product._id}`);
                }
                
                return { productId: product._id, quantity: p.quantity, price: product.precio };
            })
        );

        // Calcular totalAmount y asegurarse de que sea un número
        const totalAmount = parseFloat(orderProducts.reduce((sum, p) => sum + (p.quantity * p.price), 0));

        if (isNaN(totalAmount) || totalAmount <= 0) {
            throw new Error('El monto total calculado no es un número válido');
        }

        const order = new Order({
            customerName,
            customerEmail,
            products: orderProducts,
            totalAmount
        });

        await order.save();

        // Actualizar stock de productos
        for (const p of orderProducts) {
            await Product.findByIdAndUpdate(p.productId, {
                $inc: { stock: -p.quantity }
            });
        }

        res.status(201).json({ message: 'Pedido realizado', order });
    } catch (err) {
        res.status(500).json({ message: 'Error al realizar el pedido', error: err.message });
    }
};
