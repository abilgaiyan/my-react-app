import _ from 'lodash';
import {FETCH_CUSTOMERS, fetchCustomers} from '../actions';

export default function customersReducer(state={}, action){
  switch (action.type) {
    case FETCH_CUSTOMERS:
     return  _.mapKeys(action.payload.data, 'id');
    default:
     return state;

  }
}
