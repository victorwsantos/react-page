import React from 'react';

export default function Box(props){

    return(
        <div id='boxMesage'>
            <div className='boxTitle'>
                <div>
                    <h2>{props.titulo}</h2>
                </div>
                
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <p>{props.informacao}</p>
            </div>
            
        </div>
    )
}