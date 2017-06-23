import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import  promise  from 'redux-promise';

import App from './components/app';
import CustomersList from './components/customers/customers_list';
import ProductsList  from './components/products/products_list';
import InvoicesList from './components/invoices/invoices_list';
import CreateInvoice from './components/invoices/invoice_new';
import CreateProduct from './components/products/product_new';
import ShowProduct from './components/products/product_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Switch>
    <Route exact  path="/" component={App} />
    <Route path="/customers" component={CustomersList} />
    <Route exact path="/products" component={ProductsList} />
    <Route path="/products/new" component={CreateProduct} />
    <Route path="/products/:id" component={ShowProduct} />
    <Route exact path="/invoices" component={InvoicesList} />
    <Route path="/invoices/new" component={CreateInvoice} />

    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
