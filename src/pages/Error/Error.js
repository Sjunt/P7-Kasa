import React from 'react'
import Header from '../../components/Header/Header'
import "./Error.css";

export default function Error() {
 
  return (
    
    <div className="bodyError">
        <Header />
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    </div>
  )
}