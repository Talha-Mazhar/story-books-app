const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.use('/', (req, res) => {
    res.send('Dashboard')
})
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
