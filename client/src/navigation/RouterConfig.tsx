import Home from 'pages/home';
import MainLayout from 'pages/layout/MainLayout';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, SEARCH_ROUTE, BASE_ROUTE } from './pathConstant';

// type Props = {
//   Component: React.FC;
// };

function RouterConfig() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={BASE_ROUTE} element={<MainLayout/>} />
            <Route path={HOME_ROUTE} element={<Home message="Steak" />} />
            <Route path={SEARCH_ROUTE} element={<Home message="Pizza" />}>
              {/* <Route path=":id" element={<Home message="Pizza" />} /> */}
            </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default RouterConfig;
