import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FilmeAssentos(){
    const {id} = useParams();
    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        request.then(resposta => {
            setAssentos(resposta.data)
        });
    }, []);
    console.log(assentos);
    

    return(
        <p>asdafAfaAFA</p>
    )
}