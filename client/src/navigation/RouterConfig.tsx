import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Health from '../pages/health';
import Layout from '../layout';
import { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE, BASE_ROUTE, ABOUT_ROUTE, ERROR_ROUTE, HEALTH_ROUTE } from './pathConstant';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '@/pages/errors/ErrorComponent';
import Loading from '@/pages/errors/Loading';
import ErrorBoundedComponent from './ErrorBoundedComponent';

const Search = React.lazy(() => import('pages/search'));

const errorWrap = (endPoint: React.ReactNode) =>
  <ErrorBoundedComponent component={endPoint} />

const asyncWrap = (endPoint: React.ReactNode) =>
  <Suspense fallback={<Loading />}>
    {endPoint}
  </Suspense>

const RouterConfig: React.FC = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path={BASE_ROUTE} element={<Layout />}>
            <Route index element={errorWrap(<Home />)} />
            <Route path={SEARCH_ROUTE} element={asyncWrap(<Search />)} />
            <Route path={ABOUT_ROUTE} element={errorWrap(<About />)} />
            <Route path={HEALTH_ROUTE} element={errorWrap(<Health />)} />
            <Route
              path="*"
              element={<ErrorComponent message={"404 File not found! (on this site)"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
  )
};

export default RouterConfig;
