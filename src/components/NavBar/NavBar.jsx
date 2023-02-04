import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function NavBar () {

    const links = ["Serum Facial", "Toner Facial", "Crema Facial", "Crema Corporal", "Shampoo", "Acondicionador", "Exfoliante"]

    return (
        <nav className="navBar">
            <div className="navBarLogo">
                <Link to ="/"><h1>Vegania</h1></Link>
            </div>
            <ul className="navBarUl">
                {links.map((e) => (<NavItem href={`/category/${e}`}key={e}>{e}</NavItem>))}
                <NavItem href="/cart"><CartWidget/></NavItem>
            </ul>
        </nav>
    )
}

export default NavBar;