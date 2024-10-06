const User = require('../models/User.model')

async function RegisterUser(req,res) {
    const {email,username,password} = req.body
    console.log(email + " " + username + ' ' + password);

    try {
    const user = await User.findOne({username})
    const user2 = await User.findOne({username})

    if(user || user2) {
        res.sendStatus(401)
        return
    }
}
catch(error) 
{
    res.sendStatus(401)
    return
}

    try {
        const userSaved = await newUser.save()
        console.log(`User Created Successfully.`)
        res.sendStatus(200)
    }
    catch(e) {
        console.log(e)
        res.sendStatus(400)
    }
    
}

module.exports = RegisterUser