import { useEffect,useState } from "react";
import Card from "../components/Card";

const Perros=()=>{

    const [dogsTwenty,setdogsTwenty]=useState([])

    useEffect(() => {

        const reqApi=async () =>{
            const api= await fetch('https://api.thedogapi.com/v1/breeds');
            const allDogs = await api.json();

            setdogsTwenty(allDogs.slice(0,20));
           // console.log(dogsfive);
          };
    
          reqApi();
            
        
    }, []);

    return(
        <div className="container-dogs-twenty">
        { dogsTwenty.map ( d =>

            <div className="card" key={d.id} >
                <Card raza={d.name} origen={d.origin} img={d.reference_image_id} vidaUtil={d.life_span} perro={d}/>
            </div>

        )}  
    </div>


    )


}

export default Perros;