import { Link } from "react-router-dom";
import React from "react";
import styles from "./CardFilme.module.css";
import heart from "./favorite_outline.png";
import heartFilled from "./favorite.png";
import { useFavoritoContext } from "contexts/Favoritos";

const CardFilme = ({ filme }) => {
    const {favoritos, addFavorito, removeFavorito} = useFavoritoContext();

    return (
        <div className={styles.card}>
            <Link to={`../player/${filme.id}`}>
                <img className={styles.cartaz} src={filme.capa} alt={`Cartaz do filme ${filme.titulo}`} />
            </Link>
            <div className={styles.cardBody}>
                <Link to={`../player/${filme.id}`}>
                    <h5>{filme.titulo}</h5>
                </Link>
                <img
                    src={favoritos.some(favorito => favorito.id === filme.id) ? heartFilled : heart}
                    alt={"favoritar"}
                    onClick={() => 
                        favoritos.some(favorito => favorito.id === filme.id) ?
                        removeFavorito({ id:filme.id, titulo:filme.titulo, capa:filme.capa })
                        : addFavorito({ id:filme.id, titulo:filme.titulo, capa:filme.capa })
                    }
                />
            </div>
        </div>
    )
}

export default CardFilme;