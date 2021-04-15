import { useRef } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import AllRoutes from './Routes';
import './navbar.css';
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
					<div className='brand-title'> EduBase </div>
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
									to='/'
								>
									About us
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/'
								>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/'
								>
									Log in/ Sign up
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
		</>
	);
}
