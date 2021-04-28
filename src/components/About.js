import React from 'react';
import './About.css';
import firebaselogo from '../Images/firebase.svg';
import reactlogo from '../Images/react.svg';
import app from '../Db/firebase';
export default function About() {
	// console.log('what is in my app', app);
	const userLoggedin = app.firebase_.auth().currentUser;
	return (
		<div>
			<header>About EduBase (Name in progress)</header>
			{/* CHECKING IF THERE IS A USER */}
			{userLoggedin
				? `Hello ${app.firebase_.auth().currentUser.displayName}`
				: 'Hello!'}
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
