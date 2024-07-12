import Cabecalho from "components/Cabecalho";
import Filmes from "components/Filmes";
import styles from "./Inicio.module.css";
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
            <Cabecalho page="./" />
            <h1 className={styles.h1}>Um lugar para guardar seus vídeos e filmes!</h1>
            <Filmes filmes={filmes} />
        </>
    )
}

export default Inicio;