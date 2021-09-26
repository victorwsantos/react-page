import React from "react";
import Header from '../Header'
import Footer from '../Footer'
import FlashCards from "../FlashCards";
import Perfil from "../Perfil";

function Home() {
  
  return (
    <div className='pg-completa'>
      <Header />
            <div id='topPage'>
                  <div id='imgIndex-phone'>
                      <img width='290px' height='250px' src='imagens/imagem-3.png'/>
                  </div>
              <div id="apresentacao">
                  <h2>Seja muito bem vindo!!</h2>
                  <p><b><span>"</span>Everything can be improved."</b></p>
                  <p>Certo dia vi esta frase na parede da empresa em que trabalho e  isto me fez refletir principamente sobre a minha carreira. Aplicar esta metodologia de que tudo pode ser melhorado
                      acaba sendo de certa forma um mantra no ramo do desenvolvimento de software, onde devemos melhora-los dia após dia!
                  </p>
              </div>
                  <div id='imgIndex'>
                      <img width='490px' height='500px' src='imagens/imagem-3.png'/>
                  </div>
              </div>
              <div className='sonhos'>
                  <p>Este Portfólio tem como principal objetivo apresentar minhas skills na cricação de Web Sites utilizando variadas técnologias.</p>
              </div>
              <div className='flashsHome'>
                <FlashCards  titulo='Projeto Feito para Stefanini' descricao='Controle de ativos de técnologia'/>
                <FlashCards  titulo='Curiosidades do mundo do Jiu-Jitsu' descricao='Blog Pessoal'/>
                <FlashCards  titulo='Web Site totalmente Responsivo' descricao='Loja de Suplementos'/>      
              </div>
      <div>   
        < Footer/>
      </div>
    </div>

    
  );
}
export default Home;