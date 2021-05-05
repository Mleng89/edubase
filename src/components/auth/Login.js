import React, { useRef, useState } from 'react';
import './Login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../Db/AuthContext';
import loginimg from '../../Images/loginimg.svg';

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/dashboard');
		} catch {
			setError('Email and password does not match');
		}
	}

	return (
		<div className='login-container'>
			<div className='login-signin'>
				<h2>Login</h2>
				<img src={loginimg} alt='login' />
				<div className='login-error'>
					{/* IF THERE IS AN ERROR, DISPLAY IT */}
					{error && <h3>{error}</h3>}
				</div>
				<form className='sign-in' onSubmit={handleSubmit}>
					<label>
						<input type='text' id='email' ref={emailRef} placeholder='E-mail' />
					</label>
					<label>
						<input
							type='password'
							id='password'
							ref={passwordRef}
							placeholder='Password'
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
