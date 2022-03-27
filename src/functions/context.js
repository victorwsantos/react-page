import React from 'react'
import {createContext, useState} from "react";
import {RequestsAuth} from './auth'

const context = createContext()

function AuthProvider({children}){
 
  const initial = {
    email: '',
    password: ''
  }
  
  const [values, setValues] = useState(initial)
  
  const getValues = (ev) =>{
    const {name, value} = ev.target
    
    setValues({...values, [name]: value})
    console.log(values)
  }

  const [authentication, setAutentication] = useState(false)


  async function hendle(){

   await RequestsAuth.requestAuthPost('auth/login', values)
   .then(()=>{
      alert('logou')
      setAutentication(true)})
  
   .catch(()=>{
      alert('não foi dessa vez')})
    }

  return (
    <context.Provider
     value={
       {authentication,
        hendle,
        values,
        setValues,
        getValues
       }}>

      {children}
      
    </context.Provider>
  )
}

export {context, AuthProvider}