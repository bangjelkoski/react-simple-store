import React from 'react';

// Import Components
import AddProductForm from './AddProductForm';

// RightSidebar component
class RightSidebar extends React.Component{
	render(){
		return (
			<div className="container right-container side-container">
				<h1 className="heading">Add/Update Products</h1>
				<AddProductForm addProduct={this.props.addProduct} />
			</div>
		);
	};
};

export default RightSidebar;