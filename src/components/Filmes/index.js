import CardFilme from "components/CardFilme";
import styles from "./Filmes.module.css";

const Filmes = ({filmes}) => {
    return(
        <section className={styles.filmes}>
            {filmes.map(filme => <CardFilme key={filme.id} filme={filme} />)}
        </section>
    );
}

export default Filmes;