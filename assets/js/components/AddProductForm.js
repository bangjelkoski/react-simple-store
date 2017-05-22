import React from 'react';

// Add Product Form
class AddProductForm extends React.Component{
	constructor(props){
		super(props);
		this.addProductForm = this.addProductForm.bind(this);
	}
	addProductForm(e){
		// Stop the form from Submitting
		e.preventDefault();

		// Take the date from the form and create an object
		let product = {
			name       : this.refs.productName.value,
			quantity   : this.refs.productQuantity.value,
			price      : this.refs.productPrice.value,
			description: this.refs.productDescription.value,
			image      : this.refs.productImage.value,
		}
		// Add the Product to Main  Component
		this.props.addProduct(product);

		// Reset the fields
		this.refs.addProductForm.reset();
	}
	render(){
		return(
			<form className="add-product-form" ref="addProductForm" onSubmit={this.addProductForm}>
				<input type="text" className="field field-text" ref="productName" required placeholder="Product Name"/>
				<input type="number" className="field field-number" ref="productQuantity" min="0" required placeholder="Quantity"/>
				<input type="number" className="field field-number" ref="productPrice" min="0" step="100" required placeholder="Price (cents)"/>
				<input type="text" className="field field-text" ref="productImage" required placeholder="Product Image"/>
				<textarea type="text" className="field field-text" ref="productDescription" required placeholder="Product Description" ></textarea>
				<input type="submit" className="button"/>
			</form>
		);
	};
};

export default AddProductForm;