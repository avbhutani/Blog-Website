const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

// Controller for Registering the User.
async function RegisterUser(req, res) {
  try {
    const { email, username, password } = req.body;
    const newUser = new User({ email, username, password });
    await newUser.save()
    return res.send({message:'Registered User Sucessfully!',status:200})
  } catch (error) {
    return res.send({ message: "User Already Registered!",error:error.message,errorCode:error.code,status:500});
  }
}

module.exports = RegisterUser;