import { useContext, useState} from "react";
import { DogContext } from "../context/DogContext";
import { useNavigate } from "react-router-dom"
import { PiUserCircleLight } from "react-icons/pi";

const Formulario=()=>{

    const { setNomUser,setActiveUser } = useContext(DogContext);
    const navigate=useNavigate()

    const estadoInicial = {nombre: ""}
    const [datosFormulario, setDatosFormulario ] = useState (estadoInicial)
    const [error, setError ] = useState (estadoInicial)

    const handleSubmit=(e)=>{

        e.preventDefault()
        let errores = {...estadoInicial}
        Object.keys(datosFormulario).map(key=> {
            if(datosFormulario[key].trim()==""){
                errores = {
                    ...errores,
                    [key]: `Rellene el campo ${key}`}
            }
            else
            {
                setActiveUser(true)
                setNomUser(datosFormulario.nombre)
                navigate("/")
            }
        })
        setError({...errores})

        //navigate(`/saludo/${saludo}`)

    }

    const handleChange=(e)=>{
      
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="container-form">
            
                <form  onSubmit={handleSubmit}>
                    <div className="container-icon">
                        <PiUserCircleLight className="icon-login" />
                    </div>
                    <h3>Usuario</h3>
                    <input type="text" onChange={handleChange}  name="nombre" value={datosFormulario.nombre} />
                    {error.nombre && <h4>{error.nombre}</h4>}
                    <button type="submit" className="button-form">Iniciar sesion</button>
                </form>
            
        </div>


    )


}

export default Formulario;