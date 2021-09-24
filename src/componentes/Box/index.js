import React from 'react';

export default function Box(props){

    return(
        <div id='boxMesage'>
            <div>
                <h2>{props.titulo}</h2>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <p>{props.informacao}</p>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>{props.butao}</button>
            </div>
        </div>
    )
}