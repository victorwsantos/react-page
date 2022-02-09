import {Router} from 'express'

class Route{
  router = Router()
  constructor(){
    this.routeGet()
    this.routePost()
  }
  routeGet(){
    this.router.get('/', (req, res) => {
      res.send('Hello World')
    })

    this.router.get('/artigos', (req, res) => {
      res.send('rota2')
  })
  }
  routePost(){
    this.router.post('/add-article', (req, res) => {
      
      const {tittle, text} = req.body

      const article = {
        tittle,
         text}

         
       
      res.status(201).json({messege: `${tittle} criado com sucesso`})
      console.log(article)
    })

    this.router.post('/rota', (req, res) => {
      res.send('rota2 post')
  })
  }
}

const router = new Route().router

 
  export default router