import React from "react";
import FlashCards from "../FlashCards";
export default function ConteudoHome(){
    return(
    <div>
        <div className='sonhos'>
            <hr></hr>
            <h2>Caminhada da evolução</h2>
            <hr></hr>
        </div>
        <div className='flashsHome'>
        <FlashCards  titulo='HTML' descricao='Estuturar de forma limpa,tornando facil o entendimento'img='imagens/html5.png'/>
        <FlashCards  titulo='CSS' descricao='Uma paixão por estilizar manualmente, é gratificante' img='imagens/css.png'/>
        <FlashCards  titulo='JavaScript' descricao='A técnologia incrivel, e estou em eterno processo de melhoria.' img='imagens/js-logo.png' />
        <FlashCards  titulo='JavaScript' descricao='Pretendo me tornar Senior neste incrivel Framework' img='imagens/react.png' /> 
        </div>
        <div className='sonhos'>
            <hr></hr>
            <h2>Proximos passos</h2>
            <hr></hr>
            <h3>Iniciar a caminhada Backend</h3>
        </div>
        <div className='flashsHome-backend'>
        <FlashCards  titulo='NodeJs' descricao='Estou em processo de aprendizado,  FullStack utilizando-a'img='imagens/node.png'/>
        <FlashCards  titulo='Django' descricao='Atualmente estou em um projeto utilizando esta incrivel técnologia.' img='imagens/django.png'/>
        </div>
    </div>
    )
}