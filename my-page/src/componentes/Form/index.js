import react from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import axios from 'axios'
import { Redirect } from 'react-router'

export default function Login(){
    
    const initial = {
        email: '',
        password: ''
    }
    const [ values, setValue ] = useState(initial)

    function getValue(ev){
        const {name, value} = ev.target
        setValue({...values, [name]:value})

    }
    function loginAdmin(e){
        e.preventDefault()

        axios.post("http://localhost:3003/login", values).then(()=>{
        })
    }
    console.log(values)
    return (
        <div>
            <Header/>
            <div>
                <h1>Login</h1>
                <label>Email</label><input type='text' name='email' placeholder='Email' onChange={getValue}></input>
                <label>Senha</label><input type='password' name='password' placeholder='Password'onChange={getValue}></input>
                <button type='submit' onClick={loginAdmin}>Entrar</button>
            </div>
            <Footer/>
        </div>
    )
}