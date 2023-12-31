/*Navbar.jsx Deberá contar con los link para ir a Home (puede ser un logo), formulario, a Perros y a favoritos. 
Si la persona se registra, deja de decir formulario y pasa a decir su nombre*/
import { NavLink } from "react-router-dom"
import logo from "../img/logoperro.png"
import { useState,useContext } from "react";
import { DogContext } from "../context/DogContext";

const Navbar=()=>{

    const { nomUser,activeUser } = useContext(DogContext);
    const claseActiva = ({ isActive }) => (isActive ? "nav-item-activa" : "nav-item-desactiva")

    return(
        
        <nav>
            <img src={logo}/>
            <NavLink className={claseActiva}  to="/"> <h2>Home</h2></NavLink>
            <NavLink className={claseActiva}  to="/formulario"> {activeUser ?  <h2>{nomUser}</h2> : <h2>Formulario</h2>}</NavLink>
            <NavLink className={claseActiva}  to="/perros"><h2> Perros</h2></NavLink>
            <NavLink className={claseActiva}  to="/favoritos"><h2> Favoritos</h2></NavLink>
        </nav>


    )

}
export default Navbar;