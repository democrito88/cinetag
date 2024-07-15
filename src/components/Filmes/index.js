import CardFilme from "components/CardFilme";
import styles from "./Filmes.module.css";

const Filmes = ({filmes}) => {
    return(
        <div className={styles.filmes}>
            {filmes.map(filme => <CardFilme key={filme.id} filme={filme} />)}
        </div>
    );
}

export default Filmes;