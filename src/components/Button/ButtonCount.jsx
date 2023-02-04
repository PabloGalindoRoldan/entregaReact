import "./button.css"

function ButtonCount (props) {
    return (
        <button onClick={props.onClick} className="btnCount">{props.children}</button>
    )
}

export default ButtonCount;