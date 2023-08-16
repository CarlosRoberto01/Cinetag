import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "components/Contexto/Favoritos";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/Favoritos" element={<Favoritos />}> </Route>
                        <Route path="/:id" element={<Player />}> </Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}