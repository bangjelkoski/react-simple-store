import React from 'react';

// Import Components
import Product from './Product';

// Main Content
class MainContent extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="container main-container">
				<h1 className="heading">Store Products</h1>
				<ul className="product-list"> 
					{Object.keys(this.props.products).map( (key) => { 
						return <Product key={key} details={this.props.products[key]} />
					})}
				</ul>
			</div>
		);
	};
};

export default MainContent;