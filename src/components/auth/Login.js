import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import app from '../../Db/firebase';

export default function Login() {
	const [state, setState] = useState({
		email: '',
		password: '',
		//ERROR HANDLING
		// errorName: false,
		// errorPassword: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};

	console.log('what is state?', state);
	return (
		<div className='Login-container'>
			<div className='Login-signin'>
				<h2>Login Login</h2>

				<form className='sign-in' onSubmit={handleSubmit}>
					<label>
						<input
							type='text'
							id='email'
							value={state.email}
							placeholder='E-mail'
							onChange={handleChange}
						/>
					</label>
					<label>
						<input
							type='password'
							id='password'
							value={state.password}
							placeholder='Password'
							onChange={handleChange}
						/>
					</label>

					<div className='submit-button-container'>
						<input id='submit' type='submit' value='Submit' />
					</div>
					<div id='signup-container'>
						<p className='sign-up-text'>Don't have an Login?</p>
						<NavLink
							className='nav-link'
							activeClassName='is-active'
							exact={true}
							to='/signup'
						>
							Sign up
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
}
