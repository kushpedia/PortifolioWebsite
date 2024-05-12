import React from 'react'

const Footer = () => {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	return (
		<div className='flex align-items-center justify-content-center p-2 mb-2 mx-4'>&#169; Kushpedia {currentYear}</div>
	)
}

export default Footer