const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const handlebars = require('express-handlebars')

dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Set handlebars Middleware
// Configure Handlebars
const hbs = handlebars.create({
    extname: 'handlebars',
    layoutsDir: path.join(__dirname, 'views/layouts'), // Use path.join for dynamic resolution
    partialsDir: path.join(__dirname, 'views/partials'), // Use path.join for dynamic resolution
    helpers: {
        // Add your custom Handlebars helpers here (optional)
    },
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
