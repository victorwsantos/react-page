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
                        <li><Link className="Home" to='/'>Home</Link></li>
                        <li><Link className="objetivos" to='/Objetivos'>Objetivos</Link></li>
                        <li><Link className="sobre" to='/Sobre'>Sobre</Link></li>
                        <li><Link className="Contatos" to='/Contatos'>Contatos</Link></li>
                    </ul>
                </nav>
                <button id='btn-mb' className="navbutton" onClick={toggleMenu}>&#9776;</button>
            </div>
       </div>) 
}
