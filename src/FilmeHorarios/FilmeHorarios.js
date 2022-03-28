import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Horario from "./Horario";

import "./FilmeHorarios.css";


export default function FilmeHorarios(){
    const {id} = useParams();
    const [dias, setDias] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
        request.then(resposta => {
            setDias(resposta.data.days)
            setInfo(resposta.data);
        });
    }, []);
    

    return(
        <>
            <div className="horarios-corpo">
                <div key={dias.id} className="sub-titulo">
                    <h2>Selecione o horário</h2>
                </div>
                {dias.map(dia => {return(
                    <Horario weekday={dia.weekday} date={dia.date} time1={dia.showtimes[0].name} time2={dia.showtimes[1].name} sessao1={dia.showtimes[0].id} sessao2={dia.showtimes[1].id} />
                )
                })}
            </div>
            <footer className="rodape">
                <div className="imgBorder">
                    <img src={info.posterURL} alt="poster"/>
                </div>
                <p>{info.title}</p>
            </footer>
        </>
    )
}