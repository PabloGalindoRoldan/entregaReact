import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button"


function ItemDetail(props){

    return(
        <div className="cardDiv">
            <img src={props.img} alt={props.nombre}/>
            <h3 className="cardText">{props.nombre}</h3>
            <h3 className="cardText">Tipo: {props.tipo}</h3>
            <h3 className="cardText">{props.detalle}</h3>
            <h3 className="cardText">$ {props.precio}</h3>
            <h3 className="cardText">Stock: {props.cantidad}</h3>

            {props.isInCart ? (
                <Link to="/cart"><Button>Ir al Carrito</Button></Link>
            ) : (
            <ItemCount onAddToCart={props.onAddToCart} stock={props.cantidad}/> )}
        </div>
    )
}

export default ItemDetail;