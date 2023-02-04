import Button from "../Button/Button";
import { createOrder } from "../../services/firebase";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";


function CartContainer(){
    const {cart, removeItem, getTotal} = useContext(cartContext);

    function handleCheckout(evt){
        evt.preventDefault();
        const items = cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre}))
        const order = {
            comprador: {
                name: "Comprador",
                Email: "Comprador@gmail.com",
                direccion: "ABC 123 SAO"
            },
        items: items, 
        total: getTotal(),
        date: new Date()
        }
        createOrder(order).then(id => alert(`compraste X items, tu ID es: ${id}`)) //HACER UN SWEET ALERT
    }


    return(
        <>
            <h1>Carrito</h1>
            <div>Miniatura</div>
            <div>Titulo</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Remover</div>
            <div>Total</div>

            <div>
                <Button onClick = {handleCheckout}>Finalizar Compra</Button>
            </div>
        </>

    )

} export default CartContainer