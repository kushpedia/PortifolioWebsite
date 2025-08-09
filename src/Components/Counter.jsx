import React from 'react';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';
import Image2 from '../assets/coding.avif';
import { Tag } from 'primereact/tag';
import './Counter.css';

const Counter = () => {
	return (
		<div className='counter-container' id='main_container'>
			<div className="counter-grid surface-0 text-800">
				<div className="counter-content">
					<section>
						<motion.span className="counter-title">
							HENRY WANJIRU
						</motion.span>
						<div className="counter-subtitle fadein animation-duration-3000 text-primary font-italic">
							Full Stack Developer
						</div>
						<div className='counter-tags'>
							<Tag severity="Primary" className='tag' value="Python" icon="pi pi-code"></Tag>
							<Tag severity="Primary" className='tag' value="Django"></Tag>
							<Tag severity="Primary" className='tag' value="Javascript"></Tag>
							<Tag severity="Primary" className='tag' value="React"></Tag>
							<Tag severity="Primary" className='tag' value="Version Control" icon="pi pi-github"></Tag>
						</div>
						<div className='counter-buttons'>
							<a href="/#contact_div" className='link_styles'>
								<Button label="Hire Me" type="button" className="p-button-raised" />
							</a>
							<a href="/#projects" className='link_styles'>
								<Button label="My Projects" type="button" className="p-button-outlined my_projects_button" />
							</a>
						</div>
					</section>
				</div>
				<div className="counter-image">
					<motion.img
						src={Image2}
						alt="hero-1"
						className='main_image zoomindown animation-duration-2000'
					/>
				</div>
			</div>
		</div>
	);
}

export default Counter;