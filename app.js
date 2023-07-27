const express = require("express")
const cors = require("cors")
const collection = require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// now to get data

app.get("/",cors(),(req,res) => {

})

app.post("/",async(req,res) => {
    const {Name} = req.body
    const {Email} = req.body
    const {Phone} = req.body
    const {Visited} = req.body
    const {Date} = req.body
    const {Feedback} = req.body
    const {Suggestion} = req.body
    const {Rating} = req.body
    const {WantToVisit} = req.body
    const {Comment} = req.body
    

    const data = {
        Name : Name,
        Email : Email,
        Phone : Phone,
        Visited : Visited,
        Date : Date,
        Feedback : Feedback,
        Suggestion : Suggestion,
        Rating : Rating,
        WantToVisit : WantToVisit,
        Comment: Comment 
    }
    // now store in mongoDB

    await collection.insertMany([data])
})

app.listen(8010,() => {
    console.log("Port Connected")
})