import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header"
import './style.css'
export default function Articles() {

    const conteudo = [
        { id: 1, title: 'De Dev Jr para Dev Jr', content: 'Vamos bater um papo legal?' },
        { id: 2, title: 'Artigo 2', content: 'Bla bla bla' },
        { id: 3, title: 'Artigo 3', content: 'Bla bla bla' },
        { id: 4, title: 'Artigo 4', content: 'Bla bla bla' }
    ]
    conteudo.map((i) => {
        console.log(i.title)
    })

    return (
        <React.Fragment>
            <Header />
            <div  className="card-article">
                {typeof conteudo !== 'undefined' && conteudo.map((item) => {
                    return (
                        <div className="article" key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                            <Link to={`/artigos/${item.id}`}><button>Ver Artigo ({item.title})</button></Link>
                        </div>
                        )
                })}
            </div>
        </React.Fragment>
    )
}