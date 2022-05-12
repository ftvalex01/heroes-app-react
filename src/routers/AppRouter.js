import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LoginScreen } from "../components/login/LoginScreen"
import { DarshboardRoutes } from "./DarshboardRoutes"





export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DarshboardRoutes/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}
