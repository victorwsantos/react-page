import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <div className='topo'>
            <div className='componentes-topo'>
                <p className='logo'>Victor Santos</p>
                <nav>
                    <ul>
                        <li><Link className="Home" to='/'>Home</Link></li>
                        <li><Link className="objetivos" to='/Objetivos'>Objetivos</Link></li>
                        <li><Link className="sobre" to='/Sobre'>Sobre</Link></li>
                        <li><Link className="Contatos" to='/Contatos'>Contatos</Link></li>
                    </ul>
                </nav>
            </div>
       </div>) 
}
