const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const handlebars = require('express-handlebars')
const passport = require('passport')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')

dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

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

//sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
