import React from "react";
import styles from "./Banner.module.css";

const Banner = ({page}) => {
    return(
        <div
        className={styles.banner} 
        style={{backgroundImage: `url('/assets/imagens/banner-${page}.png')`}}>
        </div>
    );
}

export default Banner;