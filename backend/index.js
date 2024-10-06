const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const env= require('dotenv').config()
const RegisterUser = require('./controllers/Register.controller')
const LoginUser = require('./controllers/Login.controller')
require('./db/connect')


// This is essential so as to send the json over the request, as without it
// the user will not be able to cater to the request.
app.use(bodyParser.json())

// this is used so that the frontend will be able to communicate with 
// the backend, the cors issue will arise, if this is not used properly.
app.use(cors())

// Used for connecting the database.
// app.use(connectDB)
// setting up the api's.

app.get('/',(req,res)=> {
    res.sendStatus(200).json({"Message":"Send Request to Particular APIs"})
})


// Registering the user.
app.post('/register',RegisterUser)


// Logging the user.
app.post('/login',LoginUser)


// setting the app.listen(port), that is the port that the server will be
// listening for connections at.
app.listen(env.PORT || 4000,function() {
    console.log(`Listening on port ${env.PORT || 4000}`)
})