import { Link } from "react-router-dom";
import styles from "./CardFilme.module.css";
import heart from "./favorite_outline.png";
import heartFilled from "./favorite_outline.png";

const CardFilme = ({key, filme}) => {
    return(
        <Link to={`../player/${filme.id}`}>
            <div className={styles.card}>
                <img src={filme.capa} alt={`Cartaz do filme ${filme.titulo}`}/>
                <div className={styles.cardBody}>
                    <h5>{filme.titulo}</h5>
                    <img src={filme.favorito? heartFilled : heart} alt={filme.favorito? "desfavoritar" : "favoritar"} />
                </div>
            </div>
        </Link>
    )
}

export default CardFilme;