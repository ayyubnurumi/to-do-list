import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const RouteGuard = ({ component: Component, ...rest }) => {

    function hasJWT() {
        let flag = false;

        //check user has JWT token
        localStorage.getItem("token") ? flag=true : flag=false
        
        return flag
    }

    return (
        <Routes>
            <Route {...rest}
                render={props => (
                    hasJWT() ?
                        <Component {...props} />
                        :
                        <Navigate to='/login' />
                )}
            />
        </Routes>
    );
};

export default RouteGuard;