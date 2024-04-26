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
		<div className='main_about_me grid mx-8'>
			<div className='image col-4'>
				<img src={AboutImage} alt='about me image' className='about_me_image my-4'></img>
			</div>
			<div className="col-8 mt-4">
				<div className='about_me_details flex align-items-left justify-content-left '>
				
					<p className='text-6xl'> &nbsp; <span className='about_ab'>Ab</span>out Me</p>
					<div className='who_am_i'>
						<p className='text-xl'>Experienced full-stack developer skilled in building robust web applications.</p>
							<p className='text-xl'>Proficient in frontend technologies like JavaScript, React, and CSS, 
								A strong backend foundation in Python, Php and SQL and Mongodb databases. </p>
							<p className='text-xl'>Passionate about problem-solving and creating efficient, user-friendly software solutions.</p>
					</div>
					<AboutMeTabs/>

				
			</div>					
			</div>
			</div>
		






		<div className='about_me_container'>
			
			<div className="surface-0 text-700 text-center">
			<div className="text-blue-600 font-bold mb-1">
				<p className='text-6xl'> &nbsp; <span className='about_ab'>Ab</span>out Me</p><i className="pi pi-slack" ></i>
			</div>
			<div className="text-900 font-bold text-5xl mb-1">Experienced Full-Stack Developer</div>
			<img src={Experience} alt="Experience Iamge" className='experience_image' />
			<div className="text-400 text-2xl mb-2 about_me">			
				<Card title='Experience' className='shadow-5 font-semibold'>
					<p className='text-xl'>Experienced full-stack developer skilled in building robust web applications.</p>
					<p className='text-xl'>Proficient in frontend technologies like JavaScript, React, and CSS, 
						A strong backend foundation in Python, Php and SQL and Mongodb databases. </p>
					<p className='text-xl'>Passionate about problem-solving and creating efficient, user-friendly software solutions.</p>
					<Button label="Hire Me" icon="pi pi-discord" className="font-bold px-2 py-2 white-space-nowrap hire_me_button" rounded raised />
				</Card>
			</div>			
		</div>			
	</div>
			</>
		
	)
}

export default About