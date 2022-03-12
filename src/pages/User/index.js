import { useState } from 'react'
import { RequestsAuth } from '../../functions/auth'
import Header from '../../componentes/Header'

export default function FormUser() {

  const initial = {
    name: '',
    age: 0,
    email: '',
    password: ''
  }

  const [values, setValue] = useState(initial)

  function getValue(ev) {
    const { name, value } = ev.target
    setValue({ ...values, [name]: value })

  }
  async function  sendValues(e) {
    e.preventDefault()

      RequestsAuth.requestAuthPost('add-user', values).then(() => {
      alert('Cadastrado')
    }).catch((err) => {
      alert('deu ruim')
    })
  }
  console.log(values)
  return (
    <div>
      <Header/>
      <div className='form'>
        
        <h1>Cadastro de usuário</h1>
        <input type='text' name='name' placeholder='nome' onChange={getValue} />
        <input type='number' name='age' placeholder='age' onChange={getValue} />
        <input type='text' name='email' placeholder='email' onChange={getValue} />
        <input type='password' name='password' placeholder='password' onChange={getValue} />
        <button type='submit' onClick={sendValues}>Cadastrar</button>
      </div>
    </div>
  )
}