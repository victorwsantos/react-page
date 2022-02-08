import config from '../config/default'
const express = require('express')
const cors = require('cors')


export default function app(){
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))

  app.listen(config.port, config.host, ()=>{
    console.log(`Servidor rodando em https://${config.host}:${config.port}/`)
})
}