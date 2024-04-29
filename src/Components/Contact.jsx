import React from 'react'
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea';
import './Contact.css'
const Contact = () => {
	return (
		

		<div className="contact_me_container flex align-items-center justify-content-evenly mx-4 my-2
		">
			<div className='flex align-items-left justify-content-between flex-column '>
				<div className='mb-4'><h1> Contact Me</h1></div>
				<div className='mb-2'><li className="pi pi-telegram mr-2"></li>infor@kushpedia.co.ke</div>
				<div className='mt-2 mb-4'> <li className="pi pi-phone mr-2"></li>+254703443827</div>
				<div className="grid p-2 gap-4 social_icons">
					<div className="github mr-2"><a href="#"><li className='pi pi-github'></li></a></div>
					<div className="facebook mr-2"><a href="#"><li className='pi pi-facebook'></li></a></div>
					<div className="linkedin mr-2"><a href="#"><li className='pi pi-linkedin'></li></a></div>
					<div className="twitter mr-2"><a href="#"><li className='pi pi-twitter'></li></a></div>
				</div>
				
				<Button label='Downloan CV' className='mt-4' severity='danger' icon="pi pi-upload"/>
			</div>

			<div className='contact-form p-4 my-2 flex align-items-left justify-content-between flex-column'> 

				<IconField iconPosition="left">
				<InputIcon className="pi pi-user-edit"> </InputIcon>
				<InputText v-model="value1" placeholder="Enter Your Name" />
				</IconField>

				<IconField iconPosition="left" className='mt-4'>

				<InputIcon className="pi pi-envelope"> </InputIcon>
				<InputText v-model="value1" placeholder="Enter Your Email" />
				</IconField>

				<InputTextarea autoResize placeholder="Write your message" rows={5} cols={30}
				className='mt-4'/>

				<Button label='Submit' className='mt-4' severity='danger'/>
			
			</div>

		</div>
	)
}

export default Contact