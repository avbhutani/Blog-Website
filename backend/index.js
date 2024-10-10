const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const env= require('dotenv').config()
const RegisterUser = require('./controllers/Register.controller')
const LoginUser = require('./controllers/Login.controller')
const cookieParser = require('cookie-parser')
const Auth = require('./middlewares/Auth.middleware')
const LogoutUser = require('./controllers/Logout.controller')
require('./db/connect')


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  // Allow credentials
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow custom headers
}));
// This is essential so as to send the json over the request, as without it
// the user will not be able to cater to the request.
app.use(bodyParser.json())

app.use(cookieParser())

// this is used so that the frontend will be able to communicate with 
// the backend, the cors issue will arise, if this is not used properly.



app.post('/',Auth,function(req,res) {
    res.status(200).send({message:'Port working fine'})
})


// Registering the user.
app.post('/register',RegisterUser)


// Logging the user.
app.post('/login',LoginUser)


app.get('/profile',(req,res)=> {
    const token = req.cookies.token
    try {
        jwt.verify(token,process.env.JWT_KEY)
        const user = jwt.decode(token)
        console.log(user)
        res.status(200).send({username:user.username,id:user.id})
    }
    catch(error) {
        res.status(401).send({message:'Unauthorized'})
    }
})

app.post('/logout',LogoutUser)



// setting the app.listen(port), that is the port that the server will be
// listening for connections at.
app.listen(env.PORT || 4000,function() {
    console.log(`Listening on port ${env.PORT || 4000}`)
})