import CartWidget from "../CartWidget/CartWidget";

function NavBar (props) {
    return (
        <nav>
            <ul>
                <li><a href="#">Shampoo</a></li>
                <li><a href="#">Acondicionador</a></li>
                <li><a href="#">Exfoliante</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar;