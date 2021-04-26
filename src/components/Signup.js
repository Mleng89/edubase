import React, { useState } from 'react';
import './Account.css';
import { firebaseConfig } from '../firebase';
import { BrowserRouter, NavLink } from 'react-router-dom';
export default function Account() {
	const [state, setState] = useState({
		username: '',
		password: '',
		confirmpassword: '',
		//ERROR HANDLING
		// errorName: false,
		// errorPassword: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit clicked');
	};
	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};
	console.log('what is state?', state);
	return (
		<div className='account-container'>
			<div className='account-signin'>
				<h2>Sign up</h2>
				<form className='sign-in' onSubmit={handleSubmit}>
					<label>
						<input
							type='text'
							id='username'
							value={state.username}
							placeholder='Username'
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
					<label>
						<input
							type='password'
							id='confirmpassword'
							value={state.confirmpassword}
							placeholder='Confirm password'
							onChange={handleChange}
						/>
					</label>

					<div className='submit-button-container'>
						<input id='submit' type='submit' value='Submit' />
					</div>
					<div id='signup-container'>
						<p className='sign-up-text'>Have an account?</p>
						<NavLink
							className='nav-link'
							activeClassName='is-active'
							exact={true}
							to='/account'
						>
							Log in
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
}
