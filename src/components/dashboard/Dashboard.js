import React, { useState } from 'react';
import './Dashboard.css';
import { useAuth } from '../../Db/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	async function handleClick() {
		setError('');

		try {
			history.push('/files');
		} catch {
			setError('Failed to find path.');
		}
	}
	async function handleLogout() {
		setError('');

		try {
			await logout();
			history.push('/');
		} catch {
			setError('Failed to log out.');
		}
	}

	return (
		<div className='dashboard-container'>
			<>
				<h1> Welcome {currentUser.email}! </h1>
				<div className='file-upload-container'>
					<button onClick={handleClick}>File uploads</button>
				</div>
			</>

			{/* <button onClick={handleLogout}>Log out</button> */}
		</div>
	);
}
