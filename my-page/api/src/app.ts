import { Route } from "./routes/routes"
import { config } from './config/default'


const apl = new Route().app
const host = config.host
const port = config.port

apl.listen(config.port, () => {
  console.log(`server http://${host}:${port}/ rodando na porta ${port}`)
})