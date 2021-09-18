import React from "react";

export default function FlashCards(props){
    return(
        <div className='flashCards'>
            <h2>{props.titulo}</h2>
            <hr></hr>
            <p>{props.descricao}</p>
            {props.img}
        </div>
    )
}