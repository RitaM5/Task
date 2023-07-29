import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import MyJobs from "../Pages/Dashboard/MyJobs/MyJobs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
         
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'myjobs',
                element: <MyJobs></MyJobs>
            },
        ]
    }
]);