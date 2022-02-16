import './style.css'
import { useState } from 'react'
import axios from 'axios'

export default function Form() {

    const initial = {
        tittle: '',
        text: '',
        img: ''
    }
    const [values, setValue] = useState(initial)

    function getValue(ev) {
        const { name, value } = ev.target
        setValue({ ...values, [name]: value })

    }
    function sendValues(e) {
        e.preventDefault()

        axios.post("http://localhost:3005/add-article", values).then(() => {
            alert('Publicado')
        })
    }

    const lengthValues = values.text.length
    const mxlength = 7000 - lengthValues

    return (
        <div>
            <div className='form'>
                <h1>Daqui saem os melhores artigos!!</h1>
                <label>Título do artigo</label>
                <input type='text' name='tittle' placeholder='Título' onChange={getValue} />
                <label className='label2'>
                    Conteudo
                </label>
                <textarea id='text' maxLength={7000} rows={20} cols={50} name='text' placeholder='O artigo de hoje é sobre...' onChange={getValue} />
                <input type='file' name='img' onChange={getValue} />
                <p id='caracteres'>{lengthValues}/{mxlength}</p>
                <button type='submit' onClick={sendValues}>Cadastrar</button>
            </div>
        </div>
    )
}