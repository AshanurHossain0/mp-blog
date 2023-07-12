require('dotenv').config();

const express=require("express");
const mongoose=require('mongoose');
const route=require("./routes/route")
const cors=require("cors");

mongoose.set('strictQuery', true);
const app=express();

app.use(express.json());
app.use(cors())



mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{console.log("MongoDB is connected")})
.catch((err)=>{console.log(err.message)})

app.use("/",route)

app.listen(process.env.PORT || 3000,(err)=>{
    if(err) return console.log(err.message)
    console.log("server is running on port : ",process.env.PORT || 3000)
})