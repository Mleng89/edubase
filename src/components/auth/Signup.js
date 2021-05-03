import React, { useRef, useState } from 'react';
import './Account.css';
import { NavLink, useHistory } from 'react-router-dom';
import app from '../../Db/firebase';
import { useAuth } from '../../Db/AuthContext';

export default function Account() {
	const [state, setState] = useState({
		email: '',
		password: '',
		confirmpassword: '',
		//ERROR HANDLING
		// errorName: false,
		// errorPassword: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		app.firebase_
			.auth()
			.createUserWithEmailAndPassword(state.email, state.password)
			.then((userCredential) => {
				let user = userCredential.user;
			})
			.catch((err) => {
				console.log('Error:', err.code, err.message);
			});
	};

	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};

	return (
		<div className='account-container'>
			<div className='account-signin'>
				<h2>Sign up</h2>

				<form className='sign-in' onSubmit={handleSubmit}>
					<label>
						<input
							type='email'
							id='email'
							value={state.email}
							placeholder='E-mail'
							onChange={handleChange}
							// ref={emailRef}
						/>
					</label>
					<label>
						<input
							type='password'
							id='password'
							value={state.password}
							placeholder='Password'
							onChange={handleChange}
							// ref={passRef}
						/>
					</label>
					<label>
						<input
							type='password'
							id='confirmpassword'
							value={state.confirmpassword}
							placeholder='Confirm password'
							onChange={handleChange}
							// ref={passConfirmRef}
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
