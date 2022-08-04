// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Orders = require('../models/orders')
const moment = require('moment')
// Views
// Create here a controller that accepts GET requests and renders the "search" page
//================
//customer
//================
router.get('/create', (req, res) => {
  res.render('./create', {
    user: req.user,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })
})

router.get('/:id', async (req, res) => {
  let order = await Orders.findById(req.params.id)
    .populate('customer driver')
    .lean()
  let time = order.date
  console.log(time)
  let finalDate = moment.utc(`${time}`).format('lll')
  order.date = finalDate
  res.render('./one', { user: req.user, order })
})

router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      req.body.customer = req.user._id
      let order = await Orders.create(req.body)
      res.redirect(`/orders/${order._id}`)
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
      let openOrders = await Orders.find({
        driver: undefined
      })
        .populate('customer')
        .sort('-date')
        .lean()

      openOrders.forEach((elem, i) => {
        finalDate = moment.utc(`${elem.date}`).format('lll')
        elem.date = finalDate
      })

      console.log(openOrders)
      let acceptedOrders = await Orders.find({
        driver: req.user._id
      })
        .populate('customer driver')
        .sort('-date')
        .lean()

      acceptedOrders.forEach((elem, i) => {
        finalDate = moment.utc(`${elem.date}`).format('lll')
        elem.date = finalDate
      })

      res.render('list', { user: req.user, openOrders, acceptedOrders })
    } else {
      res.redirect('/auth')
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    console.log('about to update', req.params.id)
    let updatedOrder = await Orders.findByIdAndUpdate(
      req.params.id,
      {
        driver: req.user._id
      },
      { new: true }
    )
    console.log({ updatedOrder })
    res.redirect('/orders')
  } catch (err) {
    next(err)
  }
})
// Export
module.exports = router
