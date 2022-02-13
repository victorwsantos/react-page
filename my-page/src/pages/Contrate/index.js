import React from "react";
import Header from "../../componentes/Header"
import Footer from "../../componentes/Footer"
import FlashCards from "../../componentes/FlashCards";
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
        <div className='conteudo-portfolio-texto'>
        <hr></hr>
          <h3>Nossa empresa se encarrega de realizar seu sonho!</h3>
          <hr></hr>
          <p>Na <b>Vs Soluções</b> você terá multiplas formas de construir seu projeto.</p>
          <p>Trabalhamos com divesas técnologias, adaptando a necessidade do cliente ao custo beneficio
             de forma que com toda certeza o seu projeto será único!</p>
             <p>Com a utilizaçao de técnologias modernas seu site trabalhará em alta performance.</p>
             <p>Nós trabalhamos das seguintes formas:</p>
             <ul>
               <li>Criação de Novos Projetos;</li>
               <li>Crescimento de Projetos já em produção;</li>
               <li>Mudança de Tecnologia do projeto;</li>
             </ul>
             <div className='conteudo-portfolio-trabalhos'>
            <hr></hr>
            <h3>Projetos em Andamento</h3>
            <hr></hr>
            <div>
            < FlashCards titulo='Projeto Estoque Globo' img='imagens/projeto-globo.jpeg'/>
            < FlashCards titulo='Loja Virtual +18'img='imagens/imac.png'/>
            < FlashCards titulo='Loja Virtual Suplementos'img='imagens/imac.png'/>
            </div>
        </div>
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
