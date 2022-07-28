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
//router.post('/', (req, res) => {
  //res.send('Hello')
//})
//================
//driver
//================
router.get('/', async (req, res) => {
  let orders = await Orders.find({}).populate('customer')
  res.render('./list', { user: req.user, orders})
})


router.patch('/:id', async (req, res, next) => {
  try {
  console.log(req.user._id)
    await Orders.findByIdAndUpdate(req.params.id, {
    driver: req.user._id
  })
  res.redirect('/orders')
  } catch (err) {
    next (err)
  }
})
// Export
module.exports = router
