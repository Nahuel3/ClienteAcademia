import React from 'react'
import './nosotros.scss'; // Importa el archivo SASS

const nosotros = () => {
    return (
        <div className='quienes-somos'>
            <h2>Una parte de quiénes somos</h2>
            <span className="underline"></span>
            <div className='main-rectangles'>
                <div className='rectangle'>
                    <h3>¿Quiénes somos?</h3>
                    <p>
                        En Académica Express, tu éxito académico es nuestra misión. Contamos con
                        un equipo de más de 100 profesionales, con más de 10 años de experiencia en
                        la asesoría, corrección y redacción de todo tipo de proyectos académicos.
                        Sabemos que cada trabajo es único, por lo que nos dedicamos a ofrecerte un
                        servicio exclusivo y de alta calidad. Nuestro objetivo es garantizar que
                        alcances el éxito académico que mereces, comprometiéndonos a acompañarte
                        en cada paso del camino.

                    </p>
                </div>

                <div className='rectangle'>
                    <h3 >¿Quién te guiará en este proceso? </h3>
                    <p>
                        En Académica Express, sabemos que contar con una guía confiable y
                        experimentada es esencial para tu éxito académico. Por eso, te presentamos a
                        nuestros gestores, quienes te acompañarán en cada etapa de tu proyecto,
                        asegurándose de que recibas el apoyo que necesitas para alcanzar tus
                        objetivos.
                        Nos enorgullece contar con un equipo de gestores y profesionales
                        comprometidos, dedicados a proporcionarte el respaldo necesario para que
                        logres el éxito académico que mereces. En Académica Express, estamos aquí
                        para guiarte a lo largo de todo el proceso, garantizando que avances con
                        confianza y excelencia.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default nosotros