import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) =>{

    const { userLogin } = useSelector( state => state.auth );

    return userLogin !== ''  ? <Navigate to='/' />  : children
}