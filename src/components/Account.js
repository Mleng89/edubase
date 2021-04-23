import React, { useState } from 'react';
import './Account.css';
export default function Account() {
	const [state, setState] = useState({
		username: '',
		password: '',
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
				<h2>Account Login</h2>
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
							type='text'
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
						<p className='sign-up-text'>Don't have an account?</p>
						<a href='#/'>Sign up</a>
					</div>
				</form>
			</div>
		</div>
	);
}
