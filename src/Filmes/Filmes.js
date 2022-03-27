import RenderFilmes from "./RenderFilmes"

import "./Filmes.css"

export default function Filmes(){
    return(
        <>
            <div className="sub-titulo">
                <h2>Selecione o filme</h2>
            </div>
            <RenderFilmes />
        </>
    )
}