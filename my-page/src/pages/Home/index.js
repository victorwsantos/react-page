import React from "react";
import Header from '../../componentes/Header'
import ConteudoHome from "../ConteudoHome";
import Footer from '../../componentes/Footer'
import Apresentacao from "../../componentes/Apresentacao";

function Home() {
  
  return (
    <div className='pg-completa'>
      <Header />
        <div>
          <Apresentacao />
        </div>
        
      <div>   
        < Footer/>
      </div>
    </div>

    
  );
}
export default Home;