// Packages
const express = require('express')
const router = express.Router()
const Users = require ('../models/users')

// Views
// Create here a controller that accepts GET requests and renders the "search" page

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', async (req, res) => {})



router.post('/signup', async(req, res, next) => {
  let founduser= await Users.findOne({
      email: req.body.email
  })
  try {
      if (founduser) {
          throw new Error('Account already exists')
      } else {
          let user = await Users.create(req.body)
          req.login(user, (err) => {
              if (err) {throw error}
              if(user.car){
                res.redirect('/orders') 
              } else {
                res.redirect('/orders/create')
              }
          })
      }
  } catch (err) {
      next (err)
  } 
})// Export
module.exports = router
