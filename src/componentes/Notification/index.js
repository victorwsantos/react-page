import React, {useState} from "react";

export default function Notification(){

   var nome = document.getElementById('nomeDigitado').value;
   document.getElementById('span').innerHTML = nome
    return(
        <div className='notificacao'>
            <div className='elementos'>
                <p>Olá, <span id='span'></span>!!</p>
                <input id='nomeDigitado' type='text' placeholder='Digite seu nome'></input>
                <button onClick={Notification}>Entrar</button>
            </div>
        </div>
)
}