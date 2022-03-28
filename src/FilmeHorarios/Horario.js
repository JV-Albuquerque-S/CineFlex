import "./horario.css"

export default function Horario(props){
    return(
        <>
            <p className="horarioTexto">{props.weekday} - {props.date}</p>
            <div className="botoes">
                <button className="botao botao1">{props.time1}</button>
                <button className="botao">{props.time2}</button>
            </div>
        </>
    )
}