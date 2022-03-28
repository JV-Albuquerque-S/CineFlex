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






// {"id":1,
// "title":"Zack Snyder Justice League",
// "posterURL":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
// "overview":"Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
// "releaseDate":"2021-03-18T00:00:00.000Z",
// "days":[
//     {"id":24102021,
//     "weekday":"Domingo",
//     "date":"24/10/2021",
//     "showtimes":[
//         {"name":"15:00",
//         "id":1},
//         {"name":"19:00",
//         "id":2}
//     ]},
//     {"id":25102021,
//     "weekday":"Segunda-feira",
//     "date":"25/10/2021",
//     "showtimes":[
//         {"name":"15:00",
//         "id":3},
//         {"name":"19:00",
//         "id":4}
//     ]},
//     {"id":26102021,
//     "weekday":"Terça-feira",
//     "date":"26/10/2021",
//     "showtimes":[
//         {"name":"15:00",
//         "id":5},
//         {"name":"19:00",
//         "id":6}
//     ]},
//     {"id":27102021,"weekday":"Quarta-feira","date":"27/10/2021","showtimes":[{"name":"15:00","id":7},{"name":"19:00","id":8}]},{"id":28102021,"weekday":"Quinta-feira","date":"28/10/2021","showtimes":[{"name":"15:00","id":9},{"name":"19:00","id":10}]},{"id":29102021,"weekday":"Sexta-feira","date":"29/10/2021","showtimes":[{"name":"15:00","id":11},{"name":"19:00","id":12}]},{"id":30102021,"weekday":"Sábado","date":"30/10/2021","showtimes":[{"name":"15:00","id":13},{"name":"19:00","id":14}]},{"id":31102021,"weekday":"Domingo","date":"31/10/2021","showtimes":[{"name":"15:00","id":15},{"name":"19:00","id":16}]}]}