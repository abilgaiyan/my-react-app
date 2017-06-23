import { combineReducers } from 'redux';
import { reducer as   formReducer   } from 'redux-form';
import  customersReducer  from './reducer_customers';
import productsReducer from './reducer_products';
import invoicesReducer from './reducer_invoices';
import invoiceItemsReducer from './reducer_invoiceitems';


const rootReducer = combineReducers({
  //state: (state = {}) => state

  customers : customersReducer,
  products : productsReducer,
  invoices : invoicesReducer,
  invoiceitems : invoiceItemsReducer,
  form: formReducer,
});

export default rootReducer;
