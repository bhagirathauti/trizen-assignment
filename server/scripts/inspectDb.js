const mongoose = require('mongoose')
require('dotenv').config()

async function run() {
  const uri = process.env.MONGO_URI
  if (!uri) {
    console.error('MONGO_URI not set in environment (see .env.example)')
    process.exitCode = 2
    return
  }

  try {
    // ensure model definitions are registered
    try {
      require('../src/models/productModel')
    } catch (e) {
      // if model file isn't present or has errors, surface a clearer message
      console.error('Failed to load product model:', e.message)
      process.exitCode = 4
      return
    }

    await mongoose.connect(uri)
    console.log('Connected to MongoDB')

    const Product = mongoose.model('Product')
    const count = await Product.countDocuments()
    console.log(`products collection document count: ${count}`)

    if (count > 0) {
      const first = await Product.findOne().lean()
      // normalize _id to id for readability
      const { _id, __v, ...rest } = first
      console.log('First document sample:', { id: String(_id), ...rest })
    } else {
      console.log('products collection is empty')
    }

    // ALSO list collections and query the raw collection to verify there isn't
    // a mismatch between the mongoose model-backed collection and the raw DB.
    try {
      const db = mongoose.connection.db
      console.log('Connected database:', db.databaseName)
      const collections = await db.listCollections().toArray()
      console.log('Collections in DB:', collections.map((c) => c.name))

      const rawCount = await db.collection('products').countDocuments()
      console.log(`raw products collection count (direct DB query): ${rawCount}`)
      if (rawCount > 0) {
        const rawFirst = await db.collection('products').findOne()
        const { _id, ...rest } = rawFirst
        console.log('Raw first doc sample (direct DB):', { id: String(_id), ...rest })
      }
    } catch (e) {
      console.warn('Raw DB inspection failed:', e.message)
    }
  } catch (err) {
    console.error('Error inspecting DB:', err.message)
    process.exitCode = 3
  } finally {
    await mongoose.disconnect()
  }
}

run()
