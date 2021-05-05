import React, { useEffect } from 'react';
import {
	HashRouter as Router,
	Switch,
	useLocation,
	Route,
} from 'react-router-dom';
import { AuthProvider } from '../Db/AuthContext';
import About from './About';
import Contact from './Contact';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PrivateRoute from '../components/auth/PrivateRoute';
import Dashboard from '../components/Dashboard';
import Homepage from './Homepage';
import NotFound from './NotFound';

function AllRoutes({ hideMenu }) {
	let location = useLocation();
	// Rerenders once the location is changed ie: path: "/" --> "/contact"
	useEffect(() => {
		hideMenu();
	}, [location]);

	return (
		<AuthProvider>
			<Router>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				{/* Guest and all routes */}
				<Route exact path='/' component={Homepage}></Route>
				<Route path='/about' component={About}></Route>
				<Route path='/contact' component={Contact}></Route>
				{/* AUTH Routes */}
				<Route path='/login' component={Login}></Route>
				<Route path='/signup' component={Signup}></Route>
				<Route component={NotFound}></Route>
			</Router>
		</AuthProvider>
	);
}

export default AllRoutes;
