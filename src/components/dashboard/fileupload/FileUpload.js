import React from 'react';
import './FileUpload.css';
import { Container } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { useFolder } from '../../../hooks/useFolder';
import FolderBreadcrumbs from './FolderBreadCrumbs';
import AddFolder from './Addfolder';
import AddFile from './Addfile';
import Folder from './Folder';

export default function FileUpload() {
	const { folderId } = useParams();
	const { state = {} } = useLocation();
	const { folder, childFolders, childFiles } = useFolder(
		folderId,
		state.folder
	);
	return (
		<div className='file-upload-container'>
			<Container fluid>
				<div className='d-flex align-items-center'>
					<FolderBreadcrumbs currentFolder={folder} />
					<AddFile currentFolder={folder} />
					<AddFolder currentFolder={folder} />
				</div>
				{/* CHILD FOLDERS */}
				<h2>Folder name is: </h2>
				{childFolders.length > 0 && (
					<div className='d-flex flex-wrap'>
						{' '}
						{childFolders.map((childFolder) => (
							<div
								key={childFolder.id}
								style={{ maxWidth: '250px' }}
								className='p-2'
							>
								{' '}
								<Folder folder={childFolder} />
							</div>
						))}
					</div>
				)}
				{childFolders.length > 0 && childFiles.length > 0 && <hr />}
				{/* CHILD FILES */}
				{childFiles.length > 0 && (
					<div className='d-flex flex-wrap'>
						{' '}
						{childFiles.map((childFile) => (
							<div
								key={childFile.id}
								style={{ maxWidth: '250px' }}
								className='p-2'
							>
								{' '}
								{/* <File file={childFile} /> */}
							</div>
						))}
					</div>
				)}
			</Container>
		</div>
	);
}
