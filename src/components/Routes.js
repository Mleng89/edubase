import React, { useEffect } from 'react';
import { Switch, useLocation, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function AllRoutes({ hideMenu }) {
	let location = useLocation();
	// Rerenders once the location is changed ie: path: "/" --> "/contact"
	useEffect(() => {
		hideMenu();
	}, [location]);

	return (
		<Switch>
			<Route path='/about' component={About}></Route>
			<Route path='/contact' component={Contact}></Route>
		</Switch>
	);
}

export default AllRoutes;
