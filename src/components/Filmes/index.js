import CardFilme from "components/CardFilme";
import React from "react";
import styles from "./Filmes.module.css";

const Filmes = ({ filmes }) => {
    return (
        <section className={styles.filmes}>
            {
                filmes.length > 0 ?
                    filmes.map(filme => <CardFilme key={filme.id} filme={filme} />)
                    : <p>Nenhum filme encontrado!</p>
            }
        </section>
    );
}

export default Filmes;