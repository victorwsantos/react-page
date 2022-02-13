const mongoose = require('mongoose')

const ArticleModel = mongoose.model('articles', {
  tittle: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  }
})

module.exports = ArticleModel