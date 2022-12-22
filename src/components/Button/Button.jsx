import "./button.css";

function Button (props) {

    const styleButton = {
        backgroundColor: props.color,
        padding: props.padding
    }


    return (
        <button style={styleButton} className="btn">{props.text}</button>
    )
}

export default Button;