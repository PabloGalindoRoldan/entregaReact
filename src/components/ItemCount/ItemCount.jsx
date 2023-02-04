import React from 'react';
import Button from "../Button/Button"
import ButtonCount from '../Button/ButtonCount';
import "./itemCount.css"

export default function ItemCount(props) {

    const [count, setCount] = React.useState(1);
    const stock = props.stock;

    function handleClickAdd(){
        if (count < stock) {setCount(count + 1)}
    };

    function handleClickMinus(){
        if(count > 1) {setCount(count - 1)}
    }

    return (
        <>
        <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", padding:"5px", flexWrap: "wrap"}}>
        <ButtonCount disabled={count === 1 } onClick={handleClickMinus}>-</ButtonCount>
        <p>{count}</p>
        <ButtonCount disabled={count === stock} onClick={handleClickAdd}>+</ButtonCount>
        <Button onClick={()=>props.onAddToCart(count)}>Agregar al Carrito</Button>
        </div>
    </>
    )
}