import facebook from "../img/fab.webp"
import instagram from "../img/ins.webp"
import tiktok from "../img/tiktok.webp"

const Footer = () => {

    
    return(
        <footer >
            <div>
                <h3>ALUMNOS</h3>
                <div className="alumnos">
                    <h4>Nombre: Rodrigo Villarroel</h4>
                    <h4>Linkedin: www.linkedin.com/rodrigo-villarroel</h4>
                    <h4>Nombre: Roberto Fernandez</h4>
                    <h4>Linkedin: www.linkedin.com/roberto-fernandez</h4>
                </div>
            </div>
            <div>
                <h3>CONTACTO</h3>
                <div className="contactos">
                    <h4>WhatsApp: +56 9 5558 8898</h4>
                    <h4>Correo: rvillarroel@ccc.cl</h4>
                    <h4>WhatsApp: +56 9 6685 8898</h4>
                    <h4>Correo: rfernandez@ccc.cl</h4>
                </div>
            </div>
            <div>
                <h3>REDES SOCIALES</h3>
                <div className="redes-sociales">
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={tiktok}/>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer