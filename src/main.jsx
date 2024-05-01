import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css"; //theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css" // flex
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <PrimeReactProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>
  </PrimeReactProvider>
)
