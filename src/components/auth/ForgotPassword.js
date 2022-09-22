import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
			setMessage('Check your inbox for further instructions');
		} catch {
			setError('Failed to reset password');
		}

		setLoading(false);
	}

	return (
		<div className='login-container'>
			<h2>Feature still being developed.</h2>
			<div className='login-signin'>
				<h2>Password Reset</h2>
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
