const express = require('express');
const router = express.Router();
const orderController = require('../controllers/pedidoController');

router.post('/pedidos', orderController.createOrder);

module.exports = router;
