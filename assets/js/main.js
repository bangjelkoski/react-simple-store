// Import React and ReactDOM
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Import Router
import {Router, Route, HashRouter, Switch, withBrowser} from 'react-router-dom';

// Import Helpers
import Helpers from './helpers.js';

//  Main Component
class Main extends Component{
	constructor(props) {
		super(props);
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
					<MainContent/>
					<RightSidebar/>
				</div>
			</div>
		)
	};
};

// LeftSidebar component
class LeftSidebar extends Component{
	render(){
		return (
			<div className="container left-container side-container">
				<h1 className="heading">Cart</h1>
			</div>
		);
	};
};

// RightSidebar component
class RightSidebar extends Component{
	render(){
		return (
			<div className="container right-container side-container">
				<h1 className="heading">Update Products</h1>
			</div>
		);
	};
};

// Main Content
class MainContent extends Component{
	render(){
		return (
			<div className="container main-container">
				<h1 className="heading">Store Products</h1>
			</div>
		);
	};
};

// Landing Form
class StorePicker extends Component{
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
				<input type="text" className="text-field" ref="storeName" required defaultValue={ Helpers.getFunName() }/>
				<input type="submit" className="button"/>
			</form>
		)
	}
};

// Landing Form
class NotFound extends Component{
	render(){
		return(
			<h4>404 - Not found!</h4>
		);
	};
};

// Build the React Routes
var app = (
	<HashRouter history="withBrowser">
		<Switch>
			<Route exact path="/" component={StorePicker} />
			<Route path="/store/:storeName" component={Main} />
			<Route path="*" component={NotFound} />
		</Switch>
	</HashRouter>
);


ReactDOM.render(app, document.getElementById('main'));