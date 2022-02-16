import React from 'react';
import FlashCards from '../FlashCards'
import ConteudoHome from '../../pages/ConteudoHome';

export default function Curriculo() {
    return (
        <div>
            <div className='img-curriculo'>
                <img width='200px' height='200px' src='imagens/foto-curriculo.jpeg' alt='img' />
            </div>
            <div>
                <h3>Perfil profissional</h3>
                <p>Sou um Profissional extremante dedicado, criativo, com vontade de aprender, dinâmico e com forte espírito de equipe</p>
            </div>
            <div>
                <h3>Formação acadêmica</h3>
                <p>Ensino Médio Técnico - Informatica - Centro Educacional Fonseca e Martins</p>
                <p>Ensino Superior - Gestão de Técnologia da Informação - IBMR</p>
            </div>
            <div>
                <h2>Confira abaixo minhas experiências</h2>
            </div>
            <div className='flashsCurriculo'>
                < FlashCards titulo='Vs Soluções' descricao='Desenvolvedor Freelancer' img='imagens/imac.png' />
                < FlashCards titulo='Stefanini' descricao='Analista de Suporte' img='imagens/Stefanini_logo.png' />
                < FlashCards titulo='Vs Soluções' descricao='Micro Empreendedor' img='imagens/imac.png' />
                < FlashCards titulo='Techmach' descricao='Técnico de impressoras pleno' img='imagens/tecmach-logo.png' />
                < FlashCards titulo='Sonda IT' descricao='Coordenador de Helpdesk' img='imagens/Sonda_Logo.jpeg' />
                < FlashCards titulo='Tecmach' descricao='Técnico de impressora JR' img='imagens/tecmach-logo.png' />
                < FlashCards titulo='Grupo Positiva' descricao='Técnico em Eletronica JR' img='imagens/positiva_logo.jpeg' />
                < FlashCards titulo='Grupo Positiva' descricao='Estágio técnico' img='imagens/positiva_logo.jpeg' />
            </div>
            <div>
                < ConteudoHome />
            </div>
        </div>
    )

}