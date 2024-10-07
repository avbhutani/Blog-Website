const User = require('../models/User.model')
const bcrypt = require('bcrypt')

async function LoginUser(req, res) {
    // return res.send({message:"heello bro"})

    try {
            const {username,password} = req.body
            const user = await User.findOne({username})
            
            const isMatch = bcrypt.compareSync(password,user.password)

            if(isMatch)
            return res.send({message:'Logging in...'})
            else
            return res.send({message:'Wrong Password! Try Again!'})
    }
    catch(error) {
        res.send({message:'User Not Found! Kindly Register!',error:error.message,status:500})
    }

}


module.exports = LoginUser