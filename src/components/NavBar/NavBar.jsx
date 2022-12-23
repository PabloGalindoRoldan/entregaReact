import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget";


function NavBar (props) {
    return (
        <nav className="navBar">
            <div className="navBarLogo"><h1>LogoGoesHere</h1></div>
            <ul className="navBarUl">
                <li className="navBarLi"><a className="navBarItem" href="#">Shampoo</a></li>
                <li className="navBarLi"><a className="navBarItem" href="#">Acondicionador</a></li>
                <li className="navBarLi"><a className="navBarItem" href="#">Exfoliante</a></li>
                <li className="navBarLi"><a className="navBarItem" href="#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar;