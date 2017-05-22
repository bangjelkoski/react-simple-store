import React from 'react';
import {formatPrice} from '../helpers/Helpers';

// Single Product
class Product extends React.Component{
	render(){
		var details = this.props.details;
		return (
			<li className="product-inner">
			<div className="product-image"><img src={details.image} className="product-image" /></div>
				<div className="product-details">
					<h4 className="product-name">{details.name}</h4>
					<p className="product-description">{details.description}</p>
					<div className="product-price"><span className="price">Price: {formatPrice(details.price)}</span> | <span className="quantity">Qty:{details.quantity}</span></div>
				</div> 
				{/* <div className="button" onClick={this.addToCart}>Add to Cart</div> */}
			</li>
		);
	}
}

export default Product;