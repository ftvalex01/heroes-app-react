import { Routes, Route, BrowserRouter } from "react-router-dom"
import { DarshboardRoutes } from "./DarshboardRoutes"
import { PrivateRoute } from "./PrivateRoute"
import {LoginScreen} from "../components/login/LoginScreen"
import { PublicRoute } from "./PublicRoute"




export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                
                <Route path="/login" element={
                <PublicRoute>
                    <LoginScreen></LoginScreen>
                </PublicRoute>} />

                <Route path="/*" element={
                <PrivateRoute>
                    <DarshboardRoutes/>
                </PrivateRoute>}>  
                </Route>

            </Routes>

        </BrowserRouter>
    )
}
