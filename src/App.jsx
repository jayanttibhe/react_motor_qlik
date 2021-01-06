/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Pages
import HomePage from './Routing/HomePage';
import Page2 from './Routing/Page2';
import Page3 from './Routing/Page3';
import Page4 from './Routing/Page4';
import Page5 from './Routing/Page5';
import Error from './Routing/Error';

const App = () => {
	return (
		<Router>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route exact path='/Page2'>
				<Page2 />
			</Route>
			<Route exact path='/Page3'>
				<Page3 />
			</Route>
			<Route exact path='/Page4'>
				<Page4 />
			</Route>
			<Route exact path='/Page5'>
				<Page5 />
			</Route>
			{/* <Route path='*'>
				<Error />
			</Route> */}
		</Router>
		// <AppMenuBar />
	);
};

export default App;
