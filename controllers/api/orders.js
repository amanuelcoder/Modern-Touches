const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAllForUser,
  getAllActiveOrders,
  updateOrder
};

async function updateOrder(req, res) {
  const updatedItem = await Order.findByIdAndUpdate(
      {id: req.params.id},
      {isShipped: true, trackingNum: req.body.trackingNum},
      {new: true} 
    );
    res.json(updatedItem);

}

async function getAllActiveOrders(req, res) {
  const orders = await Order.find({isPaid: true, isShipped: false});
  res.json(orders);
}

async function getAllForUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}


async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}


async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    cart.shipment = req.body;
    await cart.save();
    const newCart = await Order.getCart(req.user._id);
    res.json(newCart);
  } catch(e) {
    console.log(e)
    res.status(500).json(e);
  }
}
