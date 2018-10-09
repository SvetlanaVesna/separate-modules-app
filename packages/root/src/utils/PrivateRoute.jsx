import React from 'react';
import pt from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Component {...props} isAdmin={rest.isAdmin} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        }
    />
);

PrivateRoute.propTypes = {
    component: pt.func.isRequired,
    isAuthenticated: pt.bool.isRequired
};

export default PrivateRoute;
