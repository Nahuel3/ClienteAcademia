import React from 'react';
import './universitario.scss'; // Asegúrate de importar el archivo SCSS correspondiente

const Universitario = () => {
  return (
    <div className="container">
      <h1>¿Cómo hacemos tu proyecto universitario?</h1>
      <div className="images-container">
        <img src="https://tesisymasters.com.ar/wp-content/uploads/947a4c7a-3228-449f-8b9f-4f6de0080abf.webp" alt="Imagen secundaria" className='secondary-image' />
        <img src="Myimage/servicios.png" alt="Servicios" className='services-image' />
      </div>
    </div>
  );
};

export default Universitario;
