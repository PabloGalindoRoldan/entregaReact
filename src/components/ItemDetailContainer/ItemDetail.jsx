import ItemCount from "../ItemCount/ItemCount";


function ItemDetail(props){

    return(
        <>
        <div className="cardDiv">
            <img src={props.img} alt={props.nombre}/>
            <h3 className="cardText">ID: {props.id}</h3>
            <h3 className="cardText">{props.nombre}</h3>
            <h3 className="cardText">Tipo: {props.tipo}</h3>
            <h3 className="cardText">{props.detalle}</h3>
            <h3 className="cardText">$ {props.precio}</h3>
            <h3 className="cardText">Stock: {props.cantidad}</h3>
            <ItemCount stock={props.cantidad}/>
        </div>
        </>
    )
}

export default ItemDetail;