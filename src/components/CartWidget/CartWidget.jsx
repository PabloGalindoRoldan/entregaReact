import React from "react";
import { cartContext } from "../../storage/cartContext";


function CartWidget() {

    const contexto = React.useContext(cartContext)
    
    return(
        <>
            <span>🛒</span>
            <span>{contexto.getTotalItemsInCart()}</span>
        </>
    )
}

export default CartWidget;