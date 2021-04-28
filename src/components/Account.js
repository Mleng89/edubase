import React, { useState } from 'react';
import './Account.css';
import { NavLink } from 'react-router-dom';
import app from '../Db/firebase';

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
	};

	const googleSubmit = (e) => {
		console.log('clicked');
		e.preventDefault();
		const provider = new app.firebase_.auth.GoogleAuthProvider();
		console.log('what is provider', provider);
		/***
		 * Firebase auth
		 * For
		 * Google
		 */
		app.firebase_
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				let credential = result.credential;
				let token = credential.accessToken;
				let user = result.user;
				console.log('what is result', result);
				console.log('what is credential', credential);
				console.log('what is token?', token);
				console.log('what is user?', user);
			})
			.catch((err) => {
				// const errCode = err.code;
				// const errMsg = err.message;
				// const email = err.email;
				// const credential = err.credential;
				console.log('Error:', err);
			});
		console.log('what is currentUser', app.firebase_.auth().currentUser);
	};
	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};
	const userLoggedin = app.firebase_.auth().currentUser;
	console.log('what is state?', state);
	return (
		<div className='account-container'>
			<div className='account-signin'>
				<h2>Account Login</h2>
				{/* CHECKING IF THERE IS A USER */}
				{userLoggedin
					? `Hello ${app.firebase_.auth().currentUser.displayName}`
					: null}

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

					<div className='submit-button-container'>
						<input id='submit' type='submit' value='Submit' />
					</div>
					<div id='signup-container'>
						<p className='sign-up-text'>Don't have an account?</p>
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
				<form onSubmit={() => googleSubmit}>
					<button onClick={googleSubmit}> Log in with Google</button>
				</form>
			</div>
		</div>
	);
}
