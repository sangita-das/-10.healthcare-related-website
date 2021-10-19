import React, { useContext, createContext, useState } from "react";
import { Spinner } from 'react-bootstrap';
import {
  Redirect, Route, BrowserRouter as Router,
  Switch,
  Link,
  useHistory,
  useLocation,
} from 'react-router';
import useAuth from './../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let history = useHistory();
  let location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="info" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) => user.email ? (children) : (<Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      ></Redirect>
      )
      }
    >

    </Route>
  );
};

export default PrivateRoute;