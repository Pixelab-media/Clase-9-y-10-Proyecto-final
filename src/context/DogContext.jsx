import { createContext,useState } from "react";

export const  DogContext = createContext()


const DogProvider=({children})=>{

    const [favoritos, setFavoritos] = useState([]);
    const [nomUser, setNomUser] = useState("");
    const [activeUser,setActiveUser]=useState(false);
    //active user

    const manejarPerroFavorito = (dogId) => {
        
        if (favoritos.includes(dogId)) {
            // Quitar de favoritos
            setFavoritos(favoritos.filter((id) => id !== dogId));

        } else {
            // Agregar a favoritos
            setFavoritos([...favoritos, dogId]);
            console.log(favoritos)
        }
        
    };


    return(
        <DogContext.Provider value={{favoritos,manejarPerroFavorito,nomUser,setNomUser,activeUser,setActiveUser}}>

            {children}
        </DogContext.Provider>

        
    )


}
export default DogProvider;