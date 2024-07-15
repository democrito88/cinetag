import Cabecalho from "components/Cabecalho";
import Filmes from "components/Filmes";
import Titulo from "components/Titulo";

const Inicio = () => {
    return (
        <>
            <Cabecalho page="./" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Filmes />
        </>
    )
}

export default Inicio;