import CardFilme from "components/CardFilme";
import styles from "./Filmes.module.css";
import filmes from './json/db.json';

const Filmes = () => {
    return(
        <div className={styles.filmes}>
            {filmes.map(filme => <CardFilme key={filme.id} filme={filme} />)}
        </div>
    );
}

export default Filmes;