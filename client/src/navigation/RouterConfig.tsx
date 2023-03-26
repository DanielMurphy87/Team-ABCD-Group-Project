import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Health from '../pages/health';
import Layout from '../layout';
import NotFound from '../pages/errors/NotFound';
import { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, Await } from 'react-router-dom';
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE, ERROR_ROUTE, HEALTH_ROUTE } from './pathConstant';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/pages/errors/Error';
import Loading from '@/pages/errors/Loading';

const Search = React.lazy(() => import('pages/search'));

const RouterConfig: React.FC = () => {

  const [errorMessage,setErrorMessage] = useState("Chill! No Errors are known to this System.");

  return (
    <ErrorBoundary fallback={<Error message="Something went Wrong!" />}>
        <BrowserRouter>
          <Routes>
            <Route path={BASE_ROUTE} element={<Layout />}>
              <Route index element={<Home message="Steak" />} />
                  <Route path={SEARCH_ROUTE} element={      
                  <Suspense fallback={<Loading />}>
                    <Search />
                  </Suspense>
                  } />
              <Route path={ABOUT_ROUTE} element={<About />} />
              <Route path={ERROR_ROUTE} element={<Error message={errorMessage} />} />
              <Route path={BASE_ROUTE+'loading'} element={<Loading />} />
              <Route path={HEALTH_ROUTE} element={<Health />} />
              <Route
                path="*"
                element={<Error message="404 File not found! (on this site)" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
    </ErrorBoundary>
  )
};

export default RouterConfig;
