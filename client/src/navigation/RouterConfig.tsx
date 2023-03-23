import React from 'react';
import Home from '../pages/home';/* 
import Search from '../pages/search'; */
import About from '../pages/about';
import Layout from '../layout';
import NotFound from '../pages/errors/NotFound';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE } from './pathConstant';

const Search = React.lazy(() => import('pages/search'));

const RouterConfig: React.FC = () =>
<Suspense fallback={<div>Loading...</div>}>  
  <BrowserRouter>
    <Routes>
      <Route path={BASE_ROUTE} element={<Layout />}>
        <Route index element={<Home message="Steak" />} />
          <Route path={SEARCH_ROUTE} element={<Search />} />
        <Route path={ABOUT_ROUTE} element={<About />} /> 
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>
</Suspense>


export default RouterConfig;
