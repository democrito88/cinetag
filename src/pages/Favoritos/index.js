import Titulo from "components/Titulo";

const { default: Cabecalho } = require("components/Cabecalho")

const Favoritos = () => {
    return(
        <>
            <Cabecalho page="./Favoritos" />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
        </>
    )
}

export default Favoritos;