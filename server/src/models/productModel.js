const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    image: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
