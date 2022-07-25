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
    ref: 'customers',
    required: true
  },
  type: {
    type: ObjectId,
    ref: 'animals',
    required: true
  },
  size: {
    type: ObjectId,
    ref: 'animals',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  customer: {
    type: ObjectId,
    ref: 'drivers'
  }
})
