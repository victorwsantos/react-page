import { config } from './config/default'
import { Route } from './routes/routes'
import app from './service/index'

const apppl = new Route(app)

const host = config.host
const port = config.port

apppl.app.listen(config.port, () => {
  console.log(`server http://${host}:${port}/ rodando na porta ${port}`)
})