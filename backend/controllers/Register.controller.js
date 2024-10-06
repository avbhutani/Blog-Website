const User = require('../models/User.model')

function RegisterUser(req,res) {
    const {email,username,password} = req.body
    console.log(email + " " + username + ' ' + password);
    
    if(User.findOne({email}) || User.findOne({username})) {
        res.sendStatus(401)
        return;
    }
    const newUser = new User({email,username,password})
    // await newUser.save()
    newUser.save()
    .then(()=> {
        console.log('User Saved Successfully!')
        res.sendStatus(200)
    })
    .catch((error)=> {
        console.log(error)
        res.sendStatus(400)
    })
}

module.exports = RegisterUser