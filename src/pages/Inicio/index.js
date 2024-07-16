import React from "react";
import Cabecalho from "components/Cabecalho";
import Filmes from "components/Filmes";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        fetch("/json/db.json")
        .then(resposta => resposta.json())
        .then(filmes => setFilmes(filmes))
        .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Cabecalho page={"home"} />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Filmes filmes={filmes}/>
        </>
    )
}

export default Inicio;