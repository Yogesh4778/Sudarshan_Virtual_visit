const mongoose= required('mongoose')

const connectDatabse =()=>{
    mongoose.connect('mongodb://localhost:27017',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(con => {
        console.log(`mongodb is connected with host: ${con.connection.host}`)
    })
}
module.exports=connectDatabse;