import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './layout.scss';

const Layout: React.FC = () => (
  <>
    <Header />
    <main className='layoutMain'>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
