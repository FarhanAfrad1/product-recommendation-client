import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import AuthContext from '../Auth/AuthContext';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    console.log(loading, user)
    if (loading) {
        return <div className='h-screen w-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;