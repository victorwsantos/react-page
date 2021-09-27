import React from "react";
import Header from "../Header"
import Footer from "../Footer"
import FlashCards from "../FlashCards";
import '../../App.css';

const Contrate = () => (
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
        <div>
        <hr></hr>
          <h3>Nossa empresa se encarrega de realizar seu sonho!</h3>
          <hr></hr>
        </div>
        <div>
          <img height='650px' width='550px'src='imagens/imagem4.jpg'/>
        </div>
    </div>
    <div>
      < Footer  />
    </div>

  </div>
);

export default Contrate;
