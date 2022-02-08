export default class DefaultConfig{
    port = 3005
    host = 'localhost'
    dbUrl = 'mongodb://localhost/artigos'
  
  constructor(port, host, dbUrl){
    port = this.port
    host = this.host
   dbUrl = this.dbUrl
  }
}

 
