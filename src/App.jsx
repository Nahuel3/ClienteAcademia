import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from "react-ga4";
import Navbar from './Components/Navbar/navbar';
import Publicidad from './Components/Navbar/Publicidad/publicidad';
import Form from './Components/Form/form';
import Servicios  from './Components/Servicios/servicios';
import Nosotros from "./Components/Sobre nosotros/nosotros"
import ProyectoUniversitario from "./Components/ProyectoUniversitario/universitario"
import AyudaSection from "./Components/Ayuda/ayudasection"
import PreguntasFrecuentes from './Components/Faq/preguntasFrecuentes';

ReactGA.initialize("G-LCGRZK102S");


export const App = () => {
  useEffect(() => {
    // Registra una visita a la página al cargar la aplicación
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
      <div>
       <BrowserRouter>
       <Navbar></Navbar> 
       <Publicidad />
        <Routes>

        <Route 
              path='/' 
              element={
                <>                
                  <Form />
                  <Servicios></Servicios>
                  <ProyectoUniversitario></ProyectoUniversitario>
                  <AyudaSection></AyudaSection>
                 
                </>
              }
            />
            <Route path="/nosotros" element={<Nosotros />} />

            <Route path='/' element={<Form />}></Route>

            <Route path='/faq' element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>
            
        </Routes>
       </BrowserRouter>

      </div> 
  )
}

export default App;
