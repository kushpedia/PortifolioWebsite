import React from 'react'
import { Button } from 'primereact/button'
import './About.css'
import { Card } from 'primereact/card';
import Experience from '../assets/coding_background.jpg'
import AboutImage from '../assets/main1.jpeg'
import AboutMeTabs from './AboutMeTabs';
const About = () => {
	return (

		<>
			<div id='about_me' className='main_about_me grid mx-8'>
				<div className='flex flex align-items-left justify-content-left'>
					<div className='image mr-4'>
						<img src={AboutImage} alt='about me image' className='about_me_image my-4'></img>
					</div>

					<div className='about_me_details flex align-items-left justify-content-left'>

						<p className='text-6xl mb-0 text-primary'> &nbsp; <span className='about_ab'>Ab</span>out Me</p>
						<div className='who_am_i'>
							<p className='text-xl'>Experienced full-stack developer skilled in building robust web applications.</p>
							<p className='text-xl'>Proficient in frontend technologies like JavaScript, React, and CSS,
								A strong backend foundation in Python, Php and SQL and Mongodb databases. </p>
							<p className='text-xl'>Passionate about problem-solving and creating efficient, user-friendly software solutions.</p>
						</div>
					</div>

				</div>
				{/* TABMENU */}
				<div className='about_me_tab' col-12>

					<AboutMeTabs />
				</div>

			</div>
		</>

	)
}

export default About