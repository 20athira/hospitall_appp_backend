const express=require("express")
const cors=require("cors")
const  mongoose=require("mongoose")

const app=express()
const hospitalRoute=require("./controller/hospitalRouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AthiraRam:athira235@cluster0.orujzdx.mongodb.net/hospitaldb?retryWrites=true&w=majority",{
   useNewUrlParser:true
}
)


app.use("/api/hospitals",hospitalRoute)

app.listen(3001,()=>{
    console.log("Server running")
})