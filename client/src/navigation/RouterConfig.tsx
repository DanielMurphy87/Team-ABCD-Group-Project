import React from 'react';
import Home from 'pages/home';
import Layout from '@/layout';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE } from './pathConstant';

const Search = React.lazy(() => import('pages/search'));
const About=React.lazy(()=>import('pages/about'));
// type Props = {
//   Component: React.FC;
// };

function RouterConfig() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={BASE_ROUTE} element={<Layout />}>
            <Route path={HOME_ROUTE} element={<Home message="Hello" />} />
            <Route path={SEARCH_ROUTE} element={<Search />} />
            <Route path={ABOUT_ROUTE} element={<About />} />
            
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default RouterConfig;
