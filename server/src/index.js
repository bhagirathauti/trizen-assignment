const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const searchRoutes = require('./routes/searchRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => res.json({ status: 'ok', name: 'Trizen-Assignment API' }))

app.use('/api/products', productRoutes)
// Search endpoint (GET /search?q=term)
app.use('/search', searchRoutes)

const PORT = process.env.PORT || 4000

// Try to connect to DB but don't crash app if DB is not reachable
connectDB().catch((err) => {
  console.warn('DB connection failed (continuing without DB):', err.message)
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = app
