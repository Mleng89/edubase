import React from 'react';
import './NotFound.css';
import notfoundimg from '../../Images/notfoundimg.svg';

export default function NotFound() {
	return (
		<div className='notfound-container'>
			<h2>Error!</h2>
			<img src={notfoundimg} alt='Not Found' />
			<h3>The page you are looking for is not here!</h3>
			<h3>Please click on the top left to return to the home page.</h3>
		</div>
	);
}
