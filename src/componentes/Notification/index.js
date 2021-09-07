import React, {useState} from "react";
export default function Notification(){
const [nome, setNome] = useState(0);
    function nomeVisitante(){
        setNome(nome +1 )
        
    }
return(
    <div className='notificacao'>
        <div className='elementos'>
            <p>Quantidade de Visitantes {nome}</p>
            <button onClick={nomeVisitante}>Entrar</button>
        </div>
    </div>
)
}