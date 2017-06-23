import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchProducts} from '../../actions/product_action';

class ProductsList extends Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

renderList(){
   if (!this.props.products)
     return <div>Loading ....</div>;

  return _.map(this.props.products, (product) =>{
     return <li className="group-item-list" key={product.id}>
     <Link to={`/products/${product.id}`}>
      <div>
       {product.id}  {product.name} ( <span><strong>{product.price}</strong></span> )
       </div>
       </Link>
     </li>
  });
}

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/products/new" className="btn btn-primary" >Add a Product</Link>
        </div>
         <h3>Products</h3>
         <ul>
           {this.renderList()}
         </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {products: state.products};
}

export default connect(mapStateToProps, {fetchProducts} )(ProductsList);
