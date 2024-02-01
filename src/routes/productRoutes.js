const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/search', productController.searchProducts);

// {
//     "name": "xyz",
//     "description": "xyz",
//     "price":5000,
//     "variants": [{
//       "name":"x",
//       "sku":"127",
//       "additionalCost":0,
//       "stockCount":2000
//     },
//     {
//       "name":"Medium",
//       "sku":"128",
//       "additionalCost":0,
//       "stockCount":4000
//     },
//     {
//       "name":"Long",
//       "sku":"129",
//       "additionalCost":500,
//       "stockCount":1000
//     }]
//   }

module.exports = router;
