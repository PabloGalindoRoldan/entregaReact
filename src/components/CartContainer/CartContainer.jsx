import Button from "../Button/Button";
import "./cartContainer.css"
import { createOrder_WithStockControl } from "../../services/firebase";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { useState } from "react";
import { Link } from "react-router-dom";


function CartContainer() {
    const { cart, clear, removeItem, getTotal } = useContext(cartContext);
    const [orderId, setOrderId] = useState();

    function handleCheckout(evt, userData) {
        evt.preventDefault();
        const items = cart.map(item => ({ id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre, count: item.count }))
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
            <div className="mensajeFinal">
                <h1>Gracias por tu compra</h1>
                <p>El id de tu compra es:     <span>{orderId}</span></p>
                <Link to="/"><Button>Volver al inicio</Button></Link>
            </div>
        );

    if (cart.length !== 0) {
        return (
            <div className ="carritoBody">
                <h1 className="carritoTitulo">Carrito</h1>
                {cart.map((item) => (
                    <div key={item.id} className="carritoContainer">
                        <div>
                            <img height={100} src={item.img} alt={item.nombre}></img>
                        </div>
                        <div>
                            <h3>{item.nombre}</h3>
                        </div>
                        <div> <h4>Cantidad: {item.count}</h4></div>
                        <div><h4>Precio: ${item.precio}</h4></div>
                        <Button onClick={() => removeItem(item.id)}>Remover</Button>
                    </div>
                ))}

                <div className="carritoTotal"> {getTotal() ? <h2>Total: $ {getTotal()}</h2> : ""}</div>
                <div>
                    <FormCheckout onCheckout={handleCheckout} />
                    <Button onClick={clear}>Vaciar carrito</Button>
                </div>
            </div>
        )
    } else { return (<h2 className="carritoTitulo">Carrito Vacio</h2>) }

} export default CartContainer