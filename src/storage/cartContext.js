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
                return alert("No hay Stock disponible")
            } else {
            newCart[isInCart].count += item.count 
            setCart(newCart)
            }
        } else {setCart([...cart, item])}
        
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id)
        setCart(filteredCart)
    }

    function clear(){
        setCart ([])
    }

    function getTotalItemsInCart(){
        return(
            cart.reduce((acc, cv)=> (acc + cv.count), 0)
            ) 
    }

    function getTotal(){
        return (cart.reduce((acc, currentValue) => (acc + currentValue.count * currentValue.precio), 0))
    }

    return (
        <cartContext.Provider value ={{cart, clear, removeItem, addToCart, getTotalItemsInCart, getTotal}}>
            {props.children}
        </cartContext.Provider>
    )
}

