import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import SingleEstateDetails from "../pages/Home/SingleEstateDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
            path: '/estate',
            element: <PrivateRoute><SingleEstateDetails></SingleEstateDetails></PrivateRoute>
        },
        ],
    },
]);

export default router;

