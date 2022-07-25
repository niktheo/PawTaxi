const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('animals', {
  type: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  }
})
