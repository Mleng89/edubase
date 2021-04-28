import React, { useRef, useState } from 'react';
import './Account.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import app from '../Db/firebase';

export default function Account() {
	const [state, setState] = useState({
		username: '',
		password: '',
		confirmpassword: '',
		email: '',
		//ERROR HANDLING
		// errorName: false,
		// errorPassword: false,
	});

	// const userRef = useRef();
	// const passRef = useRef();
	// const passConfirmRef = useRef();
	// const emailRef = useRef();
	// console.log('userRef', userRef);
	// console.log('passRef', passRef);
	// console.log('passConfirmRef', passConfirmRef);
	// console.log('emailRef', emailRef);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('Submit clicked');
	};
	const googleSubmit = (e) => {
		e.preventDefault();
		// console.log('Submit clicked');
		const provider = new app.firebase_.auth.GoogleAuthProvider();
		console.log('what is provider', provider);
		/***
		 * Firebase auth
		 * For
		 * Google
		 */
		app.firebase_
			.auth()
			.setPersistence(app.firebase_.auth.Auth.Persistence.LOCAL)
			.then(() => {
				return app.firebase_
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
					});
			})

			.catch((err) => {
				console.log('Error:', err.code);
			});

		// console.log(
		// 	'what is currentUser',
		// 	app.firebase_.auth.Auth.Persistence.LOCAL
		// );
	};
	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};

	// const handleClick = () => {
	// 	var provider = new auth.GoogleAuthProvider();
	// };
	const userLoggedin = app.firebase_.auth().currentUser;

	console.log('what is state?', state);
	return (
		<div className='account-container'>
			<div className='account-signin'>
				<h2>Sign up</h2>
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
							// ref={userRef}
						/>
					</label>
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
				<form onSubmit={() => googleSubmit}>
					<button onClick={googleSubmit}> Sign up with google</button>
				</form>
			</div>
		</div>
	);
}
