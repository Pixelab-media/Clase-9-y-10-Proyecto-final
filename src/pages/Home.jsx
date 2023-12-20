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
import { useState } from "react";



const Home=()=>{

    const [dogsfive,setDogsfive]=useState([])
    //const dogsfive=[];

    useEffect(() => {

        const reqApi=async () =>{
            const api= await fetch('https://api.thedogapi.com/v1/breeds');
            const allDogs = await api.json();

            setDogsfive(allDogs.slice(0,5));
            console.log(dogsfive);
            //setCharacters(characterApi.results);
            //console.log(allDogs);
            //setDogsfive()
            /*
            for (let i = 0; i < 5; i++) {
               // dogsfive.push(allDogs[i]);
               setDogsfive([allDogs[i]])
                
            }
            console.log(dogsfive)
            */
          };
    
          reqApi();
            
        
    }, []);

    return(
        <>
            <h1>hola bienvenido</h1>
            <section>
                { dogsfive.map ( d =>

                    <div key={d.id}>
                        <Card raza={d.name} origen={d.origin} img={d.reference_image_id} vidaUtil={d.life_span}/>
                    </div>

                )}  
            </section>
          

            

        </>



    )


}

export default Home;