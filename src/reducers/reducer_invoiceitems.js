import _ from 'lodash';
import {FETCH_INVOICEITEMS} from '../actions/invoice_action';

export default function(state={},action){
  switch (action.type) {
    case FETCH_INVOICEITEMS:
    return _.mapKeys(action.payload.data, 'id');  

    default:
     return state;

  }

}
