import React from "react";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import Error from "pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "pages/PaginaBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path="player/:id" element={<Player />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;