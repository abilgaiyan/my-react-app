import  axios  from 'axios';
import {API_KEY} from '../config';

export const FETCH_PRODUCTS = 'FETCH PRODUCTS';
export const FETCH_PRODUCT = 'FETCH PRODUCT';
export const CREATE_PRODUCT = 'CREATE PRODUCT';
export const DELETE_PRODUCT = 'DELETE PRODUCT';

export function fetchProducts(){
  const request = axios.get(`${API_KEY}/products`);
  return {
    type: FETCH_PRODUCTS,
    payload:request
  }
}
export function createProducts(values,callback){
  const request = axios.post(`${API_KEY}/products`,values)
   .then(() => callback());
  return {
    type:CREATE_PRODUCT,
    payload: request
  }
}

export function fetchProduct(productId){
  const request = axios.get(`${API_KEY}/products/${productId}`);
  return {
    type: FETCH_PRODUCT,
    payload:request
  }
}

export function deleteProduct(productId, callback){
  const request = axios.delete(`${API_KEY}/products/${productId}`)
  .then(() => callback());
  return{
    type: DELETE_PRODUCT,
    payload: productId
  }
}
