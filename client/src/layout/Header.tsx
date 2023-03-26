import Nav from '../navigation/Nav';
import './header.scss'

const Header: React.FC = () =>
<>
    <header className="header">
        <Nav currentURL={window.location.pathname}
            paths={["home","search","about","health"]}/>
    </header>
</>

export default Header;