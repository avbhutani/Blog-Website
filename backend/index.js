const express = require('express')
const jwt = require('jsonwebtoken')
const cookieSession = require('cookie-session')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const env= require('dotenv').config()
const RegisterUser = require('./controllers/Register.controller')
const LoginUser = require('./controllers/Login.controller')
const cookieParser = require('cookie-parser')
const Auth = require('./middlewares/Auth.middleware')
require('./db/connect')


// app.set(
//     'trust proxy',true
// )

// This is essential so as to send the json over the request, as without it
// the user will not be able to cater to the request.
app.use(bodyParser.json())

// this is used so that the frontend will be able to communicate with 
// the backend, the cors issue will arise, if this is not used properly.
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // If you are using cookies or HTTP authentication
  }));

// app.use(cookieSession({
//     signed:false,
//     secure:false
// }))
// Used for connecting the database.
// app.use(connectDB)
// setting up the api's.

app.use(cookieParser())


app.post('/',Auth,function(req,res) {
    res.status(200).send({message:'Port working fine'})
})


// Registering the user.
app.post('/register',RegisterUser)


// Logging the user.
app.post('/login',Auth,LoginUser)


app.post('/profile',Auth,(req,res)=> {
    res.send({message:'Verified'})
})


// setting the app.listen(port), that is the port that the server will be
// listening for connections at.
app.listen(env.PORT || 4000,function() {
    console.log(`Listening on port ${env.PORT || 4000}`)
})