import react from 'react'
import Footer from '../Footer'
import Header from '../Header'


export default function Login(){
    return (
        <div>
            <Header/>
            <div>
                <h1>Login</h1>
                <label>Email</label><input type='text' name='email' placeholder='Email'></input>
                <label>Senha</label><input type='password' name='email' placeholder='Password'></input>
                <button type='submit'>Entrar</button>
            </div>
            <Footer/>
        </div>
    )
}