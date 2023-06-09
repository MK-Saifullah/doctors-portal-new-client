import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments"
import MyPayment from "../../Pages/Dashboard/MyPayment/MyPayment"
import Home from "../../Pages/Home/Home/Home"
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError"
import Login from "../../Pages/Shared/Login/Login"
import SignUp from "../../Pages/Shared/Login/SignUp"
import AdminRoute from "../PrivateRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            }, 
            {
                path: '/dashboard/payment/:id',
                element: <MyPayment></MyPayment>,
                loader: ({params})=> fetch(`http://localhost:5000/payment/${params.id}`)
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
        ]
    }
])