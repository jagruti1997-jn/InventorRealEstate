const express=require('express')
const bodyParser=require('body-parser')
const app=express()
require('dotenv').config();
app.use(bodyParser.json())
const port=process.env.PORT
const api=require('./index.js')



const mongoose=require('mongoose')
require('./database/db.js')



const loginRoutes=require("./routers/login.js")





//all routes calling
app.use("/api/v1",loginRoutes) 
app.use('/api/v1',api)



app.listen(port,()=>{
    console.log("server is running at 9000")
})