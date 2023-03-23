import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

type Props = {
  Component: React.FC;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
  isAuthenticated: boolean;
  // eslint-disable-next-line react/require-default-props
  rest?: unknown;
};

function PrivateRoute({
  Component,
  location,
  isAuthenticated,
  ...rest
}: Props) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" state={{ from: location.pathname }} />
        )
      }
    />
  );
}

export default PrivateRoute;
