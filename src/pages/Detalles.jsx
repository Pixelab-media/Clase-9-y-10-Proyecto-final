import { useEffect,useState,useContext } from "react";
import Card from "../components/Card";
import { useParams,Link } from "react-router-dom";
import { DogContext } from "../context/DogContext";
import logoperro from "../img/logoperro.png"

const Detalles=()=>{

    const {raza}=useParams()
    const nameRaza=raza.replace(" ","%")
    const [dog,setDog]=useState([])
    const {favoritos, manejarPerroFavorito } = useContext(DogContext);
    const esFavorito = favoritos.includes(dog.id);
    


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
    

    return(
        <div className="container-dogs-twenty">
            <h1>detalles {raza}</h1>
            {/* { dog.map ( d => */}

                <div>
                    
                    <img src={ dog.reference_image_id === "HkC31gcNm" ? logoperro :
                `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt="" className="img-card"/>
            
                    
                    <div>
                        <button onClick={() => manejarPerroFavorito(dog.id)}>
                            ❤️ {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                        </button>
                        <h3>Raza: {dog.name}</h3>
                        <h3>Origen: {dog.origin}</h3>
                        <h3>Vida util: {dog.life_span}</h3>
                        <h3>Temperamento: {dog.temperament}</h3>
                        <Link to={"/perros"}>
                        <button>Ver mas perros</button>
                        </Link>
                    </div>
                </div>

            {/* )}   */}
        </div>


    )


}

export default Detalles;