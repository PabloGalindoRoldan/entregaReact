import React from "react";
import "./itemListContainer.css"
import Item from "../Item/Item"
import { useParams } from "react-router-dom";
import { getCategory, obtenerProductos } from "../../services/firebase";
import Loader from "../Loader/Loader";


function ItemListContainer() {
    const [arrayProducts, setArrayProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState (true);

    let {categoryid} = useParams();

    React.useEffect(() => { 
        if (!categoryid){
        obtenerProductos()
        .then((response) => { setArrayProducts(response) }) 
        .catch(error => alert (error))
        .finally(() => setIsLoading(false));
        } else {
            getCategory(categoryid)
            .then((response => { setArrayProducts(response) }))
            .catch(error => alert (error))
            .finally(() => setIsLoading(false));
        }
    }, [categoryid])

    if (isLoading) {
        return <Loader/>
    } else {
        return (
            arrayProducts.map((itemIterado) => {
                return (<Item key={itemIterado.id} item={itemIterado}/>)
            })
        )
    }
}

export default ItemListContainer;