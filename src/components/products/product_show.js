import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProduct, deleteProduct} from '../../actions/product_action';

class ShowProduct extends Component {
  componentDidMount(){
    const productId = this.props.match.params.id;
     this.props.fetchProduct(productId);

  }

   onDeleteProduct(){
    const productId = this.props.match.params.id;
    this.props.deleteProduct(productId, ()=>{
      this.props.history.push('/products');
    })
  }
  render(){
    const {product} = this.props;
     if (!product)
      return <div>Loading ....</div>

  return  (
      <div>
        <h3>Product # [ {product.id} ]</h3>
        <div>
          <Link to="/products">back to product list</Link>
          <button onClick={this.onDeleteProduct.bind(this)} className="btn btn-danger xs-pull-right">Delete</button>
          <h6>{product.name}</h6>
          <p>{product.price}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    const productId = ownProps.match.params.id;
    return {product: state.products[productId]};
}

export default connect(mapStateToProps, {fetchProduct, deleteProduct})(ShowProduct);
