import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../componentes/Header"
import { useEffect } from "react";
import './style.css'
export default function Articles() {
    const [article, setArticle] = useState()


    useEffect(() => {
        axios.get('http://localhost:3005/articles').then((response) => {
            setArticle(response.data)
        })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="card-article">
                {typeof article !== 'undefined' && article.map((item) => {
                    return (
                        <div className="article" key={item._id}>
                            <h1>{item.tittle}</h1>
                            <p>{item.text}</p>
                            <Link to={`/artigos/${item._id}`}><button>Ver Artigo ({item.tittle})</button></Link>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}