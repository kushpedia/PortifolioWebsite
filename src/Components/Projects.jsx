import React from 'react'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset';
import image from '../assets/digital_global_connection.avif'
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import ProjectCard from './ProjectCard';
import './ProjectCard.css'
import Star from '../assets/web-hosting.jpg'
import MainImage from '../assets/digitization.avif'
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
			
				<Card title='DevSearch' className='project_card'>
				<a href='/' className='project_card_image' target='_blank'>
			<img src={MainImage} 
			alt="Project poster" className='project_poster' />

			<div className="project_details">
				<h1 className='project_details_heading text-blue-600'>DevSearch</h1>
				<div className="align_center movie_data_rate">
					<p>20/4/2022</p> 
					
						<img src={Star} alt="rating icon"  className='card_emoji'/>
					
				</div>
				<p className="movie_description">
					Show What you can do...
				</p>
			</div>
			</a>
				
				</Card>
			
			
		</Fieldset>
	</div>
	)
}

export default Projects