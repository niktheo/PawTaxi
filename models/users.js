const mongoose = require('mongoose')
//const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('users', {
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  car: {
    type: new mongoose.Schema({
      plate: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      }
    }),
    required: false,
  }
})
