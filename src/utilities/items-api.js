import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export async function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function createItem(productData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', productData)
}

export async function removeItem(itemId) {
  return sendRequest(`${BASE_URL}/${itemId}`, 'DELETE');
}