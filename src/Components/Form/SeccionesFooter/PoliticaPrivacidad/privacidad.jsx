import React from 'react';
import './privacidad.scss'; // Asegúrate de tener este archivo para los estilos

const Privacidad = () => {
    return (
        <div className="aviso-legal-container">
            <h1 className="titulo">POLÍTICA DE PRIVACIDAD</h1>
            <p className="ley-texto">
                Fecha de última actualización: 30/09/2024
            </p>

            <div className="uso-web">
                <h2 className="subtitulo">¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO?</h2>
                <span className='lineaSpan'></span>

                <ul className="lista-circulos">
                    <li>  ACADEMICA EXPRESS., en adelante LA EMPRESA</li>
                    <li>
                        CUIT: 24-33203898-9
                    </li>
                    <li>
                        Correo electrónico. info@academicaexpress.info
                    </li>
                </ul>
            </div>

            <div className="politica-enlaces">
                <h2 className="subtitulo">¿CON QUÉ FINALIDAD TRATAMOS LOS DATOS PERSONALES?</h2>
                <span className='lineaSpan'></span>
                <p className="texto">
                    En WWW.ACADEMICAEXPRESS.INFO se tratan los datos personales con las siguientes finalidades:
                </p>

                <ul className="lista-circulos">           
                    <li>
                     <b>Contacto</b>: responder a las solicitudes de información recibidas sobre los productos y servicios que se ofrecen, así como dar respuesta a cualquier otro tipo de pregunta que envíen los usuarios
                    </li>
                    <li>
                    <b>Formulario de presupuestos</b>: tratamiento de los datos personales con la finalidad de llevar a cabo las tareas de presupuestos y llevar a cabo las tarea de venta de servicios.
                    </li>
                </ul>
                
            </div>

         
            <div className="politica-enlaces">
                <h2 className="subtitulo">¿DURANTE CUÁNTO TRATAMOS LOS DATOS PERSONALES? </h2>
                <span className='lineaSpan'></span>
                <p className="texto">
                En WWW.ACADEMICAEXPRESS.INFO se tratan los datos personales durante los siguientes plazos:
                </p>

                <ul className="lista-circulos">           
                    <li>
                     <b>Contacto</b>: el plazo de conservación de los datos será mientras el usuario no manifieste su derecho de supresión
                    </li>
                    <li>
                    <b>Formulario de presupuestos</b>: el plazo de conservación de los datos será mientras el usuario no manifieste su derecho de supresión
                    </li>
                </ul>
                
            </div>

            <div className="politica-enlaces">
                <h2 className="subtitulo">¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE LOS DATOS?</h2>
                <span className='lineaSpan'></span>
                <p className="texto">
                Al acceder a nuestra web y rellenar los formularios o enviarnos datos a través de los medios de contacto electrónicos indicados, aceptas esta Política de Privacidad. Es por ello, que nos basamos en el consentimiento del usuario para el tratamiento de sus datos. Adicionalmente, te informamos que sólo usaremos la información de carácter personal en virtud de esta Política de Privacidad y, con carácter general, solicitaremos tu consentimiento para usos con fines distintos de aquéllos para los cuales los otorgaste inicialmente. Finalmente, te informamos que podés retirar el consentimiento en cualquier momento, solo tendrás que ponerte en contacto con nosotros a través de los medios indicados en esta política de privacidad.
                </p>
            </div>

            <div className="politica-enlaces">
                <h2 className="subtitulo">¿CON QUIÉN COMPARTIMOS LOS DATOS PERSONALES?</h2>
                <span className='lineaSpan'></span>
                <p className="texto">
                Los datos personales recabados no serán en ningún caso cedidos a terceros ni hechos públicos, salvo en los supuestos en que lo consienta, participe voluntariamente o por obligaciones legales expresas.
                </p>
            </div>

            <div className="politica-enlaces">
                <h2 className="subtitulo">¿QUÉ DERECHOS PUEDES EJERCER?</h2>
                <span className='lineaSpan'></span>
                <p className="texto">
                El interesado podrá ejercitar sus derechos sobre protección de datos (acceso, rectificación, oposición, supresión, decisiones automatizadas, limitación del tratamiento, portabilidad) por correo electrónico en info@tesisymasters.com.ar. Deberá aportarse documentación que acredite la identidad del solicitante (copia del anverso del Documento Nacional de Identidad, o equivalente). El plazo de respuesta máximo será de 30 días desde su recepción, pudiendo prorrogarse como máximo por un plazo de 2 meses siempre que sea necesario.
                </p>
            </div>

        </div >
    );
};

export default Privacidad;
