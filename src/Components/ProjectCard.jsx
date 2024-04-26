import React from 'react'
import './ProjectCard.css'
import Star from '..//assets/web-hosting.jpg'
import MainImage from '../assets/digitization.avif'

const ProjectCard = () => {
	
	return (
		
		<a href='/' className='movie_card' target='_blank'>
			<img src={MainImage} 
			alt="Project poster" className='project_poster' />

			<div className="movie_details">
				<h3 className='movie_details_heading'>DevSearch</h3>
				<div className="align_center movie_data_rate">
					<p>20/4/2022</p> 
					<p>5 </p>
						<img src={Star} alt="rating icon"  className='card_emoji'/>
					
				</div>
				<p className="movie_description">
					A websystem where all developers post their projects with unlimited access
				</p>
			</div>
			</a>
	)
}

export default ProjectCard