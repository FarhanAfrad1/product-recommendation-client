import React from 'react';
import {
    createBrowserRouter,
} from "react-router"
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: ([
            {
                index: true,
                path: '/home',
                element: <Home></Home>
            }
        ])
    },
]);

export default Router;