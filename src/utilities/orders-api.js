import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}


export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout(orderData) {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST', orderData);
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

export function getAllActiveOrders() {
    return sendRequest(`${BASE_URL}/all`);
}

export function updateOrder(itemId, orderData) {
  console.log(orderData)
  console.log(itemId)
  return sendRequest(`${BASE_URL}/update`, 'PUT', {itemId, orderData})
}