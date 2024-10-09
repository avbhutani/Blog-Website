const jwt = require('jsonwebtoken')
require('dotenv').config()

// Middleware to check JWT token from cookies
const Auth = (req, res, next) => {
    // const token = req.headers['authorization'].split(' ')[1]
    const token = req.cookies.token
    try {
        jwt.verify(token,process.env.JWT_KEY)
        next()
    }
    // else return, throw an error.
    catch(error) {
        return res.send({message:"not ok"})
    }
};


module.exports = Auth