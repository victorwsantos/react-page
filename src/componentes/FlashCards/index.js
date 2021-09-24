import React from "react";

export default function FlashCards(props){
         
    return(
        <div id='flashCards'>
            <div>
            <h2>{props.titulo}</h2>
            </div>
            <div>
            <hr></hr>
            </div>
            <div>
                <p>{props.descricao}</p>
            </div>
            <div>
                <img className='imagem' src={props.img}/>
            </div>
        </div>
    )
}