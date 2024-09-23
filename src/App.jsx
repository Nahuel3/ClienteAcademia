import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar/navbar';
import Publicidad from './Components/Navbar/Publicidad/publicidad';
import Form from './Components/Form/form';
import Servicios  from './Components/Servicios/servicios';


export const App = () => {
  return (
      <div>
       <BrowserRouter>
       <Navbar></Navbar> 
        <Routes>

        <Route 
              path='/' 
              element={
                <>
                  <Publicidad />
                  <Form />
                  <Servicios></Servicios>
                </>
              }
            />

            <Route path='/' element={<Form />}></Route>
            
        </Routes>
       </BrowserRouter>

      </div> 
  )
}

export default App;
