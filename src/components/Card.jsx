/*Card.jsx que tendrá, raza del perro, foto, corazón para favorito, origen y vida útil*/
const Card=(props)=>{

    return(
        
        <div>
            
            <img src={`https://cdn2.thedogapi.com/images/${props.img}.jpg`} alt="" />
            <h3>raza: {props.raza}</h3>
            <button>Favorito</button>
            <h3>Origen: {props.origen}</h3>
            <h3>vida util: {props.vidaUtil}</h3>
        </div>

    )

}
export default Card;
