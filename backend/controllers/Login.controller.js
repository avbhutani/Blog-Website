const User = require('../models/User.model')
const bcrypt = require('bcrypt')


async function LoginUser(req, res) {
    try {
            const {username,password} = req.body
            const user = await User.findOne({username})
            if(!user){
                throw new Error ('Invalid Credentials!')
            }
            const isMatch = bcrypt.compareSync(password,user.password)
            if(!isMatch){
                throw new Error('Invalid Credentials.')
            }
            return res.send({message:'Logging in... Please Wait.'})
    }
    catch(error) {
        res.status(404).send({msg:error.message})
    }
}






module.exports = LoginUser