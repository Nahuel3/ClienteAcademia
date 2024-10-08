import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React  from 'react';
import Navbar from './Components/Navbar/navbar';
import Publicidad from './Components/Navbar/Publicidad/publicidad';
import Form from './Components/Form/form';
import Servicios  from './Components/Servicios/servicios';
import Nosotros from "./Components/Sobre nosotros/nosotros"
import ProyectoUniversitario from "./Components/ProyectoUniversitario/universitario"
import AyudaSection from "./Components/Ayuda/ayudasection"
import PreguntasFrecuentes from './Components/Faq/preguntasFrecuentes';
import Footer from "./Components/Footer/footer"
import AvisoLegal from './Components/Form/SeccionesFooter/Avisolegal/avisoLegal';
import PoliticaPrivacidad from './Components/Form/SeccionesFooter/PoliticaPrivacidad/privacidad';
import CondicionesGenerales from './Components/Form/SeccionesFooter/CondicionesGenerales/condiciones';


export const App = () => {

  
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

            <Route path='/aviso-legal' element={<AvisoLegal></AvisoLegal>}></Route>

            <Route path='/politica-privacidad' element={<PoliticaPrivacidad></PoliticaPrivacidad>}></Route>

            <Route path='/condiciones-venta' element={<CondicionesGenerales></CondicionesGenerales>}></Route>
            
        </Routes>
       <Footer></Footer>
       </BrowserRouter>
      </div> 
  )
}

export default App;
