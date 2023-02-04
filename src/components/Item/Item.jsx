import "./Item.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom";

function Item(props){

    const {id, nombre, precio, tipo, detalle, img} = props.item; 

    return(
        <>
        <div className="cardDiv">
            <Link to={`/detalle/${id}`} className="cardImgLink"><img src={img} alt={nombre}/></Link>
            <h3 className="cardText">{nombre}</h3>
            <h3 className="cardText">Tipo: {tipo}</h3>
            <h3 className="cardText">{detalle}</h3>
            <h3 className="cardText">$ {precio}</h3>
            <Link to={`/detalle/${id}`}> <Button color="black" padding="15px">Acceder</Button></Link>
        </div>
        </>
    )
}

export default Item;