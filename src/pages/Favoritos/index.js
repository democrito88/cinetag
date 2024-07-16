import React from "react";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contexts/Favoritos";
import Filmes from "components/Filmes";

const Favoritos = () => {
    const {favoritos} = useFavoritoContext();
    return(
        <>
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <Filmes filmes={favoritos} />
        </>
    )
}

export default Favoritos;