import Formulario from "./components/Formulario"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import {Routes,Route } from "react-router-dom"
import Perros from "./pages/Perros"
import Favoritos from "./pages/Favoritos"

const App = () =>{

  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/perros' element={<Perros />}/>
        <Route path='/favoritos' element={<Favoritos />}/>
        {/* <Route 
          path='/admin' 
          element={user ? <Administracion /> : <Navigate to='/login'/>} /> */}
        
      </Routes> 
    </>
  )
}

export default App