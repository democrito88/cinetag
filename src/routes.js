import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Cabecalho from "components/Cabecalho";

const AppRoutes = () => {
    const page = useLocation();
    return (
        <BrowserRouter>
            <Cabecalho page={page.pathname} />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
                <Route path="/player/:id" element={<Player />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;