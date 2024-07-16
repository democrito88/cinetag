import { Link } from "react-router-dom";
import React from "react";
import styles from "./CabecalhoLink.module.css";

const CabecalhoLink = ({url, children}) => {
    return(
        <Link className={styles.link} to={url}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;