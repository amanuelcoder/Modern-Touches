const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


router.get('/cart', ordersCtrl.cart);
router.get('/', ordersCtrl.getAllForUser);
router.get('/all', ordersCtrl.getAllOrders);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;
