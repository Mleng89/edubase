import React from 'react';
import './FileUpload.css';
import { useAuth } from '../../../Db/AuthContext';

export default function FileUpload() {
	console.log('in about do i have useAuth', useAuth());
	return (
		<div>
			<header>User Files</header>

			<div className='file-upload-container'>
				<div className='file-card'>
					<h2>Upload files here!</h2>
				</div>
			</div>
		</div>
	);
}
