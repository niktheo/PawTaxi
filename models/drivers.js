const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('drivers', {
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
  }
})
