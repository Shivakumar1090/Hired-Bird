import React from "react";
import { createBrowserRouter, } from "react-router-dom";
import Home from "../pages/Home/home";
import Signup from "../pages/Auth/signup";
import Login from "../pages/Auth/login";
import CandidateProfile from "../pages/Candidate/profile";
import Jobs from "../pages/Job/jobs";
import AddJob from "../pages/Company/addjob";
import Companyprofile from "../pages/Company/profile";
import Postedjobs from "../pages/Company/postedjobs";
import Jobapplications from "../pages/Company/jobapplications";

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
    {path: '/candidateprofile',element: <CandidateProfile />},
    {path: '/jobs',element: <Jobs />},
    {path: '/company/job/create',element: <AddJob />},
    {path: '/company/profile',element: <Companyprofile />},
    {path: '/company/jobslist',element: <Postedjobs />},
    {path: '/company/job/applications',element: <Jobapplications />},
]);