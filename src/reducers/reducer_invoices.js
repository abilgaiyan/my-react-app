import _ from 'lodash';
import {FETCH_INVOICES} from '../actions/invoice_action';

export default  function(state ={}, action){
  switch (action.type) {
    case FETCH_INVOICES:
     return _.mapKeys(action.payload.data, 'id');

    default:
    return state;

  }

}
