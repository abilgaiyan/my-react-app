import axios from 'axios';
import {API_KEY} from '../config';

export const FETCH_INVOICES = 'FETCH INVOICES';
export const FETCH_INVOICE = 'FETCH INVOICE';
export const ADD_INVOICE = 'ADD INVOICE';
export const EDIT_INVOICE = 'EDIT INVOICE';
export const DELETE_INVOICE = 'DELETE INVOICE';

//invoice items
export const FETCH_INVOICE_ITEMS = 'FETCH_INVOICE_ITEMS';
export const ADD_INVOICE_ITEM = 'ADD_INVOICE_ITEM';
export const DELETE_INVOICE_ITEM = 'DELETE_INVOICE_ITEM';


export function fetchInvoices() {
  const request = axios.get(`${API_KEY}/invoices`);
   return {
     type: FETCH_INVOICES,
     payload:request
   }
}

export function fetchInvoice(invoiceId) {
  const request = axios.get(`${API_KEY}/invoice/${invoiceId}`);
   return {
     type: FETCH_INVOICE,
     payload:request
   }
}

export function addInvoice(invoice) {
  const request = axios.post(`${API_KEY}/invoices`, invoice);
   return {
     type: ADD_INVOICE,
     payload:request
   }
}

export function editInvoice(invoice) {
  const request = axios.post(`${API_KEY}/invoices/${invoice.id}`, invoice);
   return {
     type: EDIT_INVOICE,
     payload:request
   }
}

export function deleteInvoice(invoiceId) {
  const request = axios.delete(`${API_KEY}/invoices/${invoiceId}`);
   return {
     type: DELETE_INVOICE,
     payload:request
   }
}


export function fetchInvoiceItems(invoiceId) {
  const request = axios.get(`${API_URL}/invoices/${invoiceId}/items`);
   return {
     type: FETCH_INVOICE_ITEMS,
     payload:request
   }
}



export function addInvoiceItem(invoiceId, invoiceItem) {
  const request = axios.post(`${API_URL}/invoices/${invoiceId}/items`, invoiceItem);
   return {
     type: ADD_INVOICE_ITEM,
     payload:request
   }
}


export function deleteInvoiceItem(invoiceId,invoiceItemId) {
    const request = axios.delete(`${API_URL}/invoices/${invoiceId}/items/${invoiceItemId}`);
   return {
     type: DELETE_INVOICE_ITEM,
     payload:request
   }
}
