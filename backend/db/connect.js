const mongoose = require('mongoose')

// Promise connecting to the database.
mongoose.connect(process.env.MONGO_URI) 

// if the promise is resolved, then return this;
.then(() => {
    console.log(`Connected to the database.`)
})

// if not resolved, then catch the error in it.
.catch((error)=> {
    console.log(`Database Connection Issue ` + error)
})