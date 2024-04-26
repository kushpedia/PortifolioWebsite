import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const NavBar = () => {
const image = <img src='https://stackblitz.com/_astro/img/brands/stackblitz-monotone.svg'></img>
    const items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'About Me',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'DevSearch',
                icon: 'pi pi-bolt'
            },
            {
                label: 'KShop',
                icon: 'pi pi-server'
            },
            {
                label: 'Movie Maniac',
                icon: 'pi pi-pencil'
            },
            {
                label: 'React',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'ToDO App',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Weather App',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    }
    
];
const contact_button = <a href="/"> <Button className ='text-blue-800 hover:text-white' label="Contact" rounded icon="pi pi-envelope" /></a>
	return (
		<Menubar className="bg-primary text-white font-4xl p-2 mt-5 mr-4 ml-2"
		start={image} model={items} end={contact_button}/>
	)
}

export default NavBar