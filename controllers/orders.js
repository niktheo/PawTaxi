// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
//================
//customer
//================
router.get('/create', (req, res) => {
  res.send('Hello from create')
})
router.post('/', (req, res) => {
  res.send('Hello')
})
//================
//driver
//================
router.get('/', (req, res) => {
  res.send('Hello from driver orders')
})
router.patch('/:id', async (req, res) => {})
// Export
module.exports = router
