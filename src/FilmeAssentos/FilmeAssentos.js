import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import RenderAssentos from "./RenderAssentos";

import "./RenderAssentos.css"

export default function FilmeAssentos(){
    const {id} = useParams();
    const [assentos, setAssentos] = useState([]);
    const [selecionado, setSelecionado] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        request.then(resposta => {
            setAssentos(resposta.data.seats)
        });
    }, []);
    console.log(assentos);
    

    return(
        <>
            <div className="sub-titulo">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className="assentosConteudo">
                <div className="TodosAssentos">
                    {assentos.map(assento => {return(
                        <div onClick={() => assento.isAvailable ? 
                        setSelecionado([...selecionado, assento.name]) : 
                        alert("Esse assento não está disponível")} 
                        className={`assentoUnico ${assento.isAvailable ? `disponivel` : `indisponivel`}`}>
                            {assento.name}
                        </div>
                    )})} 
                </div>
            </div>
            <div className="assentoExemplo">
                <div className="primeiro">
                    <div className="verde"></div>
                    <p>Selecionado</p>
                </div>
                <div className="segundo">
                    <div className="cinza"></div>
                    <p>Disponível</p>
                </div>
                <div className="terceiro">
                    <div className="amarelo"></div>
                    <p>Indisponível</p>
                </div>
            </div>
        </>
    )
}