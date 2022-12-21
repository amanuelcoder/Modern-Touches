const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureAdminUser = require('../../config/ensureAdminUser');


router.get('/cart', ordersCtrl.cart);
router.get('/', ordersCtrl.getAllForUser);
router.get('/all', ordersCtrl.getAllActiveOrders);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.put('/update', ensureAdminUser, ordersCtrl.updateOrder);

module.exports = router;
