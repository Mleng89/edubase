import React from 'react';
import './Contact.css';
import linkedin from '../../Images/linkedin.svg';
import twitter from '../../Images/twitter.svg';
import github from '../../Images/github.svg';

export default function Contact() {
	return (
		<div className='contact-container'>
			<h1>Contact Page</h1>
			<p> This platform is built by:</p>

			<p>
				Matthew Leng, who was a teacher prior to becoming a software engineer!
			</p>
			<div className='contact-links'>
				<div id='linkedin'>
					<a
						href='https://www.linkedin.com/in/matthew-leng/'
						target='_blank'
						rel='noreferrer'
					>
						<img src={linkedin} alt='Linkedin' />
					</a>
				</div>
				<div id='twitter'>
					<a
						href='https://twitter.com/matthewleng'
						target='_blank'
						rel='noreferrer'
					>
						<img src={twitter} alt='Twitter' />
					</a>
				</div>
				<div id='github'>
					<a href='https://github.com/Mleng89' target='_blank' rel='noreferrer'>
						<img src={github} alt='Github' />
					</a>
				</div>
			</div>
		</div>
	);
}
