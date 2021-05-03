import React from 'react';
import './About.css';
import firebaselogo from '../Images/firebase.svg';
import reactlogo from '../Images/react.svg';
export default function About() {
	return (
		<div>
			<header>About EduBase (Name in progress)</header>

			<div className='about-body'>
				<main className='about-content'></main>

				<footer>
					<p>This project is built on:</p>
					<img src={firebaselogo} alt='Firebase' />
					<img src={reactlogo} alt='React' />
				</footer>
			</div>
		</div>
	);
}
