import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../Db/AuthContext';

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Please check your inbox to reset your password.');
		} catch {
			setError('E-mail not found, please sign up using this e-mail.');
		}

		setLoading(false);
	}

	return (
		<div className='login-container'>
			<div className='login-signin'>
				<h2>Password Reset</h2>
				<div className='alert-container'>
					{message && <div className='success-message'>{message}</div>}
					{error && <div className='error-message'>{error}</div>}
				</div>
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
					<div className='submit-button-container'>
						<input id='submit' type='submit' value='Submit' />
					</div>
					<NavLink
						className='nav-link'
						activeClassName='is-active'
						exact={true}
						to='/login'
					>
						Login
					</NavLink>
				</form>
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
		</div>
	);
}
