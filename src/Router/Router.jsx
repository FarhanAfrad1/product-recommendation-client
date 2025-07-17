import React from 'react';
import {
    createBrowserRouter,
} from "react-router"
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import MyQueries from '../pages/My Queries/MyQueries';
import MyRecommendations from '../pages/My recommendations/MyRecommendations';
import Queries from '../pages/Queries/Queries';
import RecomForMe from '../pages/RecomForMe/RecomForMe';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import AddQueries from '../pages/Queries/AddQueries';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: ([
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/queries',
                element: <Queries></Queries>
            },
            {
                path: '/recomforme',
                element: <RecomForMe></RecomForMe>
            },
            {
                path: '/myqueries',
                element: <MyQueries></MyQueries>
            },
            {
                path: '/myrecom',
                element: <MyRecommendations></MyRecommendations>
            },
            {
                path: '/addqueries',
                element: <AddQueries></AddQueries>
            },

        ])
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    }
]);

export default Router;