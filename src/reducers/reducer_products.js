import _ from 'lodash';
import {FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT} from '../actions/product_action';

export default function(state = {}, action){
  switch (action.type) {
    case CREATE_PRODUCT:
    // below es5 syntax for the same in es6
      // const product = action.payload.data;
      // const newState = {...state};
      // newState[product.id] = product;
      // return newState;
      // below es6 syntax for above code.
      return {...state, [action.payload.data.id] : action.payload.data };
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_PRODUCT:
      return {...state, [action.payload.data.id] : action.payload.data };
    case DELETE_PRODUCT:
       return _.omit(state, action.payload);
    default:
      return state;

  }
}
