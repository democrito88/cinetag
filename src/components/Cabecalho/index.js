import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from "components/CabecalhoLink";
import Banner from "components/Banner";

const Cabecalho = ({page}) => {
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
            <Banner page={page} />
        </>
    )
}

export default Cabecalho;