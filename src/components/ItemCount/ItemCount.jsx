import React from 'react';

export default function ItemCount(props) {

    const [count, setCount] = React.useState(1);
    const stock = props.stock;

    function handleClickAdd(){
        if (count < stock) {setCount(count + 1)}
    };

    function handleClickMinus(){
        if(count > 1) {setCount(count - 1)}
    }

    function handleClickAlert(){
        return alert("Agregado")
    }

    return (
        <>
        <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", padding:"5px"}}>
            Agrega al Carrito
        <button disabled={count === 1 }onClick={handleClickMinus}>-</button>
        <p>{count}</p>
        <button disabled={count === stock} onClick={handleClickAdd}>+</button>
        <button onClick={handleClickAlert}>Agregar al Carrito</button>
        </div>
    </>
    )
}