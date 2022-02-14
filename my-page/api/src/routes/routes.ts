import {Express, Request, Response} from 'express'
import Administrador from '../models/model'
import { Service } from '../service'

export class Route extends Service {
  
  constructor(){
    super()
    this.routersGet()
    this.routerPost()
    this.routeDelet()
  }
  routersGet(){
      this.app.get('/', (req: Request, res: Response):void =>{
      res.send('hello World')
    })
    this.app.get('/articles', async(req: Request, res: Response) =>{
      try {
        const article = await Administrador.find()
        res.status(200).json(article)
      } catch (error) {
        res.status(500).json({message: error}) 
      }
    })
  }
  routerPost(){
    this.app.post('/add-article', async (req: Request, res: Response)=>{
      
      const {tittle, text} = req.body
      const article = {
        tittle,
        text
      }
      try {
        await Administrador.create(article)
        res.status(200).json({message: 'Artigo criado com sucesso.'})
      } catch (error) {
        res.status(501).json({err: error})
      }
     
    })
  }
  routeDelet(){
    this.app.delete('/delete/:id', async (req: Request, res: Response) =>{
      const id = req.params.id
      const article = Administrador.findOne({_id: id})
      try {
        await Administrador.deleteOne({_id: id})
        res.send(202).json({message: 'apagou tudo'})
      } catch (error) {
        res.status(500).json({message: 'rota errada'})
      }
    })
    
  }
}
