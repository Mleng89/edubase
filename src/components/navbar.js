import React from 'react';
import './navbar.css';
export default function Navbar() {
	const navbarLinks = document.getElementsByClassName('navbar-links');
	console.log('navbarLinks', navbarLinks[0].classList.toggle);
	return (
		<div className='navbar'>
			<div className='brand-title'> EduBase </div>
			<a
				href='/#'
				className='toggle-button'
				onClick={() => navbarLinks[0].classList.toggle('active')}
			>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</a>
			<div className='navbar-links'>
				<ul>
					<li>
						<a href='/#'>About us</a>
					</li>
					<li>
						<a href='/#'>Contact</a>
					</li>
					<li>
						<a href='/#'>Log in/ Sign up</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
