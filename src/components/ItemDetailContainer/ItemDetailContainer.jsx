import React from "react";
import { useParams } from "react-router-dom";
import { mockServiceDetail } from "../../services/mockService";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {

    const [arrayProducts, setArrayProducts] = React.useState([]);
    
    let params = useParams();

    React.useEffect(() => {
        mockServiceDetail(params.itemid)
        .then((response) => { setArrayProducts(response) })
        .catch(error => alert(error))
    }, [])

    return (
        <ItemDetail id={arrayProducts.id} nombre={arrayProducts.nombre} precio={arrayProducts.precio} tipo={arrayProducts.tipo} cantidad={arrayProducts.cantidad} detalle={arrayProducts.detalle} img={arrayProducts.img}/>
    )
}

export default ItemDetailContainer;