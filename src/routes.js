import Inicio from "pages/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;