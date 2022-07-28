// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Orders = require('../models/orders')

// Views
// Create here a controller that accepts GET requests and renders the "search" page
//================
//customer
//================
router.get('/create', (req, res) => {
  res.render('./create', { user: req.user })
})
// router.post('/create', async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err)
//   }
// })
router.get('/:id', async (req, res) => {
  res.render('./one', { user: req.user })
})
router.post('/', (req, res) => {
  res.send('Hello')
})
//================
//driver
//================
router.get('/', async (req, res) => {
  let orders = await Orders.find({}).populate('customer')
  console.log(orders)
  res.render('./list', { user: req.user, orders})
})
router.patch('/:id', async (req, res) => {})
// Export
module.exports = router
