import { Link } from "react-router-dom"

import "./horario.css"

export default function Horario(props){
    return(
        <>
            <p className="horarioTexto">{props.weekday} - {props.date}</p>
            <div className="botoes">
                <Link to={`/sessao/${props.sessao1}`}><button className="botao botao1">{props.time1}</button></Link>
                <Link to={`/sessao/${props.sessao2}`}><button className="botao botao1">{props.time2}</button></Link>
            </div>
        </>
    )
}