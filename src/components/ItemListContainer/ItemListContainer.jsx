import React from "react";
import "./itemListContainer.css"
import Item from "../Item/Item"
import mockService, { mockServiceCategory } from "../../services/mockService";
import { useParams } from "react-router-dom";


function ItemListContainer() {

    const [arrayProducts, setArrayProducts] = React.useState([]);

    let {categoryid} = useParams();

    React.useEffect(() => { 
        if (!categoryid){
        mockService()
        .then((response) => { setArrayProducts(response) }) 
        .catch(error => alert (error))
        } else {
            mockServiceCategory(categoryid)
            .then((response => { setArrayProducts(response) }))
            .catch(error => alert (error))
        }
        return(()=>console.log("Desmontamos ILC"))
    }, [categoryid])

    return (
        arrayProducts.map((itemIterado) => {
            return (<Item key={itemIterado.id} item={itemIterado} />)
        })
    )
}

export default ItemListContainer;