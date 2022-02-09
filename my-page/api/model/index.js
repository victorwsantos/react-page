import connect from '../db/connect'
const mongoose = require('mongoose')

class Articles{
  constructor(){
    this.article = mongoose.model('articles', {
      title: {
        type: String,
        require: true
      },
      subtitle: {
        type: String,
        require: true
      },
      text: {
        type: String,
        require: true
      }
    })
  }
}

export default Articles().article