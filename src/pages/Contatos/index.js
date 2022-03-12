import React from "react";
import Header from "../../componentes/Header"
import Cards from "../../componentes/Cards";
import Footer from "../../componentes/Footer"
import '../../App.css';
const Contatos = () => (
    <div className='pg-completa'>
    <div>
        < Header />            
    </div>
    <div>
        < Cards />
    </div>
    <div>
        < Footer  />
    </div>

  </div>
);

export default Contatos;