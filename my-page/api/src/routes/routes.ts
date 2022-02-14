import { Express, Request, Response } from 'express'
import Administrador from '../models/model'
import { Service } from '../service'
import { Upload } from '../upload/upload'

export class Route extends Service {

  upload: any

  constructor() {
    super()
    this.routersGet()
    this.routerPost()
    this.routeDelet()
  }
  routersGet() {
    this.app.get('/', (req: Request, res: Response): void => {
      res.send('hello World')
    })
    this.app.get('/articles', async (req: Request, res: Response): Promise<any> => {
      try {
        const article = await Administrador.find()
        res.status(200).json(article)
      } catch (error) {
        res.status(500).json({ message: error })
      }
    })
  }
  routerPost() {
    const upload = new Upload().upload
    this.app.post('/add-article', upload.single('file'), async (req: Request, res: Response): Promise<any> => {

      const { tittle, text, img } = req.body
      const article = {
        tittle,
        text,
        img
      }
      try {
        await Administrador.create(article)
        res.status(200).json({ message: 'Artigo criado com sucesso.' })
      } catch (error) {
        res.status(501).json({ err: error })
      }

    })
  }
  routeDelet() {
    this.app.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
      const id = req.params.id
      const article = Administrador.findOne({ _id: id })
      try {
        await Administrador.deleteOne({ _id: id })
        res.send(202).json({ message: 'apagou tudo' })
      } catch (error) {
        res.status(500).json({ message: 'rota errada' })
      }
    })

  }
}
