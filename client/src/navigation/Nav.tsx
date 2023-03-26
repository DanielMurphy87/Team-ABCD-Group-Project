import { NavLink } from "react-router-dom";
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE, HEALTH_ROUTE } from './pathConstant';
import './nav.scss';

interface NavProps {
    currentURL: string,
    paths: Array<string>,
}


const Nav: React.FC<NavProps> = ({ currentURL, paths }) => {

    const links: Array<React.ReactNode> = paths.map((path) => {
        const routeName = (( path==="home" ) ? "" : 
                    BASE_ROUTE+eval(path.toLocaleUpperCase()+"_ROUTE"));
        const displayName = path[0].toLocaleUpperCase()+path.substring(1);
        return (
           <li><NavLink to={routeName}>{displayName}</NavLink></li>
        )});

return(
    <>
        <nav>
            <ul className="NavUlFlex">
                {...links}
                <li><NavLink to={BASE_ROUTE}>Home</NavLink></li>
                <li><NavLink to={BASE_ROUTE+SEARCH_ROUTE}>Search</NavLink></li>
                <li><NavLink to={BASE_ROUTE+ABOUT_ROUTE}>About</NavLink></li>
                <li><NavLink to={BASE_ROUTE+HEALTH_ROUTE}>Health</NavLink></li>
            </ul>
        </nav>
    </>
)
}
export default Nav;