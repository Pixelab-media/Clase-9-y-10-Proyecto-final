import { useEffect,useState,useContext } from "react";
import Card from "../components/Card";
import { useParams,Link,useNavigate } from "react-router-dom";
import { DogContext } from "../context/DogContext";
import logoperro from "../img/logoperro.png"
import { FaChevronRight } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

const Detalles=()=>{

    const {raza}=useParams()
    const nameRaza=raza.replace(" ","%")
    const [dog,setDog]=useState([])
    const {favoritos, manejarPerroFavorito } = useContext(DogContext);
    const esFavorito = favoritos.includes(dog.id);
    const navigate=useNavigate();
    
    


    useEffect(() => {

        const reqApi=async () =>{
            const api= await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${nameRaza}`);
            const detailDog = await api.json();
            //console.log(detailDog)
            setDog(detailDog[0])

            //console.log(detailDog)
            //setdogsTwenty(allDogs.slice(0,20));
           // console.log(dogsfive);
          };
    
          reqApi();
            
        
    }, []);
    //console.log(dog.name)

    const handleClick = () => {
        navigate("/perros")
      };
    

    return(
        <div className="container-dogs">
            
                <div className="card-details">
                    
                    <img src={ dog.reference_image_id === "HkC31gcNm" ? logoperro :
                    `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt="" className="img-card-details"/>
            
                    
                    <div className="card-info">
                        <h3>Raza: {dog.name}</h3>
                        <h3>Origen: {dog.origin}</h3>
                        <h3>Vida util: {dog.life_span}</h3>
                        <h3>Temperamento: {dog.temperament}</h3>
                        <div className="container-buttons-card">
                            <button className="button-detail" onClick={() => handleClick()}>
                                <h3><FaChevronRight />Ver mas perros</h3>
                                
                            </button>
                            <button className="button-favorite"  onClick={() => manejarPerroFavorito(dog.id)}>
                                    {esFavorito ? (<h1><FcLike /></h1> ): (<h1><AiOutlineHeart /></h1>)}
                            </button>
                        </div>
                    </div>
                </div>

        </div>


    )


}

export default Detalles;