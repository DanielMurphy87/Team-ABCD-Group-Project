import Home from '../pages/home';
import Search from '../pages/search';
import About from '../pages/about';
import MainLayout from '../pages/layout/MainLayout';
import NotFound from '../pages/errors/NotFound';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE } from './pathConstant';

const RouterConfig: React.FC = () =>    
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home message="Steak" />} />
        <Route path='search' element={<Search />} />
        <Route path='about' element={<About />} /> 
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>


export default RouterConfig;
