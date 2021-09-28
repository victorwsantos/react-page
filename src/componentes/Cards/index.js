import React from 'react';
import Discord from '../Discord';
import Linkedin from '../Linkedin'
import Whats from '../Whats'
export default function Cards(){
    function go(){
        const what = document.getElementById('Whats')
        const edin = document.getElementById('linkeDin')
        const disc = document.getElementById('Discord')
        what.style.display=('block')
        disc.style.display=('none')
        edin.style.display=('none')

    }
    function gotow(){
        
        const edin = document.getElementById('linkeDin')
        const what = document.getElementById('Whats')
        const disc = document.getElementById('Discord')
        what.style.display=('none')
        disc.style.display=('none')
        edin.style.display=('block')

    }

    function gothree(){
        
        const edin = document.getElementById('linkeDin')
        const what = document.getElementById('Whats')
        const disc = document.getElementById('Discord')
        what.style.display=('none')
        edin.style.display=('none')
        disc.style.display=('block')
    }
    
    return(
        
        <div  className='div-contatos'>
            <div className='conteudo-pg'>
                <h1>Gostou do meu conteudo?</h1>
                    <p>Não perca tempo, entre em em contato!!!</p>
                <div className='botoes-pg-index'>
                    <button onClick={go}>WhatsApp</button>
                    <button onClick={gotow}>Linkedin</button>
                    <button onClick={gothree}>GitHub</button>
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