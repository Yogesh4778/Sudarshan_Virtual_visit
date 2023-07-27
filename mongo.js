const mongoose = require("mongoose")

// define database
mongoose.connect('mongodb://0.0.0.0:27017/feedbackdata')
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log(err.message);
})

const newSchema = new mongoose.Schema({
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
    Visited:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Feedback:{
        type:String,
        required:true
    },
    Suggestion:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    WantToVisit:{
        type:String,
        required:true
    },
    Comment:{
        type:String,
        required:true
    }
})

// create collection
const collection = mongoose.model("collection",newSchema)


module.exports = collection