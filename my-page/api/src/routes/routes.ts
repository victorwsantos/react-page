import {Express, Request, Response} from 'express'
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
    this.app.post('/', (req: Request, res: Response)=>{
      res.send('rota post')
    })
  }
}
