import Formulario from "./components/Formulario"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import {Routes,Route } from "react-router-dom"
import Perros from "./pages/Perros"
import Favoritos from "./pages/Favoritos"
import Footer from "./pages/Footer"
import NotFound from "./pages/NotFound404"
import Detalles from "./pages/Detalles"


const App = () =>{

  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/perros' element={<Perros />}/>
        <Route path='/favoritos' element={<Favoritos />}/>
        <Route path="/detalles/:raza" element={<Detalles/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* <Route 
          path='/admin' 
          element={user ? <Administracion /> : <Navigate to='/login'/>} /> */}
        
      </Routes> 
      <Footer/>
    </>
  )
}

export default App