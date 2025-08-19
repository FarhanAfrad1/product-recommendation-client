import React, { Suspense } from 'react';
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
import QueryDetails from '../pages/Queries/QueryDetails';
import UpdateQuery from '../pages/Queries/UpdateQuery';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../ErrorPage/ErrorPage';
import BlogsSection from '../pages/Blog/BlogsSection';



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                index: true,
                path: '/',
                loader: () => fetch('https://product-recommendation-server-beige.vercel.app/queries'),
                element: <Home></Home>
            },
            {
                path: '/queries',
                element: <Queries></Queries>
            },
            {
                path: '/blog',
                element: <BlogsSection></BlogsSection>
            },
            {
                path: '/recomforme',
                element: <PrivateRoute>
                    <RecomForMe></RecomForMe>
                </PrivateRoute>
            },
            {
                path: '/myqueries',
                element: <PrivateRoute>

                    <MyQueries></MyQueries>
                </PrivateRoute>
            },
            {
                path: '/myrecom',
                element: <PrivateRoute>
                    <MyRecommendations></MyRecommendations>
                </PrivateRoute>
            },
            {
                path: '/addqueries',
                element: <PrivateRoute>

                    <AddQueries></AddQueries>
                </PrivateRoute>
            },
            {
                path: '/querydetails/:id',
                element: <QueryDetails></QueryDetails>
            },
            {
                path: '/updatequery/:id',
                element: <UpdateQuery></UpdateQuery>
            }

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