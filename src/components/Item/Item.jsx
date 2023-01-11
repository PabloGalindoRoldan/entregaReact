import "./Item.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom";


function Item(props){

    const {id, nombre, precio, tipo, cantidad, detalle, img} = props.item; 

    return(
        <>
        <div className="cardDiv">
            <img src={img} alt={nombre}/>
            <h3 className="cardText">ID: {id}</h3>
            <h3 className="cardText">{nombre}</h3>
            <h3 className="cardText">Tipo: {tipo}</h3>
            <h3 className="cardText">{detalle}</h3>
            <h3 className="cardText">$ {precio}</h3>
            <h3 className="cardText">Stock: {cantidad}</h3>
            <Link to={`/detalle/${id}`}> <Button color="black" padding="15px" text="Acceder"/></Link>
        </div>
        </>
    )
}

export default Item;