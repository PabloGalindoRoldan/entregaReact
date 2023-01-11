import { Link } from "react-router-dom";

const NavItem = ({href, children}) => {
    return(
        <li className="navBarLi">
            <Link className="navBarItem" to={href}>{children}</Link>
        </li>
    )
}

export default NavItem