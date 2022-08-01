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
  let orders = await Orders.find({})
  console.log(orders)
  res.render('./one', { user: req.user, orders })
})
router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      req.body.customer = req.user._id
      let order = await Orders.create(req.body)
    }
  } catch (err) {
    next(err)
  }
})
//================
//driver
//================
router.get('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated() && req.user.car) {
      let orders = await Orders.find({
        $or: [
          {
            driver: req.user._id
          },
          {
            driver: undefined
          }
        ]
      }).populate('customer driver')
      res.render('list', { user: req.user, orders })
    } else {
      res.redirect('/auth')
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    await Orders.findByIdAndUpdate(req.params.id, {
      driver: req.user._id
    })
    res.redirect('/orders')
  } catch (err) {
    next(err)
  }
})
// Export
module.exports = router
