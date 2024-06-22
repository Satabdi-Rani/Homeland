import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
   const {registerUser, loading} = useContext(AuthContext);
   
   if(loading){
    return <span className="loading loading-spinner text-warning"></span>

   }

   if(registerUser){
    return children;
   }

    return <Navigate to='/login'></Navigate> ;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;