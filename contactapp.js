const express = require("express")
const cors = require("cors")
const collection = require("./ContactSchema")
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
    const {Message} = req.body
    

    const data = {
        Name : Name,
        Email : Email,
        Phone : Phone,
        Message: Message
    }
    // now store in mongoDB

    await collection.insertMany([data])
})

app.listen(3797,() => {
    console.log("Port Connected")
})