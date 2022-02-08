import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Article() {
  const id = useParams()
  
  const conteudo = [
    { id: 1, title: 'De Dev Jr para Dev Jr', content: 'Vamos bater um papo legal?' },
    { id: 2, title: 'Artigo 2', content: 'Bla bla bla' },
    { id: 3, title: 'Artigo 3', content: 'Bla bla bla' },
    { id: 4, title: 'Artigo 4', content: 'Bla bla bla' }
]
 const pageId = conteudo.id
 console.log(pageId)

  return (
      <React.Fragment>
          <Header />
          <div  className="card-article">
              {typeof conteudo !== 'undefined' && conteudo.filter((item) => {
                  return (
                      <div className="article" key={pageId}>
                          <h1>{item.title}</h1>
                          <p>{item.content}</p>
                          <Link to={`/artigos/:${item.id}`}><button>Ver Artigo ({item.title})</button></Link>
                      </div>
                      )
              })}
          </div>
      </React.Fragment>
  )
}