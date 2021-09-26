import React from "react";
import Header from "../Header"
import Footer from "../Footer"
import FlashCards from "../FlashCards";
import '../../App.css';

const Sobre = () => (
    <div  className='pg-completa'>
      <div>
        < Header />
      </div>
    <div className='conteudo-contrate'>
      <div>
       <img height='350px' width='100%' src='imagens/imagem2.jpg'/>
      </div>
    </div>
    <div className='conteudo-texto'>
      <h2>Contrate nossos serviços e confeccione seu Website</h2>
      <p>fazemos o projeto do seu Blog, loja Virtural, Newsletter e etc..</p>
    </div>
    <div className='conteudo-portfolio'>
        <FlashCards titulo='Ecommerc de Moveis' descricao='Este Web site foi feito para uma loja de moveis, Confira no Link abaixo' />
        <FlashCards titulo='Ecommerc de SexySHop' descricao='Conteudo Adulto'/>
        <FlashCards />
    </div>
    <div>
      < Footer  />
    </div>

  </div>
);

export default Sobre;
