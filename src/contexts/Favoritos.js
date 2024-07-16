import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favoritos, setFavoritos] = useState([]);

    return(
        <FavoritosContext.Provider 
            value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const {favoritos, setFavoritos} = useContext(FavoritosContext);

    function addFavorito(novoFavorito){
        const favoritoRepetido  = favoritos.some(favorito => favorito.id === novoFavorito.id) ? true : false;
        return favoritoRepetido ? "filme já favoritado" : setFavoritos([...favoritos, novoFavorito]);
    }

    function removeFavorito(favoritoARemover){
        return setFavoritos(favoritos.filter(favorito => favorito.id !== favoritoARemover.id))
    }

    return {
        favoritos,
        addFavorito,
        removeFavorito
    }
}