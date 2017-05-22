import React from 'react';
import {getFunName} from '../helpers/Helpers';

// Store Picker Form
class StorePicker extends React.Component{
	constructor(props) {
		super(props);
		this.goToStore = this.goToStore.bind(this);
	}
	goToStore(e){
		// Prevent submiting the form, and save the name
		e.preventDefault();
		let storeName = this.refs.storeName.value;

		// Set the location in the url
		this.props.history.push('/store/' + storeName);

	}
	render(){
		return(
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Enter your store name</h2>
				<input type="text" className="field field-text" ref="storeName" required defaultValue={ getFunName() }/>
				<input type="submit" className="button"/>
			</form>
		)
	}
};

export default StorePicker;