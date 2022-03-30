import LoginScreen from '../components/auth/LoginScreen'
import { Routes, Route } from "react-router-dom";



const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginScreen />}></Route>
        <Route path='*' element={<LoginScreen />}></Route>
    </Routes>
  )
}

export default AuthRouter