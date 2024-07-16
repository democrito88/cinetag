import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return(
        <main>
            <Cabecalho page={"home"} />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;