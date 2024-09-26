import React from 'react'
import './service.scss'; // Importa el archivo SASS

const servicios = () => {
  return (
    <div className='why-choose-us'>
        <h2>Nuestros Servicios</h2>
        <span className="underline"></span>
        <div className='main-rectangles'>
          <div className='rectangle'>
            <h3>Asesorías</h3>
            <p>
            Expertos en cada materia te ayudarán a organizar tus ideas y a presentar una investigación adaptada a lo que necesites.
            </p>
            <div className='logo-rectangle'>
              <a href="https://wa.me/5491135206645?text=¡Hola! Quisiera hacerte una pregunta." className='btn'><button>Más información</button></a>
            </div>
          </div>

          <div className='rectangle'>
            <h3 >Redacción</h3>
            <p>
             Elaboramos desde cero o retomamos tu proyecto.
            </p>

             <h5>Tesis</h5>
             <h5>Monografía</h5>
             <h5>Ensayo</h5>
             <h5>Articulo científico</h5>

            <div className='logo-rectangle'>
            <a href="#" className='btn'><button>Cotizar</button></a>
            </div>
          </div>

          <div className='rectangle'>
            <h3 >Corrección</h3>
            <p>
            Nuestro equipo se encargará de la corrección y detección del plagio de tu proyecto universitario.
            </p>
            <div className='logo-rectangle'>
            <a href="#" className='btn'><button>¡Quiero!</button></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default servicios