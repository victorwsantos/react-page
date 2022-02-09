import DefaultConfig from './config/default.js'
import route from './controller/routes.js'
import express from 'express'
import cors from 'cors'
import log from './logger/index.js'

const config = new DefaultConfig()

export default function App(){
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))

  app.use(route)

  app.listen(config.port, config.host, ()=>{
    log.info(`Servidor rodando em http://${config.host}:${config.port}/`)
})
}

App()