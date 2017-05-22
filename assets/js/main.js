// Import React and ReactDOM
import React from 'react';
import {render} from 'react-dom';

// Import Components
import Main from './components/Main';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

// Import Router
import {Router, Route, HashRouter, Switch, withBrowser} from 'react-router-dom';


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


render(app, document.getElementById('main'));