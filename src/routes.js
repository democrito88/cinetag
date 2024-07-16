import React from "react";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/player/:id" element={<Player />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoutes;