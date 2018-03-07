import axios from 'axios';

const baseUrl = 'http://localhost:9000/api';

const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`${baseUrl}/products`)
  }
}

const updateProduct = updatedProduct => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: axios.put(`${baseUrl}/products/${updatedProduct.id}`, updatedProduct)
  }
}

export {getProducts, updateProduct}