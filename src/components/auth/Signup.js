import React, { useRef, useState } from 'react';
import './Login.css';
import { NavLink, useHistory } from 'react-router-dom';
import app from '../../Db/firebase';
import { useAuth } from '../../Db/AuthContext';

export default function Login() {
	// const [state, setState] = useState({
	// 	email: '',
	// 	password: '',
	// 	confirmpassword: '',
	// 	//ERROR HANDLING
	// 	// errorName: false,
	// 	// errorPassword: false,
	// });
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}
		if (passwordRef.current.value.length < 6) {
			return setError('Please enter a password longer than 6 characters');
		}
		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push('/dashboard');
		} catch {
			setError('Failed to create an account');
		}
		setLoading(false);
		// app.firebase_
		// 	.auth()
		// 	.createUserWithEmailAndPassword(state.email, state.password)
		// 	.then((userCredential) => {
		// 		let user = userCredential.user;
		// 	})
		// 	.catch((err) => {
		// 		console.log('Error:', err.code, err.message);
		// 	});
	}

	// const handleChange = (e) => {
	// 	setState({ ...state, [e.target.id]: e.target.value });
	// };
	return (
		<div className='Login-container'>
			<div className='Login-signin'>
				<h2>Sign up</h2>
				{/* IF THERE IS AN ERROR, DISPLAY IT */}
				{error && `${error}`}
				<form className='sign-in' onSubmit={handleSubmit}>
					<label>
						<input
							type='email'
							id='email'
							// value={state.email}
							placeholder='E-mail'
							// onChange={handleChange}
							ref={emailRef}
						/>
					</label>
					<label>
						<input
							type='password'
							id='password'
							// value={state.password}
							placeholder='Password'
							// onChange={handleChange}
							ref={passwordRef}
						/>
					</label>
					<label>
						<input
							type='password'
							id='confirmpassword'
							// value={state.confirmpassword}
							placeholder='Confirm password'
							// onChange={handleChange}
							ref={passwordConfirmRef}
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
							to='/login'
						>
							Log in
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
}
