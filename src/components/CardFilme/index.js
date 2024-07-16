import { Link } from "react-router-dom";
import styles from "./CardFilme.module.css";
import heart from "./favorite_outline.png";
import heartFilled from "./favorite.png";
import { useState } from "react";

const CardFilme = ({filme}) => {
    const [favorito, setFavorito] = useState(false);

    const handleFavorito = (e) => {
        e.preventDefault();
        setFavorito(!favorito);
    }

    return(
        <div className={styles.card}>
            <Link to={`../player/${filme.id}`}>
                <img className={styles.cartaz} src={filme.capa} alt={`Cartaz do filme ${filme.titulo}`}/>
            </Link>
            <div className={styles.cardBody}>
                <Link to={`../player/${filme.id}`}>
                    <h5>{filme.titulo}</h5>
                </Link>
                <a href="./" alt="botão favoritar" onClick={handleFavorito}>
                    <img src={favorito? heartFilled : heart} alt={filme.favorito? "desfavoritar" : "favoritar"} />
                </a>
            </div>
        </div>
    )
}

export default CardFilme;