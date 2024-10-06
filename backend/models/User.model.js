const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// Creating the user schema.
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    }
})

UserSchema.pre('save',async function(next){
    const user = this;
    if (user.isModified('password')) {
        try {
            // Perform your pre-computation (e.g., hashing the password)
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        } catch (error) {
            return next(error); // Pass error to next middleware if any
        }
    }

    // Proceed to the next middleware or the save operation
    next();
})

const User = mongoose.model('User',UserSchema)
module.exports = User