import React from "react";
import { createBrowserRouter, } from "react-router-dom";

// Pages
import Home from "../pages/Home/home";
import Signup from "../pages/Auth/signup";
import Login from "../pages/Auth/login";

// Candidate pages
import AboutCandidate from "../pages/Candidate/about";
import EducationOfCandidate from "../pages/Candidate/education";
import WorkExpCandidate from "../pages/Candidate/workexp";
import SkillsCandidate from "../pages/Candidate/skills";

//Jobs page
import Jobs from "../pages/Job/jobs";

// Company pages
import AddJob from "../pages/Company/addjob";
import Companyprofile from "../pages/Company/profile";
import Postedjobs from "../pages/Company/postedjobs";
import Jobapplications from "../pages/Company/jobapplications";

// Error page
import ErrorPage from "../components/Errorpage";

// Layouts
import CompanyLayout from "../layouts/company_layout";
import RootLayout from "../layouts/root_layout";
import CandidateLayout from "../layouts/candidate_layout";


export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />,
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'signin',
                element: <Login />
            },
            {
                path: 'company',
                element: <CompanyLayout />,
                children: [
                    {
                        path:"profile",
                        index: true,
                        element: <Companyprofile />
                    },
                    {
                        path: 'jobs/create',
                        element : <AddJob />,
                    },
                    {
                        path: 'jobs/edit',
                        element : <AddJob />,
                    },
                    {
                        path: 'jobs',
                        element: <Postedjobs />,
                    },
                    {
                        path: 'job/applications',
                        element: <Jobapplications/>
                    }
                ]
            },
            {
                path: "/candidate",
                element: <CandidateLayout />,
                children: [
                    {
                        path: 'about',
                        element: <AboutCandidate />,
                    },
                    {
                        path: 'education',
                        element: <EducationOfCandidate />,
                    },
                    {
                        path: 'workexp',
                        element: <WorkExpCandidate />
                    },
                    {
                        path: 'skills',
                        element: <SkillsCandidate />
                    },
                ]
            },
            {
                path: 'jobs',
                element: <Jobs />
            }
        ],
    },
]);