import { createContext } from "react";
import { useState } from "react";


export const cartContext = createContext({ cart: []});

export function CartProvider(props) {
    const [cart, setCart] = useState([]);

    let newCart = JSON.parse(JSON.stringify(cart));

    function addToCart(item){
        let isInCart = cart.findIndex((elem)=>elem.id === item.id)
        if (isInCart !== -1) {
            if(newCart[isInCart].count + item.count > newCart[isInCart].cantidad){
                return alert("Se supera el stock")
            } else {
            newCart[isInCart].count += item.count 
            }
        } else {setCart([...cart, item])}
        
    }

    function removeItem(itemid){
        //remover el item del array con splice maybe
    }

    // function clear(){
    //     setCart ([])
    // }

    function getTotalItemsInCart(){
        let total = 0
        let newCart = cart.map((item)=>item)
        for (let elem of newCart){
            total += elem.count
        }
    return total
    }

    //function get total price in cart

    function getTotal(){
        return 1000
    }

    return (
        <cartContext.Provider value ={{cart, addToCart, getTotalItemsInCart, getTotal}}>
            {props.children}
        </cartContext.Provider>
    )
}

