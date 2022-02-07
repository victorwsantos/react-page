import React from "react";
import Header from "../Header"

export default function Articles() {

    const conteudo = [
        { title: 'Artigo 1', content: 'Bla bla bla' },
        { title: 'Artigo 2', content: 'Bla bla bla' },
        { title: 'Artigo 3', content: 'Bla bla bla' },
        { title: 'Artigo 4', content: 'Bla bla bla' }
    ]
    conteudo.map((i) => {
        console.log(i.title)
    })

    return (
        <React.Fragment>
            <Header />
            <div>
                {typeof conteudo !== 'undefined' && conteudo.map((item) => {
                    return (
                        <>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </>)
                })}
            </div>
        </React.Fragment>
    )
}