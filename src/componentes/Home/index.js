import React from "react";
import Header from '../Header'
import ConteudoHome from "../ConteudoHome";
import Footer from '../Footer'
import Apresentacao from "../Apresentacao";

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