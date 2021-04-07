import React, { useEffect } from 'react';
import './navbar.css';
export default function Navbar() {
	const navbarLinks = document.getElementsByClassName('navbar-links');
	console.log('what is navbarLinks before effect', navbarLinks);
	/** This is required as navbar-links is not loaded initially with the page
	 *  Once navbarLinks updates, useEffect will rerender it allowing the hamburger to work when
	 *  the browser past 750px
	 * */
	useEffect(() => {}, [navbarLinks]);

	return (
		<div className='navbar'>
			<div className='brand-title'> EduBase </div>
			<button
				className='toggle-button'
				onClick={() => navbarLinks[0].classList.toggle('active')}
			>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</button>
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
