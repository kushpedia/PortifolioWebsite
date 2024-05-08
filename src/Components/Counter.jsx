import './Counter.css'
import React from 'react'
import { Button } from 'primereact/button';
import Image from '../assets/main1.jpeg'
import { motion } from 'framer-motion';
import Image2 from '../assets/coding.avif'
import { Tag } from 'primereact/tag';
const Counter = () => {

	return (
		<div className='main_container' id='main_container'>

			<div className="grid grid-nogutter surface-0 text-800 mr-4 ml-2 mt-1 ">
				<div className="flex align-items-center col-12 md:col-6 p-2 text-center md:text-left main_container">
					<section className='ml-8 p-2' >
						<motion.span className=" block mb-4 title_name"

						>HENRY WANJIRU</motion.span>
						<div className=" fadein animation-duration-3000 text-3xl text-primary font-italic mb-4 ml-4 title_description">
							Full Stack Developer</div>
						<div className='flex flex-wrap align-items-center justify-content-left gap-3 mb-8'>
							<Tag severity="Primary" className='tag' value="Python" icon="pi pi-code"></Tag>
							<Tag severity="Primary" className='tag' value="Django"></Tag>
							<Tag severity="Primary" className='tag' value="Javascript"></Tag>
							<Tag severity="Primary" className='tag' value="React"></Tag>
							<Tag severity="Primary" className='tag' value="Version Control" icon="pi pi-github"></Tag>
						</div>
						<div className='flex flex-wrap align-items-center justify-content-between'>
							<Button label="Hire Me" type="button" className="p-button-raised" />
							<Button label="My Projects" type="button" className="p-button-outlined" />

						</div>

					</section>
				</div>
				<div className="col-6 md:col-6 overflow-none">
					<motion.img src={Image2} alt="hero-1" height='590px' className='main_image zoomindown  animation-duration-2000 ml-4' width='450px' style={{}}
					// whileHover={{
					// 	rotateY:180,
					// 	}}
					// transition={{duration:2}}	
					/>
				</div>
			</div>


		</div>
	)
}

export default Counter