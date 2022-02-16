import React, { useEffect, useState } from "react";
import './style.css'
import Header from "../Header";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Article() {
    const { id } = useParams() //destructuring LEMBRARRRR


    const [article, setArticle] = useState({}) // Boas praticas de inicialização do 
    const initial = {
        text: ''
    }
    const [updateValues, setUpdateValues] = useState(initial)

    function updateValue(e) {
        const { name, value } = e.target
        setUpdateValues({ ...updateValues, [name]: value })
    }

    useEffect(() => { // Refatorar requisição AXIOS
        axios.get(`http://localhost:3005/articles/${id}`).then((response) => {
            setArticle(response.data)

        })
        // const setArticles = async () => {
        //     const articles = await getArticlesById(id)
        //     setArticle(articles)
        // } 

        // setArticles()

    }, [id])

    function deleteArticle(e) {
        e.preventDefault()

        axios.delete(`http://localhost:3005/delete/${id}`).then(() => {
            alert('Excliu')
        })
    }
    function saveEdit(e) {
        e.preventDefault()

        axios.put(`http://localhost:3005/update/${id}`, updateValues).then(() => {
            alert('Atualizado com sucesso')
        })
    }

    function showEditor() {
        const editor = document.getElementById('editor')
        const saveEdit = document.getElementById('saveEdit')
        const editButton = document.getElementById('edit-button')
        const content = document.getElementById('content')
        editor.style.display = 'block'
        content.style.display = 'none'
        editButton.style.display = 'none'
        saveEdit.style.display = 'block'

    }
    return (
        <React.Fragment>
            <Header />
            <div className="card-article-individual">
                <h1>{article.tittle}</h1>
                <p id='content'>{article.text}</p>
                <textarea id='editor' name="text" onChange={updateValue} placeholder={article.text} />
                <button id='saveEdit' onClick={saveEdit}> Salvar Edição </button>
                <button id='edit-button' onClick={showEditor}> Editar </button>
                <button onClick={deleteArticle}> Excluir </button>
            </div>


        </React.Fragment>
    )
}