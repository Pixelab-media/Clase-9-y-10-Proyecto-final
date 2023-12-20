/*Navbar.jsx Deberá contar con los link para ir a Home (puede ser un logo), formulario, a Perros y a favoritos. 
Si la persona se registra, deja de decir formulario y pasa a decir su nombre*/
import { NavLink } from "react-router-dom"

const Navbar=()=>{


    return(

        <nav>
            <NavLink  to="/"> Home</NavLink>
            <NavLink  to="/formulario"> Formulario</NavLink>
            <NavLink  to="/perros"> Perros</NavLink>
            <NavLink  to="/favoritos"> Favoritos</NavLink>
        </nav>


    )

}
export default Navbar;