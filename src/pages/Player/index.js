import Cabecalho from "components/Cabecalho";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import ExibidorFilme from "components/ExibidorFilme";
import { useEffect, useState } from "react";

const Player = () => {
    let { id } = useParams();

    const [filme, setFilme] = useState({});

    useEffect(()=>{
        fetch("/json/db.json")
        .then(resposta => resposta.json())
        .then(filmes => setFilme(filmes.filter(filme => filme.id == id)[0]))
        .catch(error => console.error(error));
    }, []);

    return(
        <>
            <Cabecalho page="./Player" />
            <main className={styles.player}>
                <ExibidorFilme filme={filme}/>
            </main>
        </>
    )
}
export default Player;