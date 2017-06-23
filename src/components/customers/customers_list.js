import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchCustomers} from '../../actions';

class CustomersList extends Component {
  componentDidMount(){
    this.props.fetchCustomers();

  }
  renderList(){
    if (!this.props.customers)
      return <div>Loading ...</div>;

     return _.map(this.props.customers, ((customer) =>{
      return <li className="list-group-item" key={customer.id}>
        {customer.id}  {customer.name} {customer.address}
      </li>
    })
  );
  }

  render (){
    return (
      <div>
        <h3>Customers</h3>
         <ul className="list-group">
          {this.renderList()}
         </ul>


      </div>
    );
  }
}

function mapStateToProps(state){
//  console.log(state);
  return  {customers: state.customers};
}

export default connect(mapStateToProps,{fetchCustomers})(CustomersList);
