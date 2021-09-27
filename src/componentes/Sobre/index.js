import React from "react";
import Header from "../Header"
import Curriculo from "../Perfil";
import Footer from "../Footer"

import '../../App.css';
const Sobre = () => (
    <div>
    < Header />
      <div className='pg-curriculo'>
        <h1>Bem vindos ao meu Curriculo</h1>
        
      </div>
      <div className='curriculo'>
        < Curriculo/>
      </div>
    < Footer  />

  </div>
);

export default Sobre;