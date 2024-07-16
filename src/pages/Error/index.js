import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.errorPage}>
            <h2>Erro 404</h2>
            <p>Página não encontrada!</p>
        </div>
    );
}

export default Error;