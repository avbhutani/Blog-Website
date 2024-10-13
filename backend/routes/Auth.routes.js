const express = require('express')
const AuthRoutes = express()
const RegisterUser = require('../controllers/Register.controller')
const LoginUser = require('../controllers/Login.controller')


AuthRoutes.post('/register',RegisterUser)

// Logging the user.
AuthRoutes.post('/login',LoginUser)

AuthRoutes.post('/logout',(req,res)=> {
    const token = req.cookies.token
    if (token) {
        // Clear the 'token' cookie, make sure options match those used when setting the cookie
        res.clearCookie('token', {
            path: '/',        // Ensure the path matches how the cookie was set
            httpOnly: true,   // Match HttpOnly flag if it was set
            secure: true,     // Match Secure flag (only for HTTPS)
            sameSite: 'None'  // Match SameSite attribute if applicable
        });
    }
    return res.status(200).send('Logged out'); 
})

module.exports = AuthRoutes