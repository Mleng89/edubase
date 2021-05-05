import { useRef } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import AllRoutes from './Routes';
import './navbar.css';
import firebaselogo from '../Images/firebase.svg';
import reactlogo from '../Images/react.svg';

export default function Navbar() {
	const navbarLinks = useRef(null);
	const handleNavBar = (e) => {
		navbarLinks.current.classList.toggle('menu-collapse');
	};
	const hideNav = () => {
		if (!navbarLinks.current.classList.contains('menu-collapse'))
			navbarLinks.current.classList.add('menu-collapse');
	};
	return (
		<>
			<BrowserRouter>
				<nav className='navbar'>
					<div className='brand-title'>
						<NavLink
							className='nav-link'
							activeClassName='is-active'
							exact={true}
							to='/'
						>
							EduBase
						</NavLink>
					</div>
					<button
						className='toggle-button'
						onClick={(e) => {
							handleNavBar(e);
						}}
					>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</button>
					<div ref={navbarLinks} className='navbar-links menu-collapse'>
						<ul className='links-list'>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/about'
								>
									About us
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/contact'
								>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/login'
								>
									Log in / Sign up
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<div>
					<AllRoutes
						hideMenu={() => {
							hideNav();
						}}
					></AllRoutes>
				</div>
			</BrowserRouter>
			<footer>
				<p>This project is built on:</p>
				<img src={firebaselogo} alt='Firebase' />
				<img src={reactlogo} alt='React' />
			</footer>
		</>
	);
}
