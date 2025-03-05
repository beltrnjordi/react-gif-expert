import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // Con el modo estricto lanza dos veces el response
    <React.StrictMode> 
        <GifExpertApp/>
    </React.StrictMode>
)