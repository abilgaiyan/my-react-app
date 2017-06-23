import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { Link  } from 'react-router-dom';
import { createProducts } from '../../actions/product_action';

class CreateProduct extends Component {

submitForm(values){
  //console.log(values);
  this.props.createProducts(values, ()=>{
    this.props.history.push('/products');
  });

}
 renderField(field){
   const {meta: {prestine, touched, error} } = field;
   const className = `form-group ${touched && error ? 'has-danger' :''}`;
   return (
     <div className={className}>
       <label>{field.label}</label>
       <input  { ...field.input} type={field.type} className="form-control" />
       <div className="text-help">
        {touched && error}
       </div>
     </div>
   );
 }

  render(){
      const {handleSubmit} = this.props;
    return(
      <div>
      <h3>Create Product</h3>
        <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
          <Field
           label ="name"
           name="name"
           type="text"
           component={this.renderField}
           />
           <Field
            label ="price"
            name="price"
            type="number"
            component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/products" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}
function validate(values){
  const errors ={};
  if (!values.name)
    errors.name ='Enter Product Name';

  if (!values.price)
   errors.price ='Enter Product Price';


  return errors;
}



export default reduxForm({
  form:'productnewform',
  validate

})(connect(null, {createProducts} )(CreateProduct));
