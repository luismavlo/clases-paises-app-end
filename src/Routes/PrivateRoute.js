import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) =>{

    const { userLogin } = useSelector( state => state.auth );

    return userLogin !== '' ? children : <Navigate to="/auth/login" />
}