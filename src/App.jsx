import React from 'react'
import './App.css'
import Counter from './Components/Counter';
import Projects from './Components/Projects';

import NavBar from './Components/NavBar';
import About from './Components/About';


function App() {

    
    return (
        <>
        <NavBar/>        
        <Counter/>
        <About/>
        <Projects/>

        </>
    )
}

export default App
