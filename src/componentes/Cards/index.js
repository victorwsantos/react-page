import React from 'react';
import Linkedin from '../Linkedin'
import Whats from '../Whats'
export default function Cards(){
    function go(){
        const goto = document.getElementById('one')
        const what = document.getElementById('Whats')
        const edin = document.getElementById('linkeDin')
        edin.style.display=('block')
        what.style.display=('none')
    }
    function gotow(){
        
        const edin = document.getElementById('linkeDin')
        const goto = document.getElementById('tow')
        const what = document.getElementById('Whats')
        what.style.display=('block')
        edin.style.display=('none')
    }
    return(
        <div >
            <div className='conteudo-pg'>
                <h1>Gostou do meu conteudo?</h1>
                <p>Não perca tempo, entre em em contato!!!</p>
                <div className='botoes-pg-index'>
                <button onClick={go}  id='one'>Linkedin</button>
                <button onClick={gotow} id='tow'>WhatsApp</button>
                <button id='three'>Discord</button>
                </div>
            </div>
            <div id='Whats'>
            < Whats/>
            </div>
            <div id='linkeDin'>
            < Linkedin/>
            </div>
        </div>
        
    )
}