import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Health from '../pages/health';
import Layout from '../layout';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  SEARCH_ROUTE,
  BASE_ROUTE,
  ABOUT_ROUTE,
  HEALTH_ROUTE,
} from './pathConstant';
import ErrorComponent from '@/components/errors/ErrorComponent';
import Loading from '@/components/errors/Loading';
import ErrorBoundedComponent from './ErrorBoundedComponent';

const Search = React.lazy(() => import('pages/search'));
const SinglePageItem = React.lazy(() => import('pages/singlePageItem'));

const errorWrap = (endPoint: React.ReactNode) => (
  <ErrorBoundedComponent component={endPoint} />
);

const asyncWrap = (endPoint: React.ReactNode) => (
  <Suspense fallback={<Loading />}>{errorWrap(endPoint)}</Suspense>
);

const RouterConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_ROUTE} element={<Layout />}>
          <Route index element={errorWrap(<Home />)} />
          <Route path={SEARCH_ROUTE} element={asyncWrap(<Search />)} />
          <Route path={ABOUT_ROUTE} element={errorWrap(<About />)} />
          <Route path={HEALTH_ROUTE} element={errorWrap(<Health />)} />
          <Route path={SEARCH_ROUTE} element={<Search />} />
          <Route path={`${SEARCH_ROUTE}/:searchTerm`} element={<Search />} />
          <Route
            path={`${SEARCH_ROUTE}/:type/:idMeal`}
            element={<SinglePageItem />}
          />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={HEALTH_ROUTE} element={<Health />} />
          <Route
            path="*"
            element={
              <ErrorComponent message={'404 File not found! (on this site)'} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
