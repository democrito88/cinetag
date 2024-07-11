import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
                <Route path="/player" element={<Player />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;