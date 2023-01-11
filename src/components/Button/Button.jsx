import React from "react";
import "./button.css";


function Button (props) {

    const [colorState, setColorState] = React.useState("black")

    
    let styleButton = {
        backgroundColor: colorState,
        padding: props.padding
    }

    function handleClick(){
        setColorState ("green");
    }

    return (
        <button onClick={handleClick} style={styleButton} className="btn">{props.text}</button>
    )
}

export default Button;