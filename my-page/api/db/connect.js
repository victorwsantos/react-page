const log= require('../logger')
const mongoose = require('mongoose')
const config = require('../config/default')


function connect(){
  return mongoose.connect(config.dbUrl).then(()=>{
    log.info('Banco de dados conectado com sucesso')
  }).catch((err)=>{
    log.info(`Erro: ${err}`)
  })
}

export default connect()