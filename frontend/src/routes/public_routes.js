import React from "react";
import { createBrowserRouter, } from "react-router-dom";
import Home from "../pages/Home/home";
import Signup from "../pages/Auth/signup";
import Login from "../pages/Auth/login";
import CandidateProfile from "../pages/Candidate/profile";

// const Home = React.lazy(() => import("../pages/Home/home"));
// const Signup = React.lazy(() => import("../pages/Auth/signup"));
// const Login = React.lazy(() => import("../pages/Auth/login"));

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            
        ],
    },
    {path: '/signup',element: <Signup />},
    {path: '/login',element: <Login />},
    {path: '/candidateprofile',element: <CandidateProfile />}
]);