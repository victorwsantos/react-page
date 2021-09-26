import React from "react";
import Header from "../Header"
import Cards from "../Cards";
import Footer from "../Footer"
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