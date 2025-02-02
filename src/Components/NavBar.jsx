import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import LogoImage from '../assets/logosvg.svg'
import './NavBar.css'
import { HashLink as Link } from 'react-router-hash-link';
const NavBar = () => {
    const image = <img src={LogoImage} style={{width: 100, height: 80 }}></img>
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/#main_container'

        },
        {
            label: 'About Me',
            icon: 'pi pi-star',
            url: '/#about_me',
            smooth: 'smooth',
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'DevSearch',
                    icon: 'pi pi-bolt',
                    url: '/#projects'
                },
                {
                    label: 'KShop',
                    icon: 'pi pi-server',
                    url: '/#projects'

                },
                {
                    label: 'Movie Maniac',
                    icon: 'pi pi-pencil',
                    url: '/#projects'
                },
                {
                    label: 'React',
                    icon: 'pi pi-palette',
                    url: '/#projects',
                    items: [
                        {
                            label: 'ToDO App',
                            icon: 'pi pi-palette',
                            url: '/#projects',
                        },
                        {
                            label: 'Weather App',
                            icon: 'pi pi-palette',
                            url: '/#projects',
                        }
                    ]
                }
            ]
        }

    ];
    const contact_button = <Link to="#contact_div" smooth> <Button className='text-blue-800 hover:text-white link_styles' label="Contact" rounded icon="pi pi-envelope" /></Link>

    return (
        <Menubar className="navbar_menu text-white font-4xl p-2"
            start={image} model={items} end={contact_button} />
    )
}

export default NavBar
