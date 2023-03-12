import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Shared/Login/Login"
import SignUp from "../../Pages/Shared/Login/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            }
        ],
        
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])