import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchInvoices} from '../../actions/invoice_action';

class InvoicesList extends Component {
componentDidMount(){
  this.props.fetchInvoices();
}
 renderList(){
   const  {invoices} = this.props;
   if (!invoices)
    return <div>Loading ...</div>

    return _.map(invoices,  (invoice)=>{
       <li className="list-group-item" key={invoice.id}>
         <div>
            {invoice.id}  {invoice.customer_id} {invoice.discount} {invoice.total}
         </div>
       </li>
    });

 }
  render(){


    return(
      <div>
      <div className="text-xs-right">
         <Link to="/invoices/new" className="btn btn-primary">Add Invoice</Link>
      </div>
      <h3>Invoice List </h3>
      <ul className="list-group">
        {this.renderList()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    invoices: state.invoices
  }

}
export default connect(mapStateToProps, {fetchInvoices})( InvoicesList)
