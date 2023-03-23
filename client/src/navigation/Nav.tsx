import { NavLink } from "react-router-dom";
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE } from './pathConstant';

const Nav = () =>
    <>
        <nav>
            <ul>
                <li><NavLink to={BASE_ROUTE}>Home</NavLink></li>
                <li><NavLink to={BASE_ROUTE+SEARCH_ROUTE}>Search</NavLink></li>
                <li><NavLink to={BASE_ROUTE+ABOUT_ROUTE}>About</NavLink></li>
            </ul>
        </nav>
    </>

export default Nav;