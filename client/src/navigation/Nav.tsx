import { NavLink, useLocation } from "react-router-dom";
import { HOME_ROUTE, SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE, HEALTH_ROUTE } from './pathConstant';
import './nav.scss';

const paths: Array<string> = [HOME_ROUTE, SEARCH_ROUTE, ABOUT_ROUTE, HEALTH_ROUTE]

const upperCaseInitial = (word: string) => word[0].toLocaleUpperCase() + word.substring(1)


const Nav: React.FC = () => {

    const { pathname } = useLocation();

    const links: Array<React.ReactNode> = paths.reduce((linkList: Array<React.ReactNode>, path) => {
        const routeName = ((path === "home") ? "" : path);
        const displayName = upperCaseInitial(path);
        if (pathname.substring(1) !== routeName) {
            linkList.push(
                <>
                    <li>
                        <NavLink to={BASE_ROUTE + routeName}>{displayName}</NavLink>
                    </li>
                </>);
        }
        return linkList;
    }, []);

    return (
        <>
            <nav>
                <ul className="NavUlFlex">
                    {...links}
                </ul>
            </nav>
        </>
    )
}
export default Nav;