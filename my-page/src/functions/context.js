import React from 'react'
import {createContext, useState, useEffect} from "react";
import {RequestsAuth} from './auth'

const context = createContext()

function AuthProvider({children}){
    
    const [authentication, setAutentication] = useState(false)

    useEffect(() => {
      RequestsAuth.requestAuthPost().then((response) => {
          
      })
      }, [])

  return (
    <context.Provider value={{authenticated: false}}>
      {children}
    </context.Provider>
  )
}

export {context, AuthProvider}