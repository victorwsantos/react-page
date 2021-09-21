import React from 'react';
import FlashCards from '../FlashCards'


export default function Curriculo(){
    return(
            <div>
                <div>IMG</div>
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
                    < FlashCards titulo='Vs Soluções' descricao='Desenvolvedor Freelancer' />
                   < FlashCards titulo='Stefanini' descricao='Analista de Suporte' />
                   < FlashCards titulo='Vs Soluções' descricao='Micro Empreendedor' />
                   < FlashCards titulo='Techmach' descricao='Técnico de impressoras pleno' />
                   < FlashCards titulo='Sonda IT' descricao='Coordenador de Helpdesk' />
                   < FlashCards titulo='Tecmach' descricao='Técnico de impressora JR' />
                    < FlashCards titulo='Grupo Positiva' descricao='Técnico em Eletronica JR' />
                   < FlashCards titulo='Grupo Positiva' descricao='Estágio técnico' />
                </div>
            </div>
        )

}