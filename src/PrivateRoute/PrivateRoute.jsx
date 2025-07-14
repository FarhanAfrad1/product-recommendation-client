import React, { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';

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
    return <Navigate to='/auth/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;