// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page

router.get('/', (req, res) => {
  res.send('Hello form login')
})
router.get('/singup', (req, res) => {
  res.send('Hello form signup')
})

router.post('/login', async (req, res) => {})
router.post('/singup', async (req, res) => {})
// Export
module.exports = router
