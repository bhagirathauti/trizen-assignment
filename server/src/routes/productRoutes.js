const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

// Only GET routes are exposed for products per request
router.get('/', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router
