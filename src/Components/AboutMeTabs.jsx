import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import Study from '../assets/study_icon.jpg'
import Experience from '../assets/ai_coding.jpg'
import Skills from '../assets/Code1.jpg'
import { Badge } from 'primereact/badge';
import './AboutMeTab.css'

const AboutMeTabs = () => {
	const tab1HeaderTemplate = (options) => {
		return (
			<div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
				<Avatar image={Study} shape="circle" />
				<span className="font-bold white-space-nowrap experience_type">Education</span>
				<Badge value="4" />
			</div>
		);
	};

	const tab2HeaderTemplate = (options) => {
		return (
			<div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
				<Avatar image={Experience} shape="circle" />
				<span className="font-bold white-space-nowrap experience_type">Experience</span>
			</div>
		)
	};

	const tab3HeaderTemplate = (options) => {
		return (
			<div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
				<Avatar image={Skills} shape="circle" />
				<span className="font-bold white-space-nowrap experience_type">Skills</span>
				<Badge value="3" />
			</div>
		)
	};
	return (
		<div className="card card-design">
			<TabView className=''>
				<TabPanel header="Header I" headerTemplate={tab1HeaderTemplate} className='tabpanel'>
					<p className="m-0 items-design">
						<ul>
							<li>
								<h5><li className='pi pi-prime'></li> Maseno University</h5>
								<p>Bachelor's Degree: Information Technology</p>
							</li>
							<li>
								<h5> <li className='pi pi-objects-column'></li> Udemy</h5>
								<p>100 days of code python bootcamp</p>
								<p>The Ultimate React JS Course 2024</p>
								<p>Python django</p>
								<p>Introduction to Service Management with ITIL 4</p>
							</li>
							<li>
								<h5><li className='pi pi-pen-to-square'></li> Naaro High School</h5>
								<p>Kenya Certificate of Secondary Education</p>
							</li>
							<li>
								<h5><li className='pi pi-map'></li> Kimotho Primary School</h5>
								<p>Kenya Certificate of Primary Education</p>
							</li>

						</ul>
					</p>
				</TabPanel>
				<TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
					<p className="m-0 items-design">
						<ul>
							<li>
								<h5>Equity Bank Kenya Limited</h5>
								<p>Credit System- Project Management Officer</p>
								<p>Relationship Officer-Personal Banking</p>
								<p>Technical Field Officer</p>
							</li>
							<li>
								<h5>Murang'a County governement</h5>
								<p>Information Technology officer-internship</p>
							</li>
						</ul>
					</p>
				</TabPanel>
				<TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
					<p className="m-0 items-design">
						<ul>
							<li>
								<h5>Coding</h5>
								<p>
									<em>Javascript, </em>
									<em>HTML, </em>
									<em>CSS, </em>
									<em>Python, </em>
									<em>React,</em>
									<em>Django, </em>
									<em className='pi pi-github'>Version control</em>
								</p>


							</li>
							<li>
								<h5>Technical</h5>
								<p>System Application Testing</p>
								<p>End user trainings and support</p>
								<p>Coordinating development of applications</p>
								<p>Creating a project road map based on the vision.</p>
							</li>
							<li>
								<h5>Business</h5>
								<p>Requirements Gathering and Documentation </p>
								<p>Customer relationship management</p>
								<p>Product Marketing</p>
								<p>Customer training on digital marketing and financial literacy</p>
							</li>
						</ul>
					</p>
				</TabPanel>
			</TabView>
		</div>
	)
}

export default AboutMeTabs