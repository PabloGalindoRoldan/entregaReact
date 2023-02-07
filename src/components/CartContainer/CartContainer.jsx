import Button from "../Button/Button";
import { createOrder_WithStockControl } from "../../services/firebase";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { useState } from "react";


function CartContainer() {
    const { cart, clear, removeItem, getTotal } = useContext(cartContext);
    const [orderId, setOrderId] = useState();

    function handleCheckout(evt, userData) {
        evt.preventDefault();
        const items = cart.map(item => ({ id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre }))
        const order = {
            comprador: userData,
            items: items,
            total: getTotal(),
            date: new Date()
        }

        async function sendOrder() {
            try {
                let id = await createOrder_WithStockControl(order);
                setOrderId(id);
            } catch (error) {
                alert("Ocurrio un error")
            }
        }
        sendOrder()
    }

    if (orderId)
        return (
            <div>
                <h1>Gracias por tu compra</h1>
                <p>El id de tu compra {orderId}</p>
            </div>
        );

    if (cart.length !== 0) {
        return (
            <>
                <h1>Carrito</h1>
                {cart.map((item) => (
                    <div key={item.id}>
                        <div>
                            <h2>Miniatura</h2>
                            <img height={50} src={item.img} alt={item.nombre}></img>
                        </div>
                        <div>
                            <h2>{item.nombre}</h2>
                        </div>
                        <div> Cantidad: {item.count}</div>
                        <div>Precio: ${item.precio}</div>
                        <Button onClick={() => removeItem(item.id)}>Remover</Button>
                    </div>
                ))}

                <div> {getTotal() ? <h2>Total: {getTotal()}</h2> : ""}</div>
                <div>
                    <FormCheckout onCheckout={handleCheckout} />
                    <Button onClick={clear}>Vaciar carrito</Button>
                </div>
            </>
        )
    } else { return (<h2>Carrito Vacio</h2>) }

} export default CartContainer