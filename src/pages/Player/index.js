import React from "react";
import styles from "./Player.module.css";
import Error from "pages/Error";
import { useParams } from "react-router-dom";
import ExibidorFilme from "components/ExibidorFilme";
import { useEffect, useState } from "react";

const Player = () => {
    let { id } = useParams();

    const [filme, setFilme] = useState({});

    useEffect(()=>{
        fetch("/json/db.json")
        .then(resposta => resposta.json())
        .then(filmes => setFilme(filmes.filter(filme => filme.id+"" === id)[0]))
        .catch(error => setFilme(null));
    }, [id]);

    return(filme ? 
            <>
                <main className={styles.player}>
                    <ExibidorFilme filme={filme}/>
                </main>
            </>
        : <Error />)
}
export default Player;