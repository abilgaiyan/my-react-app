import  axios  from 'axios';
import {API_KEY} from '../config';

export const  FETCH_CUSTOMERS ='FETCH CUSTOMERS';



export function fetchCustomers(){
  const request = axios.get(`${API_KEY}/customers`);
  return {
    type: FETCH_CUSTOMERS,
    payload: request
   }
}
