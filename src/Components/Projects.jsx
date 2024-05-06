import React from 'react'
import { Button } from 'primereact/button'
import { Fieldset } from 'primereact/fieldset'
import image from '../assets/digital_global_connection.avif'
import { Avatar } from 'primereact/avatar'
import { Card } from 'primereact/card'
import './ProjectCard.css'
import Digital_global from '../assets/cart.jpg'
import MainImage from '../assets/developer.jpg'
import Movie_Maniac from '../assets/apes.jpg'
import TodoImage from '../assets/todolist.jpg'
import MovieCard from './MovieCard'
const Projects = () => {
	const legendTemplate = (
		<div className="flex align-items-center gap-2 px-2">
			<Avatar image={image} shape="circle" />
			<span className="font-bold"> My Projects</span>
		</div>
	);

	const projects = [
		{
			'id': 1,
			'title': 'Devsearch',
			'description': 'This App allows developers to post their work',
			'image': MainImage,
			'githubLink': 'https://github.com/kushpedia/Django',
			'website': '#',
		},
		{
			'id': 2,
			'title': 'Movie Maniac',
			'description': 'Popular, Top Rated, Upcoming Movies',
			'image': Movie_Maniac,
			'githubLink': 'https://github.com/kushpedia/Movie-Maniac-React',
			'website': 'https://kushpediamovies.netlify.app/',
		},
		{
			'id': 3,
			'title': 'CartWish',
			'description': 'For a better Shoping experience',
			'image': Digital_global,
			'githubLink': 'https://kushpediakshop.netlify.app/',
			'website': '#',
		},
		{
			'id': 4,
			'title': 'To Do List',
			'description': 'Organise your task',
			'image': TodoImage,
			'githubLink': 'https://kushpediakshop.netlify.app/',
			'website': '#',
		}
	]

	return (
		<>
			<div className="card" id='projects'>
				<Fieldset legend={legendTemplate} className='card_fieldset'>
					<div className='flex flex-row flex-wrap align-items-center justify-content-between'>

						{
							projects.map((project) => (
								<MovieCard key={project.id} id={project.id} project={project} />)
							)
						}
					</div>
				</Fieldset>

			</div>

		</>
	)
}

export default Projects