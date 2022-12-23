import "./card.css"
import Button from "../Button/Button"

function Card(props){
    return(
        <>
        <div className="cardDiv">
            <img src={props.img} alt={props.title}/>
            <h3 className="cardText">{props.title}</h3>
            <h3 className="cardText">{props.price}</h3>
            <h3 className="cardText">{props.detail}</h3>
            <Button color="" padding="" text="Acceder"/>
        </div>
        </>
    )
}

export default Card;