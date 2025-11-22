const mongoose = require('mongoose')
const Product = require('../models/productModel')

function normalize(doc) {
  if (!doc) return null
  const { _id, __v, ...rest } = doc
  return { id: String(_id), ...rest }
}

exports.search = async (req, res) => {
  const q = (req.query.q || '').toString().trim()
  if (!q) return res.status(400).json({ error: 'Missing query parameter q' })

  const ready = mongoose.connection && mongoose.connection.readyState === 1
  if (!ready) {
    return res.status(503).json({ error: 'Service unavailable: database not connected' })
  }

  try {
    // Use a case-insensitive regular expression for partial matches
    const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
    const results = await Product.find({ name: { $regex: regex } }).limit(5).lean()
    res.json(results.map((r) => normalize(r)))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
