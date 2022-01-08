import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){

    
    const btn = document.getElementById('btn-mb')
    function toggleMenu(){
        const nav = document.getElementById('navega');
        nav.classList.toggle('active');
    }
    return(
        <div className='topo'>
            <div className='componentes-topo'>
                <p className='logo'>Victor Santos</p>
                <nav id='navega'>
                    <ul id='menu'>
                        <li><Link to='/' className="Home" >Home</Link></li>
                        <li><Link to='/Sobre-mim' className="objetivos" >Curriculo</Link></li>
                        <li><Link to='/Contrate' className="sobre" >Contrate</Link></li>
                        <li><Link to='/Contatos' className="Contatos">Contatos</Link></li>
                        <li><Link to='/Login' className="Contatos">Login</Link></li>
                    </ul>
                </nav>
                <button id='btn-mb' className="navbutton" onClick={toggleMenu}>&#9776;</button>
            </div>
       </div>) 
}
