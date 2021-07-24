const express = require("express")
const morgan = require("morgan")
const {v4: uuidv4 } =  require('uuid')
const fs = require('fs')
const path = require('path')

const app = express()

morgan.token('id',function getid(req){
    return req.id
}) 

morgan.token('param',(req,res,param)=>{
    return "userToken"
})

//assign id 
app.use((req,res,next)=>{
    req.id = uuidv4();
    next() 
})

let accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'), {flags: 'a'})

app.use(morgan(':id :param :method :status :url "HTTP/:http-version"'))
app.use(morgan(':id :param :method :status :url "HTTP/:http-version"',{ stream: accessLogStream}))

app.get("/",(req,res)=>{
    res.send("Morgan Logger app")
})


app.listen(5000)