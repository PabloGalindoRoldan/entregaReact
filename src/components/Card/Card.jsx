import Button from "../Button/Button"

function Card(props){
    return(
        <>
        <div>
            <img src={props.img} alt={props.title}/>
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
            <h3>{props.detail}</h3>
            <Button color="" padding="" text="Acceder"/>
        </div>
        </>
    )
}

export default Card;