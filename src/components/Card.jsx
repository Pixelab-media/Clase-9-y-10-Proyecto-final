import { useContext, useState } from "react";
import { DogContext } from "../context/DogContext";
import { useNavigate } from "react-router-dom";
import logoperro from "../img/logoperro.png"
/*Card.jsx que tendrá, raza del perro, foto, corazón para favorito, origen y vida útil*/
const Card=(props)=>{

   // console.log(props.perro);

    const { favoritos, manejarPerroFavorito } = useContext(DogContext);
  
    const esFavorito = favoritos.includes(props.perro.id);
    const navigate=useNavigate();

    

    const handleClick = (raza) => {
        
        //console.log(raza);
        navigate(`/detalles/${raza}`)
      };

    return(
        
        <div>
            
            {/* props.img === HkC31gcNm ? "ponemos una imagen" : url normal */}
            <img src={ props.img === "HkC31gcNm" ? logoperro :
                `https://cdn2.thedogapi.com/images/${props.img}.jpg`} alt="" className="img-card"/>
            <div>
            <button onClick={() => manejarPerroFavorito(props.perro.id)}>
                ❤️ {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
            <h3>Raza: {props.raza}</h3>
            <h3>Origen: {props.origen}</h3>
            <h3>Vida util: {props.vidaUtil}</h3>
            <button onClick={() => handleClick(props.raza)}>Ver detalle</button>
            </div>
            
            
            
        </div>

    )

}
export default Card;
