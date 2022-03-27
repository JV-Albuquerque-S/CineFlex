import { BrowserRouter, Routes, Route } from "react-router-dom"

import Filmes from "./Filmes/Filmes"
import Topo from "./Topo/Topo"

import "./assets/reset.css"

export default function App(){
    return(
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes />} />
            </Routes>
        </BrowserRouter>
    )
}