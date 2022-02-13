import {Express, Request, Response} from 'express'
import Administrador from '../db/connect'
import { Service } from '../service'

export class Route extends Service {
  
  constructor(){
    super()
    this.routersGet()
    this.routerPost()
  }
  routersGet(){
      this.app.get('/', (req: Request, res: Response):void =>{
      res.send('hello World')
    })
    this.app.get('/user', (req: Request, res: Response):void =>{
      res.send('hello World user')
    })
  }
  routerPost(){
    this.app.post('/add-article', (req: Request, res: Response)=>{
      
      const {tittle, text} = req.body
      const article = {
        tittle,
        text
      }
      Administrador.create(article).then(() => {
        res.send('Artigo criado com sucesso.')
      }).catch((err: string) => {
        console.log(err)
      })
      
      
    })
  }
}
