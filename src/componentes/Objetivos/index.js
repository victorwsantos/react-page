import React from "react";
import Header from "../Header"
import Curriculo from "../Perfil";
import Footer from "../Footer"

import '../../App.css';
const Objetivos = () => (
    <div>
    < Header />
      <div>
        <h1>Bem vindos ao meu Curriculo</h1>
        
      </div>
      <div>
        < Curriculo/>
      </div>
    < Footer  />

  </div>
);

export default Objetivos;