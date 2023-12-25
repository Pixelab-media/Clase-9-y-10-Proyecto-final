/*Home.jsx un cartel que dice inicia sesión y el botón para iniciar sesión(Formulario), 
cuando esta esté iniciada, que diga, bienvenido y el nombre de la persona.
Debajo de eso, deberán mostrarse 5 card de Perros.

**API DEL PERRO:** *https://thedogapi.com/*

[-] https://api.thedogapi.com/v1/breeds (trae todos los perros)

[-] https://api.thedogapi.com/v1/breeds/search?q={raza_perro} los filtra por razas, ejemplo https://api.thedogapi.com/v1/breeds/search?q=Affenpinscher

[-] para las imagenes: https://cdn2.thedogapi.com/images/{reference_image_id}.jpg ejemplo: https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg
*/
import { useEffect } from "react";
import Card from "../components/Card";
import { useState,useContext } from "react";
import { DogContext } from "../context/DogContext";
import { useNavigate,Link } from "react-router-dom";



const Home=()=>{

    const [dogsfive,setDogsfive]=useState([])
    const { nomUser,activeUser } = useContext(DogContext);
    const navigate=useNavigate()
    
    //const [Favoritos,setFavoritos]=useState([1,2,3])

    useEffect(() => {

        const reqApi=async () =>{
            const api= await fetch('https://api.thedogapi.com/v1/breeds');
            const allDogs = await api.json();

            setDogsfive(allDogs.slice(0,5));
           // console.log(dogsfive);
          };
    
          reqApi();
            
        
    }, []);

    const handleClick = () => {    
        navigate("/formulario")
    };

    return(
        <>
            {activeUser ? ( 
                    <div>
                        <label className="user-logged">
                            Bienvenido {nomUser} 
                        </label>
                    </div>
                ): (
                    <div>
                        <button className="button-sesion" onClick={handleClick}><h4>Iniciar Sesion</h4></button>
                    </div>
                )
            }
            
            <div className="container-dogs">
                { dogsfive.map ( d =>

                    <div className="card" key={d.id}  >
                        <Card raza={d.name} origen={d.origin} img={d.reference_image_id} vidaUtil={d.life_span} perro={d}/>
                    </div>

                )}  
            </div>
          

            

        </>



    )


}

export default Home;