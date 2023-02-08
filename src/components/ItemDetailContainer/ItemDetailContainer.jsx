import React from "react";
import { useParams } from "react-router-dom";
import { productDetail } from "../../services/firebase";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";



function ItemDetailContainer() {

    const context = React.useContext(cartContext);
    const [arrayProducts, setArrayProducts] = React.useState([]);
    const [isInCart, setIsInCart] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState (true);
    let params = useParams();

    function handleOnAddToCart (count) { 
        context.addToCart({...arrayProducts, count})
        setIsInCart(true);
    } 

    React.useEffect(() => {
        productDetail(params.itemid)
        .then((response) => { setArrayProducts(response) })
        .catch(error => alert(error))
        .finally(() => setIsLoading(false));
    }, [params.itemid])

    function checkStock(){
        let itemInCart = context.cart.find((item) => item.id === arrayProducts.id)

        let update = arrayProducts.cantidad;
        
        if (itemInCart !== undefined) {
            update = arrayProducts.cantidad - itemInCart.count
        }

        return update
    }

    if (isLoading) {
        return <Loader/>
    } else {
    return (
        <ItemDetail onAddToCart = {handleOnAddToCart} id={arrayProducts.id} nombre={arrayProducts.nombre} precio={arrayProducts.precio} tipo={arrayProducts.tipo} cantidad={checkStock()} detalle={arrayProducts.detalle} img={arrayProducts.img} isInCart={isInCart}/>
    )
}
}

export default ItemDetailContainer;