const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


async function LoginUser(req, res) {
    try {
            const {username,password} = req.body
            username.toLowerCase()
            const user = await User.findOne({username})
            if(!user){
                throw new Error ('Invalid Credentials!')
            }
            const isMatch = bcrypt.compareSync(password,user.password)
            if(!isMatch){
                throw new Error('Invalid Credentials.')
            }
            jwt.sign({id:user._id,username},process.env.JWT_KEY,{expiresIn:500},(err,token)=> {
                res.cookie('token', token, {
                    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
                    secure: process.env.NODE_ENV === 'production', // Send cookie only over HTTPS in production
                    sameSite: 'strict' // Helps mitigate CSRF attacks
                });
                return res.send({message:"Logging In... Please Wait."})
            })
    }
    catch(error) {
        return res.send({message:'Wrong Password. Try Again.'})
    }
}

module.exports = LoginUser