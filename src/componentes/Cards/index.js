import React from 'react';
import Discord from '../Discord';
import Linkedin from '../Linkedin'
import Whats from '../Whats'
export default function Cards(){
    function go(){
        const goto = document.getElementById('one')
        const what = document.getElementById('Whats')
        const edin = document.getElementById('linkeDin')
        const disc = document.getElementById('Discord')
        edin.style.display=('block')
        what.style.display=('none')
        disc.style.display=('none')

    }
    function gotow(){
        const goto = document.getElementById('tow')
        const edin = document.getElementById('linkeDin')
        const what = document.getElementById('Whats')
        const disc = document.getElementById('Discord')
        what.style.display=('block')
        edin.style.display=('none')
        disc.style.display=('none')
        
    }

    function gothree(){
        const goto = document.getElementById('three')
        const edin = document.getElementById('linkeDin')
        const what = document.getElementById('Whats')
        const disc = document.getElementById('Discord')
        what.style.display=('none')
        edin.style.display=('none')
        disc.style.display=('block')
    }
    function goout(){
        const goto = document.getElementById('three')
        const edin = document.getElementById('linkeDin')
        const what = document.getElementById('Whats')
        const disc = document.getElementById('Discord') 
        what.style.display=('none')
        edin.style.display=('none')
        disc.style.display=('none')
    }
    return(
        
        <div  className='div-contatos'>
            <div className='conteudo-pg'>
                <h1>Gostou do meu conteudo?</h1>
                    <p>Não perca tempo, entre em em contato!!!</p>
                <div className='botoes-pg-index'>
                    <button onClick={go}  id='one'>Linkedin</button>
                    <button onClick={gotow} id='tow'>WhatsApp</button>
                    <button id='three'onClick={gothree}>Discord</button>
                </div>
                <div id='Whats'>
            < Whats/>
            </div>
            <div id='linkeDin'>
            < Linkedin/>
            </div>
            <div id='Discord'>
                < Discord />
            </div>
            </div>
        </div>
        
    )
}