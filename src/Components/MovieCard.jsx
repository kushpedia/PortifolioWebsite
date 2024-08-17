import React from 'react'
import './MovieCard.css'
import MainImage from '../assets/web-development-concept.jpg'
import { Button } from 'primereact/button'

const MovieCard = ({ project }) => {
	return (

		// <a href={`https://themoviedb.org/movie/1094844`} className='movie_card' target='_blank'>
		<div className="movie_card">
			<img src={project['image']}
				alt="Movie poster" className='movie_poster' />

			<div className="movie_details">
				<h3 className='project_details_heading text-red-500'>{project['title']}</h3>
				<div className="align_center movie_data_rate">
					<p><em>{project.description}</em></p>
				</div>
				<p className="movie_description">
					<a href={project.githubLink} target='blank' className='link_styles'><Button type="button" label="Github Repo" icon="pi pi-github" /></a>
				</p>
				<a href={project.website} target='blank' className='link_styles'><Button type="button" label="Visit The App" icon="pi pi-at" severity="warning"
					className='mb-4' /></a>

			</div>
		</div>


	)
}

export default MovieCard