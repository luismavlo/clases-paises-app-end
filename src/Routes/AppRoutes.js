import { Routes, Route, BrowserRouter } from "react-router-dom";


import AuthRouter from "./AuthRouter";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRoutes = () => {


  return (
   <BrowserRouter>
        <Routes>
            <Route path="/auth/*" element={
              <PublicRoute>
                <AuthRouter />
              </PublicRoute>
            }/>
            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            } />
        </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes