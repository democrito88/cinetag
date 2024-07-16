import React from "react";
import Cabecalho from "components/Cabecalho";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contexts/Favoritos";
import Filmes from "components/Filmes";

const Favoritos = () => {
    const {favoritos} = useFavoritoContext();
    return(
        <>
            <Cabecalho page={"favoritos"} />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <Filmes filmes={favoritos} />
        </>
    )
}

export default Favoritos;