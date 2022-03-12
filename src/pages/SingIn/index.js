import FormData from "../../componentes/FormData";
import Header from "../../componentes/Header";
import Button from "../../componentes/Button";
import { context } from "../../functions/context";
import { useContext } from "react";


export default function SingIn(){
  
  
  const {authentication, hendle, getValues} = useContext(context)

  
  console.log(authentication)


      

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
            type='password'
            name='password'
            onChange={getValues}
            
            />
            
            <Button
            btnName='Login'
            onSubmit={hendle}
            />
        </div>
      </>
  )
}