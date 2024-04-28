import React from 'react'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
import image from '../assets/digital_global_connection.avif'
import { Avatar } from 'primereact/avatar'
import { Card } from 'primereact/card'
import './ProjectCard.css'
import Digital_global from '../assets/k-shop.jpg'
import MainImage from '../assets/web-development-concept.jpg'
import Movie_Maniac from '../assets/movie_maniac.jpg'
const Projects = () => {
	const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image={image} shape="circle" />
            <span className="font-bold"> My Projects</span>
        </div>
    );
	return (
		<>
		<div className="card">
		<Fieldset legend={legendTemplate} className='card_fieldset'>
			<div className='flex align-items-center justify-content-between'>
			<Card title='DevSearch' className='project_card'>
				<div>
					<img src={MainImage} 
						alt="Project poster" className='project_poster' />
				</div>
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-red-500'>DevSearch</h1>
						
							<p className="project_description text-red-900 ">
								<em>This App allows developers to post their work</em>
							</p>
							<a href="https://github.com/kushpedia/Django" target='blank'><Button type="button" label="Github Repo" icon="pi pi-github"/></a>
					</div>
				
				
			</Card>
			<Card title='DevSearch' className='project_card'>
				<div>
					<img src={Movie_Maniac} 
						alt="Project poster" className='project_poster' />
				</div>
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-red-500'> Movie Maniac</h1>
						
							<p className="movie_description text-blue-900 ">
								<em>Popular, Top Rated, Upcoming Movies</em>
							</p>
							<a href="https://kushpediamovies.netlify.app/" target='blank'><Button type="button" label="Visit The App" icon="pi pi-at" severity="warning"
							className='mb-4'/></a>
							<a href="https://github.com/kushpedia/Django" target='blank'><Button type="button" label="Github Repo" icon="pi pi-github" /></a>
					</div>
				
				
			</Card>
			<Card title='DevSearch' className='project_card'>
				<div>
				<img src={Digital_global} 
					alt="Project poster" className='project_poster' />
				</div>
					
				
					<div className="project_details  flex align-items-center justify-content-center">
						<h1 className='project_details_heading text-red-500'>Cart Wish</h1>
						
							<p className="movie_description text-blue-900 ">
								<em>For a better Shoping experience</em>
							</p>
							<a href="https://kushpediakshop.netlify.app/" target='blank'>
							<Button type="button" label="Visit The App" icon="pi pi-at" severity="warning"/>
								</a>
					</div>
				
				
			</Card>
			
			</div>

		

		</Fieldset>
		
	</div>
		
		</>
	)
}

export default Projects