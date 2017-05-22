import React from 'react';

// Import Components
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContent from './MainContent';

//  Main Component
class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			products : {},
			orders: {}
		};
		this.addProduct = this.addProduct.bind(this);
	}
	addProduct(product){
		// Add timestamp to your product to have an unique set
		var timestamp = (new Date()).getTime();

		// Update the Object
		this.state.products['product-' + timestamp] = product;
		
		// Set the State
		this.setState({ products : this.state.products });
	}
	getStoreName(){
		let storeName = this.props.location.pathname.split('/');
		return storeName[storeName.length - 1].replace(/-/g, ' ').toUpperCase();
	}
	render(){
		return (
			<div className="wrapper">
				<h1 className="heading-main">{this.getStoreName()}</h1>
				<div className="content">
					<LeftSidebar />
					<MainContent products={this.state.products} />
					<RightSidebar addProduct={this.addProduct} />
				</div>
			</div>
		)
	};
};

export default Main;