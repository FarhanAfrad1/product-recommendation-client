import React from 'react';
import {
    createBrowserRouter,
} from "react-router"
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: ([
            {
                index: true,
                path: '/',
                element: <Login></Login>
            }
        ])
    },
]);

export default Router;