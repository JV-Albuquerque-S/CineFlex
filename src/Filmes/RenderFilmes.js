import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderFilmes(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        request.then(resposta => {setFilmes(resposta.data)})
    }, []);
    

    return(
        <div className="corpo">
            <div className="listaFilmes">
                {filmes.map(filme =>
                <div className="posterBorda" key={filme.id}>
                    <Link to={`/filme/${filme.id}`}>
                        <img src={filme.posterURL} alt="Poster" />
                    </Link>
                </div>
                )}
            </div>
        </div>
        
    )
}