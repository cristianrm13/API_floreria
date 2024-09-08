const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogoController');

router.get('/productos', catalogController.getAllProducts);
router.get('/productos/:id', catalogController.getProductById);

module.exports = router;
