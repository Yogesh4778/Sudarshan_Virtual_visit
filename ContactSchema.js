const mongoose = require("mongoose")

// define database
mongoose.connect('mongodb://0.0.0.0:27017/contactdata')
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log(err.message);
})

const newSchemacontact = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
})

// create collection
const collection = mongoose.model("collection",newSchemacontact)
// above line 12 newSchema and here newSchema name must be same

module.exports = collection