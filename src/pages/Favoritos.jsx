import { useContext, useState,useEffect } from "react";
import { DogContext } from "../context/DogContext";
import Card from "../components/Card";

const Favoritos=()=>{

    const [dogsfavorites,setDogsFavorites]=useState([])
    const { favoritos, manejarPerroFavorito } = useContext(DogContext);
    
    

    useEffect(() => {

        const reqDog=async () =>{
            const api= await fetch('https://api.thedogapi.com/v1/breeds');
            const allDogs = await api.json();

            
            const favoritesFilt =await allDogs.filter((dog) => favoritos.includes(dog.id));
            setDogsFavorites(favoritesFilt);
            
            
          };
    
          reqDog();
            
        
    }, [favoritos]);

    return(
        <div>
            {/* <h1>favoritos</h1> */}
            <div className="container-dogs">
                    { dogsfavorites.map ( d =>

                        <div className="card" key={d.id} >
                            <Card raza={d.name} origen={d.origin} img={d.reference_image_id} vidaUtil={d.life_span} perro={d}/>
                        </div>

                    )}  
            </div>
        
        </div>


    )


}

export default Favoritos;