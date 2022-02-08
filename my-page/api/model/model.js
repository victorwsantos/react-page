const mongoose = require('mongoose')

const Admin = mongoose.model('administrador', {
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

module.exports = Admin