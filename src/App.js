import { BrowserRouter, Routes, Route } from "react-router-dom"

import Filmes from "./Filmes/Filmes"
import Topo from "./Topo/Topo"
import FilmeHorarios from "./FilmeHorarios/FilmeHorarios"
import FilmeAssentos from "./FilmeAssentos/FilmeAssentos"

import "./assets/reset.css"

export default function App(){
    return(
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/filme/:id" element={<FilmeHorarios />} />
                <Route path="/sessao/:id" element={<FilmeAssentos />} />
            </Routes>
        </BrowserRouter>
    )
}