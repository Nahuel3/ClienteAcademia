import React, { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home'); // Estado para el enlace seleccionado

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link); // Actualiza el enlace seleccionado
    setMenuOpen(false); // Cierra el menú después de seleccionar un enlace
  };

  return (
    <header className='header'>
      <div className='contenedor-logo'>
        <img src="Myimage/logo2.png" alt="Logo" className='logo' />
      </div>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a 
          href="#" 
          className={selectedLink === 'Home' ? 'selected' : ''} 
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </a>
        <a 
          href="#" 
          className={selectedLink === 'Quienes somos' ? 'selected' : ''} 
          onClick={() => handleLinkClick('Quienes somos')}
        >
          Quienes somos
        </a>
        <a 
          href="#" 
          className={selectedLink === 'Faq' ? 'selected' : ''} 
          onClick={() => handleLinkClick('Faq')}
        >
          Faq
        </a>
        <a 
          href="#" 
          className={selectedLink === 'Servicios' ? 'selected' : ''} 
          onClick={() => handleLinkClick('Servicios')}
        >
          Servicios
        </a>
      </nav>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <a href="#" className='btn'>
        <button>Contacto</button>
      </a>
    </header>
  );
};

export default Navbar;
