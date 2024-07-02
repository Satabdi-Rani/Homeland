import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import SingleEstateDetails from "../pages/Home/SingleEstateDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../pages/Home/UpdateProfile";



const router =  createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/estate/:id',
            // loader : ({params}) => fetch(`http://localhost:5173/estate/${params.id}`),
            element: <SingleEstateDetails></SingleEstateDetails>,

        },
        {
            path: '/updateProfile',
            element: <UpdateProfile></UpdateProfile> 
        },
        ],
    },
]);

export default router;

