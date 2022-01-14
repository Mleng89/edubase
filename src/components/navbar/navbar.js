import { useRef, useState } from 'react';
import { HashRouter as Router, NavLink, useHistory } from 'react-router-dom';
import AllRoutes from '../Routes';
import './navbar.css';
import firebaselogo from '../../Images/firebase.svg';
import reactlogo from '../../Images/react.svg';
import { AuthProvider, useAuth } from '../../Db/AuthContext';

export default function Navbar() {
	const history = useHistory();
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	console.log('navbar: do i have a user?', currentUser);

	const navbarLinks = useRef(null);

	const handleNavBar = (e) => {
		navbarLinks.current.classList.toggle('menu-collapse');
	};
	const hideNav = () => {
		if (!navbarLinks.current.classList.contains('menu-collapse'))
			navbarLinks.current.classList.add('menu-collapse');
	};

	async function handleLogout() {
		setError('');

		try {
			await logout();
			history.push('/');
		} catch {
			setError('Failed to log out');
		}
	}
	return (
		<>
			<AuthProvider>
				<Router>
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
							{currentUser ? (
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
											to='/dashboard'
										>
											Account
										</NavLink>
									</li>
									<li className='nav-item'>
										<a href='/' onClick={() => handleLogout()}>
											Log out
										</a>
									</li>
								</ul>
							) : (
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
							)}
						</div>
					</nav>
					<div>
						<AllRoutes
							hideMenu={() => {
								hideNav();
							}}
						></AllRoutes>
					</div>
				</Router>
			</AuthProvider>
			<footer>
				<p>This project is built on:</p>
				<img className='footer-img' src={firebaselogo} alt='Firebase' />
				<img className='footer-img' src={reactlogo} alt='React' />
			</footer>
		</>
	);
}
