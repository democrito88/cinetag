import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from "components/CabecalhoLink";
import bannerHome from "./banner-home.png";
import bannerFavoritos from "./banner-favoritos.png";
import bannerPlayer from "./banner-player.png";

const Cabecalho = ({page}) => {
    console.log(page);
    return(
        <>
            <header className={styles.cabecalho}>
                <Link to="./" >
                    <img src={logo} alt="logo do cinetag"/>
                </Link>
                <nav>
                    <CabecalhoLink url="../">
                        Home
                    </CabecalhoLink>
                    <CabecalhoLink url="../favoritos">
                        Favoritos
                    </CabecalhoLink>
                </nav>    
            </header>
            <img 
                src={ page === "./" ? bannerHome : (page === "./Favoritos" ? bannerFavoritos : bannerPlayer)} 
                alt="banner"
                className={styles.banner} />
        </>
    )
}

export default Cabecalho;