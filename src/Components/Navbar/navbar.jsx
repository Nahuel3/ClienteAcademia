import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
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
        <Link to="/" 
              className={selectedLink === 'Home' ? 'selected' : ''} 
              onClick={() => handleLinkClick('Home')}>Home</Link>

        <Link to="/nosotros" 
              className={selectedLink === 'nosotros' ? 'selected' : ''} 
              onClick={() => handleLinkClick('nosotros')}>Quienes somos</Link>
        
        <Link to="/faq" 
              className={selectedLink === 'faq' ? 'selected' : ''} 
              onClick={() => handleLinkClick('preguntasFrecuentes')}>Preguntas Frecuentes</Link>

      </nav>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <a href="https://wa.me/5491135206645?text=¡Hola! Quisiera hacerte una pregunta." className='btn'>
        <button>Contacto</button>
      </a>
    </header>
  );
};

export default Navbar;
