// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Views
// Create here a controller that accepts GET requests and renders the "search" page

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', async (req, res, next) => {
  let foundaccount = await Users.findOne({
    email: req.body.email,
    password: req.body.password
  })
  try {
    if (foundaccount) {
      req.login(foundaccount, err => {
        if (err) {
          throw err
        }
        // check if account belongs to driver
        if (foundaccount.car) {
          res.redirect('/orders')
        } else {
          res.redirect('/orders/create')
        }
      })
    } else {
      throw new Error('Email or Password is wrong')
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  let founduser = await Users.findOne({
    email: req.body.email
  })
  try {
    if (founduser) {
      throw new Error('Account already exists')
    } else {
      let userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      }

      // check if user signup as driver
      if (
        req.body.car_plate !== undefined &&
        req.body.car_model !== undefined &&
        req.body.car_color !== undefined
      ) {
        userData.car = {
          plate: req.body.car_plate,
          model: req.body.car_model,
          color: req.body.car_color
        }
      }

      let user = await Users.create(userData)

      req.login(user, err => {
        if (err) {
          throw error
        }
        if (user.car) {
          res.redirect('/orders')
        } else {
          res.redirect('/orders/create')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

router.get('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    res.redirect('/auth')
  })
})


// Export
module.exports = router
