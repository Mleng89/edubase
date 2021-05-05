import React from 'react';
import './About.css';
import { useAuth } from '../Db/AuthContext';

export default function About() {
	console.log('in about do i have useAuth', useAuth());
	return (
		<div>
			<header>About EduBase (Name in progress)</header>

			<div className='about-body'>
				<div className='about-card'>
					<h2>
						This is a platform for educators to share and gain inspiration on
						lesson plans!
					</h2>
				</div>
			</div>
		</div>
	);
}
