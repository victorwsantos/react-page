import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { context } from "../../functions/context";
import { useContext } from "react";

export default function Header() {
    
    const {authentication} = useContext(context)

    function toggleMenu() {
        const nav = document.getElementById('navega');
        nav.classList.toggle('active');
    }

    function dropDown() {
        const drop = document.getElementById('drop')
        drop.classList.toggle('dropdown')
    }
    
    return (
        <div className='topo'>
            <div className='componentes-topo'>
                <p className='logo'>Victor Santos</p>
                    <nav id='navega'>
                        <ul id='menu'>
                            <li>
                                <Link to='/'
                                className="Home">Home
                                </Link>
                              </li>

                            <li className='drop-menu'>
                                <Link to='/Artigos'
                                 className="Contatos">Artigos
                                 </Link>
                            </li>

                            <li onMouseEnter={dropDown}>Menu</li>

                                <ul className='drop-down' id='drop'>

                                    <div onMouseLeave={dropDown}
                                        id='drop-menu'>
                                        <div>
                                            <Link to='Create-Article'>
                                                <li>
                                                    Criar Artigo
                                                </li>
                                            </Link>
                                        </div>
                                        <div>
                                            <li>
                                                <Link
                                                    to='/Contatos' 
                                                    className="Contatos">Contatos
                                                </Link>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                {authentication ? <Link>Logout</Link>: <Link 
                                                    to='/Singin' 
                                                    className="Contatos">Login
                                                </Link>}
                                                
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                        </ul>
                    </nav>
                <button 
                    id='btn-mb'
                    className="navbutton" 
                    onClick={toggleMenu}>&#9776;
                 </button>
            </div>
        </div>)
}
