const mongoose = require('mongoose')

async function connectDB() {
  const uri = process.env.MONGO_URI || ''
  if (!uri) {
    console.warn('MONGO_URI not set; skipping MongoDB connection')
    return
  }

  await mongoose.connect(uri, {
    // default options are fine for mongoose 7+
  })
  console.log('Connected to MongoDB')
}

module.exports = connectDB
