import FormData from "../../componentes/FormData";
import Header from "../../componentes/Header";
import { RequestsAuth } from "../../functions/auth";
import { useState, Context, useContext } from "react";
import Button from "../../componentes/Button";



export default function SingIn(){
  const initial = {
    email: '',
    password: ''
  }
  const [values, setValues] = useState(initial)


  const getValues = (ev) =>{
    const {name, value} = ev.target
    setValues({...values, [name]: value})
  }

  const sendValues = async () =>{
   await RequestsAuth.requestAuthPost('auth', values).then(()=>{
     alert('logou')
   }).catch(()=>{
     alert('não foi dessa vez')
   })
    
  }

  return(
      <>
      <Header/>
        <div>
          <FormData
            id='teste'
            type='text'
            name='email'
            onChange={getValues}
            
            />

          <FormData
            id='teste'
            type='text'
            name='password'
            onChange={getValues}
            
            />
            
            <Button
            btnName='Login'
            onSubmit={sendValues}
            />
        </div>
      </>
  )
}