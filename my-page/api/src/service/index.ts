import express from 'express'
import cors from 'cors'
import {config} from '../config/default'
import Administrador from '../db/connect'


export class Service{
  app
  connect =  Administrador
  constructor(){
      this.connect
      this.app = express()
      this.app.use(cors())
      this.app.use(express.json())
      this.app.use(express.urlencoded({extended: false}))
      this.app.listen(config.port, ()=>{console.log(`server http://${config.host}:${config.port}/ rodando na porta ${config.port}`)})
  }
}
