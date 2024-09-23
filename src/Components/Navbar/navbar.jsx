import React from 'react';
import "./navbar.scss";

const navbar = () => {
    return (

        <header className='header'>
            <div className='contenedor-logo'>
           <img src="Myimage/logo2.png" alt="aa"  className='logo' />        
            </div>

            <nav className='navbar'>
                <a href="#" target="_blank" rel="noreferrer">Home</a>
                <a href="#" target="_blank" rel="noreferrer">Quienes somos</a>
                <a href="#" target="_blank" rel="noreferrer">Faq</a>
                <a href="#" target="_blank" rel="noreferrer">Servicios</a>
               
            </nav>

            <a href="#" className='btn'><button>Contacto</button></a>
            
        </header>

    )
}

export default navbar;