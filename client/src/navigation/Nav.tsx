import { NavLink, useLocation } from "react-router-dom";
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE, HEALTH_ROUTE } from './pathConstant';
import './nav.scss';

interface NavProps {
    currentURL: string,
    paths: Array<string>,
}

const Nav: React.FC<NavProps> = ({ currentURL, paths }) => {

    const { pathname } = useLocation();

    const links: Array<React.ReactNode> = paths.map((path) => {
        const routeName = (( path==="home" ) ? "" : path);
        const displayName = path[0].toLocaleUpperCase()+path.substring(1);
        const inactive = ((pathname.substring(1) === routeName) ? "inactive" : "");
        return (
           <li className={inactive}><NavLink to={BASE_ROUTE+routeName}>{displayName+'('+inactive+')'}</NavLink></li>
        )});

return(
    <>
        <nav>
            <ul className="NavUlFlex">
                {...links}
                {/*<li><NavLink to={BASE_ROUTE}>Home</NavLink></li>
                <li><NavLink to={BASE_ROUTE+SEARCH_ROUTE}>Search</NavLink></li>
                <li><NavLink to={BASE_ROUTE+ABOUT_ROUTE}>About</NavLink></li>
                <li><NavLink to={BASE_ROUTE+HEALTH_ROUTE}>Health</NavLink></li>*/}
            </ul>
        </nav>
    </>
)
}
export default Nav;