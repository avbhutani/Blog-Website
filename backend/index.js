const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const env= require('dotenv').config()
const cookieParser = require('cookie-parser')
const AuthRoutes = require('./routes/Auth.routes')
const UserRoutes = require('./routes/User.routes')
const MainAppRoutes = require('./routes/MainApp.routes')
const AdminRoutes = require('./routes/Admin.routes')
require('./db/connect')

// CORS - Cross Origin Request Service - Without this, 2 different URL's can't contact each other.
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow custom headers
}));

// This is essential so as to send the json over the request, as without it
// the user will not be able to cater to the request.
app.use(bodyParser.json())

// For Passing Cookies
app.use(cookieParser())

// Auth Routes
app.use(AuthRoutes)

// User Routes
app.use(UserRoutes)

// Main Application Routes
app.use(MainAppRoutes)

// Admin Routes
app.use(AdminRoutes)

app.listen(env.PORT || 4000,function() {
    console.log(`Listening on port ${env.PORT || 4000}`)
})