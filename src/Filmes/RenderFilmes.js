import axios from "axios"
import React from "react"

export default function RenderFilmes(){
    const [filmes, setFilmes] = React.useState([]);

    React.useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        request.then(resposta => {setFilmes(resposta.data)})
    }, []);
    

    return(
        <div className="corpo">
            <div className="listaFilmes">
                {filmes.map(filme =>
                <div className="posterBorda" key={filme.id}>
                    <img src={filme.posterURL} alt="Poster" />
                </div>
                )}
            </div>
        </div>
        
    )
}