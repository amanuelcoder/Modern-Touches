const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.index);
router.get('/:id', itemsCtrl.show);
router.post('/new', itemsCtrl.create);
router.delete('/:id', itemsCtrl.deleteItem);

module.exports = router;
