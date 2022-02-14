import './style.css'
import { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export default function Form(){
    
    const initial = {
        tittle: '',
        text: ''
    }
    const [ values, setValue ] = useState(initial)

    function getValue(ev){
        const {name, value} = ev.target
        setValue({...values, [name]: value})

    }
    function loginAdmin(e){
        e.preventDefault()

        axios.post("http://localhost:3005/add-article", values).then(()=>{
            console.log(values)
        })
    }
    
    const lengthValues = values.text.length
    const mxlength = 7000 - lengthValues
    
    return (
        <div>
            <div className='form'>
                <h1>Daqui saem os melhores artigos!!</h1>
                <label>Título do artigo</label><input type='text' name='tittle' placeholder='Título' onChange={getValue}></input>
                <label className='label2'>Conteudo</label><textarea id='text' maxLength={7000} rows={20} cols={50} name='text' placeholder='O artigo de hoje é sobre...' onChange={getValue}/>
                <p id='caracteres'>{lengthValues}/{mxlength}</p>
                <button type='submit' onClick={loginAdmin}>Entrar</button>
            </div>
        </div>
    )
}