import React from 'react'
import './App.css'
import Counter from './Components/Counter';
import Projects from './Components/Projects';

import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
// import { Route, Routes } from 'react-router-dom';



function App() {


    return (
        <>
            <NavBar />
            <Counter />
            <About />
            <Projects />
            <Contact />


        </>
    )
}

export default App
