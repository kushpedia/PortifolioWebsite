import React from 'react'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset';
import image from '../assets/digital_global_connection.avif'
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';

import './ProjectCard.css'
import Digital_global from '../assets/digital_global_connection.avif'
import MainImage from '../assets/web-development-concept.jpg'
import WebHosting from '../assets/web-hosting.jpg'
const Projects = () => {
	const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image={image} shape="circle" />
            <span className="font-bold"> My Projects</span>
        </div>
    );
	return (
		<div className="card">
		<Fieldset legend={legendTemplate}>
			<div className='flex align-items-center justify-content-between'>
			<Card title='DevSearch' className='project_card'>
				<div>
					<img src={MainImage} 
						alt="Project poster" className='project_poster' />
				</div>
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-blue-900'>DevSearch</h1>
						
							<p className="movie_description text-blue-900 ">
								This App allows developers to post their work
							</p>
							<Button type="button" label="Github Repo" icon="pi pi-github"/>
					</div>
				
				
			</Card>
			<Card title='DevSearch' className='project_card'>
				<div>
					<img src={WebHosting} 
						alt="Project poster" className='project_poster' />
				</div>
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-blue-900'>Learn Web Hosting</h1>
						
							<p className="movie_description text-blue-900 ">
								Web hosting made easier
							</p>
							<Button type="button" label="Github Repo" icon="pi pi-github"/>
					</div>
				
				
			</Card>
			<Card title='DevSearch' className='project_card'>
				<div>
					<img src={Digital_global} 
						alt="Project poster" className='project_poster' />
				</div>
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-blue-900'>Cart Wish</h1>
						
							<p className="movie_description text-blue-900 ">
								For a better Shoping experience
							</p>
							<Button type="button" label="Github Repo" icon="pi pi-github"/>
					</div>
				
				
			</Card>
			
			</div>
		</Fieldset>
	</div>
	)
}

export default Projects