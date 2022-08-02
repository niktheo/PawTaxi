const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('orders', {
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  customer: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  animal: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  driver: {
    type: ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
})
