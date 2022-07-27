// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
// Views
// Create here a controller that accepts GET requests and renders the "search" page
//================
//customer
//================
router.get('/create', (req, res) => {
  res.render('./create', { user: req.user })
})
router.get('/:id', async (req, res) => {
  res.render('./one', { user: req.user })
})
router.post('/', (req, res) => {
  res.send('Hello')
})
//================
//driver
//================
router.get('/', (req, res) => {
  res.render('./list', { user: req.user })
})
router.patch('/:id', async (req, res) => {})
// Export
module.exports = router
