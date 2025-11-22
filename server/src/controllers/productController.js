const mongoose = require('mongoose')
const Product = require('../models/productModel')

function normalize(doc) {
  if (!doc) return null
  const { _id, __v, ...rest } = doc
  return { id: String(_id), ...rest }
}

exports.getAll = async (req, res) => {
  try {
    const ready = mongoose.connection && mongoose.connection.readyState === 1
    if (!ready) {
      return res.status(503).json({ error: 'Service unavailable: database not connected' })
    }

    const products = await Product.find().lean()
    res.json(products.map((p) => normalize(p)))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getById = async (req, res) => {
  try {
    const ready = mongoose.connection && mongoose.connection.readyState === 1
    if (!ready) {
      return res.status(503).json({ error: 'Service unavailable: database not connected' })
    }

    const product = await Product.findById(req.params.id).lean()
    if (!product) return res.status(404).json({ error: 'Not found' })
    res.json(normalize(product))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// For now we only expose GET routes as requested. Create/update/delete
// can be added later if needed.
